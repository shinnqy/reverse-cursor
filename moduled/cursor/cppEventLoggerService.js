// @ts-check

export function createCppEventLoggerService(params) {
  const { __decorate, __param, Ve, Re, Vle, fu, nze: AIServiceV1CppService, F_, HB, RecordCppFateRequest, J, Ne, mI: telemService, ft, it, Z, Xt: textModelService } = params;

  var cppEventLoggerService = Re("cppEventLoggerService"),
    CppEventLoggerService = class {
      cppClient() {
        return this.b.get()
      }
      constructor(e, t, s, n, r) {
        ;(this.c = e),
          (this.d = t),
          (this.e = s),
          (this.f = n),
          (this.g = r),
          (this.editorChangedTimeoutMap = {}),
          (this.recordDebouncedCursorPosition = Vle((o, a) => {
            if (o.isDisposed()) return
            const l = {
              case: "debouncedCursorPosition",
              position: a,
              modelVersion: o.getVersionId(),
              model: o,
            }
            this.c.recordCppSessionEvent(l)
          }, 150)),
          (this.recordCppSessionEvent = this.c.recordCppSessionEvent.bind(
            this.c,
          )),
          (this.b = this.f.createInstance(fu, { service: AIServiceV1CppService }))
      }
      async forceFlushExtHostEventLogger() {
        await this.a?.forceFlush()
      }
      h(e) {
        const s = this.e.asRelativePath(e).split(".").pop()
        if (s !== void 0 && s.length > 0 && s.length < 8) return s.toLowerCase()
      }
      registerExtHostEventLogger(e) {
        return (
          (this.a = e),
          {
            dispose: () => {
              this.a = void 0
            },
          }
        )
      }
      recordExtHostEvent(e) {
        this.c.canWeTrackTelem() && this.a?.recordExtHostEvent(e)
      }
      recordScrollEvent(e, t, s) {
        this.c.recordCppSessionEvent({
          case: "scrollEvent",
          editorId: s,
          visibleRanges: t,
          modelVersion: e.getVersionId(),
          model: e,
        })
      }
      recordEditorCloseEvent(e) {
        this.c.recordCppSessionEvent({ case: "editorClose", editorId: e })
      }
      recordAiEvent(e, t) {
        this.c.recordCppSessionEvent({
          case: "aiEvent",
          requestId: e,
          startOrEnd: t,
        })
      }
      recordCmdKEvent(e, t) {
        this.c.recordCppSessionEvent({
          case: "cmdKEvent",
          event: t,
          model: e,
          modelVersion: e.getVersionId(),
        })
      }
      recordChatEvent(e) {
        this.c.recordCppSessionEvent({ case: "chatEvent", event: e })
      }
      recordBugBotEvent(e) {
        this.c.recordCppSessionEvent({ case: "bugBotEvent", event: e })
      }
      recordLspSuggestionEvent(e, t, s, n) {
        this.c.recordCppSessionEvent({
          case: "lspSuggestionEvent",
          editorId: t,
          model: e,
          modelVersion: e.getVersionId(),
          requestId: n,
          suggestions: s,
        })
      }
      recordChangedEditor(e, t, s, n) {
        const r = {
          case: "editorChanged",
          modelVersion: e.getVersionId(),
          model: e,
          position: t,
          visibleRanges: s,
          editorId: n,
        }
        this.c.recordCppSessionEvent(r)
      }
      recordPartialAcceptSuggestionEvent(e, t, s) {
        const n = F_(e, t),
          r = {
            case: "acceptCppPartial",
            currentlyShownCppSuggestion: {
              modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel:
                t.modelVersionWhenCreated,
              originalText: t.originalText ?? "",
              suggestionId: t.monotonicallyIncreasingSuggestionId,
              suggestionText: t.replaceText,
              rangeOfSuggestionInCurrentModel: n
                ? {
                    endColumn: n.endColumn,
                    endLineNumber: n.endLineNumber,
                    startColumn: n.startColumn,
                    startLineNumber: n.startLineNumber,
                  }
                : void 0,
            },
            edit: s,
            modelVersion: e.getVersionId(),
            model: e,
          }
        this.c.recordCppSessionEvent(r),
          this.d.publicLogCapture("cursor.acceptcppsuggestionpartial")
        const o = t.uri.path.split("/").pop()
        this.recordCppFate(t.requestId, HB.PARTIAL_ACCEPT, o, performance.now())
      }
      recordAcceptSuggestionEvent(e, t) {
        const s = F_(e, t),
          n = {
            case: "acceptCpp",
            currentlyShownCppSuggestion: {
              modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel:
                t.modelVersionWhenCreated,
              originalText: t.originalText ?? "",
              suggestionId: t.monotonicallyIncreasingSuggestionId,
              suggestionText: t.replaceText,
              rangeOfSuggestionInCurrentModel: s
                ? {
                    endColumn: s.endColumn,
                    endLineNumber: s.endLineNumber,
                    startColumn: s.startColumn,
                    startLineNumber: s.startLineNumber,
                  }
                : void 0,
            },
            modelVersion: e.getVersionId(),
            model: e,
          }
        this.c.recordCppSessionEvent(n),
          this.d.publicLogCapture("cursor.acceptcppsuggestion")
        const r = this.h(t.uri)
        this.recordCppFate(t.requestId, HB.ACCEPT, r, performance.now())
      }
      recordRejectSuggestionEvent(e, t) {
        const s = F_(e, t),
          n = {
            case: "rejectCpp",
            currentlyShownCppSuggestion: {
              modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel:
                t.modelVersionWhenCreated,
              originalText: t.originalText ?? "",
              suggestionId: t.monotonicallyIncreasingSuggestionId,
              suggestionText: t.replaceText,
              rangeOfSuggestionInCurrentModel: s
                ? {
                    endColumn: s.endColumn,
                    endLineNumber: s.endLineNumber,
                    startColumn: s.startColumn,
                    startLineNumber: s.startLineNumber,
                  }
                : void 0,
            },
            modelVersion: e.getVersionId(),
            model: e,
          }
        this.c.recordCppSessionEvent(n),
          this.d.publicLogCapture("cursor.rejectcppsuggestion")
        const r = this.h(t.uri)
        this.recordCppFate(t.requestId, HB.REJECT, r, performance.now())
      }
      recordFinishedCppGeneration(e, t) {
        const s = {
          case: "finishedCppGeneration",
          model: e,
          recoverableData: t,
          modelVersion: e.getVersionId(),
        }
        this.c.recordCppSessionEvent(s),
          this.d.publicLogCapture("cursor.fullcppsuggestion")
      }
      recordCppSuggestionEvent(e, t, s) {
        const n = F_(e, t),
          r = {
            case: "suggestCpp",
            currentlyShownCppSuggestion: {
              modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel:
                t.modelVersionWhenCreated,
              originalText: t.originalText ?? "",
              suggestionId: t.monotonicallyIncreasingSuggestionId,
              suggestionText: t.replaceText,
              rangeOfSuggestionInCurrentModel: n
                ? {
                    endColumn: n.endColumn,
                    endLineNumber: n.endLineNumber,
                    startColumn: n.startColumn,
                    startLineNumber: n.startLineNumber,
                  }
                : void 0,
            },
            recoverableData: s,
            modelVersion: e.getVersionId(),
            model: e,
          }
        this.c.recordCppSessionEvent(r),
          this.d.publicLogCapture("cursor.suggestcpp")
      }
      recordCppTriggerEvent(e, t, s, n) {
        this.c.recordCppSessionEvent({
          case: "cppTrigger",
          generationUUID: t,
          cursorPosition: s,
          modelVersion: e.getVersionId(),
          model: e,
          source: n,
        })
      }
      recordAcceptCursorPredictionEvent(e, t) {
        const s = {
          case: "acceptCursorPredictionEvent",
          prediction: t,
          model: e,
          modelVersion: e.getVersionId(),
        }
        this.c.recordCppSessionEvent(s)
      }
      recordRejectCursorPredictionEvent(e, t) {
        const s = {
          case: "rejectCursorPredictionEvent",
          prediction: t,
          model: e,
          modelVersion: e.getVersionId(),
        }
        this.c.recordCppSessionEvent(s)
      }
      recordSuggestCursorPredictionEvent(e, t) {
        const s = {
          case: "suggestCursorPredictionEvent",
          prediction: t,
          model: e,
          modelVersion: e.getVersionId(),
        }
        this.c.recordCppSessionEvent(s)
      }
      recordModelOpenedEvent(e) {
        const t = {
          case: "modelOpened",
          model: e,
          modelVersion: e.getVersionId(),
        }
        this.c.recordCppSessionEvent(t),
          this.d.publicLogCapture("cursor.modelopened")
      }
      recordLinterChange(e) {
        const t = {
          case: "linterError",
          errors: e.errors,
          model: e.model,
          modelVersion: e.modelVersion,
        }
        this.c.recordCppSessionEvent(t)
      }
      recordClipboardChange(e) {
        const t = { case: "clipboardChange", text: e }
        this.c.recordCppSessionEvent(t)
      }
      recordQuickActionsChange(e) {
        const t = { case: "quickActionsChange", ...e }
        this.c.recordCppSessionEvent(t)
      }
      recordQuickActionFired(e) {
        const t = { case: "quickActionFired", ...e }
        this.c.recordCppSessionEvent(t)
      }
      recordCppFate(e, t, s, n) {
        const r = new RecordCppFateRequest({
            requestId: e,
            fate: t,
            performanceNowTime: n,
            extension: s,
          }),
          o = new Promise((a, l) => {
            setTimeout(
              () => l(new Error("Timeout recording CPP fate event")),
              2e3,
            )
          })
        this.cppClient().then((a) => {
          Promise.race([a.recordCppFate(r, {}), o])
            .then(() => {})
            .catch((l) => {
              console.error("Error recording CPP fate event:", l)
            })
        })
      }
      recordBugBotLinterEvent({ model: e, requestId: t, eventType: s }) {
        this.c.recordCppSessionEvent({
          case: "bugBotLinterEvent",
          requestId: t,
          eventType: s,
          model: e,
          modelVersion: e.getVersionId(),
        })
      }
      recordAnythingQuickAccessSelectionEvent(e, t, s) {
        const n = new J(),
          r = new Set(),
          o = t.map((l) => {
            if (
              l.type === "separator" ||
              (r.size > 16 && !r.has(l.resource.toString()))
            )
              return l
            r.add(l.resource.toString())
            const c = this.g.createModelReference(l.resource)
            return (
              n.add(
                Ne(async () => {
                  ;(await c).dispose()
                }),
              ),
              { ...l, textModelPromise: c }
            )
          }),
          a = {
            case: "anythingQuickAccessSelectionEvent",
            query: e,
            items: o,
            selectedIndices: s,
          }
        this.c.recordCppSessionEvent(a, n)
      }
    }
  ;(CppEventLoggerService = __decorate(
    [
      __param(0, telemService),
      __param(1, ft),
      __param(2, it),
      __param(3, Z),
      __param(4, textModelService),
    ],
    CppEventLoggerService,
  )),
    Ve(cppEventLoggerService, CppEventLoggerService, 1);

  return {
    cppEventLoggerService,
  }
}
