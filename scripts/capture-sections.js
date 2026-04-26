#!/usr/bin/env node
/**
 * capture-sections.js
 *
 * Per-section element screenshots from a source URL. Two viewports
 * (desktop 1440×900, mobile 390×844 @2×). For each pass:
 *
 *   1. Launch headless Chrome.
 *   2. goto(url, { waitUntil: 'networkidle2' }).
 *   3. Slow-scroll top→bottom (200 px / 300 ms) to trigger
 *      IntersectionObserver-driven animations + lazy loads.
 *   4. Scroll back to top, settle 2000 ms.
 *   5. Enumerate section elements via a fallback selector chain;
 *      abort with diagnostic counts if none hits the 15–25 range.
 *   6. For each section element, scrollIntoView, settle 500 ms,
 *      then element.screenshot to source/crops/section-NN-<viewport>.png.
 *   7. Record class list + first 80 chars of innerText per section.
 *
 * Output:
 *   source/crops/section-01-desktop.png ... section-NN-desktop.png
 *   source/crops/section-01-mobile.png  ... section-NN-mobile.png
 *
 * No boundary detection, no full-page cropping. Each section is its own PNG.
 *
 * Usage:
 *   node scripts/capture-sections.js [url]
 *
 * Defaults to botaniqueparis.com if no URL given.
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// CLI parsing: positional URL arg + --reveal-strategy={b|none}.
// Strategy B (default) = computed-style force-visible sweep over every element.
// Strategy 'none'      = raw capture, no neutralization (debug).
// Strategy A (page.setJavaScriptEnabled(false)) was removed — incompatible with
// Puppeteer's CDP-driven page.evaluate / page.$$.
const ARGS = process.argv.slice(2);
const POSITIONAL = ARGS.filter((a) => !a.startsWith('--'));
const FLAG_RE = /^--([a-z-]+)(?:=(.*))?$/;
const FLAGS = Object.fromEntries(
  ARGS.filter((a) => a.startsWith('--'))
    .map((a) => a.match(FLAG_RE))
    .filter(Boolean)
    .map((m) => [m[1], m[2] ?? true]),
);
const SOURCE_URL = POSITIONAL[0] || 'https://botaniqueparis.com/';
const REVEAL_STRATEGY = (FLAGS['reveal-strategy'] || 'b').toString().toLowerCase();
if (!['b', 'none'].includes(REVEAL_STRATEGY)) {
  console.error(`Invalid --reveal-strategy=${REVEAL_STRATEGY}. Allowed: b, none`);
  process.exit(2);
}
const REPO_ROOT = path.resolve(__dirname, '..');
const CROPS_DIR = path.join(REPO_ROOT, 'source', 'crops');

const PASSES = [
  {
    label: 'desktop',
    viewport: { width: 1440, height: 900, deviceScaleFactor: 1 },
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36',
  },
  {
    label: 'mobile',
    viewport: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
  },
];

const SELECTORS = [
  'main > section',
  'main > div > section',
  'main > div[class*="shopify-section"]:not(.header-section):not(.footer-section)',
  '#MainContent > section',
  '#MainContent > div > section',
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function slowScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const STEP = 200;
      const PAUSE = 300;
      const tick = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (y >= max) {
          resolve();
          return;
        }
        y = Math.min(y + STEP, max);
        window.scrollTo(0, y);
        setTimeout(tick, PAUSE);
      };
      tick();
    });
  });
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(2000);
}

// Strategy B: walk every DOM element, force visible state regardless of how it
// was hidden. Skips display:none (those are intentionally absent from layout,
// not reveals). Reports element counts so the user can verify the sweep ran.
//
// Refinement: snap CSS animations to their END state (rather than killing them
// at start state). animation-delay: -9999s + duration: 0.001s + iteration-count
// = 1 + fill-mode: forwards holds the final keyframe. Same idea for transitions
// (compress to 1ms so any in-flight transition resolves immediately).
//
// transform override is selective: only neutralized when computed transform
// shows a translation > 50px in either axis (a clear off-screen-hide pattern).
// End-state transforms like a final scale(0.7) are preserved.
async function forceVisibleSweepB(page) {
  return await page.evaluate(() => {
    const all = document.querySelectorAll('*');
    let total = all.length;
    let skippedNone = 0;
    let processed = 0;
    let transformsNeutralized = 0;
    for (const el of all) {
      const cs = getComputedStyle(el);
      if (cs.display === 'none') {
        skippedNone++;
        continue;
      }
      el.style.setProperty('opacity', '1', 'important');
      el.style.setProperty('visibility', 'visible', 'important');
      el.style.setProperty('filter', 'none', 'important');
      el.style.setProperty('clip-path', 'none', 'important');
      // Snap animations + transitions to end-state instead of killing them
      el.style.setProperty('animation-delay', '-9999s', 'important');
      el.style.setProperty('animation-duration', '0.001s', 'important');
      el.style.setProperty('animation-iteration-count', '1', 'important');
      el.style.setProperty('animation-fill-mode', 'forwards', 'important');
      el.style.setProperty('transition-duration', '0.001s', 'important');
      el.style.setProperty('transition-delay', '0s', 'important');
      // Selective transform override: only kill clear off-screen translations
      try {
        const t = cs.transform;
        if (t && t !== 'none') {
          const m = new DOMMatrix(t);
          if (Math.abs(m.e) > 50 || Math.abs(m.f) > 50) {
            el.style.setProperty('transform', 'none', 'important');
            transformsNeutralized++;
          }
        }
      } catch (_) {
        // DOMMatrix parse failures (e.g. matrix3d edge cases) — leave transform alone
      }
      processed++;
    }
    return { total, processed, skippedNone, transformsNeutralized };
  });
}

async function pickSelector(page) {
  // Try each selector and return the first one whose count is in [15,25].
  // Otherwise return null and report all counts.
  const counts = {};
  let chosen = null;
  for (const sel of SELECTORS) {
    const n = await page.evaluate((s) => document.querySelectorAll(s).length, sel);
    counts[sel] = n;
    if (chosen === null && n >= 15 && n <= 25) chosen = sel;
  }
  return { chosen, counts };
}

async function capturePass(browser, pass) {
  const page = await browser.newPage();
  try {
    // CSS-level motion preference; useful when stylesheets gate reveals on this.
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);

    await page.setUserAgent(pass.userAgent);
    await page.setViewport(pass.viewport);

    process.stdout.write(`[${pass.label}] reveal strategy: ${REVEAL_STRATEGY}\n`);
    process.stdout.write(`[${pass.label}] loading ${SOURCE_URL} ...\n`);
    try {
      await page.goto(SOURCE_URL, { waitUntil: 'networkidle2', timeout: 60000 });
    } catch (err) {
      process.stdout.write(`[${pass.label}] networkidle2 timed out, retrying with networkidle0 ...\n`);
      await page.goto(SOURCE_URL, { waitUntil: 'networkidle0', timeout: 60000 });
    }

    process.stdout.write(`[${pass.label}] slow-scrolling for animations + lazy-loads ...\n`);
    await slowScroll(page);

    if (REVEAL_STRATEGY === 'b') {
      const stats = await forceVisibleSweepB(page);
      process.stdout.write(
        `[${pass.label}] Strategy-B sweep: total=${stats.total}, processed=${stats.processed}, skipped(display:none)=${stats.skippedNone}, transforms neutralized=${stats.transformsNeutralized}\n`,
      );
      // Allow layout to reflow after the sweep
      await sleep(1000);
    } else {
      process.stdout.write(`[${pass.label}] reveal strategy 'none' — skipping sweep\n`);
    }

    const { chosen, counts } = await pickSelector(page);
    process.stdout.write(`[${pass.label}] selector counts:\n`);
    for (const [s, n] of Object.entries(counts)) {
      process.stdout.write(`    ${n.toString().padStart(3)}  ${s}\n`);
    }
    if (!chosen) {
      throw new Error(
        `[${pass.label}] no selector returned 15–25 elements. Counts: ${JSON.stringify(counts)}`,
      );
    }
    process.stdout.write(`[${pass.label}] chosen selector: ${chosen}\n`);

    fs.mkdirSync(CROPS_DIR, { recursive: true });

    // Re-query in DOM and iterate
    const sectionHandles = await page.$$(chosen);
    process.stdout.write(`[${pass.label}] capturing ${sectionHandles.length} sections ...\n`);

    const records = [];
    for (let i = 0; i < sectionHandles.length; i++) {
      const handle = sectionHandles[i];
      const idx = String(i + 1).padStart(2, '0');
      const outPath = path.join(CROPS_DIR, `section-${idx}-${pass.label}.png`);

      // Pull metadata from DOM before screenshot so we don't lose handle scope
      const meta = await handle.evaluate((el) => {
        const txt = (el.innerText || '').trim().replace(/\s+/g, ' ').slice(0, 80);
        return { classes: el.className, snippet: txt };
      });

      // Scroll into view + settle for any scroll-triggered animations
      await handle.evaluate((el) => el.scrollIntoView({ block: 'start' }));
      await sleep(500);

      try {
        await handle.screenshot({ path: outPath, type: 'png' });
        const sz = fs.statSync(outPath).size;
        records.push({
          idx,
          path: outPath,
          ok: true,
          sizeKB: Math.round(sz / 1024),
          classes: meta.classes,
          snippet: meta.snippet,
        });
        process.stdout.write(
          `[${pass.label}] [${idx}] OK  ${(sz / 1024).toFixed(0).padStart(5)} KB  ${meta.snippet.slice(0, 60)}\n`,
        );
      } catch (err) {
        records.push({
          idx,
          path: outPath,
          ok: false,
          error: err.message,
          classes: meta.classes,
          snippet: meta.snippet,
        });
        process.stdout.write(`[${pass.label}] [${idx}] FAIL ${err.message}\n`);
      }
    }

    return { label: pass.label, selector: chosen, counts, records };
  } finally {
    await page.close().catch(() => {});
  }
}

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const result = {};
  try {
    for (const pass of PASSES) {
      try {
        result[pass.label] = await capturePass(browser, pass);
      } catch (err) {
        result[pass.label] = { error: err.message };
        console.error(`[${pass.label}] PASS FAILED:`, err.message);
        // Continue to the next pass — don't abort the whole run
      }
    }
  } finally {
    await browser.close().catch(() => {});
  }

  console.log('\n=== SUMMARY ===');
  console.log(JSON.stringify(result, null, 2));

  const allOk = Object.values(result).every((p) => !p.error);
  process.exit(allOk ? 0 : 1);
})();
