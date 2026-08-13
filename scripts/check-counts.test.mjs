import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import { validateCountDeclarations } from './check-counts.mjs';

const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');

// The failure cases below run against this fixture rather than the real
// README, so adding or removing an entry never breaks the test suite.
function buildReadme(overrides = {}) {
  const {
    skillsBadge = 3,
    tocSkillCount = 3,
    summarySkillCount = 3,
    skillEntries = 3,
    withSummary = true,
  } = overrides;

  const entries = Array.from(
    { length: skillEntries },
    (_, index) =>
      `- **[author/skill-${index + 1}](https://github.com/author/skill-${index + 1})** - Does one thing.`
  );

  return [
    '# Awesome Skills',
    '',
    `![Skills](https://img.shields.io/badge/skills-${skillsBadge}-blue)`,
    '![Plugins](https://img.shields.io/badge/plugins-1-blue)',
    '',
    '| | Section | Count |',
    '| --- | --- | --- |',
    `| 📚 | [Sample Section](#sample-section) | ${tocSkillCount} skills |`,
    '| 🧩 | [Plugins](#plugins) | 1 plugins |',
    '',
    '## Sample Section',
    '',
    '<details>',
    ...(withSummary ? [`<summary>Show ${summarySkillCount} skills</summary>`] : []),
    '',
    ...entries,
    '',
    '</details>',
    '',
    '## Plugins',
    '',
    '<details>',
    '<summary>Show 1 plugins</summary>',
    '',
    '- **[author/plugin-1](https://github.com/author/plugin-1)** - Bundles skills.',
    '',
    '</details>',
    '',
  ].join('\n');
}

test('accepts the current README count declarations', () => {
  assert.deepEqual(validateCountDeclarations(readme), []);
});

test('accepts a well-formed README', () => {
  assert.deepEqual(validateCountDeclarations(buildReadme()), []);
});

test('detects a stale section summary', () => {
  const errors = validateCountDeclarations(buildReadme({ summarySkillCount: 4 }));

  assert(errors.some((error) => error.includes('Summary count for "Sample Section" is 4')));
  assert(errors.some((error) => error.includes('Skills badge count is 3')));
});

test('detects a stale Table of Contents count', () => {
  const errors = validateCountDeclarations(buildReadme({ tocSkillCount: 4 }));

  assert(
    errors.some((error) =>
      error.includes('Table of Contents count for "Sample Section" is 4')
    )
  );
});

test('detects a stale aggregate badge', () => {
  const errors = validateCountDeclarations(buildReadme({ skillsBadge: 2 }));

  assert(errors.some((error) => error.includes('Skills badge count is 2')));
});

test('detects when actual entries drift from the section declarations', () => {
  const errors = validateCountDeclarations(buildReadme({ skillEntries: 2 }));

  assert(errors.some((error) => error.includes('Summary count for "Sample Section"')));
  assert(errors.some((error) => error.includes('Table of Contents count for "Sample Section"')));
  assert.equal(errors.some((error) => error.includes('Skills badge count is 3')), false);
});

test('detects a missing section summary', () => {
  const errors = validateCountDeclarations(buildReadme({ withSummary: false }));

  assert(errors.some((error) => error.includes('is missing a count summary')));
});
