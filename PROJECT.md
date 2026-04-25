# PROJECT — Botanique Clone

## Goal
Clone the frontend of botaniqueparis.com (homepage + product page) onto a Shopify store. Visual structure ~1:1 with source. Copy in Italian, written fresh (not translated from source). Migrate to a second Shopify store later as the real homepage.

## Stack
- **Store (staging):** Sartori Milano — admin handle `a9iz0x-ip`, permanent domain `a9iz0x-ip.myshopify.com`, vanity `sartori-milano.it`. Staging only — never publish.
- **Theme:** Horizon, forked from `Shopify/horizon` to `Stevehub99/botanique-horizon`
- **Build approach:** Custom Shopify sections (Liquid + CSS) written by Claude Code agent. No page builder.
- **Repo:** `~/botanique-clone-build/botanique-horizon/`
- **Dev server:** `shopify theme dev --store=a9iz0x-ip.myshopify.com` → `http://127.0.0.1:9292`
- **Tooling:**
  - Shopify CLI (hot-reloads preview on every save)
  - Claude Code (agent runs from inside this repo folder)
  - Shopify AI Toolkit plugin (validates Liquid vs live schema before execution)
  - Frontend-design skill (Anthropic official, invoked per section)

## Source material
All inside this repo at `source/`:
- `source/rendered.html` — full DOM of source homepage
- `source/css/` — all stylesheets (7 external + inline)
- `source/desktop/fullpage-after-scroll.png` — ~90% rendered full-page capture, desktop
- `source/mobile/fullpage-after-scroll.png` — mobile variant
- `source/css-urls.txt` — original stylesheet URLs

Plus manual Chrome full-page screenshots (desktop + mobile) dropped into chat per section.

## Design tokens (inferred from source CSS, confirm as we build)
- Accent pink: `#FF7E97`
- CTA black: `#000000`
- Trust-check green: `#2ED215`
- Body background: `#FAF8F6`
- Testimonial card bg: `#F6EFE8`
- Pink strip bg: `#FFE4EA` (approx)
- Dark section bg: `#0A0A0A`–`#111111`

Tokens live in `assets/tokens.css` loaded from `layout/theme.liquid` so they're shared across sections.

## Homepage section inventory (19 sections)
1. Hero — split: headline/benefits/CTA left, product-use image right
2. "Beauty Industry Profits"-style — text left, image right
3. "Under-eye aging causes" — image left, text right, numbered list
4. "Dual-technology" — text left, image right, numbered list + CTA + badges
5. Brand mission — image + text, before/after imagery
6. Results timeline — alternating cards + central pink line (animated)
7. Science stats bar — 4 big percentages (91/87/35/94)
8. Medical-grade / FDA-cleared — dark bg, checkmark bullets
9. "How to Use" 3-step — pink bg, three usage images
10. Comparison grid — product vs other treatments
11. Promise icon row — 6 icons
12. Precision engineering — dark bg, product video + feature icons
13. Urgency banner — dark
14. Customer testimonials — dark bg, cards
15. Founder story — image + long narrative
16. Tech specs — dark box + 4 badge icons
17. Product buy block — pink gradient, variants + CTA (scroll-pinned reveal)
18. Stats bar (repeat of #7 — verify)
19. Customer reviews — 4.8 stars, distribution, cards, Load More

Theme-provided (Horizon, not custom): announcement bar, header, footer.

## Build progress
Status: ⬜ not started · 🏗 in progress · ✅ done · ⏭ skipped

| # | Section | Status | Notes |
|---|---------|--------|-------|
| 1 | Hero | ⬜ | |
| 2 | Industry context | ⬜ | |
| 3 | Under-eye causes | ⬜ | |
| 4 | Dual-technology | ⬜ | |
| 5 | Mission | ⬜ | |
| 6 | Results timeline | ⬜ | Animated |
| 7 | Science stats | ⬜ | |
| 8 | Medical-grade / FDA | ⬜ | |
| 9 | How to Use | ⬜ | |
| 10 | Comparison grid | ⬜ | |
| 11 | Promise icons | ⬜ | |
| 12 | Precision engineering | ⬜ | Has video |
| 13 | Urgency banner | ⬜ | |
| 14 | Testimonials | ⬜ | |
| 15 | Founder story | ⬜ | |
| 16 | Tech specs | ⬜ | |
| 17 | Product buy block | ⬜ | Scroll-pinned reveal |
| 18 | Stats bar (repeat?) | ⬜ | |
| 19 | Customer reviews | ⬜ | |

## Flagged items needing user input
- [x] Product name — tokenized via section schema setting `product_name_token` (default "Il Nostro Dispositivo"); change in one place later
- [x] Clinical study percentages — confirmed apply to our product (93/86/89 and 91/87/35/94)
- [x] 365-day guarantee — confirmed, use across sections
- [x] Worldwide express shipping — confirmed, use across sections
- [x] Promo eyebrow — confirmed active (Mother's Day style)
- [ ] Hero images (desktop + mobile) — still needed; exposing as section image picker with placeholder until uploaded

## Decisions log
- 2026-04-24: Theme = Horizon unpublished, not Dawn
- 2026-04-24: Italian copy, written fresh — not translated from source
- 2026-04-24: Stopped iterating capture script at ~90% render; manual Chrome screenshots fill gaps
- 2026-04-24: Store 1 (Sartori Milano) is staging only; store 2 is final home
- 2026-04-24: Initially chose GemPages; hit UX friction after 1 section; switched to custom Liquid sections via Claude Code + Shopify AI Toolkit. GemPages hero abandoned (not deleted).
- 2026-04-24: Product name tokenized via section schema setting `product_name_token` so it can be renamed in one place.
- 2026-04-25: Title-case Italian headlines kept (English-source convention) — aesthetic preference, accepted minor convention deviation.
- 2026-04-25: Switched from screenshot-driven CSS approximation to source-CSS extraction. All section CSS must mirror source CSS values exactly.

## Working protocol (instructions for Claude Code)

### Output style
- Checklists for anything user executes; minimal prose
- No padding, no preamble, ship-focused
- Files > explanations — user reads the code itself

### Per-section workflow
1. User says "Section N"
2. Claude Code produces a SOURCE INVENTORY before any brief is written:
   - Element list from `source/rendered.html` (tag types + class names)
   - Visible structure from `source/crops/` (layout, columns, breakpoints)
   - Behaviors detected (carousels, animations, dynamic media, scroll effects)
   - Asset list (images, video, gifs, fonts)
   - Ambiguity flags
3. Chat-Claude reads the inventory, drafts a brief for the build
4. User approves/adjusts the brief
5. Claude Code builds from the brief
6. User screenshots build (desktop + mobile), drops in chat
7. Chat-Claude diffs vs source, gives revisions
8. Iterate until ≥90% fidelity
9. Mark ✅ in PROJECT.md, commit

### Copy rules
- Italian, written fresh by agent — not translated from source
- Structural beats + factual claims mirrored, phrasing original
- Factual product claims (features, mechanisms, FDA status, clinical %) stated as facts only when user confirms they apply to user's product
- Persuasive copy (headlines, hooks, emotional appeals) original Italian
- Never reproduce source copy verbatim, even translated
- Flag copy that needs to be adapted if user's product differs from source's
- **User-approved copy is immutable.** Once a string appears in PROJECT.md or in a user message, use it verbatim. No paraphrasing, no rewrites. Any deviation must be flagged before applying, not after.

### CSS fidelity
> All visual CSS properties (colors, font sizes, weights, padding, gap, border-radius, line-height, etc.) must be extracted directly from `source/rendered.html` and `source/css/` — not approximated from screenshots. When uncertain, read the source CSS files for the matching class names and replicate values exactly. Update `assets/bq-tokens.css` with any new color or measurement constants discovered during extraction.

### Source-vs-brief conflict resolution
- **Default: source wins.** When the user's brief and `source/rendered.html` + crops disagree on a visual or structural detail, apply the source. Don't silently follow the brief.
- **Before writing code for any section:** read the relevant `source/crops/<section>.png` AND inspect the equivalent subtree in `source/rendered.html`. Identify exact elements, counts, colors, and behaviors.
- **Escalate to user only when:**
  - Source is genuinely ambiguous (multiple variants, animation states, A/B versions)
  - Source can't be cloned for IP/legal reasons (their photos, their brand name)
  - The conflict is on substance, not detail (e.g. structural choices like single card vs carousel — not pixel/color tweaks)
- A detail-level mismatch (color hex, exact pixel value, icon style) is NOT a substance conflict — apply source and move on.

### State persistence
- Update this PROJECT.md directly after each completed section or substantive decision
- Commit to git after every section with message `section N: [name]`
- User pushes to GitHub periodically

### Boundaries
- Never publish the Horizon theme on store 1
- Never modify Horizon core files outside `sections/`, `snippets/`, `assets/`, `blocks/`, `config/` unless explicitly required and approved
- If a Liquid pattern is uncertain, use the Shopify AI Toolkit's validation before writing
