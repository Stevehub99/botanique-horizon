# Section 5 — Mission — SOURCE INVENTORY

Generated: 2026-04-27. Triangulated from `source/rendered.html`, `source/css/external-00-base.css`, live-page Puppeteer probe (1440×900 desktop, 390×844 @2× mobile), and `source/crops/section-06-mission-{desktop,mobile}.png`.

PROJECT.md slug: Section 5 (Mission). Capture-pipeline index: 06. Family: image-text. Third instance to be built — schema extends `bq-image-text` from current post-Section-4 baseline.

---

## 1. Section locator

- **Line range in `source/rendered.html`:** **5751–5836** (closes at line 5836's leading `</div>` immediately before `timeline_enhanced_C7Fb3h` opens).
- **Top-level container:** `<div id="shopify-section-template--19760795549861__image_with_text_fmJKeW" class="shopify-section image-width-text-sec">` (`rendered.html:5751`).
- **Anchor classes / data-attributes:**
  - Section root: `shopify-section`, `image-width-text-sec`.
  - Inner container (`rendered.html:5760`): `main-container`, `main-contain-template--19760795549861__image_with_text_fmJKeW` (per-section padding hook), **`to-help-women`** (NEW family modifier — verified marker-only, see §3), **`color-scheme-1`** (NEW — first instance in build that uses this scheme; resolves to solid white background — see §4), `gradient`.
  - Layout: `.page-width`, `.main-file` (empty), **`.top-header.aos-animate data-aos="fade-up"`** containing **`<h2><strong>Botanique Paris</strong> Mission</h2>`** (FIRST non-empty `.top-header` in this family build — Sections 3 and 4 had empty `.top-header`), **`.img-with-txt-keeper.img-left`** (image LEFT, text RIGHT — like Section 3 but unlike Section 4), `.content-folder.aos-animate data-aos="fade-up"`, `.photo-folder.aos-animate data-aos="fade-up"`.

## 2. HTML tree

Verbatim from `source/rendered.html:5751–5835`. English text preserved.

```
<div id="shopify-section-template--19760795549861__image_with_text_fmJKeW"
     class="shopify-section image-width-text-sec">                              [5751]
  <style>
    .main-contain-template--19760795549861__image_with_text_fmJKeW {           [5752]
      padding-top: 30px;
      padding-bottom: 30px;
    }
  </style>
  <div class="main-container
              main-contain-template--19760795549861__image_with_text_fmJKeW
              to-help-women
              color-scheme-1
              gradient">                                                       [5760]
    <div class=" page-width ">                                                 [5761]
      <div class="main-file"></div>                                            [5762]
      <div class="top-header aos-animate" data-aos="fade-up">                  [5767]
        <h2><strong>Botanique Paris</strong> Mission</h2>                      [5769]
      </div>                                                                   [5771]
      <div class="img-with-txt-keeper   img-left  ">                           [5773]
        <div class="content-folder aos-animate" data-aos="fade-up">            [5779]
          <h3>To Help Women <strong>Look As Youthful, Vibrant, And Confident</strong> As They Truly Feel - Without Invasive Procedures, Wasted Money, Or Compromising Their Natural Appearance.</h3>   [5781]
          <p>After years of failed creams and the fear of invasive procedures, you deserve technology that actually delivers.<br><br>RevitalEyes uses clinically proven Red Light Therapy and EMS Microcurrent in one simple device. Just 10 minutes a day while reading, watching TV, or relaxing.<br><br>No appointments, no needles, no complicated routines. Finally, the transformation you've been searching for. Naturally youthful eyes that look as rested and vibrant as you feel.<br></p>   [5785]
          <a class="btn" href="/products/revitaleyes">Rejuvenate Your Under Eyes Today</a>   [5789]
          <div class="section-last-icon-text">                                 [5792]
            <div class="icon-block-part">                                       [5794]
              <span><svg width=14 height=14 …green-circle+white-check…></svg></span>
              <p>365-Day Money Back Guarantee </p>                              [5798]
            </div>
            <div class="icon-block-part">                                       [5803]
              <span><svg width=14 height=14 …green-circle+white-check…></svg></span>
              <p>Express Shipping Worldwide</p>                                 [5808]
            </div>
          </div>
        </div>
        <div class="photo-folder aos-animate" data-aos="fade-up">              [5817]
          <video playsinline autoplay loop="loop" width="100%" muted="muted"
                 preload="metadata"
                 poster="//botaniqueparis.com/cdn/shop/files/preview_images/42caac6311c146b38f7ba6911a5eacad.thumbnail.0000000000_1100x.jpg?v=1764368219">  [5821]
            <source src="//botaniqueparis.com/cdn/shop/videos/c/vp/42caac6311c146b38f7ba6911a5eacad/42caac6311c146b38f7ba6911a5eacad.HD-1080p-4.8Mbps-64071265.mp4?v=0"
                    type="video/mp4">
            <img src="//botaniqueparis.com/cdn/shop/files/preview_images/42caac6311c146b38f7ba6911a5eacad.thumbnail.0000000000_1100x.jpg?v=1764368219">
          </video>
        </div>
      </div>
    </div>
  </div>
</div>                                                                         [5836]
```

Notable shape vs. Section 4:

- **`.top-header` is NOT empty** — first instance in the build with an `<h2>` (`Botanique Paris Mission` with `<strong>` wrapping the brand name). See §3 for the cascade and §11 for schema-extension implication.
- **`.img-with-txt-keeper` HAS the `img-left` modifier** — Section 4 was image-RIGHT (default); Section 5 is image-LEFT (text-right). Existing schema's `layout: image_left` handles this.
- **Single `<p>` element with embedded `<br><br>` separators** (5 `<br>`s total in source HTML; visually renders as 3 paragraphs). The family audit's `p count = 3` is wrong — DOM-confirmed `pCount = 1`. See §10.
- **`<h3>` content is a single sentence** with `<strong>` wrapping the middle phrase (`Look As Youthful, Vibrant, And Confident`). NOT the `<strong>...</strong>` lead-in pattern of Sections 3 / 4.
- **CTA `<a class="btn">`** identical pattern to Section 4 (same href `/products/revitaleyes`, same label).
- **`.section-last-icon-text` 2-item trust row** — same labels as Sections 1 / 4.
- **`<video>` in `.photo-folder`** with same attribute set as Section 4 (`playsinline autoplay loop muted preload="metadata"` + poster + source + img fallback). Different MP4 URL + thumbnail.
- **Section padding `30 / 30`** — different from Section 3 (`10/10`) and Section 4 (`10/30`). Already configurable via existing schema; no schema change needed.

## 3. CSS rules

Citations: `source/css/external-00-base.css` (`b00:N` shorthand). Inline `<style>` blocks in rendered.html cited as `rendered.html:N`.

### Family-shared rules — see Section 4 inventory §3 (and Section 3 inventory §3)

The following selectors apply identically to Section 5. Refer to **`inventories/section-04-dual-tech.md` §3** for full bodies + media-query context. Quick re-confirmation:

| Selector | Cite | Note |
|---|---|---|
| `.page-width { max-width: 1440px; padding: 0 20px; margin: auto; }` | b00:4379 | Same |
| `.img-with-txt-keeper { display: flex; align-items: center; }` | b00:8440 | Same |
| `.img-with-txt-keeper { align-items: initial; }` ≤991 | b00:9423 | Same |
| `.img-with-txt-keeper { flex-wrap: wrap; }` ≤767 | b00:9514 | Same |
| `.content-folder { width: 60%; padding-right: 40px; }` | b00:8447 | Same — but **overridden by `.img-left` rule** for this section, see below |
| `.content-folder h3 { font-size: 32px; color: #000; }` | b00:8451 | Same |
| `.content-folder h3 strong { color: #ff7e97; font-weight: normal; }` | b00:8455 | Same — pink, weight 400 |
| `.content-folder { width: 100%; padding-right: 0px; order: 2; }` ≤767 | b00:9517 | Same |
| `.content-folder h3 { font-size: 30px; margin-top: 20px; }` ≤767 | b00:9526 | Same |
| `.content-folder h3 { font-size: 28px; }` ≤390 | b00:9728 | Same |
| `.photo-folder { width: 40%; }` | b00:8444 | Same |
| `.photo-folder video, .photo-folder img { width: 100%; border-radius: 20px; }` | b00:8458 | Same — Section 5 uses video |
| `.photo-folder { width: 100%; order: 1; }` ≤767 | b00:9522 | Same |
| `.content-folder .btn { … }` cascade (b00:8480, 8497, 9534, 9732) | b00 | Same — full CTA cascade — see Section 4 inventory §8 |
| `.section-last-icon-text { … }` (b00:8504, 8509, 9541) | b00 | Same — 2-item trust row, padding-top 25px, wrap+gap mobile |
| `.icon-block-part { … }` (b00:9119, 9420, 9612) | b00 | Same |

### Section-5-specific rules

| Selector | Rule | Cite | @media |
|---|---|---|---|
| `.main-contain-template--19760795549861__image_with_text_fmJKeW` | `padding-top: 30px; padding-bottom: 30px;` | rendered.html:5752–5755 | TOP (per-section inline) |
| **`.to-help-women`** | **NO RULES — class is a marker only.** Verified by `grep -rni "to-help-women"` across `source/css/external-00-base.css` and `source/rendered.html` returning only the HTML usage on line 5760. No `:after`, no gradient, no layout overrides. | n/a | n/a |
| **`.top-header h2`** | **`font-size: 46px; text-align: center; max-width: 700px; margin: auto; color: #000; margin-bottom: 30px;`** | b00:8429–8436 | TOP — **first time this rule actually applies in our build** |
| **`.top-header h2 strong`** | **`color: #ff7e97;`** (no font-weight override; UA default `bold` / 700 inherits) | b00:8437–8439 | TOP |
| **`.top-header h2`** | **`font-size: 30px;`** | b00:9506–9508 | `@media (max-width: 767px)` |
| **`.top-header h2`** | **`font-size: 28px;`** | b00:9726–9728 | `@media (max-width: 390px)` |
| **`.img-with-txt-keeper.img-left .content-folder`** | **`order: 2; padding-left: 80px; padding-right: 0;`** | b00:8463–8467 | TOP — **first `img-left` instance verified by live probe** |
| **`.img-with-txt-keeper.img-left .photo-folder`** | **`order: 1;`** | b00:8468–8470 | TOP |
| **`.img-with-txt-keeper.img-left .content-folder`** | **`padding-left: 0;`** | b00:9531–9533 | `@media (max-width: 767px)` — desktop 80px reset to 0 mobile |

Note: Section 4's specific `.root-cases-technology` + `:after` rules do NOT apply (Section 5 does not have that modifier). `.high-demand-selling-october` (Section 13) and `.founder-bot-paris` (Section 6) likewise unrelated.

## 4. Color scheme custom properties (resolved)

Section 5 uses **`color-scheme-1`** (different from Sections 3 / 4 which used `4e3f3173-…`).

`color-scheme-1` is defined in the inline `<style>` block at `rendered.html:923–994`. Excerpt:

```css
.color-scheme-1 {
  --color-background: rgb(255 255 255 / 1.0);    /* solid #FFFFFF (white) */
  --color-background-rgb: 255 255 255;
  --color-foreground: rgb(0 0 0 / 1.0);           /* black */
  --color-foreground-heading: rgb(0 0 0 / 1.0);
  --color-primary: rgb(0 0 0 / 1.0);
  --color-primary-button-background: rgb(255 126 151 / 1.0);  /* #FF7E97 */
  --color-primary-button-text: rgb(255 255 255 / 1.0);
  --color-primary-button-hover-background: rgb(0 0 0 / 1.0);
  …
}
```

**Live probe confirms** Section 5 desktop `.main-container backgroundColor: rgb(255, 255, 255)`, `backgroundImage: none`, `color: rgb(0, 0, 0)`. Solid WHITE background — distinct from the `#F6F8F9` of Sections 3 / 4.

The `.gradient` class on the container has **no rule** (verified by `grep -n "^\.gradient" external-00-base.css` → empty). It's a marker only. No section-specific `--color-*` overrides.

## 5. `@font-face` and computed font-family

**Same as Section 4.** No section-specific font override.

- `h2`, `h3` resolve to `circular_stdmedium` via global override at `rendered.html:106–110` (`body:not(:has(.gps)) h1, h2, …, h6 { font-family: 'circular_stdmedium' !important; }`). Live probe confirms.
- `<p>`, `<a class="btn">`, `.section-last-icon-text p` resolve to `Inter, sans-serif` (theme paragraph default). Live probe confirms.

Project rule: substitute Inter for `circular_stdmedium` via `--bq-font-sans`. No new font work for Section 5.

## 6. `@keyframes` / animations

**Same as Section 4.** AOS-only. **Four** `data-aos="fade-up"` elements this time (one more than Section 4 because `.top-header` is non-empty here): `.top-header`, `.content-folder`, `.photo-folder`, plus the `aos-animate` class on `.main-container` is absent in Section 5 (only the children get it). Body data-attrs gate to `easing=ease, duration=400ms, delay=0`. No `@keyframes`.

## 7. Decorative `:after` pseudo

**NONE.** `to-help-women` has no `:after` rule (verified by full source grep). Live probe confirms `mainAfter.content: 'none'; mainAfter.display: 'inline'` desktop and mobile — no pseudo painting.

Comparison with Sections 2 (`11_5.png`, top-LEFT) and Section 4 (`11_6.png`, top-RIGHT): both used decorative pseudos hidden ≤991. Section 5 has none. Per existing build precedent ("Hard nos: No decorative `:after` slot — omit per Section 2 precedent"), nothing to implement here.

## 8. CTA button — flag any deviation from Section 4's CTA

**No deviation.** The selector chain is identical: `.content-folder .btn` resolves the same way. Same href, same label structure (English source: "Rejuvenate Your Under Eyes Today"). Live probe confirms the same dimensions / colors / typography:

| Property | Desktop | Mobile (≤390) | Cite |
|---|---|---|---|
| `width` | `411.36px` (max-content) | `350px` (100%) | b00:8486 / 9537 |
| `height` | `62px` | `42.39px` | computed |
| `padding` | `15px 40px` | `10px 10px` | b00:8483 / 9732 |
| `font-size` | `20px` | `14px` | b00:8484 / 9536 |
| `font-weight` | `400` | `400` | inherited |
| `color` | `rgb(255, 255, 255)` | same | b00:8482 |
| `background` | `rgb(0, 0, 0)` | same | b00:8481 |
| `margin-top` | `30px` | `30px` | b00:8497 |
| `border-radius` | `0px` | `0px` | UA default |
| `text-transform` | `none` | `none` | source default — NOT uppercase |
| `text-decoration` | `underline 1.5px rgba(0, 0, 0, 0)` (transparent — visually no underline) | same w/ 1.05px | UA `<a>` underline + alpha 0 |
| `text-align` | `start` | `center` | b00:9540 mobile |

**Build implication:** the existing `bq-image-text__cta` styling (project decision: uppercase + pink hover, hero pattern) was applied for Section 4 as a deliberate deviation from source. Section 5's source CTA matches Section 4's source — no new deviation. Continue using existing `.bq-image-text__cta` styles unchanged. Carry the same flag forward.

## 9. Computed values (live probe — desktop 1440×900, mobile 390×844 @2×)

### Desktop

| Element | Property | Value | Notes |
|---|---|---|---|
| `.main-container` | `width × height` | `1440 × 706.92 px` | full viewport width |
| `.main-container` | `padding` | `30px 0 30px 0` | inline rule rendered.html:5752 |
| `.main-container` | `background-color` | `rgb(255, 255, 255)` | solid white from color-scheme-1 |
| `.main-container` | `background-image` | `none` | no gradient |
| `.main-container::after` | `content` | `none` | NO decorative pseudo |
| `.top-header` | `width × height` | `1400 × 55.19 px` | non-empty (h2 dictates height) |
| **`.top-header h2`** | font-family | `circular_stdmedium` | global override |
| **`.top-header h2`** | font-size | `46 px` | b00:8430 |
| **`.top-header h2`** | font-weight | `400` | inherited |
| **`.top-header h2`** | line-height | `55.2 px` (1.2) | theme h2 default |
| **`.top-header h2`** | text-align | `center` | b00:8431 |
| **`.top-header h2`** | max-width | `700 px` | b00:8432 |
| **`.top-header h2`** | margin | `0 350px 30px 350px` | `margin: auto` centers within 1400px row |
| **`.top-header h2`** | margin-bottom | `30 px` | b00:8435 |
| **`.top-header h2`** | color | `rgb(0, 0, 0)` | b00:8434 |
| **`.top-header h2 strong`** | color | `rgb(255, 126, 151)` | b00:8438 — pink |
| **`.top-header h2 strong`** | font-weight | `700` | UA default `bold` (no override; differs from h3 strong which IS overridden to 400) |
| `.img-with-txt-keeper` | `width × height` | `1400 × 561.73 px` | flex row, image-driven height |
| `.img-with-txt-keeper` | `display / align-items` | `flex / center` | b00:8440 |
| `.content-folder` | `width × height` | `840 × 561.73 px` | 60% of 1400 |
| `.content-folder` | `padding` | `0 0 0 80px` | **`padding-left: 80px`** (img-left) — b00:8465 |
| `.content-folder` | `order` | `2` | b00:8464 — text RIGHT |
| `.content-folder h3` | font-size | `32 px` | b00:8451 |
| `.content-folder h3` | line-height | `38.4 px` (1.2) | theme h3 default |
| `.content-folder h3` | margin | `0 0 32px 0` | margin-top live-probe 0; margin-bottom UA default 1em |
| `.content-folder h3 strong` | color | `rgb(255, 126, 151)` | b00:8455 |
| `.content-folder h3 strong` | font-weight | `400` | b00:8456 — explicit `font-weight: normal` |
| `.content-folder > p` | `pCount` | **`1`** | only ONE `<p>` element (5 `<br>`s inside) |
| `.content-folder > p` | font-size | `18 px` | inherited |
| `.content-folder > p` | line-height | `28.8 px` | inherited |
| `.content-folder > p` | margin-top / margin-bottom | `18 / 18 px` | UA default 1em |
| `.content-folder .btn` | width × height | `411.36 × 62 px` | (see §8) |
| `.section-last-icon-text` | display / align-items | `flex / center` | b00:8504 |
| `.section-last-icon-text` | padding-top | `25 px` | b00:8506 |
| `.section-last-icon-text` | flex-wrap | `nowrap` | desktop default |
| `.icon-block-part` | display / align-items | `flex / center` | b00:9119 |
| `.icon-block-part` | width × height | `316.78 × 28.8 px` (item 1) | content-driven |
| `.icon-block-part p` | margin | `0 15px 0 10px` | b00:8509 |
| `.icon-block-part > svg` | dimensions | `14×14 px` | rendered.html:5795 |
| `.photo-folder` | `width × height` | `560 × 560 px` | 40% of 1400 |
| `.photo-folder` | `order` | `1` | b00:8469 — image LEFT |
| `.photo-folder video` | `width × height` | `560 × 560 px` | 100% of column |
| `.photo-folder video` | border-radius | `20 px` | b00:8458 |
| `.photo-folder video` | (attributes) | `autoplay, loop, muted, playsinline, preload="metadata", poster` | rendered.html:5821 |
| `.photo-folder video > img` (fallback) | `width × height` | `0 × 0` | not rendered (browser uses `<source>`) |
| `.photo-folder video > img` | `alt` | `""` (empty) | source defect — clone with required alt |

### Mobile

| Element | Property | Value | Notes |
|---|---|---|---|
| `.main-container` | `width × height` | `390 × 1344.89 px` | viewport |
| `.main-container` | `padding` | `30px 0 30px 0` | unchanged |
| `.main-container` | `background-color` | `rgb(255, 255, 255)` | unchanged white |
| `.main-container::after` | `content` | `none` | NO pseudo |
| `.page-width` inner | `350 px` | `390 - 20×2` | b00:4379 |
| `.top-header` | `width × height` | `350 × 33.59 px` | h2 single-line @ 28px |
| **`.top-header h2`** | font-size | `28 px` | b00:9728 (≤390 wins over ≤767's 30px) |
| **`.top-header h2`** | line-height | `33.6 px` | inherited |
| **`.top-header h2`** | margin | `0 0 30px 0` | inherited rule (max-width 700px no longer constrains at 350) |
| **`.top-header h2`** | text-align | `center` | inherited |
| **`.top-header h2 strong`** | font-weight | `700` | UA bold |
| `.img-with-txt-keeper` | `flex-wrap / align-items` | `wrap / initial` | b00:9514, 9423 |
| `.content-folder` | `width × height` | `350 × 871.30 px` | 100% |
| `.content-folder` | `padding-left` | `0 px` | b00:9531 (≤767 reset) |
| `.content-folder` | `order` | `2` | b00:9517 — text below |
| `.content-folder h3` | font-size | `28 px` | b00:9728 |
| `.content-folder h3` | margin-top | `20 px` | b00:9526 |
| `.content-folder h3` | margin-bottom | `28 px` | UA default 1em |
| `.content-folder > p` | font-size | `18 px` | unchanged from desktop |
| `.content-folder > p` | margin | `18 / 18 px` | unchanged |
| `.content-folder .btn` | font-size / padding / width / text-align | `14 px / 10×10 / 100% / center` | (see §8) |
| `.section-last-icon-text` | flex-wrap / gap | `wrap / 10 px` | b00:9541 |
| `.icon-block-part` | width / margin-bottom | `100% / 10 px` | b00:9420, 9612 |
| `.photo-folder` | `width × height` | `350 × 350 px` | 100%; b00:9522 |
| `.photo-folder` | `order` | `1` | b00:9522 — image above |
| `.photo-folder video` | `width × height` | `350 × 350 px` | 100% of column |
| `.photo-folder video` | border-radius | `20 px` | unchanged |

### Section padding (confirmed)

`30 / 30` (top / bottom) per inline `<style>` at `rendered.html:5752–5755`. Differs from Section 3 (`10/10`) and Section 4 (`10/30`). Already configurable via existing `section_padding_top` / `section_padding_bottom` schema settings.

### Crops (rendered measurements)

- `source/crops/section-06-mission-desktop.png`: **1440 × 707 px**, 593 KB.
- `source/crops/section-06-mission-mobile.png`: **780 × 2690 px**, 830 KB (DPR 2 → CSS-px height ≈ 1345).

## 10. Triangulation discrepancies

### A. Family-audit `p count = 3` is wrong; DOM has 1 `<p>`

- **family-audit-image-text.md row 4** (`fmJKeW` / Mission) reports `p count = 3`.
- **DOM at rendered.html:5785:** ONE `<p>` element containing the entire body, with internal `<br><br>` separators (and a trailing `<br>`) producing 5 `<br>`s total inside.
- **Live probe confirms `pCount = 1`.**
- **Visual interpretation:** the `<br><br>` separators render as three visual paragraphs, but the DOM truth is one `<p>`.
- **Resolution:** schema decision required. Two reasonable options:
  1. **Single `intro_p` field** that accepts `<br><br>` separators (mirror source DOM faithfully). Lowest schema cost; preserves source structure.
  2. **Block-based body** (`paragraph` block, multi-instance) accumulating multiple `<p>` elements rendered in order. Higher schema cost; cleaner editor UX; aligns with the "block-based body" direction the family audit recommended for the broader family (Sections 6, 8 will need lists too).
- **Recommendation:** option 1 for Section 5 (one `<p>` with `<br><br>` is mappable to existing `intro_p` field — set in `index.json` as a single richtext value). Defer block-based body until Section 6 forces it (paragraphs-then-`<ul>` ordering won't fit a flat schema). Flag for chat-Claude.

### B. Family-audit "Has h2" column was correct (✓) — h2 cascade now exercised

- This is the FIRST instance in the build that puts an `<h2>` inside `.top-header`. Sections 3 and 4 had empty `.top-header` (no h2 styling exercised, just AOS reveal target).
- The cascade (b00:8429, 8437, 9506, 9728) now applies with the values documented in §3 / §9. h2 strong inherits UA bold (700) — distinct from h3 strong (overridden to 400 by b00:8456).
- **Resolution:** no discrepancy with HTML / CSS / render — flagged for §11 schema implication: `bq-image-text` schema must add an optional `heading_h2` field, with the same `%brand%` token-replace behavior as the existing richtext fields.

### C. `<img>` inside `<video>` lacks `alt` (same as Section 4)

- Same defect as Section 4 / Section 3.
- **Resolution:** same as Section 4 — require `image_alt` setting and pass it to both the `<video>` `aria-label` and the inner `<img>` fallback. The current `bq-image-text` build already does this.

### D. CTA `text-decoration: underline 1.5px rgba(0, 0, 0, 0)` — transparent underline

- **Live probe** desktop returned `textDecoration: 'underline 1.5px rgba(0, 0, 0, 0)'`. The underline IS present in computed style but its color alpha is 0 (fully transparent), so it's not visible.
- **Source explanation:** the UA default `<a>` underline isn't suppressed by `.btn`; instead, some upstream theme rule (not isolated by simple selector grep) makes the underline transparent.
- **Resolution flag:** our build's `.bq-image-text__cta` has explicit `text-decoration: none`, which is functionally equivalent (no visible underline). No deviation needed; flagging only because it's a triangulation curiosity.

### E. h3 desktop margin-top = 0 (no explicit CSS rule, live probe confirms)

- Same as Sections 3 / 4. Live-probe authoritative: desktop margin-top 0, mobile 20.
- **Resolution:** apply both per breakpoint — already covered by current `bq-image-text.css`.

### F. UA-default vertical margins on `<p>`

- Same as Sections 3 / 4 (§9.F / §9.G). 18 px UA default 1em vertical margins on `<p>`.
- **Resolution:** no override.

### G. h2 desktop `margin: auto` produces `margin: 0 350px 30px 350px` on a 700px max-width inside 1400px parent

- Live probe confirms `margin-left: 350px; margin-right: 350px` desktop (auto-centered) and `margin-left: 0; margin-right: 0` mobile (max-width 700px doesn't constrain at 350px).
- **Resolution:** schema CSS should mirror — `.bq-image-text__heading { max-width: 700px; margin: 0 auto 30px; text-align: center; }` desktop, with mobile naturally centering since the element is full-width.

### H. h2 strong fontWeight 700 (UA default) vs h3 strong fontWeight 400 (CSS override)

- Source CSS at b00:8437 only sets `color: #ff7e97` on `.top-header h2 strong` — no font-weight override, so UA `bold` / 700 wins.
- Source CSS at b00:8455 explicitly sets `font-weight: normal` on `.content-folder h3 strong` (and color pink) — so h3 strong is 400.
- Live probe confirms both (h2Strong = 700, h3Strong = 400).
- **Resolution:** project rule applied for h3 strong is `font-weight: 700` + accent color (deliberate deviation, same as Sections 3 / 4). For h2 strong, the project rule already aligns with source (700 + accent). Both should be styled with the same `--bq-image-text-accent` token; only h3 strong is a project-rule deviation (already in-place).

### I. `to-help-women` is a marker class with no CSS rules

- Static-CSS grep across `source/css/external-00-base.css` returns 0 hits for `to-help-women`. Source HTML uses it once (line 5760) on `.main-container`.
- **Resolution:** safe to ignore in the consolidated `bq-image-text` schema. No section-specific `:after`, no gradient, no layout overrides.

### No other discrepancies between HTML / CSS / render.

## 11. Family delta from CURRENT `bq-image-text` (post Section 4)

Flag-list only — no schema proposals here. Chat-Claude composes the schema extension.

### NEW (Section 5 introduces, current schema doesn't have)

- **`<h2>` heading** above the row (inside `.top-header`). Not in current schema. Requires:
  - New richtext setting (`heading_h2`) with `%brand%` token-replace support (mirror of `subheading_h3`).
  - Conditional render with `{% if %}` guard (Sections 3 / 4 leave it blank).
  - CSS rule: `font-size: 46px / 30px / 28px` cascade (desktop / ≤767 / ≤390), `text-align: center`, `max-width: 700px`, `margin: 0 auto 30px`, `<strong>` accent color (project rule: pink + 700 weight — already aligns with source for h2; Section 5 just exercises the cascade).
- **`color-scheme-1` solid white background.** Different from Sections 3 / 4 which used `#F6F8F9`. Already configurable via existing `bg_color` schema setting — set instance value to `#FFFFFF`.
- **`.img-with-txt-keeper.img-left` modifier verified in source.** Sections 3 & 4 either had `img-left` (Section 3) or no modifier (Section 4). Section 5 confirms `img-left` semantics. Already configurable via existing `layout: image_left` schema option — no schema change.

### DIFFERENT (same shape as current schema but different value)

- **Section padding `30 / 30`** (vs Section 3 `10/10`, Section 4 `10/30`). Already configurable.
- **Image position `image_left`** (Section 4 was `image_right`). Already configurable.
- **`numbered_list` blank** (Section 5 has no `<ol>`; the body is just one `<p>`). Existing `{% if numbered_list != blank %}` guard handles this; no schema change.
- **`closing_p` blank** (Section 5 has no closing `<p>` separate from intro). Same guard handles this.
- **`intro_p` carries the entire body** (1 `<p>` with `<br><br>` separators). Mappable to existing `intro_p` field as a single richtext value.

### CONFIRMED (same as Section 4, no change)

- CTA: same selector chain, same dimensions / colors / typography (see §8). Existing `cta_label` + `cta_link` settings reused. Project deviation (uppercase + pink hover) carried forward unchanged.
- Trust row: same 2-item structure with green-circle SVG + label. Existing `trust_item` block reused; same labels as Section 4.
- Video: same `<video>` element with poster + source + img fallback, same attribute set. Existing `video` setting reused.
- Font: Inter substitution unchanged. h3 strong project rule unchanged.
- AOS: 4 `data-aos="fade-up"` reveals (one more than Section 4 because `.top-header` is now non-empty). Existing AOS setup handles this.

### Schema-extension flag-list (for chat-Claude)

Schema fields needed beyond the current `bq-image-text` (post-Section-4 baseline):

- **`heading_h2`** — richtext, optional, with `%brand%` token-replace pipeline matching `subheading_h3`. Default empty (Sections 3 / 4 keep blank).

Also a Liquid + CSS extension:

- Render `<h2 class="bq-image-text__heading">{{ heading_h2_resolved }}</h2>` inside a new `.bq-image-text__top-header` wrapper (centered, max-width 700, margin-bottom 30/20 desktop/mobile), only when non-blank. AOS `data-aos="fade-up"` on the wrapper.
- CSS for `.bq-image-text__heading` mirroring §9 measurements (46/30/28 px cascade; text-align center; max-width 700; margin 0 auto 30; pink strong; font-weight inherited 400 with strong UA-bold or project-rule 700).

These are flags only — chat-Claude composes the actual schema additions, mindful of the "schema grows by accretion" rule (only what Section 5 demands; don't pre-build for Sections 6 / 13 / 15).

## 12. Asset list

| File | Intrinsic | Used at | alt | Reproducibility | Placeholder strategy |
|---|---|---|---|---|---|
| `42caac6311c146b38f7ba6911a5eacad.HD-1080p-4.8Mbps-64071265.mp4` (Shopify CDN, `?v=0`) | 1080p, 4.8 Mbps MP4 | `<video>` in `.photo-folder` (left column under `img-left`) | n/a — video doesn't take alt; inner `<img>` fallback has none | Their video (likely a brand/mission montage) — IP-blocked for verbatim cloning | Schema `video` picker (already exists). Until uploaded: render the placeholder SVG (same as Section 3 / 4) sized 1:1. Italian alt for the photo asset: required (e.g., `"Il dispositivo RevitalEyes in uso quotidiano"`). |
| `42caac6311c146b38f7ba6911a5eacad.thumbnail.0000000000_1100x.jpg` (Shopify CDN, `?v=1764368219`) | 1100×1100-ish thumbnail (auto-derived from MP4) | `<video poster="…">` + inner fallback `<img>` | none in source | Their thumbnail (auto-generated) | Shopify auto-generates `vid.preview_image` from uploaded video; Liquid uses it as `poster`. Same pattern as Section 4. |

No decorative `.png` for this section (no `:after` pseudo). No images other than the video poster.

End of inventory. Stop.
