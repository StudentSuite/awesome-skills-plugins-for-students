# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
This project doesn't follow strict semantic versioning (it's a curated list, not
software), but releases are still tagged so changes are easy to point to.

## [Unreleased]

### Added (2026-10-17 issue-clearing pass)

- `thiagoigfraga/active-reading-adhd-audhd` (Study & Productivity) - an active-reading coach (advance organizer, chunking with recall-before-reveal, Feynman consolidation, spaced flashcards). Written for ADHD/AuDHD readers but usable for any dense textbook or paper; young repo with no stars, not run end to end. Closes #310.
- `huanglibo389/math-olympiad-skills` - math-olympiad (STEM Subjects) - solves or reviews single competition problems (Gaokao league, CMO, IMO level) across number theory, algebra, combinatorics, geometry, and functional equations, with a self-check list. Instructions are written in Chinese, the repo is a month old with 1 star and was not run end to end. Closes #308.
- `Tashamet/portuguese-brasil-tutor` (Language Learning) - a Brazilian Portuguese tutor (explains in English, Ukrainian, or Russian) that builds a Markdown course, renders audio lessons through a local offline TTS engine (Piper, needs ffmpeg), and schedules spaced-repetition reviews; Telegram reminders are optional. Claude Code only (it runs a local Python toolkit); the repo has no license, 0 stars, and was not run end to end. Closes #309.
- `muhcihan/tinkercad-blockly-arduino-skill` (Coding & CS Education) - a beginner-facing Arduino skill that turns a project idea into a Tinkercad Blockly block layout (drawn as SVG), the equivalent Arduino C code, and pin wiring. Written in Turkish for Tinkercad's Turkish Blockly interface; it generates text and SVG only (no Tinkercad automation). Partial answer to #307 (not a general microcontroller course); no license, 0 stars, not run end to end. Closes #307.
- `fitelson/proof-craft` (STEM Subjects) - a proof-writing and proof-review skill built around the Chartrand, Polimeni, and Zhang transition-to-proofs textbook (direct, contrapositive, contradiction, induction, cases), separating logical gaps from missing explanation. Aimed at paper-style proofs with minimal assumed background rather than a discrete-math course; no license, 1 star, not run end to end. Partial answer to #289.
- `ahmeddabak/claude-arabic-writing` (Language Learning) - writes, translates, and proofreads natural Arabic in Modern Standard Arabic plus Egyptian, Levantine, Gulf, and Maghrebi dialects (hamza, agreement, idafa, register). A writing/editing aid rather than a structured Arabic course, and nothing for Latin or other classical languages. Closes #294.
- `dvdksn/learn-docker` (Coding & CS Education) - a Claude Code plugin shipping an interactive three-lesson Docker course (first container, Dockerfiles and image layers, volumes and Docker Compose) built around a todo app, with checkpoints. Needs Docker Desktop installed locally; published by a Docker docs engineer but a young repo with 0 stars and no license, not run end to end. Closes #306.
- `weike-zhang/grounded-ai-tutor` (Coding & CS Education) - a plain-language computing tutor that backs up to the first skipped idea; its curriculum includes a hardware and operating-system layer (CPU, memory, processes, threads, permissions, Linux, containers) plus networking, data, cloud, and AI. A general beginner tutor, not an operating-systems course; MIT, 1 star, not run end to end. Partial answer to #292.
- `xper1os/java-tutor` (Coding & CS Education) - a beginner Java tutor that teaches by building one app from a console program up to a web API with a database, with progress tracking, concept analogies (stack/heap), translated javac errors, and graded hints. Written in Brazilian Portuguese; MIT, 0 stars, a few days old, not run end to end. Closes #226.

### Added (2026-10-15 issue-clearing pass)

- `actionbook/rust-skills` - m14-mental-model (Coding & CS Education) - a learner-oriented Rust skill giving mental models, analogies, and "coming from Java/C++/Python" translations for ownership, borrowing, and lifetimes. A concept explainer rather than a structured beginner course; the repo declares no license. Closes #293.
- `jurgendn/agent-skills` - gre-quant-coach (College Applications & Career) - a GRE Quantitative Reasoning coach (quantitative-comparison tactics, content-gap triage, careless-error elimination, timed drills). GRE only, not GMAT/LSAT/MCAT, and the repo declares no license. Closes #291.
- `zyx1121/i-have-dyslexia` (Study & Productivity) - an opt-in mode that reshapes every AI reply (short lines, one idea per line, fixed skeleton, bold anchor words) for readers with dyslexia. Partial answer to #297 (formatting, not read-aloud/TTS). Closes #297.
- `anthropics/claude-for-legal` - case-brief (Writing & Humanities) - Anthropic's official law-student skill that scaffolds a case brief (facts, issue, holding, reasoning, rule) and flags uncertain holdings. Closes #296.
- `kleinpanic/canvas-lms` (Study & Productivity) - a read-only, student-facing Canvas LMS REST wrapper (`curl`/`jq` plus a Canvas API token, no browser) for courses, assignments, grades, missing work, and announcements. Closes #295.

### Added (2026-09-21 issue-clearing pass)

- 8 new entries closing #138, #148, #166, #167, #168, #169, #170, #171,
  #172, and #176: `SkillMedev/skills - language-learning` (Language
  Learning, closes both the thin-section and speaking-practice gaps),
  `shinchit/gtd-zettelkasten` (Plugins, 📝 Note-Taking),
  `JimmyToluene/Skill-ADHD-Healer - adhd-algorithms-tutor` (Coding & CS
  Education), `JimmyToluene/Skill-ADHD-Healer - adhd-presentation-coach`
  (Writing & Humanities), `Vishnu-tppr/everything-cbse-board -
  revision-planner` (Study & Productivity), `rwgb/vibe-guardrails -
  save-points` (Coding & CS Education), `Stab-Rabbit-coding/SecureControllers
  - statics-and-dynamics` (STEM Subjects), `jantoney/SamStudies -
  biology-tutor` (STEM Subjects), and `openclaw/gogcli - gog-sites`
  (Google Workspace for Students, a real Google-API-backed alternative to
  the browser-automation options ruled out in earlier passes). Skills
  badge now reads 120, Plugins badge now reads 26.
- A disambiguation note under IB & IGCSE Coursework distinguishing the
  three overlapping research/writing entries. Closes #177.
- A second worked example chain in EXAMPLES.md (a first CS side project,
  git init through interview prep). Closes #174.

### Added (2026-09-15 issue-clearing pass)

- Fixed the dead link on `24kchengYe/human-skill-tree - k12-sciences`: the
  repo's default branch is `master`, not `main`. Closes #144.
- `wentorai/Research-Claw - citation-styles` (Writing & Humanities) — MLA
  9th/APA 7th/Chicago 17th citation-formatting reference. Closes #143.
- `fronkt/Academic-Essay-Reviewer` (College Applications & Career) — Common
  App/UC personal-statement review via a simulated admissions committee.
  Closes #142.
- `makenotion/claude-code-notion-plugin` (Plugins, 🔑, Note-Taking) — official
  Notion plugin (skills + MCP server). Closes #140.
- `tianmind-studio/english-coach` (Language Learning) — real-conversation
  English correction and micro-lessons. Closes #139.
- A glyph per Plugins `tag` (📋 Study & Productivity, 🔎 Research,
  📝 Note-Taking, 💼 Career, ⚙️ General-Purpose), via a new `TAG_EMOJI` map in
  `scripts/generate-readme.mjs`'s `formatEntry()`, documented in
  CONTRIBUTING.md and the README's top emoji legend and Plugins intro.
  Closes #141.
- Skills badge now reads 103, Plugins badge now reads 21.

### Added (2026-09-11 issue-clearing pass)

- `scripts/check-compat-paths-verified.mjs`, modeled on
  `check-last-verified.mjs`: validates `data/compat-paths-verified.json` is
  well-formed JSON, its keys exactly match the five doc URLs in README's
  Compatibility Paths section, dates are non-future `YYYY-MM-DD`, and keys
  are sorted. Wired into `.github/workflows/lint.yml` and documented in
  CONTRIBUTING.md. Closes #130.
- 4 new entries closing #125, #126, #127, and #128: `JeremyJC67/super-translator`
  (Language Learning), `WolframResearch/skills - astro-observation-planner`
  (STEM Subjects, 🔑), `rx290/grant-compass` (College Applications & Career,
  🌐), and `JoshuaOliphant/claude-plugins - mochi-creator` (Plugins, 🔑).
  Skills badge now reads 95, Plugins badge now reads 20.

### Added (2026-09-08 issue-clearing pass)

- 5 new entries closing #119, #121, #122, #123, and #124: `13rianK/japanese-tutor`
  (Language Learning), `eranw2000/google-slides-skill` (Google Workspace for
  Students), `espindolavinicius/linkedin-growth-skill` (College Applications
  & Career), `lishix520/academic-paper-skills` (Writing & Humanities), and
  `yarikleto/claude-teacher-plugin` (Plugins). Skills badge now reads 92,
  Plugins badge now reads 19.

### Removed

- `majiayu000/claude-skill-registry` - statistics-math and environmental-geography (STEM Subjects) - the registry was restructured and the `skills/data/statistics-math` and `skills/domains/environmental-geography` paths now return 404 (the repo root no longer has a `skills/` directory), which was failing the Dead Link Check workflow. No replacement location could be verified, so both entries were removed. Closes #303.

- `ayushsao/Capgemini_essay` (Writing & Humanities) — investigation for #117
  found it's a standalone Next.js/TypeScript web app with no `SKILL.md`,
  `.claude/skills/`, `.cursor/rules/`, or `.gemini/` integration; its
  `.github/copilot-instructions.md` only gives Copilot dev-workflow guidance
  for maintaining the app's own codebase (tech stack, coding conventions),
  not a reusable essay-grading capability a student's agent gains by
  installing it, so it doesn't meet the Quality Standards' "Works" bar. The
  Writing & Humanities comparison note referencing it was also removed.
  Closes #117.

## [1.1.0] - 2026-08-23

### Added (2026-08-23 issue-clearing pass)

- 4 new skills closing #66, #91, #92, and #105: `gemini-cli-extensions/datacommons`
  (STEM Subjects, 🔑 — the first entry built specifically for Gemini CLI, not
  just Claude Code/Cursor/Copilot), `googleworkspace/gws-forms` and
  `googleworkspace/gws-calendar` (Google Workspace for Students), and
  `SJY051/music-composition` (IB & IGCSE Coursework's first Group 6/Arts
  entry).
- Skills badge now reads 84.
- A 🌐 marker for entries that always call out to a live external service
  without needing a paid key or account, distinct from the existing 🔑
  marker. Documented in the README's emoji legend and CONTRIBUTING.md's
  entry-format section, applied to `xwmxcz/papers-skill`,
  `wentorai/research-plugins` - inaturalist-api, and
  `ComposioHQ/awesome-claude-skills` - domain-name-brainstormer. Closes #95
  and #101.
- `data/last-verified.json`, a lightweight per-entry last-verified-date
  tracker documented in CONTRIBUTING.md (closes #94), plus CI validation for
  it via `scripts/check-last-verified.mjs` (closes #103).
- CI validation for the 🔑/🌐 marker format via `scripts/check-markers.mjs`
  (closes #106).
- A mention of GitHub Discussions in the README header, pointing students who
  write their own skill at Show and tell (closes #104).

### Verified (2026-08-23)

- Spot-checked all 18 officialskills.sh-hosted entries by hand (the 6
  `anthropics/*`, 3 `openai/*`, `huggingface/hugging-face-datasets`, the 7
  `googleworkspace/gws-*` skills, and `gws-shared`): every one resolves and
  its page still matches its README description. No drift found; nothing
  needed fixing. Recorded in `data/last-verified.json`. Closes #68.

### Fixed (2026-08-23)

- SECURITY.md's "broken or outdated entry issue" link used a relative path
  that resolved as a local file instead of a GitHub issue URL (closes #98).
- CONTRIBUTING.md's CI-checks section was missing SECURITY.md and
  CONTRIBUTORS.md from its list of scanned files (closes #100).
- `.github/ISSUE_TEMPLATE/skill_suggestion.yml` and CONTRIBUTING.md's opening
  paragraph now clarify this repo only lists skills/plugins, not general
  articles or resources (closes #70).

### Changed / Infra (2026-08-23)

- Enabled GitHub Discussions with the default category set (General, Ideas,
  Q&A, Show and tell, Polls, Announcements) and pointed the issue template's
  contact links at Q&A (closes #31).
- Enabled private vulnerability reporting (closes #90).
- Enabled "Automatically delete head branches" after merge (closes #88).
- Added a branch protection rule on `main` requiring the `check-list-format`
  and `markdownlint` status checks to pass (closes #89).

### Added (2026-08-13 issue-clearing pass)

- 14 skills closing 13 open issues: `davila7/claude-code-templates` -
  literature-review and `Imbad0202/academic-research-skills` (IB & IGCSE
  Coursework, from the same issue); `hameefy/claude-latex-skill` (also IB &
  IGCSE Coursework); `abelsr/Computational-Physics` and
  `majiayu000/claude-skill-registry` - statistics-math and
  `juanlurg/data-science-claude-skills` - experiment-tracker (STEM Subjects);
  `aidankinzett/claude-git-pr-skill` and `hmohamed01/SQL-Expert` (Coding & CS
  Education); `kgraph57/paper-writer-skill` and `davila7/claude-code-templates`
  - email-composer (Writing & Humanities); `kevinryan-au/claude-cover-letter`,
  `borghei/Claude-Skills` - research/grants, and `sourikduttanyu/interview-prep`
  (College Applications & Career); `googleworkspace/gws-gmail` (Google
  Workspace for Students).
- Skills badge now reads 78.

### Fixed (2026-08-13)

- `.github/ISSUE_TEMPLATE/skill_suggestion.yml` pointed at a `resource` label
  that didn't exist; it now uses `content`.
- Compatibility Paths now explains how Cursor, Copilot, and Gemini CLI users
  install a multi-skill plugin bundle (pull the individual files out, no
  native bundle format for those tools).
- `dead-link-check.yml` and `markdownlint.yml` now also cover SECURITY.md and
  CONTRIBUTORS.md; both workflows also retrigger when edited themselves.
- The README's Contributors section now links to CONTRIBUTORS.md.
- CODE_OF_CONDUCT.md no longer suggests a public issue as an enforcement
  report channel, matching the private-reporting promise a few lines later.

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

[Unreleased]: https://github.com/StudentSuite/awesome-skills-plugins-for-students/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/StudentSuite/awesome-skills-plugins-for-students/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/StudentSuite/awesome-skills-plugins-for-students/releases/tag/v1.0.0
