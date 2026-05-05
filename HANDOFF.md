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
