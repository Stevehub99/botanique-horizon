# Section 16 — Tech Specs Inventory

## Source anchor
- Outer div: `class="main-drive main-memory-[id] magic-revital-eyess color-scheme-1 gradient"`
- HTML lines: 7819–7916 in source/rendered.html

## DOM structure
```
div.main-drive.magic-revital-eyess (white bg, no special bg image)
  div.page-width
    div.new-arrived-page-width-bg
      div.group-memory              ← h2 heading
        h2: "<strong>The Magic</strong> Behind Revitaleyes"
      div.second-group-class        ← dark bg specs card
        h3: "Revitaleyes Technology Specs"
        h4: "Red Light Therapy:"
        ul: [Wavelength, Penetration]
        h4: "Microcurrent (EMS):"
        ul: [3 Intensity Levels:]
        ul: [Low 12mA, Medium 15mA, High 18mA]  ← indented sub-list
        h4: "Treatment Features:"
        ul: [2-in-1 Effect, Proximity Technology, Clinically Shown Benefits]
    div.main-list-class.multi-line-icons   ← 4 badge icons
      div.header-top-file (empty)
      ul.content-file
        li.listing-li × 4:
          div.image-holding-div (max-width:70px) → img (icon)
          div.img-txt-hold-div → h5 (label)
```

## CSS values (from source/css/external-00-base.css)

### h2 (desktop)
- font-size: 46px
- text-align: center
- max-width: 100% (magic-revital-eyess overrides general 700px)
- margin: auto auto 30px
- color: #000
- strong: color #ff7e97

### .group-memory (heading wrapper)
- margin-bottom: 50px (from `.new-arrived-page-width-bg .group-memory`)

### .second-group-class (specs card)
- background-image: url(//botaniqueparis.com/cdn/shop/files/Rectangle_39782.png?v=1760423878)
- background-position: center
- background-size: cover
- background-repeat: no-repeat
- padding: 80px
- border-radius: 16px

### h4 inside card
- color: #ff7e97

### h3 inside card
- color: #fff

### ul li inside card
- color: #fff
- list-style: disc !important
- padding-left: 0 !important
- background-image: none !important (overrides base rule)

### sub-list indentation
- `.magic-revital-eyess ul + p + ul { margin-left: 50px; }` (intensity sub-list)
- Note: source has empty `<p></p>` between outer ul and sub-list

### Badge list (desktop)
- .magic-revital-eyess .main-list-class .content-file: display grid; grid-template-columns: 1fr 1fr 1fr 1fr
- .main-list-class .content-file li: list-style none; text-align center
- .main-list-class .content-file .image-holding-div: margin auto; margin-bottom 15px
- .magic-revital-eyess .main-list-class .content-file li h5: padding 0 30px
- .multi-line-icons: margin-top 50px
- .multi-line-icons ul: padding-left 0; justify-content center

### Mobile overrides (within general media max-width ~750px)
- .magic-revital-eyess .second-group-class: padding 20px 15px
- .magic-revital-eyess ul: padding-left 30px
- .multi-line-icons ul li: margin 0
- .multi-line-icons ul: padding-left 0
- .magic-revital-eyess .main-list-class .content-file li: width 100%
- .magic-revital-eyess .main-list-class .content-file: grid-template-columns 1fr 1fr
- .main-drive h2: font-size 30px (mobile)
- .main-drive: padding-bottom 0

## Assets (CDN steal)
- Dark card bg: `//botaniqueparis.com/cdn/shop/files/Rectangle_39782.png?v=1760423878`
- Badge 1 (FDA-Cleared):   `//botaniqueparis.com/cdn/shop/files/Group_48095902_600x.png?v=1760357855`
- Badge 2 (Wavelengths):   `//botaniqueparis.com/cdn/shop/files/Group_48095909_600x.png?v=1760357855`
- Badge 3 (10-min):        `//botaniqueparis.com/cdn/shop/files/Group_48095895_600x.png?v=1760422350`
- Badge 4 (365-day):       `//botaniqueparis.com/cdn/shop/files/Group_48095894_600x.png?v=1760422348`

## Italian copy (Phase 2)

### h2
`<strong>La Magia</strong> Dietro Il Nostro Dispositivo`
(product_name_token token replaces "Il Nostro Dispositivo")

### h3 card title (sentence case)
`Specifiche tecniche del nostro dispositivo`

### h4: Red Light Therapy
`Luce Rossa Terapeutica:`

### ul items (Red Light Therapy)
- `Lunghezza d'onda: 630nm (clinicamente provata per la stimolazione del collagene e il ringiovanimento della pelle)`
- `Penetrazione: la luce rossa a bassa intensità penetra la pelle per stimolare la funzione cellulare e accelerare la crescita cellulare`

### h4: Microcurrent (EMS)
`Microcorrente (EMS):`

### ul outer item
- `3 Livelli di intensità:`

### ul sub-list (indented)
- `Basso (12mA): introduzione delicata per pelli sensibili`
- `Medio (15mA): stimolazione equilibrata per la maggior parte degli utenti`
- `Alto (18mA): massimo boost di collagene e ringiovanimento completo`

### h4: Treatment Features
`Caratteristiche del trattamento:`

### ul items (Treatment Features)
- `Effetto 2-in-1: combina la luce rossa terapeutica e la microcorrente in un'unica sessione`
- `Tecnologia di prossimità: maggiore efficacia quando usato vicino alla pelle`
- `Benefici clinicamente dimostrati: riduce le rughe sottili, migliora la complessione, aumenta la produzione di collagene e di ATP`

### Badge labels (IT)
1. `Certificato CE` (FDA-Cleared → regulatory substitution)
2. `Lunghezze d'onda provate`
3. `Sessione da 10 minuti`
4. `Garanzia 365 giorni`

## Family assessment
SINGLETON — new file `sections/bq-tech-specs.liquid` + `assets/bq-tech-specs.css`

## Residuals (pre-classified)
- Font: Inter instead of circular_stdmedium — expected
- IT copy ~10-20% longer — expected
- CDN image host differs — expected
