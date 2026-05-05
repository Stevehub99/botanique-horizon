# LESSONS.md — fixes-to-propagate log

Living document. Append one line per finding during builds. End-of-session sync propagates `generic` entries to `~/clone-pipeline/CLAUDE.md`.

Format: `[YYYY-MM-DD] [section] [finding] — [botanique-specific | generic] — [propagated: yes/no]`

## Entries

- [2026-05-04] §16 — Theme heading font-weight defaults differ between source (`inter_n4` = 400) and our Horizon (`inter_n7` = 700). Fixed via theme customizer Typography settings. — generic — propagated: yes (clone-pipeline commit 62b2599, 2026-05-05)
- [2026-05-04] §16 — `.page-width` class doesn't apply horizontal padding in dev preview context. Inner wrappers need explicit `padding: 0 20px`. — generic — propagated: yes (clone-pipeline commit 62b2599, 2026-05-05)
- [2026-05-04] §16 — Source mobile breakpoint is `@media (max-width: 390px)`; our theme variables resolve differently. Per-section media queries may be needed. — generic — propagated: yes (clone-pipeline commit 62b2599, 2026-05-05)
- [2026-05-04] §16 — `ul padding-left: 30px` (source) vs theme default 20px — extract per-section, not global. — botanique-specific — propagated: n/a
- [2026-05-05] session — `git add -A` and `git add .` are dangerous in clone repos with untracked tool outputs (playwright traces, screenshots, research JSON/PNG, *.bak). Always use targeted `git add <files>` for protocol commits. Generic .gitignore patterns every clone repo needs from day 1: `.playwright-mcp/`, `screenshots/`, `*.bak`, `*.bak.*`. — generic — propagated: yes (clone-pipeline commit 2681c98, 2026-05-05)
- [2026-05-05] session — Claude.ai's GitHub connector "Sync now" only refreshes already-ticked files. New files added to a synced repo do NOT auto-appear in project knowledge — user must manually tick them in the file picker. MANIFEST's TICK column is a recommendation, not an automated mechanism. Chat-Claude must produce an explicit tick/untick list after every MANIFEST regen and never use the word "auto-tick" or claim a file will be "picked up." — generic — propagated: no
- [2026-05-05] session — Tick/untick deltas after MANIFEST regen must be computed by Claude via project_knowledge_search, not handed to user as a "verify N files yourself" list. Procedure: search project knowledge for representative files in each TICK category (root critical, inventories, source/css, our build, templates) — anything that surfaces is currently ticked + synced. Cross-reference vs MANIFEST's TICK column; report only the delta (missing ticks + spurious ticks). Surfaced this session when user pushed back on "tick these 63 files" advice; correct delta was 1 tick + 1 untick. Never produce full tick/untick lists — only deltas. — generic — propagated: no
