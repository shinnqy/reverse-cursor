// @ts-check

class _A {
  updateVisibleSuggestionText(editor, textChanges, range, editorModel, undoRedoGroup, eol) {
    let currentLine = range.startLineNumber,
      currentColumn = 1,
      editOperations = []
    for (const change of textChanges) {
      const lines = change.value.split(eol),
        endLine = currentLine + lines.length - 1,
        endColumn = lines.length > 1 ? lines[lines.length - 1].length + 1 : currentColumn + change.value.length
      change.added === true
        ? editOperations.push({ range: new G(currentLine, currentColumn, currentLine, currentColumn), text: change.value })
        : change.removed === true && editOperations.push({ range: new G(currentLine, currentColumn, endLine, endColumn), text: "" }),
        change.added !== true && ((currentColumn = endColumn), (currentLine = endLine))
    }
    const mergedRange = tdi(editOperations, editorModel)
    if (
      (editorModel.pushEditOperations([], editOperations, () => null, undoRedoGroup),
      editorModel.pushStackElement(),
      editOperations.every(
        (op) =>
          op.range.endLineNumber === op.range.startLineNumber &&
          op.range.endColumn === op.range.startColumn,
      ))
    ) {
      if (
        mergedRange.range.startLineNumber === mergedRange.range.endLineNumber &&
        !mergedRange.text.includes(`
`)
      )
        editor.setPosition(
          new Me(
            mergedRange.range.startLineNumber,
            mergedRange.range.startColumn + mergedRange.text.length,
          ),
        )
      else if (editOperations.length === 1) {
        const cursorPosition = editor.getPosition()
        if (cursorPosition === null) return
        const textRange = G.fromPositions(
          cursorPosition,
          new Me(mergedRange.range.startLineNumber, mergedRange.range.startColumn),
        )
        if (editorModel.getValueInRange(textRange).trim().length === 0) {
          const newPosition = _fo(mergedRange)
          editor.setPosition(newPosition)
        }
      }
    }
  }
}
