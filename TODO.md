# Botanique Clone — TODO

Living document. Maintained across sessions. Last updated: 2026-05-01.

## Active track

**Bucket A + C visual fixes** — working through `fix-plan/FIX-PLAN.md` section by section. Currently stuck on §7 (iter 4 timed out at 30min wall clock).

## Phase 2 — Asset audit (deferred until structural clone closes)

Replace placeholder SVGs and source-CDN-stolen product imagery with original generated assets. Decision logged 2026-05-01: do this AFTER all Bucket A+C visual fixes close, NOT inline during section build.

Scope:
- All product imagery currently using placeholder SVGs OR source CDN URLs (audit needed across §1, §3, §4, §5, §9, §13, §15, §17 minimum)
- Hero / lifestyle photography
- "How to use" step images (§9 — currently using source UGC)
- Founder photo (§15 — currently source's "Sophie / Botanique Paris")
- Testimonial cards if any contain person photos
- Decorative dashed lines, decorative SVGs from source CDN can stay (generic, not product imagery)
- Videos in §12 / §17 — likely manual film + stock-source rather than AI-generate

Pipeline (to build when ready):
1. Asset inventory script — walks all `bq-*.liquid`, classifies each img/video
2. Per-asset prompt generation — preserves source vibe (palette, composition, subject) without mimicking specific photo
3. Batch generation — Flux 2 Pro for hero/lifestyle, Ideogram v3 for in-image text, Seedream Lite for batch
4. Validation pass — Claude vision: "preserves intent, not mistakable for source"
5. Replace + commit

Goal frame: NOT "as identical as legally possible." That creates brand-confusion risk. Match category + vibe, build OUR brand identity.

Estimated cost: $5-20 in image API spend per clone.

## Phase 3 — Schema discipline refactor (deferred until before NEXT clone)

Current Botanique sections have hardcoded copy in Liquid files. User decided 2026-04-30 to ship Botanique as-is and refactor schemas only before next clone uses these as templates.

Scope: §1-§18 all need schema refactor. Every text node, image, color, link, numeric value → schema setting. Default values populated with current locked Italian copy.

Recipe: agent walks each `bq-*.liquid` file, identifies hardcoded values, lifts each to a schema setting with the current value as default. Section behavior unchanged; theme editor becomes fully editable.

NOT blocking publish-readiness. Blocking: next clone using these as portable templates.

## Phase 4 — Workflow rules update (before next clone)

Updates to `~/clone-pipeline/CLAUDE.md` (the GENERIC scaffold, reused across clones):

1. **No invented brand names ever.** Brand references must use `product_name_token` or be on `pre_confirmed_brand_names` list. Else escalate. (Caused §12 "Lumière Paris" incident.)
2. **No source product imagery ever.** Promote to top-level "absolute prohibitions." (Caused §9 / §13 / §15 violations.)
3. **Schema discipline standard.** Every text/image/color/link/number = schema setting. Default values populated. (Caused §13 first round + every subsequent section.)
4. **Section ordering from source DOM, not prd.json priority.** Priority is build-order; display-order comes from source DOM. (Caused §14 ordering issue.)
5. **Native-first audit.** Before custom-build, check `sections/` and `blocks/` for native primitives. Use + style overlay if found. (Caused §17 reinventing `featured-product.liquid`.)
6. **Style overrides as siblings, not modifications.** Never edit native section files; write `bq-<section>-overrides.css`.
7. **Tighter acceptance gates.** Probe-diff threshold halved. Vision-judge mandatory on every section, not optional. Computed-style match required on extended property list (font-weight, text-transform, vertical-align, z-index, white-space).
8. **Schema-portable as acceptance criterion.** Vision-judge prompt: "Can a non-developer change every visible text/image/color via theme editor schema settings?" If no, fail.
9. **Forbid "already done" escape route.** Agent cannot mark a story passing without showing concrete code changes in the iteration's git diff. (Caused §7 iter 3 incident.)
10. **Bundle/discount logic = APP-INSTALL by default.** Same pattern as §19 reviews.
11. **Test product creation early.** Loop should not assume products exist; create stub via Shopify Admin API or mark `passing-with-stubs`.

## Open questions / pending decisions

- §17 buy block cleanup: replace custom file with native `featured-product.liquid` + style overrides. Blocked on having products in Shopify admin (test product created 2026-04-30, can proceed when needed).
- §19 reviews: app install. User said any app fine; will install themselves later.
- Bundle section near §17: app install, user will pick (Shopify Bundles / Frequently Bought Together / Bundler / etc.).
- §13b new section ("Here's the Problem" missing beat): drafted in FIX-PLAN.md, not yet executed.
- Real product variants/inventory wiring: deferred to migration to production store.

## Resolved decisions log

- 2026-04-29: Adopted Ralph autonomous loop for §7-§19. Generic scaffold at `~/clone-pipeline/`, project overlay in project repo.
- 2026-04-30: User reviewed overnight loop output via PDF (16+ findings). Decided to ship Botanique with Bucket A+C fixes; schemas refactor deferred to Phase 3.
- 2026-04-30: Test product "Il Nostro Dispositivo" created via Shopify Admin API (gid: 15395274850644).
- 2026-05-01: Asset generation deferred to Phase 2 (post-structural-clone). Goal frame: category + vibe match, NOT mistakable-for-source identity.
- 2026-05-01: TODO file established as living document maintained across sessions.

## Known loop failure modes (for next clone's CLAUDE.md hardening)

- **"Already done" rubber-stamping**: agent reads existing files, decides no work needed, flips status flag without code changes. Mitigation in CLAUDE.md rule 9 above.
- **30-min timeout**: complex regressions (§7 iter 4) hit wall clock. Either raise timeout for known-complex sections, OR break the section's failure-log into smaller pieces per iteration.
- **Probe-diff threshold too lenient**: 12 sections all passed iter 1 with real visible regressions. Mitigation in CLAUDE.md rule 7 above.
- **Vision judge optional → effectively never runs**: any acceptance criterion marked optional gets skipped. Make all critical gates required.
