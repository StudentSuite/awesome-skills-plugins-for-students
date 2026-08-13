function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/ /g, '-');
}

/**
 * Check every count readers see in README.md against the resource bullets.
 *
 * @param {string} readme
 * @returns {string[]} human-readable validation errors
 */
export function validateCountDeclarations(readme) {
  const lines = readme.split('\n');
  const errors = [];
  const blocks = [];
  let currentHeading = null;
  let currentBlock = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const h2 = line.match(/^## (.+)/);
    if (h2) currentHeading = h2[1].trim();

    if (line.startsWith('<details')) {
      currentBlock = {
        heading: currentHeading,
        line: i + 1,
        count: 0,
        summary: null,
        sawSummary: false,
      };
      continue;
    }

    if (!currentBlock) continue;

    if (line.startsWith('<summary>')) {
      currentBlock.sawSummary = true;
      const summary = line.match(/^<summary>Show (\d+) (skills|plugins)<\/summary>$/);
      if (summary) {
        currentBlock.summary = {
          count: Number(summary[1]),
          kind: summary[2],
          line: i + 1,
        };
      } else {
        errors.push(
          `README.md:${i + 1}  Count summary must match "<summary>Show N skills|plugins</summary>".\n    ${line}`
        );
      }
      continue;
    }

    if (line.startsWith('- ')) currentBlock.count++;

    if (line.startsWith('</details>')) {
      if (currentBlock.summary || currentBlock.count) blocks.push(currentBlock);
      currentBlock = null;
    }
  }

  const tocCounts = new Map();
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(
      /\[(.+?)\]\(#(.+?)\)\s*\|\s*(\d+)\s+(skills|plugins)\s*\|\s*$/i
    );
    if (match) {
      tocCounts.set(match[2], {
        count: Number(match[3]),
        kind: match[4].toLowerCase(),
        line: i + 1,
      });
    }
  }

  const totals = { skills: 0, plugins: 0 };
  const declaredTotals = { skills: 0, plugins: 0 };
  const summariesComplete = { skills: true, plugins: true };
  for (const block of blocks) {
    const kind = block.heading === 'Plugins' ? 'plugins' : 'skills';
    totals[kind] += block.count;

    if (!block.sawSummary) {
      errors.push(`README.md:${block.line}  Section "${block.heading}" is missing a count summary.`);
    }
    if (!block.summary) summariesComplete[kind] = false;
    if (block.summary) {
      declaredTotals[kind] += block.summary.count;
      if (block.summary.count !== block.count) {
        errors.push(
          `README.md:${block.summary.line}  Summary count for "${block.heading}" is ${block.summary.count}, but the section contains ${block.count} ${kind}.`
        );
      }
      if (block.summary.kind !== kind) {
        errors.push(
          `README.md:${block.summary.line}  Summary for "${block.heading}" says ${block.summary.kind}, but this is a ${kind} section.`
        );
      }
    }

    const toc = tocCounts.get(slugify(block.heading));
    if (!toc) {
      errors.push(`README.md:${block.line}  Section "${block.heading}" has no count in the Table of Contents.`);
      continue;
    }
    if (toc.count !== block.count) {
      errors.push(
        `README.md:${toc.line}  Table of Contents count for "${block.heading}" is ${toc.count}, but the section contains ${block.count} ${kind}.`
      );
    }
    if (toc.kind !== kind) {
      errors.push(
        `README.md:${toc.line}  Table of Contents count for "${block.heading}" says ${toc.kind}, but this is a ${kind} section.`
      );
    }
  }

  for (const kind of ['skills', 'plugins']) {
    const label = kind[0].toUpperCase() + kind.slice(1);
    const badgeLine = lines.findIndex((line) => line.startsWith(`![${label}](`));
    const badge =
      badgeLine === -1
        ? null
        : lines[badgeLine].match(new RegExp(`/badge/${kind}-(\\d+)-`, 'i'));
    const expectedTotal = summariesComplete[kind] ? declaredTotals[kind] : totals[kind];
    if (!badge) {
      errors.push(`README.md  Missing or malformed ${label} count badge.`);
    } else if (Number(badge[1]) !== expectedTotal) {
      errors.push(
        `README.md:${badgeLine + 1}  ${label} badge count is ${badge[1]}, but the section summaries total ${expectedTotal} ${kind}.`
      );
    }
  }

  return errors;
}
