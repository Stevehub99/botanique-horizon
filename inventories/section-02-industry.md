# Section 2 — Industry context — SOURCE INVENTORY

Generated: 2026-04-26. Triangulated from `source/rendered.html`, `source/css/`, live-page Puppeteer probe (1440×900 desktop, 390×844 @2× mobile), and `source/crops/section-03-industry-{desktop,mobile}.png`.

PROJECT.md slug: Section 2 (industry context). Capture-pipeline index: 03 (the second non-empty `.shopify-section` in source DOM).

---

## 1. Section locator

- **Line range in `source/rendered.html`:** **5544–5606** (closes just before the next `.image-width-text-sec` at line 5607).
- **Top-level container:** `<div id="shopify-section-template--19760795549861__image_with_text_3RDTNB" class="shopify-section image-width-text-sec">` (`rendered.html:5544`).
- **Anchor classes / data-attributes:**
  - On the section root: `shopify-section`, `image-width-text-sec`.
  - On the immediate inner: `main-container`, `main-contain-template--19760795549861__image_with_text_3RDTNB` (hash-suffix; per-section padding hook), `custom-gradiant-industry`, `color-scheme-1945d457-7975-4e6b-96c7-8f51c1edfa6f`, `gradient` (`rendered.html:5553`).
  - Nested: `.page-width`, `.main-file` (empty), `.top-header.aos-animate` with `data-aos="fade-up"` (`rendered.html:5560`), `.img-with-txt-keeper`, `.content-folder.aos-animate data-aos="fade-up"` (`rendered.html:5572`), `.photo-folder.aos-animate data-aos="fade-up"` (`rendered.html:5587`).

## 2. HTML tree

Verbatim from `source/rendered.html:5544–5606`. Text content preserved as-is; English not translated.

```
<div id="shopify-section-template--19760795549861__image_with_text_3RDTNB"
     class="shopify-section image-width-text-sec">                              [5544]
  <style>
    .main-contain-template--19760795549861__image_with_text_3RDTNB {           [5545]
      padding-top: 30px;
      padding-bottom: 10px;
    }
  </style>
  <div class="main-container
              main-contain-template--19760795549861__image_with_text_3RDTNB
              custom-gradiant-industry
              color-scheme-1945d457-7975-4e6b-96c7-8f51c1edfa6f
              gradient">                                                       [5553]
    <div class=" page-width ">                                                 [5554]
      <div class="main-file"></div>                                            [5555]
      <div class="top-header aos-animate" data-aos="fade-up">                  [5560]
        <h2>How The <strong>Beauty Industry</strong> Profits Off Women's Biggest Insecurity</h2>   [5562]
      </div>
      <div class="img-with-txt-keeper   ">                                     [5566]
        <div class="content-folder aos-animate" data-aos="fade-up">            [5572]
          <h3>The beauty industry understands that under-eye bags and dark circles can be a <strong>woman's deepest insecurities.</strong></h3>   [5574]
          <p>So they've built a business model around it. They sell you creams that can't penetrate deep enough to work, provide just enough temporary hope to keep you buying, and when you finally give up…<br><br>They push you toward $2,400 filler appointments or $5,000+ surgery. It's not about fixing your problem. It's about squeezing every last dollar out of desperate women.</p>   [5578]
        </div>
        <div class="photo-folder aos-animate" data-aos="fade-up">              [5587]
          <img src="//botaniqueparis.com/cdn/shop/files/1ff01a6e0f78b16d0bbcf3884b3cb2e71d74a1b6.png?v=1760338926&width=1500"
               srcset="… 165w … 360w … 535w … 750w … 1070w … 1500w"
               width="1500" height="1500"
               sizes="(min-width: narrowpx) -100px, (min-width: 750px) calc((100vw - 130px) / 1), calc((100vw - 50px) / 1)">   [5591]
        </div>
      </div>
    </div>
  </div>
</div>                                                                         [5606]
```

Notes:
- `<img>` has **no `alt`** attribute (truly missing — accessibility issue in source).
- `srcset` provides 6 widths (165, 360, 535, 750, 1070, 1500). Intrinsic 1500×1500.
- `sizes` value is malformed: `(min-width: narrowpx) -100px` is invalid CSS — the browser ignores this hint and falls back to subsequent valid hint `(min-width: 750px) calc((100vw - 130px) / 1)` which equals viewport-130px.
- Three elements have `data-aos="fade-up"` + already-applied `aos-animate` class (so the captured HTML is post-AOS-animation state).

## 3. CSS rules

Citations: `source/css/external-00-base.css` unless noted (`b00:N` shorthand). Inline `<style>` blocks in rendered.html cited as `rendered.html:N`.

### Section root + container

| Selector | Rule | Cite | @media |
|---|---|---|---|
| `.main-contain-template--19760795549861__image_with_text_3RDTNB` | `padding-top: 30px; padding-bottom: 10px;` | rendered.html:5545–5548 | TOP (per-section inline) |
| `.shopify-section:not(.header-section) :is(.section, .cart__summary-container)` | `background: transparent` | b00:435 | TOP |

### `.custom-gradiant-industry` (the visible gradient bg + decorative pseudo)

| Selector | Rule | Cite | @media |
|---|---|---|---|
| `.custom-gradiant-industry` | `position: relative; background: linear-gradient(180deg, #FFE9ED 0%, #F6F8F9 100%);` | b00:8259–8262 | TOP |
| `.custom-gradiant-industry:after` | `content:''; position:absolute; top:0; left:0; width:200px; background-image:url(/cdn/shop/files/11_5.png?v=1760433321); height:255px; background-repeat:no-repeat;` | b00:8264–8270 | TOP |
| `.custom-gradiant-industry:after, .root-cases-technology:after` | `display: none;` | b00:8771 | `@media (max-width: 991px)` |

### `.page-width`

| Selector | Rule | Cite | @media |
|---|---|---|---|
| `.page-width` | `max-width: 1440px; padding: 0 20px; margin: auto;` | b00:3964–3967 | TOP |
| `.body-pl-new-index .page-width` | `max-width: 1200px;` | b00:7776 | TOP |
| `.body-pl-new-index .page-width` | `max-width: 980px;` | b00:8757 | `@media (max-width: 1199px)` |
| `.body-pl-new-index .page-width` | `max-width: 730px;` | b00:8788 | `@media (max-width: 991px)` |

The body (`<body class="page-width-narrow … body-index …">`, `rendered.html:3235`) does **NOT** have `body-pl-new-index`, so the narrower overrides do not apply. Effective `.page-width` cap is **1440 px** with **20 px horizontal padding**.

### `.top-header h2` (the section heading)

| Selector | Rule | Cite | @media |
|---|---|---|---|
| `.top-header h2` | `font-size: 46px; text-align: center; max-width: 700px; margin: auto; color: #000; margin-bottom: 30px;` | b00:7812–7818 | TOP |
| `.top-header h2 strong` | `color: #ff7e97;` | b00:7816 | TOP |
| `.top-header h2` | `font-size: 30px;` | b00:8878 | `@media (max-width: 767px)` |
| `.top-header h2` | `font-size: 28px;` | b00:9053 | `@media (max-width: 390px)` |

Plus the global font-family override (`rendered.html:106–110`):
```
body:not(:has(.gps)) h1, h2, h3, h4, h5, h6 {
  font-family: 'circular_stdmedium' !important;
}
```

### `.img-with-txt-keeper` (the row container)

| Selector | Rule | Cite | @media |
|---|---|---|---|
| `.img-with-txt-keeper` | `display: flex; align-items: center;` | b00:7826–7829 | TOP |
| `.img-with-txt-keeper.img-left .content-folder` | `order: 2; padding-left: 80px; padding-right: 0;` | b00:7848 | TOP |
| `.img-with-txt-keeper.img-left .photo-folder` | `order: 1;` | b00:7855 | TOP |
| `.img-with-txt-keeper` | `align-items: initial;` | b00:8805 | `@media (max-width: 991px)` |
| `.img-with-txt-keeper` | `flex-wrap: wrap;` | b00:8884 | `@media (max-width: 767px)` |
| `.img-with-txt-keeper.img-left .content-folder` | `padding-left: 0;` | b00:8897 | `@media (max-width: 767px)` |

This section's container does NOT have `.img-left` modifier — text is on left (default), image on right.

### `.content-folder` (text column)

| Selector | Rule | Cite | @media |
|---|---|---|---|
| `.content-folder` | `width: 60%; padding-right: 40px;` | b00:7830–7832 | TOP |
| `.content-folder h3` | `font-size: 32px; color: #000;` | b00:7833 | TOP |
| `.content-folder h3 strong` | `color: #ff7e97; font-weight: normal;` | b00:7836 | TOP |
| `.content-folder ol` | `padding-left: 15px;` | b00:7855 | TOP (not used in Section 2 — no `<ol>`) |
| `.content-folder ol li` | `padding-bottom: 15px;` | b00:7857 | TOP (not used) |
| `.content-folder ol li strong` | `color: #ff7e97;` | b00:7861 | TOP (not used) |
| `.content-folder .btn` | `background:#000; color:#fff; padding:15px 40px; font-size:20px; display:block; width:max-content; margin-top:30px;` | b00:7863, 7875 | TOP (not used — no CTA in Section 2) |
| `.content-folder` | `width: 100%; padding-right: 0px; order: 2;` | b00:8884 | `@media (max-width: 767px)` |
| `.content-folder h3` | `font-size: 30px; color: #000; margin-top: 20px;` | b00:8891 | `@media (max-width: 767px)` |
| `.content-folder h3` | `font-size: 28px;` | b00:9055 | `@media (max-width: 390px)` |

### `.photo-folder` (image column)

| Selector | Rule | Cite | @media |
|---|---|---|---|
| `.photo-folder` | `width: 40%;` | b00:7827–7829 | TOP |
| `.photo-folder video, .photo-folder img` | `width: 100%; border-radius: 20px;` | b00:7841 | TOP |
| `.photo-folder` | `width: 100%; order: 1;` | b00:8888 | `@media (max-width: 767px)` |

### Color scheme (resolves text color)

Inline `<style>` at `rendered.html:1987–2026` (the section's `color-scheme-1945d457-…` class):

```css
.color-scheme-1945d457-7975-4e6b-96c7-8f51c1edfa6f {
  --color-background: rgb(0 0 0 / 0.0);   /* transparent — gradient shows */
  --color-foreground: rgb(0 0 0 / 1.0);   /* black */
  --color-foreground-heading: rgb(0 0 0 / 1.0);
  --color-primary: rgb(0 0 0 / 1.0);
  --color-primary-button-background: rgb(255 126 151 / 1.0);  /* #FF7E97 */
  --color-primary-button-text: rgb(255 255 255 / 1.0);
  …
}
```

### `@font-face` — fonts referenced by this subtree

`rendered.html:85–98` (inline `<style>`):

```css
@font-face {
  font-family: 'circular_stdmedium';
  src: url('https://cdn.shopify.com/s/files/1/0264/2912/8756/files/circular-std-medium-500-webfont.woff2?v=1758617124') format('woff2'),
       url('https://cdn.shopify.com/s/files/1/0264/2912/8756/files/circular-std-medium-500-webfont.woff?v=1758617124') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'circular_stdbook';
  src: url('https://cdn.shopify.com/s/files/1/0264/2912/8756/files/circular-std-book.woff?v=1759299865') format('woff2'),
       url('https://cdn.shopify.com/s/files/1/0264/2912/8756/files/circular-std-book.woff2?v=1759299865') format('woff');
  font-weight: normal;
  font-style: normal;
}
```

Plus Inter family (multiple weights/styles) loaded via additional `@font-face` declarations in `rendered.html` (the theme's body font; see Section 1's inventory).

### `@keyframes` for animations

None applicable — AOS uses CSS `transition` not `@keyframes`. The reveal is a simple opacity + transform transition.

### AOS reveal CSS (the only animation in this subtree)

From `source/css/external-02-aos.css:1` (single-line minified file). Resolved relevant declarations:

```css
[data-aos] {                       /* base, line ~1 */
  /* default opacity + transform set by sub-selectors */
}
[data-aos^=fade] {
  opacity: 0;
  transition-property: opacity, transform;
}
[data-aos^=fade].aos-animate {
  opacity: 1;
  transform: translateZ(0);
}
[data-aos=fade-up] {
  transform: translate3d(0, 100px, 0);
}

/* Body has data-aos-duration="400" data-aos-easing="ease" (rendered.html:3235) */
[data-aos][data-aos][data-aos-duration="400"],
body[data-aos-duration="400"] [data-aos] {
  transition-duration: .4s;
}
[data-aos][data-aos][data-aos-easing=ease],
body[data-aos-easing=ease] [data-aos] {
  transition-timing-function: ease;
}
```

Effective animation for each `data-aos="fade-up"` element in this section:

- **From:** `opacity: 0; transform: translate3d(0, 100px, 0);`
- **To:** `opacity: 1; transform: translateZ(0);`
- **Duration:** 400 ms
- **Easing:** `ease`
- **Trigger:** AOS library adds `.aos-animate` class when element enters viewport.

### Custom-property values (resolved via cascade)

| var | value | source |
|---|---|---|
| `--narrow-page-width` | `90rem` (1440 px) | `snippets/theme-styles-variables.liquid:132` |
| `--page-margin` | `40px` at ≥750 px (else 16 px) | b00:328, 335 |
| `--page-content-width` | `var(--narrow-page-width)` (1440 px) | b00:355 |
| `--page-width` | `1440 + 80 = 1520 px` (content-width + 2× margin) | b00:359 |
| `--color-background` (this section) | `rgb(0 0 0 / 0.0)` (transparent) | rendered.html:1988 |
| `--color-foreground` | `rgb(0 0 0 / 1.0)` (black) | rendered.html:1996 |
| `--color-foreground-heading` | `rgb(0 0 0 / 1.0)` | rendered.html:1998 |

## 4. Computed values (live probe — desktop 1440 × 900, mobile 390 × 844 @2×)

Source: live page, scrolled section into center, AOS animation completed.

### Desktop

| Element | Property | Computed value | Notes |
|---|---|---|---|
| `.main-container` | `width` | `1440 px` | full body width |
| `.main-container` | `padding` | `30px 0 10px 0` | from inline `<style>` at 5545 |
| `.main-container` | `background-image` | `linear-gradient(rgb(255, 233, 237) 0%, rgb(246, 248, 249) 100%)` | matches `.custom-gradiant-industry` |
| `.page-width` | `width` | (effective) `1400 px` content + 20 px×2 padding | from b00:3964 |
| `.img-with-txt-keeper` | `width × height` | `1400 × 560 px` | flex row |
| `.img-with-txt-keeper` | `display` | `flex` | |
| `.img-with-txt-keeper` | `align-items` | `center` | b00:7826 |
| `.content-folder` | `width × height` | `840 × 320 px` | 60% of 1400 |
| `.content-folder` | `padding-right` | `40 px` | b00:7830 |
| `.content-folder` | `font-family` | `Inter, sans-serif` | inherited theme paragraph font |
| `.content-folder` | `font-size` | `18 px` | inherited |
| `.content-folder` | `line-height` | `28.8 px` (1.6) | inherited |
| `.photo-folder` | `width × height` | `560 × 560 px` | 40% of 1400; image natural ratio drives equal height |
| `.top-header h2` | `font-family` | `circular_stdmedium` | global override line 109 |
| `.top-header h2` | `font-size` | `46 px` | b00:7812 |
| `.top-header h2` | `font-weight` | `400` | inherited; the Circular Medium face renders the medium weight |
| `.top-header h2` | `line-height` | `55.2 px` (1.2) | inherited from theme h2 |
| `.top-header h2` | `color` | `rgb(0, 0, 0)` | b00:7812 |
| `.top-header h2` | `text-align` | `center` | b00:7812 |
| `.top-header h2` | `max-width` | `700 px` | b00:7812 |
| `.top-header h2` | `margin` | `0 350px 30px 350px` (centered) | b00:7812 + auto computation |
| `.content-folder h3` | `font-family` | `circular_stdmedium` | global override |
| `.content-folder h3` | `font-size` | `32 px` | b00:7833 |
| `.content-folder h3` | `font-weight` | `400` | inherited |
| `.content-folder h3` | `line-height` | `38.4 px` (1.2) | theme h3 |
| `.content-folder h3` | `margin-bottom` | `32 px` | computed (likely 1em on h3) |
| `.content-folder h3` | `text-align` | `start` (left) | default |
| `.content-folder p` | `font-family` | `Inter, sans-serif` | theme paragraph |
| `.content-folder p` | `font-size` | `18 px` | theme paragraph default |
| `.content-folder p` | `font-weight` | `400` | |
| `.content-folder p` | `line-height` | `28.8 px` (1.6) | |
| `.content-folder p` | `margin-top` | `18 px` | |
| `.content-folder p` | `color` | `rgb(0, 0, 0)` | |
| `.photo-folder img` | `width × height` | `560 × 560 px` | 100% of column, square |
| `.photo-folder img` | `border-radius` | `20 px` | b00:7841 |
| `.photo-folder img` | `natural width × height` | `1257 × 1257 px` | from probe (resized via Shopify CDN `?width=1500`) |

### Mobile

| Element | Property | Computed value | Notes |
|---|---|---|---|
| `.main-container` | `width` | `390 px` | viewport width |
| `.main-container` | `padding` | `30px 0 10px 0` | unchanged |
| `.page-width` | computed inner width | `390 - 40 = 350 px` | `.page-width { padding: 0 20px }` |
| `.img-with-txt-keeper` | `flex-wrap` | `wrap` | b00:8884 |
| `.img-with-txt-keeper` | `align-items` | `initial` (= `stretch`) | b00:8805 |
| `.content-folder` | `width × height` | `350 × 533 px` | 100% width on mobile |
| `.content-folder` | `order` | `2` | b00:8884 — text below image |
| `.content-folder` | `padding-right` | `0 px` | b00:8884 |
| `.photo-folder` | `width × height` | `350 × 350 px` | 100% width, 1:1 ratio preserved |
| `.photo-folder` | `order` | `1` | b00:8888 — image above text |
| `.top-header h2` | `font-size` | `28 px` | `@media (max-width: 390px)` rule fires (b00:9053) |
| `.top-header h2` | `line-height` | `33.6 px` (1.2) | |
| `.top-header h2` | `max-width` | `700 px` (does not constrain since viewport narrower) | |
| `.content-folder h3` | `font-size` | `28 px` | b00:9055 wins over b00:8891 (30 px) |
| `.content-folder h3` | `margin-top` | `20 px` | b00:8891 |
| `.content-folder h3` | `margin-bottom` | `28 px` | computed |
| `.content-folder p` | unchanged from desktop | 18 px / 28.8 / Inter | theme default not viewport-gated |
| `.photo-folder img` | `width × height` | `350 × 350 px` | |
| `.photo-folder img` | `border-radius` | `20 px` | unchanged |

## 5. Rendered measurements (from crops)

### Desktop crop — `source/crops/section-03-industry-desktop.png`

- **Image dimensions:** **1440 × 740 px**, 666 KB. Width matches viewport (no DPR scaling for desktop pass).
- Section top padding: 30 px (CSS); bottom padding: 10 px (CSS).
- Container max-width: 1400 px content + 20 px×2 = 1440 px (matches viewport).
- Two-column row: text left 60%, image right 40%; row height 560 px (driven by 1:1 image at column width).
- Heading h2 width 700 px, height 110.4 px (two lines), centered, 30 px bottom margin.
- Subheading h3: 32 px font, line-height 38.4 px, ~3 lines fitting inside 800 px column width minus 40 px right padding.
- Body p: 18 px font, line-height 28.8 px, ~6 lines.

### Mobile crop — `source/crops/section-03-industry-mobile.png`

- **Image dimensions:** **780 × 2108 px**, 942 KB. Width = 390 viewport × 2 (DPR=2).
- Section top padding: 30 px; bottom padding: 10 px (computed from CSS padding × 1; DPR doubles pixel coords but padding values are CSS px).
- Single-column stack: image (350 × 350) on top, content (350 × 533) below.
- h2: 28 px font, two lines (~67 px tall after line-height).
- h3: 28 px font, ~5 lines after wrap.

### Headline / body font-size measured

| Property | Desktop | Mobile |
|---|---|---|
| h2 (section heading) font-size | 46 px | 28 px |
| h2 line-height | 55.2 px (1.2 ratio) | 33.6 px (1.2) |
| h3 (subheading) font-size | 32 px | 28 px |
| h3 line-height | 38.4 px (1.2) | 33.6 px (1.2) |
| p (body) font-size | 18 px | 18 px |
| p line-height | 28.8 px (1.6) | 28.8 px (1.6) |

### List bullet / numbered list

**Not present** in this section. No `<ol>` or `<ul>` in the subtree.

## 6. JS behaviors

### Script tags affecting this subtree

- `<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>` — `rendered.html:2576` — AOS library v2.3.1 from unpkg.
- `<script>AOS.init();</script>` — `rendered.html:12842` — initialization with default options.
- `<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">` — `rendered.html:315` — AOS stylesheet.

### Library detection

- **AOS** (Animate On Scroll) v2.3.1 — confirmed by class signatures `data-aos="fade-up"`, `aos-animate`, presence of `external-02-aos.css`, and explicit script tag at line 2576.
- No Slick, Swiper, GSAP, anime.js, Lottie, or motion.js references for this section.
- No `IntersectionObserver` registrations specifically for this section (AOS uses its own internal scroll-position math, not IO, in v2.x).

### Init config

`AOS.init()` is called with **no arguments** (`rendered.html:12842`). Defaults apply, but `<body>` carries data-attributes that override library defaults globally (`rendered.html:3235`):

```html
<body … data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
```

Effective config for every `data-aos` element on the page (including this section's three): duration 400 ms, easing `ease`, delay 0. AOS's CSS gates the timing via these data-attributes (see Section 3 / AOS reveal CSS).

### Observed motion on live source

- Three sub-elements (`.top-header`, `.content-folder`, `.photo-folder`) each animate **fade-up**: 100 px below + opacity 0 → translate(0,0) + opacity 1, over 400 ms with `ease` easing.
- All three carry the same `data-aos="fade-up"` and `data-aos-delay` (none → 0). They animate simultaneously when the section enters viewport.
- No hover effects, no parallax, no scroll-triggered transforms beyond the single AOS fade-up.

### Behavioral comparison plan for build-time

- Replicate fade-up reveal with vanilla CSS + IntersectionObserver: opacity:0 + translateY(100px) initial → opacity:1 + translate(0) on intersect, transition 400 ms ease.
- All three blocks should fire concurrently (no stagger).
- Or: leave content visible by default (no reveal) and skip the animation. PROJECT.md doesn't require source's animations 1:1; this is a "nice-to-have" decoration.

## 7. Font-family resolution

| Element | Computed `font-family` | @font-face source | License |
|---|---|---|---|
| `h2` | `circular_stdmedium` | `rendered.html:85–91` (force-applied via `body:not(:has(.gps)) h1–h6` override at `rendered.html:106–110`) | **Paid** — Circular Std Medium, Linotype |
| `h3` | `circular_stdmedium` | same as h2 | Paid |
| `<p>` (body) | `Inter, sans-serif` | Theme-loaded Inter `@font-face` blocks (multiple weights at rendered.html, see Section 1 inventory); theme paragraph default | **Free** (Inter is on Google Fonts; Shopify hosts `inter_n4`/`inter_n7`) |
| `<strong>` inside h2/h3/p | inherits parent | inherits | inherits |

### Closest free Google Fonts equivalents (Circular Std Medium replacement)

Already documented in Section 1's inventory. Headlines in Section 2 inherit the same global override so the Inter substitute applied in Section 1 covers this section too. No additional font work required.

For our build, we already use Inter at weight 500 (plain) + 700 (bold/strong) for h1; same approach extends to h2 and h3 here.

## 8. Asset list

| File | Intrinsic | Used at | alt | Reproducibility | Placeholder strategy |
|---|---|---|---|---|---|
| `1ff01a6e0f78b16d0bbcf3884b3cb2e71d74a1b6.png` (Shopify CDN, `?v=1760338926`) | 1500 × 1500 (max width served); served as 1257×1257 in our probe at `width=1500` | `.photo-folder img` (right column) | **MISSING** (no alt attribute) | Their photo (likely a stock-photo composition of a tired/upset woman touching her under-eyes); cannot be cloned 1:1 for IP/licensing reasons | Section schema setting `image_picker` for the user to upload an equivalent licensed photo. Until uploaded: a 1:1 placeholder (e.g., `placeholder_svg_tag` 'lifestyle-1') with a hint label "Upload industry-context image (1:1, ~1200 × 1200)". |
| `11_5.png` (Shopify CDN, `?v=1760433321`) | unknown | `.custom-gradiant-industry:after` decorative pseudo-element (top-left, 200×255 px on desktop only) | n/a (decorative bg, hidden ≤991px) | Their decorative graphic — likely a wavy line / brand mark | Optional. Skip in V1; can add later as a section schema `image_picker` for "decorative top-left graphic". |

## 9. Triangulation discrepancies

### A. h3 mobile font-size rule conflict

- **CSS at b00:8891** (`@media max-width: 767px`): `font-size: 30px;`
- **CSS at b00:9055** (`@media max-width: 390px`): `font-size: 28px;`
- **Render at 390 px viewport (live probe):** `28 px` (the smaller @media wins, expected).
- **Crop at 780 px wide (mobile capture, viewport 390 @2×):** measured h3 ~28 px CSS = 56 device px tall per line → consistent.
- **Resolution:** No discrepancy; 28 px on ≤390 px, 30 px on 391–767 px. Use **28 px** for our mobile build at default capture viewport.

### B. h3 has `margin-bottom: 32 px` desktop computed but no explicit CSS rule for that

- **CSS:** No explicit `margin-bottom` rule on `.content-folder h3` for desktop.
- **Render computed:** `margin-bottom: 32 px` (probe).
- **Likely source:** browser default `1em` (32 px font-size = 32 px margin-bottom on h3? Actually browser default for h3 is `1em` top + bottom). The 32 px equals exactly h3 font-size → confirms inherited browser/UA default `margin: 1em 0`.
- **Resolution:** No discrepancy. Replicate as `margin-bottom: 1em` (= 32 px at 32 px font) or explicit 32 px desktop / 28 px mobile.

### C. h3 has `margin-top: 20px` mobile but `0 px` desktop

- **CSS:** `b00:8891 .content-folder h3 { margin-top: 20px; }` — only inside `@media max-width: 767px`.
- **Render mobile:** `20 px` (correct).
- **Render desktop:** `0 px` (not in any matching rule; UA default for h3 is `1em` = 32 px which the CSS doesn't override on desktop … but probe shows 0 px on desktop).
- **Likely source:** another rule resets margin-top elsewhere (general typography reset). Without finding it, the live probe is authoritative: **desktop margin-top = 0**, **mobile margin-top = 20**.
- **Resolution:** Use computed value (margin-top 0 desktop, 20 mobile). Cite the live probe as evidence.

### D. `<img>` `sizes` attribute is malformed

- **HTML:** `sizes="(min-width: narrowpx) -100px, (min-width: 750px) calc((100vw - 130px) / 1), calc((100vw - 50px) / 1)"` — `narrowpx` is not a valid CSS length unit; `-100px` is invalid; first hint is ignored by browser. Falls back to second hint.
- **Resolution:** Skip the malformed first hint in our build. Use a clean `sizes="(min-width: 750px) 50vw, 100vw"` for our 2-column desktop / stacked mobile layout.

### E. AOS animations would normally hide content on first render

- **HTML:** Elements already have `aos-animate` class applied → already-revealed state.
- **CSS:** `[data-aos^=fade]` initial `opacity: 0; transform: translate3d(0, 100px, 0)`.
- **Render in our captures:** content is visible because Strategy-B sweep forces opacity:1 + neutralizes translate.
- **Resolution:** When building, decide between (a) replicating fade-up reveal with vanilla JS, or (b) skipping it. PROJECT.md is silent on this. Flag for chat-Claude / user decision.

### F. `<img>` lacks `alt` attribute

- **HTML:** No `alt` on the photo-folder image.
- **Accessibility:** missing `alt` on a content-meaningful image is a WCAG violation in the source.
- **Resolution for our build:** add a meaningful alt (Italian, e.g., "Donna preoccupata che si tocca il contorno occhi" or whatever copy describes the eventual user-supplied photo). Source's accessibility flaw should NOT be cloned.

## 10. Copy inventory (English source — verbatim, not translated)

### Headline (h2)
```
How The Beauty Industry Profits Off Women's Biggest Insecurity
```
Pink-emphasis word(s) wrapped in `<strong>`: `Beauty Industry`.

### Subheading (h3)
```
The beauty industry understands that under-eye bags and dark circles can be a woman's deepest insecurities.
```
Pink-emphasis word(s) wrapped in `<strong>`: `woman's deepest insecurities.`

### Body paragraph (p)
```
So they've built a business model around it. They sell you creams that can't penetrate deep enough to work, provide just enough temporary hope to keep you buying, and when you finally give up…

They push you toward $2,400 filler appointments or $5,000+ surgery. It's not about fixing your problem. It's about squeezing every last dollar out of desperate women.
```
(Single `<p>` with a `<br><br>` paragraph break between the two sentences — `rendered.html:5578`.)

### CTA / button text

**None.** Section 2 has no CTA — only headline + subhead + body + image.

### Italian translation

Out of scope per spec. To be drafted separately by chat-Claude.

---

End of inventory. Stop.

---

## Follow-up probes

### 1. AOS usage scope (page-wide, not just Section 2)

- **Total `data-aos` attributes in `source/rendered.html`:** **72**.
- **Distinct values + counts:**
  - `fade-up` × 68
  - `fade-down` × 4
- **Per-element overrides** for `data-aos-delay`, `data-aos-duration`, `data-aos-offset`, `data-aos-anchor`, `data-aos-once`, `data-aos-mirror`: **none**. Every override comes from the single `<body>` element (`rendered.html:3235`):
  - `data-aos-easing="ease"` (1 occurrence — body)
  - `data-aos-duration="400"` (1 — body)
  - `data-aos-delay="0"` (1 — body)
- **Recommendation:** Load AOS once globally in `layout/theme.liquid` (script + stylesheet + `AOS.init()` after content) — 72 reveals across 19 sections is well past per-section duplication threshold; one global setup covers all sections with the same defaults.

### 2. Font substitution — project-wide inherited rule

- `assets/bq-tokens.css:1` imports Inter from Google Fonts (weights 400/500/600/700/800).
- `assets/bq-tokens.css:17` defines `--bq-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif;`.
- `sections/bq-hero.liquid:280` applies `font-family: var(--bq-font-sans);` on `.bq-hero` (cascades to all descendants including h1/h2/h3 + body text).
- Section 1 headline plain weight = 500, accent `<strong>` = 700.
- **Inherited rule (Section 2 adopts as-is):** Headings = Inter, weights 500 (plain) / 700 (`<strong>` accent), from `assets/bq-tokens.css` var `--bq-font-sans`.
- **Note (no change applied):** Manrope is generally considered a closer visual match to Circular Std at 500 weight (more rounded geometric proportions; Inter's apertures feel slightly humanist/heavier). If we ever revisit the substitution, Manrope-500 + Manrope-700 is the candidate to A/B against Inter — but per the inheritance rule, sticking with Inter for Section 2.

### 3. Decorative `:after` image (`11_5.png`)

Omit. Matches Section 1 precedent ("Decorative full-bleed bg PNG omitted"). One line: do not reproduce the section pseudo-element decoration; rely on the `linear-gradient` background alone.
