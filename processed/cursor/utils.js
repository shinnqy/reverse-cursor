// @ts-check

function countTrailingEmptyLines(lines) {
  let count = 0
  for (let i = lines.length - 1; i >= 0 && lines[i] === ""; i--) count++
  return count
}

export function replaceTextInRange(editor, range, newText, lineSeparator) {
  newText = newText.replace(/\r?\n/g, lineSeparator)
  const oldText = editor.getValueInRange({
      startLineNumber: range.startLineNumber,
      startColumn: range.startColumn,
      endLineNumber: range.endLineNumberInclusive,
      endColumn: range.endColumn,
    }),
    trailingEmptyLines = countTrailingEmptyLines(oldText.split(lineSeparator))
  if (
    ((newText = newText.replace(/(\r?\n)+$/, lineSeparator.repeat(trailingEmptyLines + 1))),
    editor.uri.scheme.startsWith("vscode-notebook-cell"))
  ) {
    const totalLines = editor.getValue().split(lineSeparator).length ?? 0
    range.endLineNumberInclusive === totalLines &&
      newText.endsWith(lineSeparator) &&
      (newText = newText.slice(0, -lineSeparator.length))
  }
  const oldLines = oldText.split(lineSeparator)
  let newLines = newText.split(lineSeparator)
  countTrailingEmptyLines(newLines) === countTrailingEmptyLines(oldLines) + 1 && (newLines = newLines.slice(0, -1))
  let matchingLinesCount = 0
  for (let i = 0; i < Math.min(oldLines.length, newLines.length); i++) {
    const oldLine = oldLines[oldLines.length - i - 1],
      newLine = newLines[newLines.length - i - 1]
    if (oldLine !== newLine) break
    matchingLinesCount++
  }
  return { isNoOp: matchingLinesCount === oldLines.length && matchingLinesCount === newLines.length }
}

export function generateModifiedText(editor, range, newText, lineSeparator, context) {
  const allLines = editor.getValue().split(lineSeparator),
    modifiedTexts = [newText],
    newTextLines = newText.split(lineSeparator),
    oldTextLines = allLines.slice(range.startLineNumber - 1, range.endLineNumberInclusive)
  let matchingLinesCount = 0
  for (; matchingLinesCount < Math.min(newTextLines.length, oldTextLines.length) && oldTextLines[matchingLinesCount] === newTextLines[matchingLinesCount]; matchingLinesCount++);
  if (oldTextLines[matchingLinesCount] !== "" && newTextLines[matchingLinesCount] === "") {
    const filteredNewText = newTextLines.filter((line, index) => matchingLinesCount !== index).join(lineSeparator)
    modifiedTexts.push(filteredNewText)
  }
  const generateFinalText = (text) => {
    let finalText =
      allLines
        .slice(0, range.startLineNumber - 1)
        .map((line) => line + lineSeparator)
        .join("") +
      text +
      lineSeparator +
      allLines.slice(range.endLineNumberInclusive).join(lineSeparator)
    return (
      editor.uri.scheme === "vscode-notebook-cell" &&
        (finalText =
          (context?.prevCellValues ?? []).map((line) => line + lineSeparator).join("") +
          finalText +
          (context?.afterCellValues ?? []).map((line) => lineSeparator + line).join("")),
      finalText
    )
  }
  return modifiedTexts.map(generateFinalText)
}