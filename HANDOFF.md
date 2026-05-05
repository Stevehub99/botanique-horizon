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

## Session 2026-05-05d close

**What landed:** Nothing constructive. Phase 0 sentinel work was attempted; surfaced that the §16 typography "fix" has no verifiable artifact in the repo (`type_heading_font = 'inter_n7'` = weight 700, no commit history showing change). Attempt to retrieve the fix via `shopify theme pull --live` resolved to Zest (the actual live theme), not botanique-horizon-preview, and crashed mid-pagination after overwriting the local working tree with ~200+ Zest files. `shopify theme dev` then propagated the pollution toward the development theme. Recovery via `git checkout HEAD -- .` + `git clean -fd` succeeded; working tree restored to 79e9d6d. 4 generic lessons logged. SELF-AUDIT entry recording the failure mode in detail.

**What's broken or pending input:**
- Phase 0 sentinel work paused until §16 mechanism is re-verified from primary evidence.
- §7 "Shopify auth" block is unverified — may have been the same CLI pagination bug observed today.
- Repo↔store deploy target relationship is unclear: `botanique-horizon-preview` (#195678142804) exists but no local `.shopify/project.json` or `shopify.theme.toml` configures `theme dev` to target it. `theme dev` defaults to creating a fresh development theme per machine (`Development (b22e71-Stefanos-MacBook-Air)` = #195371860308). Whether deploys should ever push to `botanique-horizon-preview`, and how, is unanswered.
- LESSONS.md backlog: 4 generic entries unpropagated.

## Next action

Do NOT attempt Phase 0 sentinel until the §16 mechanism is verified. Sequence for next session:

1. Propagate the 4 backlog lessons to clone-pipeline CLAUDE.md (counter 6→10), per dual-goal enforcement.
2. Re-diagnose §16: open Shopify admin in browser, click "Customize" on each unpublished theme matching `botanique-horizon*`, screenshot Typography → Headings font setting on each. Then start `theme dev` cleanly and probe computed `--font-h1--weight` etc. on dev preview. Identify which theme (if any) actually has weight 400. Decide from there whether sentinel can be produced, or whether Phase 0 needs to run from scratch via theme customizer + `theme pull --theme=<id>`.
3. Re-diagnose §7: don't assume auth. Reproduce the original failure with `shopify theme dev` running and verbose output. Compare against today's `"after":null}}}` crash signature. May be the same bug.
4. Document the deploy-target relationship: which theme ID is the canonical destination for botanique-horizon's main branch? Add it to CLAUDE.md as a project-locked decision so future `theme dev`/`theme push` invocations target it explicitly via `--theme=<id>`.

## Session 2026-05-05d self-audit

- Misread the same `theme dev` background output twice as fresh command output, building plans on faulty premises both times. Should have asked which terminal each output came from before interpreting.
- Started Phase 0 sentinel work without first verifying the §16 lesson's underlying artifact existed. The dual-goal protocol propagates lessons mechanically without classifying them as evidenced vs hypothesis — that's a gap in the protocol itself, not just this session.
- Recommended `shopify theme pull --live` against a store whose live theme I had not verified. `--live` should never have been in any command I sent; the safer default is `--theme=<id>` always.
- Did not check for a `.shopify/project.json` or `shopify.theme.toml` in the repo before reasoning about which theme `theme dev` targets. The absence of those files is itself diagnostic and I missed it for several turns.
- Used "Press Ctrl+C" framing without first asking whether the user knew which terminal `theme dev` was running in. Should have confirmed terminal identification before issuing the action.

## Session 2026-05-05e close

**What landed:** §16 mechanism verified from primary evidence — per-section CSS overrides in assets/bq-tech-specs.css (commits 0e332b9, 9d3b306), NOT theme customizer. Customizer-Typography hypothesis refuted: config/settings_data.json has zero commits changing typography. §16 LESSONS entry annotated with correction. Clone-pipeline Phase 0 doctrine annotated as mechanism-unverified — the doctrine remains recommended but has not been empirically validated end-to-end. 4 backlog lessons from 5d propagated to clone-pipeline (counter 6→10) in workflow-classified shape including the new evidenced/unverified protocol amendment. New generic lesson logged (zsh ! history expansion in heredocs) — backlog 1.

**What's broken or pending input:**
- §7 cause still unverified (may be CLI pagination bug, not auth — per 5d lesson).
- Phase 0 has never been executed end-to-end in any clone. Botanique's "Phase 0 work" so far is only per-section overrides on §16. Going forward without real Phase 0, every §7-§19 section will independently need font-weight overrides — defeating the doctrine.
- Phase 0 sentinel intentionally NOT written. Writing one now would assert "applied" against a state that only patched one section.
- Repo↔store deploy target relationship still unclear (no .shopify/project.json or shopify.theme.toml; theme dev creates per-machine dev theme).
- LESSONS.md backlog: 1 generic entry unpropagated (zsh heredoc lesson).

## Next action

Next chat: actual Phase 0 execution + validation in Botanique. Steps:
1. Propagate 1 backlog LESSONS entry to clone-pipeline (counter 10→11).
2. Identify the canonical destination theme ID for botanique-horizon's main branch. Document in CLAUDE.md as a project-locked decision so future theme dev / theme push invocations target it via --theme=<id>.
3. Open Shopify admin → Customize on that theme → Typography → set Headings + Subheadings to Inter weight 400 → save.
4. shopify theme pull --theme=<id> from a scratch dir; copy back only config/settings_data.json after verifying it's the only changed file.
5. Re-run visual-diff-section.sh on §16 with the per-section font-weight overrides COMMENTED OUT temporarily. If still PASS: doctrine validated; remove the overrides permanently. If FAIL: doctrine has a gap; diagnose before propagating Phase 0 further.
6. Only after a successful validation: write inventories/theme-settings-parity.json with status: "applied" and the artifacts referenced inline.
7. Re-flip the §16 LESSONS entry's mechanism annotation to VERIFIED (with the customizer commit hash as artifact) once the validation succeeds.

## Session 2026-05-05e self-audit

- The python heredoc with f-string `!r` repr spec was a known zsh footgun and I should have caught it before sending. The dotted symptom would have been "weird Python error mentioning shell history content" — I diagnosed it correctly after the fact but should have written `repr(cur[k])` from the start.
- Initial Step 2 plan presented Phase 0 sentinel work as separable from validating the doctrine. It's not: the sentinel asserts "applied", and that assertion needs to be evidenced or it's a lie. Should have framed Phase 0 as "execute + validate + sentinel" from the start, not "write sentinel describing existing fix."
- Did not propose ending the chat at the natural seam (after Step 1 propagation landed) even though that was a clean state. Continued into Step 2 instead. The right call would have been to end after the propagation, do Step 2 in a fresh chat with full context budget for the diagnosis. The diagnosis itself was lean enough that this didn't matter, but the principle held.

## Session 2026-05-05f close

**What landed:** Phase 0 doctrine validated end-to-end for the first time in any clone. 9 commits across both repos; 4 in 5f's first half (LESSONS propagation + theme ID lock), 5 in the second half (Phase 0 execution + sentinel + LESSONS flip + clone-pipeline doctrine flip).

Specific changes:
- Canonical destination theme locked: `botanique-horizon-preview #195678142804` on store `a9iz0x-ip.myshopify.com`. CLAUDE.md "Locked decisions" section lists 7 anti-target unpublished themes (all named literally `195371860308`) plus Zest #178646581588 (live, different brand) as do-not-target. Every future `theme pull`/`theme push` MUST pass `--theme=195678142804` explicitly. Never `--live`.
- `config/settings_data.json` updated via Shopify admin customizer: `type_heading_font` inter_n7 → inter_n4, `type_subheading_font` inter_n5 → inter_n4 (commit 75e6530). Note: Subheading was at n5/Medium, not n7/Bold as 5e's plan assumed — minor finding, didn't change the fix.
- 4 redundant per-section font-weight:400 overrides removed from `assets/bq-tech-specs.css` (commit 07e26e1). Line 31's `font-weight: 700` for `.bq-ts__h2 strong` retained — legitimate per-element override, not made redundant by Phase 0.
- §16 visual-diff gate run with overrides absent: PASS, 0/163420 desktop pixels (0.00%), 0/429799 mobile pixels (0.00%), 0 mismatches per viewport on 17 source elements. Doctrine works.
- Phase 0 sentinel `inventories/theme-settings-parity.json` written with `status: "applied"`, `doctrine_status: "verified"`, full artifact chain (commit 05f7fcf). Future ralph.sh G-10 reads this.
- §16 LESSONS entry: customizer mechanism flipped to ALSO VERIFIED alongside per-section-overrides VERIFIED. Both mechanisms now independently sufficient (commit b2e602b).
- clone-pipeline CLAUDE.md doctrine annotation flipped `unverified` → `verified` with full artifact chain (commit 3674ebe). Both the status header (line 314) and the doctrine paragraph (line 317) updated — single str_replace would have left the status header stale; caught on diff review.
- Generic LESSON propagated to clone-pipeline: zsh `!` history expansion in single-quoted heredocs (counter 10→11, clone-pipeline 80a3d45, marked propagated in Botanique LESSONS dc421ac).

**What's broken or pending input:**
- **§7 still `blocked-needs-human` with `iteration_count: 6, max_iterations: 5`.** Story is over its iteration cap. When ralph.sh next picks it up the carry-blocker logic from 5d's "re-diagnose before re-asserting" lesson will trigger — must reproduce the original failure under current conditions before re-asserting auth as the cause. The 5d theme pull crash with `"after":null}}}` may have been the actual cause, not auth.
- **Visual-diff-section.sh stdout PASS not mirrored in progress.txt.** Last progress.txt entry is from 2026-05-04T17:37:21Z (`section-16-tech-specs gate=PASS iter=1`). The 5f gate run printed PASS to stdout but didn't append a progress.txt entry. Either the script only writes through ralph.sh wrapping, or there's a gap. Not blocking the doctrine claim (stdout was the verdict and it was PASS); flagging for next session because the locked rule "only ralph.sh writes progress.txt" depends on the script *actually* writing it on success.
- **"Multiple Botanique themes" observation in admin (operator notice during 5f Step 3).** Operator saw more themes in the customizer's theme-list view than the original `shopify theme list` CLI output had shown. Could be CLI pagination (the same bug suspected in §7), could be themes created since the list was taken, could be themes the CLI doesn't surface in this account. Not blocking but a real signal something is creating themes on this store and we don't know what. Investigate before next pull.
- **Phase 0 automation deferred.** Customizer manual click-through worked but is the wrong long-term shape — every future clone would require operator admin work to do Phase 0. After 5f validation, doctrine should be: write `lib/phase-0-apply-theme-settings.sh` that scripts the pull/edit/push automation against settings_data.json directly, document customizer-vs-API as equivalent, propagate. Worth a session of its own, not next-up.
- **`shopify theme dev` was running at chat close** in a separate tab on theme 195678142804. Per 5d "stop theme dev before any working-tree mutation" — if you do anything to the working tree before the next session's first move, stop it (Ctrl+C, verify pgrep clean) first.

## Next action

Next chat: pick from the queue. In rough priority:
1. **§7 carry-blocker re-diagnosis** (per 5d lesson). Reproduce the failure with theme dev running on canonical theme 195678142804, capture exact error signature, compare to §7's earlier crash log, decide if it's auth or pagination or something else. Resolution becomes the §7 unblock.
2. **Phase 0 automation script** (`lib/phase-0-apply-theme-settings.sh`). Once §7 is unblocked, this is the right time — Botanique 5f gives us a working reference flow to script against, and it removes the manual-admin requirement before more sections need it.
3. **§7→§19 actual section build resumes** once 1 and 2 land. ralph.sh autonomous loop should run cleaner because Phase 0 doctrine is verified and §16-class font-weight surprises won't recur.

Decide priority at start of next chat based on context budget; if budget is tight, pick (1) only.

## Session 2026-05-05f self-audit

Three generic errors today, in order of recurrence risk:

1. **Wrote operational steps describing a UI without having seen it.** Step 3 instruction said "Headings: Inter weight 400 / Subheadings: Inter weight 400" against Horizon's customizer. Horizon's customizer has no weight selector at the role level — weight is a property of the font face chosen inside the picker, not a separate field. Operator had to inspect and report back so I could rewrite the step. This is the same class of error as 5-04's "fixed via customizer Typography" lesson — assertion about a UI without primary evidence. The 5d "verifiable artifact" lesson covers LESSONS authoring; the same standard should apply to operational steps. Mitigation: when writing steps that depend on a UI surface I haven't seen, ask the operator to describe the surface first.

2. **Backgrounded an interactive process with bare `&`.** Wrote `shopify theme dev ... &` for the Step 5 dev-server start. zsh suspended it on tty output. Lost ~one round trip diagnosing. Generic — `theme dev` is just one of many interactive Shopify CLI processes, and the failure mode (`suspended (tty output)`) will recur for any of them. Mitigation: never `&` an interactive process; either run in a separate tab (operator instruction) or use `nohup ... > log 2>&1 &` if backgrounding is genuinely needed. Borderline LESSONS-worthy if it appears once more.

3. **Anchored a status flip on only one of two places the status was stated.** clone-pipeline CLAUDE.md had "NOT VERIFIED" in both a status header (line 314) and a follow-up paragraph (line 317). Initial str_replace updated 317 only, leaving 314 stale and contradicting the new content. Caught on diff review before commit. Generic class: "when flipping a multi-place status, find every statement of it." Mitigation: before any status-flip str_replace, grep for the old status word/phrase across the file and confirm there's only one occurrence; if multiple, batch the replacement.

Two procedural notes also worth recording:

4. Asked operator twice for Subheading-role-current-state without blocking on the answer. Operator changed both roles before reporting and then noted (correctly) that I should have asked before letting them proceed. The "speed up" feedback was a fair pushback; I should have either blocked on the answer or accepted not knowing it. Pretending I'd asked sufficiently when I'd let it pass twice was the actual error.

5. Wrote conditional paste instructions ("paste only if X") that required operator to make judgment calls about what counts as "weird." Operator flagged this; replaced with PASTE / RUN / VERIFY labels with no conditionals. Behavioral fix landed mid-session; recurrence risk is low if the labels are used consistently going forward.

6. **Narrowed scope drift on a goal-reframe.** When operator asked "can the system build itself," I wrote a pivot message for the next chat that scoped the audit goal to "make ralph good enough to ship Botanique 7-19 unattended." That dropped the project's locked dual-goal rule (build Botanique AND build the generic clone-pipeline system; the system is the durable asset). Operator caught it and asked why I had not mentioned the system goal. Generic class: when a user reframes the immediate task, re-anchor on standing constraints (locked rules, dual-goal, role split) before writing the new framing. Do not let the user's most-recent phrasing override constraints they set up earlier and forgot to repeat. Mitigation: before writing any "new plan" or "pivot" message, scan the project's locked rules and confirm the new framing is consistent with each one. This self-note was written AFTER the original HANDOFF push (72f67d7) and amended in via this commit -- itself a sub-lesson: self-notes that arrive post-HANDOFF need to be amended in, not left in chat history.
