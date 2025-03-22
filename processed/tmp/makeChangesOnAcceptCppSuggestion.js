// @ts-check

class _A {
  async makeChangesOnAcceptCppSuggestion({
    model: editorModel,
    eol,
    suggestion,
    editor,
    abortController,
    onlyAcceptFirstWord,
  }) {
    let isAborted = false
    abortController?.signal.addEventListener("abort", () => {
      isAborted = true
    })
    let suggestionRange = F_(editorModel, suggestion)
    if (!suggestionRange) return { type: Sp.NotAccepted }
    let originalText = suggestion.originalText ?? ""
    const replaceText = suggestion.replaceText ?? "",
      { changes: textChanges } = await this.vb.wordDiff(originalText, replaceText)
    if (isAborted) return { type: Sp.NotAccepted }
    const acceptAllChanges = async (range) => {
        this.updateVisibleSuggestionText(editor, textChanges, range, editorModel, suggestion.undoRedoGroup, eol)
        const { wordDiffs, charDiffs } = ZXe(
            suggestion.originalText ?? "",
            replaceText,
            eol,
          ),
          diffsToUse = this.Q.get(suggestion.decorationId) === k7.PreviewBox ? wordDiffs : charDiffs
        return (
          this.updateSuggestionGreenHighlights(editorModel, suggestion, diffsToUse),
          this.updateSuggestionState({
            suggestionIsCurrentlyHidden: false,
            hasBeenSeen: true,
          }),
          { type: Sp.AcceptedAll }
        )
      },
      acceptNextWord = async (range) => {
        const nextWordResult = this.makeEditsForNextWordAccept({
          model: editorModel,
          suggestion: suggestion,
          editor: editor,
          changes: textChanges,
        })
        if (nextWordResult.type === Sp.NotAccepted) return nextWordResult
        if (nextWordResult.type === Sp.AcceptedAll) return await acceptAllChanges(range)
        {
          this.updateSuggestionState({
            suggestionIsCurrentlyHidden: true,
            hasBeenSeen: true,
          })
          const currentTextInRange = editorModel.getValueInRange(range),
            { wordDiffs, charDiffs } = ZXe(suggestion.originalText ?? "", currentTextInRange, eol),
            diffsToUse = this.Q.get(suggestion.decorationId) === k7.PreviewBox ? wordDiffs : charDiffs
          return this.updateSuggestionGreenHighlights(editorModel, suggestion, diffsToUse), nextWordResult
        }
      }
    return onlyAcceptFirstWord ? await acceptNextWord(suggestionRange) : await acceptAllChanges(suggestionRange)
  }
}