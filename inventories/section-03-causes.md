# Section 3 — Under-eye aging causes — SOURCE INVENTORY

Generated: 2026-04-26. Triangulated from `source/rendered.html`, `source/css/`, live-page Puppeteer probe (1440×900 desktop, 390×844 @2× mobile), and `source/crops/section-04-causes-{desktop,mobile}.png`.

PROJECT.md slug: Section 3 (Under-eye causes). Capture-pipeline index: 04.

---

## 1. Section locator

- **Line range in `source/rendered.html`:** **5607–5667** (closes immediately before `image_with_text_xQzFck` opens at line 5668).
- **Top-level container:** `<div id="shopify-section-template--19760795549861__image_with_text_87FTVU" class="shopify-section image-width-text-sec">` (`rendered.html:5607`).
- **Anchor classes / data-attributes:**
  - Section root: `shopify-section`, `image-width-text-sec`.
  - Inner container (`rendered.html:5616`): `main-container`, `main-contain-template--19760795549861__image_with_text_87FTVU` (per-section padding hook), `color-scheme-4e3f3173-5698-4cc9-a3e8-1fe6eccd81a0`, `gradient`. **No `custom-gradiant-industry`** (Section 2's gradient marker absent here).
  - Layout: `.page-width`, `.main-file` (empty), `.top-header.aos-animate data-aos="fade-up"` (**EMPTY** — no `<h2>` inside, `rendered.html:5623–5625`), `.img-with-txt-keeper   img-left` (**`img-left` modifier present**, `rendered.html:5627`), `.content-folder.aos-animate data-aos="fade-up"` (`rendered.html:5633`), `.photo-folder.aos-animate data-aos="fade-up"` (`rendered.html:5648`).

## 2. HTML tree

Verbatim from `source/rendered.html:5607–5667`. English text preserved as-is; not translated.

```
<div id="shopify-section-template--19760795549861__image_with_text_87FTVU"
     class="shopify-section image-width-text-sec">                              [5607]
  <style>
    .main-contain-template--19760795549861__image_with_text_87FTVU {           [5608]
      padding-top: 10px;
      padding-bottom: 10px;
    }
  </style>
  <div class="main-container
              main-contain-template--19760795549861__image_with_text_87FTVU
              color-scheme-4e3f3173-5698-4cc9-a3e8-1fe6eccd81a0
              gradient">                                                       [5616]
    <div class=" page-width ">                                                 [5617]
      <div class="main-file"></div>                                            [5618]
      <div class="top-header aos-animate" data-aos="fade-up">                  [5623]
        <!-- EMPTY: no h2, no inner content -->
      </div>                                                                   [5625]
      <div class="img-with-txt-keeper   img-left  ">                           [5627]
        <div class="content-folder aos-animate" data-aos="fade-up">            [5633]
          <h3><strong>Under-eye aging</strong> isn't caused by genetics, dehydration or lack of sleep.</h3>   [5635]
          <p>It's caused by three biological factors happening below your skin's surface.</p>
          <ol>                                                                  [5639]
            <li><strong>Poor circulation </strong>causes deoxygenated blood to pool and create dark shadows.</li>
            <li><strong>Weakened lymphatic drainage</strong> allows fluid to accumulate overnight, creating puffiness.</li>
            <li><strong>Collagen breakdown</strong> thins the already-delicate skin, making every vessel and shadow more visible.</li>
          </ol>
          <p>No topical cream or serum can reach deep enough to address these root causes. Which is exactly why the industry keeps selling them to you.</p>
        </div>
        <div class="photo-folder aos-animate" data-aos="fade-up">              [5648]
          <img src="//botaniqueparis.com/cdn/shop/files/4337ca017a2b882d987dd70b639b916e599b9b23_1.png?v=1760430101&width=1500"
               srcset="… 165w … 360w … 535w … 750w … 1070w … 1500w"
               width="1500" height="1500"
               loading="eager"
               sizes="(min-width: narrowpx) -100px, (min-width: 750px) calc((100vw - 130px) / 1), calc((100vw - 50px) / 1)">  [5652]
        </div>
      </div>
    </div>
  </div>
</div>                                                                         [5667]
```

Notes:
- Single `<p>` and `<ol>` are inline within one HTML node at `rendered.html:5639` — collapsed to `<p>…</p><ol>…</ol><p>…</p>` (renderer flattened source paragraphs into a single line). Two `<p>` siblings + one `<ol>` between them.
- `<img loading="eager"`** in captured HTML** (`rendered.html:5652`) — different from Section 2 which was implicit-lazy.
- `<img>` has no `alt` attribute (same accessibility issue as Section 2).
- `sizes` attribute is malformed (`(min-width: narrowpx) -100px` invalid CSS) — same as Section 2.
- Three elements with `data-aos="fade-up"` (header + content + photo).

## 3. CSS rules

Citations: `source/css/external-00-base.css` (`b00:N` shorthand). Inline `<style>` blocks in rendered.html cited as `rendered.html:N`.

### Section root + container

| Selector | Rule | Cite | @media |
|---|---|---|---|
| `.main-contain-template--19760795549861__image_with_text_87FTVU` | `padding-top: 10px; padding-bottom: 10px;` | rendered.html:5608–5611 | TOP (per-section inline) |
| `.shopify-section:not(.header-section) :is(.section, .cart__summary-container)` | `background: transparent` | b00 (Horizon section base) | TOP |

**Section 3 has NO `.custom-gradiant-industry` class** — the gradient that wraps Section 2 is absent here. The `.main-container` class itself has no `background` rule. The `.gradient` class also has no rule (`grep '\.gradient\b\s*\{' external-00-base.css` returns no match). Therefore the section's effective background comes from the `.color-scheme-4e3f3173-…` cascade only:

```css
.color-scheme-4e3f3173-5698-4cc9-a3e8-1fe6eccd81a0 {
  --color-background: rgb(246 248 249 / 1.0);   /* solid #F6F8F9 */
  --color-foreground: rgb(0 0 0 / 1.0);
  --color-foreground-heading: rgb(0 0 0 / 1.0);
  …
}
```
(Source: `rendered.html:2139–2178`.)

The Horizon convention applies `background: var(--color-background)` to the container via `color-{{ section.settings.color_scheme }}` style attributes, so `.main-container.color-scheme-4e3f3173-…` resolves to `background-color: rgb(246, 248, 249)` solid. **Confirmed by live probe: `backgroundColor: "rgb(246, 248, 249)"`, `backgroundImage: "none"`** (no gradient).

### `.page-width`

| Selector | Rule | Cite | @media |
|---|---|---|---|
| `.page-width` | `max-width: 1440px; padding: 0 20px; margin: auto;` | b00:4379–4382 | TOP |
| `.body-pl-new-index .page-width` | `max-width: 1200px;` | b00 (~7900s) | TOP — does NOT apply to body class `body-index` |

Body class on this page is `page-width-narrow card-hover-effect-none body-index …` (`rendered.html:3235`). No `body-pl-new-index` → narrower-cap overrides do not fire. Effective cap = **1440 px** with **20 px horizontal padding**.

### `.top-header h2` (NOT instantiated in Section 3 — empty `.top-header`)

| Selector | Rule | Cite | @media | Applies here? |
|---|---|---|---|---|
| `.top-header h2` | `font-size: 46px; text-align: center; max-width: 700px; margin: auto; color: #000; margin-bottom: 30px;` | b00:8429–8435 | TOP | NO — no `<h2>` |
| `.top-header h2 strong` | `color: #ff7e97;` | b00:8437 | TOP | NO |
| `.top-header h2` | `font-size: 30px;` | b00:9506 | `@media (max-width: 767px)` | NO |
| `.top-header h2` | `font-size: 28px;` | b00:9728 | `@media (max-width: 390px)` | NO |

`.top-header` itself has **no rule on the wrapper** (no padding, no margin, no border). Empty `<div>` collapses to height 0. Live probe confirms: `topHeader.height = 0px` both desktop and mobile. The `.aos-animate` data-aos attribute is present but the empty container has no visible content to fade.

### `.img-with-txt-keeper` (the row container — `img-left` modifier active in Section 3)

| Selector | Rule | Cite | @media |
|---|---|---|---|
| `.img-with-txt-keeper` | `display: flex; align-items: center;` | b00:8440–8443 | TOP |
| **`.img-with-txt-keeper.img-left .content-folder`** | **`order: 2; padding-left: 80px; padding-right: 0;`** | b00:8463–8467 | TOP |
| **`.img-with-txt-keeper.img-left .photo-folder`** | **`order: 1;`** | b00:8468–8470 | TOP |
| `.img-with-txt-keeper` | `align-items: initial;` | b00:9423 | `@media (max-width: 991px)` |
| `.img-with-txt-keeper` | `flex-wrap: wrap;` | b00:9514 | `@media (max-width: 767px)` |
| `.img-with-txt-keeper.img-left .content-folder` | `padding-left: 0;` | b00:9531 | `@media (max-width: 767px)` |

**Effective layout:**
- Desktop (≥768 px): row layout. `.photo-folder` order:1 (LEFT). `.content-folder` order:2 (RIGHT) with `padding-left: 80px`. Image-on-left, text-on-right.
- Mobile (≤767 px): wraps to column. `.content-folder { width: 100%; order: 2 }` (b00:9517). `.photo-folder { width: 100%; order: 1 }` (b00:9522). The img-left order:1/2 from desktop is **preserved on mobile** (image still first, text second). `.img-with-txt-keeper.img-left .content-folder` mobile drops `padding-left` to 0 (b00:9531).

### `.content-folder` (text column)

| Selector | Rule | Cite | @media |
|---|---|---|---|
| `.content-folder` | `width: 60%; padding-right: 40px;` | b00:8447–8450 | TOP |
| `.content-folder h3` | `font-size: 32px; color: #000;` | b00:8451–8454 | TOP |
| `.content-folder h3 strong` | `color: #ff7e97; font-weight: normal;` | b00:8455–8457 | TOP |
| **`.content-folder ol`** | **`padding-left: 15px;`** | b00:8471–8473 | TOP |
| **`.content-folder ol li`** | **`padding-bottom: 15px;`** | b00:8474–8476 | TOP |
| **`.content-folder ol li strong`** | **`color: #ff7e97;`** | b00:8477–8479 | TOP |
| `.content-folder` | `width: 100%; padding-right: 0px; order: 2;` | b00:9517–9521 | `@media (max-width: 767px)` |
| `.content-folder h3` | `font-size: 30px; color: #000; margin-top: 20px;` | b00:9526–9530 | `@media (max-width: 767px)` |
| `.img-with-txt-keeper.img-left .content-folder` | `padding-left: 0;` | b00:9531 | `@media (max-width: 767px)` |
| `.content-folder h3` | `font-size: 28px;` | b00:9728–9730 | `@media (max-width: 390px)` |

`.content-folder p` has **no specific rule**. Inherits theme paragraph font (Inter, 18 px, line-height 1.6 — confirmed by live probe).

### `.photo-folder` (image column)

| Selector | Rule | Cite | @media |
|---|---|---|---|
| `.photo-folder` | `width: 40%;` | b00:8444–8446 | TOP |
| `.photo-folder video, .photo-folder img` | `width: 100%; border-radius: 20px;` | b00:8458–8462 | TOP |
| `.img-with-txt-keeper.img-left .photo-folder` | `order: 1;` | b00:8468 | TOP |
| `.photo-folder` | `width: 100%; order: 1;` | b00:9522–9525 | `@media (max-width: 767px)` |

### `<ol>` numbering — UA-default behavior

No `list-style-type` rule applied in source CSS. Browser default `decimal` markers. Live probe confirms:
- `ol.list-style-type: "decimal"` (computed)
- `ol li.list-style-type: "decimal"`
- `ol li::marker.color: "rgb(0, 0, 0)"` — **markers render BLACK** despite `ol li strong { color: #ff7e97 }` (the strong rule colors the wrapped text, not the marker).
- `ol li::marker.font-weight: "400"` (normal, not bold).

### Color scheme custom properties (resolved)

```css
.color-scheme-4e3f3173-5698-4cc9-a3e8-1fe6eccd81a0 {
  --color-background: rgb(246 248 249 / 1.0);   /* solid #F6F8F9 */
  --color-foreground: rgb(0 0 0 / 1.0);
  --color-foreground-heading: rgb(0 0 0 / 1.0);
  --color-primary-button-background: rgb(255 126 151 / 1.0); /* #FF7E97 */
  --color-primary-button-text: rgb(255 255 255 / 1.0);
  …
}
```
(Source: `rendered.html:2139–2178`. Different from Section 2's `1945d457-…` which had transparent bg + gradient overlay.)

### `@font-face` references

Same as Section 2 inventory: `'circular_stdmedium'` and `'circular_stdbook'` declared in `rendered.html:85–98`, plus Inter weights loaded by theme. h2/h3 force-overridden to `'circular_stdmedium' !important` via `rendered.html:106–110`.

### `@keyframes` — none for this subtree

AOS uses CSS transitions, not keyframes. The fade-up reveal is `transition-property: opacity, transform` per `external-02-aos.css` (single-line file). See Section 2 inventory §3 / AOS reveal CSS — same rules apply (body data-attrs gate to `duration:.4s, easing:ease`).

### Decorative `:after` pseudo — NONE in Section 3

No `.custom-gradiant-industry:after` (Section 2's), no `.root-cases-technology:after` (Section 4's), no other decorative pseudo applies. Confirmed by:
- Section 3's `.main-container` does not carry `.custom-gradiant-industry` or `.root-cases-technology` modifier
- No `.color-scheme-4e3f3173-…:after` rule found in CSS
- Live probe confirms the section's bounding rect height = 580 px desktop = exactly content + 20 px main padding (no extra height from a pseudo)

## 4. Computed values (live probe — desktop 1440×900, mobile 390×844 @2×)

Section 3 scrolled into view, AOS animation completed before snapshot.

### Desktop

| Element | Property | Value | Notes |
|---|---|---|---|
| `.main-container` | `width × height` | `1440 × 580 px` | full viewport width |
| `.main-container` | `padding` | `10px 0 10px 0` | from inline `<style>` 5608 |
| `.main-container` | `background-color` | `rgb(246, 248, 249)` | solid `#F6F8F9` from `--color-background` |
| `.main-container` | `background-image` | `none` | **NO gradient** |
| `.page-width` | width | `1440 px` (− 20 px×2 padding = 1400 px content rail) | b00:4379 |
| `.top-header` | `width × height` | `1400 × 0 px` | empty, collapses |
| `.img-with-txt-keeper` | `width × height` | `1400 × 560 px` | flex row, image-driven height |
| `.img-with-txt-keeper` | `display` | `flex` | b00:8440 |
| `.img-with-txt-keeper` | `align-items` | `center` | b00:8440 |
| `.content-folder` | `width × height` | `840 × 420 px` | 60% of 1400 |
| `.content-folder` | `order` | `2` | RIGHT (img-left modifier) |
| `.content-folder` | `padding-left` | `80 px` | b00:8463 |
| `.content-folder` | `padding-right` | `0 px` | b00:8463 |
| `.photo-folder` | `width × height` | `560 × 560 px` | 40% of 1400 |
| `.photo-folder` | `order` | `1` | LEFT (img-left modifier) |
| `.content-folder h3` | font-family | `circular_stdmedium` | global override `rendered.html:109` |
| `.content-folder h3` | font-size | `32 px` | b00:8451 |
| `.content-folder h3` | font-weight | `400` | inherited; Circular Medium face |
| `.content-folder h3` | line-height | `38.4 px` (1.2) | theme h3 default |
| `.content-folder h3` | margin-top | `0 px` | UA reset somewhere; live-probe authoritative |
| `.content-folder h3` | margin-bottom | `32 px` | UA default `1em` (= 32 px font) |
| `.content-folder h3 strong` | color | `rgb(255, 126, 151)` | b00:8455 |
| `.content-folder h3 strong` | font-weight | `normal` | b00:8455 (`font-weight: normal`) |
| `.content-folder p` | font-family | `Inter, sans-serif` | theme paragraph |
| `.content-folder p` | font-size | `18 px` | theme paragraph |
| `.content-folder p` | line-height | `28.8 px` (1.6) | theme paragraph |
| `.content-folder p` | margin-top | `18 px` | UA default ~1em |
| `.content-folder p` | margin-bottom | `18 px` | UA default ~1em |
| `.content-folder ol` | margin-top | `18 px` | UA default `1em` |
| `.content-folder ol` | margin-bottom | `18 px` | UA default `1em` |
| `.content-folder ol` | padding-left | `15 px` | b00:8471 |
| `.content-folder ol` | list-style-type | `decimal` | UA default |
| `.content-folder ol li` | font-size | `18 px` | inherits .content-folder |
| `.content-folder ol li` | line-height | `28.8 px` (1.6) | inherits |
| `.content-folder ol li` | padding-bottom | `15 px` | b00:8474 |
| `.content-folder ol li` | display | `list-item` | UA |
| `.content-folder ol li::marker` | color | `rgb(0, 0, 0)` | UA default — black, NOT pink |
| `.content-folder ol li::marker` | font-weight | `400` | UA default |
| `.content-folder ol li strong` | color | `rgb(255, 126, 151)` | b00:8477 |
| `.photo-folder img` | `width × height` | `560 × 560 px` | 100% of column, square |
| `.photo-folder img` | border-radius | `20 px` | b00:8458 |
| `.photo-folder img` | natural intrinsic | `758 × 758 px` | served via `?width=1500` query, browser fetched 758 |
| `.photo-folder img` | loading | `lazy` (live runtime) | **vs HTML literal `eager`** — see §9 |

### Mobile

| Element | Property | Value | Notes |
|---|---|---|---|
| `.main-container` | width | `390 px` | viewport |
| `.main-container` | padding | `10px 0 10px 0` | unchanged from desktop |
| `.main-container` | background-color | `rgb(246, 248, 249)` | unchanged |
| `.page-width` | inner width | `350 px` | `390 - 20×2` |
| `.top-header` | `width × height` | `350 × 0 px` | empty |
| `.img-with-txt-keeper` | flex-wrap | `wrap` | b00:9514 |
| `.img-with-txt-keeper` | align-items | `initial` (= `stretch`) | b00:9423 |
| `.content-folder` | width | `350 px` | b00:9517 → 100% |
| `.content-folder` | order | `2` | b00:9517 — text below |
| `.content-folder` | padding-left | `0 px` | b00:9531 — img-left mobile reset |
| `.content-folder` | padding-right | `0 px` | b00:9517 |
| `.photo-folder` | width × height | `350 × 350 px` | b00:9522 → 100% |
| `.photo-folder` | order | `1` | b00:9522 — image above |
| `.content-folder h3` | font-size | `28 px` | b00:9728 (≤390 wins over 30 px @767) |
| `.content-folder h3` | line-height | `33.6 px` (1.2) | inherited |
| `.content-folder h3` | margin-top | `20 px` | b00:9526 |
| `.content-folder h3` | margin-bottom | `28 px` | UA default 1em (= 28 px font) |
| `.content-folder p` | unchanged from desktop | 18 px / 28.8 line-height / Inter | not viewport-gated |
| `.content-folder ol` | unchanged | padding-left 15 px, list-style decimal | not viewport-gated |
| `.content-folder ol li::marker` | color | `rgb(0, 0, 0)` | UA default |
| `.photo-folder img` | width × height | `350 × 350 px` | 100% of column |
| `.photo-folder img` | border-radius | `20 px` | unchanged |
| `.photo-folder img` | loading | `lazy` (live) | matches desktop runtime |

## 5. Rendered measurements (from crops)

### Desktop crop — `source/crops/section-04-causes-desktop.png`

- **Image:** **1440 × 580 px**, 523 KB.
- Section padding-top: 10 px; padding-bottom: 10 px.
- `.page-width` content rail: 1400 px (1440 − 20×2).
- Two-column row, **image LEFT** (40%, 560×560), **text RIGHT** (60%, 840×420). Row height 560 px (image-driven; text shorter so vertically centered via `align-items: center`).
- Content `padding-left: 80 px` (img-left modifier).
- h3: 32 px / line-height 38.4 / 2 lines (76.8 px stack height with 32 px margin-bottom).
- Body p (first): 18 px / line-height 28.8 / 1 line.
- ol: 3 li × ~58 px each (28.8 line × ~1.5 lines + 15 px padding-bottom).
- Body p (second): 18 px / line-height 28.8 / 2 lines.

### Mobile crop — `source/crops/section-04-causes-mobile.png`

- **Image:** **780 × 2130 px**, 751 KB. Width = 390 viewport × 2 (DPR=2).
- Section padding-top: 10 px; padding-bottom: 10 px.
- Single-column stack: image (350 × 350) on top, content (350 × 695) below.
- h3: 28 px / line-height 33.6 / ~4 lines (134 px tall).
- Body p (first): 18 px / line-height 28.8 / 2 lines.
- ol: 3 li × ~88–105 px (longer wrap on narrower column).
- Body p (second): 18 px / line-height 28.8 / 4 lines.

### Headline / body / list font sizes measured

| Property | Desktop | Mobile |
|---|---|---|
| h3 (subheading) font-size | 32 px | 28 px |
| h3 line-height | 38.4 px (1.2) | 33.6 px (1.2) |
| p (body) font-size | 18 px | 18 px |
| p line-height | 28.8 px (1.6) | 28.8 px (1.6) |
| ol li font-size | 18 px | 18 px |
| ol li line-height | 28.8 px (1.6) | 28.8 px (1.6) |
| ol li padding-bottom | 15 px | 15 px |
| ol padding-left | 15 px | 15 px |
| ol marker | decimal, black | decimal, black |
| photo img dims | 560 × 560 | 350 × 350 |
| photo border-radius | 20 px | 20 px |

## 6. JS behaviors

Same as Section 2 page-wide context. AOS-only.

- **AOS** (Animate On Scroll) v2.3.1 — confirmed by `rendered.html:315` (CSS), `rendered.html:2576` (script), `rendered.html:12842` (`AOS.init()`).
- Three `data-aos="fade-up"` elements in Section 3: `.top-header` (empty container), `.content-folder`, `.photo-folder`. All carry `aos-animate` class in captured HTML (post-animation state). Empty `.top-header` still gets the data-aos attribute even though it has no visible content.
- No Slick / Swiper / GSAP / anime.js / Lottie / motion.js for this subtree.
- No section-specific scroll handlers, no IntersectionObserver registrations targeting Section 3 classes.

Effective AOS animation per data-aos="fade-up" element:
- From: `opacity: 0; transform: translate3d(0, 100px, 0);`
- To: `opacity: 1; transform: translateZ(0);`
- Duration: 400 ms (body data-attr); easing: `ease` (body data-attr); delay: 0 (body data-attr).

## 7. Font-family resolution

| Element | Computed `font-family` | @font-face source | License |
|---|---|---|---|
| `h3` | `circular_stdmedium` | `rendered.html:85–91` (force-applied via `body:not(:has(.gps)) h1–h6` override at `rendered.html:106–110`) | **Paid** — Linotype |
| `<p>` (body) | `Inter, sans-serif` | Theme-loaded Inter `@font-face` blocks | **Free** (Google Fonts / Shopify-hosted) |
| `<ol>` / `<li>` | `Inter, sans-serif` | inherits .content-folder | Free |
| `<strong>` (inside h3, p, li) | inherits parent | — | inherits |

**Inherited rule from project:** Headings = Inter (project-wide), weights 500 plain / 700 `<strong>` accent, from `assets/bq-tokens.css` `var(--bq-font-sans)`. No section-specific font work needed for Section 3.

No new `@font-face` declarations are introduced by Section 3.

## 8. Asset list

| File | Intrinsic | Used at | alt | Reproducibility | Placeholder strategy |
|---|---|---|---|---|---|
| `4337ca017a2b882d987dd70b639b916e599b9b23_1.png` (Shopify CDN, `?v=1760430101`) | 1500 × 1500 (max width served via `srcset`); fetched at 758 × 758 in our probe at desktop | `.photo-folder img` | **MISSING** (no `alt` attribute) | Their photo (likely an editorial / clinical illustration of an under-eye area showing puffiness, dark circles, fine lines — the three "biological factors" the body lists) | Schema `image_picker` for user upload. Until uploaded: `placeholder_svg_tag` 'lifestyle-1' (or similar) sized 1:1, with hint label "Upload Section 3 image (1:1, ~1200 × 1200, illustrative under-eye visual)". Add Italian alt default like `"Primo piano del contorno occhi che mostra borse e occhiaie"`. |

No video, no decorative pseudo-element image (Section 3 has no `:after` decoration — confirmed in §3).

## 9. Triangulation discrepancies

### A. `<img loading>` attribute: HTML says `eager`, live runtime says `lazy`

- **HTML (`rendered.html:5652`):** `loading="eager"`.
- **Live probe runtime:** `getAttribute('loading')` returns `"lazy"`.
- **Likely cause:** the live page (https://botaniqueparis.com/) was updated since `rendered.html` was captured (the captured snapshot is older). Or a JS optimizer overrides the attribute.
- **Resolution for our build:** use `loading="lazy"`. Section 3 is below the fold (after hero + Section 2), so eager-loading would needlessly block initial paint. Live runtime authoritative; the captured `eager` was likely a copy-paste error on source's side.

### B. `<img>` `sizes` attribute is malformed (same as Section 2)

- **HTML:** `sizes="(min-width: narrowpx) -100px, (min-width: 750px) calc((100vw - 130px) / 1), calc((100vw - 50px) / 1)"` — `narrowpx` is invalid CSS length, `-100px` is invalid; first hint dropped by browser, falls back to second.
- **Resolution:** same as Section 2 — write a clean `sizes="(min-width: 768px) 40vw, 100vw"` for our build.

### C. `<img>` `alt` missing (accessibility violation in source)

- **HTML:** No `alt` attribute. WCAG 2.1 fail.
- **Resolution:** add Italian-language alt via schema `image_alt` setting; do NOT clone the missing alt.

### D. h3 desktop `margin-top` = 0 (no explicit CSS rule)

- **CSS:** No explicit reset on `.content-folder h3` desktop. UA default for h3 is `margin: 1em 0` (= 32 px both ends at 32 px font).
- **Live probe (desktop):** `margin-top: 0px` (something resets it; likely a global typography reset elsewhere in `external-00-base.css` not isolated by class match).
- **Live probe (mobile):** `margin-top: 20px` (b00:9526).
- **Resolution:** authoritative live values: desktop margin-top 0, mobile margin-top 20. Apply both in our build CSS.

### E. h3 desktop `margin-bottom` = 32 px (no explicit rule)

- **CSS:** No explicit `margin-bottom` rule on `.content-folder h3` desktop.
- **Live probe:** `margin-bottom: 32px` desktop, `28px` mobile.
- **Likely source:** UA default `1em` matches font-size (32 px desktop, 28 px mobile — both equal `1em`).
- **Resolution:** no discrepancy. Replicate as `margin-bottom: 1em` (auto-tracks font-size) or explicit values per breakpoint.

### F. ol / p UA-default vertical margins (no explicit rules)

- **CSS:** No explicit `margin-top` / `margin-bottom` on `.content-folder p` or `.content-folder ol`.
- **Live probe:** all `18px` top + bottom (UA default `1em` at body 18 px font-size).
- **Resolution:** no discrepancy. Match UA default behavior (1em both ends).

### G. `<ol>` markers render BLACK despite `<strong>` accent rule

- **HTML:** `<li><strong>Poor circulation </strong>causes …</li>` (the leading words wrapped in `<strong>` per item).
- **CSS:** `.content-folder ol li strong { color: #ff7e97 }` (b00:8477) colors the `<strong>` text pink.
- **Live probe:** `ol li::marker` color = `rgb(0, 0, 0)` (black) — markers do NOT inherit pink. Only the wrapped `<strong>` text is pink.
- **Resolution:** in our build, replicate the black decimal marker (UA default). Do NOT add `::marker { color: var(--bq-accent) }` — that would deviate from source. The pink-strong styling already cascades naturally via `.content-folder ol li strong`.

### H. Mobile h3 font-size cascade (confirmed: 28 px wins, narrower @media first)

- **CSS at b00:9526** (`@media max-width: 767px`): `font-size: 30px;`
- **CSS at b00:9728** (`@media max-width: 390px`): `font-size: 28px;`
- **Live probe at 390 px viewport:** `28 px` (narrower matches and wins via cascade order).
- **Resolution:** Use 28 px on ≤ 390, 30 px on 391–767. Same precedent as Section 2.

### I. `.top-header` is rendered but EMPTY — collapses to height 0

- **HTML:** `<div class="top-header aos-animate" data-aos="fade-up"></div>` — no inner content (`rendered.html:5623–5625`).
- **CSS:** `.top-header` has no padding/margin/min-height rule on the wrapper (only `.top-header h2 …` rules which require an h2 child).
- **Live probe:** `topHeader.height = 0px` both desktop and mobile.
- **Resolution:** in our build, omit the `.bq-causes__header` wrapper entirely (no h2, no decoration → no need for an empty container). The data-aos="fade-up" was applied for symmetry across image-with-text sections in source but contributes nothing visually here. Saving one DOM node + one fade-up animation.

### J. AOS animations would normally hide content on first render

- **HTML:** Three elements with `data-aos="fade-up"`. AOS CSS sets initial `opacity: 0; transform: translate3d(0, 100px, 0)`.
- **CSS:** AOS adds `.aos-animate` class on intersection → `opacity: 1; transform: translateZ(0)`.
- **Render in our captures:** content visible because Strategy-B sweep forces opacity:1 + neutralizes translate.
- **Resolution for our build:** AOS is loaded globally in `layout/theme.liquid` (Decision 2026-04-26). Apply `data-aos="fade-up"` to `.bq-causes__content` and `.bq-causes__photo` for parity. Skip the empty `.top-header` element.

### K. Section 3 has NO gradient, NO `:after` decoration, NO `.custom-gradiant-industry`

- **HTML:** `.main-container` carries `color-scheme-4e3f3173-…` and `gradient` classes only — no `.custom-gradiant-industry` or `.root-cases-technology`.
- **CSS:** `.gradient` class has no rule (verified by grep). The color-scheme-4e3f3173 cascade sets `--color-background: rgb(246 248 249 / 1.0)` solid.
- **Live probe:** `backgroundColor: rgb(246, 248, 249)`, `backgroundImage: none`.
- **Resolution:** apply solid `#F6F8F9` background on our build. No gradient. No decorative `:after`.

## 10. Italian copy

Out of scope per spec. Chat-Claude drafts separately.

### English source (verbatim, for reference)

**Subheading (h3):**
```
Under-eye aging isn't caused by genetics, dehydration or lack of sleep.
```
Pink-strong span: `Under-eye aging` (wrapped in `<strong>`).

**Body paragraph 1 (p):**
```
It's caused by three biological factors happening below your skin's surface.
```

**Ordered list (ol → 3 × li):**
1. **Poor circulation** causes deoxygenated blood to pool and create dark shadows.
2. **Weakened lymphatic drainage** allows fluid to accumulate overnight, creating puffiness.
3. **Collagen breakdown** thins the already-delicate skin, making every vessel and shadow more visible.

(Each li's leading phrase wrapped in `<strong>` for the pink accent — `Poor circulation`, `Weakened lymphatic drainage`, `Collagen breakdown`.)

**Body paragraph 2 (p):**
```
No topical cream or serum can reach deep enough to address these root causes. Which is exactly why the industry keeps selling them to you.
```

**No CTA / button.** No headline (h2). The empty `.top-header` div carries no copy.

### Image alt
Source has none; needs to be drafted in Italian by chat-Claude.

End of inventory. Stop.
