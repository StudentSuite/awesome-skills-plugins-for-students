# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
This project doesn't follow strict semantic versioning (it's a curated list, not
software), but releases are still tagged so changes are easy to point to.

## [Unreleased]

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
