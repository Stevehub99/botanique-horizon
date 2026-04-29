# Inventory: section-13-urgency-banner

## Source location
- HTML: `source/rendered.html:7125–7208`
- CSS: `source/css/external-00-base.css:8440–8514, 8713–8751, 9445–9461, 9514–9540, 9612–9614, 9649–9661`
- Crops: `source/crops/section-13-urgency-desktop.png`, `source/crops/section-13-urgency-mobile.png`

## Source anchor class
`high-demand-selling-october` (not the PRD-guessed anchor classes which don't exist in source)

## DOM structure
```
shopify-section.image-width-text-sec
└─ div.main-container.high-demand-selling-october  (padding-top: 10px, padding-bottom: 30px)
   └─ div.page-width
      └─ div.img-with-txt-keeper.img-left  (bg: #000, display: flex, align-items: center)
         ├─ div.content-folder  (order: 2, width: 50%, padding: 30px each side)
         │  ├─ h3  (color: #fff, font-size: 32px, margin-bottom: 50px)
         │  │  └─ strong  (color: #ff7e97, font-weight: normal)
         │  ├─ a.btn  (bg: #ff7e97, color: #fff, block, text-align: center, padding: 15px 40px, font-size: 20px)
         │  └─ div.section-last-icon-text  (display: flex, align-items: center, padding-top: 25px, flex-wrap: wrap)
         │     ├─ div.icon-block-part  (margin-right: 15px)
         │     │  ├─ span > SVG (14×14, green circle #2ED215, white checkmark)
         │     │  └─ p (color: #fff, font-size: 16px, margin-left: 10px)
         │     └─ div.icon-block-part
         │        ├─ span > SVG (14×14, green circle #2ED215, white checkmark)
         │        └─ p (color: #fff, font-size: 16px)
         └─ div.photo-folder  (order: 1, width: 50%, position: relative, padding-top: 462px)
            └─ img  (width: 100%, height: 100%, object-fit: cover, position: absolute, top: 0, left: 0, border-radius: 0)
```

## Key CSS values
- Container background: `#000`
- H3 color: `#fff`, font-size: `32px`, margin-bottom: `50px`
- H3 strong color: `#ff7e97`, font-weight: normal
- CTA btn background: `#ff7e97`, color: `#fff`, padding: `15px 40px`, font-size: `20px`
- Trust text color: `#fff`, font-size: `16px`
- Check icon: inline SVG, green circle `#2ED215`, 14×14px
- Photo: `position: relative`, `padding-top: 462px` (desktop), absolute-fill img
- Section padding: top `10px`, bottom `30px`

## Mobile breakpoint (max-width: 767px)
- `img-with-txt-keeper`: `flex-wrap: wrap`
- `content-folder`: width 100%, padding: 0 15px 15px, order: 2
- `photo-folder`: width 100%, padding-top: 410px, order: 1
- `photo-folder img`: height: 400px (overrides absolute-fill)
- `content-folder h3`: font-size: 30px, margin-top: 20px

## Source image
`//botaniqueparis.com/cdn/shop/files/dd137e6fb88b035084bc1caeb85af737daea95ac.jpg` — woman wearing eye mask/device

## Italian copy (generated)
- H3: `A causa dell'alta domanda e dei limiti di produzione, {{ product_name_token }} ha un rischio <strong>molto elevato di esaurirsi</strong>`
- CTA: `Ringiovanisci Il Tuo Contorno Occhi Ora`
- Trust 1: `Garanzia soddisfatti o rimborsati 365 giorni` (pre-confirmed)
- Trust 2: `Spedizione express in tutto il mondo` (pre-confirmed)

## Family vs singleton
Singleton. Similar to bq-image-text family but different: black bg, fixed-height photo technique, pink button (not black), inline SVG trust icons. BUILD as `bq-urgency-banner`.

## Discrepancy rulings
- PRD anchor_classes (`urgency-banner`, `stock-warning`, `limited-time`) don't exist in source; actual class is `high-demand-selling-october`
- PRD expected_dom says "dark-bg band" — correct, background IS #000
- Source image is the woman-with-eyemask product photo; use as schema image_picker with CDN URL default
