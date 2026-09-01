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

**README.md is generated — don't hand-edit its entry lists.** Entries live in
[`data/skills.json`](data/skills.json) and [`data/plugins.json`](data/plugins.json);
`scripts/generate-readme.mjs` regenerates README.md's bullet lists, per-section
counts, Table of Contents counts, and top badges from those two files. Editing
README.md's `<details>` blocks directly will just get overwritten the next
time someone runs the generator, and CI (`generate-readme.mjs --check`) fails
a PR that edits README.md without a matching data-file change.

Add your entry as one object in `data/skills.json` (or `data/plugins.json`
for a plugin), matching [`data/schema/entry.schema.json`](data/schema/entry.schema.json):

```json
{
  "name": "author/skill-name",
  "url": "https://github.com/author/skill-name",
  "description": "Short description of what it does.",
  "category": "Coding & CS Education",
  "marker": null,
  "supported_tools": ["claude-code", "cursor", "copilot"]
}
```

- `name` / `url` / `description` — same rules as before: description is one
  line, roughly 10 words or fewer, leads with a verb, skips adjectives like
  "amazing" or "powerful," ends with a period, no em dashes. For a skill
  inside a monorepo, name it `"author/repo - skill-name"` and point `url` at
  the `tree/main/path/to/skill` subpath.
- `category` — the exact section heading it belongs to (see
  [Where it goes](#where-it-goes) below); always `"Plugins"` in
  `data/plugins.json`.
- `marker` — `null` for no marker, `"requires-key"` if it needs a paid API
  key or separate account before it works (renders as 🔑), or
  `"external-service"` if it always calls out to a live external service
  without needing a key (renders as 🌐, and won't work fully offline). See
  the emoji legend near the top of [README.md](README.md) for the exact
  wording each marker promises.
- `supported_tools` — which of `"claude-code"`, `"cursor"`, `"copilot"`,
  `"gemini-cli"` it's built for. Defaults to the first three for a plain
  SKILL.md-style entry; only list `"gemini-cli"` too if you've actually
  confirmed it works there, and drop the other three if it's Gemini-CLI-only
  (e.g. it ships a `gemini-extension.json` instead of a `SKILL.md`).

You don't need to insert your entry alphabetically in the JSON file —
`generate-readme.mjs` sorts entries within each section itself — but doing so
anyway keeps the diff easy to review.

After editing the data file, run:

```sh
node scripts/generate-readme.mjs
```

and commit both the data-file change and the regenerated `README.md`.

---

## Where it goes

Set `category` to the closest matching section:

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

## Counts are generated

The `<summary>Show N skills</summary>` (or `plugins`) line for each section,
the [Table of Contents](README.md#table-of-contents) counts, and the top
`![Skills](...)` / `![Plugins](...)` badges are all computed by
`scripts/generate-readme.mjs` from how many entries are in `data/skills.json`
/ `data/plugins.json` for each category — adding or removing an entry from
the data file and re-running the generator updates all of them automatically.
Don't hand-edit any of these numbers in README.md; CI will just flag the
result as out of date with the data files.

---

## Install bundles

`.claude-plugin/marketplace.json` and the `bundles/` directory make every
entry, and eight themed bundles, installable into Claude Code in one command
(see [Install a bundle in one command](README.md#install-a-bundle-in-one-command)
in the README). Both are generated by `scripts/generate-marketplace.mjs` from
`data/skills.json` / `data/plugins.json` — same idea as
`scripts/generate-readme.mjs`, so don't hand-edit either. Run it after
editing a data file:

```sh
node scripts/generate-marketplace.mjs
```

and commit the result. CI (`generate-marketplace.mjs --check`) fails a PR
where they've drifted.

Each catalogued entry gets its own marketplace plugin entry pointing at its
real external source (a GitHub repo, or a subdirectory of one via
`git-subdir` — never a copy of the code vendored into this repo, matching
this list's "we just point to it" rule). A bundle is a
[dependencies-only plugin](https://code.claude.com/docs/en/plugin-dependencies#bundle-plugins-for-a-team):
`bundles/<bundle-slug>/.claude-plugin/plugin.json` has no content of its own,
just a `dependencies` array naming every non-🔑 entry in that section, so
`claude plugin install <bundle-slug>` installs the bundle plugin and every
skill it depends on in one command. 🔑 entries (need a paid API key/account)
are deliberately excluded from every bundle — install those individually.

To add a bundle for a new section, add it to the `BUNDLE_META` map at the
top of `scripts/generate-marketplace.mjs` and re-run the generator; it'll
pick up every entry already in that section's category automatically.

This has been verified end-to-end against the real `claude` CLI (marketplace
add, single-entry install, and full-bundle install, including the
officialskills.sh-derived and monorepo-subdirectory sources) in an isolated
config directory, not just schema-validated — see the commit that introduced
it for the exact commands run.

---

## Tracking last-verified dates

Every entry is checked against the [Quality Standards](README.md#quality-standards)
once, at add time, but nothing records when. `data/last-verified.json` is a
lightweight, non-generated record of that: a flat JSON object mapping each
entry's exact README URL to the ISO date (`YYYY-MM-DD`) it was last confirmed
to resolve and still match its listed description.

**What verification means:** install the skill or plugin per the
[Compatibility Paths](README.md#compatibility-paths) table, run it against a
task matching its description, and confirm it still loads and does what it
claims. A link that merely resolves (a 200) is not verification on its own —
that's what the weekly dead-link check already covers automatically; a
last-verified date means a human actually ran it.

Verifying an entry is a great low-effort recurring contribution: no writing
required, just install one and see if it still works. A quarterly scheduled
workflow (`.github/workflows/staleness-audit.yml`) opens (or leaves open, if
one's already there — it checks for an existing open issue labeled
`staleness-audit` first) an issue listing every entry with no
`data/last-verified.json` date, or one older than 6 months, as a ready-made
to-do list.

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
extension tracked in
[#28](https://github.com/StudentSuite/awesome-skills-plugins-for-students/issues/28).
`data/last-verified.json` stays a separate file rather than a field on each
`data/skills.json` / `data/plugins.json` entry, since it tracks a date-only
fact that's re-checked independently of everything else about an entry.

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

1. Fork the repo, add your entry object to `data/skills.json` or `data/plugins.json`.
2. Run `node scripts/generate-readme.mjs` and commit the regenerated `README.md` alongside the data-file change.
3. Open a PR titled `Add skill: author/skill-name` or `Add plugin: author/plugin-name`.
4. In the PR description, link the repo and say in one sentence why it's useful to students.

One entry per PR keeps review fast.

---

## CI checks

A CI check runs on every PR that touches README.md, the data files, or the
scripts below:

- `node scripts/validate-data.mjs` — validates `data/skills.json` and
  `data/plugins.json` against `data/schema/entry.schema.json` (required
  fields, known category/marker/tool values, no duplicate name or URL).
- `node scripts/generate-readme.mjs --check` — fails if README.md doesn't
  match what the data files would generate, i.e. if you edited README.md
  directly, or edited a data file and forgot to re-run the generator.
- `node scripts/generate-marketplace.mjs --check` — same idea for
  `.claude-plugin/marketplace.json` and `bundles/`, see
  [Install bundles](#install-bundles) above.
- `node scripts/check-list-format.mjs` — a second, independent check
  directly against README.md's own format rules (entry format, alphabetical
  order, Table of Contents match, and that the badge/ToC/summary counts
  agree with the actual entries). Kept as defense in depth even though
  README.md is generated now, since it doesn't rely on the data files being
  right — it just checks the shipped file makes sense on its own.
- `node scripts/check-last-verified.mjs` — see
  [Tracking last-verified dates](#tracking-last-verified-dates) above.

Run all of them yourself before opening a PR with:

```sh
node --test scripts/*.test.mjs
node scripts/validate-data.mjs
node scripts/generate-readme.mjs --check
node scripts/generate-marketplace.mjs --check
node scripts/check-list-format.mjs
node scripts/check-last-verified.mjs
```

A separate scheduled workflow (`.github/workflows/dead-link-check.yml`) checks every link in README.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, CHANGELOG.md, SECURITY.md, CONTRIBUTORS.md, and EXAMPLES.md weekly using [lychee](https://github.com/lycheeverse/lychee), configured via `lychee.toml`. Some legitimate sites reject automated requests with a 403 or 429, so those statuses are accepted rather than treated as broken.

A third workflow (`.github/workflows/markdownlint.yml`) runs `markdownlint-cli2` on those same seven Markdown files. Its config, `.markdownlint.jsonc`, turns off the rules that conflict with this repo's intentional style: long single-line entries (MD013) and the `<details>`/`<picture>` inline HTML used for collapsible sections and the logo (MD033).

The lint workflow also runs `scripts/audit-duplicate-urls.mjs`, which reports every URL used more than once in README.md. This is informational only and never fails the build.

---

## Branch protection and admin bypass

`main`'s branch protection rule requires the `check-list-format` and
`markdownlint` status checks and (since #109) at least one CODEOWNERS-based
approving review, but `enforce_admins` is deliberately left `false`. That
means a repo admin — a maintainer pushing directly to `main` for a quick fix
or a maintenance pass — bypasses both of those requirements entirely; GitHub
shows a "Bypassed rule violations" notice on that kind of push.

This is a known, open tradeoff (#108), not an oversight: turning
`enforce_admins` on would block direct-to-main pushes entirely, including
routine maintenance, unless every change goes through a PR first — a real
workflow change for a small-maintainer-count repo, not just a settings
toggle. It needs an explicit maintainer decision (is the workflow ready to
move to PR-only merges on `main`?) rather than being flipped on
unilaterally. Until that decision is made, treat every direct push to `main`
as running on trust rather than on the enforced checks, and lean on running
the checks locally first (see [CI checks](#ci-checks) above).
