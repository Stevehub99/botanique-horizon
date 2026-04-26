# HANDOFF — Botanique Clone, end of chat session 2026-04-25

## Purpose
This file captures context from the prior chat session that isn't already in PROJECT.md. Read after PROJECT.md.

## Section 1 status
🏗 In progress, ~90% fidelity. Several rounds of iteration completed; closing items below.

### What's built
- `sections/bq-hero.liquid` — full hero with two-line headline, subhead, 3 bullets, CTA, trust row, testimonial carousel (5 blocks)
- `assets/bq-tokens.css` — global tokens, font, shared utilities
- `snippets/stylesheets.liquid` — wires bq-tokens.css globally
- 5 testimonial blocks seeded as defaults in the section preset
- Source-extraction pass complete: CTA square corners, testimonial card black border, stars pink, avatar 80px, font swapped to Inter 500/700

Section 1 closed 2026-04-25. Hero video/image asset and theme announcement bar deferred to next phase.

### Workflow correction (CRITICAL — apply going forward)
Earlier rounds were screenshot-driven, which produced approximations and missed JS behavior. New rule (now in PROJECT.md):

> **Structural diff before "done." For each section, after building, Claude Code produces:**
> - **Source HTML element tree (relevant section) vs ours**
> - **Source CSS rules touching the section vs ours**
> - **Source JS behaviors on the section vs ours**
> - **List of remaining differences**
>
> The user reviews this report, not screenshots, before approving the section.

## Decisions made

### Title-case in Italian headlines
Keep title case ("Ringiovanisci il Tuo Sguardo Senza Chirurgia") even though Italian convention is sentence case. User aesthetic preference; English-source style retained as a brand choice.

### Verified badge color
Twitter-blue #1DA1F2 (matches source). Not green.

### Image overlay text
Removed entirely. There is NO HTML overlay element in source — the text "Lift. Tighten. Define." / "No surgery required" / "Fix hooded eyes" is burned into the source's hero GIF asset. Don't recreate it as a separate text element.

### Hero images
Placeholder grey/uploaded images for now. Real assets deferred to Phase 2 (asset-replacement pass after structural build is done). AI image gen pipeline (Runway / KIE / similar) for licensed equivalents is a separate workstream.

### Animations
Per-section, included where source has them. Not a separate pass. Section 1 has no animations; section 6 (results timeline) has the animated central pink line.

### Avatar letter placeholder in testimonials
Kept as a fallback (renders first letter of name when no image uploaded). Goes away when real avatar uploaded.

### Section file naming
All custom sections prefixed `bq-` to avoid collision with Horizon's stock sections (Horizon ships its own `sections/hero.liquid`).

## Standing rules (decided in chat, mirrored in PROJECT.md)

1. **Source wins.** When brief and source disagree on visual or structural details, source wins by default. Claude Code applies the source. Escalate only when source is genuinely ambiguous (multiple variants, animations, A/B states), source can't be cloned for IP/legal (their photos, brand name), or the conflict is on substance not detail.

2. **CSS fidelity.** All visual properties (color, font size, weight, padding, gap, border-radius, line-height) extracted from source CSS, not approximated from screenshots.

3. **Copy fidelity.** User-approved copy is immutable. Do not rewrite, paraphrase, or swap approved strings.

4. **Italian convention vs source convention.** Structure + visuals: clone source. Content language: respect Italian conventions UNLESS user has explicitly opted into source convention (e.g., title case in headlines = user opt-in).

5. **Inspection-first per-section workflow.** Before any brief is written, Claude Code produces a SOURCE INVENTORY (HTML element tree, CSS rules, JS behaviors, font-family, asset list, ambiguity flags). Chat-Claude drafts brief from inventory, user approves, then build.

6. **Structural diff before "done."** See above.

7. **Per-section structural mirror.** Extract HTML tree shape + CSS + JS behavior + font-family in one pass per section. Do not iterate fragment-by-fragment.

## Standing rules — triangulation (added 2026-04-25 after Section 1)

8. **Triangulation before build.** Three sources must agree before code is written for any section: HTML at source/rendered.html (actual elements, classes, attributes), CSS at source/css/ (rules and computed values), Render at source/crops/ (measured pixel dimensions and aspect ratios). Any disagreement is flagged in the inventory and resolved or escalated to user before any Liquid is written. Static CSS values that don't match rendered output mean source has a runtime override that must be found, not approximated.

9. **Behavioral check separate from visual.** JS init configs extracted from rendered.html. Behavior verified against source's live page for autoplay, transitions, hover effects, scroll triggers. Behavior gets its own verification step, parallel to the visual triangulation.

10. **Computed-style read for unresolvable properties.** When static CSS extraction returns "CANNOT DETERMINE" for a property (theme defaults, custom property cascades), Claude Code reads computed styles from source's live page (via headless browser or curl plus style block parsing) rather than guessing. No "reasonable default" substitutions.

## Italian copy locked for Section 1 (use verbatim)
- Eyebrow: `SALDI FESTA DELLA MAMMA 🎉`
- Headline line 1: `Ringiovanisci il Tuo Sguardo`
- Headline line 2 (accent): `Senza Chirurgia`
- Subhead: `In uno studio clinico di 12 settimane, le donne che hanno usato {product} hanno dichiarato:` (where `{product}` token replaced via schema setting `product_name_token`; default "Il Nostro Dispositivo")
- Bullet 1: `93% di riduzione visibile del gonfiore`
- Bullet 2: `86% sguardo più luminoso, meno incavato`
- Bullet 3: `89% di miglioramento su rughe e linee sottili`
- CTA: `RINGIOVANISCI LO SGUARDO`
- Trust 1: `Garanzia 365 giorni soddisfatti o rimborsati`
- Trust 2: `Spedizione espressa in tutto il mondo`

### Testimonials (5 seeded as default blocks)
1. Giulia M. — `La combinazione di luce rossa ed EMS si sente davvero al lavoro sui muscoli. Dopo due settimane il contorno occhi è visibilmente più tonico. Ottima qualità costruttiva.`
2. Aurora B. — `Non credevo ai risultati nelle foto prima/dopo, poi l'ho provato. Ora le occhiaie che avevo da anni sono davvero meno visibili.`
3. Chiara V. — `Dopo 3 settimane di uso quotidiano lo sguardo è decisamente più fresco. Mi fa risparmiare i filler, valeva ogni centesimo.`
4. Martina D. — `Non avevo grandi aspettative, invece funziona. Lo uso la mattina mentre bevo il caffè.`
5. Sofia R. — `Palpebre più tese e borse ridotte. Mia sorella mi ha chiesto subito dove l'avevo comprato.`

All verified: true. All stars: 5.

## Tooling state
- Node.js v25.9.0 ✓
- Shopify CLI 3.93.2 ✓
- Claude Code 2.1.72 ✓
- Plugins installed: shopify-plugin (Shopify AI Toolkit), frontend-design ✓
- Repo at `~/botanique-clone-build/botanique-horizon/` ✓
- GitHub fork: `Stevehub99/botanique-horizon` ✓
- Dev server: `shopify theme dev --store=a9iz0x-ip.myshopify.com` running on port 9292 ✓
- Dev theme ID: 195371860308

### Source assets in repo (`source/`)
- `rendered.html` ✓
- `css/` (7 stylesheets) ✓
- `desktop/fullpage-after-scroll.png` ✓
- `mobile/fullpage-after-scroll.png` ✓
- `crops/hero-desktop.png` ✓
- `crops/hero-mobile.png` ✓

### Open flags
- Hero images: still placeholder. Asset pass deferred to Phase 2.
- Product name: tokenized via schema setting `product_name_token`. Default = "Il Nostro Dispositivo". Real name TBD.

## What NOT to redo
- The Italian copy block above is approved verbatim. Don't paraphrase.
- Title case in headlines is approved. Don't switch to sentence case.
- Verified badge color (Twitter-blue) is approved. Don't switch back to green.
- Image overlay text element should NOT exist. Don't recreate it.
- Section file naming convention (`bq-` prefix). Don't drop the prefix.

## Bootstrap prompt for next chat
```
This is the continuation of an in-progress Shopify clone build. Before doing anything else:

1. Read PROJECT.md (in project knowledge) — full project spec
2. Read HANDOFF.md (in project knowledge) — context from prior chat session: decisions made, copy locked, rules, what's done, what's open

Then summarize:
- Where Section 1 stands (5 open items — carousel autoplay/loop, image padding, headline line-height, section padding, structural diff verification)
- The standing rules (source wins, CSS fidelity, copy fidelity, Italian convention vs source convention, inspection-first workflow, structural diff before "done", per-section structural mirror)
- What I should do next

Do not write any code or send any prompts to Claude Code until I confirm the summary is correct.
```
