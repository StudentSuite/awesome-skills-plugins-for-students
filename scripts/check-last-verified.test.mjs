import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import { validateLastVerified } from './check-last-verified.mjs';

const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
const rawJson = readFileSync(new URL('../data/last-verified.json', import.meta.url), 'utf8');

// A minimal fixture README with two entries, used for the failure cases below
// so adding or removing a real entry never breaks this test suite.
const fixtureReadme = [
  '# Awesome Skills',
  '',
  '- **[author/skill-a](https://github.com/author/skill-a)** - Does one thing.',
  '- **[author/skill-b](https://github.com/author/skill-b)** - Does another thing.',
  '',
].join('\n');

test('accepts the real data/last-verified.json against the real README', () => {
  assert.deepEqual(validateLastVerified(readme, rawJson), []);
});

test('accepts a well-formed data file', () => {
  const data = JSON.stringify({
    'https://github.com/author/skill-a': '2026-01-01',
    'https://github.com/author/skill-b': '2026-06-15',
  });
  assert.deepEqual(validateLastVerified(fixtureReadme, data), []);
});

test('rejects invalid JSON', () => {
  const errors = validateLastVerified(fixtureReadme, '{ not json');
  assert(errors.some((e) => e.includes('is not valid JSON')));
});

test('rejects a URL with no matching README entry', () => {
  const data = JSON.stringify({ 'https://github.com/author/skill-gone': '2026-01-01' });
  const errors = validateLastVerified(fixtureReadme, data);
  assert(errors.some((e) => e.includes("doesn't match any README.md entry")));
});

test('rejects a non-ISO date', () => {
  const data = JSON.stringify({ 'https://github.com/author/skill-a': '01/01/2026' });
  const errors = validateLastVerified(fixtureReadme, data);
  assert(errors.some((e) => e.includes('must be an ISO date')));
});

test('rejects a future date', () => {
  const data = JSON.stringify({ 'https://github.com/author/skill-a': '2099-01-01' });
  const errors = validateLastVerified(fixtureReadme, data);
  assert(errors.some((e) => e.includes('is in the future')));
});

test('rejects unsorted keys', () => {
  const data = JSON.stringify({
    'https://github.com/author/skill-b': '2026-01-01',
    'https://github.com/author/skill-a': '2026-01-01',
  });
  const errors = validateLastVerified(fixtureReadme, data);
  assert(errors.some((e) => e.includes('sorted alphabetically')));
});
