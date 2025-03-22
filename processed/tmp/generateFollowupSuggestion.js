// @ts-check

export class _A {
  generateFollowupSuggestion(editor, fullTextResult, model, suggestion, position, eol, predictionId) {
    const modelCopy = Qcr(model, { range: TKn(suggestion.range), text: suggestion.replaceText })
    let currentRange = suggestion.startingSuggestionRange
    const adjustRange = () => {
        if (
          currentRange.endLineNumberInclusive >= modelCopy.getLineCount() &&
          position.lineNumber === currentRange.endLineNumberInclusive
        ) {
          const lastLineNumber = modelCopy.getLineCount(),
            lastLineText = modelCopy.getValueInRange({
              startLineNumber: lastLineNumber,
              startColumn: 1,
              endLineNumber: lastLineNumber + 1,
              endColumn: 1,
            })
          return new Hu({
            ...currentRange,
            endLineNumberInclusive: lastLineNumber,
            endColumn: lastLineText.length,
          })
        }
        return currentRange
      },
      currentSuggestion = this.getCurrentSuggestion()
    if (
      currentSuggestion === void 0 &&
      this.u?.requestId === suggestion.requestId &&
      this.u?.modelVersion === model.getVersionId() &&
      this.u?.modelId === model.id
    ) {
      currentRange = adjustRange()
      const newSuggestion = this.Gb.createUnseenSuggestion({
        model: modelCopy,
        diffText: fullTextResult,
        startingRange: currentRange,
        eol: eol,
        requestId: suggestion.requestId,
        selection: suggestion.selection,
        source: suggestion.source,
        modelVersionWhenInvoked: suggestion.modelVersionWhenInvoked,
        suggestionTriggerTime: suggestion.suggestionTriggerTime,
        fusedCursorPredictionId: predictionId,
      })
      if (newSuggestion === void 0) return
      this.displayCppSuggestion(editor, model, newSuggestion)
    } else if (currentSuggestion?.uniqueId !== suggestion.uniqueId)
      if (this.N.getMatchingSuggestion(suggestion.uniqueId) !== void 0) {
        const newSuggestion = this.Gb.createUnseenSuggestion({
          model: model,
          diffText: fullTextResult,
          source: suggestion.source,
          eol: eol,
          requestId: suggestion.requestId,
          selection: suggestion.selection,
          startingRange: currentRange,
          modelVersionWhenInvoked: suggestion.modelVersionWhenInvoked,
          suggestionTriggerTime: suggestion.suggestionTriggerTime,
          fusedCursorPredictionId: predictionId,
        })
        if (newSuggestion === void 0) {
          predictionId !== void 0 &&
            this.db.has(predictionId) &&
            this.displayFusedCursorPredictionIfAvailable(
              editor,
              model,
              predictionId,
              suggestion.replaceText ?? "",
              fullTextResult ?? "",
            )
          return
        }
        this.N.replaceSuggestionOnChunkedFollowup(suggestion.uniqueId, newSuggestion)
      } else return
    else {
      currentRange = adjustRange()
      const newSuggestion = this.Gb.createUnseenSuggestion({
        model: modelCopy,
        diffText: fullTextResult,
        startingRange: currentRange,
        eol: eol,
        requestId: suggestion.requestId,
        selection: suggestion.selection,
        source: suggestion.source,
        modelVersionWhenInvoked: suggestion.modelVersionWhenInvoked,
        suggestionTriggerTime: suggestion.suggestionTriggerTime,
        fusedCursorPredictionId: predictionId,
      })
      if (newSuggestion === void 0) {
        this.createOrUpdateSuggestionState({ fusedCursorPredictionId: predictionId })
        return
      }
      this.M.addSuggestion(newSuggestion),
        this.createOrUpdateSuggestionState({ onAcceptDisplayId: newSuggestion.uniqueId })
    }
  }
}