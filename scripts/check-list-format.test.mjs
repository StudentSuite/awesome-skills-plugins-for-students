import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import { checkListFormat, compareNames, slugify } from './check-list-format.mjs';

const README = readFileSync(new URL('../README.md', import.meta.url), 'utf8');

// Mutations are applied to the real README so the tests track its actual structure.
function entryLines(readme) {
  return readme.split('\n').flatMap((line, index) => (line.startsWith('- **[') ? [index] : []));
}

test('the current README.md passes', () => {
  assert.deepEqual(checkListFormat(README), []);
});

test('flags an entry that is out of alphabetical order', () => {
  const lines = README.split('\n');
  // Swap two adjacent entries from the same list that currently sort the right way round.
  const index = entryLines(README).find(
    (i) => lines[i + 1]?.startsWith('- **[') && lines[i].toLowerCase() < lines[i + 1].toLowerCase()
  );
  assert.notEqual(index, undefined);
  [lines[index], lines[index + 1]] = [lines[index + 1], lines[index]];

  const errors = checkListFormat(lines.join('\n'));

  assert(errors.some((e) => e.includes('not alphabetically sorted')));
});

test('flags an entry that does not match the list format', () => {
  const lines = README.split('\n');
  const index = entryLines(README)[0];
  lines[index] = lines[index].replace(/\.$/, '');

  const errors = checkListFormat(lines.join('\n'));

  assert(errors.some((e) => e.includes("doesn't match") && e.includes(`README.md:${index + 1}`)));
});

test('flags a duplicate URL within one list', () => {
  const lines = README.split('\n');
  const [first, second] = entryLines(README);
  assert.equal(second, first + 1, 'expected the first two entries to be adjacent');
  const url = lines[first].match(/\]\((.+?)\)/)[1];
  lines[second] = lines[second].replace(/\]\(.+?\)/, `](${url})`);

  const errors = checkListFormat(lines.join('\n'));

  assert(errors.some((e) => e.includes('Duplicate URL')));
});

test('flags a Table of Contents entry with no matching heading', () => {
  const readme = README.replace('## Google Workspace for Students', '## Google Workspace Tools');

  const errors = checkListFormat(readme);

  assert(errors.some((e) => e.includes('Table of Contents entry') && e.includes('google-workspace-for-students')));
});

test('flags a section heading missing from the Table of Contents', () => {
  const readme = README.replace('## Google Workspace for Students', '## Google Workspace Tools');

  const errors = checkListFormat(readme);

  assert(errors.some((e) => e.includes('"Google Workspace Tools" is missing from the Table of Contents')));
});

test('flags a wrong section summary count', () => {
  const readme = README.replace(/<summary>Show (\d+) skills<\/summary>/, (_, n) => {
    return `<summary>Show ${Number(n) + 1} skills</summary>`;
  });

  const errors = checkListFormat(readme);

  assert(errors.length > 0);
});

test('slugify matches GitHub heading anchors', () => {
  assert.equal(slugify('IB & IGCSE Coursework'), 'ib--igcse-coursework');
  assert.equal(slugify('Study & Productivity'), 'study--productivity');
});

test('compareNames is case-insensitive', () => {
  assert.equal(compareNames('alpha', 'Beta'), -1);
  assert.equal(compareNames('Beta', 'alpha'), 1);
  assert.equal(compareNames('Same', 'same'), 0);
});
