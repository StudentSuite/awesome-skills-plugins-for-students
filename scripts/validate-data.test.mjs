import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import { validateEntries } from './validate-data.mjs';

const skills = JSON.parse(readFileSync(new URL('../data/skills.json', import.meta.url), 'utf8'));
const plugins = JSON.parse(readFileSync(new URL('../data/plugins.json', import.meta.url), 'utf8'));

function goodEntry(overrides = {}) {
  return {
    name: 'author/skill',
    url: 'https://github.com/author/skill',
    description: 'Does one thing well.',
    category: 'Coding & CS Education',
    marker: null,
    supported_tools: ['claude-code', 'cursor', 'copilot'],
    ...overrides,
  };
}

test('accepts the real data/skills.json', () => {
  assert.deepEqual(validateEntries('data/skills.json', skills, false), []);
});

test('accepts the real data/plugins.json', () => {
  assert.deepEqual(validateEntries('data/plugins.json', plugins, true), []);
});

test('accepts a well-formed entry', () => {
  assert.deepEqual(validateEntries('fixture', [goodEntry()], false), []);
});

test('accepts a well-formed entry with a marker', () => {
  assert.deepEqual(
    validateEntries('fixture', [goodEntry({ marker: 'requires-key' })], false),
    []
  );
});

test('rejects a non-array top level', () => {
  const errors = validateEntries('fixture', { not: 'an array' }, false);
  assert(errors.some((e) => e.includes('must be a JSON array')));
});

test('rejects a missing required key', () => {
  const entry = goodEntry();
  delete entry.description;
  const errors = validateEntries('fixture', [entry], false);
  assert(errors.some((e) => e.includes('missing required key "description"')));
});

test('rejects an unknown key', () => {
  const errors = validateEntries('fixture', [goodEntry({ extra: 'nope' })], false);
  assert(errors.some((e) => e.includes('unknown key "extra"')));
});

test('rejects a url not starting with https://', () => {
  const errors = validateEntries('fixture', [goodEntry({ url: 'http://insecure.example' })], false);
  assert(errors.some((e) => e.includes('must be a string starting with "https://"')));
});

test('rejects a description with no trailing period', () => {
  const errors = validateEntries('fixture', [goodEntry({ description: 'No period' })], false);
  assert(errors.some((e) => e.includes('must end with a period')));
});

test('rejects an unknown category', () => {
  const errors = validateEntries('fixture', [goodEntry({ category: 'Not A Real Section' })], false);
  assert(errors.some((e) => e.includes('is not a known section heading')));
});

test('rejects a non-Plugins category in data/plugins.json', () => {
  const errors = validateEntries('fixture', [goodEntry()], true);
  assert(errors.some((e) => e.includes('must be "Plugins" in data/plugins.json')));
});

test('rejects a Plugins category in data/skills.json', () => {
  const errors = validateEntries('fixture', [goodEntry({ category: 'Plugins' })], false);
  assert(errors.some((e) => e.includes('is "Plugins" but this entry is in data/skills.json')));
});

test('rejects an unknown marker value', () => {
  const errors = validateEntries('fixture', [goodEntry({ marker: 'sparkles' })], false);
  assert(errors.some((e) => e.includes('must be "requires-key", "external-service", or null')));
});

test('rejects an unknown tool name in supported_tools', () => {
  const errors = validateEntries('fixture', [goodEntry({ supported_tools: ['claude-code', 'chatgpt'] })], false);
  assert(errors.some((e) => e.includes('unknown tool name(s): chatgpt')));
});

test('rejects an empty supported_tools array', () => {
  const errors = validateEntries('fixture', [goodEntry({ supported_tools: [] })], false);
  assert(errors.some((e) => e.includes('must be a non-empty array')));
});

test('rejects a duplicate url across entries', () => {
  const errors = validateEntries('fixture', [goodEntry(), goodEntry({ name: 'author/skill-two' })], false);
  assert(errors.some((e) => e.includes('.url duplicates')));
});

test('rejects a duplicate name across entries', () => {
  const errors = validateEntries(
    'fixture',
    [goodEntry(), goodEntry({ url: 'https://github.com/author/skill-two' })],
    false
  );
  assert(errors.some((e) => e.includes('.name duplicates')));
});
