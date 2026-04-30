# Inventory — section-17-buy-block

**Status**: produced  
**Date**: 2026-04-30  
**Disposition**: BUILD (singleton)  
**Target**: `sections/bq-buy-block.liquid` + `assets/bq-buy-block.css`

---

## Source location

- HTML: `source/rendered.html` lines 7921–10914
- Outer wrapper: `class="shopify-section upsell-popup featured-product-class-new"` (line 7921)
- Inner: `class="new-featured-class-product"` → `page-width` → `product-information section...`
- Source crops: `source/crops/section-23-buy-block-{desktop,mobile}.png`
- CSS: `source/css/external-00-base.css` lines 8904–9097

---

## DOM structure (simplified)

```
div.featured-product-class-new           ← outer section (#f1f1f2 bg, ::after/::before decorative images)
  div.new-featured-class-product         ← z-index:1 relative
    div.page-width                       ← max-width container
      div.featured-top-content           ← centered h3 + p above card
        h3 "Get RevitalEyes Today"       ← 46px, color #000, strong #ff7e97
        p "High risk of selling out..."  ← margin-top:0
      div.featured-product-contain-part  ← card: 430px, bg #fff, radius 22px, border 1px #FD617C
        div.product-information__media
          h4 "RevitalEyes"              ← gradient pill (#FD617C→#F8827A→#FE5E7C), radius 22 22 0 0
          media-gallery (carousel)       ← 18 slides, 4 visible thumbs
        div.product-details (product-information__content)
          add-shipping-part ul           ← 4 checklist items (green checkmark CDN icon)
          product-price                  ← price + compare-at
          variant-picker                 ← Color: White, Pink, Black, Hot Pink swatches
          kaching-bundles                ← MOTHER'S DAY SALE + 2 bundle options + upsell
          quantity-selector              ← (minor, not prominent in screenshot)
          add-to-cart-button             ← "ERASE EYE BAGS", bg #000, white text, full width
          add-shipping-part ul           ← trust row: 365-Day + Express Shipping
```

---

## Key CSS values (from external-00-base.css)

| Property | Value |
|---|---|
| Section bg | `#f1f1f2 !important` |
| Section padding | `80px 0` |
| Card width | `430px` |
| Card border | `1px solid #FD617C` |
| Card radius | `22px` |
| Card bg | `#fff` |
| h4 gradient | `linear-gradient(119deg, #FD617C 1.9%, #F8827A 41.56%, #FE5E7C 93.29%)` |
| h4 padding | `15px` |
| h4 radius | `22px 22px 0 0` |
| h3 font-size | `46px` |
| h3 strong color | `#ff7e97` |
| ::after bg | `v745-kul-04_3.png?v=1760439868` — height 468px, top, cover |
| ::before bg | `v745-kul-04_1.png?v=1760439491` — height 600px, bottom right, cover |
| Checkmark icon | `svgviewer-png-output_1.png?v=1749621239` — 20×20px |
| Features li padding-left | `30px` |
| CTA button bg | `#000` |
| CTA button color | `#fff` |
| Bundle radius | `16px` |
| Bundle selected bg | `rgba(255, 126, 151, 0.9)` |
| Bundle badge bg | `#000` |
| Price color | `#ff7e97` (product-price) |
| Compare-at color | `#2C2C34` |
| Bundle compare color | `rgb(195,0,0)` |

---

## Asset CDN steals (decorative, non-product)

- `//botaniqueparis.com/cdn/shop/files/v745-kul-04_3.png?v=1760439868` (bg top)
- `//botaniqueparis.com/cdn/shop/files/v745-kul-04_1.png?v=1760439491` (bg bottom)
- `//botaniqueparis.com/cdn/shop/files/svgviewer-png-output_1.png?v=1749621239` (checkmark)

## Asset CDN steals (product images for stub)

- Main: `//botaniqueparis.com/cdn/shop/files/RevitalEyes_1_57165608-7db0-428b-9d2c-efedd9b3af8c.png?v=1776379466`
- Thumb 2: `//botaniqueparis.com/cdn/shop/files/Results.webp?v=1776379466`
- Thumb 3: `//botaniqueparis.com/cdn/shop/files/SBS1.webp?v=1776379387`
- Thumb 4: `//botaniqueparis.com/cdn/shop/files/SBS2.webp?v=1776369450`
- Bundle img: `//botaniqueparis.com/cdn/shop/files/BP_UEC_2_1x1_transp.png?v=1776369450`

---

## Features checklist (source → IT)

| Source | Italian |
|---|---|
| RevitalEyes Device | `{{ product_name_token }}` |
| FREE Eye Bag Cream | Crema contorno occhi GRATIS |
| FREE Adjustable Straps | Cinturini regolabili GRATIS |
| 365-Day Money Back Guarantee | Garanzia soddisfatti o rimborsati 365 giorni |

## Color swatches

White, Pink, Black, Hot Pink → Bianco, Rosa, Nero, Rosa Acceso (static circles, no JS)

## Bundle selector (kaching-bundles replica)

| Source | IT |
|---|---|
| "MOTHER'S DAY SALE" | FESTA DELLA MAMMA |
| RevitalEyes® — $79.95 / $229.98 | `{{ product_name_token }}` — 69,95€ / 138,95€ |
| RevitalEyes® + Eye Bag Cream — $69.95 (TODAY ONLY) | `{{ product_name_token }}` + Crema Occhi — 60,95€ (OGGI SOLTANTO) |
| + Add for FREE — $0 / $90.95 | + AGGIUNGI GRATIS — 0,00€ / 90,95€ |

## CTA + trust

| Source | IT |
|---|---|
| "ERASE EYE BAGS" | ELIMINA LE BORSE |
| 365-Day Money Back Guarantee | Garanzia soddisfatti o rimborsati 365 giorni |
| Express Shipping Worldwide | Spedizione gratuita in Italia |

---

## Stub note

This section is VISUAL STRUCTURE ONLY. No real Shopify cart/variant wiring. All prices are placeholder.  
Mark status: `passing-with-stubs` when visual gates pass.
