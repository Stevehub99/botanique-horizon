# Image-text family audit

Generated: 2026-04-27. Source: `source/rendered.html` walked for every `.shopify-section.image-width-text-sec` instance.

**Defining marker:** class `image-width-text-sec` on the section root (`<div id="shopify-section-template--…__image_with_text_…" class="shopify-section image-width-text-sec">`).

**Total instances found: 10** (vs. user's expected 5). Trust DOM. PROJECT.md mapping reconciled below.

## Audit table

| # | DOM ID suffix | rendered.html line | PROJECT.md § | Capture-pipeline slug | Has h2 | Has h3 | Has intro p | p count | Has ol | ol items | Has ul | ul items | Has closing p | Has CTA btn | Has trust-icon row | Has badges | Image position | Background modifier class | Section padding (top/bot) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `3RDTNB` | 5544 | 2 (Industry) | `industry` | ✓ | ✓ | ✓ | 1 |  |  |  |  |  |  |  |  | right (default) | `custom-gradiant-industry` (linear-gradient pink → off-white) | 30/10 |
| 2 | `87FTVU` | 5607 | 3 (Causes) | `causes` |  | ✓ | ✓ | 2 | ✓ | 3 |  |  | ✓ | (closing p inline w/ intro) |  |  | left (`img-left`) | none (solid `#F6F8F9` from color-scheme) | 10/10 |
| 3 | `xQzFck` | 5668 | 4 (Dual-tech) | `dual-tech` |  | ✓ | ✓ | 3 | ✓ | 2 |  |  | ✓ | ✓ |  |  | right (default) | `root-cases-technology` (gradient + decorative `:after` `11_6.png`) | 10/30 |
| 4 | `fmJKeW` | 5751 | 5 (Mission) | `mission` | ✓ | ✓ | ✓ | 3 |  |  |  |  | ✓ | ✓ |  |  | left (`img-left`) | `to-help-women` | 30/30 |
| 5 | `UVJCFN` | 7125 | 13 (Urgency banner) | `urgency` |  | ✓ | ✓ | 2 |  |  |  |  | ✓ | ✓ |  |  | left (`img-left`) | `high-demand-selling-october` (dark theme via class) | 10/30 |
| 6 | `rNiapP` | 7381 | 15 (Founder pt 1) | `founder-pt1` | ✓ |  | ✓ | 2 |  |  | ✓ | 4 |  |  |  |  | left (`img-left`) | `founder-bot-paris` | 20/10 |
| 7 | `twWty7` | 7442 | 15 (Founder pt 2) | `founder-pt2` |  |  | ✓ | 1 |  |  |  |  |  |  |  |  | right (default) | `every-morning-spend` | 10/20 |
| 8 | `a8riEW` | 7503 | 15 (Founder pt 3) | `founder-pt3` | ✓ | ✓ |  | 0 |  |  | ✓ | 4 |  |  |  |  | right (default) | `tried-everything-class` | 10/20 |
| 9 | `pYX7iU` | 7680 | 15 (Founder pt 6) | `founder-pt6` |  | ✓ | ✓ | 1 |  |  |  |  |  |  |  |  | right (default) | `the-problem-born-id` | 20/20 |
| 10 | `i88Gjg` | 7741 | 15 (Founder pt 7) | `founder-pt7` |  | ✓ | ✓ | 1 |  |  |  |  |  |  |  |  | right (default) | none | 20/20 |

### Mapping notes

- **Sections 3 (3RDTNB) and 6 (rNiapP) have h2** *or* h3, not both at the wrapper level. The rest skip h2 (empty `.top-header`) and put their primary heading in h3.
- **Section 12 (Precision engineering) is NOT in this family** — it's in `video-with-text-sec` (different selector, separate audit needed). User's expectation included Section 12; reality removed it.
- **Section 13 (Urgency banner) IS in this family** — user's expectation didn't include it. The `high-demand-selling-october` class flips the section to a dark background variant.
- **Section 15 (Founder story) is split into 5 image-text instances** — `founder-pt1`, `pt2`, `pt3`, `pt6`, `pt7`. Capture-pipeline slugs `pt4` (line ?, not in this family) and `pt5` are different section types. Founder narrative interleaves image-text rows with non-image-text rows.

### Elements NOT covered by columns above

- **Section 4 (`xQzFck`)** has both an `<img>` AND a `<video>` in the photo-folder column. Source HTML places both elements inside `.photo-folder`; CSS `b00:8458` styles `.photo-folder video, .photo-folder img` identically (`width: 100%; border-radius: 20px`). The schema must accept either an image-picker OR a video-picker per instance and pick the right element to render.
- **Section 5 (`fmJKeW`)** likewise has both `<img>` and `<video>` in photo-folder. Same media-type toggle requirement.
- **Section 4 has decorative `:after` pseudo** — `.root-cases-technology:after` paints `11_6.png` top-left at 200×255 px (mirroring Section 2's `custom-gradiant-industry:after` with `11_5.png`). Not in any other instance.
- **Section 13 (`UVJCFN`) has `high-demand-selling-october` modifier** which (per CSS at b00:8087, 8090, 8093, 8103, 8107, etc.) inverts the styling to a dark background with white text + pink CTA. This is a substantial variant — the dark/light toggle needs to be a section setting, not just a class.
- **Section 6 (`rNiapP`) `founder-bot-paris` modifier** — adds custom `<ul>` styling (b00:8132) with a checkmark icon `:before` pseudo on each `<li>` using `Group_48095925.png`. This is unique to the founder narrative.
- **Section 8 (`a8riEW`) has h5 (1)** — sub-headline element not present in other instances.
- **Section 4 (`fmJKeW` / Mission) and Section 13 (`UVJCFN` / Urgency)** have CTA buttons (`btn`/`button` matches). The other 8 instances have no CTA.

## Schema implications (union of elements observed)

To support all 10 instances with a single configurable section + blocks, the schema must offer:

- **`heading` (richtext, optional):** present in 4/10 (Sections 2, 5, 13-h3-as-heading, 15-pt1, 15-pt3). Optional — empty `.top-header` collapses to height 0 in the others.
- **`subheading` (richtext, optional):** present in 8/10 (Sections 2, 3, 4, 5, 13, 15-pt3, 15-pt6, 15-pt7). Skip on 15-pt2 (only paragraph) and 15-pt1 (only h2 + paragraphs + ul).
- **Body text — variable composition.** Each instance has a different mix of `<p>`, `<ol>`, `<ul>`, h5. Use a **block-based body** where each block is one of: `paragraph`, `ordered-list`, `unordered-list`, `subheading-h5`. Blocks render in order. Counts:
  - `paragraph` blocks needed: `1` (sec 2, 7, 9, 10), `2` (sec 3, 5, 6, 13), `3` (sec 4)
  - `ordered-list` blocks needed: 0 (most), 1 (sec 3 with 3 items, sec 4 with 2 items)
  - `unordered-list` blocks needed: 0 (most), 1 (sec 6 with 4 items, sec 8 with 4 items)
  - `subheading-h5` blocks needed: 0 (most), 1 (sec 8 only)
- **`image` (image_picker):** required in all 10. 1:1 ratio, border-radius 20 px is universal (`b00:8458`).
- **`video` (video file picker):** present in 2/10 (Sections 4, 5). Optional. When provided, render `<video>` instead of `<img>` per Horizon section convention.
- **`image_alt` (text):** required for accessibility (all 10 source instances are missing alt — that's a defect we don't clone).
- **`cta_label` (text) + `cta_link` (url):** present in 3/10 (Sections 4, 5, 13). Optional.
- **`heading_strong_color` (color):** Pink `#FF7E97` for `<strong>` accents inside heading and subheading. Present in all heading-bearing instances. Use the global `--bq-accent` token.

## Variants (section-level toggles)

- **Image position toggle:** `img-left` modifier on `.img-with-txt-keeper` flips order to image-left, text-right. 4/10 instances use it (Sections 3, 5, 13, 15-pt1). Default is image-right.
- **Background variant:** four distinct visual treatments observed:
  1. **Linear gradient pink → off-white:** `custom-gradiant-industry` (Section 2 only). Linear-gradient(180deg, #FFE9ED 0%, #F6F8F9 100%).
  2. **Solid soft blue-grey:** color-scheme `4e3f3173` solid `#F6F8F9` (Sections 3, 4 — though Section 4 also adds `root-cases-technology` decorative pseudo on top).
  3. **Default pink-tinted (color-scheme-1):** Sections 5, 6, 7, 8, 9, 10, 13. Custom-properties from color-scheme-1 (need to read its values; likely soft pink/cream).
  4. **Dark variant:** `high-demand-selling-october` (Section 13 only) — black background with white text + pink CTA. Per b00:8087 onwards.
- **Decorative `:after` pseudo image:** present in 2/10 — `custom-gradiant-industry:after` (`11_5.png`, Section 2) and `root-cases-technology:after` (`11_6.png`, Section 4). Both 200×255 px, top-left, hidden on ≤991 px. Schema toggle: `decorative_top_left_image` (image_picker, optional).
- **Section padding (top/bottom inline):** varies per instance: 30/10, 10/10, 10/30, 30/30, 10/30, 20/10, 10/20, 10/20, 20/20, 20/20. Schema: per-section `padding_top` + `padding_bottom` range settings.
- **Color scheme:** the section's `color-scheme-…` class drives background + foreground colors via CSS custom properties. Schema must expose either (a) explicit color settings (bg, text, heading, accent) or (b) a select for predefined color schemes ("light", "dark", "industry-gradient", "soft-blue").
- **Custom modifier classes:** the per-instance modifier classes (`custom-gradiant-industry`, `root-cases-technology`, `to-help-women`, `high-demand-selling-october`, `founder-bot-paris`, `every-morning-spend`, `tried-everything-class`, `the-problem-born-id`) drive section-specific styling. Most are layout-tweak conveniences (margins, padding, internal grid breakpoints) that the unified `bq-image-text` section can subsume into normal section settings. **Two modifiers carry substantive overrides** that need explicit schema support:
  - `high-demand-selling-october` — dark theme with inverted styling. Schema: `theme: light | dark` select.
  - `founder-bot-paris` — custom `<ul>` with checkmark `:before` pseudo on each `<li>`. Schema: `unordered-list` block needs an optional `style: bullet | checkmark` setting.

## Build-order implications

Per Decisions log 2026-04-27 mid-build workaround:

- **Section 2** (`bq-industry.liquid`) stays as one-off, grandfathered. Already built + committed.
- **Sections 3, 4, 5, 13, 15-pt1..pt7** consolidate into `bq-image-text.liquid`. Build that single section once with the schema above + the variant toggles, then configure each instance via the theme editor.
- The user's pre-audit expectation included **Section 12** (Precision engineering) — but the audit shows Section 12 is NOT image-width-text-sec. It's a `video-with-text-sec` family, requiring its own audit. The decision log entry should be read as "image-text family" = the actual DOM-defined family, not the user's prior estimate.
- The user's pre-audit expectation did NOT include **Section 13** (Urgency) — but it IS image-width-text-sec. Add Section 13 to the consolidated build target, with the dark-theme toggle.

End of audit. Stop.
