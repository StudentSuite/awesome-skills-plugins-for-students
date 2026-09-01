#!/usr/bin/env node
// Generates .claude-plugin/marketplace.json from data/skills.json and
// data/plugins.json: one Claude Code plugin entry per catalogued entry
// (pointing at its real external source -- never vendored/copied here, per
// this repo's "we just point to it" rule), plus a handful of thematic
// "bundle" meta-plugins (a plugin.json with only a `dependencies` array) so
// `claude plugin install <bundle-name>` installs a whole theme in one
// command. See CONTRIBUTING.md's "Install bundles" section and issue #26.
//
// Run: node scripts/generate-marketplace.mjs

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';

const CHECK = process.argv.includes('--check');
// path -> generated content, compared against (or written to) disk at the end.
const outputs = new Map();

const skills = JSON.parse(readFileSync(new URL('../data/skills.json', import.meta.url), 'utf8'));
const plugins = JSON.parse(readFileSync(new URL('../data/plugins.json', import.meta.url), 'utf8'));
const all = [...skills, ...plugins];

// --- name -> source -------------------------------------------------------

// officialskills.sh doesn't host the code itself -- it's a directory site
// (by VoltAgent) pointing at each vendor's own public repo. Mapped by hand,
// confirmed against each repo's real directory listing:
//   - anthropics/skills          skills/<name>
//   - openai/skills              skills/.curated/<name>
//   - huggingface/skills         skills/<name>  (note: hugging-face-datasets
//                                 in this list's display name is
//                                 huggingface-datasets as a folder)
//   - googleworkspace/cli        skills/<name>
const OFFICIALSKILLS_REPO = {
  anthropics: { url: 'https://github.com/anthropics/skills.git', pathPrefix: 'skills' },
  openai: { url: 'https://github.com/openai/skills.git', pathPrefix: 'skills/.curated' },
  huggingface: { url: 'https://github.com/huggingface/skills.git', pathPrefix: 'skills' },
  googleworkspace: { url: 'https://github.com/googleworkspace/cli.git', pathPrefix: 'skills' },
};
// Folder name overrides where it doesn't match the officialskills.sh slug.
const OFFICIALSKILLS_FOLDER_OVERRIDES = {
  'hugging-face-datasets': 'huggingface-datasets',
};

function sourceFor(url) {
  const official = url.match(/^https:\/\/officialskills\.sh\/([^/]+)\/skills\/(.+)$/);
  if (official) {
    const [, vendor, slug] = official;
    const repo = OFFICIALSKILLS_REPO[vendor];
    if (!repo) throw new Error(`No known repo mapping for officialskills.sh vendor "${vendor}" (url: ${url})`);
    const folder = OFFICIALSKILLS_FOLDER_OVERRIDES[slug] ?? slug;
    return { source: 'git-subdir', url: repo.url, path: `${repo.pathPrefix}/${folder}` };
  }

  const subdir = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/tree\/([^/]+)\/(.+)$/);
  if (subdir) {
    const [, owner, repo, ref, path] = subdir;
    return { source: 'git-subdir', url: `https://github.com/${owner}/${repo}.git`, path, ref };
  }

  const root = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+?)\/?$/);
  if (root) {
    const [, owner, repo] = root;
    return { source: 'url', url: `https://github.com/${owner}/${repo}.git` };
  }

  throw new Error(`Don't know how to derive a plugin source for URL: ${url}`);
}

// --- name -> unique plugin slug --------------------------------------------

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const usedSlugs = new Map();
function uniqueSlug(name) {
  let slug = slugify(name);
  if (usedSlugs.has(slug)) {
    let n = 2;
    while (usedSlugs.has(`${slug}-${n}`)) n++;
    slug = `${slug}-${n}`;
  }
  usedSlugs.set(slug, name);
  return slug;
}

// --- build one marketplace plugin entry per catalogued entry ---------------

const MARKER_EMOJI = { 'requires-key': '🔑', 'external-service': '🌐' };

const entryPlugins = [];
const slugByUrl = new Map();

for (const entry of all) {
  const slug = uniqueSlug(entry.name);
  slugByUrl.set(entry.url, slug);
  const prefix = entry.marker ? `${MARKER_EMOJI[entry.marker]} ` : '';
  entryPlugins.push({
    name: slug,
    source: sourceFor(entry.url),
    // Marker prefixed back on so a 🔑 (paid API key/account) or 🌐 (live
    // external service) entry is clearly flagged in `claude plugin list`/
    // marketplace browsing, before install, not just in this README.
    description: `${prefix}${entry.description}`,
  });
}

// --- thematic bundles --------------------------------------------------
// One bundle per skill category (Plugins has no bundle -- plugins are
// already full installs), skipping any entry marked "requires-key" so a
// default bundle install never silently expects a paid API key/account.
// (An "external-service" entry has no key requirement, so it's still
// included; its 🌐 marker is about needing network access, not payment.)

const BUNDLE_META = {
  'IB & IGCSE Coursework': { slug: 'ib-igcse-bundle', label: 'IB & IGCSE Coursework' },
  'Study & Productivity': { slug: 'study-productivity-bundle', label: 'Study & Productivity' },
  'Coding & CS Education': { slug: 'coding-cs-bundle', label: 'Coding & CS Education' },
  'STEM Subjects': { slug: 'stem-bundle', label: 'STEM Subjects' },
  'Writing & Humanities': { slug: 'writing-humanities-bundle', label: 'Writing & Humanities' },
  'Language Learning': { slug: 'language-learning-bundle', label: 'Language Learning' },
  'College Applications & Career': { slug: 'college-career-bundle', label: 'College Applications & Career' },
  'Google Workspace for Students': { slug: 'google-workspace-bundle', label: 'Google Workspace for Students' },
};

const bundlePlugins = [];
for (const [category, meta] of Object.entries(BUNDLE_META)) {
  const included = skills.filter((s) => s.category === category && s.marker !== 'requires-key');
  const excluded = skills.filter((s) => s.category === category && s.marker === 'requires-key');
  if (included.length === 0) continue;
  bundlePlugins.push({
    name: meta.slug,
    source: `./bundles/${meta.slug}`,
    description:
      `${meta.label} skills in one install (${included.length} skill${included.length === 1 ? '' : 's'}` +
      (excluded.length ? `; ${excluded.length} paid-key skill${excluded.length === 1 ? '' : 's'} excluded, install separately` : '') +
      `).`,
    dependencies: included.map((s) => slugByUrl.get(s.url)),
  });

  // Each bundle needs a real plugin.json stub on disk (a "./relative" source
  // must resolve to an actual directory in this repo) -- a dependencies-only
  // manifest, no vendored skill content.
  outputs.set(
    `bundles/${meta.slug}/.claude-plugin/plugin.json`,
    JSON.stringify(
      {
        name: meta.slug,
        version: '1.0.0',
        description: `${meta.label} skills in one install.`,
        author: { name: 'StudentSuite', url: 'https://github.com/StudentSuite' },
        dependencies: included.map((s) => slugByUrl.get(s.url)),
      },
      null,
      2
    ) + '\n'
  );
}

// A paid-key entries listing, so students can see what a default bundle
// deliberately left out and opt in individually.
const paidKeyEntries = skills.filter((s) => s.marker === 'requires-key');

const marketplace = {
  name: 'awesome-skills-plugins-for-students',
  owner: { name: 'StudentSuite', url: 'https://github.com/StudentSuite' },
  description:
    'Skills and plugins for students, curated by StudentSuite. Install a themed bundle in one command, or install any single entry by name.',
  plugins: [...entryPlugins, ...bundlePlugins],
};

outputs.set('.claude-plugin/marketplace.json', JSON.stringify(marketplace, null, 2) + '\n');

if (CHECK) {
  const stale = [];
  for (const [relPath, content] of outputs) {
    const fileUrl = new URL(`../${relPath}`, import.meta.url);
    const current = existsSync(fileUrl) ? readFileSync(fileUrl, 'utf8') : null;
    if (current !== content) stale.push(relPath);
  }
  if (stale.length) {
    console.error(
      '✖ The install bundle is out of date with data/skills.json and data/plugins.json.\n' +
        `  Stale or missing: ${stale.join(', ')}\n` +
        '  Run `node scripts/generate-marketplace.mjs` and commit the result.'
    );
    process.exit(1);
  }
  console.log('✔ .claude-plugin/marketplace.json and bundles/ match data/skills.json and data/plugins.json.');
} else {
  for (const [relPath, content] of outputs) {
    const fileUrl = new URL(`../${relPath}`, import.meta.url);
    mkdirSync(new URL('.', fileUrl), { recursive: true });
    writeFileSync(fileUrl, content);
  }
  console.log(
    `Generated .claude-plugin/marketplace.json: ${entryPlugins.length} entries, ` +
      `${bundlePlugins.length} bundles, ${paidKeyEntries.length} paid-key entries excluded from bundles.`
  );
}
