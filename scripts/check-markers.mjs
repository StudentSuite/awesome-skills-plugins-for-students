// Validates the 🔑/🌐 markers documented in CONTRIBUTING.md's entry format
// section: at most one marker per entry, and when present it must be the
// very first thing in the description, followed by a single space and a
// capitalized word.

const MARKERS = ['🔑', '🌐'];

/**
 * @param {{ description: string, line: number }[]} items every parsed
 *   README.md entry (name/url/line plus its description text)
 * @returns {string[]} human-readable validation errors
 */
export function validateMarkers(items) {
  const errors = [];

  for (const item of items) {
    const present = MARKERS.filter((marker) => item.description.includes(marker));

    if (present.length > 1) {
      errors.push(
        `README.md:${item.line}  Entry has more than one marker (${present.join(' and ')}); only one marker is supported per entry.\n    ${item.description}`
      );
      continue;
    }
    if (present.length === 0) continue;

    const marker = present[0];
    if (item.description.split(marker).length - 1 > 1) {
      errors.push(`README.md:${item.line}  Marker ${marker} appears more than once.\n    ${item.description}`);
      continue;
    }
    if (!new RegExp(`^${marker} [A-Z0-9]`).test(item.description)) {
      errors.push(
        `README.md:${item.line}  Marker ${marker} must be the first thing in the description, followed by a single space and a capitalized word.\n    ${item.description}`
      );
    }
  }

  return errors;
}
