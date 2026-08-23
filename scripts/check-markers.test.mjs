import assert from 'node:assert/strict';
import test from 'node:test';

import { validateMarkers } from './check-markers.mjs';

test('accepts entries with no marker', () => {
  const errors = validateMarkers([{ description: 'Does one thing.', line: 1 }]);
  assert.deepEqual(errors, []);
});

test('accepts a well-formed 🔑 marker', () => {
  const errors = validateMarkers([{ description: '🔑 Needs a paid account.', line: 1 }]);
  assert.deepEqual(errors, []);
});

test('accepts a well-formed 🌐 marker', () => {
  const errors = validateMarkers([{ description: '🌐 Calls a live API.', line: 1 }]);
  assert.deepEqual(errors, []);
});

test('rejects a marker placed mid-sentence', () => {
  const errors = validateMarkers([{ description: 'Does something 🔑 mid-sentence.', line: 3 }]);
  assert(errors.some((e) => e.includes('must be the first thing in the description')));
});

test('rejects a marker not followed by a space and capital letter', () => {
  const errors = validateMarkers([{ description: '🔑needs a key.', line: 4 }]);
  assert(errors.some((e) => e.includes('must be the first thing in the description')));
});

test('rejects both markers on the same entry', () => {
  const errors = validateMarkers([{ description: '🔑 🌐 Needs a key and the internet.', line: 5 }]);
  assert(errors.some((e) => e.includes('more than one marker')));
});

test('rejects a marker repeated twice', () => {
  const errors = validateMarkers([{ description: '🔑 Needs a key, then another 🔑.', line: 6 }]);
  assert(errors.some((e) => e.includes('appears more than once')));
});
