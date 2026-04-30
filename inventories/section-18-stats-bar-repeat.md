# Inventory: section-18-stats-bar-repeat

**Source location**: `source/rendered.html` lines 10930–11009  
**Source classes**: `experience-section` + `reduction-puffines-id` (distinguishing variant class)  
**Shopify section wrapper**: `.number--txt` (same as §7)

---

## DOM Structure

```html
<section class="experience-section reduction-puffines-id" style="padding-top:30px; padding-bottom:30px;">
  <div class="page-width">
    <!-- Empty title/subtitle spans — no heading block rendered -->
    <span class="title"></span>
    <span class="subtitle"></span>
    <div class="stats-grid">
      <div class="stat-box">
        <h3 class="grun-stat-number">91%</h3>
        <h4><p>Reduction In Under-Eye Puffiness</p></h4>
        <p></p>  <!-- empty mechanism text -->
      </div>
      <!-- × 4 boxes: 91% / 87% / 35% / 94% -->
    </div>
  </div>
</section>
```

**Key differences vs §7 (bq-science-stats)**:
- NO title / NO subtitle (empty spans)
- NO mechanism text (empty `<p>` in each box)
- Dark background image (CDN steal)
- Vertical divider lines between boxes via `:before` pseudo-element
- `margin-top: 0` on stats-grid (§7 has 50px)
- `padding-top: 30px; padding-bottom: 30px` (§7 has 40px top / 10px bottom)

---

## CSS Rules (source: external-00-base.css)

### Base `.reduction-puffines-id` overrides (lines 8844–8875)

```css
.reduction-puffines-id {
  background-image: url(/cdn/shop/files/0fe909673fd2fc22622f099794fc7ad9_2.png?v=1760426278);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.reduction-puffines-id .stat-box p {
  color: #fff;
  opacity: 80%;  /* applies to h4 > p too — makes headline ~white/80% */
}
.reduction-puffines-id .stats-grid {
  margin-top: 0px;
}
.reduction-puffines-id .stat-box {
  position: relative;
}
.reduction-puffines-id .stat-box:before {
  position: absolute;
  width: 1px;
  height: 100%;
  content: '';
  background: #ffffffa1;
  top: 0;
  right: -50px;
}
.reduction-puffines-id .stat-box:last-child:before {
  display: none;
}
```

### Tablet override (max-width: 991px, line 9435)
```css
.reduction-puffines-id .stat-box:before { right: -8px; }
```

### Mobile override (max-width: 767px, line 9692–9695)
```css
.reduction-puffines-id .stat-box:before { display: none; }
.reduction-puffines-id .stat-box { margin-bottom: 20px; }
```

Plus inherited `.number--txt` mobile rules (flex-wrap, 50% width, 36px number, 16px h4).

---

## Visual values (from source/crops/section-24-stats-repeat-desktop.png)

| Property | Value |
|---|---|
| Background | Dark brownish image, covers full section |
| Numbers (h3) | #ff7e97, ~54px, font-weight 600 |
| Headlines (h4) | White (~rgba(255,255,255,0.8)), ~18px, font-weight 400 |
| Dividers | 1px rgba(255,255,255,0.63) vertical lines |
| Padding | 30px top + bottom |
| Layout | 4 columns flex, space-between |

## Mobile (section-24-stats-repeat-mobile.png)

- 2×2 grid (flex-wrap, 50% width)
- Dividers hidden
- Numbers ~36px
- Headlines ~16px, white

---

## Italian copy (§18)

Same 4 headlines as §7 (pre-confirmed factual claims):
- **91%** → Riduzione del gonfiore sottooculare
- **87%** → Occhiaie più luminose e meno infossate
- **35%** → Aumento della densità del collagene
- **94%** → Pelle più liscia e tonica

No title, no subtitle, no mechanism text.

---

## Assets

- Background image (CDN steal): `https://botaniqueparis.com/cdn/shop/files/0fe909673fd2fc22622f099794fc7ad9_2.png?v=1760426278`

---

## Disposition

BUILD — new singleton `bq-stats-repeat.liquid` + `bq-stats-repeat.css`

## Family vs singleton

Singleton. Similar to §7 but different enough (no title/sub/mechanism, dark bg, dividers, different padding) to warrant its own file rather than adding more schema complexity to bq-science-stats.
