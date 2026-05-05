# HANDOFF — last updated 2026-05-04

This file is the session-end pointer. Read it first, then read what it points to.

## Where things live now
- **Locked rules** → CLAUDE.md
- **Top-line goal** → CLAUDE.md
- **Stable architecture, build protocol** → PROJECT.md
- **Story status, gate verdicts** → progress.txt + prd.json
- **Open PDF-review items, deferred work** → TODO.md
- **Past failures to not repeat** → SELF-AUDIT.md
- **Lessons to propagate to clone-pipeline** → LESSONS.md

## Session 2026-05-04 close

**What landed:** §16 closed under new visual-diff gate. Theme settings parity fix (heading weight 700→400 globally via Typography). LESSONS.md established with 4 entries (3 generic, not yet propagated). Lesson-propagation protocol added to CLAUDE.md. clone-pipeline repo created and connected to project knowledge. Long-chat workarounds and context-window thresholds added to CLAUDE.md.

**What's broken or pending input:** §7 still blocked on Shopify auth from prior session.

## Next action

Read CLAUDE.md and TODO.md. Then start at TODO Phase 4 step 1 (manifest classify rules update for clone-pipeline) — but only after propagating the 3 unpropagated generic LESSONS.md entries first.

## Session 2026-05-05 self-audit

- Used `git add -A` in LESSONS.md propagation step, sweeping 23+ untracked build artifacts (cleanup commit c896b0c had to delete 148 files / 31186 lines). Should have used targeted `git add LESSONS.md`. .gitignore patterns now prevent recurrence.
- Spent 4-5 turns debugging mangled-filename panic that turned out to be a chat-UI display artifact, not real filesystem damage. Real on-disk filenames were correct all along. Lesson: when shell operations fail in surprising ways, search past chats for actual file state before assuming filesystem corruption.
- Failed to recognize that user's reference to "Next chat — first three actions" and LESSONS.md indicated state from a session not yet synced into project knowledge — should have called conversation_search immediately rather than asking user to print files.

## Session 2026-05-05b close

**What landed:** Lesson +1 propagated to clone-pipeline (counter 3→4: repo-init `.gitignore` + commit discipline). Classify rules updated in `lib/generate-manifest.sh` — `LESSONS.md` now `TICK (critical)`; clone-pipeline scaffold/lib/prompts now TICK; `skills/clone-website/`, `*.bak.*`, `.claude/` now excluded. MANIFESTs regenerated in both repos. Auto-tick confusion logged as new generic LESSONS entry (propagated: no — for next session sweep). Workflow framing for lessons (where in pipeline + new method/criteria/tool/step) demonstrated in clone-pipeline entry.

**What's broken or pending input:** §7 still blocked on Shopify auth (unchanged). LESSONS.md and templates/password.json tick/untick pending in botanique-horizon picker.

## Next action

Action 3: Phase 0 theme-settings parity rule into `~/clone-pipeline/prompts/section-build.md` and `~/clone-pipeline/CLAUDE.md`. Also flag: Stefano wants clone-pipeline knowledge reorganized as a system spec by pipeline phase rather than appended lessons — log as follow-up after Action 3, not bundled.

## Session 2026-05-05b self-audit

- Used the word "auto-tick" twice in this session despite knowing the GitHub connector has no auto-tick mechanism — caused confusion. Logged as LESSONS entry, will propagate next session.
- Asked user to verify 63 ticked files manually instead of doing the search-based diff first. Should have searched project knowledge to compute the actual delta, then asked only about the missing/extra ones. User had to push back to get the right behavior.

## Session 2026-05-05c close

**What landed:** Action 3 complete. Phase 0 (theme settings parity) added as new section in `~/clone-pipeline/CLAUDE.md` + new G-10 hardened rule + Phase 0 gate prepended to `~/clone-pipeline/prompts/section-build.md`. Iterations now block on `inventories/theme-settings-parity.json` with `status: "applied"`. 2 backlog lessons propagated (manifest sync semantics + tick/untick deltas via search) — counter 4→6. Both MANIFESTs regenerated. Architectural follow-up logged in TODO.md (clone-pipeline knowledge as system spec by phase — separate session).

**What's broken or pending input:** §7 still blocked on Shopify auth (unchanged). Phase 0 not yet executed for Botanique itself — the rule exists but `inventories/theme-settings-parity.json` doesn't. Next ralph run on any §7-19 story will block until it's produced. §16 was effectively done manually (heading weight backfill 2026-05-04); the sentinel file just needs to be written documenting that.

## Next action

Either: produce `inventories/theme-settings-parity.json` for Botanique retroactively (capturing the §16 typography fix + any other parity adjustments already made) so ralph can resume; OR start the architectural follow-up (system spec by pipeline phase). User's call.

## Session 2026-05-05c self-audit

- Wrote append blocks in `apply-action-3.py` with single `\n` between sections instead of `\n\n` — caused a missing blank line between the prior Lessons entry and the first new one. Caught only on diff review. Lesson: when appending block-level markdown, always join with `\n\n`, not `\n`.
- Initial CLI snippets used trailing `# comment` syntax that zsh doesn't honor by default. Caused two failed paste attempts. Lesson: never include trailing-`#` comments in shell snippets given to the user.
- Got bogged down debugging a `less` pager session — user was inside `less` and I didn't recognize the symptoms (arrow-key escape sequences in pasted output, `Pattern not found`, `Horizontal shift:` prompts) until the third or fourth turn. Lesson: when shell output contains escape sequences or terminal-program prompts, the very first thing to check is "are you still in a pager/editor?" — quit it before any other troubleshooting.
