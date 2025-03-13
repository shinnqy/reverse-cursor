// @ts-check

const { config } = require('./config');

const EDITABLE_RANGE_FROM_CURSOR_LINE = config.editableRangeFromCursorLine;

/**
 *
 * @param {{ code: string; lineNumberZeroIndexed: number; columnNumberZeroIndexed: number; insertString: string; shouldSetEditableRange?: boolean}} params
 * @returns
 */
function modifyCode(params) {
  // zero indexed
  const { code, lineNumberZeroIndexed, columnNumberZeroIndexed, insertString, shouldSetEditableRange = false } = params;

  if (!code) {
    return '';
  }

  try {

    const lines = code.split('\n');

    if (lineNumberZeroIndexed < 0 || lineNumberZeroIndexed > lines.length - 1) {
      throw new Error('Invalid line number');
    }

    const targetLine = lines[lineNumberZeroIndexed];

    if (columnNumberZeroIndexed < 0 || columnNumberZeroIndexed > targetLine.length - 1) {

      const needColumnCount = columnNumberZeroIndexed - targetLine.length;
      const newLine = targetLine + (new Array(needColumnCount)).fill('').join(' ') + insertString;
      lines[lineNumberZeroIndexed] = newLine;
    } else {
      const newLine = targetLine.slice(0, columnNumberZeroIndexed) + insertString + targetLine.slice(columnNumberZeroIndexed);
      lines[lineNumberZeroIndexed] = newLine;
    }

    if (shouldSetEditableRange) {
      const res = lines.join('\n');
      return setEditableRange(res, lineNumberZeroIndexed)
    } else {
      return lines.join('\n');
    }
  } catch (e) {
    console.error(e)
  }
}

/**
 *
 * @param {string} code
 * @param {number} cursorLineNumberZeroIndex
 */
function setEditableRange(code, cursorLineNumberZeroIndex) {
  if (!code) {
    return '';
  }

  try {
    const lines = code.split('\n');

    if (cursorLineNumberZeroIndex < 0 || cursorLineNumberZeroIndex > lines.length - 1) {
      throw new Error('Invalid line number');
    }

    const startLineNumber = Math.max(cursorLineNumberZeroIndex - EDITABLE_RANGE_FROM_CURSOR_LINE, 0);
    const endLineNumber = Math.min(cursorLineNumberZeroIndex + EDITABLE_RANGE_FROM_CURSOR_LINE, lines.length - 1);

    const resLines = [];
    for (let i = 0; i < lines.length; i++) {
      if (i === startLineNumber) {
        resLines.push('<|editable_region_start|>');
      }

      resLines.push(lines[i]);

      if (i === endLineNumber) {
        resLines.push('<|editable_region_end|>')
      }
    }

    return resLines.join('\n');
  } catch (e) {
    console.log(e)
  }
}

exports.modifyCode = modifyCode;
