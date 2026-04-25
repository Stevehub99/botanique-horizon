# Section 1 — right-column image gap investigation

Generated: 2026-04-25. Investigation only — no code modified.

## 1. DOM ancestor chain of `.bq-hero` in our build

Walking from `<html>` down to `.bq-hero` (inner). Each element's source-of-truth (which Liquid file emits it) is cited.

```
<html lang="…">                                              layout/theme.liquid:2
  <body class="page-width-{{ settings.page_width }}           layout/theme.liquid:41
              card-hover-effect-{{ settings.card_hover_effect }}">
    <div id="header-group">…header sections…</div>            layout/theme.liquid:42
    <main id="MainContent" class="content-for-layout"         layout/theme.liquid:115–124
          role="main" data-template="…">
      {{ content_for_layout }}                                 layout/theme.liquid:123
        ↓ Shopify automatically wraps each section from the template:
      <section id="shopify-section-{{ section.id }}"           emitted by Shopify; tag = schema.tag
               class="shopify-section bq-section-hero">           sections/bq-hero.liquid:496–497 (schema "tag" + "class")
        <section class="bq-section bq-hero"                     sections/bq-hero.liquid:67–73
                 data-bq-hero data-section-id="…"
                 style="--bq-accent: …">
          <div class="bq-hero__media">                          sections/bq-hero.liquid:74
            <div class="bq-hero__media-frame">                  sections/bq-hero.liquid:75
              <img class="bq-hero__image bq-hero__image--mobile"|
                          bq-hero__image bq-hero__image--desktop"|
                          bq-hero__image bq-hero__image--placeholder">
                                                                sections/bq-hero.liquid:77, 80, 83
          <div class="bq-hero__content">                        sections/bq-hero.liquid:88
            …content…
```

### Settings that determine body class

`config/settings_data.json:44` → `"page_width": "narrow"` → body class becomes `page-width-narrow`.

### Source of each wrapper

| Wrapper | Source | Notes |
|---|---|---|
| `<html>` | `layout/theme.liquid:2` | Theme layout root |
| `<body class="page-width-narrow …">` | `layout/theme.liquid:41` | Body class is interpolated from `settings.page_width` (`config/settings_data.json:44`) |
| `<main class="content-for-layout">` | `layout/theme.liquid:115–117` | Static element wrapping `{{ content_for_layout }}` |
| `<section id="shopify-section-…" class="shopify-section bq-section-hero">` | Auto-emitted by Shopify; classes governed by `sections/bq-hero.liquid:496–497` (schema's `"tag": "section"` and `"class": "bq-section-hero"`) | This is the **outer** wrapper. It does **NOT** include the class `.section` (Horizon's grid wrapper) — only `.shopify-section` (auto) + `.bq-section-hero` (from schema) |
| `<section class="bq-section bq-hero" …>` | `sections/bq-hero.liquid:67–73` | Our internal section element (inside the Shopify wrapper) |

### What's NOT in our chain (but IS in Horizon's stock sections)

- `<div class="section section--page-width …">` — emitted only by `snippets/section.liquid:10`, used by Horizon's stock sections through `sections/section.liquid` and `sections/hero.liquid` etc. **Our `bq-hero` does not render this snippet, so we never get `.section` or `.section--page-width` on our wrapper chain.**
- `<div class="custom-section-background">` + `<div class="custom-section-content">` — also emitted by `snippets/section.liquid:31, 42`. We do not use these.
- `<div class="section-background">` — `snippets/section.liquid:8`. We do not use it.
- `<div class="section-wrapper">` — class added by `sections/section.liquid:6` schema. We do not inherit from this section type.

## 2. CSS rules touching each ancestor

For each ancestor, every rule in `assets/base.css`, `assets/bq-tokens.css`, or section-scoped `{% stylesheet %}` blocks that sets `max-width / width / margin-inline / padding-inline / padding-left / padding-right`.

### `<html>`

- `assets/base.css:28` — `html { … }` rule exists but contains no width/padding declarations (token defs only).

NOT FOUND: any width/padding/margin-inline rule on `html`.

### `<body class="page-width-narrow …">`

- `assets/base.css:5–13` — `body { color, background, display: flex, flex-direction: column, margin: 0, min-height: 100svh, font-variation-settings }`. **No width/padding/max-width.** `margin: 0` is the only spacing.
- `assets/base.css:386–388` — `.page-width-narrow { … --page-margin: 16px; … }` (`--page-margin` is a CSS custom property only, not a layout property — it's consumed by `.section { grid-template-columns: … }` rules below).
- `assets/base.css:391–397` — at `min-width: 750px`, `--page-margin: 40px`.
- `assets/base.css:411–416` — `.page-width-narrow, .page-width-content { --page-content-width: var(--narrow-page-width); --page-width: calc(var(--page-content-width) + var(--page-margin) * 2); }`.

`--narrow-page-width: 90rem` is set at `snippets/theme-styles-variables.liquid:132`.

These custom-property assignments **do not constrain `body` itself**. They are only consumed by `.section` (line 427) — which our wrapper does not have.

### `<main class="content-for-layout">`

- `assets/base.css:378–381` — `.content-for-layout { flex: 1; }`. **No width/padding/max-width.** `flex: 1` makes it fill available cross-axis space inside the flex-column body.

NOT FOUND: any other rule on `.content-for-layout`.

### `<section class="shopify-section bq-section-hero">` (outer wrapper)

- `assets/base.css:463–465` — `.shopify-section:not(.header-section) :is(.section, .cart-summary) { background: transparent; }` — affects DESCENDANTS named `.section` or `.cart-summary`, not the `.shopify-section` element itself. Our wrapper has no descendant with class `.section` directly under it (only `.bq-section.bq-hero` which doesn't match `.section`).
- `assets/base.css:467–469` — `.shopify-section:not(.header-section):has(.section) { position: relative; }` — only applies if a `.section` descendant exists. We have no `.section` descendant → does not match.
- `assets/base.css:471–476` — `.shopify-section:not(.header-section) .section-background { … position: absolute; inset: 0; … }` — descendant rule; we have no `.section-background` element.
- `assets/base.css:996–998` — `body:has(.header[transparent]) .content-for-layout > .shopify-section:first-child { margin-top: calc(var(--header-group-height) * -1); }` — only if header is transparent. No width effect.
- `assets/bq-tokens.css` — no `.shopify-section` or `.bq-section-hero` rule. (`grep -nE 'bq-section-hero|\.shopify-section' assets/bq-tokens.css` → no matches.)
- `sections/bq-hero.liquid` `{% stylesheet %}` — no rule targeting `.shopify-section` or `.bq-section-hero`.

NOT FOUND: any width / max-width / margin-inline / padding-inline rule on `.shopify-section` or `.bq-section-hero`.

### `<section class="bq-section bq-hero" …>` (inner wrapper)

- `assets/bq-tokens.css:36–43` — `.bq-section { background, color, font-family, -webkit-font-smoothing, -moz-osx-font-smoothing }`. **No width/padding/max-width.**
- `sections/bq-hero.liquid:286–292` — `.bq-hero { background, color, display: grid, grid-template-columns: 1fr, grid-template-rows: auto auto, font-family }`. **No max-width / width / padding / margin-inline.**
- `sections/bq-hero.liquid:386–391` (`@media (min-width: 768px)`) — `.bq-hero { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); grid-template-rows: 1fr; align-items: stretch; min-height: 600px; }`. **No width/max-width.**

`.bq-wrap` (`assets/bq-tokens.css:44–48`) DOES have `max-width: var(--bq-page-max)` (1300px) — but **our hero does NOT use `.bq-wrap`**. (`grep -n 'bq-wrap' sections/bq-hero.liquid` returns no matches.)

### `.bq-hero__media` (the right-column image container at desktop)

- `sections/bq-hero.liquid:294` — `.bq-hero__media { grid-column: 1; grid-row: 1; width: 100%; }`.
- `sections/bq-hero.liquid:393` (desktop @media) — `.bq-hero__media { grid-column: 2; grid-row: 1; height: 100%; }`.

NOT FOUND: any padding/margin/max-width on `.bq-hero__media`.

### `.bq-hero__media-frame`

- `sections/bq-hero.liquid:295` — `.bq-hero__media-frame { position: relative; width: 100%; aspect-ratio: 4 / 5; overflow: hidden; }`.
- `sections/bq-hero.liquid:394` (desktop) — `.bq-hero__media-frame { aspect-ratio: auto; height: 100%; min-height: 600px; }` (width inherited as `100%` from base rule).

NOT FOUND: any padding/margin/max-width.

## 3. Computed effective width budget at 1920px viewport (page-width-narrow body)

Walking down our chain:

| Element | Width budget | Reason |
|---|---|---|
| `<html>` | 1920px | viewport |
| `<body class="page-width-narrow …">` | **1920px** | `margin: 0`, no width/padding rule (`assets/base.css:5–13`). `--page-margin: 40px` and `--page-width: 1520px` are CSS custom properties — not layout properties on `body`. |
| `<main class="content-for-layout">` | **1920px** | `flex: 1` in column-flex parent → stretches full body width (`assets/base.css:378–381`). |
| `<section class="shopify-section bq-section-hero">` | **1920px** | Block element, parent is block (`<main>`) → fills parent width. No CSS rule constrains it. |
| `<section class="bq-section bq-hero">` | **1920px** | Block element inside block parent → 100% width. `.bq-hero` rule has no `max-width` (`sections/bq-hero.liquid:286–292`). |
| `.bq-hero__media` (grid track 2 at desktop) | **960px** | Grid `grid-template-columns: minmax(0, 1fr) minmax(0, 1fr)` (`sections/bq-hero.liquid:387`) splits the 1920px section in half. `.bq-hero__media` occupies the right 960px. |
| `.bq-hero__media-frame` | **960px** | `width: 100%` of `.bq-hero__media`. |
| `<img class="bq-hero__image">` | **960px** | `width: 100%; height: 100%; object-fit: cover` (`sections/bq-hero.liquid:296`). |

**Image right edge sits at x = 1920px** — **flush to the viewport's right edge.** No constraint found in code.

### Implication

If the user is observing whitespace between the image's right edge and the viewport's right edge in production-like rendering, the cause **is not in the static CSS we've inspected**. Possible runtime sources not visible from code-only inspection:

- **Theme-editor preview iframe.** Shopify's editor wraps the storefront preview in an iframe with a sidebar panel; the iframe's effective viewport width is narrower than the OS window. If the user is judging from the editor preview, the "right edge of the viewport" is the iframe right edge, not the browser window. This would still show the image flush within the iframe, no gap — UNLESS the editor's preview-mode CSS adds a wrapper margin/padding (not found in our search).
- **A different `page_width` setting.** If `config/settings_data.json:44` were changed from `"narrow"` to a value that activates a wrapping container we missed, the layout could be constrained. Currently it's `"narrow"` — no container effect.
- **Browser scrollbar gutter.** ~15–17 px on Windows / Linux. macOS auto-hides → 0 px. Wouldn't be the visible gap user reports.
- **Section-group CSS** (e.g., the section is rendered inside `header-group` or `footer-group`). Our schema sets `disabled_on: { groups: ["header", "footer"] }` (`sections/bq-hero.liquid:498–500`), so it's only addable to the page main area — no group wrapper.
- **The schema `"tag": "section"` setting.** If we'd left `"tag"` blank or set `"tag": "div"`, the wrapper would be a `<div>` instead of `<section>`. No width difference (both block).

## 4. Source-side comparison

### Source ancestor chain above `.new-banner-home`

From `source/rendered.html`, walking up from `<div class="section new-banner-home …">` (`source/rendered.html:4012`):

The captured DOM has `<div class="section new-banner-home section--page-width color-scheme-2">` as the section root. Direct ancestors in `source/rendered.html` (read from full document — page-level wrappers):

```
<html class="no-js" lang="en" …>                              source/rendered.html:1
  <body class="…">  (full body class string not extracted at chain depth)
    [shopify-section wrapper]
      <div class="section new-banner-home section--page-width color-scheme-2">
                                                              source/rendered.html:4012
        <div class="custom-section-background">               source/rendered.html:4017
          <div class="background-image-container">            source/rendered.html:4018
            <img …Group_48095889_1.png… sizes="(min-width: 750px) 100vw, 100vw">
                                                              source/rendered.html:4021
        <div class="border-style custom-section-content">     source/rendered.html:4027
          <div class="… layout-panel-flex--row section-content-wrapper mobile-column"
               style="… --padding-block-start: max(20px, calc(var(--spacing-scale) * 80px)); …">
                                                              source/rendered.html:4033, 4047
            <div class="group-block … new_banner_contant">    source/rendered.html:4054
              …content…
```

### Source CSS rules on the section ancestors

- `source/css/external-00-base.css:8359–8364` — `.new-banner-home { background-position: center !important; background-size: cover !important; background-repeat: no-repeat !important; }`. **No max-width / width / margin-inline / padding-inline.**
- `source/css/external-00-base.css:8371–8373` — `.new-banner-home .custom-section-content { max-width: 1300px; }`. **Caps the inner CONTENT container at 1300px.** Note: this targets `.custom-section-content` (the wrapper around the text content), NOT the section itself or the image.
- `source/css/external-00-base.css:451–460` (Horizon-style theme rule for `.section--page-width > *`) — children of `.section--page-width` placed in `grid-column: 2`. The same convention as Horizon's `assets/base.css:478–481`. Source's parent theme uses an analogous 3-column grid.

`.section` itself (in source) inherits the same Horizon-style 3-column grid mechanism (centered content column, side margin tracks). The `.section--page-width` modifier puts content in the center column.

### How source's image escapes the content rail (mechanism)

The source's hero `<img>` (`source/rendered.html:4021`) is the FIRST child inside `.custom-section-background > .background-image-container` (`source/rendered.html:4017–4018`).

`.section-background` and `.custom-section-background` in Horizon-style themes are conventionally **absolutely positioned to fill the section** (`assets/base.css:471–476` in our Horizon clone — `.shopify-section:not(.header-section) .section-background { position: absolute; inset: 0; }`).

The source image's `<img>` has `sizes="(min-width: 750px) 100vw, 100vw"` (`source/rendered.html:4021`) — **it requests an asset sized to 100% of the viewport width**, not 50% of the section. Combined with the absolute-positioned background container, the image bleeds full-viewport-width.

So source's mechanism is:

- **(a) ABSOLUTE positioning** of the background container (`position: absolute; inset: 0`) **AND**
- **(b) `sizes="100vw"`** on the `<img>` so it requests a viewport-width-rendered asset.

The PNG asset itself is also designed with the model+device drawn into the right side of the file and whitespace on the left, so the text overlay on the left half visually reads as the "left column" while the image fills the entire section as a backdrop.

This is mechanism (a) "absolute positioning" from your prompt's options — NOT (c) negative-margin trick, NOT (b) `100vw` width on the image (the `100vw` in source is a `sizes` HINT to the browser for asset selection, not a CSS width — the actual CSS width on the absolutely-positioned image would be `100%` of its absolutely-positioned parent which is the section).

## 5. Diagnosis

**No ancestor in our build introduces a max-width / padding-inline constraint that would prevent the `.bq-hero` section, the `.bq-hero__media` grid track, or the image from reaching the viewport's right edge.** Searched files: `assets/base.css` (every `.shopify-section`, `.content-for-layout`, `.page-width-*`, `.section`-related rule), `assets/bq-tokens.css` (nothing on `.bq-section`/`.shopify-section`), `sections/bq-hero.liquid` `{% stylesheet %}` (nothing capping the section/media). Specifically:

1. Body has `margin: 0` and is a flex column with stretch — full width.
2. `<main class="content-for-layout">` is `flex: 1` — full width.
3. The Shopify-emitted `<section class="shopify-section bq-section-hero">` carries no `.section` class (since our schema defines `class: "bq-section-hero"` only) and so does NOT inherit Horizon's `.section { display: grid; grid-template-columns: minmax(40px,1fr) min(1440px, 100%-80px) minmax(40px,1fr); }` rule at `assets/base.css:427–455`. **The 3-column page-grid that constrains Horizon's stock sections does not apply to ours.**
4. Our inner `.bq-hero` is `display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr)` on desktop — splits the section into two equal tracks; image fills track 2 at 100% width.

**Source-vs-ours mechanism difference for the visible image area:**

- Source's image is an `<img>` inside a `position: absolute; inset: 0` container (`assets/base.css:471–476` analog in source's CSS), so the image fills the entire section regardless of what the inner content layout does. The asset itself has the model on the right and whitespace on the left; text content in the inner column overlays the whitespace.
- Our image is a regular flow `<img>` inside a CSS-grid track (50% of section width). The image fills its 50% track.

Both should reach the viewport's right edge if the section is full-width — and per the chain analysis above, **the section IS full-width in our build**.

### What this leaves as the cause of the visible gap

Three possibilities, none resolvable from static code inspection alone:

a. **The user is judging from inside the Shopify theme-editor preview iframe**, whose viewport is narrower than the OS window because of the editor's left-side panel. The image fills the iframe's right edge correctly; the apparent "whitespace" is the editor chrome between the iframe and the OS window edge — not an actual gap.

b. **A runtime CSS rule injected by Shopify's theme editor or a plugin** (e.g., the inline preview frame, a third-party script's wrapper div) imposes a wrapper width. None of these are visible in `assets/`, `snippets/`, `sections/`, `layout/`, or `blocks/`.

c. **`.bq-hero` is rendered inside an ancestor we couldn't inspect statically** — e.g., a parent shopify-section group wrapper or an editor-only wrapper. Our schema explicitly disables `header`/`footer` groups (`sections/bq-hero.liquid:498–500`), so this is unlikely outside an editor-mode wrapper.

To confirm definitively, the user would need to run DevTools in the live storefront (not the editor) and inspect the computed `width` on every ancestor of `.bq-hero`. From code alone the section is full-width.

## 6. Proposed fixes (do not apply)

Ranked least → most invasive. Each operates on `.bq-hero` or `.bq-hero__media` only; none modifies Horizon's section-group rules.

### Fix A — section-level full-bleed via negative margin (least invasive, scoped, recommended)

- **File:** `sections/bq-hero.liquid`
- **Location:** inside the `{% stylesheet %}` block, on the `.bq-hero` rule at `sections/bq-hero.liquid:286–292`.
- **Change:** add `margin-inline: calc(50% - 50vw); width: 100vw;` so the section element forcibly bleeds to the viewport edge regardless of any ancestor max-width.
- **Effective CSS:**
  ```css
  .bq-hero {
    background: var(--bq-body-bg);
    color: #000;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    font-family: var(--bq-font-sans);
    margin-inline: calc(50% - 50vw);
    width: 100vw;
  }
  ```
- **Side effects:**
  - Scoped to `.bq-hero` only — no impact on any other section in the theme.
  - Does NOT touch Horizon's `.section { … }` grid (`assets/base.css:427`) or any shared wrapper.
  - **Risk:** if any ancestor applies `overflow-x: hidden`, the negative margin works fine; if NO ancestor clips overflow, the section can introduce a horizontal scrollbar at viewports where `100vw > 100%-of-parent`. Mitigation: add `overflow: clip` (or `overflow-x: clip`) on the parent `.shopify-section` or on `<body>`. `<body>` already has `min-height: 100svh` but no overflow rule (`assets/base.css:5–13`); typically theme-level body overflow is fine on desktop.
  - **Risk on macOS scrollbar:** `100vw` includes the scrollbar gutter; on systems where the scrollbar is always visible (Windows), `100vw - scrollbar-width` ≠ `100%` of the body. This can cause a few-pixel horizontal bounce. Mitigation: use `scrollbar-gutter: stable` on `<html>` or replace `width: 100vw` with `width: 100%` and rely solely on the negative margin.
- **Scope:** local to `.bq-hero` only.

### Fix B — image-only escape via negative margin on the media element (more conservative)

- **File:** `sections/bq-hero.liquid`
- **Location:** inside the `@media (min-width: 768px)` block, on the `.bq-hero__media` rule at `sections/bq-hero.liquid:393`.
- **Change:** add `margin-right: calc(50% - 50vw); padding-right: 0;` so only the image overflows past the section's right edge to the viewport edge; the content column remains exactly where it is.
- **Effective CSS (added to the desktop @media block):**
  ```css
  @media (min-width: 768px) {
    .bq-hero__media {
      grid-column: 2;
      grid-row: 1;
      height: 100%;
      margin-right: calc(50% - 50vw);
    }
  }
  ```
- **Side effects:**
  - Only the right column / image is affected. Content column stays anchored to the 1300px content rail via `padding-inline-start: max(24px, calc((100vw - 1300px) / 2))` (`sections/bq-hero.liquid:396`).
  - **Risk:** identical scrollbar-gutter and overflow risk as Fix A, but the overflow region is just the image (not the whole section background), so any overflow clip needed is smaller.
  - Edge case: at viewports between 768px and ~960px (where 50vw is small), the negative margin is small and the image just slightly overshoots the column — visually identical to flush.
- **Scope:** local to `.bq-hero__media` only.

### Fix C — global section-bleed utility (most invasive)

- **File:** `assets/bq-tokens.css`
- **Location:** add a new utility class at end of the tokens file.
- **Change:**
  ```css
  .bq-section--full-bleed {
    margin-inline: calc(50% - 50vw);
    width: 100vw;
    max-width: 100vw;
  }
  ```
  Then add `bq-section--full-bleed` to the section's outer `<section>` element in `sections/bq-hero.liquid:67–73`.
- **Side effects:**
  - Reusable for sections 2, 3, 4 etc. when they need bleed.
  - Touches `assets/bq-tokens.css` — currently a tokens-only file; introducing utility classes mixes concerns. Still affects only sections that opt in via the class.
  - Same overflow/scrollbar risks as Fix A.
- **Scope:** global utility, but applied per-section (opt-in).

### Recommendation

**Fix B** (image-only negative margin) is the most conservative: it leaves the content column untouched, only stretches the image past the section's right edge, and contains overflow risk to the smallest possible region. Fix A is acceptable if the section background should also bleed (for design consistency with source where the background image and section background are the same thing). Fix C only makes sense if multiple sections will need the same bleed behavior — defer until section 2+ is in flight.

**Before committing any fix, the user should DevTools-inspect the live storefront at a 1920px viewport to confirm that the visible gap is reproducible outside the theme editor preview iframe.** From static code analysis, no ancestor constraint exists; the gap may be an artifact of where it was observed.

---

Path: `/Users/stefano/botanique-clone-build/botanique-horizon/docs/section-1-image-investigation.md`
