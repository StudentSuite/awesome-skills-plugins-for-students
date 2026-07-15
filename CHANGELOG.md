# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
This project doesn't follow strict semantic versioning (it's a curated list, not
software), but releases are still tagged so changes are easy to point to.

## [Unreleased]

### Added

- `SECURITY.md`, `.editorconfig`, a `CODE_OF_CONDUCT.md` (Contributor Covenant
  v2.1), and this changelog.
- CI shared with the sibling awesome-student-resources list:
  `scripts/check-list-format.mjs` (entry format, alphabetical order, Table of
  Contents match), a weekly `lychee` dead-link check, `markdownlint-cli2`, and a
  non-blocking `scripts/audit-duplicate-urls.mjs` report.
- GitHub issue templates (skill/plugin suggestion, broken link, new section), a
  pull request template, and Dependabot for GitHub Actions.

### Changed

- Normalized the README to match the sibling list: added an H1 title, moved the
  section emoji out of the headings and into the Table of Contents, flattened
  the Skills categories to top-level sections, sorted every list alphabetically
  (case-insensitive), and expanded the collapsible sections by default.
- Rewrote `CONTRIBUTING.md` to require alphabetical placement, document the CI
  checks, and fix a stale anchor.

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
