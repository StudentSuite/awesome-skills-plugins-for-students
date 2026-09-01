#!/usr/bin/env node
// Validates data/skills.json and data/plugins.json against the shape
// documented in data/schema/entry.schema.json. Hand-written rather than run
// through a generic JSON Schema library, to keep this repo's CI dependency-
// free (see the schema file's own description for why).

const VALID_CATEGORIES = new Set([
  'IB & IGCSE Coursework',
  'Study & Productivity',
  'Coding & CS Education',
  'STEM Subjects',
  'Writing & Humanities',
  'Language Learning',
  'College Applications & Career',
  'Google Workspace for Students',
  'Plugins',
]);
const VALID_MARKERS = new Set(['requires-key', 'external-service', null]);
const VALID_TOOLS = new Set(['claude-code', 'cursor', 'copilot', 'gemini-cli']);
const REQUIRED_KEYS = ['name', 'url', 'description', 'category', 'marker', 'supported_tools'];

/**
 * @param {string} label "data/skills.json" or "data/plugins.json"
 * @param {unknown} data parsed JSON content
 * @param {boolean} pluginsFile true when validating data/plugins.json (every entry's category must be "Plugins")
 * @returns {string[]} human-readable validation errors
 */
export function validateEntries(label, data, pluginsFile) {
  const errors = [];

  if (!Array.isArray(data)) {
    return [`${label} must be a JSON array of entries.`];
  }

  const seenUrls = new Map();
  const seenNames = new Map();

  data.forEach((entry, i) => {
    const where = `${label}[${i}]`;

    if (typeof entry !== 'object' || entry === null || Array.isArray(entry)) {
      errors.push(`${where} must be an object.`);
      return;
    }

    for (const key of REQUIRED_KEYS) {
      if (!(key in entry)) errors.push(`${where} is missing required key "${key}".`);
    }
    for (const key of Object.keys(entry)) {
      if (!REQUIRED_KEYS.includes(key)) errors.push(`${where} has an unknown key "${key}".`);
    }

    if (typeof entry.name !== 'string' || entry.name.length === 0) {
      errors.push(`${where}.name must be a non-empty string.`);
    } else {
      if (seenNames.has(entry.name)) {
        errors.push(`${where}.name duplicates ${seenNames.get(entry.name)}: "${entry.name}"`);
      }
      seenNames.set(entry.name, where);
    }

    if (typeof entry.url !== 'string' || !entry.url.startsWith('https://')) {
      errors.push(`${where}.url must be a string starting with "https://".`);
    } else {
      if (seenUrls.has(entry.url)) {
        errors.push(`${where}.url duplicates ${seenUrls.get(entry.url)}: ${entry.url}`);
      }
      seenUrls.set(entry.url, where);
    }

    if (typeof entry.description !== 'string' || entry.description.length === 0) {
      errors.push(`${where}.description must be a non-empty string.`);
    } else if (!entry.description.endsWith('.')) {
      errors.push(`${where}.description must end with a period: "${entry.description}"`);
    }

    if (typeof entry.category !== 'string' || !VALID_CATEGORIES.has(entry.category)) {
      errors.push(`${where}.category "${entry.category}" is not a known section heading.`);
    } else if (pluginsFile && entry.category !== 'Plugins') {
      errors.push(`${where}.category must be "Plugins" in data/plugins.json, got "${entry.category}".`);
    } else if (!pluginsFile && entry.category === 'Plugins') {
      errors.push(`${where}.category is "Plugins" but this entry is in data/skills.json, not data/plugins.json.`);
    }

    if (!VALID_MARKERS.has(entry.marker ?? null)) {
      errors.push(`${where}.marker "${entry.marker}" must be "requires-key", "external-service", or null.`);
    }

    if (!Array.isArray(entry.supported_tools) || entry.supported_tools.length === 0) {
      errors.push(`${where}.supported_tools must be a non-empty array.`);
    } else {
      const unknown = entry.supported_tools.filter((t) => !VALID_TOOLS.has(t));
      if (unknown.length) {
        errors.push(`${where}.supported_tools has unknown tool name(s): ${unknown.join(', ')}`);
      }
      if (new Set(entry.supported_tools).size !== entry.supported_tools.length) {
        errors.push(`${where}.supported_tools has duplicate entries.`);
      }
    }
  });

  return errors;
}

// --- CLI runner ---
const isMain = process.argv[1] && new URL(`file://${process.argv[1]}`).href === import.meta.url;
if (isMain) {
  const { readFileSync } = await import('node:fs');
  const SKILLS_PATH = new URL('../data/skills.json', import.meta.url);
  const PLUGINS_PATH = new URL('../data/plugins.json', import.meta.url);

  const errors = [];
  try {
    const skills = JSON.parse(readFileSync(SKILLS_PATH, 'utf8'));
    errors.push(...validateEntries('data/skills.json', skills, false));
  } catch (e) {
    errors.push(`data/skills.json is not valid JSON: ${e.message}`);
  }
  try {
    const plugins = JSON.parse(readFileSync(PLUGINS_PATH, 'utf8'));
    errors.push(...validateEntries('data/plugins.json', plugins, true));
  } catch (e) {
    errors.push(`data/plugins.json is not valid JSON: ${e.message}`);
  }

  if (errors.length) {
    console.error(`✖ ${errors.length} issue(s) found:\n`);
    for (const e of errors) console.error(`  ${e}\n`);
    process.exit(1);
  } else {
    console.log('✔ data/skills.json and data/plugins.json match the schema in data/schema/entry.schema.json.');
  }
}
