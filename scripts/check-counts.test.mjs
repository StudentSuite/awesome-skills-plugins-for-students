import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import { validateCountDeclarations } from './check-counts.mjs';

const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');

test('accepts the current README count declarations', () => {
  assert.deepEqual(validateCountDeclarations(readme), []);
});

test('detects a stale section summary', () => {
  const changed = readme.replace('<summary>Show 7 skills</summary>', '<summary>Show 8 skills</summary>');
  const errors = validateCountDeclarations(changed);

  assert(errors.some((error) => error.includes('Summary count for "IB & IGCSE Coursework" is 8')));
  assert(errors.some((error) => error.includes('Skills badge count is 70')));
});

test('detects a stale Table of Contents count', () => {
  const changed = readme.replace(
    '[IB & IGCSE Coursework](#ib--igcse-coursework) | 7 skills',
    '[IB & IGCSE Coursework](#ib--igcse-coursework) | 8 skills'
  );
  const errors = validateCountDeclarations(changed);

  assert(
    errors.some((error) =>
      error.includes('Table of Contents count for "IB & IGCSE Coursework" is 8')
    )
  );
});

test('detects a stale aggregate badge', () => {
  const changed = readme.replace('/badge/skills-70-blue', '/badge/skills-69-blue');
  const errors = validateCountDeclarations(changed);

  assert(errors.some((error) => error.includes('Skills badge count is 69')));
});

test('detects when actual entries drift from the section declarations', () => {
  const changed = readme.replace(
    /^- \*\*\[anthropics\/doc-coauthoring\].*\n/m,
    ''
  );
  const errors = validateCountDeclarations(changed);

  assert(errors.some((error) => error.includes('Summary count for "IB & IGCSE Coursework"')));
  assert(errors.some((error) => error.includes('Table of Contents count for "IB & IGCSE Coursework"')));
  assert.equal(errors.some((error) => error.includes('Skills badge count is 70')), false);
});

test('detects a missing section summary', () => {
  const changed = readme.replace('<summary>Show 7 skills</summary>\n', '');
  const errors = validateCountDeclarations(changed);

  assert(errors.some((error) => error.includes('is missing a count summary')));
});
