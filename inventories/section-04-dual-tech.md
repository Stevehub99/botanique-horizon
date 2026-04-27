# Section 4 — Dual-technology — SOURCE INVENTORY

Generated: 2026-04-27. Triangulated from `source/rendered.html`, `source/css/external-00-base.css`, live-page Puppeteer probe (1440×900 desktop, 390×844 @2× mobile), and `source/crops/section-05-dual-tech-{desktop,mobile}.png`.

PROJECT.md slug: Section 4 (Dual-technology). Capture-pipeline index: 05. Family: image-text. Second instance to be built — schema extends `bq-image-text` from Section 3 baseline.

---

## 1. Section locator

- **Line range in `source/rendered.html`:** **5668–5750** (closes immediately before `image_with_text_fmJKeW` opens at line 5751).
- **Top-level container:** `<div id="shopify-section-template--19760795549861__image_with_text_xQzFck" class="shopify-section image-width-text-sec">` (`rendered.html:5668`).
- **Anchor classes / data-attributes:**
  - Section root: `shopify-section`, `image-width-text-sec`.
  - Inner container (`rendered.html:5677`): `main-container`, `main-contain-template--19760795549861__image_with_text_xQzFck` (per-section padding hook), **`root-cases-technology`** (NEW family modifier — drives decorative `:after`), `color-scheme-4e3f3173-5698-4cc9-a3e8-1fe6eccd81a0` (same as Section 3), `gradient`.
  - Layout: `.page-width`, `.main-file` (empty), `.top-header.aos-animate data-aos="fade-up"` (**EMPTY** — `rendered.html:5684–5686`, same as Section 3), `.img-with-txt-keeper` (**no `img-left`** — image right by default), `.content-folder.aos-animate data-aos="fade-up"`, `.photo-folder.aos-animate data-aos="fade-up"`.

## 2. HTML tree

Verbatim from `source/rendered.html:5668–5750`. English text preserved.

```
<div id="shopify-section-template--19760795549861__image_with_text_xQzFck"
     class="shopify-section image-width-text-sec">                              [5668]
  <style>
    .main-contain-template--19760795549861__image_with_text_xQzFck {           [5669]
      padding-top: 10px;
      padding-bottom: 30px;
    }
  </style>
  <div class="main-container
              main-contain-template--19760795549861__image_with_text_xQzFck
              root-cases-technology
              color-scheme-4e3f3173-5698-4cc9-a3e8-1fe6eccd81a0
              gradient">                                                       [5677]
    <div class=" page-width ">                                                 [5678]
      <div class="main-file"></div>                                            [5679]
      <div class="top-header aos-animate" data-aos="fade-up">                  [5684]
        <!-- EMPTY: no h2 -->
      </div>                                                                   [5686]
      <div class="img-with-txt-keeper   ">                                     [5688]
        <div class="content-folder aos-animate" data-aos="fade-up">            [5694]
          <h3><strong>At Botanique Paris,</strong> we use a RevitalEyes dual-technology to address all three root causes.</h3>   [5696]
          <ol>                                                                 [5700]
            <li><strong>Red Light Therapy</strong> (630-660nm) penetrates 2-3mm deep to increase circulation and stimulate collagen production at the cellular level.<br></li>
            <li><strong>EMS Micro-currents</strong> drain accumulated lymphatic fluid and tones the 43 muscles around your eyes.</li>
          </ol>
          <p>Together, they address poor circulation, fluid retention, and collagen breakdown - the actual problems causing your bags and dark circles.</p>
          <a class="btn" href="/products/revitaleyes">Rejuvenate Your Under Eyes Today</a>   [5704]
          <div class="section-last-icon-text">                                 [5707]
            <div class="icon-block-part">                                       [5709]
              <span><svg width=14 height=14 …green-circle+white-check…></svg></span>
              <p>365-Day Money Back Guarantee </p>                              [5713]
            </div>
            <div class="icon-block-part">                                       [5718]
              <span><svg width=14 height=14 …green-circle+white-check…></svg></span>
              <p>Express Shipping Worldwide</p>                                 [5723]
            </div>
          </div>
        </div>
        <div class="photo-folder aos-animate" data-aos="fade-up">              [5732]
          <video playsinline autoplay loop="loop" width="100%" muted="muted"
                 preload="metadata"
                 poster="//botaniqueparis.com/cdn/shop/files/preview_images/ff469e97a4ba4dc6a1f359bd9f9eef8b.thumbnail.0000000000_1100x.jpg?v=1764368177">  [5736]
            <source src="//botaniqueparis.com/cdn/shop/videos/c/vp/ff469e97a4ba4dc6a1f359bd9f9eef8b/ff469e97a4ba4dc6a1f359bd9f9eef8b.HD-1080p-4.8Mbps-64071228.mp4?v=0"
                    type="video/mp4">
            <img src="//botaniqueparis.com/cdn/shop/files/preview_images/ff469e97a4ba4dc6a1f359bd9f9eef8b.thumbnail.0000000000_1100x.jpg?v=1764368177">
          </video>
        </div>
      </div>
    </div>
  </div>
</div>                                                                         [5750]
```

Notable shape vs. Section 3:

- **No intro `<p>`.** Subtree is: `<h3>` → `<ol>` (2 items) → 1 closing `<p>` → `<a class="btn">` → `<div class="section-last-icon-text">`. Section 3's order was `<h3>` → intro `<p>` → `<ol>` → closing `<p>`.
- **`<a class="btn">`** (line 5704) — first CTA in the family. Label `Rejuvenate Your Under Eyes Today`, href `/products/revitaleyes`. Same href as the hero CTA.
- **`<div class="section-last-icon-text">`** (line 5707) — 2-item trust row with green-circle SVG checkmarks (inline `<svg>`, not `<img>`). Text: "365-Day Money Back Guarantee" and "Express Shipping Worldwide" — verbatim repeats from Section 1's hero trust row.
- **`<video>` in `.photo-folder`** (line 5736) — replaces Section 3's `<img>`. Has `playsinline autoplay loop="loop" muted="muted" preload="metadata"`, plus `poster` attribute and inner `<source>` + `<img>` fallback. Same media-type-toggle pattern as the hero video. **`<img>` inside `<video>` has no `alt`.**
- `<ol>` first `<li>` ends with a stray `<br>` inside `<strong>` boundary — inconsistent with second `<li>`. Cosmetic; CSS doesn't styling-target it.

## 3. CSS rules

Citations: `source/css/external-00-base.css` (`b00:N` shorthand). Inline `<style>` blocks in rendered.html cited as `rendered.html:N`.

### Family-shared rules — see Section 3 inventory

The following selectors apply identically here. Refer to **`inventories/section-03-causes.md` §3** for full bodies + media-query context. Quick references:

| Selector | Cite | Note |
|---|---|---|
| `.shopify-section:not(.header-section) :is(.section, …)` | b00 (Horizon section base) | Same as Section 3 §3 |
| `.page-width { max-width: 1440px; padding: 0 20px; margin: auto; }` | b00:4379–4382 | Same. Body class `body-index` does NOT trigger 1200px override. |
| `.top-header h2 { … }` rules at b00:8429, 8437, 9506, 9728 | — | NOT applied — `.top-header` is empty |
| `.img-with-txt-keeper { display: flex; align-items: center; }` | b00:8440–8443 | Same |
| `.img-with-txt-keeper.img-left .*` rules at b00:8463, 8468, 9531 | — | NOT applied — Section 4 has NO `img-left` modifier (default = image right) |
| `.img-with-txt-keeper { align-items: initial; }` | b00:9423 | `@media (max-width: 991px)` — same |
| `.img-with-txt-keeper { flex-wrap: wrap; }` | b00:9514 | `@media (max-width: 767px)` — same |
| `.content-folder { width: 60%; padding-right: 40px; }` | b00:8447–8450 | Same |
| `.content-folder h3 { font-size: 32px; color: #000; }` | b00:8451–8454 | Same |
| `.content-folder h3 strong { color: #ff7e97; font-weight: normal; }` | b00:8455–8457 | Same — pink accent |
| `.content-folder ol { padding-left: 15px; }` | b00:8471–8473 | Same |
| `.content-folder ol li { padding-bottom: 15px; }` | b00:8474–8476 | Same |
| `.content-folder ol li strong { color: #ff7e97; }` | b00:8477–8479 | Same |
| `.content-folder { width: 100%; padding-right: 0px; order: 2; }` | b00:9517–9521 | `@media (max-width: 767px)` — same |
| `.content-folder h3 { font-size: 30px; margin-top: 20px; }` | b00:9526–9530 | `@media (max-width: 767px)` — same |
| `.content-folder h3 { font-size: 28px; }` | b00:9728–9730 | `@media (max-width: 390px)` — same |
| `.photo-folder { width: 40%; }` | b00:8444–8446 | Same |
| `.photo-folder video, .photo-folder img { width: 100%; border-radius: 20px; }` | b00:8458–8462 | **Confirms video gets the same treatment as img in this family.** Section 3 used the `img` half; Section 4 uses the `video` half. |
| `.photo-folder { width: 100%; order: 1; }` | b00:9522–9525 | `@media (max-width: 767px)` — same |
| Color-scheme `4e3f3173-…` cascade | rendered.html:2139–2178 | Same as Section 3 — solid `rgb(246 248 249)` background, black foreground. See §4 below. |

### Section-4-specific rules

| Selector | Rule | Cite | @media |
|---|---|---|---|
| `.main-contain-template--19760795549861__image_with_text_xQzFck` | `padding-top: 10px; padding-bottom: 30px;` | rendered.html:5669–5672 | TOP (per-section inline) |
| **`.root-cases-technology`** | **`position: relative;`** | b00:8888–8890 | TOP |
| **`.root-cases-technology:after`** | **`content: ''; position: absolute; top: 0; right: 0; width: 200px; background-image: url(/cdn/shop/files/11_6.png?v=1760433658); height: 255px; background-repeat: no-repeat; background-position: center; background-size: cover;`** | b00:8891–8902 | TOP |
| `.custom-gradiant-industry:after, .root-cases-technology:after` | `display: none;` | b00:9383 | `@media (max-width: 991px)` |
| **`.content-folder .btn`** | **`background: #000; color: #fff; padding: 15px 40px; font-size: 20px; display: block; width: max-content;`** | b00:8480–8487 | TOP |
| **`.content-folder .btn`** (second declaration) | **`margin-top: 30px;`** | b00:8497–8499 | TOP |
| `.body-pl-new-index .btn` | `text-transform: uppercase; transition: 0.5s;` | b00:8489–8492 | TOP — does NOT apply (body has `body-index`, not `body-pl-new-index`) |
| `.body-pl-new-index .btn:hover` | `background: #ff7e97; transition: 0.5s;` | b00:8493–8496 | TOP — does NOT apply |
| **`.content-folder .btn`** | **`padding: 10px 20px; font-size: 14px; width: 100%; display: block; text-align: center;`** | b00:9534–9540 | `@media (max-width: 767px)` |
| `.content-folder .btn` | `padding: 10px 10px;` | b00:9732 | `@media (max-width: 390px)` |
| **`.section-last-icon-text`** | **`display: flex; align-items: center; padding-top: 25px;`** | b00:8504–8508 | TOP |
| **`.section-last-icon-text p`** | **`margin: 0; margin-left: 10px; margin-right: 15px;`** | b00:8509–8513 | TOP |
| **`.section-last-icon-text`** | **`flex-wrap: wrap; gap: 10px;`** | b00:9541–9544 | `@media (max-width: 767px)` |
| **`.icon-block-part`** | **`display: flex; align-items: center;`** | b00:9119–9122 | TOP |
| **`.icon-block-part`** | **`width: 100%;`** | b00:9420–9422 | `@media (max-width: 991px)` |
| **`.icon-block-part`** | **`margin-bottom: 10px;`** | b00:9612–9614 | `@media (max-width: 767px)` |

`.high-demand-selling-october .content-folder .btn` (b00:8720) and `.high-demand-selling-october .section-last-icon-text p` (b00:8725, 9452, 9456) are NOT applied — Section 4 is not the urgency-banner variant. Listed only for reference because the `bq-image-text` schema may eventually surface a dark-theme toggle for Section 13.

## 4. Color scheme custom properties (resolved)

`.main-container.color-scheme-4e3f3173-5698-4cc9-a3e8-1fe6eccd81a0` — **same as Section 3.** Inline `<style>` at `rendered.html:2139–2178`:

```css
.color-scheme-4e3f3173-5698-4cc9-a3e8-1fe6eccd81a0 {
  --color-background: rgb(246 248 249 / 1.0);   /* solid #F6F8F9 */
  --color-foreground: rgb(0 0 0 / 1.0);
  --color-foreground-heading: rgb(0 0 0 / 1.0);
  --color-primary: rgb(0 0 0 / 1.0);
  --color-primary-button-background: rgb(255 126 151 / 1.0);  /* #FF7E97 */
  --color-primary-button-text: rgb(255 255 255 / 1.0);
  …
}
```

No difference from Section 3. Section 4's effective background = solid `#F6F8F9` (live probe confirms `backgroundColor: rgb(246, 248, 249)`, `backgroundImage: none`). The `.gradient` class has no rule (verified by grep). No section-specific `--color-*` overrides.

## 5. `@font-face` and computed font-family

**Same as Section 3.** No section-specific font override.

- `h3` resolves to `circular_stdmedium` (paid Linotype) via global override at `rendered.html:106–110` (`body:not(:has(.gps)) h1, h2, …, h6 { font-family: 'circular_stdmedium' !important; }`). Live probe confirms.
- `<p>`, `<ol>`, `<li>`, `<a class="btn">`, `.section-last-icon-text p` resolve to `Inter, sans-serif` (theme paragraph default). Live probe confirms across all elements.

Project rule: substitute Inter (free, on Google Fonts) for `circular_stdmedium` via `assets/bq-tokens.css --bq-font-sans`. No new font work for Section 4.

## 6. `@keyframes` / animations

**Same as Section 3.** AOS-only. Three `data-aos="fade-up"` elements (empty `.top-header`, `.content-folder`, `.photo-folder`). Body data-attrs gate to `easing=ease, duration=400ms, delay=0`. No `@keyframes`; AOS uses CSS transitions only. See `inventories/section-03-causes.md §6` for the resolved AOS rule chain.

## 7. Decorative `:after` pseudo (`.root-cases-technology:after` → `11_6.png`)

| Property | Value | Source |
|---|---|---|
| `content` | `""` | b00:8892 |
| `position` | `absolute` | b00:8893 |
| **`top`** | **`0`** | b00:8894 |
| **`right`** | **`0`** (top-RIGHT positioning) | b00:8895 |
| `width` | `200px` | b00:8896 |
| `height` | `255px` | b00:8898 |
| `background-image` | `url(/cdn/shop/files/11_6.png?v=1760433658)` | b00:8897 |
| `background-repeat` | `no-repeat` | b00:8899 |
| `background-position` | `center` | b00:8900 |
| `background-size` | `cover` | b00:8901 |
| **`display: none`** | mobile-only override | b00:9383, `@media (max-width: 991px)` |

**Comparison with Section 2's decorative `:after`** (`.custom-gradiant-industry:after`, `11_5.png`):

| Property | Section 2 (`11_5.png`) | Section 4 (`11_6.png`) |
|---|---|---|
| Cite | b00:8264–8270 | b00:8891–8902 |
| Anchor | top-LEFT (`top: 0; left: 0;`) | top-RIGHT (`top: 0; right: 0;`) |
| Dimensions | 200×255 px | 200×255 px |
| `background-position` | (default) | `center` |
| `background-size` | (default) | `cover` |
| Hidden ≤991px | `display: none` (b00:9383, shared rule) | `display: none` (b00:9383, shared rule) |

The two decorations are **mirror-image siblings** — same dimensions, same hide breakpoint, anchored to opposite corners. They appear once each on the homepage (Section 2 = top-left, Section 4 = top-right) and only on desktop.

**Live probe confirms** at desktop: `mainAfter.left: 1240px` (= 1440 viewport − 200 width), `right: 0`, `width: 200px`, `height: 255px`, `backgroundImage: url("…11_6.png…")`, `backgroundPosition: 50% 50%`, `backgroundSize: cover`, `display: block`. Mobile (390px) probe value at `display` truncated in capture; static CSS at b00:9383 dictates `display: none` ≤991px.

## 8. CTA button — full styling

The first CTA in this family. `<a class="btn" href="/products/revitaleyes">Rejuvenate Your Under Eyes Today</a>` at `rendered.html:5704`.

### Selector chain + rules

| Selector | Rule | Cite | @media |
|---|---|---|---|
| `.content-folder .btn` | `background: #000; color: #fff; padding: 15px 40px; font-size: 20px; display: block; width: max-content;` | b00:8480–8487 | TOP |
| `.content-folder .btn` (second decl, same selector) | `margin-top: 30px;` | b00:8497–8499 | TOP |
| `.content-folder .btn` | `padding: 10px 20px; font-size: 14px; width: 100%; display: block; text-align: center;` | b00:9534–9540 | `@media (max-width: 767px)` |
| `.content-folder .btn` | `padding: 10px 10px;` | b00:9732 | `@media (max-width: 390px)` |

Body-class-gated rules NOT applied here (Section 4's body lacks `body-pl-new-index`):

- `.body-pl-new-index .btn { text-transform: uppercase; transition: 0.5s; }` (b00:8489–8492) — would add uppercase + transition
- `.body-pl-new-index .btn:hover { background: #ff7e97; transition: 0.5s; }` (b00:8493–8496) — would add pink hover

**Source's `.btn` on this homepage has NO `text-transform: uppercase` and NO hover state.** This is a notable contrast with the hero CTA (`.bq-hero__cta`) which we built with uppercase + pink hover. Project decision needed: match source (lowercase, no hover) OR mirror our hero CTA (uppercase + pink hover) for visual consistency.

### Live probe — desktop (1440)

| Property | Value | Notes |
|---|---|---|
| `font-family` | `Inter, sans-serif` | inherited theme paragraph |
| `font-size` | `20px` | b00:8484 |
| `font-weight` | `400` | inherited; default for `<a>` |
| `line-height` | `32px` (1.6) | inherited |
| `color` | `rgb(255, 255, 255)` | b00:8482 |
| `background-color` | `rgb(0, 0, 0)` | b00:8481 |
| `padding` | `15px 40px` | b00:8483 |
| `border-radius` | `0px` (square corners) | NO explicit rule; UA default for `<a>` |
| `display` | `block` | b00:8485 |
| `width` | `411.36px` | from `width: max-content` (b00:8486) — fits text |
| `height` | `62px` | computed = padding (15+15) + line-height (32) |
| `text-align` | `start` (default left) | UA default |
| `text-transform` | `none` | NOT uppercase |
| `letter-spacing` | `normal` | NOT explicit |
| `margin-top` | `30px` | b00:8497–8499 |
| `text-decoration` | (UA default underline-on-`<a>`, but `.btn` may suppress; not directly probed — flag for §10) | — |

### Live probe — mobile (390)

| Property | Value | Notes |
|---|---|---|
| `font-size` | `14px` | b00:9536 |
| `padding` | `10px 10px` | b00:9732 (≤390 wins over ≤767's `10px 20px`) |
| `width` | `100%` | b00:9537 |
| `text-align` | `center` | b00:9540 |

## 9. Computed values (live probe — desktop 1440×900, mobile 390×844 @2×)

### Desktop

| Element | Property | Value | Notes |
|---|---|---|---|
| `.main-container` | `width × height` | `1440 × 600 px` | full viewport width |
| `.main-container` | `padding` | `10px 0 30px 0` | inline rule rendered.html:5669 |
| `.main-container` | `background-color` | `rgb(246, 248, 249)` | solid `#F6F8F9` from color-scheme |
| `.main-container` | `background-image` | `none` | no gradient |
| `.main-container::after` | `position: absolute; top: 0; right: 0; width: 200px; height: 255px; backgroundImage: url(…11_6.png…); display: block` | desktop only | b00:8891 |
| `.top-header` | `width × height` | `1400 × 0 px` | empty, collapses |
| `.img-with-txt-keeper` | `width × height` | `1400 × 560 px` | flex row, image-driven height |
| `.img-with-txt-keeper` | `display / align-items` | `flex / center` | b00:8440 |
| `.content-folder` | `width × height` | `840 × 475 px` | 60% of 1400; height = h3+ol+p+btn+trust |
| `.content-folder` | `padding-right` | `40 px` | b00:8447 |
| `.content-folder` | `order` | `0` (default — image right, text left in default flex order) | NOT `img-left` |
| `.photo-folder` | `width × height` | `560 × 560 px` | 40% of 1400 |
| `.content-folder h3` | font-family | `circular_stdmedium` | global override |
| `.content-folder h3` | font-size | `32 px` | b00:8451 |
| `.content-folder h3` | font-weight | `400` | inherited |
| `.content-folder h3` | line-height | `38.4 px` (1.2) | theme h3 default |
| `.content-folder h3` | margin-top | `0 px` | live-probe authoritative; same as Section 3 |
| `.content-folder h3` | margin-bottom | `32 px` | UA default 1em |
| `.content-folder h3 strong` | color | `rgb(255, 126, 151)` | b00:8455 |
| `.content-folder h3 strong` | font-weight | `normal` | b00:8455 |
| `.content-folder ol` | font-size / line-height | `18 / 28.8 px` | inherits .content-folder Inter 18 |
| `.content-folder ol` | margin-top / margin-bottom | `18 / 18 px` | UA default 1em |
| `.content-folder ol` | padding-left | `15 px` | b00:8471 |
| `.content-folder ol` | list-style-type | `decimal` | UA default |
| `.content-folder ol li` | padding-bottom | `15 px` | b00:8474 |
| `.content-folder ol li` | display | `list-item` | UA |
| `.content-folder ol li::marker` | color | `rgb(0, 0, 0)` | UA default — black, NOT pink |
| `.content-folder ol li::marker` | font-weight | `400` | UA default |
| `.content-folder ol li strong` | color | `rgb(255, 126, 151)` | b00:8477 |
| `.content-folder > p` (closing) | font-size | `18 px` | inherited |
| `.content-folder > p` (closing) | margin-top / margin-bottom | `18 / 18 px` | UA default |
| `.content-folder > p` (closing) | line-height | `28.8 px` | inherited |
| `.content-folder .btn` | width × height | `411.36 × 62 px` | `max-content`; padding 15+15+content |
| `.content-folder .btn` | background | `rgb(0, 0, 0)` | b00:8481 |
| `.content-folder .btn` | color | `rgb(255, 255, 255)` | b00:8482 |
| `.content-folder .btn` | font-size | `20 px` | b00:8484 |
| `.content-folder .btn` | padding | `15px 40px` | b00:8483 |
| `.content-folder .btn` | margin-top | `30 px` | b00:8497 |
| `.content-folder .btn` | display | `block` | b00:8485 |
| `.content-folder .btn` | border-radius | `0 px` | square corners |
| `.content-folder .btn` | text-transform | `none` | NOT uppercase |
| `.section-last-icon-text` | display / align-items | `flex / center` | b00:8504–8506 |
| `.section-last-icon-text` | padding-top | `25 px` | b00:8506 |
| `.section-last-icon-text` | flex-wrap | `nowrap` | desktop default |
| `.icon-block-part` | display / align-items | `flex / center` | b00:9119–9121 |
| `.icon-block-part` | width × height | `316.78 × 28.8 px` (item 1) | content-driven |
| `.icon-block-part p` | margin | `0 15px 0 10px` | b00:8509–8513 |
| `.icon-block-part > svg` | dimensions | `14×14 px` (inline `width`/`height` attrs) | rendered.html:5710 |
| `.photo-folder video` | width × height | `560 × 560 px` | 100% of column; b00:8458 |
| `.photo-folder video` | border-radius | `20 px` | b00:8458 |
| `<video>` attributes | autoplay, loop, muted, playsinline, preload="metadata", poster | all present | rendered.html:5736 |

### Mobile

| Element | Property | Value | Notes |
|---|---|---|---|
| `.main-container` | `width × height` | `390 × 1122 px` | viewport |
| `.main-container` | `padding` | `10px 0 30px 0` | unchanged |
| `.main-container` | `background-color` | `rgb(246, 248, 249)` | unchanged |
| `.main-container::after` | `display: none` | b00:9383 in `@media (max-width: 991px)` | hidden mobile |
| `.page-width` inner | `350 px` | `390 - 20×2` | b00:4379 |
| `.top-header` | `width × height` | `350 × 0 px` | empty |
| `.img-with-txt-keeper` | `flex-wrap / align-items` | `wrap / initial` | b00:9514, 9423 |
| `.content-folder` | `width × height` | `350 × 732 px` | 100%; b00:9517 |
| `.content-folder` | `order` | `2` | b00:9517 — text below |
| `.content-folder` | `padding-right` | `0 px` | b00:9517 |
| `.photo-folder` | `width × height` | `350 × 350 px` | 100%; b00:9522 |
| `.photo-folder` | `order` | `1` | b00:9522 — image above |
| `.content-folder h3` | font-size | `28 px` | b00:9728 |
| `.content-folder h3` | line-height | `33.6 px` (1.2) | inherited |
| `.content-folder h3` | margin-top | `20 px` | b00:9526 |
| `.content-folder h3` | margin-bottom | `28 px` | UA default 1em |
| `.content-folder ol`, `.content-folder p` | unchanged from desktop | 18 / 28.8 px / margins 18 px | not viewport-gated |
| `.content-folder ol li::marker` | color | `rgb(0, 0, 0)` | UA default |
| `.content-folder .btn` | font-size | `14 px` | b00:9536 |
| `.content-folder .btn` | padding | `10px 10px` | b00:9732 (≤390) |
| `.content-folder .btn` | width | `100%` | b00:9537 |
| `.content-folder .btn` | text-align | `center` | b00:9540 |
| `.section-last-icon-text` | flex-wrap | `wrap` | b00:9541 |
| `.section-last-icon-text` | gap | `10 px` | b00:9542 |
| `.icon-block-part` | width / margin-bottom | `100% / 10 px` | b00:9420, 9612 |
| `.photo-folder video` | width × height | `350 × 350 px` | 100% of column |
| `.photo-folder video` | border-radius | `20 px` | unchanged |

### Section padding (confirmed)

`10 / 30` (top / bottom) per inline `<style>` at `rendered.html:5669–5672`. Differs from Section 3's `10 / 10`.

### Crops (rendered measurements)

- `source/crops/section-05-dual-tech-desktop.png`: **1440 × 600 px**, 500 KB.
- `source/crops/section-05-dual-tech-mobile.png`: **780 × 2244 px**, 809 KB (DPR 2 → CSS-px height ≈ 1122).

## 10. Triangulation discrepancies

### A. `<img>` inside `<video>` lacks `alt`

- **HTML:** `<video poster=…><source …><img src=…></video>` — the inner `<img>` (browser-fallback) has no `alt`. Same accessibility defect as Section 3's `.photo-folder img`.
- **Resolution:** in our build, require `image_alt` for the photo-folder asset and pass it to both the `<video>` element's `aria-label` (or wrap in `<figure>` with `<figcaption>` + screen-reader-only) AND the inner `<img>` fallback. Mirror Section 3's approach.

### B. CTA `<a class="btn">` has no `text-transform: uppercase` and no hover state in source

- **Source:** Lowercase label "Rejuvenate Your Under Eyes Today" (mixed case). No `:hover` rule on `.content-folder .btn` itself; the `.body-pl-new-index .btn:hover { background: #ff7e97 }` rule does NOT match (body class is `body-index`, not `body-pl-new-index`).
- **Hero (`bq-hero__cta`) precedent:** OUR built hero CTA uses `text-transform: uppercase` + pink hover (`background: var(--bq-accent)` on hover). That was for Section 1.
- **Resolution flag:** project decision. Either (a) match source exactly here (no uppercase, no hover) OR (b) inherit hero CTA styling for visual consistency across the build. Chat-Claude / user to choose. Recommend (b) for site-wide CTA consistency, but note the source deviation.

### C. CTA `<a>` underline / text-decoration not directly probed

- **Source CSS:** `.content-folder .btn` doesn't set `text-decoration`. UA default for `<a>` is underline. The `.btn` class might cancel it via a base reset in the theme not isolated to `.content-folder .btn`.
- **Resolution flag:** confirm via secondary live probe (or trust visual inspection of `source/crops/section-05-dual-tech-desktop.png`). If source CTA shows no underline (likely, given it's a button-styled link), the cancellation comes from a theme-wide rule and our build should explicitly set `text-decoration: none` on `.bq-image-text__cta` to match.

### D. Section 4's `<ol>` first `<li>` has stray `<br>` inside `<strong>` boundary

- **HTML:** `<li><strong>Red Light Therapy</strong> (630-660nm) penetrates 2-3mm deep to increase circulation and stimulate collagen production at the cellular level.<br></li>`
- The trailing `<br>` after the period adds a blank line at the end of the first `<li>`. Inconsistent with second `<li>` which has no `<br>`.
- **Resolution:** this is a content typo in source. Don't replicate. Italian copy can drop the `<br>`.

### E. Mobile `:after` `display: none` not directly confirmed in probe

- **Static CSS (b00:9383):** `.root-cases-technology:after { display: none; }` inside `@media (max-width: 991px)`.
- **Live probe (mobile 390):** the captured mobile `mainAfter` block was truncated before reading the `display` property. Static CSS is authoritative; rule should fire at viewport ≤991.
- **Resolution:** trust static CSS. Treat `:after` as desktop-only (≥992). Skip in mobile rendering.

### F. h3 desktop margin-top = 0 (no explicit CSS rule, but live probe confirms)

- Same as Section 3 §9.D. Live-probe authoritative: desktop margin-top 0, mobile 20.
- **Resolution:** apply both per breakpoint.

### G. UA-default vertical margins on `<p>`, `<ol>`, `<li>` markers

- Same as Section 3 §9.F and §9.G. p / ol / closing-p all use 18 px UA default 1em vertical margins. ol li markers stay UA-default decimal black.
- **Resolution:** no override. Match UA default behavior.

### H. Section 4 has trust row — family audit said "no" but DOM has it

- **family-audit-image-text.md** column "Has trust-icon row" said `[blank]` for Section 4 `xQzFck`.
- **DOM at rendered.html:5707–5726:** `.section-last-icon-text` with 2 `.icon-block-part` items, each with green-circle SVG + label paragraph. Identical pattern to Section 1 hero's trust row.
- **HANDOFF.md "Next session entry point" line:** also said "trust row" expected for Section 4.
- **Resolution:** family audit was wrong; DOM confirms trust row IS present. Update family audit if revisited; for this build, treat trust row as a real Section-4 element.

### I. Mobile `:after` display: none — flagged for parity

- See discrepancy E. Treat as desktop-only.

### No other discrepancies between HTML / CSS / render.

## 11. Family delta from Section 3

Flag-list only — no schema proposals here. Chat-Claude composes the schema extension.

### NEW (Section 4 introduces, Section 3 didn't have)

- **CTA element** (`<a class="btn">`) with label + href. Square corners, black bg, white text, 20 px desktop / 14 px mobile, lowercase, no hover. Margin-top 30 px to separate from preceding closing `<p>`.
- **Trust-icon row** (`.section-last-icon-text` with 2 `.icon-block-part` items, each: inline `<svg>` 14×14 green circle + white check, plus `<p>` label). Reuses the same labels as Section 1's hero ("365-Day Money Back Guarantee", "Express Shipping Worldwide"). Padding-top 25 px to separate from CTA.
- **Decorative `:after` background image** anchored top-RIGHT (`.root-cases-technology:after` → `11_6.png`, 200×255 px, hidden ≤991 px). Mirror-image of Section 2's top-LEFT decoration.
- **`root-cases-technology` background-variant class** on `.main-container`. Source uses it as a marker for the `:after` pseudo only; same color-scheme as Section 3.
- **`<video>` instead of `<img>`** in `.photo-folder` (src + poster + autoplay/loop/muted/playsinline). The `bq-image-text` schema currently only accepts an image picker — needs to add a video picker with priority over image (same pattern as `bq-hero` Section 1).

### DIFFERENT (same shape as Section 3 but different value)

- **Section padding:** `10 / 30` (vs Section 3's `10 / 10`). Already configurable via existing `section_padding_top` / `section_padding_bottom` schema settings — no schema change needed; just change instance values when configuring.
- **Image position:** image RIGHT (default — no `img-left` modifier). Section 3 was image LEFT. **`bq-image-text` schema already exposes a `layout: "image_right" | "image_left"` toggle** (sections/bq-image-text.liquid §schema), so this is just a different setting value. Confirmed.

### CONFIRMED (same as Section 3, no change)

- Section 4 has NO h2 (empty `.top-header`).
- Section 4 has NO intro `<p>`. Goes straight from h3 → `<ol>`. (Section 3 had `<h3>` → intro `<p>` → `<ol>` → closing `<p>`.) Schema's `intro_p` field can be left blank for Section 4.
- Section 4 has 1 closing `<p>` after the `<ol>` (Section 3 also had 1 closing `<p>`). Schema's `closing_p` field reused.
- Section 4 has `<ol>` (2 items). Same `numbered_list` schema field reused.
- Color scheme: same `4e3f3173-…` (solid `#F6F8F9`). Background: same as Section 3.
- Font: same Inter (project-wide rule). Same h3 sizing cascade. Same UA-default ol/li/p margins.
- AOS: same three fade-up reveals (top-header, content-folder, photo-folder). Empty `.top-header` again gets the data-aos attribute but renders 0 height.

### Schema-extension flag-list (for chat-Claude)

Schema fields needed beyond the current `bq-image-text` (Section-3 baseline):

- CTA: label (text), link (url), optional toggle to disable
- Trust-row: list of items (block? array?), each with icon-color/icon-shape + label-text
- Decorative `:after` background image: image_picker for `top-right` and `top-left` variants, with breakpoint hide rule
- Video media-type toggle in `.photo-folder`: video_picker that takes priority over image_picker
- `root-cases-technology` modifier: section setting to enable the top-right `:after` decoration; or generalize to a "decoration position" select with values `none | top-left | top-right`

These are flags only — chat-Claude composes the actual schema additions, mindful of the "schema grows by accretion" rule (only what Section 4 demands; don't pre-build for Sections 5/13/15).

## 12. Asset list

| File | Intrinsic | Used at | alt | Reproducibility | Placeholder strategy |
|---|---|---|---|---|---|
| `ff469e97a4ba4dc6a1f359bd9f9eef8b.HD-1080p-4.8Mbps-64071228.mp4` (Shopify CDN, `?v=0`) | 1080p, 4.8 Mbps MP4 | `<video>` in `.photo-folder` (right column) | n/a — video doesn't take alt; inner `<img>` fallback has none | Their video (likely a product demo or motion graphic showing the dual-technology) — IP-blocked for verbatim cloning | Schema `video` picker + `image_picker` (image as fallback when no video uploaded). Until uploaded: render the placeholder SVG (same as Section 3) sized 1:1 with hint label. Italian alt for the photo asset: required (e.g., `"Dimostrazione del dispositivo RevitalEyes con luce rossa e microcorrenti"`). |
| `ff469e97a4ba4dc6a1f359bd9f9eef8b.thumbnail.0000000000_1100x.jpg` (Shopify CDN, `?v=1764368177`) | 1100×1100-ish (thumbnail-derived from 1080p video, square) | `<video poster="…">` + inner fallback `<img>` | none in source | Their thumbnail (auto-generated) | If user uploads a video via `bq-image-text` schema's `video` setting, Shopify auto-generates `vid.preview_image` for use as poster (same pattern as `bq-hero`). |
| `11_6.png` (Shopify CDN, `?v=1760433658`) | unknown | `.root-cases-technology:after` decorative pseudo (top-right, 200×255 px on desktop only) | n/a (decorative bg) | Their decorative graphic (mirror of `11_5.png`, likely similar wavy dotted line in pink) | Optional. For first-pass build, omit the `:after` decoration entirely (precedent: Section 2's `11_5.png` was also omitted per HANDOFF.md "What NOT to redo" → "Decorative full-bleed bg PNG omitted" — though Section 2's CSS gradient gives compositional weight that this section lacks). Decision flag for chat-Claude / user. |

End of inventory. Stop.
