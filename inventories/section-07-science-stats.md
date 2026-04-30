# Section 07 — Science Stats Inventory

Source: `source/rendered.html` lines 6621–6684. CSS: `source/css/external-00-base.css` lines 8374–8427, 9435–9441 (max-width:991px), 9557–9576 (max-width:767px).

## DOM structure

```html
<div class="shopify-section number--txt">
  <section style="padding-top:40px; padding-bottom:10px;">
    <div class="page-width">
      <span class="title" data-aos="fade-down">
        <h3><strong>The Science</strong> Behind RevitalEyes</h3>
      </span>
      <span class="subtitle" data-aos="fade-down">
        <p>Reported results from clinical trials and customer experience:</p>
      </span>
      <div class="stats-grid">
        <div class="stat-box" data-aos="fade-up">
          <h3 class="grun-stat-number">91%</h3>
          <h4><p>Reduction In Under-Eye Puffiness</p></h4>
          <p>Microcurrent activates lymphatic drainage to eliminate fluid buildup.</p>
        </div>
        <div class="stat-box" data-aos="fade-up">
          <h3 class="grun-stat-number">87%</h3>
          <h4><p>Brighter, Less Hollow Under-Eyes</p></h4>
          <p>Red light increases circulation, clearing pooled blood that creates dark shadows.</p>
        </div>
        <div class="stat-box" data-aos="fade-up">
          <h3 class="grun-stat-number">35%</h3>
          <h4><p>Increase In Collagen Density</p></h4>
          <p>Red light stimulates collagen production, thickening skin to soften wrinkles and fill hollows</p>
        </div>
        <div class="stat-box" data-aos="fade-up">
          <h3 class="grun-stat-number">94%</h3>
          <h4><p>Reported Smoother, Firmer Skin</p></h4>
          <p>Dual-technology combines collagen-building and muscle-toning for visible lifting.</p>
        </div>
      </div>
      <!-- bottom-content: empty spans in source — omitted -->
    </div>
  </section>
</div>
```

## CSS values (desktop)

| Rule | Property | Value |
|------|----------|-------|
| `.number--txt` | background-image | `url(/cdn/shop/files/sl_032421_41660_05_1_bbf2dbc5-0a39-47b7-8e4b-a7cf63a006d5.png?v=1760344795)` |
| `.number--txt` | background-size | cover |
| `.number--txt` | background-repeat | no-repeat |
| `.number--txt h3` | font-size | 46px |
| `.number--txt h3` | text-align | center |
| `.number--txt h3` | color | #000 |
| `.number--txt h3` | margin-bottom | 20px |
| `.number--txt h3 strong` | color | #ff7e97 |
| `.number--txt .subtitle` | font-size | 20px |
| `.number--txt .subtitle` | color | #000 |
| `.number--txt .subtitle` | text-align | center |
| `.number--txt .subtitle` | margin-top | 0 |
| `.number--txt .stats-grid` | display | flex |
| `.number--txt .stats-grid` | justify-content | space-between |
| `.number--txt .stats-grid` | margin-top | 50px |
| `.number--txt .stat-box` | text-align | center |
| `.number--txt .grun-stat-number` | font-size | 54px |
| `.number--txt .grun-stat-number` | font-weight | 600 |
| `.number--txt .grun-stat-number` | color | #ff7e97 |
| `.number--txt .grun-stat-number` | margin-bottom | 10px |
| `.number--txt .stat-box h4` | font-size | 18px |
| `.number--txt .stat-box h4` | font-weight | 400 |
| `.number--txt .stat-box h4` | color | #000 |
| `.number--txt .stat-box h4` | margin-top | 0 |
| `.number--txt .stat-box h4` | max-width | 230px |
| `.number--txt .stat-box p` | color | #65656d |
| `.number--txt .stat-box p` | margin-top | 0 |
| `.number--txt .stat-box p` | max-width | 214px |

## CSS values (max-width: 991px)

| Rule | Property | Value |
|------|----------|-------|
| `.number--txt .grun-stat-number` | font-size | 40px |
| `.number--txt .stat-box h4` | font-size | 16px |
| `.number--txt .stat-box h4` | max-width | 160px |

## CSS values (max-width: 767px)

| Rule | Property | Value |
|------|----------|-------|
| `.number--txt h3` (section title) | font-size | 30px |
| `.number--txt h3` | margin-bottom | 5px |
| `.number--txt .stats-grid` | flex-wrap | wrap |
| `.number--txt .stat-box` | width | 50% |
| `.number--txt .grun-stat-number` | font-size | 36px |
| `.number--txt .stat-box p` | font-size | 16px |
| `.number--txt .stat-box h4` | font-size | 16px |
| `.number--txt .stat-box h4` | margin-bottom | 10px |

## Section padding (inline style)
- padding-top: 40px
- padding-bottom: 10px

## Background image
Source CDN: `https://botaniqueparis.com/cdn/shop/files/sl_032421_41660_05_1_bbf2dbc5-0a39-47b7-8e4b-a7cf63a006d5.png?v=1760344795`
Steal per pipeline rules (non-product decorative background).

## JS / behavior
AOS (Animate on Scroll) library: `data-aos="fade-down"` on title/subtitle, `data-aos="fade-up"` on each stat-box. Horizon theme does not load AOS — attributes will be inert (no animation, layout intact).

## Family vs singleton
Singleton. Not a family member. Build as `sections/bq-science-stats.liquid`.

## §18 comparison
Second occurrence (`source/rendered.html` lines 10947–11009) uses class `reduction-puffines-id`. Differences:
- No title, no subtitle (empty spans)
- No mechanism text in stat boxes (empty `<p></p>`)
- `.reduction-puffines-id .stat-box p { color: #fff; opacity: 80% }` — implies dark background
- `.reduction-puffines-id .stats-grid { margin-top: 0px }`
- `.reduction-puffines-id .stat-box:before` — vertical dividers between boxes
- Padding: 30px top/30px bottom

**Verdict: §18 is a NEAR-DUPLICATE, NOT a literal duplicate.** Different variant (dark bg, no title, no mechanism text, dividers). §18 disposition should be changed from DUPLICATE to BUILD.

## Italian copy

| Element | IT copy |
|---------|---------|
| Section title h3 | `<strong>La scienza</strong> dietro {product_name_token}` |
| Subtitle | Risultati riportati da studi clinici e dall'esperienza dei clienti: |
| Stat 1 number | 91% |
| Stat 1 headline | Riduzione del gonfiore sottooculare |
| Stat 1 mechanism | La microcorrente attiva il drenaggio linfatico per eliminare i liquidi in eccesso. |
| Stat 2 number | 87% |
| Stat 2 headline | Occhiaie più luminose e meno infossate |
| Stat 2 mechanism | La luce rossa aumenta la circolazione, eliminando il sangue ristagante che crea le ombre scure. |
| Stat 3 number | 35% |
| Stat 3 headline | Aumento della densità del collagene |
| Stat 3 mechanism | La luce rossa stimola la produzione di collagene, ispessendo la pelle per attenuare rughe e cavità. |
| Stat 4 number | 94% |
| Stat 4 headline | Pelle più liscia e tonica |
| Stat 4 mechanism | La doppia tecnologia combina collagene e tono muscolare per un lifting visibile. |
