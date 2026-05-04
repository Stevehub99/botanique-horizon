# LESSONS.md — fixes-to-propagate log

Living document. Append one line per finding during builds. End-of-session sync propagates `generic` entries to `~/clone-pipeline/CLAUDE.md`.

Format: `[YYYY-MM-DD] [section] [finding] — [botanique-specific | generic] — [propagated: yes/no]`

## Entries

- [2026-05-04] §16 — Theme heading font-weight defaults differ between source (`inter_n4` = 400) and our Horizon (`inter_n7` = 700). Fixed via theme customizer Typography settings. — generic — propagated: no
- [2026-05-04] §16 — `.page-width` class doesn't apply horizontal padding in dev preview context. Inner wrappers need explicit `padding: 0 20px`. — generic — propagated: no
- [2026-05-04] §16 — Source mobile breakpoint is `@media (max-width: 390px)`; our theme variables resolve differently. Per-section media queries may be needed. — generic — propagated: no
- [2026-05-04] §16 — `ul padding-left: 30px` (source) vs theme default 20px — extract per-section, not global. — botanique-specific — propagated: n/a
