#!/usr/bin/env node
// Regenerates the structured parts of README.md (entry bullets, per-section
// "Show N skills/plugins" summaries, Table of Contents counts, and the top
// skills/plugins badges) from data/skills.json and data/plugins.json.
//
// Everything else in README.md -- headings, prose, comparison notes, the
// Compatibility Paths table, Security Notice, Quality Standards, and so on
// -- is left byte-for-byte untouched: this script edits the current
// README.md in place rather than rebuilding it from scratch, so hand-written
// text always survives.
//
// Usage:
//   node scripts/generate-readme.mjs          # writes README.md
//   node scripts/generate-readme.mjs --check  # exits 1 if README.md would change (CI)

import { readFileSync, writeFileSync } from 'node:fs';

const README_PATH = new URL('../README.md', import.meta.url);
const SKILLS_PATH = new URL('../data/skills.json', import.meta.url);
const PLUGINS_PATH = new URL('../data/plugins.json', import.meta.url);

const MARKER_EMOJI = { 'requires-key': '🔑', 'external-service': '🌐' };

function formatEntry(entry) {
  const prefix = entry.marker ? `${MARKER_EMOJI[entry.marker]} ` : '';
  return `- **[${entry.name}](${entry.url})** - ${prefix}${entry.description}`;
}

function byName(a, b) {
  const al = a.name.toLowerCase();
  const bl = b.name.toLowerCase();
  return al < bl ? -1 : al > bl ? 1 : 0;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/ /g, '-');
}

const skills = JSON.parse(readFileSync(SKILLS_PATH, 'utf8'));
const plugins = JSON.parse(readFileSync(PLUGINS_PATH, 'utf8'));

const byCategory = new Map();
for (const entry of skills) {
  if (!byCategory.has(entry.category)) byCategory.set(entry.category, []);
  byCategory.get(entry.category).push(entry);
}
byCategory.set('Plugins', [...plugins]);
for (const list of byCategory.values()) list.sort(byName);

const sectionCounts = new Map();
for (const [category, list] of byCategory) sectionCounts.set(category, list.length);

const totalSkills = skills.length;
const totalPlugins = plugins.length;

const original = readFileSync(README_PATH, 'utf8');
const lines = original.split('\n');

const out = [];
let currentHeading = null;
let inDetails = false;
let bulletsEmitted = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  const h2 = line.match(/^## (.+)/);
  if (h2) currentHeading = h2[1].trim();

  // Top badges.
  const skillsBadge = line.match(/^!\[Skills\]\(https:\/\/img\.shields\.io\/badge\/skills-(\d+)-blue\)$/);
  if (skillsBadge) {
    out.push(`![Skills](https://img.shields.io/badge/skills-${totalSkills}-blue)`);
    continue;
  }
  const pluginsBadge = line.match(/^!\[Plugins\]\(https:\/\/img\.shields\.io\/badge\/plugins-(\d+)-purple\)$/);
  if (pluginsBadge) {
    out.push(`![Plugins](https://img.shields.io/badge/plugins-${totalPlugins}-purple)`);
    continue;
  }

  // Table of Contents row: "| emoji | [Heading](#slug) | N skills|plugins |"
  const tocMatch = line.match(/^(\| .+? \| \[.+?\]\(#(.+?)\) \| )(\d+)( (?:skills|plugins) \|)$/);
  if (tocMatch) {
    const [, prefix, slug, , suffix] = tocMatch;
    const heading = [...byCategory.keys()].find((h) => slugify(h) === slug);
    const count = heading ? sectionCounts.get(heading) : Number(tocMatch[3]);
    out.push(`${prefix}${count}${suffix}`);
    continue;
  }

  if (line.startsWith('<details')) {
    inDetails = true;
    bulletsEmitted = false;
    out.push(line);
    continue;
  }
  if (line.startsWith('</details>')) {
    inDetails = false;
    out.push(line);
    continue;
  }
  if (inDetails) {
    const summary = line.match(/^<summary>Show \d+ (skills|plugins)<\/summary>$/);
    if (summary) {
      const count = sectionCounts.get(currentHeading) ?? 0;
      out.push(`<summary>Show ${count} ${summary[1]}</summary>`);
      continue;
    }
    if (line.startsWith('- ')) {
      if (!bulletsEmitted) {
        const list = byCategory.get(currentHeading) ?? [];
        for (const entry of list) out.push(formatEntry(entry));
        bulletsEmitted = true;
      }
      continue; // drop the original bullet line, already replaced above
    }
  }

  out.push(line);
}

const generated = out.join('\n');

if (process.argv.includes('--check')) {
  if (generated !== original) {
    console.error(
      '✖ README.md is out of date with data/skills.json and data/plugins.json.\n' +
        '  Run `node scripts/generate-readme.mjs` and commit the result.'
    );
    process.exit(1);
  }
  console.log('✔ README.md matches data/skills.json and data/plugins.json.');
} else {
  writeFileSync(README_PATH, generated);
  console.log(`Regenerated README.md from ${totalSkills} skills and ${totalPlugins} plugins.`);
}
