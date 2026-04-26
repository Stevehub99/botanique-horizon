#!/usr/bin/env node
/**
 * capture-source.js
 *
 * Two-pass full-page screenshot of a source URL via puppeteer:
 *   1. Desktop pass: 1440×900 viewport → source/desktop/fullpage.png
 *   2. Mobile pass:  390×844 viewport  → source/mobile/fullpage.png
 *
 * Each pass loads the URL with networkidle2, slow-scrolls top→bottom in
 * 200px steps with 300ms pauses (triggers IntersectionObserver animations
 * + lazy-loads), scrolls back to top, waits 2s for animations to settle,
 * then captures fullPage:true.
 *
 * Reusable on any source URL — pass via CLI argument or edit SOURCE_URL.
 *
 * Usage:
 *   node scripts/capture-source.js [url]
 *
 * Defaults to botaniqueparis.com if no URL given.
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const SOURCE_URL = process.argv[2] || 'https://botaniqueparis.com/';
const REPO_ROOT = path.resolve(__dirname, '..');
const OUT_DESKTOP = path.join(REPO_ROOT, 'source', 'desktop', 'fullpage.png');
const OUT_MOBILE = path.join(REPO_ROOT, 'source', 'mobile', 'fullpage.png');

const PASSES = [
  {
    label: 'desktop',
    viewport: { width: 1440, height: 900, deviceScaleFactor: 1 },
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36',
    output: OUT_DESKTOP,
    isMobile: false,
  },
  {
    label: 'mobile',
    viewport: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
    output: OUT_MOBILE,
    isMobile: true,
  },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function slowScroll(page) {
  // Slow scroll from 0 to scrollHeight in 200px steps with 300ms pauses,
  // re-reading scrollHeight each iteration to handle lazy-loaded content
  // that grows the page during the scroll.
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
  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  // Settle window: any final fade-ins, animation completions, font-swap reflow
  await sleep(2000);
}

async function captureOne(browser, pass) {
  const page = await browser.newPage();
  try {
    await page.setUserAgent(pass.userAgent);
    await page.setViewport(pass.viewport);

    process.stdout.write(`[${pass.label}] loading ${SOURCE_URL} ...\n`);
    await page.goto(SOURCE_URL, { waitUntil: 'networkidle2', timeout: 60000 });

    process.stdout.write(`[${pass.label}] slow-scrolling for animations + lazy-loads ...\n`);
    await slowScroll(page);

    // Ensure output directory exists (defensive — should already exist)
    fs.mkdirSync(path.dirname(pass.output), { recursive: true });

    process.stdout.write(`[${pass.label}] capturing full-page screenshot ...\n`);
    await page.screenshot({
      path: pass.output,
      fullPage: true,
      type: 'png',
    });

    const stat = fs.statSync(pass.output);
    process.stdout.write(
      `[${pass.label}] WROTE ${pass.output} (${(stat.size / 1024).toFixed(0)} KB)\n`,
    );

    return { label: pass.label, path: pass.output, ok: true };
  } finally {
    await page.close().catch(() => {});
  }
}

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const results = [];
  try {
    for (const pass of PASSES) {
      try {
        const r = await captureOne(browser, pass);
        results.push(r);
      } catch (err) {
        results.push({ label: pass.label, ok: false, error: err.message });
        console.error(`[${pass.label}] FAILED:`, err.message);
        // Abort remaining passes — bad inputs shouldn't proceed silently
        break;
      }
    }
  } finally {
    await browser.close().catch(() => {});
  }

  const allOk = results.length === PASSES.length && results.every((r) => r.ok);
  console.log('\n=== SUMMARY ===');
  console.log(JSON.stringify(results, null, 2));
  process.exit(allOk ? 0 : 1);
})();
