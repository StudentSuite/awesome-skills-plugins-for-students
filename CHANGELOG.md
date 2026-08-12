# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
This project doesn't follow strict semantic versioning (it's a curated list, not
software), but releases are still tagged so changes are easy to point to.

## [Unreleased]

### Added (2026-08-12 issue-clearing pass)

- 12 skills/plugins closing 12 open issues: `David-Saeteros/claude-skills` -
  academic-writing and `dbosk/introagents` - honor-defense-prep (IB & IGCSE
  Coursework); `ghutchis/chem-skill` and `wentorai/research-plugins` -
  inaturalist-api (STEM Subjects); `basicmachines-co/basic-memory` -
  memory-literary-analysis and `ayushsao/Capgemini_essay` (Writing &
  Humanities); `pinakdhabu/Exam-prompt` and `mordor-forge/study-skill` (Study
  & Productivity); `X-tong6/pscher` (College Applications & Career);
  `karanb192/algo-sensei` (Coding & CS Education); `HashemALSKKkAF/exam-prep-mcq`
  (Google Workspace for Students); and `WenyuChiou/zotero-skills` and
  `emili-kosik/admission-skills` (Plugins) from a second round of 10
  issues opened and closed the same pass.
- `peter209393/anki-card-skills` (Study & Productivity).
- Skills and Plugins badges now read 64 and 16 respectively.

### Changed (2026-08-12)

- Added clarifying notes distinguishing the overlapping spaced-repetition
  tools in Study & Productivity and the overlapping grammar-checking tools
  in Writing & Humanities, matching the existing resume-tools note under
  College Applications & Career.
- Documented that officialskills.sh-hosted entries meet the "public repo"
  Quality Standard without needing a separate GitHub repo.
- Added a note that no listed entry currently needs browser automation or
  full computer-use access, plus a matching PR template checklist item.
- `CONTRIBUTING.md` now documents decrementing the three entry counts when
  removing an entry, not just incrementing them when adding one.
- Backfilled `CHANGELOG.md` with curated entries from earlier sessions that
  were never logged (see the bullet list above this one).

### Fixed / Removed (2026-08-12)

- Removed `mattpocock/skills` - edit-article (404, the skill no longer
  exists in that repo after a directory reorganization) and
  `gsd-build/get-shit-done` (archived on GitHub).
- Fixed the Sister lists section listing this repo as its own sister list.
- Closed two issues suggesting unrelated blog articles as out of scope for
  a skills/plugins list, and closed four issues (three from a concurrent
  maintainer pass, one of our own) as duplicates of work already merged.

### Added

- New curated entries: `0xsarwagya/ontoly` (Coding & CS Education),
  `phuryn/pm-skills` grammar-check (Writing & Humanities), and two Plugins —
  `kepano/obsidian-skills` (Obsidian note-taking bundle) and
  `alirezarezvani/claude-skills` deep-work (Cal Newport time-blocking).
- Also unlogged from earlier curation passes:
  - `mattpocock/skills` - `teach`, `handoff`, `diagnosing-bugs`, `tdd`,
    `git-guardrails-claude-code`, `resolving-merge-conflicts`.
  - `ComposioHQ/awesome-claude-skills` - `file-organizer`,
    `document-skills/pptx`, `developer-growth-analysis`, `artifacts-builder`,
    `content-research-writer`, `domain-name-brainstormer`,
    `tailored-resume-generator`.
  - Sourced via `travisvn/awesome-claude-skills`: `zarazhangrui/frontend-slides`,
    `anthropics/docx`, `anthropics/xlsx`, `chrisvoncsefalvay/claude-d3js-skill`,
    and two Plugins, `K-Dense-AI/claude-scientific-skills` and
    `obra/superpowers`.
  - Sourced via `sickn33/antigravity-awesome-skills`: `examprep-ai`,
    `bulletmind`, `xwmxcz/papers-skill`, `code-documentation-code-explain`, and
    the `dair-ai/dair-academy-plugins` bundle (`youtube-notetaker`,
    `lesson-generator`, `wiki-builder`).
  - Sourced via `alirezarezvani/claude-skills`: `research/litreview`,
    `research/syllabus`, `research/deep-research`, `productivity/capture`.
  - Sourced via `VoltAgent/awesome-agent-skills`: `RoundTable02/tutor-skills`,
    `SeanZoR/claude-speed-reader`, `santifer/career-ops`.
  - `FlorianBruniaux/claude-code-ultimate-guide` - `self-assessment`.
  - Baseline entries present before source-tracking began:
    `saulmcphd/apa-style`, `jakedahn/pomodoro`, `hluaguo/learn-faster-kit`,
    `zarazhangrui/codebase-to-course`, `kirilxd/claude-tutor`,
    `googlarz/math-skill`, `Master-cai/Research-Paper-Writing-Skills`,
    `Paramchoudhary/ResumeSkills`, `varunr89/resume-tailoring-skill`,
    `AnayDhawan/oss-launch`, `olegvg/resume-tailor-plugin`,
    `JeanDiable/academic-research-plugin`, `JuliusBrussee/caveman`.
- A Contributors section (with a contrib.rocks badge) and a cross-link footer
  to the sister lists.
- A 🔑 marker convention that flags entries needing a paid API key or a
  separate account beyond a local agent install.
- `SECURITY.md`, `.editorconfig`, a `CODE_OF_CONDUCT.md` (Contributor Covenant
  v2.1), and this changelog.
- CI shared with the sibling awesome-student-resources list:
  `scripts/check-list-format.mjs` (entry format, alphabetical order, Table of
  Contents match), a weekly `lychee` dead-link check, `markdownlint-cli2`, a
  non-blocking `scripts/audit-duplicate-urls.mjs` report, and a periodic audit
  for archived linked repos.
- GitHub issue templates (skill/plugin suggestion, broken link, new section), a
  pull request template, and Dependabot for GitHub Actions.

### Changed

- Normalized the README to match the sibling list: added an H1 title, moved the
  section emoji out of the headings and into the Table of Contents, flattened
  the Skills categories to top-level sections, sorted every list alphabetically
  (case-insensitive), and expanded the collapsible sections by default.
- Added a note under College Applications & Career explaining how the
  overlapping resume tools differ, so readers can pick one.
- Rewrote `CONTRIBUTING.md` to require alphabetical placement, document the CI
  checks, and fix a stale anchor.

### Fixed

- Updated `ComposioHQ/awesome-claude-skills` entry links from `/tree/main/` to
  `/tree/master/` after that repo renamed its default branch.

## [1.0.0] - 2026-07-12

### Added

- Initial curated list of AI coding agent skills and plugins for students,
  across seven skill sections (IB & IGCSE Coursework, Study & Productivity,
  Coding & CS Education, STEM Subjects, Writing & Humanities, College
  Applications & Career, Google Workspace for Students) and a Plugins section.
- Compatibility paths for Claude Code, Cursor, GitHub Copilot, and Gemini CLI.
- `CONTRIBUTING.md`, `LICENSE` (MIT), and a Security Notice in the README.

[Unreleased]: https://github.com/StudentSuite/awesome-skills-plugins-for-students/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/StudentSuite/awesome-skills-plugins-for-students/releases/tag/v1.0.0
