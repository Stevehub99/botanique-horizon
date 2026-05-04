# HANDOFF — 2026-05-04

## Locked rules (read before responding to anything)

1. **Search-first.** Before answering anything involving project history — a file, decision, folder, "the thing we discussed" — run `conversation_search` and `project_knowledge_search`. Asking the user to remind you is a regression.
2. **Manifest discipline.** Session start: search both repos' `MANIFEST.md` (botanique-horizon, clone-pipeline). Compare TICK files vs project knowledge contents. Surface gaps once with concrete fix steps. Mid-session: when classify rules need updating, propose without being asked. End-of-session: confirm both manifests current.
3. **Role split.** Claude decides operational moves and commits. User executes terminal commands. No "A or B?" framing.
4. **User is escalation-only.** Don't ask permission, don't propose alternatives. User appears when: terminal output needed, gate sets blocked-needs-human, or non-obvious context only user knows.
5. **Don't over-explain.** Answer, move on.
6. **Verify before claiming.** Describe what success looks like, not "this will work."
7. **Claude never writes to progress.txt.** Only ralph.sh writes the gate verdict.

## Top-line goal

Build Botanique IT clone AND build the generic clone system at the same time. Every fix during Botanique: ask "Botanique-specific or generic?" If generic, push to `~/clone-pipeline/` so future clones inherit. The system is the durable asset.

## State of Botanique

§16 closed cleanly under new visual-diff gate. Pipeline closed-loop end-to-end:
1. ralph.sh spawns Claude Code session
2. Agent reads `.ralph/<story-id>-must-fix.md` if present, edits CSS, claims passing
3. ralph.sh runs visual-diff-section.sh post-iteration; exit code authoritative
4. FAIL → reverts to pending, writes new must-fix file
5. PASS → appends one-line verdict to progress.txt

## 14 stories status

- §7: blocked-needs-human (Shopify auth, not gate-related)
- §8–§14, §17, §18: passing under OLD gates; need recheck
- §13b: pending, never built
- §15: gate_skip_reason "multi-section-array-pending" (5 founder bq-image-text instances)
- §16: PASSING under new gate
- §19: deferred-app-install

## System changes that landed this session

**Phase 0 — Theme settings parity** (needs to be added to `~/clone-pipeline/CLAUDE.md` as a section-build prompt instruction): before any build, diff source's theme settings vs destination's (typography, color, spacing). Apply matching values via theme customizer or `config/settings_data.json`. Catches global differences that would otherwise require per-section overrides.

For Botanique: source uses Inter weight 400 for headings/subheadings; destination had `inter_n7` (700) and `inter_n5` (500). Fixed via theme customizer.

**clone-pipeline GitHub repo created and connected.** `Stevehub99/clone-pipeline` now exists and is synced to project knowledge. Has its own MANIFEST.md.

## Other §16 patterns expected across recheck

- Mobile font-size drift via @media max-width:390px
- `.page-width` not applying horizontal padding in dev preview — needs explicit padding on inner wrapper
- ul `padding-left: 30px` (theme defaults to 20px)

## Repos

- **botanique-horizon** (`Stevehub99/botanique-horizon`): the clone. Synced to project knowledge.
- **clone-pipeline** (`Stevehub99/clone-pipeline`): generic scaffold. Synced to project knowledge as of 2026-05-04.

## Next actions (in order)

1. Update clone-pipeline's `lib/generate-manifest.sh` classify() rules to recognize clone-pipeline file types. Currently most files mark "review" instead of correct TICK/skip. Rules to add: `ralph.sh`, `lib/*.sh`, `lib/*.py`, `prompts/*.md`, `CLAUDE.md`, `SETUP.md` → TICK (system); `skills/clone-website/**` → skip (future-use skill); `*.bak.*` → skip (backup); `.claude/**` → skip (local config). Regenerate, commit, push.
2. Add Phase 0 (theme settings parity) to `~/clone-pipeline/prompts/section-build.md` and `~/clone-pipeline/CLAUDE.md`. Commit, push.
3. Run `~/clone-pipeline/ralph.sh --only section-08-medical-grade-fda --debug`. Watch convergence under new gate. With Phase 0 fix already applied to Botanique theme settings, font-weight regressions should be absent.
4. If §8 closes in 1–2 iterations, run §9.
5. If both close cleanly, run `~/clone-pipeline/ralph.sh --recheck-all-passing` overnight.
6. Morning: review progress.txt. Diagnose thrashers individually.
7. After recheck pass: §13b build, §15 multi-section gate, §17 native featured-product swap.

## Self-audit (don't repeat)

- Three gate rebuilds before the right shape — should have simulated on known-failure case earlier.
- pixelmatch ESM/CJS bug shipped without flag — module imports are a check item.
- Confused user with local paths instead of repo names — lead with repo.
- Asked "do you know what X is" instead of searching past chats — search-first rule above is the fix.
- "Want me to do X?" framing slipped twice — role split is the fix.
- Initialized clone-pipeline repo without `.gitignore` first — committed `node_modules/`, had to clean up. Future repo init: `.gitignore` is the first commit.
- Wrote rules in chat without making clear they don't persist until committed to a synced repo.
- Drafted replacements for profile preferences and project instructions without reading current contents — should ask for current state first when settings aren't visible to me.
- Made user download HANDOFF.md and `cp` from Downloads — wrong file got copied, HANDOFF was nuked. Future handoff writes: heredoc directly into the repo via terminal, no download intermediary.
