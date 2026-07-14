# Contributing

This repository curates links only. Your skill or plugin lives in its own repo, we just point to it.

## Before you open a PR

Check the entry meets the [Quality Standards](README.md#quality-standards):

- Public repo, no access requests needed.
- Documented (README or SKILL.md explaining what it does and how to install it).
- Works with at least one tool from the [path table](README.md#skill--plugin-paths-for-other-ai-coding-assistants).
- Real and usable, not a stub built just to get listed.
- Short, plain-language description.

## Entry format

**Skill:**

```md
- **[author/skill-name](https://github.com/author/skill-name)** - Short description of what it does.
```

**Plugin:**

```md
- **[author/plugin-name](https://github.com/author/plugin-name)** - Short description of what it does.
```

Keep the description to one line, roughly 10 words or fewer. Lead with the verb, skip adjectives like "amazing" or "powerful."

## Where it goes

- A **skill** goes under the closest matching section in [Skills](README.md#skills): IB & IGCSE Coursework, Study & Productivity, Coding & CS Education, STEM Subjects, Writing & Humanities, or College Applications & Career.
- A **plugin** (a bundle of commands, agents, hooks, or MCP servers, not a single skill file) goes under [Plugins](README.md#plugins) instead, regardless of subject area.
- If nothing fits, open an issue first to discuss a new section before adding one.

## Update the counts

Adding an entry means three numbers go up by one, all in `README.md`:

1. The `<summary>Show N skills</summary>` (or `plugins`) line for the section you added to.
2. The section's row in the [Table of Contents](README.md#table-of-contents) (`N skills` / `N plugins`).
3. The top badge: `![Skills](...)` for a skill, `![Plugins](...)` for a plugin.

PRs that add an entry without bumping these will be asked to update before merge.

## Submitting

1. Fork the repo, add your single bullet to the right section.
2. Bump the counts (see above).
3. Open a PR titled `Add skill: author/skill-name` or `Add plugin: author/plugin-name`.
4. In the PR description, link the repo and say in one sentence why it's useful to students.

One entry per PR keeps review fast. Entries are added in the order they're merged; no need to alphabetize.
