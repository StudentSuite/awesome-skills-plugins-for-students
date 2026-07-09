<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./logo-lockup-dark.svg">
  <img src="./logo-lockup.svg" alt="StudentSuite" width="440">
</picture>

**A curated list of AI coding agent skills & plugins built for students**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
![Skills](https://img.shields.io/badge/skills-46-blue)
![Plugins](https://img.shields.io/badge/plugins-9-purple)
![Claude Code](https://img.shields.io/badge/Claude%20Code-%E2%9C%93-orange)
![Cursor](https://img.shields.io/badge/Cursor-%E2%9C%93-1e90ff)
![Copilot](https://img.shields.io/badge/Copilot-%E2%9C%93-2ea043)
![Gemini CLI](https://img.shields.io/badge/Gemini%20CLI-%E2%9C%93-4285f4)

</div>

---

Skills and plugins that run inside your AI coding agent — **Claude Code, Cursor, GitHub Copilot, or Gemini CLI** — to help with IB/IGCSE coursework, exam prep, academic writing, STEM problems, CS projects, and college applications. Every entry links out to its own repo; nothing is hosted here.

> Maintained by [StudentSuite](https://github.com/StudentSuite) · Add yours → [CONTRIBUTING.md](CONTRIBUTING.md)

<details>
<summary><strong>Quick Install Guide</strong></summary>

| Tool | Project (one repo) | Global (all repos) |
|---|---|---|
| Claude Code | `.claude/skills/skill-name/` | `~/.claude/skills/skill-name/` |
| Cursor | `.cursor/rules/` | `~/.cursor/rules/` |
| GitHub Copilot | `.github/copilot-instructions.md` | N/A |
| Gemini CLI | `.gemini/` | `~/.gemini/` |

Copy the skill's `SKILL.md` (or the whole folder) into the path for your tool. For Claude Code plugins, install via `.claude-plugin/marketplace.json` — see the [plugin docs](https://code.claude.com/docs/en/plugins).

</details>

---

## Table of Contents

| | Section | Count |
|:---:|---|:---:|
| 📚 | [IB & IGCSE Coursework](#-ib--igcse-coursework) | 3 skills |
| 🗂️ | [Study & Productivity](#️-study--productivity) | 13 skills |
| 💻 | [Coding & CS Education](#-coding--cs-education) | 11 skills |
| 🔬 | [STEM Subjects](#-stem-subjects) | 4 skills |
| ✍️ | [Writing & Humanities](#️-writing--humanities) | 4 skills |
| 🎓 | [College Applications & Career](#-college-applications--career) | 5 skills |
| 🔵 | [Google Workspace for Students](#-google-workspace-for-students) | 6 skills |
| 🧩 | [Plugins](#-plugins) | 9 plugins |

[⚙️ Compatibility Paths](#️-compatibility-paths) · [🛡️ Security Notice](#️-security-notice) · [✅ Quality Standards](#-quality-standards) · [Contributing](#contributing) · [License](#license)

---

## Skills

### 📚 IB & IGCSE Coursework

IA, EE, and TOK helpers — citation formatting, rubric feedback, and document tooling.

<details>
<summary>Show 3 skills</summary>

- **[saulmcphd/apa-style](https://github.com/saulmcphd/apa-style)** - Proofreads papers against APA 7th edition rules with inline corrections.
- **[anthropics/pdf](https://officialskills.sh/anthropics/skills/pdf)** - Extracts text from PDFs, creates new PDFs, and fills forms — useful for working with past papers and mark schemes.
- **[anthropics/doc-coauthoring](https://officialskills.sh/anthropics/skills/doc-coauthoring)** - Collaborative document editing and co-authoring, handy for group IAs or shared EE drafts.

</details>

> Know an IB- or IGCSE-specific skill? Be the first to add one — [open a PR](CONTRIBUTING.md).

---

### 🗂️ Study & Productivity

Spaced repetition, time and task management, note-taking, and focus.

<details>
<summary>Show 13 skills</summary>

- **[jakedahn/pomodoro](https://github.com/jakedahn/pomodoro)** - Pomodoro timer skill that tracks and learns from your focus sessions.
- **[hluaguo/learn-faster-kit](https://github.com/hluaguo/learn-faster-kit)** - AI learning coach with spaced repetition, syllabi, and progress tracking.
- **[mattpocock/skills — teach](https://github.com/mattpocock/skills/tree/main/skills/productivity/teach)** - Multi-session instructor that scaffolds HTML lessons, tracks learning records, and builds reference cheat sheets.
- **[mattpocock/skills — handoff](https://github.com/mattpocock/skills/tree/main/skills/productivity/handoff)** - Compresses a long study session into a handoff doc so a fresh agent can continue where you left off.
- **[ComposioHQ/awesome-claude-skills — file-organizer](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/file-organizer)** - Organizes files and folders, finds duplicates, and cleans up your digital workspace.
- **[ComposioHQ/awesome-claude-skills — document-skills/pptx](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/document-skills/pptx)** - Creates, edits, and analyzes .pptx presentations.
- **[zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides)** - Builds animation-rich HTML presentations from scratch or converted from PowerPoint files.
- **[anthropics/docx](https://officialskills.sh/anthropics/skills/docx)** - Creates and edits Word documents with tracked changes, comments, and formatting.
- **[anthropics/xlsx](https://officialskills.sh/anthropics/skills/xlsx)** - Creates and analyzes spreadsheets with formulas, charts, and data cleaning.
- **[anthropics/internal-comms](https://officialskills.sh/anthropics/skills/internal-comms)** - Writes status reports, newsletters, and FAQs — good for group project updates and lab reports.
- **[openai/transcribe](https://officialskills.sh/openai/skills/transcribe)** - Transcribes audio files to text with optional speaker diarization — great for recording and reviewing lectures.
- **[sickn33/antigravity-awesome-skills — examprep-ai](https://github.com/sickn33/antigravity-awesome-skills/tree/main/skills/examprep-ai)** - Converts syllabi, past papers, or notes into a ranked High Score Roadmap with MCQs and question prediction.
- **[sickn33/antigravity-awesome-skills — bulletmind](https://github.com/sickn33/antigravity-awesome-skills/tree/main/skills/bulletmind)** - Converts any input into clean hierarchical bullet points for note-taking and summarization.

</details>

---

### 💻 Coding & CS Education

Algorithm and debugging explainers, learn-to-code starters, and CS project tooling.

<details>
<summary>Show 11 skills</summary>

- **[zarazhangrui/codebase-to-course](https://github.com/zarazhangrui/codebase-to-course)** - Turns any codebase into an interactive HTML course for beginners.
- **[kirilxd/claude-tutor](https://github.com/kirilxd/claude-tutor)** - Personal tutor with adaptive quizzes and SM-2 spaced repetition.
- **[mattpocock/skills — diagnosing-bugs](https://github.com/mattpocock/skills/tree/main/skills/engineering/diagnosing-bugs)** - Disciplined debug loop: reproduce → minimize → hypothesize → instrument → fix.
- **[mattpocock/skills — tdd](https://github.com/mattpocock/skills/tree/main/skills/engineering/tdd)** - Guides test-driven development with red-green-refactor cycles and behavior-focused tests.
- **[mattpocock/skills — git-guardrails-claude-code](https://github.com/mattpocock/skills/tree/main/skills/misc/git-guardrails-claude-code)** - Blocks dangerous git commands (push, reset --hard, clean) via Claude Code hooks.
- **[mattpocock/skills — resolving-merge-conflicts](https://github.com/mattpocock/skills/tree/main/skills/engineering/resolving-merge-conflicts)** - Walks through resolving an in-progress git merge or rebase conflict step by step.
- **[ComposioHQ/awesome-claude-skills — developer-growth-analysis](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/developer-growth-analysis)** - Analyzes your Claude Code chat history to surface coding patterns and learning gaps.
- **[ComposioHQ/awesome-claude-skills — artifacts-builder](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/artifacts-builder)** - Builds multi-component React/Tailwind HTML artifacts for interactive demos and projects.
- **[anthropics/web-artifacts-builder](https://officialskills.sh/anthropics/skills/web-artifacts-builder)** - Builds complex claude.ai HTML artifacts with React and Tailwind — useful for CS project demos and interactive coursework submissions.
- **[openai/jupyter-notebook](https://officialskills.sh/openai/skills/jupyter-notebook)** - Creates clean, reproducible Jupyter notebooks for experiments and tutorials — essential for data science coursework.
- **[sickn33/antigravity-awesome-skills — code-documentation-code-explain](https://github.com/sickn33/antigravity-awesome-skills/tree/main/skills/code-documentation-code-explain)** - Explains complex code through narratives, visual diagrams, and step-by-step breakdowns.

</details>

---

### 🔬 STEM Subjects

Math, physics, chemistry, and data analysis helpers.

<details>
<summary>Show 4 skills</summary>

- **[googlarz/math-skill](https://github.com/googlarz/math-skill)** - Solves math problems step by step with built-in verification.
- **[chrisvoncsefalvay/claude-d3js-skill](https://github.com/chrisvoncsefalvay/claude-d3js-skill)** - Builds interactive D3.js charts, graphs, and network diagrams for data analysis and reports.
- **[openai/spreadsheet](https://officialskills.sh/openai/skills/spreadsheet)** - Creates, edits, analyzes, and visualizes spreadsheets with formulas — handy for physics data tables and chemistry calculations.
- **[huggingface/hugging-face-datasets](https://officialskills.sh/huggingface/skills/hugging-face-datasets)** - Creates and manages datasets with SQL querying — useful for statistics and data science projects.

</details>

> Know a physics or chemistry skill worth adding? Be the first — [open a PR](CONTRIBUTING.md).

---

### ✍️ Writing & Humanities

Essay structuring, academic research, literature analysis, and language learning.

<details>
<summary>Show 4 skills</summary>

- **[Master-cai/Research-Paper-Writing-Skills](https://github.com/Master-cai/Research-Paper-Writing-Skills)** - Skill package for planning and writing research papers.
- **[ComposioHQ/awesome-claude-skills — content-research-writer](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/content-research-writer)** - Researches sources, improves hooks, iterates on outlines, and adds citations to essays and articles.
- **[xwmxcz/papers-skill](https://github.com/xwmxcz/papers-skill)** - Searches 200M+ papers on Semantic Scholar, inspects citations, and downloads arXiv PDFs.
- **[mattpocock/skills — edit-article](https://github.com/mattpocock/skills/tree/main/skills/personal/edit-article)** - Restructures article drafts by section and tightens prose for clarity.

</details>

> Know a literature analysis or language-learning skill? Be the first to add one — [open a PR](CONTRIBUTING.md).

---

### 🎓 College Applications & Career

Personal statements, resume building, interview prep, and side-project launches.

<details>
<summary>Show 5 skills</summary>

- **[Paramchoudhary/ResumeSkills](https://github.com/Paramchoudhary/ResumeSkills)** - Resume optimization, ATS scoring, and interview prep skills.
- **[varunr89/resume-tailoring-skill](https://github.com/varunr89/resume-tailoring-skill)** - AI-powered resume tailoring for specific job descriptions.
- **[AnayDhawan/oss-launch](https://github.com/AnayDhawan/oss-launch)** - Shipped a side project? Scaffold the OSS launch files (README/LICENSE/CI/launch plan) and use it as application signal.
- **[ComposioHQ/awesome-claude-skills — domain-name-brainstormer](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/domain-name-brainstormer)** - Generates domain name ideas and checks availability across TLDs for side projects.
- **[ComposioHQ/awesome-claude-skills — tailored-resume-generator](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/tailored-resume-generator)** - Analyzes job descriptions and tailors resumes to highlight relevant experience and skills.

</details>

---

### 🔵 Google Workspace for Students

Skills for Google's tools — Docs, Slides, Classroom, and more. Useful if your school runs on Google Workspace for Education.

<details>
<summary>Show 6 skills</summary>

- **[googleworkspace/gws-docs](https://officialskills.sh/googleworkspace/skills/gws-docs)** - Read and write Google Docs documents via the `gws` CLI.
- **[googleworkspace/gws-slides](https://officialskills.sh/googleworkspace/skills/gws-slides)** - Read and write Google Slides presentations via the `gws` CLI.
- **[googleworkspace/gws-sheets](https://officialskills.sh/googleworkspace/skills/gws-sheets)** - Read and write Google Sheets spreadsheets via the `gws` CLI.
- **[googleworkspace/gws-classroom](https://officialskills.sh/googleworkspace/skills/gws-classroom)** - Manage Google Classroom classes, rosters, and coursework via the `gws` CLI.
- **[googleworkspace/gws-drive](https://officialskills.sh/googleworkspace/skills/gws-drive)** - Manage Google Drive files, folders, and shared drives — handy for keeping coursework organized.
- **[googleworkspace/gws-tasks](https://officialskills.sh/googleworkspace/skills/gws-tasks)** - Manage Google Tasks task lists and tasks via the `gws` CLI.

</details>

These skills require the [Google Workspace CLI (`gws`)](https://officialskills.sh/googleworkspace/skills/gws-shared) for auth. Install and authenticate once, then all `gws-*` skills work.

---

## 🧩 Plugins

Full Claude Code, Cursor, or Copilot plugins for students: bundles of commands, agents, hooks, or MCP servers.

<details>
<summary>Show 9 plugins</summary>

- **[olegvg/resume-tailor-plugin](https://github.com/olegvg/resume-tailor-plugin)** - Claude Code plugin that tailors your resume to a job post.
- **[JeanDiable/academic-research-plugin](https://github.com/JeanDiable/academic-research-plugin)** - Plugin for literature surveys, paper reviews, and citation management.
- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** - Compresses agent responses into concise caveman-style language, reducing token usage while preserving technical accuracy. Supports Claude Code, Cursor, Copilot, and 30+ other agents.
- **[K-Dense-AI/claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills)** - 140+ science skills covering biology, chemistry, medicine, and 100+ scientific databases.
- **[obra/superpowers](https://github.com/obra/superpowers)** - 20+ skills for spec-to-code workflows with TDD, brainstorming, and subagent-driven planning commands.
- **[gsd-build/get-shit-done](https://github.com/gsd-build/get-shit-done)** - Spec-driven development system: brainstorm → spec → plan → subagent execution.
- **[dair-ai/dair-academy-plugins — youtube-notetaker](https://github.com/dair-ai/dair-academy-plugins/tree/main/plugins/youtube-notetaker)** - Turns YouTube talks into local study notes with slides, transcripts, and editable annotations.
- **[dair-ai/dair-academy-plugins — lesson-generator](https://github.com/dair-ai/dair-academy-plugins/tree/main/plugins/lesson-generator)** - Generates multi-lesson HTML courses with flashcards, quizzes, objectives, and source links.
- **[dair-ai/dair-academy-plugins — wiki-builder](https://github.com/dair-ai/dair-academy-plugins/tree/main/plugins/wiki-builder)** - Builds and maintains structured research wikis with sources, compiled pages, and derived artifacts.

</details>

---

## ⚙️ Compatibility Paths

Install a skill by copying its folder into the path for your tool:

| Tool | Project path | Global path | Docs |
|---|---|---|---|
| Claude Code | `.claude/skills/` | `~/.claude/skills/` | [Skills docs](https://code.claude.com/docs/en/skills) |
| Cursor | `.cursor/rules/` | `~/.cursor/rules/` | [Cursor rules](https://docs.cursor.com/context/rules) |
| GitHub Copilot | `.github/copilot-instructions.md` | N/A | [Copilot custom instructions](https://docs.github.com/en/copilot/customizing-copilot) |
| Gemini CLI | `.gemini/` | `~/.gemini/` | [Gemini CLI docs](https://github.com/google-gemini/gemini-cli) |

Claude Code plugins (full bundles) install via `.claude-plugin/marketplace.json` — see the [Claude Code plugin docs](https://code.claude.com/docs/en/plugins).

---

## 🛡️ Security Notice

> [!WARNING]
> This list curates links — it does not vet or host the code behind them. Before installing any skill or plugin:
>
> - **Read the source.** A skill or plugin runs with the same permissions as your coding agent.
> - **Check the author and repo activity.** Prefer maintained repos with real usage over brand-new, unreviewed ones.
> - **Never paste credentials, exam content, or personal data** into a skill you have not read.
>
> Found a listed entry that looks unsafe or abandoned? Open an issue or PR removing it.

---

## ✅ Quality Standards

Every entry in this list meets all of the following:

- [ ] **Public repo** — cloneable without requesting access.
- [ ] **Documented** — has a README or SKILL.md explaining what it does and how to install it.
- [ ] **Works** — built for at least one of the tools in the compatibility table above.
- [ ] **Real, not a stub** — actual working skill, not a placeholder created to pad this list.
- [ ] **Short description** — one line, plain language, no marketing copy.

---

## Contributing

PRs adding a skill or plugin are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the entry format and PR checklist.

## License

Released under the [MIT License](LICENSE). The license covers this list itself (README, CONTRIBUTING.md, curation structure) — not the skills and plugins linked from it. Each of those is owned and licensed by its author in its own repo.
