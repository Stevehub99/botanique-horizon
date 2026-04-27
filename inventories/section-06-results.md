# Section 6 — Results timeline — SOURCE INVENTORY

Generated: 2026-04-27. Triangulated from `source/rendered.html`, `source/css/external-00-base.css`, live-page Puppeteer probe (1440×900 desktop, 390×844 @2× mobile), and `source/crops/section-07-timeline-{desktop,mobile}.png`.

PROJECT.md slug: Section 6 (Results timeline). Capture-pipeline index: 07. Family: **NEW — `echanced-scents-main` (sic)**. Singleton (no other instances of this section type in source DOM — confirmed by `grep -c timeline_enhanced` → 1).

---

## 1. Section locator

- **Line range in `source/rendered.html`:** **5836–6620**.
- **Top-level container:** `<div id="shopify-section-template--19760795549861__timeline_enhanced_C7Fb3h" class="shopify-section echanced-scents-main">` (`rendered.html:5836`).
- **Note on naming:** Shopify CDN section type `timeline_enhanced`; modifier class `echanced-scents-main` (typo for "enhanced" — preserved in source). The section ships its CSS *inline* (rendered.html:6051–6568) and its JS *inline* (rendered.html:6574–6619) — only minor supplementary rules live in `external-00-base.css`.
- **Body class:** `body-index` (probe confirms). Therefore body-gated rules referencing `.body-pl-new-index` do NOT apply here.
- **Anchor classes / data-attributes:**
  - Section root: `shopify-section`, `echanced-scents-main`.
  - Inner container (`rendered.html:5838`): `enhanced-timeline`, `page-width`.
  - Heading: `<h2>Results You'll See Using <br><strong>Revitaleyes Daily</strong></h2>` (`rendered.html:5839`).
  - Empty `<h3></h3>` (`rendered.html:5840`) — collapses to height 0; CSS rule at b00:6130 sets pink+700 styling that never paints anything.
  - Timeline container: `<div class="timeline">` (`rendered.html:5842`).
  - Six `.timeline-step` children, each with class chain `timeline-step step_{ID} {state}`. Step IDs in source HTML: `step_7HQTfE`, `step_8qmQcE`, `step_BDXDei`, `step_aRHgyi`, `step_7kzHP7`, `step_JW8VBW`. **Each step initially has `exiting` class** (server-rendered; JS replaces with `active` on scroll-in).
  - Per-step DOM: `.card.left-card[+modifiers]` → `.number svg(72×72)` → `.card.right-card[+modifiers]`. Position alternation is **hardcoded in HTML** (cards swap content per step; class modifiers `right-text-box` move with the pink-bordered card).
  - CTA at end: `<button class="custo-button"><a class="custom-btn">…</a><ul class="shipping-list">…</ul></button>` (`rendered.html:6033–6048`).
  - **No AOS reveals** (`data-aos` absent). Section uses its own scroll-handler-driven mechanism.

## 2. HTML tree

Verbatim subtree from `source/rendered.html:5836–6049`. English text preserved; SVGs collapsed for readability.

```
<div id="shopify-section-template--19760795549861__timeline_enhanced_C7Fb3h"
     class="shopify-section echanced-scents-main">                                  [5836]
  <div class="enhanced-timeline  page-width  ">                                     [5838]
    <h2>Results You’ll See Using <br><strong>Revitaleyes Daily</strong></h2>        [5839]
    <h3></h3>                                                                       [5840]  (EMPTY)
    <div class="timeline">                                                          [5842]
      <!-- STEP 1 (Week 1) — alternation A: left=image+h4, right=text-box -->
      <div class="timeline-step step_7HQTfE exiting">                               [5844]
        <div class="card left-card left-card-item leftcard-grid">                   [5846]
          <img src="…/Frame_08a68e28…&width=400" alt="">                            [5848]
          <h4><strong>Week 1:<br></strong>Instant Puffiness <br>Reduction</h4>      [5851]
        </div>
        <div class="number">
          <svg width=72 height=72>
            <circle cx=36 cy=36 r=35.5 fill=#FF7E97 stroke=#FF7E97/>
            <path d="M50 26L30.75 45.25L22 36.5" stroke=white …/>                   [5860]
          </svg>
        </div>
        <div class="card right-card right-text-box">                                [5866]
          <p><img src="…/f56218f5…&width=200"> Microcurrent drains <strong>fluid buildup, reducing morning puffiness,</strong> by promoting lymphatic drainage and circulation in minutes. Your eyes look less swollen, more open, more awake.</p>
        </div>
      </div>

      <!-- STEP 2 (Week 2) — alternation B: left=text-box, right=h4+image -->
      <div class="timeline-step step_8qmQcE exiting">                               [5875]
        <div class="card left-card right-text-box">
          <p><img src="…/0e790e0b…&width=200"> Fine lines start softening. The <strong>crepey, thin skin under your eyes begins smoothing</strong> out as red light stimulates collagen production deep below the surface.</p>
        </div>
        <div class="number"><svg width=72 height=72>…</svg></div>
        <div class="card right-card ">                                              [5895]
          <h4><strong>Week 2:<br></strong>Texture Improvements</h4>
          <img src="…/Frame_08a68e28…&width=400" alt="">
        </div>
      </div>

      <!-- STEP 3 (Week 4) — alternation A -->
      <div class="timeline-step step_BDXDei exiting">                               [5906]
        <div class="card left-card left-card-item leftcard-grid">
          <img src="…/Frame_08a68e28…&width=400" alt="">
          <h4><strong>Week 4:<br></strong>Visibly Brighter Eyes</h4>
        </div>
        <div class="number"><svg width=72 height=72>…</svg></div>
        <div class="card right-card right-text-box">
          <p><img src="…/2fa82eafcd…&width=200"> Dark circles noticeably lighter. Improved circulation <strong>clears the pooled blood causing shadows, revealing brighter, more even-toned skin.</strong> People start asking if you're using a new product.</p>
        </div>
      </div>

      <!-- STEP 4 (Week 6) — alternation B -->
      <div class="timeline-step step_aRHgyi exiting">                               [5937]
        <div class="card left-card right-text-box">
          <p><img src="…/c2c05b7e1d…&width=200"> Bags visibly reduced massively. The sagging, puffy under-eye area firms and lifts as <strong>collagen rebuilds and muscles tone.</strong> Clinical studies show <strong>85%+ see significant changes</strong> at this point.</p>
        </div>
        <div class="number"><svg width=72 height=72>…</svg></div>
        <div class="card right-card ">
          <h4><strong>Week 6:<br></strong>Dramatic De-Puffing</h4>
          <img src="…/Frame_08a68e28…&width=400" alt="">
        </div>
      </div>

      <!-- STEP 5 (Week 8) — alternation A -->
      <div class="timeline-step step_7kzHP7 exiting">                               [5968]
        <div class="card left-card left-card-item leftcard-grid">
          <img src="…/Frame_08a68e28…&width=400" alt="">
          <h4><strong>Week 8:<br></strong>Smoother Wrinkles + Fine <br>Lines</h4>
        </div>
        <div class="number"><svg width=72 height=72>…</svg></div>
        <div class="card right-card right-text-box">
          <p><img src="…/231c9a79b9…&width=200"> Crow's feet and fine lines measurably diminished. Continued <strong>collagen synthesis thickens skin, making every vessel and wrinkle less visible.</strong> You look rested even after rough nights.</p>
        </div>
      </div>

      <!-- STEP 6 (Month 3) — alternation B -->
      <div class="timeline-step step_JW8VBW exiting">                               [5999]
        <div class="card left-card right-text-box">
          <p><img src="…/c2c05b7e1d…&width=200"> Your eyes look <strong>years younger.</strong> Naturally youthful, healthy, and awake. The hollows are <strong>filled, darkness is cleared, puffiness is gone.</strong> You see the real you in the mirror.</p>
        </div>
        <div class="number"><svg width=72 height=72>…</svg></div>
        <div class="card right-card ">
          <h4><strong>Month 3:<br></strong>Full Transformation</h4>
          <img src="…/Frame_08a68e28…&width=400" alt="">
        </div>
      </div>
    </div>  <!-- /.timeline -->
  </div>    <!-- /.enhanced-timeline -->

  <button class="custo-button">                                                     [6033]
    <a href="/products/revitaleyes" class="custom-btn">
      Rejuvenate Your Under Eyes Today
      <img src="…/Group_48095763_1.png" alt="">                                     [6036]
    </a>
    <ul class="shipping-list">                                                      [6038]
      <li><svg 17×17 white-circle + green-#00AD21-check>…</svg> 365-day Money Back Guarantee</li>
      <li><svg 17×17 …>…</svg> Express Shipping</li>
    </ul>
  </button>
</div>  <!-- /.shopify-section -->
```

Notable shape:

- **Six steps**, each a 3-column grid (left card / number / right card) on desktop. Mobile collapses to a single column with the number positioned absolutely on a left rail.
- **Alternation is HARDCODED in HTML**, not CSS-driven. Per step, the source author manually swaps which side carries the `right-text-box` (pink-bordered description card) and which carries the heading-card (`h4` + product/result image).
  - Steps 1, 3, 5 (alternation A): left = `left-card-item leftcard-grid` (image + h4), right = `right-text-box` (text + small icon).
  - Steps 2, 4, 6 (alternation B): left = `right-text-box`, right = plain `right-card` with `h4` + product image.
- **Number element** is a circle with a check (white) — `<svg width=72 height=72>` containing `<circle r=35.5 fill=#FF7E97>` and a `<path>` check stroke. Same SVG repeated in every step (no actual numbering — visually all six show the same checkmark badge).
- **CTA `<button>` outside `.enhanced-timeline`** but inside `.shopify-section`. Pattern: button > anchor + ul. Trust list (2 items) uses **white-circle + green-#00AD21-check** SVG, distinct from the family-image-text trust row's flat `#2ED215` circle (different green shade and shape — section-specific assets).
- **No AOS attributes.** Reveals are scroll-handler-driven (see §6).

## 3. CSS rules

CSS for this section lives **mostly inline** in `source/rendered.html:6051–6568`, with supplementary rules in `source/css/external-00-base.css` (`b00:N`).

### Inline styles (`rendered.html:N` — `RH:N` shorthand below)

| Selector | Rule (key fields) | Cite | @media |
|---|---|---|---|
| `.custo-button` | `display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 40px auto 0; border: none; background: none; padding: 0; cursor: pointer` | RH:6052 | TOP |
| `.custo-button .custom-btn` | `display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: rgb(0, 0, 0); color: #fff; text-decoration: none; padding: 15px 30px; border-radius: 0; text-transform: uppercase; transition: 0.5s; font-weight: 400; font-size: 20px` | RH:6064 | TOP |
| `.custo-button .custom-btn:hover` | `background: #ff7e97; transition: 0.5s` | RH:6079 | TOP |
| `.custo-button img` | `width: 20px; height: 20px` | RH:6084 | TOP |
| `.shipping-list` | `list-style: none; padding: 10px 0 0; margin: 0; text-align: center` | RH:6089 | TOP |
| `.enhanced-timeline` | `text-align: center; padding: 0 0px; margin: auto` | RH:6096 | TOP |
| **`.timeline::before`** | **`content: ''; position: absolute; top: 0; bottom: 75px; left: 50%; width: 4px; background: #ff7e9759; transform: translateX(-50%); z-index: 0`** | RH:6101 | TOP — **light line (background pink with 0x59 = 35% opacity)** |
| `.card.right-text-box` | `border: solid 3px #FF7E97; background: #FFF0F5` | RH:6112 | TOP |
| `.card.card-right-item.left-card-item h4 img` | `display: flex; width: 30px; margin-left: 0 !important` | RH:6116 | TOP — **mismatched selector (no element has `card-right-item` class in source HTML)** |
| `.card.left-card-item` | `display: flex; align-items: center; gap: 10px` | RH:6121 | TOP |
| `.enhanced-timeline h2` | `margin-bottom: 5px; color: #000` | RH:6126 | TOP — **no font-size; theme h2 default applies (44px live-probe)** |
| `.enhanced-timeline h3` | `font-size: 30px; margin-bottom: 5px; font-weight: 700; color: #FF7E97; margin-top: 0` | RH:6130 | TOP — **applied but `<h3>` is empty, so no visual** |
| `.timeline` | `position: relative; margin: 40px 0 0` | RH:6137 | TOP |
| **`.timeline-step`** | **`display: grid; grid-template-columns: 1fr 40px 1fr; align-items: start; gap: 40px; position: relative; margin-bottom: 90px`** | RH:6143 | TOP |
| `.timeline-step .left-card` | `grid-column: 1` | RH:6152 | TOP |
| `.timeline-step .right-card` | `grid-column: 3` | RH:6156 | TOP |
| `.timeline-step .right-card h4` | `order: 2; margin-left: 10px !important` | RH:6159 | TOP |
| `echanced-scents-main .card.left-card.left-card-item` | `justify-content: flex-end` | RH:6163 | TOP — **selector typo: missing leading `.` on `echanced-scents-main`. Rule is INVALID and never applies.** |
| `.timeline::before, .timeline::after` | `left: 50%; transform: translateX(-50%)` | RH:6166 | TOP |
| **`.timeline-step .number`** | **`grid-column: 2; justify-self: center; align-self: start; color: #fff; font-weight: bold; font-size: 16px; border-radius: 50%; width: 60px; line-height: 40px; text-align: center; z-index: 2; transition: background 0.3s ease-out, opacity 0.6s ease-out, transform 0.6s ease-out; display: block; align-content: center; height: 100%`** | RH:6171 | TOP |
| `.timeline-step:first-child .number` | `align-content: start; margin-top: -8px` | RH:6188 | TOP |
| `.echanced-scents-main .card` | `padding: 15px 20px; border-radius: 10px; max-width: 100%; text-align: left; align-items: flex-start !important; display: flex; align-self: center; justify-content: center` | RH:6195 | TOP |
| `.echanced-scents-main .card img` | `max-width: 40px; display: block` | RH:6204 | TOP |
| `.echanced-scents-main .card p` | `font-size: 20px; font-weight: 400; text-transform: capitalize` | RH:6208 | TOP — **note text-transform: capitalize** |
| `.echanced-scents-main .card p strong` | `color: #FF7E97; font-weight: 600` | RH:6213 | TOP |
| `.timeline-step span` | `font-weight: bold` | RH:6216 | TOP — selector matches no DOM element in source |
| `.echanced-scents-main .card h4` | `margin: 5px 0; color: #000; font-size: 24px; font-weight: 400; text-transform: inherit; letter-spacing: 0; font-family: var(--font-paragraph--family) !important` | RH:6219 | TOP — **!important forces Inter family on h4 (overrides global circular_stdmedium)** |
| `.echanced-scents-main .card h4 strong` | `color: #FF7E97; font-weight: 400; font-size: 18px` | RH:6227 | TOP — pink, 400 weight, 18px (smaller than h4's 24px) |
| `.echanced-scents-main .card-right-item h4, .card-left-item h4` | `display: flex; gap: 10px; align-items: center; flex-wrap: wrap` | RH:6232 | TOP — **first selector is mismatched (no element has `card-right-item`); second selector has no qualifier** |
| `.echanced-scents-main .card-left-item h4 img` | `width: 60px` | RH:6238 | TOP — same selector mismatch caveat |
| `.echanced-scents-main .card.card-right-item.right-text-box img` | `width: 24px; margin: 10px 0` | RH:6241 | TOP — **selector mismatch — never applies** |
| `.echanced-scents-main .card.card-right-item.left-card-item.leftcard-grid` | `display: grid; grid-template-columns: 40% 60%; gap: 30px` | RH:6245 | TOP — **selector mismatch — never applies; left-cards keep `display: flex` from `.echanced-scents-main .card`** |
| `.echanced-scents-main .card.card-right-item.left-card-item.rightcard-item` | `display: grid; grid-template-columns: 60% 40%; gap: 30px; width: 100%` | RH:6250 | TOP — **selector mismatch + no `rightcard-item` class in source HTML** |
| `.enhanced-timeline.container button.custo-button` | `margin-top: 40px` | RH:6256 | TOP — `.container` not on element; rule never applies |
| `.rotate-image-item img` | `transform: rotate(-60deg)` | RH:6259 | TOP — selector matches no element |
| `.timeline-step.step_Tx8KET .card.card-right-item.left-card-item.rightcard-item img` | absolute right-positioned thumbnail | RH:6262 | TOP — **step ID `step_Tx8KET` does NOT exist in source HTML steps; orphan rule** |
| `.echanced-scents-main .card.card-right-item.left-card-item.rightcard-item` | `padding: 15px 0` | RH:6272 | TOP — selector mismatch |
| `.timeline-step.step_Tx8KET .card.card-right-item.left-card-item.rightcard-item h4 img` | `position: static` | RH:6275 | TOP — orphan |
| **`.timeline::after`** (TOP rule, CRITICAL) | **`content: ''; position: absolute; top: 0; left: 50%; width: 4px; background: #ff7e97; transform: translateX(-50%); height: var(--timeline-progress, 0%); transition: height 0.3s ease-out; z-index: 1; height: 95%;`** | RH:6514–6526 | TOP — **`height: 95%` declared LAST clobbers the dynamic var** |
| `.timeline-step .card, .timeline-step .number` | `opacity: 0; transition: opacity 0.6s ease-out, transform 0.6s ease-out` | RH:6528 | TOP |
| `.timeline-step .left-card` | `transform: translateX(-60px)` | RH:6533 | TOP |
| `.timeline-step .right-card` | `transform: translateX(60px)` | RH:6536 | TOP |
| `.timeline-step .number` | `transform: translateY(30px)` | RH:6539 | TOP |
| `.timeline-step.active .left-card, .right-card, .number` | `opacity: 1; transform: translate(0, 0)` | RH:6544 | TOP |
| `.timeline-step.active .left-card` | `transition-delay: 0.1s` | RH:6552 | TOP |
| `.timeline-step.active .number` | `transition-delay: 0.2s` | RH:6553 | TOP |
| `.timeline-step.active .right-card` | `transition-delay: 0.3s` | RH:6554 | TOP |
| `.timeline-step.exiting .left-card` | `transform: translateX(-60px); opacity: 0` | RH:6556 | TOP |
| `.timeline-step.exiting .right-card` | `transform: translateX(60px); opacity: 0` | RH:6560 | TOP |
| `.timeline-step.exiting .number` | `transform: translateY(30px); opacity: 0` | RH:6564 | TOP |

#### Mobile media-query inline (`@media only screen and (max-width: 600px)`, RH:6286–6499)

| Selector | Rule | Cite | Note |
|---|---|---|---|
| `.custo-button .custom-btn` | `font-size: 14px; width: max-content` | RH:6287 | mobile CTA |
| `.timeline-step.active .number svg` | `width: 40px` | RH:6291 | resizes the 72px SVG to 40 on mobile when active |
| `.timeline-step:first-child .number` | `margin-top: -17px` | RH:6294 | first-step number alignment |
| `.step_gPDhFN/4Bfp34/98Anhx/MkMwMg/7ikq9B/Tx8KET .right-card p img / .left-card p img` | per-step image sizing | RH:6298–6334 | **Orphan: ALL six step IDs in these selectors are missing from current HTML steps. None apply.** |
| `.timeline-step` | `display: flex; flex-wrap: wrap; gap: 0` | RH:6336 | grid → flex single-col |
| `.echanced-scents-main .card` | `max-width: 100%` | RH:6341 | |
| `.enhanced-timeline` | `padding: 20px 15px; margin-bottom: -30px` | RH:6345 | |
| `.echanced-scents-main .card.card-right-item.left-card-item.leftcard-grid` | `display: block` | RH:6349 | mismatched selector |
| `.echanced-scents-main .card.card-right-item.left-card-item.leftcard-grid img` | `display: none` | RH:6352 | mismatched |
| `.echanced-scents-main .card.card-right-item.left-card-item.leftcard-grid h4 img, .echanced-scents-main .card.card-right-item.left-card-item.rightcard-item h4 img` | `display: flex` | RH:6355 | mismatched |
| `.echanced-scents-main .card.card-right-item.left-card-item.rightcard-item` | `display: block` | RH:6359 | mismatched |
| `.icons-list-grid .grid.grid--uniform.grid--flush-bottom` | grid 1fr 1fr | RH:6362 | irrelevant |
| `.enhanced-timeline h2` | `font-size: 24px; line-height: 28px` | RH:6366 | mobile h2 |
| `.echanced-scents-main` | `padding: 20px 0` | RH:6370 | mobile section padding override |
| `.timeline::before, .timeline::after` | `left: 13px !important; transform: none !important` | RH:6375 | move both lines to left rail on mobile |
| `.timeline-step .number` | `position: absolute; left: -45px !important; margin-left: -8px; top: 0px; font-size: 16px; display: block; align-content: flex-start` | RH:6382 | numbers float on left rail |
| `.timeline::after` | `height: 100%` | RH:6391 | **OVERRIDDEN by the LATER TOP-rule `height: 95%` at RH:6525 — bug. Probe-confirmed: mobile renders height = 95% of timeline.** |
| `.timeline::before` | `bottom: 0` | RH:6394 | mobile-extends to bottom |
| `.timeline` | `padding-left: 50px; margin: 10px 0 0` | RH:6397 | left-rail layout |
| `.timeline-step.step_4Bfp34, step_MkMwMg, step_Tx8KET` | flex column-reverse | RH:6402 | orphan (step IDs absent) |
| `.timeline-step` | `margin: 0` | RH:6412 | |
| `.enhanced-timeline .card` | `padding: 15px 15px; align-self: start` | RH:6416 | |
| `.echanced-scents-main .card.card-right-item.right-text-box` | `padding: 15px` | RH:6420 | mismatched |
| `.echanced-scents-main .card p` | `font-size: 14px` | RH:6423 | mobile p shrink |
| `.timeline-step.step_Tx8KET …` | image margin reset | RH:6426 | orphan |
| `.timeline::before` | `content: ''; top: 20px` | RH:6430 | shifts background line down 20px on mobile |
| `.enhanced-timeline .card.left-card.left-card-item.leftcard-grid` | `padding-top: 0; padding-left: 0` | RH:6435 | |
| `.enhanced-timeline h3` | `margin-bottom: 30px` | RH:6439 | empty h3 still gets margin |
| `.step_gPDhFN/4Bfp34/MkMwMg/7ikq9B/Tx8KET .left-card > img:first-of-type / .right-card img:last-child` | per-step image hiding | RH:6444–6481 | **All orphan — step IDs missing.** |
| `.echanced-scents-main .card h4 img` | `width: 30px !important; height: 30px !important; object-fit: contain` | RH:6484 | applies |
| `.echanced-scents-main .card h4` | `font-size: 15px; align-items: center; gap: 8px; margin-bottom: 4px !important` | RH:6489 | mobile h4 shrink |
| `.echanced-scents-main .right-text-box` | `order: 2; margin-bottom: 35px` | RH:6495 | text-box stacks below in column-flow |

#### Mobile narrow override (`@media only screen and (min-width: 320px) and (max-width: 360px)`, RH:6500–6503)

| `.echanced-scents-main .card h4` | `font-size: 14px` | RH:6501 | tightens further on small phones |

#### External CSS (`b00:N`)

| Selector | Rule | Cite | @media |
|---|---|---|---|
| `.echanced-scents-main` | `padding: 60px 0; background-image: url(/cdn/shop/files/515_1.png?v=1760446872); background-position: center; background-size: cover; background-repeat: no-repeat; position: relative; overflow: hidden` | b00:9030 | TOP |
| `.echanced-scents-main .shipping-list` | `display: flex; margin-top: 15px` | b00:9018 | TOP |
| `.echanced-scents-main .shipping-list li` | `display: flex; font-size: 18px` | b00:9022 | TOP |
| `.echanced-scents-main .shipping-list li svg` | `margin-right: 10px; margin-left: 10px` | b00:9026 | TOP |
| `.timeline-step:last-child .number` | `align-content: flex-end; top: -59px; position: relative` | b00:9403 | `@media (max-width: 991px)` |
| `.timeline-step:last-child .number` | `top: 0` | b00:9475 | `@media (max-width: 767px)` |
| `.echanced-scents-main .shipping-list` | `flex-wrap: wrap; justify-content: center` | b00:9548 | `@media (max-width: 767px)` |
| `.echanced-scents-main .shipping-list li` | `width: 100%; justify-content: center; margin-bottom: 10px` | b00:9552 | `@media (max-width: 767px)` |
| `.custo-button .custom-btn` | `padding: 15px 15px !important` | b00:9735 | `@media (max-width: 390px)` |

## 4. Color scheme custom properties (resolved)

The section root has **no `color-scheme-…` class** — unlike image-text-family sections. Instead, `.echanced-scents-main` (b00:9030) sets a **background-image** (`515_1.png`) covering the whole section, with `position: relative; overflow: hidden`. This produces the visual look — pink/cream textured backdrop independent of the theme color schemes.

Inherited CSS custom properties at this level cascade from the body (`color-scheme-2` on the page wrapper, but the immediate `.echanced-scents-main` ancestor has no override). Probe-confirmed background of section root = the `515_1.png` image, foreground color black `rgb(0, 0, 0)` inherited.

## 5. `@font-face` and computed font-family

Same global override as image-text family. h2 inherits `circular_stdmedium` via `body:not(:has(.gps)) h1, h2, …, h6 { font-family: 'circular_stdmedium' !important }` (RH:106). Live probe confirms.

**Exception:** `.echanced-scents-main .card h4` has explicit `font-family: var(--font-paragraph--family) !important` (RH:6225), which forces the **Inter** family on `h4` content. Card paragraph and CTA text already inherit Inter from the theme paragraph default. Per project rule, substitute Inter via `--bq-font-sans` token.

## 6. `@keyframes` / animations — full spec

**No `@keyframes` declarations exist anywhere in this section.** All motion is implemented via:

1. **CSS transitions** on `.timeline-step .card` and `.number` (opacity + transform), gated by JS class toggles (`active` / `exiting`).
2. **Scroll-driven CSS variable** `--timeline-progress` set on `<html>` by the inline JS.

### Transitions (full spec)

| Element | Property | Duration | Timing | Delay | Cite |
|---|---|---|---|---|---|
| `.timeline::after` | `height` | 0.3s | `ease-out` | 0 | RH:6523 |
| `.timeline-step .number` | `background, opacity, transform` | 0.3s / 0.6s / 0.6s | `ease-out` | per-state (see below) | RH:6183 |
| `.timeline-step .card, .timeline-step .number` | `opacity, transform` | 0.6s | `ease-out` | 0 | RH:6531 |
| `.timeline-step.active .left-card` | (transition-delay only) | — | — | **0.1s** | RH:6552 |
| `.timeline-step.active .number` | (transition-delay only) | — | — | **0.2s** | RH:6553 |
| `.timeline-step.active .right-card` | (transition-delay only) | — | — | **0.3s** | RH:6554 |
| `.custo-button .custom-btn` | `all` | 0.5s | (default) | 0 | RH:6075 |

### Scroll-handler driven CSS var

The inline JS (RH:6574–6619) attaches one `scroll`, one `resize`, and one `load` listener; on every event it computes a single number `progress = (scrollY + windowHeight/2 - timelineTop) / timelineHeight`, clamps to [0,1], and writes:

```js
document.documentElement.style.setProperty("--timeline-progress", progress * 100 + "%");
```

The CSS rule `.timeline::after { height: var(--timeline-progress, 0%); transition: height 0.3s ease-out; … }` (RH:6522) reads this var on every transform — but the **same rule** also declares `height: 95%` on its **last** line (RH:6525). Last-declaration-wins: the var is **shadowed** in the cascade and the line stays at a static 95% height regardless of scroll position. **Live probe confirms:** desktop computed height = 1471.91 px ≈ 95% of 1549.38 px; var on `<html>` = "52.87%" but unused. Mobile rule `@media .timeline::after { height: 100% }` (RH:6391) is itself shadowed by the same TOP rule. **This is a SOURCE BUG.**

### Per-step state machine (JS-driven)

`updateTimeline()` (RH:6579–6612) iterates `.timeline-step` elements; for each:

```js
if (stepRect.top < windowHeight * 0.7 && stepRect.bottom > 100) {
  step.classList.add("active");
  step.classList.remove("exiting");
} else if (step.classList.contains("active")) {
  step.classList.remove("active");
  step.classList.add("exiting");
}
```

Therefore steps can be in three states:

- **Initial (server-rendered):** `class="timeline-step step_… exiting"`. CSS pulls cards off-screen (`translateX(±60px)`) and to opacity 0.
- **In view:** `active`. CSS animates cards in: opacity → 1, translate → 0,0. Stagger via `transition-delay`: left-card 0.1 s → number 0.2 s → right-card 0.3 s.
- **Out of view (after having been in view):** `exiting`. Cards reverse out.

Transitions are 0.6s ease-out (cards) and 0.6s ease-out (number), so the in-animation lasts ≈ 0.9 s (right-card finishes at 0.3 + 0.6 = 0.9 s after `active` is added).

### Decoupled from AOS

No `data-aos` attributes anywhere in the section. AOS is loaded globally but **does not animate this section**. Replicating in our build = vanilla JS scroll handler + IntersectionObserver (preferred over scroll listener for perf) + CSS transitions on class toggle. Drop the `height: 95%` shadow override; use the `--timeline-progress` var directly.

## 7. Card layout — alternating left/right

### Desktop grid

`.timeline-step` is `display: grid; grid-template-columns: 1fr 40px 1fr; gap: 40px` (RH:6143). With 1440 viewport and `.page-width` un-constrained inner, each `1fr` column resolves to **660 px** (probe-confirmed: `gridTemplateColumns: "660px 40px 660px"`).

- `.left-card` → `grid-column: 1` (RH:6152)
- `.number` → `grid-column: 2` (RH:6172)
- `.right-card` → `grid-column: 3` (RH:6157)

The pink-bordered description card ("text-box") moves **left or right per step** because the `right-text-box` modifier class is **applied directly in HTML** to whichever card holds the description that step. There is no CSS-driven `:nth-child` alternation. `.card.right-text-box` always wears the pink border + `#FFF0F5` bg (RH:6112).

The h4-with-image card ("heading card") moves correspondingly: it lacks `right-text-box`, so it stays plain (no border, transparent bg). On left-card-item steps it has `left-card-item leftcard-grid` modifiers (intended to flip image+h4 into a 40/60 grid via RH:6245 — but that rule never matches the actual classlist, so the card just renders with `display: flex` from RH:6195, putting image and h4 side-by-side via flex).

### Mobile collapse

`@media ≤600 .timeline-step { display: flex; flex-wrap: wrap; gap: 0 }` (RH:6336). Cards stack vertically. The `.timeline` gets `padding-left: 50px` (RH:6398) and `.timeline-step .number` becomes `position: absolute; left: -45px !important` (RH:6383), positioning the number on a left rail aligned with `.timeline::before/::after` (`left: 13px !important`, RH:6377). Pink lines still run vertically, now along the left edge instead of the centre.

## 8. Computed values (live probe — desktop 1440×900, mobile 390×844 @2×)

### Desktop

| Element | Property | Value | Notes |
|---|---|---|---|
| `.shopify-section.echanced-scents-main` (root) | `width × height` | `1440 × 2003.97 px` | full viewport |
| (root) | `padding` | `60px 0` | b00:9031 |
| (root) | `background-image` | `url(515_1.png)` | b00:9032 |
| (root) | `background-position / -size / -repeat` | `50% 50% / cover / no-repeat` | b00:9033 |
| (root) | `position / overflow` | `relative / hidden` | b00:9036 |
| `.enhanced-timeline` | `width × height` | `1440 × 1694.97 px` | text-align: center |
| `.enhanced-timeline > h2` | font-family | `circular_stdmedium` | global override |
| `.enhanced-timeline > h2` | font-size | `44 px` | theme h2 default (no inline override) |
| `.enhanced-timeline > h2` | line-height | `52.8 px` (1.2) | theme h2 default |
| `.enhanced-timeline > h2` | font-weight | `400` (strong child UA-bold) | inherited |
| `.enhanced-timeline > h2` | text-align | `center` | RH:6097 |
| `.enhanced-timeline > h2` | margin | `0 0 5px 0` | RH:6127 |
| `.enhanced-timeline > h2` | color | `rgb(0, 0, 0)` | RH:6128 |
| `.enhanced-timeline > h3` | width × height | `1440 × 0 px` | empty |
| `.enhanced-timeline > h3` | font-size / color / weight | `30 px / #FF7E97 / 700` | RH:6131 (no visual) |
| `.timeline` | width × height | `1440 × 1549.38 px` | margin-top 40 |
| `.timeline::before` | width × height / position | `4 px × 1474.38 px / abs, top:0, bottom:75px, left:50%` | RH:6101 |
| `.timeline::before` | background | `rgba(255, 126, 151, 0.35)` | hex `#ff7e9759` |
| `.timeline::before` | transform | `translateX(-50%)` | |
| **`.timeline::after`** | **width × height / position** | **`4 px × 1471.91 px / abs, top:0, left:50%, bottom:77.47px`** | RH:6515; bottom = 100% - 95% = 5% of 1549 = 77.47 |
| `.timeline::after` | background | `rgb(255, 126, 151)` | solid pink |
| `.timeline::after` | transition | `height 0.3s ease-out` | RH:6523 |
| `.timeline::after` | z-index | `1` | RH:6524 |
| **`.timeline::after`** | **rendered height ratio** | **95% (static — bug, see §6)** | |
| `--timeline-progress` (on `<html>`) | value | `52.87%` (mid-scroll snapshot) | RH:6597 (var written but unused) |
| `.timeline-step` (each) | display | `grid` | RH:6144 |
| `.timeline-step` (each) | grid-template-columns | `660px 40px 660px` | RH:6145 (1fr 40px 1fr resolved) |
| `.timeline-step` (each) | gap | `40px` | RH:6147 |
| `.timeline-step` (each) | margin-bottom | `90px` | RH:6149 |
| `.timeline-step` (each) | width × height | `1440 × ≈172 px` (varies by content) | step 0 sample |
| `.timeline-step .number` | width × height | `60 × {step height} px` | width RH:6179, height: `100%` RH:6186 (over-tall container; the 72×72 SVG sits inside) |
| `.timeline-step .number svg` | dimensions | `72 × 72 px` (inline `width`/`height` attrs) | RH:5858 |
| `.timeline-step .number .svg circle` | fill | `#FF7E97` | RH:5859 |
| `.timeline-step .left-card` (initial / exiting) | transform / opacity | `matrix(1,0,0,1,-60,0) / 0` | RH:6533 |
| `.timeline-step .right-card` (initial) | transform / opacity | `matrix(1,0,0,1,60,0) / 0` | RH:6536 |
| `.timeline-step .number` (initial) | transform / opacity | `matrix(1,0,0,1,0,30) / 0` | RH:6539 |
| `.card.right-text-box` | border / background | `3px solid #FF7E97 / #FFF0F5` | RH:6113 |
| `.card.right-text-box` (no border) | border / background | `0 / transparent` | UA default |
| `.echanced-scents-main .card` | padding / border-radius | `15px 20px / 10px` | RH:6196 |
| `.echanced-scents-main .card p` | font-size / weight / text-transform | `20 px / 400 / capitalize` | RH:6209 — **note capitalize** |
| `.echanced-scents-main .card p strong` | color / weight | `#FF7E97 / 600` | RH:6213 |
| `.echanced-scents-main .card h4` | font-size / weight / family | `24 px / 400 / Inter (var(--font-paragraph--family))` | RH:6219 — **!important on font-family** |
| `.echanced-scents-main .card h4 strong` | color / weight / size | `#FF7E97 / 400 / 18 px` | RH:6227 |
| `.echanced-scents-main .card img` (inside p) | max-width | `40 px; display: block` | RH:6204 — applies to inline icons |
| `.custo-button` | width × height | `489.58 × 99 px` | flex column |
| `.custo-button` | margin | `40px auto 0` | RH:6057 |
| `.custo-button .custom-btn` | width × height / padding | `489.58 × 53 / 15px 30px` | RH:6072 |
| `.custo-button .custom-btn` | font-size / weight / case | `20 px / 400 / uppercase` | RH:6074 |
| `.custo-button .custom-btn` | bg / color | `rgb(0, 0, 0) / rgb(255, 255, 255)` | RH:6069 |
| `.custo-button .custom-btn` | transition | `0.5s` (all) | RH:6075 |
| `.custo-button .custom-btn img` | width × height | `20 × 20 px` | RH:6086 |
| `.shipping-list` | width × height | `473.25 × 31 px` | flex row |
| `.shipping-list li` | font-size | `18 px` | b00:9024 |
| `.shipping-list li svg` | dimensions | `17 × 17 px` (inline attrs) | RH:6039 |

### Mobile

| Element | Property | Value | Notes |
|---|---|---|---|
| (root) | width × height | `390 × 2161.44 px` | viewport |
| (root) | padding | `20 px 0` | RH:6371 |
| (root) | background-image / position / size | `url(515_1.png) / 50% 50% / cover` | unchanged |
| `.enhanced-timeline` | width × height / padding / margin | `390 × 1974.44 / 20px 15px / margin-bottom -30px` | RH:6346 |
| `.enhanced-timeline > h2` | font-size / line-height | `24 px / 28 px` | RH:6367 |
| `.timeline` | width × height / padding-left / margin | `360 × 1848.44 / 50 px / 10px 0 0` | RH:6398 |
| `.timeline::before` | top / left / width / height / bottom | `20 px / 13 px / 4 / 1828.44 / 0` | RH:6432, 6394 |
| `.timeline::before` | transform | `none` (cleared) | RH:6378 |
| `.timeline::before` | background | `rgba(255, 126, 151, 0.35)` | unchanged |
| `.timeline::after` | left / width / height | `13 px / 4 / 1756.02` | RH:6377; **height still 95% (TOP rule shadows mobile `height: 100%`)** |
| `.timeline-step` | display | `flex` | RH:6337 |
| `.timeline-step` | flex-wrap / gap | `wrap / 0` | RH:6338 |
| `.timeline-step` | margin | `0` | RH:6413 |
| `.timeline-step .number` | position / left / top / margin-left | `absolute / -45px / 0 / -8px` | RH:6383 |
| `.timeline-step .number` | width × height | `60 × {step height} px` | unchanged width |
| `.timeline-step.active .number svg` | width | `40 px` | RH:6292 — when active, SVG shrinks |
| `.timeline-step .number svg` (initial / exiting) | width | `72 px` (inline attr) | RH:5858 |
| `.echanced-scents-main .card h4 img` | width / height | `30 px / 30 px` | RH:6485 |
| `.echanced-scents-main .card h4` | font-size / margin-bottom | `15 px / 4 px` | RH:6490 (≤600) |
| `.echanced-scents-main .card h4` | font-size | `14 px` | RH:6501 (320–360) |
| `.echanced-scents-main .card p` | font-size | `14 px` | RH:6424 |
| `.echanced-scents-main .right-text-box` | order / margin-bottom | `2 / 35 px` | RH:6496 |
| `.custo-button` | width × height | `390 × 137 px` | full width column |
| `.custo-button .custom-btn` | width × height / font-size | `339.11 × 50 / 14 px` | RH:6288 |
| `.custo-button .custom-btn` | padding | `15px` (uniform) | RH:6075 + RH:9735 (≤390 makes 15 15 !important) |
| `.shipping-list` | flex-wrap / justify-content | `wrap / center` | b00:9549 |
| `.shipping-list li` | width / margin-bottom | `100% / 10 px` | b00:9553 |

### Section padding (confirmed)

External rule b00:9031 sets desktop `60 0`. Inline mobile (RH:6371) overrides to `20 0`. No instance-specific inline padding (unlike image-text sections).

### Crops (rendered measurements)

- `source/crops/section-07-timeline-desktop.png`: **1440 × 2004 px** (DPR 1).
- `source/crops/section-07-timeline-mobile.png`: **780 × 4324 px** (DPR 2 → CSS-px height ≈ 2162).

## 9. Triangulation discrepancies

### A. Pink line `height: 95%` shadows the dynamic `--timeline-progress` var

- The CSS rule at RH:6514–6526 declares both `height: var(--timeline-progress, 0%)` (line 6522) and `height: 95%` (line 6525) **inside the same selector**. CSS cascade: last-declaration-wins. The dynamic var is **never read** in the rendered cascade.
- The JS at RH:6597 still computes and writes `--timeline-progress` on every scroll/resize/load event. Probe confirms `documentElement.style[--timeline-progress]` updates as expected (e.g., `52.87%`). It's silently unused.
- **Resolution:** treat as source bug. Our build should drop `height: 95%` and let the CSS var control the line height — that's the obvious intent ("animation styles" comment at RH:6513 introduces the dynamic-line block).

### B. Mobile-only `height: 100%` rule for `.timeline::after` is also shadowed

- RH:6391 inside `@media ≤600` declares `.timeline::after { height: 100% }`. The TOP-level rule at RH:6525 declares `height: 95%`. The TOP rule appears AFTER the media query closes (RH:6499). Same specificity → last wins.
- Live probe confirms mobile renders height = 95% (matches TOP, not 100%).
- **Resolution:** when our build uses the var, this discrepancy disappears (no `height: 95%` to shadow).

### C. Massive set of orphan CSS selectors

Inline CSS targets DOM patterns that **don't exist** in the source HTML:
- Selector `.card.card-right-item.…` (RH:6116, 6232, 6238, 6241, 6245, 6250, 6262, 6272, 6275, 6349, 6352, 6355, 6359, 6420): no element in the source HTML has the `card-right-item` class. Every rule using this combinator is dead.
- Step ID selectors `step_gPDhFN`, `step_4Bfp34`, `step_98Anhx`, `step_MkMwMg`, `step_7ikq9B`, `step_Tx8KET` (RH:6262, 6275, 6299, 6305, 6312, 6318, 6325, 6331, 6402, 6444, 6449, 6454, 6459, 6463, 6472, 6479): zero match. The actual step IDs in the rendered HTML are `step_7HQTfE`, `step_8qmQcE`, `step_BDXDei`, `step_aRHgyi`, `step_7kzHP7`, `step_JW8VBW`. Theme appears to have changed step IDs at some point and CSS wasn't updated.
- Selector `echanced-scents-main .card.left-card.left-card-item` at RH:6163 has a missing leading `.` — invalid selector, never applies.
- Selector `.enhanced-timeline.container button.custo-button` at RH:6256 — no `.container` class on element; never applies.
- Selector `.rotate-image-item` at RH:6259 — no element has this class; never applies.
- Selector `.timeline-step span` at RH:6216 — no `span` direct children inside steps that aren't already inside `<svg>`; effectively no-op.
- **Resolution:** drop all orphan selectors. Rebuild with clean selectors that match the actual DOM (or with our own DOM). Document the active set:
  - `.enhanced-timeline`, `.enhanced-timeline h2`, `.enhanced-timeline h3`
  - `.timeline`, `.timeline::before`, `.timeline::after`
  - `.timeline-step`, `.timeline-step.active.left-card`, `.timeline-step.exiting.…`
  - `.timeline-step .left-card`, `.timeline-step .right-card`, `.timeline-step .number`
  - `.timeline-step:first-child .number`, `.timeline-step:last-child .number`
  - `.echanced-scents-main .card`, `.echanced-scents-main .card img`, `.echanced-scents-main .card p`, `.echanced-scents-main .card p strong`, `.echanced-scents-main .card h4`, `.echanced-scents-main .card h4 strong`, `.echanced-scents-main .card h4 img`
  - `.card.right-text-box`, `.card.left-card-item`
  - `.echanced-scents-main`, `.echanced-scents-main .shipping-list`, `.shipping-list li`, `.shipping-list li svg`
  - `.custo-button`, `.custo-button .custom-btn`, `.custo-button img`, `.shipping-list`

### D. h4 has `text-transform: capitalize` on `.card p` but content is already mixed-case

- RH:6211 sets `text-transform: capitalize` on `.echanced-scents-main .card p`. With `capitalize`, every word's first letter becomes uppercase. Visually fine for English copy, but Italian copy with apostrophes ("dell'industria") and contractions might render unexpectedly (e.g., "Dell'Industria").
- **Resolution:** drop `capitalize` in our build. Italian rendering correctness > matching this minor source detail. Flag as deliberate deviation.

### E. h4 font-family forced to Inter (`!important`) overriding global circular_stdmedium

- RH:6225 has `font-family: var(--font-paragraph--family) !important`. This means the source explicitly **wants** `h4` inside cards to use the paragraph font (Inter), not the heading font (circular_stdmedium). Project-wide our `--bq-font-sans` token = Inter, so this aligns naturally.
- **Resolution:** apply Inter to card h4 in our build. No special handling needed since project default is Inter.

### F. Number SVG is 72×72 inline-attr but `.number` div is `width: 60px`

- The SVG's intrinsic dimensions (72×72) exceed the parent div's 60px width. The default SVG behaviour (preserveAspectRatio + UA) keeps the 72×72 size and overflows the 60px container.
- Live probe shows number `width: 60px` (the div's own width); the inner SVG renders at 72×72 (inline attribute). Visual: the check-circle is slightly larger than its grid cell.
- **Resolution:** in our build, decide whether to set `width: 72px` on `.number` (clean) or leave the overflow (mirror source). Recommend **72px clean container** with the SVG fitting tightly. Flag as project deviation.

### G. CTA button uses `<button>` wrapping `<a>`

- Source nests an `<a>` inside a `<button>`. This is invalid HTML (interactive content cannot nest interactive content). Browser tolerates it but it breaks accessibility (button is a form-submitting element by default; nesting an anchor confuses semantic role).
- **Resolution:** in our build, use either a styled `<a class="bq-results__cta">` (preferred — matches the hero / image-text family CTAs), or a `<form action=…>` if it's meant to be a form submission. The trust list `<ul>` is fine standalone outside the anchor.

### H. Empty `<h3></h3>` element with full styling

- RH:5840 emits an empty `<h3>`; CSS at RH:6131 styles it (30px pink #FF7E97 700 weight, margin-top 0, margin-bottom 5/30 desk/mobile). Renders height 0 because empty.
- Likely the source theme has an admin field for an "h3 subtitle" that's left blank for this section.
- **Resolution:** schema-optional richtext field; collapse with `{% if %}` guard. Skip in initial build (no data needed).

### I. Card-img sizing is ambiguous due to nested image rules

- `.echanced-scents-main .card img { max-width: 40px }` (RH:6204) — applies to ANY img in card.
- `.echanced-scents-main .card.card-right-item.right-text-box img { width: 24px; margin: 10px 0 }` (RH:6241) — selector mismatch, never applies.
- `.echanced-scents-main .card-left-item h4 img { width: 60px }` (RH:6238) — applies to h4 imgs in left-card-item.
- `.echanced-scents-main .card h4 img { width: 40px; height: 40px; object-fit: contain; … }` (RH:6504) — applies to all h4 imgs.
- For `.card.left-card.left-card-item.leftcard-grid` (steps 1, 3, 5) the FIRST img (the big `Frame_08a68e28…` 400-wide product asset) gets `max-width: 40px` (constrained); the h4-nested img (when present, e.g., a small inline icon) gets 40 or 60. **At desktop the big "product image" renders at max-width 40 px** — way smaller than its 400-wide source, which means the layout DOES NOT show large product imagery despite the asset URL suggesting it. Crop confirms small-icon-style boxes.
- **Resolution:** our build should mirror this OR explicitly enlarge the product image (project decision). Recommend: leave at max-width 40 px to match render. The source author appears to have intended these as small icon-thumbnails throughout.

### J. No `@keyframes`; reveals are 100% transition-based

- All animation is `transition` + class toggle. No `@keyframes` rules.
- **Resolution:** clone vanilla. Use IntersectionObserver (cleaner than scroll listener) to add/remove `active`/`exiting` classes; let CSS transitions handle the visual.

### No other discrepancies between HTML / CSS / render.

## 10. Family-of-one assessment

**Singleton.** `grep -c timeline_enhanced` on `source/rendered.html` returns **1** match (the section's own `id`). No sibling `.echanced-scents-main` instances or other timeline-family sections exist in the source DOM.

**Build-as singleton:** create `sections/bq-results.liquid` (or `sections/bq-timeline.liquid`) as a one-off with its own CSS asset (`assets/bq-results.css`) and inline JS. Schema:

- `heading_h2` (richtext, required) — for "Results You'll See …"
- `heading_h3` (richtext, optional) — for the empty source field
- `cta_label` (text), `cta_link` (url) — for the bottom CTA
- `step` block type (repeatable):
  - `week_label` (text) — e.g., "Week 1:"
  - `heading` (text) — e.g., "Instant Puffiness Reduction"
  - `description` (richtext) — text-box body with strong-accent words
  - `result_image` (image_picker) — heading-card product image
  - `desc_image` (image_picker) — text-box leading icon
  - `position` (select: image_left / image_right) — controls alternation per-step (defaults to alternating via :nth-child if blank)
- `trust_item` block type (reuse from image-text or local) — for the bottom shipping-list trust row

Strict accretion warning: do NOT subsume into `bq-image-text` (different DOM, different motion model, different layout). Build standalone.

## 11. Asset list

| File | Intrinsic | Used at | alt | Reproducibility | Placeholder strategy |
|---|---|---|---|---|---|
| `Frame_08a68e28-eabf-4714-8603-42e2313cc6f7.png?width=400` (Shopify CDN) | unknown — source uses width=400 | All six steps' "heading-card" big product image (capped at max-width:40px so visually a small thumbnail) | `""` empty | Their product asset (likely a device beauty-shot) | Schema `result_image` (image_picker) per step. Until uploaded: render the placeholder SVG (lifestyle-1) at max-width:40px. |
| `f56218f5298965c0d5bd49bcefd0c650.png?width=200` (Shopify CDN) | unknown | Step 1 description leading icon | (no alt) | Their decorative icon (likely a microcurrent/circulation glyph) | Schema `desc_image` per step. Optional. |
| `0e790e0b3322344d4fcd7125b54fa7dd.png?width=200` (Shopify CDN) | unknown | Step 2 description leading icon | (no alt) | Their decorative icon | same as above |
| `2fa82eafcd2ed5200b4d6d9004230fc7.png?width=200` (Shopify CDN) | unknown | Step 3 description leading icon | (no alt) | Their decorative icon | same as above |
| `c2c05b7e1d238fb3af57f990988c2a2d.png?width=200` (Shopify CDN) | unknown | Steps 4 + 6 description leading icons (re-used) | (no alt) | Their decorative icon | same as above |
| `231c9a79b9d72ed21e8c88520ce9818c.png?width=200` (Shopify CDN) | unknown | Step 5 description leading icon | (no alt) | Their decorative icon | same as above |
| `Group_48095763_1.png?v=1757623725` (Shopify CDN) | unknown | CTA arrow/icon next to "Rejuvenate Your Under Eyes Today" | (no alt) | Their decorative arrow | Optional — schema `cta_icon` (image_picker). Hero precedent: skip; use clean text-only CTA. |
| `515_1.png?v=1760446872` (Shopify CDN) | unknown | Section background `.echanced-scents-main` (cover, center) | n/a (background) | Their textured backdrop (likely soft cream/pink gradient pattern) | Schema `bg_image` (image_picker, optional). For first-pass build, omit (use solid `var(--bq-body-bg)` or pink-tint var); flag for chat-Claude. |
| (no font assets) | — | — | — | — | — |

End of inventory. Stop.
