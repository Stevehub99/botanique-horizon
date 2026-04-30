# Inventory: section-08-medical-grade-fda

## Source location
- rendered.html lines 6685–6744
- Anchor classes: `fda-multi-line-part`, `main-memory-…RUnXKp`, `group-memory`
- CSS: `source/css/external-00-base.css` lines 8514–8550, 9766–9768, 9805–9812

## DOM structure
```
shopify-section wrapper
  <style> inline → .main-memory-…RUnXKp { padding-top:40px; padding-bottom:20px; background-image:url(...); background-position:center; background-size:cover; background-repeat:no-repeat }
  .main-drive .fda-multi-line-part .color-scheme-2 .gradient
    .page-width
      .new-arrived-page-width-bg
        .group-memory               ← h2 + p; margin-bottom:50px
          h2: "Medical-Grade Technology. <strong>FDA-Cleared Safety.</strong>"
          p: body paragraph
        .second-group-class         ← ul/li list
          ul > li × 5
            <strong>bold label</strong> - description
      .main-list-class .multi-line-icons   ← EMPTY in source; skip
        .header-top-file (empty)
        ul.content-file (empty)
```

## CSS extracted values

### Outer section
- `padding-top: 40px`
- `padding-bottom: 20px`
- `background-image: url(//botaniqueparis.com/cdn/shop/files/sl_032421_41660_05_1_bbf2dbc5-0a39-47b7-8e4b-a7cf63a006d5.png?v=1760344795)`
- `background-position: center`
- `background-size: cover`
- `background-repeat: no-repeat`

### h2 (.main-drive h2)
- `font-size: 46px`
- `text-align: center`
- `max-width: 700px`
- `margin: 0 auto 30px`
- `color: #000`

### h2 strong (.main-drive h2 strong)
- `color: #ff7e97`

### p (.main-drive p)
- `text-align: center`
- `max-width: 740px`
- `margin: 0 auto`

### .group-memory (.new-arrived-page-width-bg .group-memory)
- `margin-bottom: 50px`

### ul li base (.main-drive .second-group-class ul li)
- `position: relative`
- `list-style: none !important`
- `padding-left: 30px !important`
- `margin-bottom: 15px`
- `background-image: url(/cdn/shop/files/Group_48095897.svg?v=1760615009)`
- `background-repeat: no-repeat`
- `background-size: 25px`
- `background-position: left top`

### ul li override for fda section (.fda-multi-line-part ul li)
- `background-image: url(/cdn/shop/files/Group_48095911.svg?v=1760621385) !important`
- `font-size: 20px`

## Assets
- Background image (CDN steal OK): `//botaniqueparis.com/cdn/shop/files/sl_032421_41660_05_1_bbf2dbc5-0a39-47b7-8e4b-a7cf63a006d5.png?v=1760344795`
- Checkmark SVG (CDN steal OK): `//botaniqueparis.com/cdn/shop/files/Group_48095911.svg?v=1760621385`

## Crops
- `source/crops/section-09-medical-desktop.png` (our §8 = source file named §9)
- `source/crops/section-09-medical-mobile.png`

## Visual description (from crops)
- Desktop: cream/ivory textured background; centered h2 (black + pink strong); centered paragraph; 5-item list left-aligned in centered container with custom SVG circle checkmark per item
- Mobile: same stacked; h2 wraps; list items wrap individually

## Family assessment
- Singleton BUILD — shares generic `.main-drive` template pattern with other sections but is NOT family-parameterizable (unique FDA/checkmark structure)

## Regulatory substitutions required
- FDA-cleared red light therapy → Luce rossa certificata CE + sviluppata in collaborazione con la ricerca aerospaziale
- NASA-developed → sviluppata in collaborazione con la ricerca aerospaziale
- Medical-grade → tecnologia di grado medico
- Trusted by dermatologists → testato dermatologicamente

## IT copy (Phase 2)
### h2
`Tecnologia Di Grado Medico. <strong>Sicurezza Certificata CE.</strong>`

### body p
`{{ product_name }} utilizza tecnologie di grado medico, sviluppate in collaborazione con la ricerca aerospaziale e validate clinicamente, impiegate dai professionisti da decenni. Sicurezza certificata secondo gli standard europei per un uso efficace a casa tua.`

### list items (label → description)
1. **Luce rossa certificata CE** → Sviluppata in collaborazione con la ricerca aerospaziale per la rigenerazione cellulare
2. **Lunghezze d'onda clinicamente sicure (630–660 nm)** → Trattamento non invasivo e non termico, senza tempi di recupero
3. **Tecnologia a microcorrente di grado medico** → Impiegata in fisioterapia dagli anni '70 per la riabilitazione facciale
4. **Nessun raggio UV, nessun prodotto chimico, nessun effetto indesiderato** → Sicura per l'uso quotidiano sulla pelle più delicata del corpo
5. **Testato dermatologicamente** → Risultati di livello professionale senza i rischi di aghi o interventi chirurgici
