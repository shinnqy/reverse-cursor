// @ts-check

export function createCppSuggestionService(params) {
  const {rt, replaceTextInRange, fz} = params;

  const ldi = class {
    constructor(initialSuggestionId) {
      ;(this.b = initialSuggestionId), (this.a = 1)
    }
    createUnseenSuggestion(suggestionParams) {
      const uniqueId = rt(),
        { isNoOp } = replaceTextInRange(suggestionParams.model, suggestionParams.startingRange, suggestionParams.diffText, suggestionParams.eol)
      if (isNoOp) return
      const originalText = suggestionParams.model.getValueInRange({
        startLineNumber: suggestionParams.startingRange.startLineNumber,
        startColumn: suggestionParams.startingRange.startColumn,
        endLineNumber: suggestionParams.startingRange.endLineNumberInclusive,
        endColumn: suggestionParams.startingRange.endColumn,
      })
      return {
        uniqueId: uniqueId,
        uri: suggestionParams.model.uri,
        modelVersionWhenInvoked: suggestionParams.modelVersionWhenInvoked,
        suggestionIsCurrentlyHidden: true,
        modelVersionWhenCreated: suggestionParams.model.getVersionId(),
        monotonicallyIncreasingSuggestionId: this.a++,
        range: suggestionParams.startingRange,
        replaceText: suggestionParams.diffText,
        originalText: originalText,
        startingSuggestionRange: suggestionParams.startingRange,
        diffText: suggestionParams.diffText,
        fullOriginalText: originalText,
        suggestionTriggerTime: suggestionParams.suggestionTriggerTime,
        greens: [],
        source: suggestionParams.source,
        requestId: suggestionParams.requestId,
        selection: suggestionParams.selection,
        fusedCursorPredictionId: suggestionParams.fusedCursorPredictionId,
        undoRedoGroup: new fz(),
        immediatelySeen: false,
        hasBeenSeen: false,
      }
    }
  };

  return ldi;
}