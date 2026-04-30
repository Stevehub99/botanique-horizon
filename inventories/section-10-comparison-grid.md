# Section 10 — Comparison Grid (rejuvenation-section)

## Source anchor
- HTML: line ~6785–6875 in `source/rendered.html`
- Shopify section ID: `template--19760795549861__grid_multi_column_gCg3GN`
- Section class on wrapper: `rejuvenation-section`
- CSS: `source/css/external-00-base.css` lines 8623–8693, 9595–9637

## Crop
- Desktop: `source/crops/section-11-comparison-desktop.png`
- Mobile: `source/crops/section-11-comparison-mobile.png`

## DOM structure

```
div.shopify-section.rejuvenation-section
  div.grid-multi-col-class-*  [padding: 60px 0; white/gradient bg]
    div.new-grid-tem-class
      div.page-width
        div.section-header.text-center
          h2  [46px desktop / 30px mobile; max-width:910px centered; #000; strong=#ff7e97]
          p   [subtitle; margin-bottom:50px; centered]
        
        div.grid.grid--uniform.grid--flush-bottom  [3-col desktop / 2-col mobile; max-width:800px; gap:15px]
          div.grid__item.medium-up--one-third.text-center ×6
            div.grid-item-image [max-width:650px; margin:auto]
              div.image-wrap.text-spacing [padding-bottom:106.9%; height:0; position:relative]
                img.step-image [position:absolute; top:0; left:0; width:100%]
        
        a.btn [black bg #000; white; 15px 40px pad; 20px font; width:max-content; margin:auto; margin-top:20px]
          p [CTA text]
        
        div.grid-last-icon-text  [flex; center; padding-top:25px; flex-wrap on mobile]
          div.icon-block-part ×2  [flex; align-items:center; width:100% on mobile; margin-bottom:10px on mobile]
            span [SVG check: circle #2ED215, white checkmark]
            p [trust text; margin:0 10px 0 15px]
        
        div.main-list-class
          div.header-top-file
            h3 [46px desktop / 30px mobile; #000; strong=#ff7e97; border-top:1px solid #00000040; padding-top:50px; margin-top:40px]
          ul.content-file  [flex; space-between desktop; flex-wrap:wrap 50% each on mobile]
            li.listing-li ×6  [text-center; list-style:none]
              div.image-holding-div [max-width:70px; margin:auto; margin-bottom:15px]
                img.step-image [loading:eager]
              div.img-txt-hold-div
                h5 [16px]
```

## Assets (CDN steal)

### Comparison card images (6, text embedded in image):
1. `//botaniqueparis.com/cdn/shop/files/Group_48096036_e1a992fd-9c1b-4d07-9874-91afb9e50e46_600x.png?v=1760613957` — Eye Creams vs product
2. `//botaniqueparis.com/cdn/shop/files/Group_48096037_582d6285-de57-4ad1-aecc-7f4997c92fc1_600x.png?v=1760613957` — Normal Red Light Devices
3. `//botaniqueparis.com/cdn/shop/files/Group_48096038_600x.png?v=1760613957` — Filler ($2,400+)
4. `//botaniqueparis.com/cdn/shop/files/Group_48096040_2dc8e80f-7896-4eb2-823f-a248d6bde424_600x.png?v=1760613957` — Botox
5. `//botaniqueparis.com/cdn/shop/files/Group_48096041_cf48de92-24e4-4ce6-9189-deabe67c2449_600x.png?v=1760613957` — Lower Blepharoplasty ($5,000+)
6. `//botaniqueparis.com/cdn/shop/files/Group_48096042_f266a21b-8774-4c0b-bf90-3bff9f777ce9_600x.png?v=1760613957` — Caffeine Serums

### Promise badge icons (6):
1. `//botaniqueparis.com/cdn/shop/files/Group_48095902_600x.png?v=1760357855` — FDA-Cleared icon
2. `//botaniqueparis.com/cdn/shop/files/Group_48095908_600x.png?v=1760357855` — Non-Invasive icon
3. `//botaniqueparis.com/cdn/shop/files/Group_48095909_600x.png?v=1760357855` — Zero Downtime icon
4. `//botaniqueparis.com/cdn/shop/files/Group_48096043_600x.png?v=1760359373` — Clinically Safe icon
5. `//botaniqueparis.com/cdn/shop/files/Group_48096044_600x.png?v=1760359373` — Pain-Free icon
6. `//botaniqueparis.com/cdn/shop/files/Group_48096045_600x.png?v=1760359372` — All Skin Types icon

## Key CSS values

| Property | Desktop | Mobile (≤750px) |
|---|---|---|
| Section padding | 60px top/bottom | unchanged |
| H2 font-size | 46px | 30px |
| H2 max-width | 910px | — |
| H2 color / strong | #000 / #ff7e97 | — |
| Subtitle margin-bottom | 50px | — |
| Grid columns | 3 (1fr 1fr 1fr) | 2 (1fr 1fr) |
| Grid gap | 15px col/row | — |
| Grid max-width | 800px | — |
| CTA bg/color | #000/#fff | — |
| CTA padding | 15px 40px | 15px 15px |
| CTA font-size | 20px | 14px |
| CTA width | max-content | 100% |
| Trust row | flex center | flex-wrap |
| Trust item | — | width:100%; mb:10px |
| Promise h3 | 46px; border-top 1px solid #00000040; pt:50px; mt:40px | 30px; pt:30px |
| Promise list | flex space-between | flex-wrap; 50% width each |
| Promise badge | list-style:none; text-center | width:50%; mb:35px |
| Badge icon | max-width:70px; mb:15px | — |
| Badge label h5 | 16px | — |

## Trust icon SVG (reused from bq-image-text family)
```svg
<circle cx="7" cy="7" r="7" fill="#2ED215"/>
<path d="M10.8883 4.0835L5.54103 9.43072L3.11047 7.00016" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round"/>
```

## Italian copy

- H2: "L'Approccio a Doppia Tecnologia di **{{ product_name }}** È Di Gran Lunga Il Più Efficace Per Il **Ringiovanimento Oculare** a Casa"
- Subtitle (p, sentence case): "Ecco perché è la soluzione migliore per le borse e le occhiaie"
- CTA: "Ringiovanisci il tuo contorno occhi oggi"
- Trust 1: "Garanzia soddisfatti o rimborsati 365 giorni"
- Trust 2: "Spedizione express in tutto il mondo"
- Promise h3: "La promessa di **{{ brand_name }}**"
- Badge labels (sentence case, regulatory sub): Certificato CE · Non invasivo · Zero tempi di recupero · Clinicamente sicuro · Senza dolore · Per tutti i tipi di pelle

## Family assessment
SINGLETON — only one instance on page. No family reuse.

## Build decision
- New files: `sections/bq-comparison-grid.liquid` + `assets/bq-comparison-grid.css`
- Class prefix: `.bq-cg__*` for all custom classes
- Insert in templates/index.json after `bq-how-to-use-s09`, before `bq-urgency-banner-s13`
