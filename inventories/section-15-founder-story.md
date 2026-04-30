# Inventory — section-15-founder-story

## Source location
`source/rendered.html` lines 7388–7801 (5 × `image_with_text` sections + 2 × `multi_lines_content` text-only gaps)

## Component assessment
**FAMILY-REUSE** — `bq-image-text.liquid` (5 instances). Two text-only `multi_lines_content` blocks (pt4/pt5) are out of scope per HANDOFF; acknowledged as gaps.

---

## Instance map

| Slot | Source class | Source heading tag | Layout | Source img URL fragment |
|------|-------------|-------------------|--------|------------------------|
| pt1 | `founder-bot-paris` | h2 (inside content-folder) | `image_left` (`.img-left` class) | `Rectangle_16_6622b0b5-3438-4f4e-b103-62f56005ac43.png` |
| pt2 | `every-morning-spend` | none | `image_right` (default) | `Group_48096047.png` |
| pt3 | `tried-everything-class` | h3 (inside content-folder) | `image_right` | `68935a7e4b000393a842be97aef9d426257a1dcd.png` |
| (gap pt4) | `nothing-worked-long-id` | h5 | — text-only multi_lines_content — | (out of scope) |
| (gap pt5) | `why-redlight-micro-id` | h2 | — text-only multi_lines_content — | (out of scope) |
| pt6 | `the-problem-born-id` | h3 (inside content-folder) | `image_right` | `1f82fe7aadacf8110eddfbc290e7b33cbe80837e.jpg` |
| pt7 | (no specific class) | h3 (inside content-folder) | `image_right` | `RevitalEyes_1_54c44d8c-35d1-4a1c-a07d-2acc6546d1a0.png` |

---

## Source padding (inline `<style>` per section)
- pt1: `padding-top:10px; padding-bottom:20px`
- pt2: `padding-top:10px; padding-bottom:20px`
- pt3: `padding-top:10px; padding-bottom:20px`
- pt6: `padding-top:20px; padding-bottom:20px`
- pt7: `padding-top:20px; padding-bottom:20px` (also has inline desktop override for content width 80%, ignored — minor residual)

## Source background
All instances: `color-scheme-1 gradient` = `#F6F8F9`

## Source typography
- h2 (pt1): 46px, `margin-top:30px` (mobile), font-weight default
- h3 (pt3, pt6, pt7): 32px desktop, 30px mobile; `#000`; `h3 strong { color:#ff7e97; font-weight:normal }`
  - Project rule override: h3 strong = 700 weight + accent — applied per locked decision
- Body paragraphs: 18px, 1.6 line-height
- Lists: `<ul>` in pt1 (2-col special layout) and pt3 (plain indented). We use plain `<ul>` for both — 2-col layout is a source-specific embellishment not required by acceptance criteria.

## Schema field mapping

| pt | heading_h2 | subheading_h3 | intro_p | numbered_list | closing_p |
|----|-----------|---------------|---------|---------------|-----------|
| pt1 | ✓ (founder intro h2) | — | ✓ (intro sentence) | ✓ (ul, 4 bullets) | ✓ (closing strong) |
| pt2 | — | — | ✓ (3-para narrative) | — | — |
| pt3 | — | ✓ (h3 "tried everything") | — | ✓ (ul, 4 bullets) | — |
| pt6 | — | ✓ (h3 "the problem") | ✓ (4 paras, clinic story + origin) | — | — |
| pt7 | — | ✓ (h3 device headline) | ✓ (3 paras, device summary) | — | — |

## Discrepancies noted
1. **pt1 h2 position**: source puts h2 inside content-folder; bq-image-text renders `heading_h2` above the flex row. Accepted — minor structural deviation, not flagged by acceptance criteria.
2. **pt1 ul 2-column layout**: source uses `display:flex; flex-wrap:wrap; width:50%` per li. Our bq-image-text uses plain `<ul>` via existing CSS. Accepted — simplification, not in acceptance criteria.
3. **pt7 content-width override**: source inline `@media(min-width:1024px){.content-folder{width:80%;padding-right:30px}}`. Standard bq-image-text has 60% content on desktop. Minor residual; not in acceptance criteria.
4. **Images**: All 5 instances use Shopify image_picker (placeholder SVG until user uploads via theme editor). Phase 2 asset pass.
5. **pt4/pt5 gaps**: `nothing-worked-long-id` and `why-redlight-micro-id` text blocks are out of scope for this story (separate section types).

## IT localization decisions (§15)
- Name: Sophie → **Sofia** (IT feminine first name, same generation)
- Brand: "Botanique Paris" → `%brand%` token (= "Lumière Paris" per schema default)
- Product: "RevitalEyes" → `%product%` token (= "Il Nostro Dispositivo")
- Location: No specific US city mentioned in these 5 instances → no substitution needed
- "$250+ per session" → "200–250€ a seduta"
- "$1500+/month" → "oltre 1.500€ al mese" (uses locked §2 pricing reference)
- "$50,000" → "oltre 50.000€"
- "300,000 women" → "300.000 donne" (IT number format, 1:1 per §15 rule "copy narrative arc")
- "medical-grade" → "di grado medico"
- h1/h2: Title Case; h3+: sentence case per locked rules
