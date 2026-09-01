#!/usr/bin/env node
// One-time (and re-runnable) extraction: parses README.md's <details> blocks
// into data/skills.json and data/plugins.json. Used to seed the data files
// from the current hand-maintained README; going forward the data files are
// the source of truth and scripts/generate-readme.mjs regenerates README.md
// from them (see scripts/generate-readme.mjs and CONTRIBUTING.md).
//
// Every entry's supported_tools defaults to ["claude-code", "cursor",
// "copilot"], the three tools every existing entry works with per this
// repo's own conventions (a plain SKILL.md / Cursor-rules-compatible file).
// gemini-cli-extensions/datacommons is the sole exception, and in the other
// direction: its repo ships a gemini-extension.json, Gemini CLI's own
// extension-manifest format, not a SKILL.md, so it's Gemini-CLI-only rather
// than also being Claude Code/Cursor/Copilot-compatible (confirmed by
// reading the repo's file listing directly). No other entry has been
// individually verified against Gemini CLI (see the still-open #96) or
// Copilot, so the ["claude-code", "cursor", "copilot"] default is a
// documented, evidence-based baseline, not a claim that every entry has
// been spot-checked against all three.

import { readFileSync, writeFileSync } from 'node:fs';

const README_PATH = new URL('../README.md', import.meta.url);
const readme = readFileSync(README_PATH, 'utf8');
const lines = readme.split('\n');

const MARKERS = { '🔑': 'requires-key', '🌐': 'external-service' };
// Ships a gemini-extension.json, not a SKILL.md -- Gemini-CLI-only.
const GEMINI_ONLY = new Set(['https://github.com/gemini-cli-extensions/datacommons']);

let currentHeading = null;
let inDetails = false;
const skills = [];
const plugins = [];

for (const line of lines) {
  const h2 = line.match(/^## (.+)/);
  if (h2) currentHeading = h2[1].trim();
  if (line.startsWith('<details')) {
    inDetails = true;
    continue;
  }
  if (line.startsWith('</details>')) {
    inDetails = false;
    continue;
  }
  if (!inDetails || !line.startsWith('- ')) continue;

  const item = line.match(/^- \*\*\[(.+?)\]\((.+?)\)\*\*\s*-\s*(.+)$/);
  if (!item) continue;
  const [, name, url, rawDescription] = item;

  let marker = null;
  let description = rawDescription;
  for (const [emoji, key] of Object.entries(MARKERS)) {
    if (rawDescription.startsWith(`${emoji} `)) {
      marker = key;
      description = rawDescription.slice(emoji.length + 1);
      break;
    }
  }

  const supported_tools = GEMINI_ONLY.has(url) ? ['gemini-cli'] : ['claude-code', 'cursor', 'copilot'];

  const entry = { name, url, description, category: currentHeading, marker, supported_tools };
  (currentHeading === 'Plugins' ? plugins : skills).push(entry);
}

function byName(a, b) {
  const al = a.name.toLowerCase();
  const bl = b.name.toLowerCase();
  return al < bl ? -1 : al > bl ? 1 : 0;
}
skills.sort(byName);
plugins.sort(byName);

writeFileSync(new URL('../data/skills.json', import.meta.url), JSON.stringify(skills, null, 2) + '\n');
writeFileSync(new URL('../data/plugins.json', import.meta.url), JSON.stringify(plugins, null, 2) + '\n');

console.log(`Extracted ${skills.length} skills and ${plugins.length} plugins.`);
