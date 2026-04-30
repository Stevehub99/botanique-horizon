# §09 How To Use — Inventory

**Source lines**: rendered.html 6749–6785  
**Outer wrapper**: `<div id="shopify-section-…__multi_column_Lwj8HH" class="shopify-section index-section">`  
**Section inline style**: `padding-top: 0px; padding-bottom: 0px;`  
**Inner wrapper classes**: `.main-multi-col-class-… .revital-eyes .color-scheme-1 .gradient`  

## Background container: `.full-bg-grid1`

| Property | Value |
|---|---|
| background-image | `url(//botaniqueparis.com/cdn/shop/files/Rectangle_39799.png?v=1760356456)` |
| background-position | center |
| background-size | cover |
| background-repeat | no-repeat |
| padding | 80px 0 |

## Heading

- Tag: `h2`
- Text: `How to Use <strong>RevitalEyes</strong>`
- CSS: font-size 46px, text-align center, max-width 700px, margin: auto auto 50px, color #fff
- `h2 strong`: color #ff7e97

## 3-column grid

- CSS: `grid-template-columns: 1fr 1fr 1fr; column-gap: 95px;`
- Source classes: `.grid.grid--uniform.grid--flush-bottom`
- Each item: `.grid__item.medium-up--one-third.text-center`

## Per-column structure

```html
<div class="grid-item-image" style="margin: 0 auto; max-width: 650px;">
  <div class="image-wrap text-spacing">
    <div class="step-number">N</div>
    <video playsinline autoplay loop muted preload="metadata" poster="…">
      <source src="…" type="video/mp4">
      <img src="…">
    </video>
  </div>
</div>
<h4>Step title</h4>
<div class="rte-setting text-spacing"><p>Step description</p></div>
```

### `.step-number`
- width: 60px, height: 60px
- background: #ff7e97
- border-radius: 50%
- display: flex, justify-content: center, align-items: center
- font-size: 24px, font-weight: 700, color: #fff
- margin: auto; margin-bottom: 30px
- z-index: 1

### `.step-image` (video/img)
- border-radius: 16px

### `.image-wrap`
- height: auto !important
- padding-bottom: initial !important
- `.grid-item-image`: position: relative

### Dashed connector (::after on .grid-item-image)
- content: ''
- position: absolute
- right: -60%; top: 50%
- width: 85%
- border: 1px dashed #F6F8F9
- Last item: `display: none`

### h4
- font-size: 20px
- max-width: 300px, margin: auto, margin-bottom: 15px
- color: #fff

### p
- color: #fff

## Step content (source)

| Step | h4 | p |
|---|---|---|
| 1 | Apply Activating Serum & Wear RevitalEyes | Apply serum under both eyes to enhance conductivity and maximize results. Position RevitalEyes comfortably over your under-eyes and press start. |
| 2 | Red Light Penetrates Deep To Rebuild Collagen. | Red light penetrates beneath your skin, triggering collagen and elastin production where creams can't reach. Relax for 5 minutes while the technology works. |
| 3 | Microcurrent Drains Fluid & Tones Muscles. | Gentle electrical pulses activate lymphatic drainage to eliminate puffiness and tone muscles around your eyes. In just 5 more minutes, your treatment is complete. |

## Mobile

- Source uses `.medium-up--one-third` → single column on mobile
- Connector `::after` should not show on mobile

## Videos

- Source uses 3 hosted MP4 videos from botaniqueparis.com CDN
- Per project rule: usage images/videos are placeholder per Phase 2 asset pass
- Build with SVG placeholder per standing rule

## Disposition

`BUILD` — new singleton `sections/bq-how-to-use.liquid` + `assets/bq-how-to-use.css`
