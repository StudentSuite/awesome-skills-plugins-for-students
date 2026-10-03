import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import { validateBundleCounts } from './check-bundle-counts.mjs';

const skills = [
  { category: 'A', marker: null },
  { category: 'A', marker: 'external-service' },
  { category: 'A', marker: 'requires-key' },
  { category: 'B', marker: null },
];

function readme(rows) {
  return [
    '## Install a bundle in one command',
    '',
    '| Bundle | Skills | Install |',
    '| --- | :-: | --- |',
    ...rows,
    '',
    '## Next',
  ].join('\n');
}

test('accepts counts that exclude requires-key entries', () => {
  const r = readme(['| A | 2 | `claude plugin install a-bundle` |', '| B | 1 | `claude plugin install b-bundle` |']);
  assert.deepEqual(validateBundleCounts(r, skills), []);
});

test('flags a stale count', () => {
  const r = readme(['| A | 3 | `x` |', '| B | 1 | `y` |']);
  const errors = validateBundleCounts(r, skills);
  assert.equal(errors.length, 1);
  assert.match(errors[0], /"A" has 3 skills.*installs 2/);
});

test('flags an unknown bundle and a missing category row', () => {
  const r = readme(['| A | 2 | `x` |', '| Z | 1 | `z` |']);
  const errors = validateBundleCounts(r, skills);
  assert.equal(errors.length, 2);
  assert.match(errors.join('\n'), /"Z" does not match/);
  assert.match(errors.join('\n'), /"B" installs 1 skills but has no row/);
});

test('flags a missing section', () => {
  assert.equal(validateBundleCounts('# x', skills).length, 1);
});

test('the real README matches the real data', () => {
  const real = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
  const data = JSON.parse(readFileSync(new URL('../data/skills.json', import.meta.url), 'utf8'));
  assert.deepEqual(validateBundleCounts(real, data), []);
});
