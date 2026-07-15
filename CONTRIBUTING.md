# Contributing

This repository curates links only. Your skill or plugin lives in its own repo, we just point to it.

By participating, you're expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

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

---

## Where it goes

Add your single bullet to the closest matching section:

- A **skill** goes under one of: IB & IGCSE Coursework, Study & Productivity, Coding & CS Education, STEM Subjects, Writing & Humanities, College Applications & Career, or Google Workspace for Students.
- A **plugin** (a bundle of commands, agents, hooks, or MCP servers, not a single skill file) goes under [Plugins](README.md#plugins), regardless of subject area.
- If nothing fits, open an issue first to discuss a new section before adding one.

---

## Update the counts

Adding an entry means three numbers go up by one, all in `README.md`:

1. The `<summary>Show N skills</summary>` (or `plugins`) line for the section you added to.
2. The section's row in the [Table of Contents](README.md#table-of-contents) (`N skills` / `N plugins`).
3. The top badge: `![Skills](...)` for a skill, `![Plugins](...)` for a plugin.

PRs that add an entry without bumping these will be asked to update before merge.

---

## Submitting

1. Fork the repo, add your single bullet in the right section, in its correct alphabetical position.
2. Bump the counts (see above).
3. Open a PR titled `Add skill: author/skill-name` or `Add plugin: author/plugin-name`.
4. In the PR description, link the repo and say in one sentence why it's useful to students.

One entry per PR keeps review fast. Every list is sorted alphabetically (case-insensitive) by the entry name, so place your bullet where it belongs rather than at the end.

---

## CI checks

A CI check runs `scripts/check-list-format.mjs` on every PR that touches README.md. It verifies the entry format, alphabetical order, and that the Table of Contents matches the section headings. Run it yourself before opening a PR with:

```sh
node scripts/check-list-format.mjs
```

A separate scheduled workflow (`.github/workflows/dead-link-check.yml`) checks every link in README.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, and CHANGELOG.md weekly using [lychee](https://github.com/lycheeverse/lychee), configured via `lychee.toml`. Some legitimate sites reject automated requests with a 403 or 429, so those statuses are accepted rather than treated as broken.

A third workflow (`.github/workflows/markdownlint.yml`) runs `markdownlint-cli2` on every Markdown file. Its config, `.markdownlint.jsonc`, turns off the rules that conflict with this repo's intentional style: long single-line entries (MD013) and the `<details>`/`<picture>` inline HTML used for collapsible sections and the logo (MD033).

The lint workflow also runs `scripts/audit-duplicate-urls.mjs`, which reports every URL used more than once in README.md. This is informational only and never fails the build.
