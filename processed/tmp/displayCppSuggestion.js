// @ts-check

export class _A {
  displayCppSuggestion(editor, model, suggestion) {
    if (this.textEqualsCurrentRange(model, suggestion.replaceText, suggestion.range))
      return oa("[Cpp] Bad Case: Suggestion text matches current text"), !1
    if (
      this.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING === true
    )
      return oa("[Cpp] Bad Case: triggering is paused"), !1
    const currentSuggestion = this.getCurrentSuggestion()
    if (
      currentSuggestion !== undefined &&
      currentSuggestion.source !== ll.CursorPrediction &&
      suggestion.source === ll.CursorPrediction
    )
      return false
    currentSuggestion !== undefined &&
      (console.info(
        "[Cpp] Bad Case: Clearing suggestion because it already exists",
        currentSuggestion.source,
      ),
      this.clearSuggestions())
    const endColumn = model.getLineMaxColumn(
        suggestion.startingSuggestionRange.endLineNumberInclusive,
      ),
      adjustedRange = { ...suggestion.startingSuggestionRange, endColumn: endColumn },
      decorationId = this.createSuggestionDecoration(model, adjustedRange, true),
      decoratedSuggestion = { ...suggestion, decorationId: decorationId }
    this.createOrUpdateSuggestionState(decoratedSuggestion)
    const updatedSuggestion = this.getCurrentSuggestion(),
      startingRange = suggestion.startingSuggestionRange,
      recoverableData = this.createRecoverableData({
        requestId: suggestion.requestId,
        diffText: suggestion.diffText,
        startingRange: startingRange,
        selection: suggestion.selection,
      })
    return (
      updatedSuggestion
        ? this.qb.recordCppSuggestionEvent(model, updatedSuggestion, recoverableData)
        : this.qb.recordCppSuggestionEvent(model, decoratedSuggestion, recoverableData),
      (this.z = recoverableData.requestId),
      this.Ob().cppAutoImportEnabled && this.Ib.showCorrectUI(editor),
      true
    )
  }
}