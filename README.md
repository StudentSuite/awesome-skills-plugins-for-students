<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./logo-lockup-dark.svg">
  <img src="./logo-lockup.svg" alt="Awesome Skills & Plugins for Students" width="440">
</picture>

# Awesome Skills & Plugins for Students

**A curated list of AI coding agent skills & plugins built for students.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
![Skills](https://img.shields.io/badge/skills-85-blue)
![Plugins](https://img.shields.io/badge/plugins-16-purple)
[![Changelog](https://img.shields.io/badge/changelog-v1.1.0-lightgrey.svg)](CHANGELOG.md)
![Claude Code](https://img.shields.io/badge/Claude%20Code-%E2%9C%93-orange)
![Cursor](https://img.shields.io/badge/Cursor-%E2%9C%93-1e90ff)
![Copilot](https://img.shields.io/badge/Copilot-%E2%9C%93-2ea043)
![Gemini CLI](https://img.shields.io/badge/Gemini%20CLI-%E2%9C%93-4285f4)

</div>

---

Skills and plugins that run inside your AI coding agent (**Claude Code, Cursor, GitHub Copilot, or Gemini CLI**) to help with IB/IGCSE coursework, exam prep, academic writing, STEM problems, CS projects, and college applications. Every entry links out to its own repo; nothing is hosted here.

> Within each section, entries are ordered alphabetically. See the [Quality Standards](#quality-standards) for what earns a spot.
>
> A 🔑 marks entries that need a paid API key or a separate account before they work, beyond a local agent install.
>
> A 🌐 marks entries that always call out to a live external service (a search index, a public dataset API, a domain registry) to do their job, so they won't work fully offline, even though they don't need a paid key or account like a 🔑 entry does.
>
> None of the entries below need browser automation or full computer-use access beyond a standard local agent install. If you add one that does, note it in your PR so we can introduce a marker for it.
>
> Maintained by [StudentSuite](https://github.com/StudentSuite) &middot; [Report a broken link](https://github.com/StudentSuite/awesome-skills-plugins-for-students/issues/new/choose) &middot; [Changelog](CHANGELOG.md) &middot; [Discussions](https://github.com/StudentSuite/awesome-skills-plugins-for-students/discussions)
>
> Written your own skill or plugin? Post it in [Show and tell](https://github.com/StudentSuite/awesome-skills-plugins-for-students/discussions/categories/show-and-tell) — a maintainer can turn it into a list entry from there.

---

## Table of Contents

| | Section | Count |
| :-: | --- | :-: |
| 📚 | [IB & IGCSE Coursework](#ib--igcse-coursework) | 9 skills |
| 🗂️ | [Study & Productivity](#study--productivity) | 18 skills |
| 💻 | [Coding & CS Education](#coding--cs-education) | 18 skills |
| 🔬 | [STEM Subjects](#stem-subjects) | 10 skills |
| ✍️ | [Writing & Humanities](#writing--humanities) | 9 skills |
| 🎓 | [College Applications & Career](#college-applications--career) | 11 skills |
| 🔵 | [Google Workspace for Students](#google-workspace-for-students) | 10 skills |
| 🧩 | [Plugins](#plugins) | 16 plugins |

[Compatibility Paths](#compatibility-paths) &middot; [Security Notice](#security-notice) &middot; [Quality Standards](#quality-standards) &middot; [Contributing](#contributing) &middot; [Contributors](#contributors) &middot; [More from StudentSuite](#more-from-studentsuite) &middot; [Sister lists](#sister-lists) &middot; [License](#license)

---

## IB & IGCSE Coursework

IA, EE, and TOK helpers: citation formatting, rubric feedback, and document tooling.

<details open>
<summary>Show 9 skills</summary>

- **[anthropics/doc-coauthoring](https://officialskills.sh/anthropics/skills/doc-coauthoring)** - Collaborative document editing and co-authoring, handy for group IAs or shared EE drafts.
- **[anthropics/pdf](https://officialskills.sh/anthropics/skills/pdf)** - Extracts text from PDFs, creates new PDFs, and fills forms, useful for working with past papers and mark schemes.
- **[David-Saeteros/claude-skills - academic-writing](https://github.com/David-Saeteros/claude-skills/tree/main/skills/academic-writing)** - Reviews and cites thesis or essay drafts against supervisor feedback and style guides.
- **[davila7/claude-code-templates - literature-review](https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/scientific/literature-review)** - Runs systematic literature searches across academic databases with formatted citations, handy for EE research.
- **[dbosk/introagents - honor-defense-prep](https://github.com/dbosk/introagents/tree/main/students/event-202605/skills/honor-defense-prep)** - Rehearses defending your own submission through examiner-style questions.
- **[hameefy/claude-latex-skill](https://github.com/hameefy/claude-latex-skill)** - Produces compilable LaTeX for math proofs, derivations, and Beamer slides.
- **[Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills)** - Full research-to-publication pipeline: research, write, review, revise, and finalize, useful for IA and EE drafts.
- **[saulmcphd/apa-style](https://github.com/saulmcphd/apa-style)** - Proofreads papers against APA 7th edition rules with inline corrections.
- **[SJY051/music-composition](https://github.com/SJY051/music-composition)** - Guides music composition and analysis across harmony, melody, form, and genre conventions, useful for IB Music investigations.

</details>

---

## Study & Productivity

Spaced repetition, time and task management, note-taking, and focus.

Several spaced-repetition study tools overlap here. To pick one: **hluaguo/learn-faster-kit** is a general learning coach with syllabi and progress tracking; **RoundTable02/tutor-skills** turns source material into an Obsidian vault with quizzes; **sickn33/antigravity-awesome-skills - examprep-ai** ranks topics into a scored study roadmap; and **mordor-forge/study-skill** runs FSRS-scheduled lesson review sessions with git-tracked progress.

Three entries generate exam-prep material with no prior note on how they differ. **sickn33/antigravity-awesome-skills - examprep-ai** (this section) ranks syllabus topics into a scored roadmap with MCQs and question prediction; **pinakdhabu/Exam-prompt** (this section) generates exam answers, notes, and study plans for any university; and **HashemALSKKkAF/exam-prep-mcq** (under [Google Workspace for Students](#google-workspace-for-students)) turns study material into an MCQ quiz delivered as a Google Form.

<details open>
<summary>Show 18 skills</summary>

- **[anthropics/docx](https://officialskills.sh/anthropics/skills/docx)** - Creates and edits Word documents with tracked changes, comments, and formatting.
- **[anthropics/internal-comms](https://officialskills.sh/anthropics/skills/internal-comms)** - Writes status reports, newsletters, and FAQs, good for group project updates and lab reports.
- **[anthropics/xlsx](https://officialskills.sh/anthropics/skills/xlsx)** - Creates and analyzes spreadsheets with formulas, charts, and data cleaning.
- **[ComposioHQ/awesome-claude-skills - document-skills/pptx](https://github.com/ComposioHQ/awesome-claude-skills/tree/master/document-skills/pptx)** - Creates, edits, and analyzes .pptx presentations.
- **[ComposioHQ/awesome-claude-skills - file-organizer](https://github.com/ComposioHQ/awesome-claude-skills/tree/master/file-organizer)** - Organizes files and folders, finds duplicates, and cleans up your digital workspace.
- **[hluaguo/learn-faster-kit](https://github.com/hluaguo/learn-faster-kit)** - AI learning coach with spaced repetition, syllabi, and progress tracking.
- **[jakedahn/pomodoro](https://github.com/jakedahn/pomodoro)** - Pomodoro timer skill that tracks and learns from your focus sessions.
- **[mattpocock/skills - handoff](https://github.com/mattpocock/skills/tree/main/skills/productivity/handoff)** - Compresses a long study session into a handoff doc so a fresh agent can continue where you left off.
- **[mattpocock/skills - teach](https://github.com/mattpocock/skills/tree/main/skills/productivity/teach)** - Multi-session instructor that scaffolds HTML lessons, tracks learning records, and builds reference cheat sheets.
- **[mordor-forge/study-skill](https://github.com/mordor-forge/study-skill)** - Builds spaced-repetition study workspaces with FSRS-based lesson review scheduling.
- **[openai/transcribe](https://officialskills.sh/openai/skills/transcribe)** - 🔑 Transcribes audio files to text with optional speaker diarization, great for recording and reviewing lectures.
- **[peter209393/anki-card-skills](https://github.com/peter209393/anki-card-skills)** - Builds importable Anki decks with basic, reversed, and cloze cards.
- **[pinakdhabu/Exam-prompt](https://github.com/pinakdhabu/Exam-prompt)** - Generates exam answers, notes, and study plans for any university.
- **[RoundTable02/tutor-skills](https://github.com/RoundTable02/tutor-skills)** - Turns PDFs, docs, or codebases into Obsidian study vaults with interactive quizzes.
- **[SeanZoR/claude-speed-reader](https://github.com/SeanZoR/claude-speed-reader)** - Speed-reads long responses at 600+ WPM using RSVP with ORP highlighting.
- **[sickn33/antigravity-awesome-skills - bulletmind](https://github.com/sickn33/antigravity-awesome-skills/tree/main/skills/bulletmind)** - Converts any input into clean hierarchical bullet points for note-taking and summarization.
- **[sickn33/antigravity-awesome-skills - examprep-ai](https://github.com/sickn33/antigravity-awesome-skills/tree/main/skills/examprep-ai)** - Converts syllabi, past papers, or notes into a ranked High Score Roadmap with MCQs and question prediction.
- **[zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides)** - Builds animation-rich HTML presentations from scratch or converted from PowerPoint files.

</details>

---

## Coding & CS Education

Algorithm and debugging explainers, learn-to-code starters, and CS project tooling.

<details open>
<summary>Show 18 skills</summary>

- **[0xsarwagya/ontoly](https://github.com/0xsarwagya/ontoly)** - Maps codebases into graph-backed architecture evidence.
- **[aidankinzett/claude-git-pr-skill](https://github.com/aidankinzett/claude-git-pr-skill)** - Runs consistent, professional GitHub pull-request reviews with pending reviews and code suggestions.
- **[anthropics/web-artifacts-builder](https://officialskills.sh/anthropics/skills/web-artifacts-builder)** - Builds complex claude.ai HTML artifacts with React and Tailwind, useful for CS project demos and interactive coursework submissions.
- **[anthropics/webapp-testing](https://officialskills.sh/anthropics/skills/webapp-testing)** - Automates browser testing of local web apps with Playwright, handy for verifying CS class projects.
- **[ComposioHQ/awesome-claude-skills - artifacts-builder](https://github.com/ComposioHQ/awesome-claude-skills/tree/master/artifacts-builder)** - Builds multi-component React/Tailwind HTML artifacts for interactive demos and projects.
- **[ComposioHQ/awesome-claude-skills - developer-growth-analysis](https://github.com/ComposioHQ/awesome-claude-skills/tree/master/developer-growth-analysis)** - Analyzes your Claude Code chat history to surface coding patterns and learning gaps.
- **[FlorianBruniaux/claude-code-ultimate-guide - self-assessment](https://github.com/FlorianBruniaux/claude-code-ultimate-guide/tree/main/.claude/skills/self-assessment)** - Assesses your Claude Code skill level and generates a personalized learning path.
- **[hmohamed01/SQL-Expert](https://github.com/hmohamed01/SQL-Expert)** - Guides writing, optimizing, and debugging T-SQL queries, good for SQL coursework practice.
- **[karanb192/algo-sensei](https://github.com/karanb192/algo-sensei)** - Generates LeetCode-style problems with progressive hints and mock interviews.
- **[kirilxd/claude-tutor](https://github.com/kirilxd/claude-tutor)** - Personal tutor with adaptive quizzes and SM-2 spaced repetition.
- **[mattpocock/skills - diagnosing-bugs](https://github.com/mattpocock/skills/tree/main/skills/engineering/diagnosing-bugs)** - Disciplined debug loop: reproduce, minimize, hypothesize, instrument, fix.
- **[mattpocock/skills - git-guardrails-claude-code](https://github.com/mattpocock/skills/tree/main/skills/misc/git-guardrails-claude-code)** - Blocks dangerous git commands (push, reset --hard, clean) via Claude Code hooks.
- **[mattpocock/skills - resolving-merge-conflicts](https://github.com/mattpocock/skills/tree/main/skills/engineering/resolving-merge-conflicts)** - Walks through resolving an in-progress git merge or rebase conflict step by step.
- **[mattpocock/skills - tdd](https://github.com/mattpocock/skills/tree/main/skills/engineering/tdd)** - Guides test-driven development with red-green-refactor cycles and behavior-focused tests.
- **[openai/jupyter-notebook](https://officialskills.sh/openai/skills/jupyter-notebook)** - Creates clean, reproducible Jupyter notebooks for experiments and tutorials, essential for data science coursework.
- **[shauryagangrade/intent-drift-skill](https://github.com/shauryagangrade/intent-drift-skill)** - Detects when AI-assisted coding drifts from the original goal and prompts you to re-align.
- **[sickn33/antigravity-awesome-skills - code-documentation-code-explain](https://github.com/sickn33/antigravity-awesome-skills/tree/main/skills/code-documentation-code-explain)** - Explains complex code through narratives, visual diagrams, and step-by-step breakdowns.
- **[zarazhangrui/codebase-to-course](https://github.com/zarazhangrui/codebase-to-course)** - Turns any codebase into an interactive HTML course for beginners.

</details>

---

## STEM Subjects

Math, physics, chemistry, and data analysis helpers.

<details open>
<summary>Show 10 skills</summary>

- **[abelsr/Computational-Physics](https://github.com/abelsr/Computational-Physics)** - Solves physics problems with Python and Jupyter notebooks, from mechanics to electromagnetism.
- **[chrisvoncsefalvay/claude-d3js-skill](https://github.com/chrisvoncsefalvay/claude-d3js-skill)** - Builds interactive D3.js charts, graphs, and network diagrams for data analysis and reports.
- **[gemini-cli-extensions/datacommons](https://github.com/gemini-cli-extensions/datacommons)** - 🔑 Queries Data Commons public statistical datasets in natural language for research and coursework.
- **[ghutchis/chem-skill](https://github.com/ghutchis/chem-skill)** - Renders 2D structure diagrams and 3D molecule viewers from chemical names.
- **[googlarz/math-skill](https://github.com/googlarz/math-skill)** - Solves math problems step by step with built-in verification.
- **[huggingface/hugging-face-datasets](https://officialskills.sh/huggingface/skills/hugging-face-datasets)** - 🔑 Creates and manages datasets with SQL querying, useful for statistics and data science projects.
- **[juanlurg/data-science-claude-skills - experiment-tracker](https://github.com/juanlurg/data-science-claude-skills)** - Logs, compares, and visualizes lab experiment runs and results with local JSON storage.
- **[majiayu000/claude-skill-registry - statistics-math](https://github.com/majiayu000/claude-skill-registry/tree/main/skills/data/statistics-math)** - Applies statistical tests, probability calculations, and distribution analysis to data.
- **[openai/spreadsheet](https://officialskills.sh/openai/skills/spreadsheet)** - Creates, edits, analyzes, and visualizes spreadsheets with formulas, handy for physics data tables and chemistry calculations.
- **[wentorai/research-plugins - inaturalist-api](https://github.com/wentorai/research-plugins/tree/main/skills/domains/ecology/inaturalist-api)** - 🌐 Queries the iNaturalist API for biodiversity observation data.

</details>

---

## Writing & Humanities

Essay structuring, academic research, literature analysis, and language learning.

Two entries both flag writing errors. **phuryn/pm-skills - grammar-check** targets grammar, logic, and flow with minimal rewriting; **ayushsao/Capgemini_essay** scores an essay's grammar, vocabulary, and structure and charts the feedback.

<details open>
<summary>Show 9 skills</summary>

- **[ayushsao/Capgemini_essay](https://github.com/ayushsao/Capgemini_essay)** - Analyzes student essays and scores grammar, vocabulary, and structure.
- **[basicmachines-co/basic-memory - memory-literary-analysis](https://github.com/basicmachines-co/basic-memory/tree/main/skills/memory-literary-analysis)** - Analyzes literary works into a searchable knowledge graph.
- **[ComposioHQ/awesome-claude-skills - content-research-writer](https://github.com/ComposioHQ/awesome-claude-skills/tree/master/content-research-writer)** - Researches sources, improves hooks, iterates on outlines, and adds citations to essays and articles.
- **[davila7/claude-code-templates - email-composer](https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/enterprise-communication/email-composer)** - Drafts professional emails, handy for messaging professors or admissions offices.
- **[kgraph57/paper-writer-skill](https://github.com/kgraph57/paper-writer-skill)** - Drafts IMRAD-structured scientific manuscripts, useful for lab reports and write-ups.
- **[Master-cai/Research-Paper-Writing-Skills](https://github.com/Master-cai/Research-Paper-Writing-Skills)** - Skill package for planning and writing research papers.
- **[NeoLabHQ/context-engineering-kit - write-concisely](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/docs/skills/write-concisely)** - Applies *The Elements of Style* principles to tighten essays and cut wordiness.
- **[phuryn/pm-skills - grammar-check](https://github.com/phuryn/pm-skills/tree/main/pm-toolkit/skills/grammar-check)** - Flags grammar, logic, and flow errors with targeted fixes, no full rewrite.
- **[xwmxcz/papers-skill](https://github.com/xwmxcz/papers-skill)** - 🌐 Searches 200M+ papers on Semantic Scholar, inspects citations, and downloads arXiv PDFs.

</details>

---

## College Applications & Career

Personal statements, resume building, interview prep, and side-project launches.

Several resume tools overlap here. To pick one: **tailored-resume-generator** and **resume-tailoring-skill** do plain tailoring to a single job description; **ResumeSkills** adds ATS-compatibility scoring and interview prep; **career-ops** wraps a full job-search workflow that also scores listings and tracks applications; and **resume-tailor-plugin** (under [Plugins](#plugins)) is the same tailoring packaged as a full Claude Code plugin rather than a single skill.

<details open>
<summary>Show 11 skills</summary>

- **[AnayDhawan/oss-launch](https://github.com/AnayDhawan/oss-launch)** - Shipped a side project? Scaffold the OSS launch files (README/LICENSE/CI/launch plan) and use it as application signal.
- **[borghei/Claude-Skills - research/grants](https://github.com/borghei/Claude-Skills/tree/main/research/grants)** - Structures a scholarship or grant proposal around fit, narrative, and budget instead of boilerplate.
- **[ComposioHQ/awesome-claude-skills - domain-name-brainstormer](https://github.com/ComposioHQ/awesome-claude-skills/tree/master/domain-name-brainstormer)** - 🌐 Generates domain name ideas and checks availability across TLDs for side projects.
- **[ComposioHQ/awesome-claude-skills - tailored-resume-generator](https://github.com/ComposioHQ/awesome-claude-skills/tree/master/tailored-resume-generator)** - Analyzes job descriptions and tailors resumes to highlight relevant experience and skills.
- **[kevinryan-au/claude-cover-letter](https://github.com/kevinryan-au/claude-cover-letter)** - Turns a pasted job posting into a tailored, one-page cover letter.
- **[Paramchoudhary/ResumeSkills](https://github.com/Paramchoudhary/ResumeSkills)** - Resume optimization, ATS scoring, and interview prep skills.
- **[santifer/career-ops](https://github.com/santifer/career-ops)** - Scores job listings, tailors resumes, and tracks applications for a job search.
- **[shauryagangrade/scout-issue](https://github.com/shauryagangrade/scout-issue)** - Finds and ranks GitHub issues matched to your skills, experience, and time for open-source contributions.
- **[sourikduttanyu/interview-prep](https://github.com/sourikduttanyu/interview-prep)** - Builds a tailored interview prep kit from your resume and a job description.
- **[varunr89/resume-tailoring-skill](https://github.com/varunr89/resume-tailoring-skill)** - AI-powered resume tailoring for specific job descriptions.
- **[X-tong6/pscher](https://github.com/X-tong6/pscher)** - Generates English personal statements for Hong Kong university applications.

</details>

---

## Google Workspace for Students

Skills for Google's tools: Docs, Slides, Classroom, and more. Useful if your school runs on Google Workspace for Education.

**HashemALSKKkAF/exam-prep-mcq** generates exam-prep MCQs like **sickn33/antigravity-awesome-skills - examprep-ai** and **pinakdhabu/Exam-prompt** (both under [Study & Productivity](#study--productivity)), but its distinguishing feature is delivering the quiz as a native Google Form.

<details open>
<summary>Show 10 skills</summary>

- **[googleworkspace/gws-calendar](https://officialskills.sh/googleworkspace/skills/gws-calendar)** - Manage calendars, events, and free/busy queries via the `gws` CLI.
- **[googleworkspace/gws-classroom](https://officialskills.sh/googleworkspace/skills/gws-classroom)** - Manage Google Classroom classes, rosters, and coursework via the `gws` CLI.
- **[googleworkspace/gws-docs](https://officialskills.sh/googleworkspace/skills/gws-docs)** - Read and write Google Docs documents via the `gws` CLI.
- **[googleworkspace/gws-drive](https://officialskills.sh/googleworkspace/skills/gws-drive)** - Manage Google Drive files, folders, and shared drives, handy for keeping coursework organized.
- **[googleworkspace/gws-forms](https://officialskills.sh/googleworkspace/skills/gws-forms)** - Create Google Forms, edit questions, and read responses via the `gws` CLI, handy for quizzes and surveys.
- **[googleworkspace/gws-gmail](https://officialskills.sh/googleworkspace/skills/gws-gmail)** - Send, read, and manage Gmail messages, labels, and drafts via the `gws` CLI.
- **[googleworkspace/gws-sheets](https://officialskills.sh/googleworkspace/skills/gws-sheets)** - Read and write Google Sheets spreadsheets via the `gws` CLI.
- **[googleworkspace/gws-slides](https://officialskills.sh/googleworkspace/skills/gws-slides)** - Read and write Google Slides presentations via the `gws` CLI.
- **[googleworkspace/gws-tasks](https://officialskills.sh/googleworkspace/skills/gws-tasks)** - Manage Google Tasks task lists and tasks via the `gws` CLI.
- **[HashemALSKKkAF/exam-prep-mcq](https://github.com/HashemALSKKkAF/exam-prep-mcq)** - Generates MCQ quizzes from study material and delivers them as a Google Form.

</details>

These skills require the [Google Workspace CLI (`gws`)](https://officialskills.sh/googleworkspace/skills/gws-shared) for auth. Install and authenticate once, then all `gws-*` skills work.

---

## Plugins

Full Claude Code, Cursor, or Copilot plugins for students: bundles of commands, agents, hooks, or MCP servers.

<details open>
<summary>Show 16 plugins</summary>

- **[alirezarezvani/claude-skills - productivity/capture](https://github.com/alirezarezvani/claude-skills/tree/main/productivity/capture)** - Organizes a brain-dump of mixed thoughts, tasks, and ideas into an actionable list.
- **[alirezarezvani/claude-skills - productivity/deep-work](https://github.com/alirezarezvani/claude-skills/tree/main/productivity/deep-work)** - Time-blocks the day into deep and shallow work with focus blocks, Cal Newport style.
- **[alirezarezvani/claude-skills - research/deep-research](https://github.com/alirezarezvani/claude-skills/tree/main/research/deep-research)** - Runs a multi-source research pipeline with citations for high-stakes research questions.
- **[alirezarezvani/claude-skills - research/litreview](https://github.com/alirezarezvani/claude-skills/tree/main/research/litreview)** - Turns a research question into a planned mini literature review as a Word document.
- **[alirezarezvani/claude-skills - research/syllabus](https://github.com/alirezarezvani/claude-skills/tree/main/research/syllabus)** - Builds a supplementary reading list and discussion questions from a course syllabus.
- **[dair-ai/dair-academy-plugins - lesson-generator](https://github.com/dair-ai/dair-academy-plugins/tree/main/plugins/lesson-generator)** - Generates multi-lesson HTML courses with flashcards, quizzes, objectives, and source links.
- **[dair-ai/dair-academy-plugins - wiki-builder](https://github.com/dair-ai/dair-academy-plugins/tree/main/plugins/wiki-builder)** - Builds and maintains structured research wikis with sources, compiled pages, and derived artifacts.
- **[dair-ai/dair-academy-plugins - youtube-notetaker](https://github.com/dair-ai/dair-academy-plugins/tree/main/plugins/youtube-notetaker)** - Turns YouTube talks into local study notes with slides, transcripts, and editable annotations.
- **[emili-kosik/admission-skills](https://github.com/emili-kosik/admission-skills)** - Tracks college application deadlines, checklists, and exports a reminder calendar.
- **[JeanDiable/academic-research-plugin](https://github.com/JeanDiable/academic-research-plugin)** - Plugin for literature surveys, paper reviews, and citation management.
- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** - Compresses agent responses into concise caveman-style language, reducing token usage while preserving technical accuracy. Supports Claude Code, Cursor, Copilot, and 30+ other agents.
- **[K-Dense-AI/claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills)** - 140+ science skills covering biology, chemistry, medicine, and 100+ scientific databases.
- **[kepano/obsidian-skills](https://github.com/kepano/obsidian-skills)** - Reads, writes, and organizes Obsidian notes, canvases, and databases via the Obsidian CLI.
- **[obra/superpowers](https://github.com/obra/superpowers)** - 20+ skills for spec-to-code workflows with TDD, brainstorming, and subagent-driven planning commands.
- **[olegvg/resume-tailor-plugin](https://github.com/olegvg/resume-tailor-plugin)** - Claude Code plugin that tailors your resume to a job post.
- **[WenyuChiou/zotero-skills](https://github.com/WenyuChiou/zotero-skills)** - Searches, tags, and organizes Zotero references from your agent.

</details>

---

## Compatibility Paths

Install a skill by copying its folder into the path for your tool:

| Tool | Project path | Global path | Docs |
| --- | --- | --- | --- |
| Claude Code | `.claude/skills/` | `~/.claude/skills/` | [Skills docs](https://code.claude.com/docs/en/skills) |
| Cursor | `.cursor/rules/` | `~/.cursor/rules/` | [Cursor rules](https://docs.cursor.com/context/rules) |
| GitHub Copilot | `.github/copilot-instructions.md` | N/A | [Copilot custom instructions](https://docs.github.com/en/copilot/customizing-copilot) |
| Gemini CLI | `.gemini/` | `~/.gemini/` | [Gemini CLI docs](https://github.com/google-gemini/gemini-cli) |

Claude Code plugins (full bundles) install via `.claude-plugin/marketplace.json`. See the [Claude Code plugin docs](https://code.claude.com/docs/en/plugins). Cursor, Copilot, and Gemini CLI have no equivalent bundle format: pull the individual skill files out of the plugin's folder and drop each one into that tool's path above.

---

## Security Notice

> [!WARNING]
> This list curates links; it does not vet or host the code behind them. Before installing any skill or plugin:
>
> - **Read the source.** A skill or plugin runs with the same permissions as your coding agent.
> - **Check the author and repo activity.** Prefer maintained repos with real usage over brand-new, unreviewed ones.
> - **Never paste credentials, exam content, or personal data** into a skill you have not read.
>
> Found a listed entry that looks unsafe or abandoned? Open an issue or PR removing it.

---

## Quality Standards

Every entry in this list meets all of the following:

- [ ] **Public repo** - cloneable without requesting access. A few entries link to [officialskills.sh](https://officialskills.sh) instead of a GitHub repo directly (`anthropics/*`, `openai/*`, `huggingface/*`, `googleworkspace/gws-*`) — that's fine as long as the page is public and the skill's source is inspectable there; it does not need its own separate GitHub repo.
- [ ] **Documented** - has a README or SKILL.md explaining what it does and how to install it.
- [ ] **Works** - built for at least one of the tools in the compatibility table above.
- [ ] **Real, not a stub** - actual working skill, not a placeholder created to pad this list.
- [ ] **Short description** - one line, plain language, no marketing copy.

---

## Contributing

PRs adding a skill or plugin are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the entry format and PR checklist.

## Contributors

Thanks to everyone who has added a skill, fixed an entry, or improved the format. See [CONTRIBUTORS.md](CONTRIBUTORS.md) for maintainers and how to get listed.

[![Contributors](https://contrib.rocks/image?repo=StudentSuite/awesome-skills-plugins-for-students)](https://github.com/StudentSuite/awesome-skills-plugins-for-students/graphs/contributors)

## More from StudentSuite

Looking for software, tools, textbooks, and other resources beyond skills and plugins? See the sibling list: [awesome-student-resources](https://github.com/StudentSuite/awesome-student-resources).

## Sister lists

- [awesome-student-resources](https://github.com/StudentSuite/awesome-student-resources) - Tools, textbooks and channels for students.
- [awesome-study-resources](https://github.com/StudentSuite/awesome-study-resources) - Exam and subject study material.

## License

Released under the [MIT License](LICENSE). The license covers this list itself (README, CONTRIBUTING.md, curation structure), not the skills and plugins linked from it. Each of those is owned and licensed by its author in its own repo.
