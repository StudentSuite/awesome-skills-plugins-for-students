#!/usr/bin/env node
// Validates data/last-verified.json against README.md and the convention
// documented in CONTRIBUTING.md ("Tracking last-verified dates"):
//   - the file is valid JSON: a flat object mapping URL -> ISO date
//   - every key is a URL that actually appears in a README.md entry bullet
//   - every value matches YYYY-MM-DD and isn't in the future
//   - keys are sorted alphabetically

import { readFileSync } from 'node:fs';

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/**
 * @param {string} readme contents of README.md
 * @param {string} rawJson contents of data/last-verified.json
 * @returns {string[]} human-readable validation errors
 */
export function validateLastVerified(readme, rawJson) {
  let data;
  try {
    data = JSON.parse(rawJson);
  } catch (e) {
    return [`data/last-verified.json is not valid JSON: ${e.message}`];
  }

  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    return ['data/last-verified.json must be a flat JSON object of "url": "YYYY-MM-DD" pairs.'];
  }

  const errors = [];
  const keys = Object.keys(data);

  // Every URL used in a README.md entry bullet: "- **[name](url)** - description".
  const readmeUrls = new Set(
    [...readme.matchAll(/^- \*\*\[.+?\]\((.+?)\)\*\*/gm)].map((m) => m[1])
  );

  const today = new Date().toISOString().slice(0, 10);

  for (const key of keys) {
    if (!readmeUrls.has(key)) {
      errors.push(
        `data/last-verified.json  URL doesn't match any README.md entry (typo, or the entry was removed): ${key}`
      );
    }

    const value = data[key];
    if (typeof value !== 'string' || !DATE_RE.test(value)) {
      errors.push(
        `data/last-verified.json  Value for "${key}" must be an ISO date (YYYY-MM-DD), got: ${JSON.stringify(value)}`
      );
      continue;
    }
    if (value > today) {
      errors.push(`data/last-verified.json  Date for "${key}" is in the future: ${value}`);
    }
  }

  const sorted = [...keys].sort();
  if (JSON.stringify(sorted) !== JSON.stringify(keys)) {
    errors.push(
      `data/last-verified.json  Keys must be sorted alphabetically.\n` +
        `    got:  ${keys.join(', ')}\n` +
        `    want: ${sorted.join(', ')}`
    );
  }

  return errors;
}

// --- CLI runner ---
const isMain = process.argv[1] && new URL(`file://${process.argv[1]}`).href === import.meta.url;
if (isMain) {
  const README_PATH = new URL('../README.md', import.meta.url);
  const DATA_PATH = new URL('../data/last-verified.json', import.meta.url);
  const readme = readFileSync(README_PATH, 'utf8');
  const rawJson = readFileSync(DATA_PATH, 'utf8');

  const errors = validateLastVerified(readme, rawJson);

  if (errors.length) {
    console.error(`✖ ${errors.length} issue(s) found:\n`);
    for (const e of errors) console.error(`  ${e}\n`);
    process.exit(1);
  } else {
    console.log('✔ data/last-verified.json is valid JSON, alphabetically sorted, and every URL matches a README.md entry.');
  }
}
