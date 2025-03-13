// @ts-check

/**
 * normalize output, remove possible markdown format prefix and suffix
 * @param {string} output
 */
function normalizeOutput(output) {
  if (!output) {
    return output;
  }

  const lines = output.split('\n');
  if (!lines.length) {
    return output;
  }

  if (lines[0].startsWith('```')) {
    lines.shift();
  }
  if (lines.length && lines[lines.length - 1].startsWith('```')) {
    lines.pop();
  }

  return lines.join('\n');
}

module.exports = {
  normalizeOutput
};
