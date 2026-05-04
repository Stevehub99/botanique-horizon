# CLAUDE.md — Botanique Clone (Project-specific overlay)

This file overrides `~/clone-pipeline/CLAUDE.md` where they conflict. Read this FIRST every iteration.

## Project identity

- **Source**: botaniqueparis.com (homepage + product page)
- **Source repo**: `./source/` — `rendered.html`, `css/` (7 stylesheets), `desktop/`, `mobile/`, `crops/`, `css-urls.txt`
- **Target market**: Italy (IT)
- **Target store (staging)**: Sartori Milano — admin handle `a9iz0x-ip`, permanent domain `a9iz0x-ip.myshopify.com`, vanity `sartori-milano.it`
- **Theme**: Horizon, fork at `Stevehub99/botanique-horizon`
- **Dev URL**: `http://127.0.0.1:9292` (Shopify CLI dev server)
- **Section file naming convention**: `bq-` prefix on every custom section (`sections/bq-<name>.liquid`)
- **CSS file naming convention**: matching `assets/bq-<name>.css`

## Build progress at start of autonomous loop

Sections 1–6 closed. Sections 7–19 are stories in `prd.json`. Do NOT touch sections 1–6 unless a story explicitly requires it.

| # | Section | Status |
|---|---|---|
| 1 | Hero | ✅ closed |
| 2 | Industry context | ✅ closed (one-off, grandfathered as `bq-industry.liquid`) |
| 3 | Under-eye causes | ✅ closed (1st instance of `bq-image-text`) |
| 4 | Dual-technology | ✅ closed (2nd instance of `bq-image-text`) |
| 5 | Mission | ✅ closed (3rd instance of `bq-image-text`) |
| 6 | Results timeline | ✅ closed (singleton `bq-results.liquid`) |
| 7–19 | various | see `prd.json` |

## Locked decisions (immutable — do NOT revisit)

These were decided in prior chat sessions and are not open for re-litigation by the loop:

- **Title case in Italian headlines** (user opt-in, deliberate override of IT sentence-case convention). Applies to h1/h2 only.
- **Sentence case for h3 and below** (Italian convention; this is the rule for body and subheadings).
- **Verified badge color**: Twitter blue `#1DA1F2`, NOT green.
- **Section file naming**: `bq-` prefix mandatory on every custom section.
- **Image overlay text**: do NOT recreate as separate text element when source has it burned into a hero GIF/image. Skip it.
- **Inter substitutes circular_stdmedium globally** via `assets/bq-tokens.css` `--bq-font-sans`. Do not load circular_stdmedium.
- **Trust check green**: `#2ED215` for the bq-image-text family trust row. The §6 `bq-results` shipping-list uses different green (`#00AD21`) — do not unify; this is intentional source-fidelity.
- **Image-text family** is the consolidated `bq-image-text.liquid` (instances 3, 4, 5, and pending 12, 15). Schema accretion only. Do not refactor.
- **Avatar letter placeholder** in testimonials: keep as fallback when no image uploaded. Do not remove.
- **Product name**: tokenized via section schema setting `product_name_token`. Default = "Il Nostro Dispositivo". Do not hardcode product names anywhere.
- **Hero/Sec2/Sec3 images**: still placeholder SVGs. Real assets deferred to Phase 2 asset pass. Do not generate AI imagery in the loop.

## Italian copy rules (project-specific overlay)

Layered on top of generic copy rules in `~/clone-pipeline/CLAUDE.md`:

- **Sentence case** for h3 and below.
- **Title case** for h1 and h2 only (user opt-in).
- **Article inside `<strong>`** when sentence-initial (e.g., `<strong>L'industria</strong>` not `L'<strong>industria</strong>`).
- **List structure** mirrors source. **Parallel grammar** across list items (same tense, same person, same construction).
- **Register**: what an Italian skincare-aware reader would see on packaging. Not academic. Not influencer-cringe. Confident, factual, slightly clinical.
- **Tu vs Lei**: use **Tu** by default (DTC convention; younger audience). Source uses informal "you" — Tu maps cleanly.
- **No verbatim translation**. Generate fresh Italian per the rules. Mirror persuasion structure and factual claims, not phrasing.
- **Locked Italian pricing context (immutable)**: filler `1.500€`, surgery `4.000€` and above. Used in §2 already. Do not change.
- **Currency format**: `€` symbol after amount in copy (`1.500€`), comma as decimal separator (`19,99€`), thin-space thousands separator. VAT (IVA) is included in displayed prices per IT B2C law.
- **Trust badges (IT-relevant)**: Pagamento sicuro · Reso gratuito · Spedizione tracciata.

## Pre-confirmed factual claims (do NOT escalate these)

These claims have been confirmed by the user as applying to our product. Use them in copy without asking:

- Clinical study percentages: **91% / 87% / 35% / 94%** (used in §7 and §18 stats sections)
- Clinical study percentages: **93% / 86% / 89%** (used elsewhere; verify which section)
- **365-day money-back guarantee** (`Garanzia soddisfatti o rimborsati 365 giorni`)
- **Worldwide express shipping** (IT-localized: `Spedizione express in tutto il mondo` — but for IT-market default-frame as `Spedizione gratuita in Italia` where context allows)
- **Promo eyebrow active** (Mother's Day style banner; IT equivalent: `Festa della Mamma` / generic seasonal hook)

If a NEW factual claim appears in the source for §7–19 that is not on this list, **escalate via stop condition #2**.

## Regulatory substitution rules

Source uses US regulatory framing (FDA-cleared, NASA-developed, etc.). For IT market, substitute as follows during build. Verifiability is deferred to a post-build legal pass — do not block on it.

| Source claim | IT-market substitute |
|---|---|
| FDA-cleared / FDA-approved | `Tecnologia certificata CE` (CE-marked; standard EU medical-device equivalent) |
| FDA-cleared safety | `Sicurezza certificata secondo gli standard europei` |
| NASA-developed (red light) | `Sviluppata in collaborazione con la ricerca aerospaziale` (preserves authority, drops trademark) |
| Medical-grade | `Tecnologia di grado medico` (direct calque, accepted in IT skincare register) |
| Dermatologist-tested | `Testato dermatologicamente` (standard IT cosmetic claim) |
| Made in USA | drop entirely; do NOT substitute "Made in Italy" unless user confirms |
| FDA-registered facility | drop; substitute `Prodotto in stabilimento certificato secondo gli standard europei` only if needed for trust framing |

## Founder identity (§15)

- Copy 1:1 from source narrative arc.
- Tweak only when a specific reference makes no sense for an IT reader (e.g., a US college name, a US clinic chain, a US TV reference). Substitute with a plausible IT equivalent (e.g., a major Milan dermatology clinic name — pick one and document in `progress.txt`).
- Locations: substitute US cities → IT equivalents (NYC → Milan, LA → Rome, Florida → Sicily/coastal).
- Names: substitute English first names → IT first names; preserve gender and approximate generation.

## §17 Buy block

- **Build visual structure only.** Do not wire real product variants, real pricing, real cart functionality.
- Use Shopify variant stub data: 1 product with 2–3 variants, placeholder pricing.
- Real variant/inventory wiring is deferred to migration to the production store.
- Mark story `passing-with-stubs` when visual structure is complete and gates pass.

## §19 Reviews

- Disposition: APP-INSTALL.
- Do NOT build a custom reviews section.
- Leave a placeholder block in `templates/index.json` with `"comment": "App install slot for reviews — Judge.me / Loox / Yotpo / Stamped (TBD)"`.
- Mark story `deferred-app-install` and exit.

## Pre-classified explicable residuals (skip these in verification)

When probe-diff or vision judge surfaces these, treat as expected, not failures:

1. **Font substitution**: Inter where source has circular_stdmedium. Letter-spacing, line-height may differ by 1–3px. Not a regression.
2. **Asset URL host**: source uses `botaniqueparis.com/cdn/shop/...`, ours uses local Shopify CDN. URL diff is expected.
3. **Italian copy length**: many strings are 10–30% longer in IT. Resulting flex-wrap or stacking changes are expected on mobile (and were specifically addressed in §3 with a 24px margin-bottom fix on photo column).
4. **Deliberate source-bug fixes**: e.g., §6's `height: 95%` clobbering the dynamic `--timeline-progress` var. We dropped the bug. Visible animation difference vs. source is intentional.
5. **DOM cosmetic class differences**: source uses Shopify-template-generated class names (`grun-stat-number-template--19760795549861__number_text_xN99Jq`), ours uses `bq-` namespaced classes. Not a regression.

## Theme editor / templates/index.json sync (CRITICAL)

- `templates/index.json` is source of truth for homepage section placement.
- The theme editor on Shopify maintains its own runtime state, NOT auto-synced.
- **Before any edit to `templates/index.json`**, the agent runs `shopify theme pull` first to capture editor state into the file. Skipping this erases editor-only settings.
- Image uploads happen via theme editor (no other practical path). Immediately after any image upload (manual user step outside the loop), run `shopify theme pull` and commit the diff.

## Files / directories the loop should know about

- `source/rendered.html` — full source DOM
- `source/css/` — 7 source stylesheets
- `source/crops/` — pre-cropped section screenshots (per-section)
- `inventories/section-NN-<name>.md` — per-section inventories (1–6 exist; 7–19 will be produced by the loop)
- `sections/bq-*.liquid` — custom section files
- `assets/bq-*.css` — matching CSS
- `assets/bq-tokens.css` — global tokens, font, shared utilities
- `snippets/stylesheets.liquid` — wires global styles
- `templates/index.json` — homepage section placement
- `lib/probe-diff.js` — visual fidelity oracle (pre-existing)

## What this project is NOT

- Not a screenshot-driven build. Inventories drive builds. Diffs gate verification.
- Not optimizing for cross-project section reuse. Block schemas are designed only for what we observe in this build. Future Botanique-style clones are fresh builds that reference this site as a template, not a library.
- Not a literal translation project. Italian is generated fresh from rules, not translated.

## Hardened rules acknowledgement (added 2026-05-01)

This project's loop now operates under the hardened generic rules added to `~/clone-pipeline/CLAUDE.md`:

- **G-1**: prove-changes gate (git diff required before marking passing)
- **G-2**: auth/infra failure = immediate `blocked-needs-human` (no grinding)
- **G-3**: vision_judge runs unconditionally when probe_diff unavailable

These rules override prior project-specific instructions where they conflict.

### Project-specific image classification (added 2026-05-01)

For Botanique specifically, every section iteration must classify each `<img>` and `<video>` reference at inventory time. Acceptable types and required actions:

| Type | Description | Required action |
|---|---|---|
| `PRODUCT` | Product photography (the device itself, packaging, product-on-white) | placeholder SVG; defer to Phase 2 asset audit |
| `UGC` | User/customer photography, founder portrait, lifestyle photo with model's face | placeholder SVG; defer to Phase 2 |
| `BURNED-IN-TEXT` | Image with rendered text inside it (badges, before/after labels, FAQ collages) | regenerate with our copy via Phase 2; placeholder SVG meanwhile |
| `DECORATIVE` | Generic illustration, abstract pattern, dashed line, gradient, icon | source CDN steal allowed |
| `STOCK-LIFESTYLE` | Generic stock-style imagery (no identifiable person, generic skincare context) | placeholder SVG; defer to Phase 2 |

When in doubt between `DECORATIVE` and any other class: choose the other class. False placeholders are recoverable; false CDN steals are project rule violations.

### §13b story added 2026-05-01

A new story `section-13b-here-is-the-problem` was added to prd.json. It sits between §15 founder-story and §16 tech-specs in source DOM order. Build as singleton `bq-here-is-problem.liquid` with ALL text exposed via schema settings (no hardcoded copy in Liquid). Italian copy: 1:1 narrative beat from source, US-specific references swapped for IT equivalents.

### Brand name substitution rule (added 2026-05-01)

If source copy contains the source brand name ("Botanique Paris", "Botanique", "Botaniqueparis", etc.) anywhere — headlines, body copy, comparison grid, image alt text — substitute with `{{ section.settings.product_name_token | default: 'Il Nostro Dispositivo' }}` (or block-level equivalent). Never hardcode the source brand. Never invent a new brand name (e.g., "Lumière Paris" was an invention violation in §12 and §15 — these are forbidden).

When source copy has no brand reference (just generic product/category language): no substitution needed; render as-is in Italian.

## Search-first rules (added 2026-05-04)

**Search applies to repo structure, not just contents.** Before reasoning about what documents exist, what folders are organized how, or what the architecture looks like, search project knowledge or list the repo. Do not propose creating files that may already exist. Do not draft "best practice" structures from generic web search before checking what is actually present in this repo.

**Search applies to settings I cannot read directly.** Profile preferences and project Custom instructions are not visible to me through search. Before drafting replacements for them, ask the user to paste current contents and merge — never replace blindly.
