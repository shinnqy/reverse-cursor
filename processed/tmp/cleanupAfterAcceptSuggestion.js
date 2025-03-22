// @ts-check

export class _A {
  cleanupAfterAcceptSuggestion(editor, suggestion) {
    this.abortAllCppRequests(suggestion?.requestId)
    const positionRange = this.getEditorCurrentPositionRange(editor),
      model = editor.getModel()
    if (!model || positionRange === null) return
    const visibleSuggestion = suggestion ?? this.getVisibleSuggestion()
    if (visibleSuggestion !== null) {
      if (
        ((this.u = {
          requestId: visibleSuggestion.requestId,
          modelVersion: model.getVersionId(),
          modelId: model.id,
        }),
        (this.numberOfClearedSuggestionsSinceLastAccept = 0),
        this.clearSuggestions(
          this.Ob().cppConfig?.isGhostText &&
            !this.Pb().cppState?.suggestion?.immediatelySeen,
        ),
        this.qb.recordAcceptSuggestionEvent(model, visibleSuggestion),
        this.hb.applicationUserPersistentStorage.checklistState
          ?.doneAutoComplete !== true)
      ) {
        const checklistState = this.hb.applicationUserPersistentStorage.checklistState
        this.hb.setApplicationUserPersistentStorage(
          "checklistState",
          (state) => ({ ...(state ?? {}), doneAutoComplete: true }),
        )
      }
      if (visibleSuggestion.onAcceptDisplayId !== undefined) {
        const matchingSuggestion = this.M.getAndEvictMatchingSuggestion(visibleSuggestion.onAcceptDisplayId)
        if (matchingSuggestion) {
          this.displayCppSuggestion(editor, model, matchingSuggestion)
          return
        }
      }
      if (this.Bb.isCursorPredictionEnabled()) {
        visibleSuggestion.fusedCursorPredictionId &&
          this.displayFusedCursorPredictionIfAvailable(
            editor,
            model,
            visibleSuggestion.fusedCursorPredictionId,
            visibleSuggestion.originalText,
            visibleSuggestion.replaceText,
          )
        const decorationRange = model.getDecorationRange(visibleSuggestion.decorationId) ?? undefined
        let suggestionRange = decorationRange
          ? {
              startLineNumber: decorationRange.startLineNumber,
              startColumn: decorationRange.startColumn,
              endLineNumberInclusive:
                decorationRange.endColumn === 1 ? decorationRange.endLineNumber - 1 : decorationRange.endLineNumber,
              endColumn: decorationRange.endColumn,
            }
          : undefined
        this.U?.modelVersion === model.getVersionId() && this.U?.modelId === model.id
          ? ((this.Y = { fire: false, acceptedRange: undefined }),
            this.Bb.getAndShowNextPrediction({
              editor,
              triggerCppCallback:
                this.fireCppSuggestionFromTrigger.bind(this),
              getLinterErrors:
                this.getRecentAndNearLocationLinterErrors.bind(this),
              source: QN.ACCEPT,
              cppSuggestionRange: suggestionRange,
            }))
          : (this.Y = { fire: true, acceptedRange: suggestionRange })
      } else this.Bb.periodicallyReloadCursorPredictionConfig(false)
    }
  }
}