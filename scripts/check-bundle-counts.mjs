// Checks the "Install a bundle in one command" table in README.md: each
// bundle's Skills count must equal the number of skills in that category that
// the bundle actually installs, i.e. every entry in data/skills.json for the
// category except those marked "requires-key" (see generate-marketplace.mjs).
// check-counts.mjs covers the per-section/ToC/badge counts but not this table,
// so it used to drift silently whenever an entry was added (see #281).

import { readFileSync } from 'node:fs';

/**
 * @param {string} readme README.md contents
 * @param {{ category: string, marker?: string | null }[]} skills data/skills.json
 * @returns {string[]} human-readable validation errors
 */
export function validateBundleCounts(readme, skills) {
  const errors = [];
  const lines = readme.split('\n');

  const expected = new Map();
  for (const skill of skills) {
    if (!expected.has(skill.category)) expected.set(skill.category, 0);
    if (skill.marker !== 'requires-key') {
      expected.set(skill.category, expected.get(skill.category) + 1);
    }
  }

  const start = lines.findIndex((l) => /^## Install a bundle in one command\s*$/.test(l));
  if (start === -1) {
    return ['README.md  Missing the "Install a bundle in one command" section.'];
  }

  const seen = new Set();
  let sawHeader = false;
  for (let i = start + 1; i < lines.length; i++) {
    if (/^## /.test(lines[i])) break;
    const row = lines[i].match(/^\|\s*(.+?)\s*\|\s*(\d+)\s*\|\s*(.+?)\s*\|\s*$/);
    if (!row) continue;
    sawHeader = true;
    const [, label, count] = row;
    if (!expected.has(label)) {
      errors.push(`README.md:${i + 1}  Bundle "${label}" does not match any skills category in data/skills.json.`);
      continue;
    }
    seen.add(label);
    if (Number(count) !== expected.get(label)) {
      errors.push(
        `README.md:${i + 1}  Bundle table says "${label}" has ${count} skills, but the bundle installs ${expected.get(label)} (category size minus paid-key entries).`
      );
    }
  }

  if (!sawHeader) errors.push('README.md  Could not find any rows in the bundle table.');
  for (const [category, n] of expected) {
    if (n > 0 && !seen.has(category) && sawHeader) {
      errors.push(`README.md  Category "${category}" installs ${n} skills but has no row in the bundle table.`);
    }
  }
  return errors;
}

// --- CLI runner ---
const isMain = process.argv[1] && new URL(`file://${process.argv[1]}`).href === import.meta.url;
if (isMain) {
  const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
  const skills = JSON.parse(readFileSync(new URL('../data/skills.json', import.meta.url), 'utf8'));
  const errors = validateBundleCounts(readme, skills);
  if (errors.length) {
    console.error(`✖ ${errors.length} issue(s) found:\n`);
    for (const e of errors) console.error(`  ${e}\n`);
    process.exit(1);
  } else {
    console.log('✔ The bundle table\'s per-bundle skill counts match data/skills.json.');
  }
}
