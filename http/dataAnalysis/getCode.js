// @ts-check

/**
 * @param {string} currentFileContent
 * @param {number} startLineNumber
 * @param {number} endLineNumberInclusive
 */
function getCode(currentFileContent, startLineNumber, endLineNumberInclusive) {
  const lines = currentFileContent.split('\n');
  const pickLines = [];
  for (let i = 0; i < lines.length; i++) {
    const lineNu = i + 1;
    if (lineNu >= startLineNumber && lineNu <= endLineNumberInclusive) {
      pickLines.push(lines[i]);
    }
  }

  return pickLines.join('\n');
}

module.exports = {
  getCode
}
