// @ts-check
const { modifyCode } = require('./modifyCode');

function replaceStringFromPosition(originalStr, lineNumber, columnNumber, replacementStr) {
  const lines = originalStr.split('\n');

  if (lineNumber < 0 || lineNumber > lines.length - 1) {
      console.error('invalid line number')
      return;
  }

  let targetLine = lines[lineNumber];

  if (columnNumber > targetLine.length) {
      const needColumnCount = columnNumber - targetLine.length;
      targetLine = targetLine.padEnd(needColumnCount, ' ');
  }

  if (columnNumber < 0) {
      throw new Error('Invalid column number');
  }

  lines[lineNumber] = targetLine;

  let position = 0;
  for (let i = 0; i < lineNumber - 2; i++) {
      position += lines[i].length + 1; // +1 是为了包括换行符
  }
  position += columnNumber;

  const originalArray = lines.join('\n').split('');

  for (let i = 0; i < replacementStr.length; i++) {
      if (position + i < originalArray.length) {
          originalArray[position + i] = replacementStr[i];
      } else {
          // 如果超出原始字符串长度，直接追加字符
          originalArray.push(replacementStr[i]);
      }
  }

  return originalArray.join('');
}

/**
 *
 * @param {string} originalStr
 * @param {{ replaceText: string; originalText: string; range: { startLineNumber: number; startColumn: number; endLineNumberInclusive: number; endColumn: number } }} acceptedSuggestion
 */
function replaceStringBasedOnSuggestion(originalStr, acceptedSuggestion) {
  if (!acceptedSuggestion) {
    return {};
  }

  const lines = originalStr.split('\n');
  const { range, replaceText, originalText } = acceptedSuggestion;
  const { startLineNumber, startColumn, endLineNumberInclusive, endColumn } = range;

  const realLStartLineNumber = startLineNumber > 0 ? startLineNumber - 1 : 0;

  const replaceTextLines = replaceText.split('\n');
  const originalTextLines = originalText.split('\n');

  for (let i = realLStartLineNumber; i <= endLineNumberInclusive; i++) {
    const replaceTextLine = replaceTextLines.shift();
    if (replaceTextLine == undefined) {
      // throw new Error('replaceTextLine is undefined')
      break;
    }
    lines[i] = replaceTextLine;
  }

  if (replaceTextLines.length > 0) {
    // throw new Error('replaceTextLine is not fully processed');
    // console.error('replaceTextLine is not fully processed');
    while (replaceTextLines.length > 0) {
      // @ts-ignore
      lines.push(replaceTextLines.shift());
    }
  }

  const lastAcceptLine = startLineNumber - 1; // -1 ? // currently for preview
  const lastAcceptColumn = lines[lastAcceptLine].length; // currently for preview
  return {
    replacedContents: lines.join('\n'),
    lastAcceptLine,
    lastAcceptColumn,
  };
}

exports.replaceStringFromPosition = replaceStringFromPosition;
exports.replaceStringBasedOnSuggestion = replaceStringBasedOnSuggestion;
