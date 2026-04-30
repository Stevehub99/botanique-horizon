# Inventory: section-14-testimonials

## Source location
`source/rendered.html` lines 7213–7375  
Section class: `section review-comment--items section--page-width color-scheme-1`

## DOM structure
```
section.review-comment--items.section--page-width.color-scheme-1
  .custom-section-background
    .background-image-container
      img: v745-kul-04_2.jpg        ← full-bleed bg; object-fit:initial (not cover)
  .custom-section-content (max-width: not overridden → inherits page-width)
    .layout-panel-flex--column .mobile-column
      padding-block: max(20px, ~60px)
      gap: 12px
      h2 (center, rte-formatter)    ← "Here's What RevitalEyes Ladies Are Saying"
      .ladies-are-saying group-block
        image-block
          img: image_1_557d14fb-38a9-4e56-a402-c1bb8b59ce8f.png  ← composite burned-in EN testimonials
              max-width:800px; margin:auto;
```

## Key CSS rules (source/css/external-00-base.css)
| Rule | Value |
|---|---|
| `.review-comment--items h2` (line 9098) | `font-size:46px; text-align:center; max-width:700px; margin:auto auto 50px; color:#000` |
| `.review-comment--items h2 strong` (line 9105) | `color:#ff7e97` |
| `.review-comment--items .background-image-container img` (line 9123) | `object-fit:initial` |
| `.ladies-are-saying img` (line 9769) | `max-width:800px; margin:auto` |
| Mobile `review-comment--items h2` (line 9662) | `font-size:30px` |

## Background image
`//botaniqueparis.com/cdn/shop/files/v745-kul-04_2.jpg?v=1760516836`  
CDN-steal for our build background. Apply as `background-image` CSS cover pattern (per project standing rule — bq-medical-fda.css pattern).

## Testimonials content in source
Source uses a **single composite PNG** (`image_1_557d14fb.png`, 720×720px) for all testimonial cards — English text burned in, unsuitable for IT market.

**Per PRD §14**: fabricate 4–6 IT testimonial cards as individual HTML elements. Mirror the `review-content-item-tab` card structure from `bq-hero.liquid` (same project, same visual pattern).

## Card visual spec (from `home--reivew` / `review-content-item-tab` CSS, lines 11502–11579)
| Element | Value |
|---|---|
| Card bg | `#fff` |
| Border-radius | `16px` |
| Padding | `15px` |
| Border | `1px solid #000` |
| Avatar img | `80×80px` circle, `object-fit:cover` |
| Quote font | italic, 14px, `color:#333`, `line-height:1.6` |
| Author h4 | `color:#ff7e97`, `font-size:16px`, `font-weight:600` |
| Verified badge | Twitter blue `#1DA1F2` SVG (locked decision) |
| Stars | `★★★★★`, `color:#ff7e97`, `font-size:18px`, `letter-spacing:2px` |
| Review bottom padding-left | 98px (aligns with avatar+gap) |

## Grid layout decision
Source image is 720×720 centered at max-width:800px → suggests 2-col or 3-col compact grid.  
Build: **2-col desktop**, **2-col tablet**, **1-col mobile** grid of 4 fabricated cards.  
No carousel needed: source is static grid image; PRD note about carousel applies if carousel is built.

## Family assessment
Singleton. No family reuse — unique `.review-comment--items` section pattern.

## Asset list
- Background: `//botaniqueparis.com/cdn/shop/files/v745-kul-04_2.jpg?v=1760516836` (CDN steal)
- Avatar images: use letter-placeholder divs (locked decision; no avatar images available for IT fabricated personas)

## Discrepancies
- Source composite image contains EN testimonials → replaced entirely with IT HTML cards
- `object-fit:initial` for bg image in source → our build uses `background-image:cover` for full-bleed (standard practice)
