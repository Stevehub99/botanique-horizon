# Section 1 — right-side asset inventory

Generated: 2026-04-25.

## a) Every media element in the hero subtree (rendered.html:4012–5538)

| Line | Type | File | Class chain (immediate parent → element) | Role |
|---|---|---|---|---|
| 4021 | `<img>` | `Group_48095889_1.png` (full-width, `sizes="(min-width:750px) 100vw, 100vw"`) | `.background-image-container > <img>` (inside `.custom-section-background`) | **Decorative full-bleed background.** The section-background image; not the visible right-side asset. |
| 4242 | `<img>` | `Group_48095925.png` (`width:28px`) | `.icon-block` inside `.banner-list` | Pink-circle bullet icon (benefits row 1) |
| 4341 | `<img>` | `Group_48095925.png` (`width:28px`) | `.icon-block` inside `.banner-list` | Pink-circle bullet icon (benefits row 2) |
| 4440 | `<img>` | `Group_48095925.png` (`width:28px`) | `.icon-block` inside `.banner-list` | Pink-circle bullet icon (benefits row 3) |
| 4643 | `<img>` | `svgviewer-png-output_1.png` (`width:22px`) | `.icon-block` inside `.banner-shipping` | Green-check icon (trust 1) |
| 4740 | `<img>` | `svgviewer-png-output_1.png` (`width:22px`) | `.icon-block` inside `.banner-shipping` | Green-check icon (trust 2) |
| 4915 | `<img>` | `RE_Men_Kenji.png` (200×258) | `.review-avatar` inside cloned testimonial slide (data-slick-index="-1") | Slick clone — testimonial avatar |
| 4961 | `<img>` | `Anje.png` (200×295) | `.review-avatar` inside slide index 0 | Real testimonial 1 avatar |
| 5007 | `<img>` | `1_1.png` (200×280) | `.review-avatar` inside slide index 1 | Real testimonial 2 avatar |
| 5053 | `<img>` | `AsianWoman.png` (200×268) | `.review-avatar` inside slide index 2 | Real testimonial 3 avatar |
| 5099 | `<img>` | `AfricanWomen.jpg` (200×270) | `.review-avatar` inside slide index 3 | Real testimonial 4 avatar |
| 5145 | `<img>` | `RE_Men_Kenji.png` (200×258) | `.review-avatar` inside slide index 4 | Real testimonial 5 avatar |
| 5191 | `<img>` | `Anje.png` | `.review-avatar` inside cloned slide index 5 | Slick clone of slide 0 |
| 5237 | `<img>` | `1_1.png` | `.review-avatar` inside cloned slide index 6 | Slick clone |
| 5283 | `<img>` | `AsianWoman.png` | `.review-avatar` inside cloned slide index 7 | Slick clone |
| 5329 | `<img>` | `AfricanWomen.jpg` | `.review-avatar` inside cloned slide index 8 | Slick clone |
| 5375 | `<img>` | `RE_Men_Kenji.png` | `.review-avatar` inside cloned slide index 9 | Slick clone |
| **5522** | **`<video>`** | **`b89817b4017f4adfa3b1c94c3f527189.HD-1080p-2.5Mbps-81750117.mp4`** | **`.custom-autoplay-video > <video>`** | **VISIBLE right-side asset.** 1:1 square autoplay loop muted video. |
| 5522 | `<img>` (inside the `<video>`) | `b89817b4017f4adfa3b1c94c3f527189.thumbnail.0000000000_300x.jpg` | inside `<video>` as fallback | Poster/fallback for `<video>` |

**Found:** 19 media elements. 18 are images; 1 is the `<video>`.

## b) CSS rules cross-referenced

### `.custom-autoplay-video` container (the wrapper of the visible video)

Searched `source/css/external-00-base.css` for every selector containing `custom-autoplay-video`:

- **`source/css/external-00-base.css:11592`** — `.new-banner-home .custom-autoplay-video { overflow: visible !important; }` — **inside `@media screen and (max-width: 600px)` opened at line 11573**.
- **`source/css/external-00-base.css:11593`** — `.new-banner-home .custom-autoplay-video video { border-radius: 20px; }` — **inside the same `@media screen and (max-width: 600px)`**.

NOT FOUND: any desktop-scope CSS rule for `.custom-autoplay-video`. **All desktop styling on the wrapper comes from inline `style="…"` on the element itself** (`source/rendered.html:5513–5521`), via Horizon's `--*-custom-property` mechanism (consumed by `size-style`/`spacing-style`/`border-style` snippets). Source theme converts those inline custom properties into actual rules at runtime.

### `.custom-section-background` and `.background-image-container`

Searched the same file:

- `source/css/external-00-base.css` — NOT FOUND any rule on `.custom-section-background` (the wrapper of the bg PNG).
- NOT FOUND any rule on `.background-image-container`.

These wrappers carry only inline styles and rely on Horizon's section-background absolute-positioning convention (Horizon equivalent at our `assets/base.css:471–476`). Confirms the bg PNG is decorative and structurally distinct from the visible right-side asset.

### `.new-banner-home` container (the section root, parent of both background and content)

- `source/css/external-00-base.css:8359–8364` — `.new-banner-home { background-position: center !important; background-size: cover !important; background-repeat: no-repeat !important; }`. (Only sets background-image positioning; no width.)
- `source/css/external-00-base.css:8371–8373` — `.new-banner-home .custom-section-content { max-width: 1300px; }`. The 1300px content rail.

## c) Identification of the VISIBLE right-side asset

The visible right-side asset is the `<video>` at **`source/rendered.html:5522`**. Identification process:

1. **Discounted candidates:**
   - The bg PNG at `rendered.html:4021` — sits in `.background-image-container` inside `.custom-section-background`, a wrapper distinct from `.custom-section-content`. By Horizon convention, `.section-background` / `.custom-section-background` is an absolute-positioned full-bleed layer behind the content (`assets/base.css:471–476` Horizon analog). Not the visible right column.
   - All other `<img>` elements (lines 4242–5375) are sub-content (icons or testimonial avatars), confirmed by their parent classes (`.icon-block`, `.review-avatar`).

2. **Confirmed candidate:** The `<video>` at `rendered.html:5522` lives inside `.custom-autoplay-video` (`rendered.html:5513`). Walking up the DOM: `.custom-autoplay-video` is a **direct child of `.section-content-wrapper`** (`rendered.html:4033`) — i.e., it's a **sibling of `.new_banner_contant`** (the text content column), making the row layout effectively **two siblings: text column LEFT + video column RIGHT**.

3. **`<video>` attributes (verbatim, `rendered.html:5522`):**
   - `playsinline=""`
   - `autoplay=""`
   - `loop="loop"`
   - `muted="muted"`
   - `width="100%"`
   - `preload="metadata"`
   - `poster="//botaniqueparis.com/cdn/shop/files/preview_images/b89817b4017f4adfa3b1c94c3f527189.thumbnail.0000000000_300x.jpg?v=1776324732"`

4. **`<source>` (verbatim, `rendered.html:5522`):**
   - `src="//botaniqueparis.com/cdn/shop/videos/c/vp/b89817b4017f4adfa3b1c94c3f527189/b89817b4017f4adfa3b1c94c3f527189.HD-1080p-2.5Mbps-81750117.mp4?v=0"`
   - `type="video/mp4"`

5. **Inline `<img>` fallback inside `<video>` (verbatim, `rendered.html:5522`):**
   - `src="//botaniqueparis.com/cdn/shop/files/preview_images/b89817b4017f4adfa3b1c94c3f527189.thumbnail.0000000000_300x.jpg?v=1776324732"`

6. **Wrapper `.custom-autoplay-video` inline style (verbatim, `rendered.html:5513–5521`):**
   - `--padding-block-start: 0px; --padding-block-end: 0px; --padding-inline-start: 0px; --padding-inline-end: 0px;`
   - `--border-width: 1px; --border-style: none; --border-color: rgb(var(--color-border-rgb) / 1.0);`
   - `--border-radius: 20px;`
   - `overflow: hidden;`
   - `--size-style-width: 100%;`
   - `--size-style-width-mobile: 100%;`
   - `--size-style-aspect-ratio: 1.0;`

   Horizon's source theme converts these custom properties via its `size-style` / `spacing-style` / `border-style` snippets into computed: `width: 100%; aspect-ratio: 1 / 1; border-radius: 20px; overflow: hidden; padding: 0`.

## d) DOM subtree + CSS chain (the deliverable in this section)

### Source DOM subtree, rendered.html:4012–5524

```
<div class="section new-banner-home section--page-width color-scheme-2"   rendered.html:4012
     style="…">
  <div class="custom-section-background">                                  rendered.html:4017
    <div class="background-image-container">                               rendered.html:4018
      <img src="…Group_48095889_1.png…"                                    rendered.html:4021
           sizes="(min-width: 750px) 100vw, 100vw"
           loading="eager">    ← decorative section background, full bleed
    </div>
  </div>
  <div class="border-style custom-section-content">                        rendered.html:4027
    <div class="spacing-style layout-panel-flex layout-panel-flex--row     rendered.html:4033
                section-content-wrapper mobile-column"
         style="--flex-direction: row; --gap: max(24px, calc(var(--gap-scale,1.0) * 70px));
                --horizontal-alignment: center; --vertical-alignment: center;
                --padding-block-start: max(20px, calc(var(--spacing-scale)*80px));
                --padding-block-end:   max(20px, calc(var(--spacing-scale)*80px));">
      <div class="group-block … new_banner_contant"                        rendered.html:4054
           style="--size-style-width:100%; --size-style-width-mobile:100%; …">
        … (text content + 5-slide testimonial carousel) …
      </div>
      <div class="spacing-style size-style border-style                    rendered.html:5513
                  custom-autoplay-video"
           style="--padding-block-start:0px; --padding-block-end:0px;
                  --padding-inline-start:0px; --padding-inline-end:0px;
                  --border-width:1px; --border-style:none;
                  --border-color: rgb(var(--color-border-rgb)/1.0);
                  --border-radius:20px; overflow:hidden;
                  --size-style-width:100%; --size-style-width-mobile:100%;
                  --size-style-aspect-ratio:1.0;">
        <video playsinline="" autoplay="" loop="loop" muted="muted"        rendered.html:5522
               width="100%" preload="metadata"
               poster="//…thumbnail…300x.jpg?v=1776324732">
          <source src="//…HD-1080p-2.5Mbps-81750117.mp4?v=0"
                  type="video/mp4">
          <img src="//…thumbnail…300x.jpg?v=1776324732">
        </video>
      </div>
    </div>
  </div>
</div>
```

### CSS rules per element in the chain (with citations)

| Element | Rule | Cite | @media context |
|---|---|---|---|
| `.section.new-banner-home` | `background-position: center !important; background-size: cover !important; background-repeat: no-repeat !important;` | source/css/external-00-base.css:8360–8363 | TOP |
| `.section.new-banner-home .custom-section-content` | `max-width: 1300px;` | source/css/external-00-base.css:8372 | TOP |
| `.section-content-wrapper` | inline only — `--gap: max(24px, calc(var(--gap-scale,1.0)*70px))`, padding-block max(20px, scale*80px) both ends, horizontal-alignment:center | rendered.html:4042, 4047 | inline |
| `.new_banner_contant` (left column) | base/desktop rules: see source/css/external-00-base.css:8321–8341 (h5/h1/h1 strong/a/p) | external-00-base.css:8321–8341 | TOP |
| `.new_banner_contant` mobile | order:2; padding-top:20px; h1 margin-bottom:15px; font-size:32px (top); 28px @ ≤390 | external-00-base.css:9386, 9500–9504, 9720 | @media (max-width:991px), (max-width:767px), (max-width:390px) |
| `.custom-autoplay-video` (right column / video wrapper) | desktop: NOT FOUND in CSS — all values from inline style at rendered.html:5513–5521 (computed: width:100%, aspect-ratio:1/1, border-radius:20px, overflow:hidden, padding:0) | rendered.html:5513–5521 | inline |
| `.new-banner-home .custom-autoplay-video` mobile override | `overflow: visible !important;` | source/css/external-00-base.css:11592 | @media screen and (max-width:600px) opened at external-00-base.css:11573 |
| `.new-banner-home .custom-autoplay-video video` mobile | `border-radius: 20px;` | source/css/external-00-base.css:11593 | @media screen and (max-width:600px) |
| `<video>` itself | inline attribute `width="100%"`; no separate CSS rule | rendered.html:5522 | inline |

### Computed visual specs (the exact values to mirror)

| Property | Value | Source |
|---|---|---|
| Wrapper width (desktop) | `100%` | rendered.html:5519 (`--size-style-width: 100%`) |
| Wrapper width (mobile) | `100%` | rendered.html:5519 (`--size-style-width-mobile: 100%`) |
| Wrapper aspect-ratio | `1 / 1` (square) | rendered.html:5520 (`--size-style-aspect-ratio: 1.0`) |
| Wrapper border-radius | `20px` | rendered.html:5517 (`--border-radius: 20px`) |
| Wrapper border | `none` (border-style:none, even though border-width:1px is declared) | rendered.html:5515–5516 |
| Wrapper padding | `0` (all four block/inline sides) | rendered.html:5514 |
| Wrapper overflow (desktop) | `hidden` | rendered.html:5517 |
| Wrapper overflow (mobile ≤600px) | `visible !important` | source/css/external-00-base.css:11592 |
| `<video>` width attribute | `100%` | rendered.html:5522 |
| `<video>` autoplay | yes | rendered.html:5522 |
| `<video>` loop | yes (`loop="loop"`) | rendered.html:5522 |
| `<video>` muted | yes (`muted="muted"`) | rendered.html:5522 |
| `<video>` playsinline | yes | rendered.html:5522 |
| `<video>` preload | `metadata` | rendered.html:5522 |
| `<video>` poster | thumbnail PNG (300x) from Shopify CDN | rendered.html:5522 |
| `<video>` border-radius (mobile ≤600px) | `20px` (applies on the `<video>` element itself in addition to the wrapper) | source/css/external-00-base.css:11593 |
| Source MP4 | `HD-1080p-2.5Mbps-81750117.mp4` | rendered.html:5522 (1080p, 2.5Mbps; ratio is 1:1 per `--size-style-aspect-ratio:1.0`) |

### Position in column

- **Sibling of `.new_banner_contant`** inside `.section-content-wrapper` (a flex row container, with `--gap: 70px` desktop and `mobile-column` class flipping to column on small screens).
- The two siblings split the 1300px content rail (each ~615px wide on desktop with 70px gap).
- The 1:1 video at desktop is therefore approximately `615px × 615px` square, anchored to the right within the centered 1300px rail (with whitespace around it on screens wider than 1300px). NOT a viewport-edge bleed.

---

# Step 2 — structural clone applied to sections/bq-hero.liquid

Applied next.
