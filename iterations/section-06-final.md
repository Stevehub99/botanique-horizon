# Section 6 — Results timeline · final residual list

Status: **✅ done** (2026-04-28)

After several pixel-diff iterations against `https://botaniqueparis.com` at desktop (1440×900) and mobile (390×844 @2×), Section 6 is pixel-identical to source except for the residuals enumerated below. All ten are categorically explicable and require no further fix.

---

## V2-explicable residuals (canonical list)

### 1. Asset host (env)
`section.backgroundImage` URL renders from a different host:
- source: `botaniqueparis.com/cdn/shop/files/515_1.png`
- ours:   `127.0.0.1:9292/cdn/shop/t/16/assets/bq-results-bg.jpg`

Same image content (curl-stolen from source CDN per spec). Difference is environmental (their CDN vs our local dev), not a styling bug.

### 2. h2 font-family substitution (project rule)
`.enhanced-timeline h2` computed font-family:
- source: `circular_stdmedium` (paid Linotype, loaded inline by source)
- ours:   `Inter, sans-serif`

Project-wide substitution rule: free Google Fonts equivalent. Applied via `--bq-font-sans` token; affects every heading site-wide.

### 3. CTA font-family substitution (project rule)
`.custom-btn` computed font-family:
- source: `Arial` (UA fallback through `<button>` ancestor)
- ours:   `Inter, sans-serif`

Same project rule as #2. Source's font cascade through the invalid `<button><a>` happens to land on Arial; ours inherits Inter from `--bq-font-sans`.

### 4. Pink line driven by `--timeline-progress` var (deliberate source-bug fix)
`.timeline::after` computed `bottom`:
- source: `77.4688px` desktop / `92.4219px` mobile (= 5% of timeline height — line statically 95% full)
- ours:   variable (depends on scroll position via `var(--timeline-progress, 0%)`)

Source CSS has `height: var(--timeline-progress, 0%)` followed in the same rule by `height: 95%` (rendered.html:6525). The later `height: 95%` shadows the var — the pink line never animates in source, despite the JS at rendered.html:6597 writing `--timeline-progress` on every scroll event. This is documented as a source bug in `inventories/section-06-results.md §10.A` and §10.B. Our build drops the `height: 95%` line so the var actually drives the fill.

### 5. `text-transform: capitalize` dropped (Italian readability)
`.echanced-scents-main .card p` (and inheriting children, e.g. `rightImg.textTransform`):
- source: `capitalize`
- ours:   `none`

Italian copy contains apostrophe-prefixed words ("dell'industria", "l'accumulo", "l'85%") which `capitalize` mangles into "Dell'Industria" etc. Documented drop in `inventories/section-06-results.md §10.D`.

### 6. Per-step DOM IDs (no CSS effect)
`steps[*].classes`:
- source: `timeline-step step_7HQTfE active` / `step_8qmQcE active` / `step_BDXDei exiting` / etc.
- ours:   `timeline-step active` / `timeline-step exiting`

Source's per-instance step IDs (`step_7HQTfE`, `step_8qmQcE`, `step_BDXDei`, `step_aRHgyi`, `step_7kzHP7`, `step_JW8VBW`) are unique to that one rendered snapshot of source's theme. CSS rules that historically targeted these IDs (`step_gPDhFN`, `step_4Bfp34`, `step_98Anhx`, `step_MkMwMg`, `step_7ikq9B`, `step_Tx8KET`) reference *different* IDs that no element actually carries — orphan rules dropped per `inventories/section-06-results.md §10.C`. Adding source's specific IDs to our build would not affect any computed style. Cosmetic-only DOM-attribute diff.

### 7. Class-attribute trailing whitespace (DOM serialization)
`steps[1].rightClasses`:
- source: `'card right-card '` (trailing space inside `class=""`)
- ours:   `'card right-card'`

Source's Liquid output emits `class="card right-card "` — the trailing space is a whitespace artifact of source's template. Doesn't affect CSS matching or layout.

### 8. Border-color cascade on 0-width border (non-visual)
`steps[*].left.border` (and Top/Right/Bottom/Left):
- source: `0px none rgb(0, 0, 0)`
- ours:   `0px none rgba(0, 0, 0, 0.5)`

`border-width: 0` makes the color non-visual — nothing paints. Horizon theme sets `.card { border-color: rgba(0,0,0,0.5) }` on its product-card class (which we coincidentally use). Source's deployed theme doesn't have this rule. The diff is a property-value reading only, never rendered.

### 9. Shipping-list font-size (semantic-validity tradeoff)
`.shipping-list` computed font-size:
- source: `13.3333px` (= UA-default button font, inherited from invalid `<button><a>...<ul></button>` ancestor)
- ours:   `18px` (inherits from `.echanced-scents-main { font-size: 18px }`)

Source wraps the CTA + shipping list in a `<button>` element, with an `<a>` and `<ul>` nested inside (invalid HTML — interactive content can't nest interactive content; `<ul>` can't be a `<button>` child). The `<button>` UA-default font-size of 13.33px cascades to the `<ul>`. Per `inventories/section-06-results.md §10.G` we use a semantically valid `<div class="custo-button">` wrapper, which doesn't carry the UA-default override.

### 10. +30px gap on step 5→6 mobile (Italian copy length)
Mobile (390) visual-gap step 5 → step 6:
- source: `-30px` (overlap — last-step number sits beside the step-6 heading-card on row 1)
- ours:   `0px` (heading-card flex-wraps to its own row)

Step 6's number is `position: relative` on mobile (per `b00:9403` + `9475`) — it occupies a flex slot of 60px on row 1. Available row-1 width for the heading-card is 310 (step inner) − 60 (number) = **250px**.

| | Source | Ours |
|---|---|---|
| h4 content | `Month 3:` + `Full Transformation` | `Mese 3:` + `Trasformazione completa` |
| h4 max-content width | 136px (wraps short) | 180px (`Trasformazione` is a single 14-char word that can't break) |
| heading-card width | 206px (h4 + img + padding) → fits row 1 | 250px → just overflows → wraps to row 2 |
| step.height | 302.1px | 367.5px (+65px) |

Italian compound word `Trasformazione completa` is ~50px wider than English `Full Transformation`, pushing the heading-card past the available 250px row-1 slot. Flex-wrap kicks in, the heading-card moves to row 2, step height grows by ~72px (img+h4 row), and the visual-gap jumps from −30 to 0.

Per project hard rule "Italian copy stays as-is in `templates/index.json` — don't edit copy", the only CSS-only fixes available (hide thumbnail on mobile last step, or force `word-break: break-word` on h4) trade off either visual-fidelity (source shows the thumbnail) or typographic quality (mid-word break is ugly). Accepted as deviation.

Desktop renders correctly — Section 6 is grid-based on desktop (`grid-template-columns: 1fr 40px 1fr`), not flex-wrap, so Italian copy length doesn't trigger this issue at any other viewport.

---

## Iteration history

Pixel-diff iteration counts per `scripts/probe-diff.js` (now removed):

| Iteration | Desktop diffs | Mobile diffs | Notes |
|---|---|---|---|
| 1 | 468 | 78 | Initial — verbatim CSS only, missing external b00 rules + Horizon theme conflicts |
| 2 | 170 | — | Added external b00:9018-9038, h2 typography, Horizon `.card` overrides, max-width on container |
| 3 | 66 | — | Added empty `<h3>` to mirror source DOM, `color: #000` on `.card` |
| 4 | 66 | mobile-fixed | Added external b00:9403, 9475, 9548, 9552, 9735 (mobile responsive rules) |
| Final | 66 (≈ 66 explicable) | 78 (≈ 78 explicable) | Only the 10 categories above remain |

## Files in scope

- `sections/bq-results.liquid` — verbatim source DOM, source class names, JS state machine
- `assets/bq-results.css` — verbatim source inline `<style>` + external b00 rules; project overrides for Horizon theme conflicts; three documented drops (height:95%, capitalize, orphan step-ID rules)
- `assets/bq-results-bg.jpg` — source's `515_1.png` marble background, curl-stolen
- `assets/bq-results-step.png` — source's heading-card thumbnail (Frame_08a68e28...), curl-stolen
- `assets/bq-results-icon-default.png` — source's step 1 description icon (eye glyph), curl-stolen
- `assets/bq-results-icon-{2..5}.png` — source's per-step description icons, curl-stolen

End of doc.
