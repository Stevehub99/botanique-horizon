# HANDOFF — end of session 2026-04-27

## Where we are
- Section 3 (Under-eye causes) closed. Built as the first instance of the consolidated `bq-image-text` section. Italian copy locked in schema defaults. Mobile spacing fix applied (24px margin-bottom on photo column, deliberate deviation from source for longer Italian copy).
- Section 2 (bq-industry) and Section 1 (bq-hero) are now both correctly placed in `templates/index.json` (recovered from editor-only state during this session).
- Build progress: Sections 1, 2, 3 ✅. Section 4 (Dual-technology) is next, second instance of `bq-image-text`.

## Decisions made this session

### Workflow / architecture
- **Family-clustering audit added to working protocol as Step 0** (mandatory for future projects). See PROJECT.md Working protocol + Decisions log entries 2026-04-27.
- **Mid-build refactor to consolidated `bq-image-text` section.** Section 3 forward, the image-text family (10 instances total per audit) consolidates into one configurable section. Schema grows by accretion — only fields the current section needs get added. Empty optional fields collapse via Liquid `{% if %}` guards. Section 2 grandfathered as `bq-industry.liquid`, not retrofitted.
- **Theme editor vs `templates/index.json` sync rule logged** (HANDOFF.md "Theme editor / templates/index.json sync" section). Section placement lives in code; editor-only edits don't count. Run `shopify theme pull` before any code edit to index.json to avoid wiping editor-only settings.

### Process
- **Screenshot pass dropped as a routine step.** User reviews live preview after each build and reports issues in plain language. Screenshots only on demand when user can't easily describe an issue or wants visual confirmation. No capture script needed for now.
- **Italian copy decisions locked as durable rules** (in this session's chat, not yet in PROJECT.md): sentence case for h3 and below; article inside `<strong>` when sentence-initial; list structure mirrors source; parallel grammar across list items; register matches what an Italian skincare-aware reader would see on packaging. NOT YET WRITTEN TO PROJECT.md — user wants to verify the rules work in practice before codifying. Re-evaluate after Section 4 or 5.
- **Cross-project section reuse: explicitly NOT optimizing for it.** Block schema designed only for what we observe in this build. Future funnels are fresh builds that reference this site as a template, not a library.
- **Goal-check meta-rule (chat-Claude side, applied silently):** when facing X-vs-Y choices, ask "what's the actual goal?" and answer it inline. Lock a single version. Only present alternatives when the goal itself requires user judgment. NOT YET WRITTEN TO PROJECT.md, same reason as above.

### Why we clone (clarified)
- Clone goal: validate products against a proven funnel. Source is a known-converting reference, not an aesthetic target.
- Two hard constraints: Italian language/culture (adapt, don't transliterate), and no verbatim copy or source images (IP).
- When source convention conflicts with Italian-native phrasing, default to whichever preserves *funnel mechanics* (the persuasion structure, the conversion trigger). Ship the Italian-native version unless it weakens the sales argument.

## What's in flight / unresolved
- **Italian rules and goal-check meta-rule** are operating informally, not yet committed to PROJECT.md. Decide after Section 4 or 5 whether to codify.
- **Hero image, Section 2 image, Section 3 image** are all placeholder SVGs in the dev preview. Real assets are deferred to Phase 2 asset-replacement pass.
- **Section 12 (Precision engineering)** is NOT in the image-text family — uses `video-with-text-sec`. Will need its own section file when we get there.
- **Section 15 (Founder story)** is structurally 5 image-text instances back-to-back (`founder-pt1` through `pt7`, gaps at pt4/pt5). When we hit it, configure 5 instances of bq-image-text consecutively rather than building a wrapper.

## Files touched this session
- `inventories/section-03-causes.md` (new)
- `inventories/family-audit-image-text.md` (new — image-text family, 10 instances)
- `sections/bq-image-text.liquid` (new)
- `assets/bq-image-text.css` (new)
- `assets/bq-industry.css` (mobile spacing fix)
- `templates/index.json` (added bq-hero, bq-industry, bq-image-text-causes; removed stock hero and stock product list)
- `PROJECT.md` (Step 0 audit policy in Working protocol; 2026-04-27 entries in Decisions log; Build progress notes annotations)
- `HANDOFF.md` (Theme editor / index.json sync section + this end-of-session block)

## Next session entry point
Section 4 — Dual-technology. Image-right, text-left, has h2 (likely), h3, ol, CTA, trust-row. Will be second instance of `bq-image-text`, requiring schema additions for CTA + trust-row + maybe h2. Start with: inventory prompt for Claude Code per Standing Rule 5.

---

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

### Rule 11: Source-of-truth access

Project knowledge is synced from GitHub. Chat-Claude reads inventories, source/css/, source/rendered.html, PROJECT.md, HANDOFF.md, and current Liquid/CSS via project_knowledge_search — not via paste.

After every Claude Code run that writes files:

1. User: git push

2. User: click "Sync now" in project files block

3. Chat-Claude has current state next message

Screenshots (live preview + source crops PNGs) are NOT synced — user still drops these in chat as needed.

## Theme editor / templates/index.json sync

`templates/index.json` is the source of truth for homepage section placement and settings. The theme editor maintains its own runtime state on Shopify's servers; the two are NOT auto-synced.

### Rules

- Section placement (which sections appear, in what order) lives in `templates/index.json`, edited in code. Theme-editor placement changes don't count as committed work.
- Section settings edited via the theme editor (image picks, color overrides, any field) are stored in the editor's runtime only until pulled. They will be overwritten the next time `templates/index.json` is edited locally and the dev theme syncs from disk.
- Before ANY edit to `templates/index.json` (by Claude Code or by hand), run `shopify theme pull` first to capture editor-state into the file. Skipping this step erases editor-only settings.
- Image uploads only happen via the theme editor (no other practical option for picking from Shopify's media library). Immediately after uploading, run `shopify theme pull` and commit the resulting `index.json` diff. Treat image uploads as code changes.

### Drift check

To verify editor and git are in sync at any moment:

1. `shopify theme pull` (pulls editor state to disk)
2. `git status` / `git diff templates/index.json`
3. If there's a diff, the editor had unsaved-to-git state. Decide whether to commit it (preserve editor changes) or revert (preserve git as source of truth).

### Project status: when this rule was missed

- 2026-04-25/26: Section 1 (`bq-hero`) and Section 2 (`bq-industry`) were added via the theme editor, never made it into `index.json`. Discovered during Section 3 build (2026-04-27) when Claude Code reported only the stock Horizon hero in the template.
- 2026-04-27: Both sections were added to `index.json` via Claude Code edits. Their image settings (placeholder uploads) were lost in the process. Acceptable because images were placeholders; would have been a real problem if they'd been final assets.

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

## Italian copy locked for Section 2 (use verbatim)
- Headline (h2): `Come l'Industria della Bellezza Sfrutta l'Insicurezza Più Profonda delle Donne` — pink-strong span: `Industria della Bellezza`
- Subheading (h3): `L'industria della bellezza lo sa: borse e occhiaie sono tra le insicurezze più radicate di ogni donna.` — pink-strong span: `insicurezze più radicate di ogni donna.`
- Body (single `<p>`, `<br><br>` between beats, no `<strong>`): `Così ci ha costruito sopra un modello di business. Ti vendono creme che non penetrano abbastanza in profondità per agire davvero, ti danno giusto la speranza necessaria per farti continuare a comprare, e quando finalmente stai per arrenderti…<br><br>Ti spingono verso filler da 1.500€ o interventi chirurgici da 4.000€ e oltre. Non si tratta di risolvere il tuo problema. Si tratta di spremerti fino all'ultimo euro mentre sei vulnerabile.`
- Image alt: `Donna che si specchia con sguardo pensieroso, espressione di insicurezza`

Italian aesthetic-medicine pricing (1.500€ filler / 4.000€ surgery) confirmed realistic for IT market.

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

## Lessons from Section 6

1. **Diagnose with DOM probes, not screenshots.** When the user reports a visual issue, ask Claude Code to measure (computed styles, bounding boxes, element accounting) before proposing a fix. Screenshots imply the problem; probes prove it.

2. **Italian copy length breaks mobile layouts in non-obvious ways.** Source's English may fit on one line where Italian wraps. This causes flex-wrap, empty-rectangle artifacts, height overages. Test mobile with the longest plausible Italian string before declaring a section done.

3. **3-attempt diagnostic ceiling.** If 3 fixes haven't closed a single visual issue, the diagnosis is wrong. Stop fixing, run a full DOM probe, re-diagnose. Section 6 had 4 wrong diagnoses (Italian copy, Horizon `.card` collision, image presence, flex-wrap behavior) — each cost an iteration.

## Workflow rules from Section 6 retrospective

These rules emerged from Section 6's polish-spiral. Apply throughout subsequent sections.

### For chat-Claude

1. **Diagnose with data, not theories.** When a fix fails, the next message asks Claude Code for measurements (DOM probe, computed styles, bounding boxes), not another speculative fix. Theory follows data.

2. **3-attempt diagnostic ceiling per visual issue.** After 3 fix attempts on the same issue, stop fixing. Run a full DOM probe. Re-diagnose from scratch. The mental model is wrong — don't keep iterating on it.

3. **Italian mobile pre-check at build time.** Before declaring a section done, render at mobile 390px with the actual Italian copy, measure every element whose source counterpart had English copy. Flag any width overage >20% as a layout risk. Catch flex-wrap and overflow at build, not in user reports.

4. **Goal-check at decision points.** Before any fix attempt, ask: does this advance "shipped clone" more than moving to the next section? Section 6's last 30% of polish cost more than the first 90%. Marginal returns matter.

5. **Route visual-fidelity issues to Claude Code, not chat.** When user reports a visual issue, prompt Claude Code to "diagnose then propose," not propose CSS from a screenshot. CSS forensics from screenshots is wrong by construction.

### For user

1. State the goal, not the tactic. "Match source" not "add 12px gap."
2. Set a section budget upfront. Time or quality threshold.
3. Push back early. 2-3 attempts that feel wrong = say so immediately.
4. One issue per message when possible.
5. Trust your eye over Claude's data when they conflict.
<!--
APPEND THIS BLOCK TO THE EXISTING HANDOFF.md.

Add it at the top (after the file header / purpose section, before the existing 2026-04-25 and 2026-04-27 blocks). HANDOFF.md is reverse-chronological — newest entries first.

Do NOT replace existing content. Insert only.
-->

# HANDOFF — start of autonomous-loop era 2026-04-29

## Purpose
This block documents the workflow change from interactive per-section chat-Claude approval to autonomous Ralph-loop iterations. Sections 1–6 closed under the old workflow; sections 7–19 will close under the new one.

## What changed

### Before this session
Per-section workflow: user says "Section N" → chat-Claude prompts Claude Code for inventory → user approves inventory → chat-Claude drafts brief → Claude Code builds → user previews → chat-Claude diffs → iterate. Each section took multiple back-and-forths in chat.

### After this session
Per-section workflow: ralph.sh picks next pending story from `prd.json` → spawns fresh `claude --print --dangerously-skip-permissions` with section-build prompt → fresh-context Claude reads `CLAUDE.md` (project) + `~/clone-pipeline/CLAUDE.md` (generic) + the story → executes inventory + localize + build + push + verify + commit autonomously → exits. Loop spawns next iteration. Continues until all stories pass or 2 consecutive sections hit the ceiling.

User involvement: launch the loop, check `progress.txt` periodically, resolve blockers when the loop auto-pauses. No per-section approvals.

## Why
- 13 sections remaining (§7–19); manual workflow estimated 2–3 batched sessions. Loop estimated to close most autonomously with periodic check-ins.
- Multiple clones planned (US → EU brand migrations); the generic scaffold at `~/clone-pipeline/` is the durable asset. Botanique becomes the first project that runs through the pipeline; next clone (1 week to 1 month gap) starts from a `cp -r` of the scaffold.
- Research output (project knowledge artifact, 2026-04-29) identified the closest off-the-shelf pattern (Ralph) and the right additions for this stack: Shopify AI Toolkit (released 2026-04-09), Playwright CLI+Skill (4× more token-efficient than MCP), Opus 4.7 vision judge as second-pass on probe-diff failures.

## What's installed / scaffolded

### Generic scaffold (`~/clone-pipeline/`)
- `CLAUDE.md` — generic master autonomy instructions
- `SETUP.md` — Day-1 install checklist
- `ralph.sh` — the loop runner with iteration ceilings, consecutive-failure auto-pause, per-iteration timeout
- `prompts/section-build.md` — iteration prompt template
- `skills/clone-website/` — JCodesMore `/clone-website` skill (for the *next* clone's recon phase; not used on Botanique since inventories §1–6 already exist hand-rolled)

### Project overlay (`./` = `~/botanique-clone-build/botanique-horizon/`)
- `CLAUDE.md` — project-specific overlay (locked decisions, IT rules, regulatory substitution table, founder identity strategy, §17/§19 specifics)
- `prd.json` — 13 stories (§7–§19) with disposition + acceptance criteria + Italian copy hints + iteration tracking
- `progress.txt` — empty initially; loop appends after each iteration
- `.ralph/` (gitignored) — loop state directory with failure-log.txt and per-iteration logs

### Plugins / skills installed in Claude Code
- `shopify-plugin@shopify-ai-toolkit` (Liquid validation, GraphQL, `shopify store execute`)
- `@playwright/skill` (preferred over `@playwright/mcp` for token efficiency)
- `JCodesMore/ai-website-cloner-template` (for next clone, not Botanique)

## What did NOT change
- Sections 1–6 stay closed and untouched. Loop only governs §7–19.
- All Standing Rules (1–11) remain in force inside the loop.
- All locked decisions (title case, verified badge color, font sub, file naming, hero placeholders) remain locked. Loop reads them from `CLAUDE.md`.
- All pre-confirmed factual claims (91/87/35/94, 93/86/89, 365-day, express shipping, promo eyebrow) remain pre-confirmed. Loop never asks.
- Italian copy rules (sentence case h3+, title case h1/h2, Tu form, parallel grammar, packaging-aware register, locked pricing context) remain in force.
- Source-of-truth flow: GitHub repo → Claude.ai project knowledge sync. Loop commits + pushes after every passing story; user runs Sync now in Claude.ai when checking progress.

## Smoke test before unattended launch
Run `~/clone-pipeline/ralph.sh --max-stories 1 --only section-13-urgency --debug` against the dev server to verify the full pipeline works end-to-end on the smallest section before committing to an unattended overnight run. See `~/clone-pipeline/SETUP.md` Step 6.

## When the loop auto-pauses
Check in this order:
1. `cat progress.txt | tail -n 20` — last few iteration outcomes
2. `cat .ralph/failure-log.txt` — failure modes
3. `python3 -c "import json; print(json.dumps(json.load(open('prd.json'))['stories'], indent=2))" | grep -A1 '"status":' | grep -v pending` — non-pending stories
4. Resolve the blocker (usually: missing context in CLAUDE.md, wrong acceptance threshold for that section, or genuine project decision needed)
5. Set the blocked story's `status` back to `pending` in prd.json
6. Re-run `~/clone-pipeline/ralph.sh` (idempotent; resumes from where it stopped)

## Things to watch for in early runs
- **Italian mobile pre-check failures** (longer copy → flex-wrap regressions). Project Lesson 2 from §6 retrospective. Loop should catch this via Playwright mobile screenshot + probe-diff at 390px, but the threshold may need tuning per section.
- **Shopify theme push race conditions**. If `shopify theme dev` is running while the loop pushes, occasionally the dev preview lags 5–10s behind the push. Build a small wait before Playwright capture.
- **Loop tries to `pull` first**: per project rule, before any `templates/index.json` edit, `shopify theme pull` runs. The loop should respect this; verify in iter logs that pulls happen before edits.
- **Vision judge false APPROVE**: Opus 4.7 is strong but not perfect. If a passed section visibly looks wrong, mark the story `pending` again, add a note to `progress.txt` describing the regression the judge missed, and re-run. The next iteration's prompt includes the failure context.

## Decisions confirmed in 2026-04-29 chat (locked here for posterity)
- **Run mode**: tmux/background, NOT supervised foreground.
- **Scaffold scope**: generic `~/clone-pipeline/`, NOT Botanique-only.
- **Italian copy autonomy**: agent generates fresh per locked rules; user does NOT approve per-section copy.
- **Founder identity**: copy 1:1, tweak only US-specific references that don't make sense for IT reader.
- **§17 buy block**: visual structure only; variants/inventory deferred to migration.
- **§19 reviews**: skip; placeholder slot for app install later.
- **Regulatory substitution**: FDA → CE-marked during build; verifiability check post-build.

## Next session entry point
- Verify smoke test passed (`progress.txt` should have one entry, `prd.json` should have `section-13-urgency.status == "passing"`).
- Launch unattended loop in tmux per `SETUP.md` Step 7.
- Check in periodically (every few hours) on `progress.txt`.
- Resolve any auto-pauses per "When the loop auto-pauses" section above.

---
