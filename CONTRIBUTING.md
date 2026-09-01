# Contributing

This repository curates links only, and only to **skills and plugins** for an AI
coding agent (a `SKILL.md`, a Cursor rules file, Copilot custom instructions, or
a Gemini CLI extension). It does not list general articles, blog posts, courses,
or other non-agent resources — see the sister lists
([awesome-student-resources](https://github.com/StudentSuite/awesome-student-resources),
[awesome-study-resources](https://github.com/StudentSuite/awesome-study-resources))
for those. Your skill or plugin lives in its own repo, we just point to it.

By participating, you're expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Overlap with the sister lists

Since this list and the two sister lists share a maintainer, a resource can sometimes look like it could fit either. The deciding question is always the one at the top of this page: **is it an installable agent skill/plugin** — a `SKILL.md`, a Cursor rules file, Copilot custom instructions, or a Gemini CLI extension that runs *inside* an AI coding agent?

- **Yes** -> it belongs here, even if a general-purpose tool or resource covering similar ground already exists on a sister list.
- **No** -> it belongs on a sister list instead ([awesome-student-resources](https://github.com/StudentSuite/awesome-student-resources) for general tools/textbooks/channels, [awesome-study-resources](https://github.com/StudentSuite/awesome-study-resources) for exam/subject study material), not here.

The same underlying resource is not meant to be listed on more than one of the three lists at once. If you spot the same link on this list and a sister list, open an issue (or a PR removing the less specific one) rather than leaving both.

---

## Before you open a PR

Check the entry meets the [Quality Standards](README.md#quality-standards):

- [ ] Public repo, no access requests needed.
- [ ] Documented (README or SKILL.md explaining what it does and how to install it).
- [ ] Works with at least one tool from the [Compatibility Paths](README.md#compatibility-paths) table.
- [ ] Real and usable, not a stub built just to get listed.
- [ ] Short, plain-language description.

---

## Entry format

**Skill:**

```md
- **[author/skill-name](https://github.com/author/skill-name)** - Short description of what it does.
```

**Plugin:**

```md
- **[author/plugin-name](https://github.com/author/plugin-name)** - Short description of what it does.
```

Keep the description to one line, roughly 10 words or fewer. Lead with the verb, skip adjectives like "amazing" or "powerful," and end with a period. No em dashes.

If the entry needs a paid API key or a separate account before it works (beyond
installing the agent itself), prefix the description with 🔑. If it doesn't
need either of those but always calls out to a live external service to do its
job — so it won't work fully offline — prefix it with 🌐 instead. Either marker goes right at the start of the description, immediately after
the dash, e.g.:

```md
- **[author/skill-name](https://github.com/author/skill-name)** - 🔑 Short description of what it does.
```

See the emoji legend near the top of [README.md](README.md) for the exact
wording of what each marker promises.

---

## Where it goes

Add your single bullet to the closest matching section:

- A **skill** goes under one of: IB & IGCSE Coursework, Study & Productivity, Coding & CS Education, STEM Subjects, Writing & Humanities, Language Learning, College Applications & Career, or Google Workspace for Students.
- A **plugin** (a bundle of commands, agents, hooks, or MCP servers, not a single skill file) goes under [Plugins](README.md#plugins), regardless of subject area.
- If nothing fits, open an issue first to discuss a new section before adding one.

**Curriculum scope:** IB & IGCSE Coursework is scoped tightly to those two
curricula's own deliverables (EE/IA/TOK-style work and IGCSE coursework), not
to "coursework" generally — it isn't being renamed or broadened to absorb
every curriculum. A skill or plugin for CBSE, ICSE, A-Levels, or any other
curriculum (rubric feedback, citation formatting, research-project support,
and so on) goes in the section matching its subject instead — usually
Writing & Humanities for curriculum-agnostic academic-writing/research
skills, or STEM Subjects / Coding & CS Education for subject-specific ones —
the same place it would go for an IB/IGCSE student.

---

## Update the counts

Adding an entry means three numbers go up by one, all in `README.md`:

1. The `<summary>Show N skills</summary>` (or `plugins`) line for the section you added to.
2. The section's row in the [Table of Contents](README.md#table-of-contents) (`N skills` / `N plugins`).
3. The top badge: `![Skills](...)` for a skill, `![Plugins](...)` for a plugin.

PRs that add an entry without bumping these will be asked to update before merge.

Removing an entry (see the [Security Notice](README.md#security-notice)) works the same way in reverse: decrement the same three numbers by one.

---

## Tracking last-verified dates

Every entry is checked against the [Quality Standards](README.md#quality-standards)
once, at add time, but nothing records when. `data/last-verified.json` is a
lightweight, non-generated record of that: a flat JSON object mapping each
entry's exact README URL to the ISO date (`YYYY-MM-DD`) it was last confirmed
to resolve and still match its listed description.

- **Adding an entry?** Add its URL and today's date to `data/last-verified.json`
  in the same PR.
- **Re-verifying an entry** (e.g. during a quality pass or in response to a
  [broken-link report](.github/ISSUE_TEMPLATE/broken_link.yml))? Update its
  date to today.
- An entry missing from the file simply hasn't been re-checked since this
  convention started; that's a backlog to work through over time, not a bug.

`scripts/check-last-verified.mjs` (run in CI alongside `check-list-format.mjs`)
checks that the file is valid JSON, that every key is sorted alphabetically
and matches a real README.md entry, and that every value is a
non-future `YYYY-MM-DD` date. It doesn't check that a date is actually
*recent* — nothing yet flags a stale entry, which would be a natural
extension of the larger data-file migration tracked in
[#33](https://github.com/StudentSuite/awesome-skills-plugins-for-students/issues/33).

### The Compatibility Paths table's doc links

The [Compatibility Paths](README.md#compatibility-paths) table links to five
external vendor doc pages (not README entries, so they're outside
`data/last-verified.json`). A link checker only catches these going fully
dead (404/DNS failure); a vendor reorganizing their docs site — as Cursor's
and GitHub's did, both still returning `200` while no longer describing the
right feature — won't trip it. `data/compat-paths-verified.json` tracks the
same way: each of the five doc URLs mapped to the date someone last
hand-confirmed it both resolves *and* still describes the feature the table
claims it does. There's no CI check for this yet (only a human can judge
whether page content still matches); treat it as a periodic manual
spot-check, the same cadence as a last-verified pass.

---

## Submitting

1. Fork the repo, add your single bullet in the right section, in its correct alphabetical position.
2. Bump the counts (see above).
3. Open a PR titled `Add skill: author/skill-name` or `Add plugin: author/plugin-name`.
4. In the PR description, link the repo and say in one sentence why it's useful to students.

One entry per PR keeps review fast. Every list is sorted alphabetically (case-insensitive) by the entry name, so place your bullet where it belongs rather than at the end.

---

## CI checks

A CI check runs `scripts/check-list-format.mjs` on every PR that touches README.md. It verifies the entry format, alphabetical order, that the Table of Contents matches the section headings, and that the badge, Table of Contents, and section-summary counts match the actual entries. Run it yourself before opening a PR with:

```sh
node scripts/check-list-format.mjs
```

A separate scheduled workflow (`.github/workflows/dead-link-check.yml`) checks every link in README.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, CHANGELOG.md, SECURITY.md, CONTRIBUTORS.md, and EXAMPLES.md weekly using [lychee](https://github.com/lycheeverse/lychee), configured via `lychee.toml`. Some legitimate sites reject automated requests with a 403 or 429, so those statuses are accepted rather than treated as broken.

A third workflow (`.github/workflows/markdownlint.yml`) runs `markdownlint-cli2` on those same seven Markdown files. Its config, `.markdownlint.jsonc`, turns off the rules that conflict with this repo's intentional style: long single-line entries (MD013) and the `<details>`/`<picture>` inline HTML used for collapsible sections and the logo (MD033).

The lint workflow also runs `scripts/audit-duplicate-urls.mjs`, which reports every URL used more than once in README.md. This is informational only and never fails the build.
