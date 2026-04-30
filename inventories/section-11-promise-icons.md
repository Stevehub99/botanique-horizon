# Section 11 — Promise Icons: Source Inventory

**Story ID**: section-11-promise-icons  
**Inventory date**: 2026-04-30  
**Disposition note**: Content already built in §10 (`bq-comparison-grid.liquid`). See finding below.

---

## Source anchor class finding

PRD anchor classes (`promise-row`, `icon-row`, `feature-icons`) are absent from `source/rendered.html`. The actual section uses class `main-list-class` (line 6853) and `listing-li` for each icon badge.

The promise icons section is embedded within the same Shopify section as the comparison grid: `shopify-section-template--19760795549861__multi_column_Lwj8HH` (lines 6749–6942 in source/rendered.html). There is no separate Shopify section for the promise icons.

---

## Source HTML structure (rendered.html lines 6853–6939)

```html
<div class="main-list-class">
  <div class="header-top-file">
    <h3><strong>Botanique Paris </strong>Promise</h3>
  </div>
  <ul class="content-file">
    <li class="listing-li">
      <div class="image-holding-div" style="max-width: 70px;">
        <img src="//botaniqueparis.com/cdn/shop/files/Group_48095902_600x.png?v=1760357855" ...>
      </div>
      <div class="img-txt-hold-div"><h5>FDA-Cleared</h5></div>
    </li>
    <!-- × 5 more: Non-Invasive, Zero Downtime, Clinically Safe, Pain-Free, All Skin Types -->
  </ul>
</div>
```

**6 badges** (in source order):
1. FDA-Cleared — `Group_48095902_600x.png`
2. Non-Invasive — `Group_48095908_600x.png`
3. Zero Downtime — `Group_48095909_600x.png`
4. Clinically Safe — `Group_48096043_600x.png`
5. Pain-Free — `Group_48096044_600x.png`
6. All Skin Types — `Group_48096045_600x.png`

---

## Source CSS (external-00-base.css)

| Property | Value |
|---|---|
| `.main-list-class .content-file` | `display: flex; justify-content: space-between` |
| `.main-list-class .content-file li` | `list-style: none; text-align: center` |
| `.main-list-class .content-file .image-holding-div` | `margin: auto; margin-bottom: 15px` |
| `.main-list-class .header-top-file h3` | `font-size: 46px; text-align: center; margin: auto auto 30px; color: #000; border-top: 1px solid #00000040; padding-top: 50px; margin-top: 40px !important` |
| `.main-list-class .header-top-file h3 strong` | `color: #ff7e97` |
| **Mobile** `max-width: 749px` | `.main-list-class .content-file li`: `width: 50%; margin-bottom: 35px` |
| **Mobile** | `.main-list-class ul`: `flex-wrap: wrap; padding-left: 0; margin-bottom: 0` |

Icon size: `max-width: 70px` (source says 70px, not 32–48px as PRD estimated)

---

## Italian copy (IT localization — regulatory substitution applied)

| Source (EN) | Our build (IT) |
|---|---|
| Botanique Paris Promise | La promessa di **Botanique Paris** |
| FDA-Cleared | Certificato CE |
| Non-Invasive | Non invasivo |
| Zero Downtime | Zero tempi di recupero |
| Clinically Safe | Clinicamente sicuro |
| Pain-Free | Senza dolore |
| All Skin Types | Per tutti i tipi di pelle |

Regulatory substitution: FDA-Cleared → Certificato CE (per CLAUDE.md table).

---

## Implementation location

**Already built** in `sections/bq-comparison-grid.liquid` as `.bq-cg__promise` block (lines 78–120).  
**CSS**: `assets/bq-comparison-grid.css` (lines 112–204).  
**Mapping**:
- `main-list-class` → `.bq-cg__promise`
- `header-top-file` → `.bq-cg__promise-header`
- `content-file` → `.bq-cg__promise-list`
- `listing-li` → `.bq-cg__badge`
- `image-holding-div` → `.bq-cg__badge-icon`

All 6 CDN icons stolen per project standing rule. Source structure mirrors exactly.

---

## Computed style match (verified from CSS)

| Gate | Expected | Our value | Match |
|---|---|---|---|
| flex layout, 6 items, equal-width | flex; justify-content:space-between | ✓ same | PASS |
| icon size | 32–48px (PRD estimate) / 70px (source actual) | max-width: 70px | PASS (source wins) |
| label font-size | ~16px | 16px (h5) | PASS |
| label color | #000 | #000 | PASS |
| heading border-top | 1px solid rgba(0,0,0,0.25) | ✓ same | PASS |
| heading font-size desktop | 46px | 46px | PASS |
| heading font-size mobile | 30px | 30px | PASS |
| mobile badge width | 50% | 50% | PASS |

---

## Source crop

`source/crops/section-11-comparison-desktop.png` — crop shows full comparison section including promise icons at bottom (confirmed visually 2026-04-30).

No dedicated `section-12-promise-icons-*.png` exists — promise icons are the lower third of the comparison crop.
