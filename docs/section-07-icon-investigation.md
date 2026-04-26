# Section 07 — timeline icon size investigation

Generated: 2026-04-26. Investigation only — no fix applied.

## 1. HTML structure of the icon

The "calendar/checkmark eyebrow icons" referenced are actually **two distinct icon types** in the timeline section. Both are inspected.

### Icon type A: pink-circle-with-checkmark (`.number > svg`) — ONE PER STEP

Wrapper class chain (back to section root):

```
section.shopify-section.echanced-scents-main                          rendered.html:5836
└─ div.enhanced-timeline.page-width                                   rendered.html:5838
   └─ div.timeline                                                    rendered.html:5842
      └─ div.timeline-step.step_7HQTfE.exiting (and 5 more)           rendered.html:5844
         └─ div.number                                                rendered.html:5857
            └─ <svg width="72" height="72" viewBox="0 0 72 72">       rendered.html:5858
                 ├─ <circle cx=36 cy=36 r=35.5 fill="#FF7E97" stroke="#FF7E97">  rendered.html:5859
                 └─ <path d="M50 26L30.75 45.25L22 36.5" stroke="white" ...>     rendered.html:5860
```

Element: `<svg>`. Hard-coded HTML attributes: `width="72" height="72" viewBox="0 0 72 72"`. **No inline styles.** No `data-` attributes on the svg. Parent `.number` and grandparent `.timeline-step` carry no inline styles either. The state classes on `.timeline-step` are `exiting` (initial render) or `active` (scroll-triggered) — see Step 3.

### Icon type B: small calendar/clock inline `<img>` in card paragraphs

Sample (Week 1's right-card eyebrow, `rendered.html:5869`):

```html
<p>
  <img src="//botaniqueparis.com/cdn/shop/files/f56218f5298965c0d5bd49bcefd0c650.png?v=1760438258&width=200">
  Microcurrent drains <strong>fluid buildup, …</strong>
</p>
```

Wrapper chain:

```
section.shopify-section.echanced-scents-main                          rendered.html:5836
└─ div.enhanced-timeline.page-width                                   rendered.html:5838
   └─ div.timeline                                                    rendered.html:5842
      └─ div.timeline-step.step_7HQTfE.exiting                        rendered.html:5844
         └─ div.card.right-card.right-text-box                        rendered.html:5866
            └─ <p>
               └─ <img src="…f56218f5…png?v=1760438258&width=200">    rendered.html:5869
```

Element: `<img>`. **No `width` / `height` attributes.** No inline styles. No `data-` attributes. Parent `<p>` carries none either. The `?width=200` URL query is Shopify's image-resize hint for asset delivery, not a CSS dimension.

Other instances of icon type B at: `rendered.html:5881` (Week 2 left-card), and similarly inside subsequent `.timeline-step` blocks.

Computed dimensions from inline style: **NONE on either icon type**. All sizing is from external CSS rules (Step 2) or default attribute values.

## 2. CSS rules sizing the icons

All citations from `source/css/external-00-base.css` unless noted.

### Sizing rules for icon type A (`.number svg`)

| Rule | Cite | @media | Effect |
|---|---|---|---|
| `.timeline-step .number { width: 60px; line-height: 40px; … height: 100%; … }` | external-00-base.css:6171–6187 | TOP | Constrains parent `.number` to **60 px wide**. SVG inside inherits: computed width of `<svg>` is **60 px** (the parent's content-box width) regardless of `width="72"` attribute, because intrinsic SVG sizing yields to a constrained ancestor in this layout. |
| `.timeline-step:first-child .number { align-content: start; margin-top: -8px; }` | external-00-base.css:6188–6191 | TOP | Adjusts first-child only; no width effect. |
| **`.timeline-step.active .number svg { width: 40px; }`** | **external-00-base.css:6291–6293** | **`@media only screen and (max-width: 600px)`** opened at external-00-base.css:6286 | **The shrink rule.** When the step has class `.active` AND viewport ≤ 600 px, the SVG width drops to 40 px. Triggered by JS class swap (Step 3). |

There is **no equivalent shrink rule for desktop viewports** (>600 px). The SVG stays at 60 px on desktop in both `exiting` and `active` states.

Mobile-only large-screen overrides (irrelevant to icon type A):
- `external-00-base.css:6336–6338` (`.timeline-step` mobile responsive layout, no width on .number)
- `external-00-base.css:6382–6390` (`.timeline-step .number` mobile, no width override on the svg)
- `external-00-base.css:9403–9405`, `external-00-base.css:9475` (`.timeline-step:last-child .number` — first/last special-cases, no svg width)

### Sizing rules for icon type B (small inline `<img>` in `<p>`)

| Rule | Cite | @media | Effect |
|---|---|---|---|
| `.echanced-scents-main .card img { max-width: 40px; display: block; }` | external-00-base.css:6204–6207 | TOP | Caps every card-internal `<img>` to a maximum of 40 px wide. |
| `.echanced-scents-main .card.card-right-item.right-text-box img { width: 24px; margin: 10px 0; }` | external-00-base.css:6241–6244 | TOP | Forces `<img>` inside `.right-text-box` cards to exactly **24 px**. (The `f56218f5…` image is in such a card per `rendered.html:5866`.) |
| `.echanced-scents-main .card-left-item h4 img { width: 60px; }` | external-00-base.css:6238–6240 | TOP | A different image — the heading-adjacent thumbnail in left-cards. Sets to 60 px. |
| `.echanced-scents-main .card h4 img { width: 40px; height: 40px; object-fit: contain; … }` | external-00-base.css:6504–6511 | TOP | Generic h4-adjacent image — 40×40. |
| `.echanced-scents-main .card.card-right-item.right-text-box img { … }` (mobile-specific overrides at lines 6299–6308 for `.step_gPDhFN`, `.step_4Bfp34` and similar) | external-00-base.css:6299–6308 | `@media only screen and (max-width: 600px)` | Per-step icon sizing on mobile (e.g., `.step_gPDhFN .right-card p img { width: 17px !important; height: 27px !important; }`). |

For icon type B the static CSS already pins the size; no animation/state involvement.

### Animation styles applied to `.timeline-step` children

These don't size the icons but DO affect rendering (opacity / transform), so they're relevant context for what "looks visible" vs "looks hidden":

```css
.timeline-step .card,
.timeline-step .number {
  opacity: 0;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.timeline-step .left-card  { transform: translateX(-60px); }
.timeline-step .right-card { transform: translateX(60px); }
.timeline-step .number     { transform: translateY(30px); }

.timeline-step.active .left-card,
.timeline-step.active .right-card,
.timeline-step.active .number {
  opacity: 1;
  transform: translate(0,0);
}

.timeline-step.exiting .left-card { transform: translateX(-60px); opacity: 0; }
.timeline-step.exiting .right-card{ transform: translateX(60px);  opacity: 0; }
.timeline-step.exiting .number    { transform: translateY(30px);  opacity: 0; }
```

Cited at `rendered.html:6528–6567` (these rules live in an inline `<style>` block in the rendered HTML, NOT in external-00-base.css).

Initial state for every step in HTML: class `exiting` → `opacity: 0; transform: translate*` → invisible. JS swaps to `active` on scroll → opacity:1, transform: translate(0,0).

## 3. JS that touches the icon

One inline `<script>` block, **`rendered.html:6574–6620`**:

```js
document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".timeline-step");
  const timeline = document.querySelector(".timeline");

  function updateTimeline() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    if (!timeline) return;

    const rect = timeline.getBoundingClientRect();
    const timelineTop = scrollY + rect.top;
    const timelineHeight = rect.height;
    if (timelineHeight <= 0) return;

    let progress = (scrollY + windowHeight / 2 - timelineTop) / timelineHeight;
    progress = Math.min(Math.max(progress, 0), 1);

    document.documentElement.style.setProperty("--timeline-progress", progress * 100 + "%");

    steps.forEach(step => {
      const stepRect = step.getBoundingClientRect();
      if (stepRect.top < windowHeight * 0.7 && stepRect.bottom > 100) {
        step.classList.add("active");
        step.classList.remove("exiting");
      } else {
        if (step.classList.contains("active")) {
          step.classList.remove("active");
          step.classList.add("exiting");
        }
      }
    });
  }

  window.addEventListener("scroll", updateTimeline);
  window.addEventListener("resize", updateTimeline);
  window.addEventListener("load",   updateTimeline);
  updateTimeline();
});
```

Mechanism: a vanilla scroll handler (not IntersectionObserver, not GSAP, not anime.js, not Lottie). On every scroll event:

1. Updates the CSS variable `--timeline-progress` on `<html>` from 0 % → 100 % based on viewport position relative to the timeline. (Drives the pink line height via `external-00-base.css` rule at `rendered.html:6522` — `height: var(--timeline-progress, 0%)` on `.timeline::after`.)
2. For each `.timeline-step`, tests `stepRect.top < windowHeight * 0.7 && stepRect.bottom > 100`. If true → adds `.active`, removes `.exiting`. Otherwise → restores `.exiting` if previously active.

No ResizeObserver, no MutationObserver, no rAF loop modifying transform/width/height directly, no GSAP/anime.js/Lottie/motion.js init calls anywhere in the document touching this section. Searched the whole `rendered.html` — only this one DOMContentLoaded handler addresses `.timeline-step`.

The `.active` class is the **only** thing that changes element sizing — and it does so via CSS, specifically via the `@media (max-width: 600px)` rule at `external-00-base.css:6291–6293`.

## 4. Live page diagnosis (Puppeteer probe)

Probe at `scripts/probe-timeline-icon.js` (disposable, deleted after this investigation). Loaded `https://botaniqueparis.com/`, read computed dimensions of `.timeline-step .number svg` and the first eyebrow `<p> img` BEFORE scrolling vs AFTER scrolling the first `.timeline-step` into view + 2 s settle.

Two passes (desktop 1440×900, mobile 390×844 @2×). Verbatim probe output:

### Desktop (1440 px)

| Property | BEFORE scroll | AFTER scroll-into-view |
|---|---|---|
| `.timeline-step` classes | `timeline-step step_7HQTfE` | `timeline-step step_7HQTfE active` |
| `--timeline-progress` (root) | `0%` | `5.557684550221864%` |
| `.number svg` computed `width` | **`60px`** | **`60px`** |
| `.number svg` computed `height` | `72px` | `72px` |
| `.number svg` computed `transform` | `none` | `none` |
| `.number svg` computed `opacity` | `1` | `1` |
| `.number svg` rectWidth × rectHeight | 60 × 72 | 60 × 72 |
| eyebrow `<img>` (`f56218f5…png`) computed width | `40px` | `40px` |
| eyebrow `<img>` rectWidth × rectHeight | 40 × 40.5625 | 40 × 40.5625 |

**No size change on desktop. Both icon types render the same before and after scroll.**

### Mobile (390 px)

| Property | BEFORE scroll | AFTER scroll-into-view |
|---|---|---|
| `.timeline-step` classes | `timeline-step step_7HQTfE` | **`timeline-step step_7HQTfE active`** |
| `--timeline-progress` (root) | `0%` | `8.258664412510566%` |
| `.number svg` computed `width` | **`60px`** | **`40px`** ← shrunk |
| `.number svg` computed `height` | `72px` | `72px` |
| `.number svg` computed `transform` | `none` | `none` |
| `.number svg` rectWidth × rectHeight | 60 × 72 | **40 × 72** |
| eyebrow `<img>` computed width | `40px` | `40px` |

**Confirmed: on mobile, `.number svg` shrinks from 60 px → 40 px when the step gains class `.active`** via the `@media (max-width: 600px) .timeline-step.active .number svg { width: 40px; }` rule. **Eyebrow `<img>` stays 40 px** — no animation on icon type B in either viewport.

## 5. Diagnosis

**The shrink is class-driven, not animation-driven.** The mechanism, end-to-end:

1. Initial HTML render — every `.timeline-step` carries class `exiting` (`rendered.html:5844, 5875, …`). No `.active` class. `.number svg` renders at 60 × 72 px (desktop and mobile).
2. The inline JS `updateTimeline` handler at `rendered.html:6574–6620` runs on `DOMContentLoaded` and on every `scroll` / `resize` / `load`. When a `.timeline-step` enters the lower 70 % of the viewport, JS does `step.classList.add("active"); step.classList.remove("exiting");`.
3. **On mobile only** (≤ 600 px), the rule `external-00-base.css:6291–6293` matches `.timeline-step.active .number svg` and applies `width: 40px;`. The SVG snaps to 40 × 72 instantly (no transition on `width`).
4. On desktop the same JS class swap occurs, but no CSS rule matches `.timeline-step.active .number svg` at that viewport, so the icon stays at 60 × 72.

### Why our captures show "LARGE" icons on mobile

Our `scripts/capture-sections.js` Strategy-B sweep walks every element and force-sets:

- `opacity: 1`, `visibility: visible`, etc.
- Selective `transform: none` only when `Math.abs(matrix.e) > 50 || matrix.f > 50` (off-screen translation hides).
- Animation snap-to-end via `animation-delay: -9999s; duration: 0.001s; …`.
- Transition fast-snap via `transition-duration: 0.001s; transition-delay: 0s`.

None of those operations adds `.active` to `.timeline-step`. The class-swap is the JS path; the sweep doesn't touch class lists. So at the moment our `element.scrollIntoView` happens for section-07's bounding box, the per-step `updateTimeline` may or may not have fired (depends on whether each step is within the lower 70 % of the viewport during the `element.screenshot` call).

Specifically, `element.screenshot` captures the WHOLE element from its top-left, but the JS uses `getBoundingClientRect` to test viewport intersection per step. Steps below the lower-70 % line of the viewport won't be `.active`. So lower steps (Week 4, Week 6, Week 8) likely capture in `exiting` state with the 60 px SVG, while top steps (Week 1, Week 2) may be `.active` with 40 px SVG. That's why the result is inconsistent across the captured PNG.

### Why snap-to-end animation override didn't help

The shrink isn't an animation. There's no `@keyframes` keyframe that the SVG transitions through; the rule is a static `width: 40px` declaration that conditionally applies based on a class selector. Snapping animations to their end state has no effect because no animation is in flight.

To force the shrunk state at capture time, ours needs to:

- (Option A) Add the `.active` class to every `.timeline-step` before the per-section screenshot, so the CSS rule matches universally; OR
- (Option B) Inject a CSS override during the sweep that forces `.timeline-step .number svg { width: 40px }` on mobile viewports (skipping the conditional `.active` selector); OR
- (Option C) Trigger a real scroll past every step before capture so JS naturally adds `.active` to each, then screenshot — but this races with our element-screenshot-by-index loop which scrolls to each section's top, not past every step.

No fix applied per this prompt's rules. Awaiting direction.

---

Probe file: `scripts/probe-timeline-icon.js` (deletable after this investigation).
Report path: `/Users/stefano/botanique-clone-build/botanique-horizon/docs/section-07-icon-investigation.md`
