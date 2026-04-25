# Section 1 (bq-hero) — structural diff

Generated: 2026-04-25

Sources cited:
- `source/rendered.html` (live captured DOM, inline `<style>` blocks, inline scripts)
- `source/css/external-00-base.css` (theme + custom styles, ~252 KB)
- `source/css/external-01-slick.css` (slick base, single-line minified — all citations are `:1`)
- Our build: `sections/bq-hero.liquid`, `assets/bq-tokens.css`, `snippets/stylesheets.liquid`

## 1. HTML tree

### Source — `rendered.html` lines 4012–5538

```
section.new-banner-home.section--page-width.color-scheme-2          (rendered.html:4012)
├── div.custom-section-background                                   (rendered.html:4017)
│   └── div.background-image-container                              (rendered.html:4018)
│       └── img  (//botaniqueparis.com/cdn/.../Group_48095889_1.png  rendered.html:4021;
│                 sizes="(min-width: 750px) 100vw, 100vw"; loading="eager")
├── div.border-style.custom-section-content                         (rendered.html:4027)
│   └── div.spacing-style.layout-panel-flex.layout-panel-flex--row.section-content-wrapper.mobile-column
│                                                                   (rendered.html:4033)
│       inline-style: --gap: max(24px, calc(var(--gap-scale,1.0) * 70px));
│                     --padding-block-start: max(20px, calc(var(--spacing-scale) * 80px));
│                     --padding-block-end:   max(20px, calc(var(--spacing-scale) * 80px));
│                                                                   (rendered.html:4042, 4047)
│       └── div.group-block.new_banner_contant                      (rendered.html:4054)
│           inline-style: --size-style-width:100%; --size-style-width-mobile:100%;
│                                                                   (rendered.html:4069)
│           ├── div.group-block__media-wrapper (empty)              (rendered.html:4071)
│           └── div.group-block-content.layout-panel-flex.layout-panel-flex--column.mobile-column
│                                                                   (rendered.html:4077)
│               ├── rte-formatter.text-block.h(none).rte            (rendered.html:4098)
│               │   └── <p><strong>MOTHER'S DAY SALE 🎉</strong></p>(rendered.html:4116)
│               ├── div.text-block.h2                               (rendered.html:4132)
│               │   └── <h1>Rejuvenate Your Eyes <strong>Without Surgery</strong></h1>
│               │                                                   (rendered.html:4150)
│               ├── rte-formatter.text-block.rte                    (rendered.html:4166)
│               │   └── <p>In a 12 week study, women using RevitalEyes reported:</p>
│               │                                                   (rendered.html:4184)
│               ├── div.group-block.banner-list (×3)                (rendered.html:4196, 4295, 4394)
│               │   └── div.group-block-content (row)
│               │       ├── div.shopify-block.icon-block
│               │       │   └── img (Group_48095925.png, width:28px) (rendered.html:4242, 4341, 4440)
│               │       └── rte-formatter > <p>...</p>              (rendered.html:4275, 4374, 4473)
│               ├── div.group-block.banner-black-btn                (rendered.html:4493)
│               │   └── div.group-block-content (column)
│               │       └── <a class="size-style button button--Aayt..." href="/products/revitaleyes">
│               │             REJUVENATE YOUR EYES TODAY            (rendered.html:4532, 4538)
│               ├── div.group-block.banner-shipping                 (rendered.html:4557)
│               │   └── div.group-block-content (row, mobile-column)
│               │       ├── div.group-block (fit-content)           (rendered.html:4597)
│               │       │   └── icon-block (svgviewer-png-output_1.png, width:22px)
│               │       │       + <p>365-Day Money Back Guarantee </p>  (rendered.html:4674)
│               │       └── div.group-block (fit-content)           (rendered.html:4694)
│               │           └── icon-block (svgviewer-png-output_1.png, width:22px)
│               │               + <p>Express Shipping Worldwide</p> (rendered.html:4773)
│               └── div.group-block (slider wrapper)                (rendered.html:4801)
│                   └── div.group-block-content (column)
│                       └── div.group-block (centered, fit-content) (rendered.html:4841)
│                           └── div.group-block-content (column)
│                               └── div.group-block.slider-main-part.home--reivew
│                                                                   (rendered.html:4880)
│                                   └── div.group-block-content.custom-slider-AMmQxKzluZkNYMVFoN__custom_slider_NH9DTB.slick-initialized.slick-slider.slick-dotted
│                                                                   (rendered.html:4904)
│                                       ├── div.slick-list.draggable
│                                       │   └── div.slick-track
│                                       │       ├── div.slick-slide.slick-cloned (data-slick-index="-1")
│                                       │       │                   (rendered.html:4911)
│                                       │       ├── div.slick-slide.slick-current.slick-active (index 0)
│                                       │       │                   (rendered.html:4957)
│                                       │       ├── div.slick-slide (index 1)  (rendered.html:5003)
│                                       │       ├── div.slick-slide (index 2)  (rendered.html:5049)
│                                       │       ├── div.slick-slide (index 3)  (rendered.html:5095)
│                                       │       ├── div.slick-slide (index 4)  (rendered.html:5141)
│                                       │       └── div.slick-slide.slick-cloned × 5 (indices 5–9; for infinite-loop)
│                                       │                   (rendered.html:5187, 5233, 5279, 5325, 5371)
│                                       │   each .slick-slide contains:
│                                       │     div.review-content-item-tab
│                                       │     ├── div.review-top
│                                       │     │   ├── div.review-avatar
│                                       │     │   │   └── img  width="200" height="295" (CSS resizes to 80×80)
│                                       │     │   │                   (rendered.html:4961)
│                                       │     │   └── div.review-text
│                                       │     │       └── div.review-content-yea
│                                       │     │           └── <p>"…quote…"</p>
│                                       │     └── div.review-bottom
│                                       │         ├── div.review-author
│                                       │         │   ├── <h4>- Anje F.</h4>      (rendered.html:4979)
│                                       │         │   └── span.verified-badge > svg (Twitter blue #1da1f2 fill in path)
│                                       │         │                   (rendered.html:4983–4994)
│                                       │         └── div.review-stars
│                                       │             "★★★★★"      (rendered.html:4998–5000)
│                                       └── ul.slick-dots role="tablist"
│                                           └── li × 5 (one per real slide; aria-label "1 of 5" → "5 of 5")
│                                                                   (rendered.html:5423)
```

Real (non-cloned) testimonial slide count: **5** (`rendered.html:5423` — slick-dots `aria-label="N of 5"`).

### Ours — `sections/bq-hero.liquid`

```
section.bq-section.bq-hero  data-bq-hero  data-section-id={{ section.id }}  style="--bq-accent:..." (sections/bq-hero.liquid:67)
├── div.bq-hero__media                                              (sections/bq-hero.liquid:74)
│   └── div.bq-hero__media-frame                                    (sections/bq-hero.liquid:75)
│       └── img.bq-hero__image.bq-hero__image--mobile               (sections/bq-hero.liquid:77)
│           img.bq-hero__image.bq-hero__image--desktop              (sections/bq-hero.liquid:80)
│           OR placeholder svg                                      (sections/bq-hero.liquid:83)
└── div.bq-hero__content                                            (sections/bq-hero.liquid:88)
    ├── p.bq-hero__eyebrow > <strong>{{ eyebrow }}</strong>         (sections/bq-hero.liquid:90)
    ├── h1.bq-hero__headline                                        (sections/bq-hero.liquid:93)
    │   └── plain text {{ headline_line_1 }} + " "
    │       + <strong class="bq-hero__headline-accent">{{ headline_line_2_accent }}</strong>
    ├── p.bq-hero__intro                                            (sections/bq-hero.liquid:99)
    ├── ul.bq-hero__benefits role="list"                            (sections/bq-hero.liquid:102)
    │   └── li.bq-hero__benefit × 3
    │       ├── span.bq-hero__benefit-dot > svg (custom check)
    │       └── <span>{{ benefit_N }}</span>
    ├── a.bq-hero__cta href={{ cta_link }}                          (sections/bq-hero.liquid:120)
    ├── div.bq-hero__trust                                          (sections/bq-hero.liquid:123)
    │   └── div.bq-hero__trust-item × 2
    │       ├── span.bq-check > svg (custom check)
    │       └── <span>{{ trust_N }}</span>
    └── div.bq-hero__testimonials role="region" aria-roledescription="carousel"
                                                                    (sections/bq-hero.liquid:141)
        ├── ul.bq-hero__testimonials-track role="list"              (sections/bq-hero.liquid:142)
        │   └── li.bq-hero__testimonial × 5  (one per section block — preset seeds 5)
        │       └── figure.bq-hero__testimonial-card
        │           ├── div.bq-hero__testimonial-top
        │           │   ├── img.bq-hero__testimonial-avatar  OR  span.bq-hero__testimonial-avatar--placeholder
        │           │   └── div.bq-hero__testimonial-text
        │           │       └── div.bq-hero__testimonial-quote > <p>{{ block.settings.quote }}</p>
        │           └── div.bq-hero__testimonial-bottom
        │               ├── div.bq-hero__testimonial-author
        │               │   ├── <h4>- {{ block.settings.name }}</h4>
        │               │   └── span.bq-hero__verified > svg  (#1DA1F2 fill via CSS color: var)
        │               └── div.bq-hero__testimonial-stars  ★/☆ × 5
        └── ol.bq-hero__dots role="tablist"
            └── li × {{ section.blocks.size }} > button.bq-hero__dot  (no slick-cloned siblings)
```

Real testimonial count in our preset: **5** (sections/bq-hero.liquid:443–449).

### Tree-shape differences

- **Background image is positioned differently.** Source: standalone `<img>` inside `.background-image-container`, rendered as a full-bleed section background that the content overlays. Ours: image is the right grid cell of a 2-column grid (sections/bq-hero.liquid:74). Visually similar but structurally different — the "right column" in our build is a real grid track, while in source it's the right half of a single full-bleed image where the left half is whitespace.
- **No outer `section-content-wrapper` analog in ours.** Source nests content inside `.section-content-wrapper` with `--padding-block-start/end` driven by inline CSS variables; ours applies padding directly on `.bq-hero__content` via the desktop `@media` rule (sections/bq-hero.liquid:322).
- **Source uses 6 levels of nested `group-block` wrappers around the slider** (rendered.html:4801→4841→4880→4904); ours has a flat `.bq-hero__testimonials > .bq-hero__testimonials-track > li.bq-hero__testimonial` (3 levels).
- **Source has slick-cloned slides** (rendered.html:4911 + 5187–5371) — slick generates clones at indices -1 and 5–9 for infinite-loop wrap. Ours has only the 5 real slides; no clones.
- **Source CTA element type matches:** both `<a>`. Source CTA classes: `size-style button button--Aayt...` (rendered.html:4532). Ours: `bq-hero__cta` (sections/bq-hero.liquid:120).
- **Source bullet uses `<p>` inside `rte-formatter`** (rendered.html:4275); ours uses `<span>` inside `<li>` (sections/bq-hero.liquid:115).
- **Eyebrow element shape matches:** both render `<p><strong>…</strong></p>` (rendered.html:4116; sections/bq-hero.liquid:90).

## 2. CSS rules

Citations format: `<file>:<line>` (or `<file>:<line> [@media]` when inside a media block).

### Container / layout

| Property | Source value | Source cite | Our value | Our cite | Status |
|---|---|---|---|---|---|
| section padding-top (desktop) | `max(20px, calc(var(--spacing-scale)*80px))` → 80px when scale=1 | rendered.html:4047 (inline style on `.section-content-wrapper`) | `padding-block: 80px` | sections/bq-hero.liquid:322 | **MATCH** (80px) |
| section padding-bottom (desktop) | `max(20px, calc(var(--spacing-scale)*80px))` → 80px | rendered.html:4047 | `padding-block: 80px` | sections/bq-hero.liquid:322 | **MATCH** (80px) |
| section padding-top (mobile) | `max(20px, …)` floors at 20px when scale shrinks | rendered.html:4047 | `padding: 30px 16px 40px` (top=30px) | sections/bq-hero.liquid:220 | **DIFF** — ours 30px, source 20px |
| section padding-bottom (mobile) | Same `max(20px, …)` → 20px | rendered.html:4047 | `padding: 30px 16px 40px` (bottom=40px) | sections/bq-hero.liquid:220 | **DIFF** — ours 40px, source 20px |
| Inner container max-width | `1300px` (`.new-banner-home .custom-section-content { max-width: 1300px; }`) | external-00-base.css:8371 | `max(24px, calc((100vw - 1300px) / 2))` start padding aligns content to 1300px rail | sections/bq-hero.liquid:323 | **MATCH** (1300px) |
| Column gap (between content + image) | `--gap: max(24px, calc(var(--gap-scale,1.0)*70px))` → 70px desktop | rendered.html:4042 | `padding-inline-end: 70px` on content column | sections/bq-hero.liquid:324 | **MATCH** (70px) |
| Left column width / flex | Single `.new_banner_contant` group-block; inline `--size-style-width: 100%` (only child of flex-row, so it occupies full row, but fits content via internal layout). NOT a fixed-width column. | rendered.html:4069 | Grid track `minmax(0, 1fr)` (50%) | sections/bq-hero.liquid:313 | **DIFF in mechanism** (source = single child + bg image; ours = 2 grid tracks). Visual width ≈ 50% in both, **MATCH visually**. |
| Right column width / flex | No right column — bg image is absolute/full-bleed asset shown via `<img>` inside `.background-image-container`, scaled `(min-width: 750px) 100vw, 100vw` (rendered.html:4021) | rendered.html:4017–4021 | Grid track `minmax(0, 1fr)` (50%) holding `<img>` | sections/bq-hero.liquid:313, 318 | **DIFF in mechanism**, MATCH visually |

### Right-column image

| Property | Source value | Source cite | Our value | Our cite | Status |
|---|---|---|---|---|---|
| Image container padding | None set | (no rule found in external-00-base.css for `.background-image-container`) | None | (no rule) | **MATCH** (none either side) |
| Image container margin | None set | (no rule found) | None | (no rule) | **MATCH** |
| Image container max-width | None set on the bg image container itself (image is full 100vw). The CONTENT container is capped at 1300px. | external-00-base.css:8371 (content) | None on `.bq-hero__media`; image fills its grid track | sections/bq-hero.liquid:211 | **MATCH** |
| Image border-radius | None set on bg image. (Note: `.new-banner-home .custom-autoplay-video video { border-radius:20px; }` exists at external-00-base.css:11593 but applies to video, not the hero img.) | external-00-base.css (no `.background-image-container` rule found) | None | sections/bq-hero.liquid:212 | **MATCH** |
| Image object-fit | `<img>` natively rendered (no object-fit rule in source CSS that targets this img). | rendered.html:4021 (intrinsic dimensions only via `width/height` attrs absent — uses `srcset`+`sizes`) | `object-fit: cover` | sections/bq-hero.liquid:213 | **DIFF in mechanism**; source has no fit rule because the PNG is designed at the right ratio; ours uses `cover` to crop to grid cell |

### Headline (`<h1>` inside `.new_banner_contant`)

| Property | Source value | Source cite | Our value | Our cite | Status |
|---|---|---|---|---|---|
| font-family | `'circular_stdmedium' !important` (forced via global override) | rendered.html:106–110 (override block); rendered.html:86–91 (`@font-face`) | `var(--bq-font-sans)` → `'Inter', -apple-system, …` | assets/bq-tokens.css:17; sections/bq-hero.liquid:208 | **DIFF** (Circular Std Medium vs Inter; Circular is paid Linotype, no Google Fonts equivalent) |
| font-size (desktop ≥768px) | `32px !important` | external-00-base.css:8328 (top-level rule, not inside @media — applies at all widths until overridden) | `32px` | sections/bq-hero.liquid:334 [@media (min-width: 768px)] | **MATCH** |
| font-size (mobile <768px) | `32px !important` (same rule); overridden to `28px !important` only when viewport ≤390px | external-00-base.css:8328 (universal); external-00-base.css:9720 [@media (max-width: 390px)] | `28px` mobile base; `26px` <390px | sections/bq-hero.liquid:230, 347 | **DIFF** — ours starts at 28px below 768px and drops to 26px at 390px; source stays at 32px down to 391px then drops to 28px at ≤390px |
| font-weight | NOT FOUND on `.new_banner_contant h1` rule (no font-weight set; inherits). The forced `circular_stdmedium` `@font-face` (rendered.html:90) is declared `font-weight: normal` — so `<h1>` text computes to `normal` ≈ 400 against the Circular Medium face (which intrinsically draws at weight 500 because it IS the Medium face but registered as "normal"). | rendered.html:90 | `font-weight: 500` | sections/bq-hero.liquid:234 | **DIFF in mechanism** — source font is Medium-by-default-as-normal (visual weight ~500); ours sets explicit 500 in Inter. Visual intent matches but mechanism differs. |
| line-height | NOT FOUND on `.new_banner_contant h1` (inherits from theme `--font-h1--line-height`). User-observed runtime ≈ 1.05. | (no rule for `.new_banner_contant h1` line-height in external-00-base.css) | `line-height: 1.1` | sections/bq-hero.liquid:231 | **DIFF** — source observed ≈1.05, ours 1.1 |
| letter-spacing | NOT FOUND (no rule on `.new_banner_contant h1`) | (no rule found) | `letter-spacing: 0` | sections/bq-hero.liquid:232 | **MATCH** (both effectively 0/normal) |
| margin-bottom | `30px !important` desktop; `15px` mobile (≤767px); `28px !important` ≤390px (only resets font-size, not margin) | external-00-base.css:8330 (TOP); external-00-base.css:9504 [@media max-width:767px]; external-00-base.css:9721 [@media max-width:390px] (font-size only) | `15px` mobile; `30px` desktop ≥768px | sections/bq-hero.liquid:229, 334 | **MATCH** at desktop (30px) and mobile (15px) |

### Headline accent (`<strong>`)

| Property | Source value | Source cite | Our value | Our cite | Status |
|---|---|---|---|---|---|
| color | `#ff7e97` | external-00-base.css:8333 (`.new_banner_contant h1 strong`) | `var(--bq-accent)` default `#FF7E97` | sections/bq-hero.liquid:236, 6 | **MATCH** |
| font-weight | `<strong>` browser default = bold (700) — no rule overrides | (no rule) | `font-weight: 700` | sections/bq-hero.liquid:236 | **MATCH** |

### Eyebrow (`<p><strong>` in source rte-formatter)

| Property | Source value | Source cite | Our value | Our cite | Status |
|---|---|---|---|---|---|
| font-size (desktop) | `20px !important` (`.new-banner-home p`) | external-00-base.css:9794 [@media min-width:768px] | `font-size: 20px` | sections/bq-hero.liquid:333 | **MATCH** |
| font-size (mobile) | NOT FOUND specific eyebrow rule; inherits from theme paragraph size | (no rule found) | `font-size: 16px` | sections/bq-hero.liquid:225 | **CANNOT DETERMINE** — source mobile inherits theme default |
| font-weight | `<strong>` browser default (700); no override found | rendered.html:4116 (markup) | `font-weight: 700` (on `<p>` parent) + `<strong>` inherits | sections/bq-hero.liquid:225–226 | **MATCH** |
| letter-spacing | NOT FOUND | (no rule) | (none set, inherits 0) | (no rule) | **MATCH** (both effectively 0) |
| margin-bottom | NOT FOUND specific rule on this `<p>`. Inline style on the `rte-formatter`: `--padding-block-end: 11px` | rendered.html:4101 | `margin: 0 0 16px` | sections/bq-hero.liquid:225 | **DIFF** — source 11px, ours 16px |
| color | NOT FOUND specific. `.new-banner-home p` and theme defaults apply (likely `#000`) | external-00-base.css:8350 (`.banner-list p { color: #000; }` — sibling, not eyebrow) | `color: #000` | sections/bq-hero.liquid:225 | **MATCH** |

### Subhead `<p>` ("In a 12 week study…")

| Property | Source value | Source cite | Our value | Our cite | Status |
|---|---|---|---|---|---|
| font-size (desktop) | `20px !important` (`.new-banner-home p`) | external-00-base.css:9794 | `20px` | sections/bq-hero.liquid:335 | **MATCH** |
| font-size (mobile) | NOT FOUND specific; theme default | — | `16px` | sections/bq-hero.liquid:238 | **CANNOT DETERMINE** |
| font-weight | NOT FOUND (theme default; likely 400) | — | (none set, inherits) | sections/bq-hero.liquid:238 | **MATCH** (inherit) |
| line-height | NOT FOUND for hero `<p>` specifically | — | `1.45` | sections/bq-hero.liquid:238 | **CANNOT DETERMINE** |
| color | `.banner-list p { color: #000 }` — sibling rule, not subhead. Subhead inherits theme paragraph color. | external-00-base.css:8350 | `color: #000` | sections/bq-hero.liquid:238 | **CANNOT DETERMINE** for subhead specifically |
| margin-bottom | NOT FOUND specific. Inline style on the `rte-formatter`: `--padding-block-end: 21px` | rendered.html:4169 | `margin: 0 0 16px` | sections/bq-hero.liquid:238 | **DIFF** — source 21px, ours 16px |

### Bullets (3× `.banner-list`)

| Property | Source value | Source cite | Our value | Our cite | Status |
|---|---|---|---|---|---|
| Pink dot icon size | `width: 28px` (inline style on `<img>`) | rendered.html:4242 | `width: 28px; height: 28px` (SVG span) | sections/bq-hero.liquid:242 | **MATCH** |
| Bullet `<p>` color | `#000` | external-00-base.css:8350 | `color: #000` | sections/bq-hero.liquid:241 | **MATCH** |
| Bullet `<p>` font-size desktop | `20px !important` (`.new-banner-home p`) | external-00-base.css:9794 | `20px` | sections/bq-hero.liquid:336 | **MATCH** |
| Bullet `<p>` font-size mobile | NOT FOUND specific (theme default) | — | `16px` | sections/bq-hero.liquid:241 | **CANNOT DETERMINE** |
| Row spacing (.banner-list margin-bottom) | `16px` | external-00-base.css:8353 | row gap `8px` (inside `ul.bq-hero__benefits`) | sections/bq-hero.liquid:240 | **DIFF** — source 16px between rows, ours 8px |
| Row layout | flex row, `.banner-list .layout-panel-flex { flex-wrap: initial }` even on mobile | external-00-base.css:9392 [@media max-width:991px] | `display: flex; gap: 8px; align-items: center` | sections/bq-hero.liquid:241 | **MATCH** structurally |
| Icon-text gap | inline `--gap: 8px` on parent `.group-block-content` | rendered.html:4227 | `gap: 8px` | sections/bq-hero.liquid:241 | **MATCH** |

### CTA (`.banner-black-btn a`)

| Property | Source value | Source cite | Our value | Our cite | Status |
|---|---|---|---|---|---|
| background | `#000` | external-00-base.css:8344 | `background: #000` | sections/bq-hero.liquid:250 | **MATCH** |
| background hover | `#ff7e97` | external-00-base.css:8347 | `background: var(--bq-accent)` (`#FF7E97`) | sections/bq-hero.liquid:263 | **MATCH** |
| border-radius | `0 !important` (`.new_banner_contant a`) | external-00-base.css:8336 | `border-radius: 0` | sections/bq-hero.liquid:259 | **MATCH** |
| display | `block` (`.new_banner_contant a`) | external-00-base.css:8337 | `display: block` | sections/bq-hero.liquid:246 | **MATCH** |
| margin-bottom | `22px` (`.new_banner_contant a`) | external-00-base.css:8338 | `margin: 0 0 22px` | sections/bq-hero.liquid:248 | **MATCH** |
| width (desktop) | NOT FOUND explicit. `.new-banner-home .button` inherits theme width; only mobile sets `width: 100% !important` (external-00-base.css:9398) | — | `width: max-content` desktop | sections/bq-hero.liquid:337 | **CANNOT DETERMINE** for desktop; both look reasonable |
| width (mobile) | `100% !important` | external-00-base.css:9398 [@media max-width:991px] | `width: 100%` | sections/bq-hero.liquid:247 | **MATCH** |
| font-size (mobile) | `13px` | external-00-base.css:9495 [@media max-width:767px] | `13px` | sections/bq-hero.liquid:252 | **MATCH** |
| font-size (desktop) | `20px` | external-00-base.css:9801 [@media min-width:768px] | `20px` | sections/bq-hero.liquid:337 | **MATCH** |
| padding (very-small mobile ≤390px) | `10px` | external-00-base.css:9724 [@media max-width:390px] | `10px` | sections/bq-hero.liquid:348 | **MATCH** |
| margin-top mobile | `0 !important`; margin-left `0 !important` | external-00-base.css:9396–9397 [@media max-width:991px] | `margin: 0 0 22px` (top=0, left=0) | sections/bq-hero.liquid:248 | **MATCH** |
| font-weight | NOT FOUND specific override; theme button default | — | `font-weight: 700` | sections/bq-hero.liquid:253 | **CANNOT DETERMINE** vs source theme |
| letter-spacing | NOT FOUND | — | `letter-spacing: 0.04em` | sections/bq-hero.liquid:254 | **CANNOT DETERMINE** |
| text-transform | NOT FOUND specific (source CTA text in HTML is uppercase by content "REJUVENATE YOUR EYES TODAY", may not be CSS) | — | `text-transform: uppercase` | sections/bq-hero.liquid:255 | **CANNOT DETERMINE** |

### Trust row (`.banner-shipping`)

| Property | Source value | Source cite | Our value | Our cite | Status |
|---|---|---|---|---|---|
| Trust `<p>` color | `#000` | external-00-base.css:8356 | `color: #000` | sections/bq-hero.liquid:266 | **MATCH** |
| Trust `<p>` font-size mobile | `14px` | external-00-base.css:8357 | `14px` | sections/bq-hero.liquid:266 | **MATCH** |
| Trust `<p>` font-size desktop | `18px !important` | external-00-base.css:9798 [@media min-width:768px] | `18px` | sections/bq-hero.liquid:339 | **MATCH** |
| Row layout (mobile) | `.banner-shipping .layout-panel-flex { flex-wrap: initial }` (≤991px) — stays as inline-row even on mobile per CSS, but inline `--gap:12px` + `mobile-column` class can stack. `.banner-shipping .group-block-content { margin-bottom: 10px }` (≤767px) implies stacking on small screens. | external-00-base.css:9392, 9714 | `display: flex; flex-direction: column; gap: 8px` (mobile) | sections/bq-hero.liquid:265 | **DIFF** — source mobile keeps row but allows wrap with `margin-bottom: 10px` between items; ours forces column |
| Row layout (desktop) | row, gap 12px (inline) | rendered.html:4588 | `flex-direction: row; flex-wrap: nowrap; gap: 16px` | sections/bq-hero.liquid:338 | **DIFF** — source gap 12px, ours 16px |
| Green check icon size | `width: 22px` (inline style on `<img>`) | rendered.html:4643 | `width: 22px; height: 22px` | sections/bq-hero.liquid:267 | **MATCH** |

### Testimonial card (`.home--reivew .review-content-item-tab` + descendants)

| Property | Source value | Source cite | Our value | Our cite | Status |
|---|---|---|---|---|---|
| Card max-width | `610px` | external-00-base.css:11507 | `max-width: 610px` | sections/bq-hero.liquid:287 | **MATCH** |
| Card background | `#fff` | external-00-base.css:11505 | `background: #fff` | sections/bq-hero.liquid:284 | **MATCH** |
| Card border-radius | `16px` | external-00-base.css:11506 | `border-radius: 16px` | sections/bq-hero.liquid:286 | **MATCH** |
| Card border | `1px solid #000` | external-00-base.css:11508 | `border: 1px solid #000` | sections/bq-hero.liquid:285 | **MATCH** |
| Card padding (desktop) | `15px` | external-00-base.css:11507 | `15px` | sections/bq-hero.liquid:340 | **MATCH** |
| Card padding (mobile ≤600px) | `13px` | external-00-base.css:11579 [@media screen and max-width:600px] | `13px` (base) | sections/bq-hero.liquid:283 | **MATCH** |
| `.review-top` gap (desktop) | `18px` | external-00-base.css:11514 | `18px` | sections/bq-hero.liquid:341 | **MATCH** |
| `.review-top` gap (mobile ≤600px) | `10px` | external-00-base.css:11583 | `10px` (base) | sections/bq-hero.liquid:289 | **MATCH** |
| `.review-top` margin-bottom (desktop) | `0` | external-00-base.css:11515 | `0` | sections/bq-hero.liquid:341 | **MATCH** |
| `.review-top` margin-bottom (mobile ≤600px) | `8px` | external-00-base.css:11584 | `8px` (base) | sections/bq-hero.liquid:289 | **MATCH** |
| Avatar `<img>` size | `80×80px` circular | external-00-base.css:11523–11525 | `80×80px` circular | sections/bq-hero.liquid:290 | **MATCH** |
| Quote font-style/size/line-height/color | italic, 14px, 1.6, `#333` (with `font-size:14px !important` on inner `<p>`) | external-00-base.css:11530–11537 | italic, 14px, 1.6, `#333` (with inner p `font-size:14px`) | sections/bq-hero.liquid:292–293 | **MATCH** |
| `.review-bottom` layout | `display:flex; align-items:center; justify-content:space-between; padding-left:98px` | external-00-base.css:11541–11544 | desktop: `padding-left: 98px`; mobile base: `padding-left: 90px` | sections/bq-hero.liquid:295, 342 | **MATCH desktop**; mobile differs (90 vs 98) |
| Author `h4` color | `#ff7e97` | external-00-base.css:11554 | `var(--bq-accent)` (`#FF7E97`) | sections/bq-hero.liquid:297 | **MATCH** |
| Author `h4` font-size | `16px` | external-00-base.css:11555 | `16px` | sections/bq-hero.liquid:297 | **MATCH** |
| Author `h4` font-weight | `600` | external-00-base.css:11556 | `600` | sections/bq-hero.liquid:297 | **MATCH** |
| `.verified-badge` display | `inline-flex` | external-00-base.css:11561 | `inline-flex` | sections/bq-hero.liquid:298 | **MATCH** |
| Verified icon color | `#1da1f2` (Twitter blue, hardcoded in svg `fill` attr) | rendered.html:4986 | `#1DA1F2` (`color: #1DA1F2` propagating to `currentColor` in SVG `<circle>`) | sections/bq-hero.liquid:298 | **MATCH** |
| `.review-stars` color | `#ff7e97` | external-00-base.css:11565 | `var(--bq-accent)` (`#FF7E97`) | sections/bq-hero.liquid:300 | **MATCH** |
| `.review-stars` font-size desktop | `18px` | external-00-base.css:11566 | `18px` | sections/bq-hero.liquid:343 | **MATCH** |
| `.review-stars` font-size mobile (≤600) | `16px` | external-00-base.css:11576 | `16px` (base) | sections/bq-hero.liquid:300 | **MATCH** |
| `.review-stars` letter-spacing desktop | `2px` | external-00-base.css:11567 | `2px` | sections/bq-hero.liquid:343 | **MATCH** |
| `.review-stars` letter-spacing mobile | `0` | external-00-base.css:11577 | `0` (base) | sections/bq-hero.liquid:300 | **MATCH** |
| `.home--reivew` outer padding | `10px 0` | external-00-base.css:11502 | NOT applied | sections/bq-hero.liquid:270 | **DIFF** — source has 10px vertical padding around the carousel container |
| `.slick-slide` margin between slides | `0 5px` (mobile ≤600px); inline rule top-level on `.slider-main-part .slick-slide { margin: 0 10px }` | external-00-base.css:11590, 5571 | `padding: 0 5px` on `.bq-hero__testimonial` | sections/bq-hero.liquid:280 | **MATCH mobile**, slight diff desktop (source 10px each side, ours 5px each side) |

### Slick dots (carousel pagination)

| Property | Source value | Source cite | Our value | Our cite | Status |
|---|---|---|---|---|---|
| dot button width × height | `10px × 10px` | external-01-slick.css:1 (`.slick-dots li button { … width:10px; height:10px; }`) | `10px × 10px` | sections/bq-hero.liquid:304 | **MATCH** |
| dot border-radius | `100%` | external-01-slick.css:1 | `border-radius: 50%` | sections/bq-hero.liquid:304 | **MATCH** |
| dot inactive bg | `#ff7e97` | external-01-slick.css:1 (`.slick-dots li button { … background:#ff7e97; }`) | `var(--bq-accent)` (`#FF7E97`) | sections/bq-hero.liquid:305 | **MATCH** |
| dot inactive opacity | `0.35` | external-01-slick.css:1 | `opacity: 0.35` | sections/bq-hero.liquid:305 | **MATCH** |
| dot active bg | `#000` | external-01-slick.css:1 (`.slick-dots li.slick-active button { background:#000 }`) | `background: #000` | sections/bq-hero.liquid:309 | **MATCH** |
| dot active opacity | `1` | external-01-slick.css:1 | `opacity: 1` | sections/bq-hero.liquid:309 | **MATCH** |
| dot active transform | `scale(1.2)` | external-01-slick.css:1 | `transform: scale(1.2)` | sections/bq-hero.liquid:309 | **MATCH** |
| `:before` font-size override | `40px !important` color `#ff7e97` (`.slider-main-part .slick-dots li button:before`) | external-00-base.css:5598–5599 | N/A (no `:before`; we don't use slick) | sections/bq-hero.liquid:303–309 | **DIFF in mechanism** — source's pseudo-element bullet is what's actually visible (slick hides the button via `font-size:0`); the underlying `width:10px` button is the click target. Visually source dots are larger than 10px because the `:before` content character at 40px overflows. Ours has true 10px circles, no pseudo-element. |
| dots container bottom (desktop) | `-30px` | external-00-base.css:11570 (`.home--reivew .slick-dots`) | NOT applied (using `margin-top: 16px` instead) | sections/bq-hero.liquid:302 | **DIFF in mechanism**; visual gap likely similar |
| dots container bottom (mobile ≤600) | `-10px` | external-00-base.css:11587 | NOT applied | sections/bq-hero.liquid:302 | **DIFF in mechanism** |
| `.slick-dotted.slick-slider` margin-bottom | `30px` | external-01-slick.css:1 | NOT applied | (no rule) | **DIFF** — source carousel reserves 30px below for dots; ours uses `margin-top: 16px` above dots |

## 3. JS behavior

### Carousel (testimonials)

**Source library:** Slick Carousel (jQuery plugin). Confirmed by class signature on the carousel root (`.slick-initialized.slick-slider.slick-dotted` at rendered.html:4904) and by the explicit init call below.

**Source init config (verbatim, rendered.html:5434–5468):**

```js
$('.custom-slider-AMmQxKzluZkNYMVFoN__custom_slider_NH9DTB').slick({
  dots: true,
  arrows: false,

  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,

  adaptiveHeight: true,
  speed: 300,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
       slidesToShow: 1,
        slidesToScroll: 1,

        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        centerMode: false,
          infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
```

Notable explicit values:
- `infinite: true` — slick clones first/last slides for seamless wrap. Cloned slides visible at rendered.html:4911 (index -1) and rendered.html:5187, 5233, 5279, 5325, 5371 (indices 5–9).
- `arrows: false`
- `adaptiveHeight: true` — track height resizes to current slide's content height.
- `speed: 300` — transition duration in ms.
- **NO `autoplay` key set**, **NO `autoplaySpeed` key set**. Slick defaults: `autoplay: false`, `autoplaySpeed: 3000`. Hero carousel is NOT autoplaying in source.

**Our library:** None — vanilla JS using CSS scroll-snap + IntersectionObserver.

**Our init config (sections/bq-hero.liquid:359–392, abridged):**

```js
(function () {
  function init(root) {
    var track = root.querySelector('.bq-hero__testimonials-track');
    var slides = root.querySelectorAll('.bq-hero__testimonial');
    var dots = root.querySelectorAll('.bq-hero__dot');
    if (!track || !slides.length || !dots.length) return;

    function setActive(idx) {
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === idx);
        d.setAttribute('aria-selected', i === idx ? 'true' : 'false'); });
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        var target = slides[i];
        if (!target) return;
        track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: 'smooth' });
      });
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          var idx = Array.prototype.indexOf.call(slides, entry.target);
          if (idx >= 0) setActive(idx);
        }
      });
    }, { root: track, threshold: [0.55, 0.75] });

    slides.forEach(function (s) { io.observe(s); });
  }
  document.querySelectorAll('[data-bq-hero]').forEach(init);
})();
```

CSS-side: `scroll-snap-type: x mandatory` + `scroll-behavior: smooth` (sections/bq-hero.liquid:271–278).

### Behavioral diffs (carousel)

| Behavior | Source | Ours | Status |
|---|---|---|---|
| autoplay | `false` (default; key not set in init) | none | **MATCH** |
| autoplay-speed | irrelevant (autoplay off) | irrelevant | **MATCH** |
| infinite loop | `true` — slick generates cloned slides; swiping past last seamlessly returns to slide 0 | `false` — scrolling stops at last slide; clicking last dot then any other dot works, but no swipe-past-end wrap | **DIFF** (blocking — addresses known issue (a)) |
| transition speed | `300ms` (slick `speed`) | `scroll-behavior: smooth` — browser-controlled, typically ~300–500ms but not pinned | **DIFF (minor)** — close, not exact |
| dots on/off | `true` | true (5 dots rendered) | **MATCH** |
| arrows on/off | `false` | none rendered | **MATCH** |
| slidesToShow | `1` (all breakpoints) | `1` (grid-auto-columns: 100%) | **MATCH** |
| slidesToScroll | `1` | `1` (one slide per scroll-snap step) | **MATCH** |
| adaptiveHeight | `true` — track height matches active slide | `false` — track height = tallest slide (CSS grid layout) | **DIFF (minor)** — visual whitespace below shorter slides |
| swipe / touch | slick's pan-y touch handling | native browser horizontal scroll (touchpad/swipe both work) | **DIFF in mechanism**, MATCH visually |
| keyboard / a11y | slick adds `tabindex`/`role="tabpanel"`/`aria-describedby` per slide (visible at rendered.html:4957, 5003, 5049, 5095, 5141) and dot buttons get `role="tab"` + `aria-controls` | dots have `role="tab"` + `aria-selected`; slides themselves have no slick-style aria attrs | **DIFF (minor)** — narrower a11y coverage |
| autoplay pause-on-hover | irrelevant (no autoplay) | irrelevant | **MATCH** |

### Other JS on the section

**Source:**
- 365-day text replace script: top of rendered.html (lines 19–78) — replaces "120 day(s)" → "365 day(s)" in DOM via MutationObserver. Not section-specific; runs site-wide.
- No scroll-trigger / GSAP / AOS init found targeting this hero specifically. (AOS data-attrs not present on hero subtree per scan.)
- Lazy-load: source `<img>` at rendered.html:4021 has `loading="eager"`; review avatars are also eager-rendered inside slick (no `loading` attribute, `srcset` present).

**Ours:**
- Just the carousel IIFE in sections/bq-hero.liquid:357–393. No other JS.
- Hero `<img>` tags: `loading="eager"` desktop + mobile (sections/bq-hero.liquid:77, 80). Avatar `<img>` `loading="lazy"` (sections/bq-hero.liquid:149).

**Diff:** source has the global "120-day → 365-day" text-rewrite observer; ours doesn't (and doesn't need it, since our copy is original Italian). **MATCH** in section-scope behavior.

## 4. Font-family

### Source @font-face declarations

```
@font-face { font-family: 'circular_stdmedium'; src: …circular-std-medium-500-webfont.woff2; font-weight: normal; font-style: normal; }
                                                                  rendered.html:85–91
@font-face { font-family: 'circular_stdbook';  src: …circular-std-book.woff2;             font-weight: normal; font-style: normal; }
                                                                  rendered.html:92–98
@font-face { font-family: Inter; weight: 400/700/i4/i7; src: //botaniqueparis.com/cdn/fonts/inter/inter_n4...woff2 etc. }
                                                                  rendered.html (multiple, in inline <style>)
@font-face { font-family: 'GTStandard-M'; weights 450/500/600;    } (rendered.html, unrelated to hero)
@font-face { font-family: 'Kanit-Klaviyo-Hosted';                 } (rendered.html, popups only)
```

Override that takes effect:
```css
body:not(:has(.gps)) h1, h2, h3, h4, h5, h6 { font-family: 'circular_stdmedium' !important; }
                                                                  rendered.html:106–110
.body-w-pl3 h1, …  { font-family: 'circular_stdbook' !important; }
                                                                  rendered.html:111–115
```

**The hero is not under a `.body-w-pl3` body class** (homepage), so the `circular_stdmedium !important` rule wins for `<h1>`. Inter is loaded but not used for headings.

### Source — computed font-family for hero text elements

| Element | Source font-family (effective) | Source cite |
|---|---|---|
| Headline `<h1>` | `'circular_stdmedium'` | rendered.html:109 (override `!important`) |
| Headline `<strong>` (accent) | `'circular_stdmedium'` (inherits from h1; no `<strong>` font override) | rendered.html:109 |
| Eyebrow `<p><strong>` | NOT FOUND specific override; inherits theme paragraph font-family. Theme's `--font-paragraph--family` resolves at runtime (cannot determine without runtime computed-style). The Circular override applies to `h1-h6` only — `<p>` does NOT receive it. | rendered.html:106–110 (override scope is h1–h6) |
| Subhead `<p>` | Same as eyebrow — theme paragraph font (NOT Circular) | — |
| Bullets `<p>` | Same — theme paragraph font | — |
| CTA `<a>` (button) | NOT FOUND. Theme button font (`--button-font-family-primary`) | external-00-base.css (search "button-font-family-primary" returns theme defaults) |
| Testimonial `<p>` (quote) | Same — theme paragraph font, italic via `.home--reivew .review-content-yea { font-style: italic }` | external-00-base.css:11530 |
| Testimonial `<h4>` (name) | `'circular_stdmedium' !important` (h1–h6 override applies to h4) | rendered.html:109 |

**So the source page actually uses TWO different font families:** Circular Std Medium for headings (`h1–h6`) and the theme paragraph font (likely Inter, since it's the only other web font loaded for theme use — but cannot confirm without runtime inspection) for everything else. The Circular Std font is not on Google Fonts and is paid Linotype.

### Ours — computed font-family

| Element | Our font-family | Our cite |
|---|---|---|
| All hero text (everything inside `.bq-hero`) | `var(--bq-font-sans)` → `'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif` | sections/bq-hero.liquid:208 (`font-family: var(--bq-font-sans)` on `.bq-hero`); assets/bq-tokens.css:17 (token def) |

Inter is loaded via Google Fonts at assets/bq-tokens.css:1 (`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap')`).

### Diffs

- **Headline font:** source `circular_stdmedium` (paid; visual weight ≈ 500), ours `Inter` (free, set to weight 500). Visually similar but not identical — Inter at 500 has slightly different proportions and a heavier overall feel than Circular Medium.
- **Body / paragraph font:** source uses theme paragraph font (likely Inter), ours uses Inter. **Likely MATCH** but cannot confirm source's computed value without runtime inspection.
- **Inter loading method:** source loads via Shopify's `font_url` filter (woff2 hosted on `botaniqueparis.com/cdn/fonts/inter/`); ours imports from Google Fonts CDN.
- **Heading font-weight is rendered differently:** source's `circular_stdmedium` `@font-face` declares `font-weight: normal` (rendered.html:90), so `<h1>` element with no explicit weight gets `font-weight: normal` (400) which the browser maps to the registered face — the Medium-weight WOFF2. Visual weight is 500 by face design. Ours sets `font-weight: 500` explicitly on `.bq-hero__headline-line` (sections/bq-hero.liquid:234), telling the browser to fetch Inter's 500 face. End result: source visual ≈ Circular Medium (500); ours visual = Inter Medium (500). Different fonts at nominally same weight feel different.

## 5. Remaining differences (consolidated)

### Blocking (visible mismatch a user would notice)

1. **Carousel: no `infinite` loop.** Source uses slick `infinite: true` with cloned slides; swiping past the last slide returns seamlessly to slide 0. Ours stops at the last slide.
   - Proposed change: `sections/bq-hero.liquid` JS block — implement clone-and-jump infinite scroll, OR drop CSS scroll-snap and use a transform-driven custom carousel that wraps. Lower-effort alternative: clone first/last slides into the track and use scrollend listeners to jumpscroll silently when crossing into a clone. Updates needed at sections/bq-hero.liquid:357–392 (JS) + sections/bq-hero.liquid:142–179 (Liquid loop to emit clones).
   - Addresses known issue (a).

2. **Carousel: no autoplay** — source default `autoplay:false` matches ours. **No change needed.** (Known issue (a) wording suggests user expected autoplay; the source does not autoplay.)

3. **Headline line-height too loose.** Source observed ≈1.05; ours `1.1`.
   - Proposed change: `sections/bq-hero.liquid:231` — `line-height: 1.1` → `line-height: 1.05`.
   - Addresses known issue (c).

4. **Headline font-size mobile is too small.** Source: `32px !important` from 391px–767px, then `28px !important` ≤390px. Ours: `28px` from 0–767px, then `26px` ≤390px.
   - Proposed change: `sections/bq-hero.liquid:230` — `font-size: 28px` → `font-size: 32px` (mobile base); `sections/bq-hero.liquid:347` — `font-size: 26px` → `font-size: 28px` (≤390px).

5. **Section padding (mobile).** Source bottom padding is 20px; ours is 40px. Source top padding is 20px; ours is 30px.
   - Proposed change: `sections/bq-hero.liquid:220` — `padding: 30px 16px 40px` → `padding: 20px 16px 20px`.
   - Partially addresses known issue (d) — though (d) refers to *desktop* padding being heavy. **Desktop is already 80px (matches source);** if user sees it as too heavy, the visual heaviness comes from the absence of background-image bleed beyond the right column (whitespace under image makes section feel taller). See item 7.

6. **Section padding (desktop).** Source 80px top, 80px bottom. Ours 80px both. **MATCH at desktop.** Known issue (d) may actually be a perceived issue from the layout/image, not numeric. Recommend inspecting ours in browser to confirm computed values match before adjusting.

7. **Right-column image: padding/margin around it on desktop.** Source has the image as a full-bleed `<img>` (`100vw` `sizes`), bleeding past the 1300px content rail to the section's right edge. Ours places the image inside a grid track that stops at the section's right edge — **this should match if the section itself has no max-width**. Need to verify: does our `.bq-hero` section (or any wrapping element from Horizon's section group rendering) have a `max-width` constraint that's introducing the visible gap user reported?
   - Proposed verification: inspect the DOM at runtime for any wrapping `.shopify-section` or section-group `max-width` on the dev preview. Then either remove max-width on the wrapper, or set `.bq-hero__media { margin-right: calc(50% - 50vw) }` to bleed past container.
   - Addresses known issue (b).

8. **Bullet row spacing.** Source: 16px between rows (`.banner-list { margin-bottom: 16px }`). Ours: 8px gap.
   - Proposed change: `sections/bq-hero.liquid:240` — `gap: 8px` → `gap: 16px`.

9. **Eyebrow margin-bottom.** Source: 11px (inline). Ours: 16px.
   - Proposed change: `sections/bq-hero.liquid:225` — `margin: 0 0 16px` → `margin: 0 0 11px`.

10. **Subhead margin-bottom.** Source: 21px (inline). Ours: 16px.
    - Proposed change: `sections/bq-hero.liquid:238` — `margin: 0 0 16px` → `margin: 0 0 21px`.

11. **Trust row layout on mobile.** Source: row stays inline-row on mobile per `flex-wrap: initial`, items wrap with `margin-bottom: 10px`. Ours: forces column layout on mobile.
    - Proposed change: `sections/bq-hero.liquid:265` — keep `flex-direction: row` mobile but allow `flex-wrap: wrap` and add `row-gap: 10px`.

12. **Trust row gap (desktop).** Source: 12px (inline `--gap`). Ours: 16px.
    - Proposed change: `sections/bq-hero.liquid:338` — `gap: 16px` → `gap: 12px`.

13. **Hero font-family.** Source headline uses `'circular_stdmedium'` (Circular Std Medium 500 — paid Linotype, not redistributable). Ours uses Inter 500. No exact free equivalent on Google Fonts.
    - Proposed change: keep Inter (already the closest practical free option). Document as accepted compromise. No code change.

14. **Slick carousel `:before` pseudo-bullet rendering.** Source dot visual size > 10px because the `:before` content character at 40px font-size overflows the 10px button. Ours has true 10px dots (no pseudo-element).
    - Proposed change: `sections/bq-hero.liquid:303–309` — bump dot visual size: `width: 12px; height: 12px` (or use `transform: scale(1.4)` to mimic the bullet overflow). Hover/active scale stays.

### Minor (technically different but visually negligible)

- Headline mechanism (Circular Medium "normal" face vs Inter explicit weight 500). Same numeric weight, slightly different visual — covered as item 13.
- `.home--reivew` outer 10px vertical padding around carousel container (source) vs no padding (ours) — minor whitespace shift.
- Slick slide horizontal margin: 10px each side desktop (source) vs 5px each side (ours).
- `adaptiveHeight: true` (source) vs fixed-tallest (ours) — visual whitespace below shorter slides; only noticeable if quote lengths vary significantly. Our 5 quotes do vary (Sofia R. is ~15 words; Giulia M. is ~30) so this is observable but not jarring.
- Slick a11y attributes per slide (`role="tabpanel"`, `aria-describedby`, `tabindex`) — narrower in our impl.
- Carousel `speed: 300ms` (source explicit) vs `scroll-behavior: smooth` (browser-implementation-dependent, typically ~300–500ms).
- CTA letter-spacing 0.04em in ours vs not-set in source — minor.

### Cannot determine (source value not found)

- Eyebrow / subhead / bullet `<p>` font-size on mobile (no explicit rule for hero `<p>` mobile in source CSS; inherits theme paragraph default). Cannot compare without runtime inspection of the source page.
- Subhead `<p>` color, line-height, font-weight (no explicit rule).
- CTA font-weight, letter-spacing, text-transform (theme button defaults).
- Theme paragraph font-family at runtime (likely Inter, but unverified without runtime computed-style read).
- `.new_banner_contant h1` line-height numeric (no explicit rule; inherits theme `--font-h1--line-height`). User reports observed value ≈1.05.

---

Path: `/Users/stefano/botanique-clone-build/botanique-horizon/docs/section-1-diff.md`
