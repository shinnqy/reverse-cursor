// @ts-check

export function createCodeAction(params) {
  const {Ot, Oc, Q, le, $e, TBr, hn, L7s, Eve, bg, lo, glt, ug, H, w8t, j0, sJt, Xpr, el, uf, pi, Gs, zs, U0, _P, ah, Ln, Am, D, ae, bBr, F, xJ, Au, igt, nJt, aL, SBr, qd, Ubs, Bbs, Jw, Qu, vBr, xBr, R7, Pe, tt, oe, A, kBr, UMt, mBr, $B, yn, wBr, yBr, Oi, CBr, M9, $9, EBr, zc, ect, Pn, IBr, qve, WE, Nl, fPs, PBr, DBr } = params;

  function LBr(i) {
    const globalContext = Ot(),
      t = [],
      {
        composerDataHandle: composerDataHandle,
        currentComposer: currentComposer,
        updateCurrentComposer: updateCurrentComposer,
        composerMode: composerMode,
        updateComposerModeSetStore: updateComposerModeSetStore,
      } = Oc(() => i.composerDataHandle),
      l = Q(
        () => "unregistered" in i.codeBlock && i.codeBlock.unregistered === !0,
      ),
      c = Q(() => {
        if (l()) {
          if (i.clickableOptions) return !0
          const xi = i.codeBlock
          return xi.isClickable === !0 && xi.clickableRange !== void 0
        }
        return !1
      }),
      u = Q(() =>
        l()
          ? i.codeBlock
          : globalContext.composerDataService.getComposerCodeBlock(
              composerDataHandle(),
              i.codeBlock.uri,
              i.codeBlock.version,
            ),
      ),
      h = Q(() =>
        i.noModifyCodeblock
          ? !1
          : i.codeBlock.unregistered === !0 || u()?.isNotApplied === !0,
      ),
      [d, g] = le(!h()),
      p = (xi) => {
        h() || g(xi)
      },
      [m, v] = le("diff"),
      y = Q(() => i.maxCollapsedHeight ?? 220)
    $e(() => {
      d() || (Z && Z.setScrollTop(0), he && he.revealFirstDiff())
    })
    const [w, C] = le(!1),
      [S, x] = le(0),
      [k] = le(Math.min(220, y())),
      E = Q(() => currentComposer().composerId),
      I = Q(() =>
        i.forceStatus
          ? i.forceStatus
          : i.codeBlock.uri
            ? (globalContext.composerDataService.getCodeBlockStatus(
                E(),
                i.codeBlock.uri,
                i.codeBlock.version,
              ) ?? "none")
            : "none",
      ),
      L = Q(
        () =>
          TBr ||
          I() === "generating" ||
          (I() === "applying" && !l() && u()?.isNotApplied !== !0),
      ),
      P = Q(() => {
        if (l()) {
          const xi = i.codeBlock
          return xi.filePath
            ? hn(xi.filePath)
            : i.clickableOptions
              ? hn(i.clickableOptions.uri.path)
              : L7s(i.languageAlias) || L7s(i.codeBlock.languageId) || "text"
        }
        return i.codeBlock.uri ? hn(i.codeBlock.uri.path) : ""
      }),
      N = Q(() =>
        i.codeBlock.uri
          ? globalContext.composerDataService.getLatestCodeBlockVersion(
              E(),
              i.codeBlock.uri,
              { excludeNonAppliedCodeBlocks: !0 },
            )
          : 0,
      ),
      R = Q(() =>
        l()
          ? 0
          : (globalContext.composerDataService.getVersionExcludingNonAppliedCodeBlocks(
              E(),
              i.codeBlock.uri,
              i.codeBlock.version,
            ) ?? 0),
      ),
      B = Q(() =>
        l()
          ? "none"
          : (globalContext.composerDataService.getCodeBlockStatus(
              E(),
              i.codeBlock.uri,
              i.codeBlock.version,
            ) ?? "none"),
      ),
      W = Eve(bg, globalContext.themeService),
      G = { height: "16px", padding: "0px 3px" }
    let te,
      re,
      Z,
      he,
      ve = null,
      pe = null,
      ge = null,
      Oe = !1
    const [Ie, qe] = le(!0),
      [et, We] = le(0),
      [xe, lt] = le(void 0),
      [Ut, Ye] = le(!1),
      Fe = async () => {
        if (!he) return
        await he.waitForDiff(),
          he.collapseAllUnchangedRegions(),
          he.revealFirstDiff(),
          he.layout()
        const xi = he.getDiffComputationResult()
        if (xi) {
          const ls = xi.changes2[0]
          ls &&
            lt({
              startLineNumber: ls.modified.startLineNumber,
              endLineNumber: ls.modified.endLineNumberExclusive - 1,
            })
        }
        setTimeout(() => {
          he && (x(he.getContentHeight() + 4), pr(!0))
        }, 1)
      },
      Xe = () => {
        const xi = t.findIndex((Kn) => Kn === he)
        xi !== -1 && t.splice(xi, 1)
        const Bi = t.findIndex((Kn) => Kn === pe)
        Bi !== -1 && t.splice(Bi, 1)
        const ls = t.findIndex((Kn) => Kn === ge)
        ls !== -1 && t.splice(ls, 1),
          he?.dispose(),
          (he = void 0),
          pe?.dispose(),
          (pe = null),
          ge?.dispose(),
          (ge = null),
          (Oe = !1),
          Ye(!1)
      },
      [zt, dt] = le(!1),
      ut = () => {
        const xi = d(),
          Bi = I()
        if (Z && te) {
          const ls = xi
            ? Math.min(Z.getContentHeight(), y())
            : Z.getContentHeight()
          dt(Z.getContentHeight() > y()),
            (te.style.height = `${ls}px`),
            Z.layout(),
            Z && (Bi === "generating" || i.noModifyCodeblock)
              ? Z.setScrollTop(Z.getScrollHeight())
              : Z && Z.setScrollTop(0)
        }
      }
    $e(() => {
      ut()
    })
    const ht = (xi) => {
      xi.keyCode === 9 &&
        (xi.preventDefault(),
        p(!0),
        globalContext.analyticsService.trackEvent("composer.code_block.collapse", {
          source: "escape",
        }))
    }
    lo(() => {
      if (te) {
        const xi = glt
        if (
          ((Z = globalContext.instantiationService.createInstance(
            ug,
            te,
            {
              ...ug.getEditorOptions(globalContext.configurationService),
              hover: { enabled: !0 },
              renderValidationDecorations: "on",
              fontSize: xi,
              overviewRulerLanes: 0,
              scrollbar: {
                ignoreHorizontalScrollbarInContentHeight: !0,
                alwaysConsumeMouseWheel: !1,
                horizontalScrollbarSize: 6,
              },
              padding: { top: 6, bottom: 6 },
            },
            { enableSemanticSyntaxHighlighting: !1 },
          )),
          Z)
        ) {
          t.push(Z), Ye(!0)
          const Bi = globalContext.languageService.createByLanguageNameOrFilepathOrFirstLine(
              i.languageAlias ?? "",
              u()?.uri ?? null,
              void 0,
            ),
            ls = H.parse(`composer-code-block-anysphere://${w8t()}`)
          ;(ve = globalContext.modelService.createModel("", Bi, ls, !0)),
            ve && t.push(ve),
            Z.setModel(ve),
            ut()
          const Kn = Z.onKeyDown(ht)
          t.push(Kn)
        }
      }
    })
    const [ti, ot, Ct] = j0(),
      ii = async (xi, Bi) => {
        if (l()) return []
        const ls = u()
        return !i.codeBlock.uri || !ls.isNotApplied
          ? []
          : globalContext.applyToFileActionsService.getImportantSymbolsDefinedInCodeblockThatExistInURICanThrowIfExtHostIsNotReady(
              i.codeBlock.uri,
              xi.getValue(),
            )
      },
      [fi, si] = sJt({
        getModel: () => ve,
        initialValue: [],
        updateFunc: ii,
        debounceTime: 1e3,
      }),
      [ft, Ri] = le(!1)
    $e(() => {
      l() ||
        globalContext.fileService.exists(i.codeBlock.uri).then((xi) => {
          Ri(!xi)
        })
    })
    const Rt = Xpr(),
      us = Q(() => {
        const xi = [],
          Bi = i.codeBlock.uri
        if (ft())
          return (
            xi.push({ uri: Bi }),
            Rt() && xi.push({ uri: Bi, applyToCurrentFile: !0 }),
            xi
          )
        if (!l() && u()?.isNotApplied) {
          xi.push({ uri: Bi })
          const ls = fi()
          return (
            ls.length > 0 &&
              xi.push(...ls.map((Kn) => ({ uri: Bi, symbol: Kn }))),
            xi
          )
        } else if (l()) {
          const ls = Rt()
          return ls && xi.push({ uri: ls, applyToCurrentFile: !0 }), xi
        } else return []
      }),
      nt = {
        "font-size": "11px",
        color: "var(--vscode-input-placeholderForeground)",
      },
      jt = Q(() => {
        if (l()) return !1
        const xi = u()
        return xi ? (xi.newModelDiffWrtV0?.length ?? 0) > 0 : !1
      }),
      $s = (xi, Bi = !0) =>
        l() || !u()
          ? null
          : Bi
            ? globalContext.composerUtilsService.getCodeBlockNewModelLines(
                composerDataHandle(),
                i.codeBlock.uri,
                xi,
              )
            : globalContext.composerUtilsService.getCodeBlockOriginalModelLines(
                composerDataHandle(),
                i.codeBlock.uri,
                xi,
              ),
      Ss = () =>
        ve?.getEOL() ??
        `
  `,
      vt = (xi) =>
        xi ===
        `
  `
          ? 0
          : 1,
      gi = (xi) =>
        xi.replace(
          /\r\n|\r/g,
          `
  `,
        ),
      Ht = Q(() => {
        if (l()) return !1
        const xi = u()
        if (!xi || xi.isNotApplied) return !1
        const Bi = $s(i.codeBlock.version, !1),
          ls = $s(i.codeBlock.version)
        if (!Bi || !ls || Bi.length === 0 || ls.length === 0) return !1
        if (Bi.length !== ls.length) return !0
        for (let Kn = 0; Kn < Bi.length; Kn++) if (Bi[Kn] !== ls[Kn]) return !0
        return !1
      })
    $e(
      el(Ht, () => {
        We((xi) => xi + 1)
      }),
    )
    const [Zt, Wi] = le(void 0),
      on = () => {
        const xi = he?.getDiffComputationResult()
        if (!xi) {
          Wi(void 0)
          return
        }
        if (xi.identical || xi.quitEarly) {
          Wi(void 0)
          return
        }
        let Bi = 0,
          ls = 0
        for (const Kn of xi.changes2)
          (Bi += Kn.modified.length), (ls += Kn.original.length)
        Wi({ added: Bi, removed: ls })
      },
      Js = () => {
        if (!(!re || !Ht()))
          try {
            const xi = u()
            if (!xi) return
            Xe()
            const Bi = glt
            if (
              ((he = globalContext.instantiationService.createInstance(
                uf,
                re,
                {
                  fontFamily:
                    globalContext.configurationService.getValue("editor.fontFamily"),
                  fontLigatures: globalContext.configurationService.getValue(
                    "editor.fontLigatures",
                  ),
                  renderSideBySide: !1,
                  readOnly: !0,
                  stickyScroll: { enabled: !1 },
                  renderIndicators: !1,
                  renderMarginRevertIcon: !1,
                  renderGutterMenu: !1,
                  glyphMargin: !1,
                  hideUnchangedRegions: { enabled: !0 },
                  disableLayerHinting: !0,
                  automaticLayout: !0,
                  fontSize: Bi,
                  lineNumbers: "off",
                  lineNumbersMinChars: 0,
                  renderOverviewRuler: !1,
                  scrollbar: {
                    verticalScrollbarSize: 0,
                    alwaysConsumeMouseWheel: !1,
                    ignoreHorizontalScrollbarInContentHeight: !0,
                    horizontalScrollbarSize: 6,
                  },
                  padding: { top: 6, bottom: 6 },
                  scrollBeyondLastLine: !1,
                  compactMode: !0,
                  ignoreTrimWhitespace: !1,
                },
                {
                  originalEditor: { contributions: [], isSimpleWidget: !0 },
                  modifiedEditor: { contributions: [], isSimpleWidget: !0 },
                },
              )),
              !he)
            )
              throw new Error("Failed to create diff editor")
            t.push(he), Ye(!0)
            const ls =
                globalContext.languageService.createByLanguageNameOrFilepathOrFirstLine(
                  "",
                  xi.uri ?? null,
                  void 0,
                ),
              Kn = H.parse(`composer-code-block-anysphere://${w8t()}`),
              Ho = H.parse(`composer-code-block-anysphere://${w8t()}`),
              Sa = $s(i.codeBlock.version, !1),
              Df = $s(i.codeBlock.version),
              Xy = Ss()
            ;(pe = globalContext.modelService.createModel(Sa?.join(Xy) ?? "", ls, Kn, !0)),
              pe.setEOL(vt(Xy))
            let wI = !1
            if (
              (pe ? t.push(pe) : (wI = !0),
              (ge = globalContext.modelService.createModel(Df?.join(Xy) ?? "", ls, Ho, !0)),
              ge.setEOL(vt(Xy)),
              ge ? t.push(ge) : (wI = !0),
              wI)
            )
              throw new Error("Failed to create diff models")
            if (
              (he.setModel({ original: pe, modified: ge }), Fe(), (Oe = !0), he)
            ) {
              t.push(
                he.onDidUpdateDiff(() => {
                  on()
                }),
              )
              const Rr = he.getModifiedEditor().onKeyDown(ht)
              t.push(Rr)
            }
          } catch (xi) {
            console.error("Failed to setup diff editor:", xi), Xe()
          }
      }
    pi(() => {
      Xe(),
        ve && (ve.dispose(), (ve = null)),
        Z && (Z.dispose(), (Z = void 0)),
        t.forEach((xi) => xi.dispose()),
        (t.length = 0)
    }),
      $e(() => {
        Ht() && !Oe ? (Js(), on()) : !Ht() && Oe && Xe()
      })
    const Cr = (xi) => {
      if (Z && ve) {
        const Bi = ve.getLineCount(),
          ls = ve.getLineMaxColumn(Bi),
          Kn = gi(xi)
        Gs && ve.pushEOL(0),
          ve.applyEdits([
            {
              range: {
                startLineNumber: Bi,
                startColumn: ls,
                endLineNumber: Bi,
                endColumn: ls,
              },
              text: Kn,
            },
          ])
      }
    }
    $e(() => {
      const xi = u()
      if (Z && ve && xi) {
        const Bi = gi(xi.content ?? ""),
          ls = gi(ve.getValue()),
          Kn = Bi.slice(ls.length)
        if (Kn === "") return
        Cr(Kn.replace(/[\uD800-\uDBFF]$/g, "")),
          zs().requestAnimationFrame(() => {
            ut()
          })
      }
    })
    const ma = Q(() =>
        l()
          ? !1
          : globalContext.composerService.shouldShowAcceptReject(
              E(),
              i.codeBlock.uri,
              i.codeBlock.version,
            ),
      ),
      wt = {
        "box-sizing": "border-box",
        position: "relative",
        background: "var(--vscode-editor-background)",
        overflow: "hidden",
      },
      { showHover: Ne, hideHover: ze } = U0({
        delay: 300,
        additionalClasses: ["chat-hover-tooltip"],
      }),
      Vt = () => {
        Z &&
          ve &&
          (globalContext.clipboardService.writeText(ve.getValue()),
          qe(!1),
          setTimeout(() => qe(!0), 2e3))
      },
      wi = async () => {
        const xi = u()?.content
        return !xi || l()
          ? !1
          : await globalContext.applyToFileActionsService.isEntryCached(
              i.codeBlock.uri,
              xi,
              _P,
              "fullfile",
            )
      },
      Fs = async (xi) => {
        xi.stopPropagation()
        const Bi = xi.currentTarget.getBoundingClientRect()
        globalContext.analyticsService.trackEvent("composer.code_block.apply")
        const ls = us()
        if (ls.length !== 0) {
          if (ls.length === 1 || (await wi())) {
            Zi(ls[0])
            return
          }
          if (u()?.newModelDiffWrtV0 && !ft()) {
            Zi(ls[0])
            return
          }
          ot({ x: Bi.right + 2, y: Bi.bottom + 2 })
        }
      },
      Zi = async (xi) => {
        const Bi = xi.applyToCurrentFile
          ? globalContext.editorService.activeEditor?.resource
          : xi.uri
        if (
          Bi !== void 0 &&
          globalContext.selectedContextService.shouldBlockUriFromReading(Bi)
        ) {
          Ei(!0)
          return
        } else Ei(!1)
        if (l()) {
          const ls = xi.uri
          if (!ls) {
            console.error("[composer] No current file URI")
            return
          }
          if (!i.bubbleId) {
            console.error("[composer] No bubble ID")
            return
          }
          globalContext.composerApplyService.registerAndApplyUnregisteredCodeBlock(
            E(),
            i.bubbleId,
            i.codeBlock.codeBlockIdx,
            ls,
          )
          return
        } else {
          if (!xi.applyToCurrentFile)
            if (xi.symbol?.range) {
              const Kn = ah(xi.uri, {
                startLineNumber: xi.symbol?.range.startLineNumber || 1,
                startColumn: xi.symbol?.range.startColumn || 1,
                endLineNumber: xi.symbol?.range.endLineNumber || 1,
                endColumn: xi.symbol?.range.endColumn || 1,
              })
              globalContext.openerService?.open(Kn)
            } else {
              const Kn = globalContext.editorService.findEditors(xi.uri)
              if (Kn.length > 0) {
                const Ho = globalContext.editorGroupService.getGroup(Kn[0].groupId)
                globalContext.editorService.openEditor(Kn[0].editor, Ho)
              } else await globalContext.openerService?.open(xi.uri)
            }
          let ls
          xi.symbol?.range &&
            (ls = new Ln(
              xi.symbol.range.startLineNumber,
              xi.symbol.range.endLineNumber + 1,
            )),
            globalContext.composerApplyService.applyCachedCodeBlock(
              E(),
              xi.uri,
              i.codeBlock.version,
              { range: ls, applyToCurrentFile: xi.applyToCurrentFile },
            )
          return
        }
      },
      [Nn, pr] = le(!1)
    $e(() => {
      if (he && pe && ge) {
        if (!u()) return
        const Bi = $s(i.codeBlock.version, !1),
          ls = $s(i.codeBlock.version),
          Kn = Ss()
        Bi?.join(Kn) !== pe.getValue() && pe.setValue(Bi?.join(Kn) ?? ""),
          ls?.join(Kn) !== ge.getValue() && ge.setValue(ls?.join(Kn) ?? ""),
          Fe()
      }
    })
    const Br = Q(() =>
        m() === "diff" && Ht()
          ? Nn() && he
            ? he.getContentHeight() > y()
            : !1
          : zt(),
      ),
      Xo = Q(() => {
        if (l()) return !1
        const xi = u()
        if (!xi) return !1
        const ls =
            (currentComposer().codeBlockData[i.codeBlock.uri.toString()] ?? []).findIndex(
              (Ho) => Ho.status === "completed",
            ) === xi.version,
          Kn = currentComposer().newlyCreatedFiles.some(
            (Ho) => Ho.uri.toString() === i.codeBlock.uri.toString(),
          )
        return ls && Kn
      }),
      Hr = Am(
        (xi) => (
          t.push({ dispose: () => xi() }),
          () =>
            D(ae, {
              get when() {
                return Q(() => R() !== -1)() && !Xo()
              },
              get children() {
                var Bi = bBr(),
                  ls = Bi.firstChild
                return (
                  Bi.style.setProperty(
                    "color",
                    "var(--vscode-input-placeholderForeground)",
                  ),
                  Bi.style.setProperty("line-height", "120%"),
                  Bi.style.setProperty("font-size", "11px"),
                  Bi.style.setProperty("font-feature-settings", "tnum"),
                  Bi.style.setProperty("font-variant-numeric", "tabular-nums"),
                  F(Bi, () => R() + 1, ls),
                  F(Bi, () => N() + 1, null),
                  Bi
                )
              },
            })
        ),
      ),
      Jo = Am(
        (xi) => (
          t.push({ dispose: () => xi() }),
          () =>
            D(ae, {
              get when() {
                return Q(() => !!Ht())() && Zt()
              },
              get fallback() {
                return Hr()
              },
              children: (Bi) =>
                D(ae, {
                  get when() {
                    return Bi().added > 0 || Bi().removed > 0
                  },
                  get fallback() {
                    return Hr()
                  },
                  get children() {
                    var ls = xJ()
                    return (
                      Au(ls, "mouseleave", ze),
                      ls.addEventListener("mouseenter", (Kn) => {
                        const Ho = R() + 1,
                          Sa = N() + 1,
                          Df = Zt(),
                          Xy = Df?.added ?? 0,
                          wI = Df?.removed ?? 0,
                          Rr =
                            i.lintingStatus === "linted"
                              ? (i.linterErrors?.length ?? 0)
                              : "..."
                        Ne(
                          Kn,
                          `Version ${Ho}/${Sa}
  ${Xy} lines added, ${wI} lines removed
  ${Rr} linter errors`,
                        )
                      }),
                      ls.style.setProperty(
                        "color",
                        "var(--vscode-descriptionForeground)",
                      ),
                      ls.style.setProperty("line-height", "120%"),
                      ls.style.setProperty("font-size", "11px"),
                      ls.style.setProperty("font-feature-settings", "tnum"),
                      ls.style.setProperty(
                        "font-variant-numeric",
                        "tabular-nums",
                      ),
                      ls.style.setProperty("display", "flex"),
                      ls.style.setProperty("align-items", "center"),
                      ls.style.setProperty("gap", "4px"),
                      F(
                        ls,
                        D(igt, {
                          get added() {
                            return Bi().added
                          },
                          get removed() {
                            return Bi().removed
                          },
                          get lints() {
                            return i.lintingStatus === "linted"
                              ? (i.linterErrors?.length ?? 0)
                              : 0
                          },
                        }),
                      ),
                      ls
                    )
                  },
                }),
            })
        ),
      ),
      Dc = Q(() => {
        if (!(!l() || !i.languageAlias)) return nJt[i.languageAlias]
      }),
      Rh = aL(),
      Zh = Q(() => {
        if (!l())
          return globalContext.composerDataService.getInlineDiff(
            E(),
            i.codeBlock.uri,
            i.codeBlock.version,
          )
      }),
      Qg = Q(() => {
        if (!(i.lintingStatus === void 0 && i.linterErrors === void 0))
          return i.lintingStatus === "linted"
            ? i.linterErrors?.length
              ? `${i.linterErrors.length} linter error${i.linterErrors.length === 1 ? "" : "s"} found`
              : "No linter errors"
            : "Detecting linter errors..."
      }),
      [r0, ql, o0] = j0(),
      a0 = Q(() => {
        if (!(!i.linterErrors?.length || i.lintingStatus !== "linted"))
          return { count: i.linterErrors.length, errors: i.linterErrors }
      }),
      [pn, vr, qr] = j0(),
      Dn = Q(() => currentComposer().turnOffAutoFixing),
      Pi = Q(() => {
        const xi = composerMode()?.autoFix,
          Bi = Dn()
        return xi && !Bi ? "Auto-fix" : "Auto-fix off"
      }),
      Cn = Q(() => {
        if (l()) return "expanded"
        const xi = u()
        return xi ? (xi.codeBlockDisplayPreference ?? "expanded") : "expanded"
      }),
      Ur = (xi) => {
        if (l()) return
        const Bi = i.codeBlock.uri,
          ls = i.codeBlock.version
        Bi === void 0 ||
          ls === void 0 ||
          (globalContext.composerDataService.updateComposerCodeBlock(E(), Bi, ls, {
            codeBlockDisplayPreference: xi,
          }),
          globalContext.reactiveStorageService.setApplicationUserPersistentStorage(
            "composerState",
            "codeBlockDisplayPreference",
            xi,
          ))
      },
      wl = async () => {
        if (!c()) return
        let xi,
          Bi = 1,
          ls = 1
        if (i.clickableOptions)
          (xi = i.clickableOptions.uri),
            (Bi = i.clickableOptions.startLine),
            (ls = i.clickableOptions.endLine)
        else {
          const Kn = i.codeBlock
          Kn.filePath &&
            Kn.clickableRange &&
            ((xi = globalContext.workspaceContextService.resolveRelativePath(Kn.filePath)),
            (Bi = Kn.clickableRange.startLine),
            (ls = Kn.clickableRange.endLine))
        }
        if (xi) {
          let Kn
          try {
            Kn = await globalContext.textModelService.createModelReference(xi)
            const Ho = Kn.object,
              Sa = {
                selection: {
                  startLineNumber: Bi,
                  endLineNumber: ls,
                  startColumn: 1,
                  endColumn: Ho.textEditorModel.getLineMaxColumn(ls),
                },
                preserveFocus: !1,
                revealIfOpened: !0,
              }
            await globalContext.editorService.openEditor({ resource: xi, options: Sa })
          } catch (Ho) {
            console.error("[composer] Error opening clickable codeblock:", Ho)
          } finally {
            Kn?.dispose()
          }
        }
      },
      [du, Ei] = le(!1)
    return [
      (() => {
        var xi = SBr(),
          Bi = xi.firstChild,
          ls = Bi.firstChild,
          Kn = ls.firstChild,
          Ho = Kn.firstChild,
          Sa = Bi.nextSibling,
          Df = Sa.firstChild,
          Xy = Df.firstChild
        xi.addEventListener("mouseleave", () => C(!1)),
          xi.addEventListener("mouseenter", () => C(!0)),
          Bi.style.setProperty("display", "flex"),
          Bi.style.setProperty("align-items", "center"),
          Bi.style.setProperty("justify-content", "space-between"),
          Bi.style.setProperty("gap", "6px"),
          Bi.style.setProperty("max-width", "100%"),
          Bi.style.setProperty("overflow", "hidden"),
          Bi.style.setProperty("position", "sticky"),
          Bi.style.setProperty("top", "-1px"),
          Bi.style.setProperty("z-index", "2"),
          ls.addEventListener("click", (Rr) => {
            const Na = xe()
            if (i.clickableOptions) {
              const Tn = ah(i.clickableOptions.uri, {
                startLineNumber: i.clickableOptions.startLine,
                startColumn: 1,
                endLineNumber: i.clickableOptions.endLine,
                endColumn: 1,
              })
              globalContext.openerService.open(Tn, {
                openToSide: !1,
                editorOptions: {
                  revealIfVisible: !0,
                  revealIfOpened: !0,
                  source: qd.USER,
                },
                fromUserGesture: !0,
              })
              return
            }
            const Un = l()
              ? void 0
              : globalContext.composerDataService.getInlineDiff(
                  E(),
                  i.codeBlock.uri,
                  i.codeBlock.version,
                )
            if (Un) {
              const Tn = Un.changes[0]
              if (Tn) {
                Ubs(
                  {
                    uri: Un.uri,
                    range: {
                      selectionStartLineNumber:
                        Un.currentRange.startLineNumber +
                        Tn.addedRange.startLineNumber -
                        1,
                      positionLineNumber:
                        Un.currentRange.startLineNumber +
                        Tn.addedRange.startLineNumber -
                        1,
                      selectionStartColumn: 1,
                      positionColumn: 1,
                    },
                    text: "",
                  },
                  globalContext.workspaceContextService,
                  globalContext.openerService,
                )
                return
              }
            }
            l() || Bbs(i.codeBlock.uri, globalContext.fileService, globalContext.openerService, Rr.altKey)
          }),
          ls.style.setProperty("display", "flex"),
          ls.style.setProperty("align-items", "center"),
          ls.style.setProperty("height", "27px"),
          ls.style.setProperty("box-sizing", "border-box"),
          ls.style.setProperty("min-width", "0"),
          ls.style.setProperty("padding-left", "8px"),
          ls.style.setProperty("padding-right", "8px"),
          ls.style.setProperty("user-select", "none"),
          ls.style.setProperty("flex", "1"),
          ls.style.setProperty("cursor", "pointer"),
          F(
            ls,
            D(ae, {
              get when() {
                return L()
              },
              get children() {
                var Rr = xJ()
                return (
                  Rr.style.setProperty("scale", "0.8"),
                  Rr.style.setProperty("height", "14px"),
                  Rr.style.setProperty("width", "18px"),
                  Rr.style.setProperty("margin-right", "2px"),
                  Rr.style.setProperty("display", "flex"),
                  Rr.style.setProperty("align-items", "center"),
                  F(Rr, D(Jw, {})),
                  Rr
                )
              },
            }),
            Kn,
          ),
          F(
            ls,
            D(ae, {
              get when() {
                return Q(() => !L())() && Rh()
              },
              get children() {
                var Rr = xJ()
                return (
                  Rr.style.setProperty("scale", "0.8"),
                  Rr.style.setProperty("height", "14px"),
                  Rr.style.setProperty("width", "18px"),
                  Rr.style.setProperty("display", "flex"),
                  Rr.style.setProperty("align-items", "center"),
                  Rr.style.setProperty("margin-right", "2px"),
                  F(
                    Rr,
                    D(Qu, {
                      get fileName() {
                        return Q(() => !!l())()
                          ? i.codeBlock.languageId || "text"
                          : P()
                      },
                      get workspaceContextService() {
                        return globalContext.workspaceContextService
                      },
                      get modelService() {
                        return globalContext.modelService
                      },
                      get languageService() {
                        return globalContext.languageService
                      },
                      get languageId() {
                        return l() ? i.codeBlock.languageId : void 0
                      },
                    }),
                  ),
                  Rr
                )
              },
            }),
            Kn,
          ),
          Au(Kn, "mouseleave", ze),
          Kn.addEventListener("mouseenter", (Rr) => {
            l() ||
              Ne(
                Rr,
                globalContext.labelService.getUriLabel(i.codeBlock.uri, { relative: !0 }),
              )
          }),
          Kn.style.setProperty("line-height", "120%"),
          Kn.style.setProperty("font-size", "11px"),
          Kn.style.setProperty("white-space", "nowrap"),
          Kn.style.setProperty("overflow", "hidden"),
          Kn.style.setProperty("text-overflow", "ellipsis"),
          Kn.style.setProperty("direction", "rtl"),
          Ho.style.setProperty("direction", "ltr"),
          Ho.style.setProperty("unicode-bidi", "embed"),
          F(Ho, P, null),
          F(
            Ho,
            D(ae, {
              get when() {
                return Xo()
              },
              get children() {
                var Rr = vBr()
                return (
                  Rr.style.setProperty("margin-left", "6px"),
                  Rr.style.setProperty(
                    "color",
                    "var(--vscode-gitDecoration-addedResourceForeground)",
                  ),
                  Rr.style.setProperty("font-size", "11px"),
                  Rr
                )
              },
            }),
            null,
          ),
          F(
            ls,
            D(ae, {
              get when() {
                return Q(() => !l())() && !u()?.isNotApplied
              },
              get fallback() {
                return D(ae, {
                  get when() {
                    return Q(() => !!(l() || u()?.isNotApplied))() && du()
                  },
                  get children() {
                    var Rr = xBr(),
                      Na = Rr.firstChild
                    return (
                      Rr.style.setProperty("margin-left", "6px"),
                      Rr.style.setProperty("display", "flex"),
                      Rr.style.setProperty("align-items", "center"),
                      Rr.style.setProperty("gap", "4px"),
                      Na.style.setProperty(
                        "color",
                        "var(--vscode-input-placeholderForeground)",
                      ),
                      Na.style.setProperty("font-size", "10px"),
                      Na.style.setProperty("margin-left", "2px"),
                      Na.style.setProperty("flex-shrink", "0"),
                      Rr
                    )
                  },
                })
              },
              get children() {
                var Rr = xJ()
                return (
                  Rr.style.setProperty("margin-left", "6px"),
                  Rr.style.setProperty("display", "flex"),
                  Rr.style.setProperty("align-items", "center"),
                  Rr.style.setProperty("gap", "4px"),
                  F(
                    Rr,
                    D(ae, {
                      get when() {
                        return L()
                      },
                      get fallback() {
                        return D(ae, {
                          get when() {
                            return (
                              Q(() => !Ht() && !Zh())() &&
                              !["accepted", "rejected"].includes(I())
                            )
                          },
                          get fallback() {
                            return D(ae, {
                              get when() {
                                return I() === "completed" || I() === "accepted"
                              },
                              get fallback() {
                                return [
                                  Q(Jo),
                                  D(R7, {
                                    get status() {
                                      return I()
                                    },
                                    get additionalHoverMessage() {
                                      return Qg()
                                    },
                                  }),
                                ]
                              },
                              get children() {
                                return [
                                  Q(() => Jo()),
                                  D(ae, {
                                    get when() {
                                      return I() === "accepted"
                                    },
                                    get fallback() {
                                      return D(R7, {
                                        status: "completed",
                                        get additionalHoverMessage() {
                                          return Qg()
                                        },
                                      })
                                    },
                                    get children() {
                                      var Na = xJ()
                                      return (
                                        Na.style.setProperty("font-size", "11px"),
                                        Na.style.setProperty(
                                          "color",
                                          "var(--vscode-testing-iconPassed)",
                                        ),
                                        Pe(() => tt(Na, oe.asClassName(A.check))),
                                        Na
                                      )
                                    },
                                  }),
                                ]
                              },
                            })
                          },
                          get children() {
                            var Na = kBr()
                            return (
                              Na.style.setProperty(
                                "color",
                                "var(--vscode-input-placeholderForeground)",
                              ),
                              Na.style.setProperty("font-size", "10px"),
                              Na.style.setProperty("margin-left", "2px"),
                              Na.style.setProperty("flex-shrink", "0"),
                              F(Na, () =>
                                du()
                                  ? "File is in .cursorignore"
                                  : "No changes made",
                              ),
                              Na
                            )
                          },
                        })
                      },
                      get children() {
                        return D(ae, {
                          get when() {
                            return I() === "applying"
                          },
                          get children() {
                            var Na = xJ()
                            return (
                              Na.style.setProperty(
                                "color",
                                "var(--vscode-foreground)",
                              ),
                              Na.style.setProperty("font-size", "11px"),
                              Na.style.setProperty("opacity", "0.4"),
                              F(Na, () => UMt[I()]),
                              Na
                            )
                          },
                        })
                      },
                    }),
                  ),
                  Rr
                )
              },
            }),
            null,
          ),
          F(
            Bi,
            D(ae, {
              get when() {
                return u()?.content
              },
              get children() {
                return D(mBr, {
                  get isMouseOver() {
                    return w()
                  },
                  get copyEnabled() {
                    return Ie()
                  },
                  handleCopy: Vt,
                  get currentStatus() {
                    return B()
                  },
                  get reactiveCodeBlock() {
                    return u()
                  },
                  get composerId() {
                    return E()
                  },
                  get isUnregistered() {
                    return l()
                  },
                  get codeBlockUri() {
                    return i.codeBlock.uri
                  },
                  get codeBlockVersion() {
                    return i.codeBlock.version
                  },
                  get versionExcludingNonAppliedCodeblocks() {
                    return R()
                  },
                  get shouldShowAcceptReject() {
                    return ma()
                  },
                  get hasDiffData() {
                    return jt()
                  },
                  get canShowDiff() {
                    return Ht() ?? !1
                  },
                  get preferShowType() {
                    return m()
                  },
                  setPreferShowType: v,
                  setNonChatCollapsed: p,
                  onApplyClick: Fs,
                  get actionMenuPosition() {
                    return ti()
                  },
                  get forceToolsRerender() {
                    return et()
                  },
                  get singleFileOption() {
                    return Q(() => us().length === 1)()
                      ? { uri: us()[0].uri }
                      : void 0
                  },
                  get shouldShowApply() {
                    return Q(() => !!(l() && !u().isGenerating))() && c() === !1
                  },
                  get commandLanguage() {
                    return Dc()
                  },
                  get noModifyCodeblock() {
                    return i.noModifyCodeblock
                  },
                  get codeBlockSpecificDisplayPreference() {
                    return Cn()
                  },
                  setCodeBlockSpecificDisplayPreference: Ur,
                })
              },
            }),
            null,
          ),
          Sa.style.setProperty("position", "relative"),
          F(
            Df,
            D(ae, {
              get when() {
                return c()
              },
              children: (Rr) =>
                (() => {
                  var Na = $B()
                  return (
                    Na.addEventListener("click", wl),
                    Na.style.setProperty("position", "absolute"),
                    Na.style.setProperty("top", "0px"),
                    Na.style.setProperty("right", "0px"),
                    Na.style.setProperty("height", "calc(100% - 6px)"),
                    Na.style.setProperty("width", "100%"),
                    Na.style.setProperty("cursor", "pointer"),
                    Na.style.setProperty("z-index", "1"),
                    Na
                  )
                })(),
            }),
            Xy,
          )
        var wI = te
        return (
          typeof wI == "function" ? yn(wI, Xy) : (te = Xy),
          F(
            Sa,
            D(ae, {
              get when() {
                return Ht()
              },
              get children() {
                var Rr = wBr(),
                  Na = Rr.firstChild
                F(
                  Rr,
                  D(ae, {
                    get when() {
                      return !Nn()
                    },
                    get children() {
                      var Tn = yBr(),
                        nc = Tn.firstChild
                      return (
                        Tn.style.setProperty("position", "absolute"),
                        Tn.style.setProperty("top", "50%"),
                        Tn.style.setProperty("left", "50%"),
                        Tn.style.setProperty(
                          "transform",
                          "translate(-50%, -50%)",
                        ),
                        Tn.style.setProperty("display", "flex"),
                        Tn.style.setProperty("align-items", "center"),
                        Tn.style.setProperty("gap", "8px"),
                        Tn.style.setProperty(
                          "color",
                          "var(--vscode-descriptionForeground)",
                        ),
                        Tn.style.setProperty("font-size", "11px"),
                        F(Tn, D(Jw, {}), nc),
                        Tn
                      )
                    },
                  }),
                  Na,
                )
                var Un = re
                return (
                  typeof Un == "function" ? yn(Un, Na) : (re = Na),
                  Na.style.setProperty("transition", "opacity 0.15s ease-in-out"),
                  Pe(
                    (Tn) => {
                      var nc = {
                          ...wt,
                          display:
                            Cn() === "expanded" &&
                            m() === "diff" &&
                            Ht() &&
                            u()?.content
                              ? "block"
                              : "none",
                          height: d()
                            ? `${Math.min(S() || k(), y())}px`
                            : `${Math.min(S() || k(), i.maxExpandedHeight ?? 1 / 0)}px`,
                          "margin-bottom": Br() && !h() && !d() ? "16px" : void 0,
                        },
                        jl = d()
                          ? `${Math.min(S() || k(), y())}px`
                          : `${Math.min(S() || k(), i.maxExpandedHeight ?? 1 / 0)}px`,
                        Qd = Nn() ? 1 : 0
                      return (
                        (Tn.e = Oi(Rr, nc, Tn.e)),
                        jl !== Tn.t &&
                          ((Tn.t = jl) != null
                            ? Na.style.setProperty("height", jl)
                            : Na.style.removeProperty("height")),
                        Qd !== Tn.a &&
                          ((Tn.a = Qd) != null
                            ? Na.style.setProperty("opacity", Qd)
                            : Na.style.removeProperty("opacity")),
                        Tn
                      )
                    },
                    { e: void 0, t: void 0, a: void 0 },
                  ),
                  Rr
                )
              },
            }),
            null,
          ),
          F(
            Sa,
            D(ae, {
              get when() {
                return Q(() => !!Br())() && !h()
              },
              get children() {
                return [
                  (() => {
                    var Rr = $B()
                    return (
                      Rr.addEventListener("click", () => {
                        p(!d()),
                          globalContext.analyticsService.trackEvent(
                            d()
                              ? "composer.code_block.expand"
                              : "composer.code_block.collapse",
                            { source: "bottom-bar" },
                          )
                      }),
                      Rr.style.setProperty("position", "absolute"),
                      Rr.style.setProperty("top", "0"),
                      Rr.style.setProperty("left", "0"),
                      Rr.style.setProperty("right", "0"),
                      Rr.style.setProperty("bottom", "0"),
                      Pe((Na) =>
                        (Na = d() ? "auto" : "none") != null
                          ? Rr.style.setProperty("pointer-events", Na)
                          : Rr.style.removeProperty("pointer-events"),
                      ),
                      Rr
                    )
                  })(),
                  (() => {
                    var Rr = CBr(),
                      Na = Rr.firstChild
                    return (
                      Rr.addEventListener("click", (Un) => {
                        Un.stopPropagation(),
                          Un.stopImmediatePropagation(),
                          globalContext.analyticsService.trackEvent(
                            d()
                              ? "composer.code_block.expand"
                              : "composer.code_block.collapse",
                          ),
                          p(!d())
                      }),
                      Rr.style.setProperty("z-index", "1"),
                      Pe(
                        (Un) => {
                          var Tn = w() ? 0.9 : void 0,
                            nc = oe.asClassName(d() ? M9 : $9)
                          return (
                            Tn !== Un.e &&
                              ((Un.e = Tn) != null
                                ? Rr.style.setProperty("opacity", Tn)
                                : Rr.style.removeProperty("opacity")),
                            nc !== Un.t && tt(Na, (Un.t = nc)),
                            Un
                          )
                        },
                        { e: void 0, t: void 0 },
                      ),
                      Rr
                    )
                  })(),
                ]
              },
            }),
            null,
          ),
          F(
            xi,
            D(ae, {
              get when() {
                return a0()
              },
              children: (Rr) => {
                const [Na, Un] = le(!1)
                return (() => {
                  var Tn = EBr(),
                    nc = Tn.firstChild,
                    jl = nc.firstChild,
                    Qd = jl.nextSibling,
                    l0 = Qd.nextSibling,
                    rae = l0.firstChild
                  return (
                    Tn.addEventListener("mouseleave", (xS) => {
                      xS.currentTarget.style.opacity = "0.8"
                    }),
                    Tn.addEventListener("mouseenter", (xS) => {
                      xS.currentTarget.style.opacity = "1"
                    }),
                    Tn.style.setProperty("display", "flex"),
                    Tn.style.setProperty("flex-direction", "column"),
                    Tn.style.setProperty(
                      "background",
                      "var(--vscode-editor-background)",
                    ),
                    Tn.style.setProperty(
                      "border-top",
                      "1px solid var(--vscode-commandCenter-inactiveBorder)",
                    ),
                    Tn.style.setProperty("overflow", "hidden"),
                    Tn.style.setProperty("cursor", "pointer"),
                    Tn.style.setProperty("opacity", "0.8"),
                    Tn.style.setProperty("transition", "all 0.1s ease-in-out"),
                    nc.addEventListener("click", () => Un(!Na())),
                    nc.style.setProperty("display", "flex"),
                    nc.style.setProperty("align-items", "center"),
                    nc.style.setProperty("padding", "3px 6px"),
                    nc.style.setProperty("gap", "4px"),
                    nc.style.setProperty("min-height", "20px"),
                    jl.style.setProperty("font-size", "10px"),
                    jl.style.setProperty(
                      "color",
                      "var(--vscode-descriptionForeground)",
                    ),
                    Qd.style.setProperty(
                      "color",
                      "var(--vscode-editorWarning-foreground)",
                    ),
                    Qd.style.setProperty("font-size", "10px"),
                    l0.style.setProperty(
                      "color",
                      "var(--vscode-editorWarning-foreground)",
                    ),
                    l0.style.setProperty("font-size", "11px"),
                    l0.style.setProperty("flex", "1"),
                    l0.style.setProperty("opacity", "0.7"),
                    F(l0, () => Rr().count, rae),
                    F(l0, () => (Rr().count === 1 ? "error" : "errors"), null),
                    F(
                      nc,
                      D(zc, {
                        variant: "text",
                        class: "!px-0",
                        get rightCodicon() {
                          return A.chevronDown
                        },
                        onClick: (xS) => {
                          const GF = xS.currentTarget.getBoundingClientRect()
                          vr({ x: GF.right + 6, y: GF.bottom + 3 }),
                            xS.stopPropagation(),
                            xS.stopImmediatePropagation()
                        },
                        get children() {
                          return Pi()
                        },
                      }),
                      null,
                    ),
                    F(
                      Tn,
                      D(ae, {
                        get when() {
                          return Na()
                        },
                        get children() {
                          var xS = $B()
                          return (
                            xS.style.setProperty(
                              "border-top",
                              "1px solid var(--vscode-commandCenter-inactiveBorder)",
                            ),
                            xS.style.setProperty(
                              "background",
                              "var(--vscode-sideBar-background)",
                            ),
                            F(
                              xS,
                              D(ect, {
                                maxHeight: 200,
                                scrollingDirection: "vertical",
                                children: (GF) =>
                                  (() => {
                                    var O5 = $B(),
                                      zPi = GF
                                    return (
                                      typeof zPi == "function"
                                        ? yn(zPi, O5)
                                        : (GF = O5),
                                      O5.style.setProperty("padding", "4px 6px"),
                                      O5.style.setProperty("display", "flex"),
                                      O5.style.setProperty(
                                        "flex-direction",
                                        "column",
                                      ),
                                      O5.style.setProperty("gap", "6px"),
                                      F(
                                        O5,
                                        D(Pn, {
                                          get each() {
                                            return Rr().errors
                                          },
                                          children: (JPi) =>
                                            (() => {
                                              var oae = IBr(),
                                                aae = oae.firstChild,
                                                _5 = aae.nextSibling
                                              return (
                                                oae.style.setProperty(
                                                  "display",
                                                  "flex",
                                                ),
                                                oae.style.setProperty(
                                                  "align-items",
                                                  "flex-start",
                                                ),
                                                oae.style.setProperty(
                                                  "gap",
                                                  "6px",
                                                ),
                                                aae.style.setProperty(
                                                  "display",
                                                  "flex",
                                                ),
                                                aae.style.setProperty(
                                                  "gap",
                                                  "2px",
                                                ),
                                                aae.style.setProperty(
                                                  "margin-top",
                                                  "6px",
                                                ),
                                                F(aae, () => {
                                                  const GPi = "3px",
                                                    skt = {
                                                      width: GPi,
                                                      height: GPi,
                                                      "border-radius": "50%",
                                                    },
                                                    uje = JPi.severity ?? 2,
                                                    nkt =
                                                      "var(--vscode-commandCenter-inactiveBorder)",
                                                    KPi =
                                                      "var(--vscode-editorError-foreground)",
                                                    lbn =
                                                      "var(--vscode-editorWarning-foreground)",
                                                    cbn =
                                                      "var(--vscode-editorInfo-foreground)"
                                                  return [
                                                    (() => {
                                                      var B5 = $B()
                                                      return (
                                                        Pe((lae) =>
                                                          Oi(
                                                            B5,
                                                            {
                                                              ...skt,
                                                              background:
                                                                uje <= 1
                                                                  ? KPi
                                                                  : nkt,
                                                            },
                                                            lae,
                                                          ),
                                                        ),
                                                        B5
                                                      )
                                                    })(),
                                                    (() => {
                                                      var B5 = $B()
                                                      return (
                                                        Pe((lae) =>
                                                          Oi(
                                                            B5,
                                                            {
                                                              ...skt,
                                                              background:
                                                                uje <= 2
                                                                  ? uje === 1
                                                                    ? KPi
                                                                    : lbn
                                                                  : nkt,
                                                            },
                                                            lae,
                                                          ),
                                                        ),
                                                        B5
                                                      )
                                                    })(),
                                                    (() => {
                                                      var B5 = $B()
                                                      return (
                                                        Pe((lae) =>
                                                          Oi(
                                                            B5,
                                                            {
                                                              ...skt,
                                                              background:
                                                                uje === 3
                                                                  ? cbn
                                                                  : nkt,
                                                            },
                                                            lae,
                                                          ),
                                                        ),
                                                        B5
                                                      )
                                                    })(),
                                                  ]
                                                }),
                                                _5.style.setProperty(
                                                  "font-size",
                                                  "11px",
                                                ),
                                                _5.style.setProperty(
                                                  "line-height",
                                                  "16px",
                                                ),
                                                _5.style.setProperty(
                                                  "color",
                                                  "var(--vscode-foreground)",
                                                ),
                                                _5.style.setProperty(
                                                  "hyphens",
                                                  "auto",
                                                ),
                                                _5.style.setProperty(
                                                  "word-break",
                                                  "break-word",
                                                ),
                                                _5.style.setProperty(
                                                  "-webkit-hyphens",
                                                  "auto",
                                                ),
                                                _5.style.setProperty(
                                                  "-ms-hyphens",
                                                  "auto",
                                                ),
                                                F(_5, () => JPi.message),
                                                oae
                                              )
                                            })(),
                                        }),
                                      ),
                                      O5
                                    )
                                  })(),
                              }),
                            ),
                            xS
                          )
                        },
                      }),
                      null,
                    ),
                    Pe(() =>
                      tt(
                        jl,
                        oe.asClassName(Na() ? A.chevronDown : A.chevronRight),
                      ),
                    ),
                    Tn
                  )
                })()
              },
            }),
            null,
          ),
          Pe(
            (Rr) => {
              var Na = {
                  display: "flex",
                  "flex-direction": "column",
                  border: "1px solid var(--vscode-commandCenter-inactiveBorder)",
                  transition: "border-color 0.1s ease-in-out",
                  contain: "paint",
                  position: "relative",
                  margin: "4px 0px",
                  "border-radius": "6px",
                  ...i.style,
                },
                Un =
                  Cn() === "collapsed" ? "var(--vscode-editor-background)" : W(),
                Tn = R() === -1 ? "2px" : void 0,
                nc = L() ? "make-shine" : void 0,
                jl = {
                  ...wt,
                  display:
                    Cn() === "collapsed" ||
                    !u()?.content ||
                    (m() === "diff" && Ht())
                      ? "none"
                      : "block",
                  "--vscode-sideBar-background":
                    "var(--vscode-editor-background)",
                  padding: "0px 6px",
                  "padding-bottom": Br() ? "16px" : void 0,
                  position: "relative",
                }
              return (
                (Rr.e = Oi(xi, Na, Rr.e)),
                Un !== Rr.t &&
                  ((Rr.t = Un) != null
                    ? Bi.style.setProperty("background", Un)
                    : Bi.style.removeProperty("background")),
                Tn !== Rr.a &&
                  ((Rr.a = Tn) != null
                    ? Kn.style.setProperty("margin-right", Tn)
                    : Kn.style.removeProperty("margin-right")),
                nc !== Rr.o && tt(Ho, (Rr.o = nc)),
                (Rr.i = Oi(Df, jl, Rr.i)),
                Rr
              )
            },
            { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0 },
          ),
          xi
        )
      })(),
      D(ae, {
        get when() {
          return pn()
        },
        children: (xi) =>
          D(qve, {
            get reactiveCloser() {
              return globalContext.reactiveStorageService.nonPersistentStorage
                .forceComposerDropdownRerender
            },
            width: 180,
            get position() {
              return xi()
            },
            onClose: qr,
            anchor: "top-right",
            get sections() {
              return [
                {
                  items: [
                    {
                      id: "composer-message-codeblock-auto-fix",
                      title: "Auto-fix",
                      showType: composerMode()?.autoFix && !Dn() ? "check" : void 0,
                      onClick: () => {
                        globalContext.composerModesService.setComposerAutoFix(composerDataHandle(), !0),
                          updateCurrentComposer({ turnOffAutoFixing: !1 }),
                          qr()
                      },
                    },
                    {
                      id: "composer-message-codeblock-fix-manually",
                      title: "Fix manually for this chat",
                      showType: composerMode()?.autoFix && Dn() ? "check" : void 0,
                      onClick: () => {
                        globalContext.composerModesService.setComposerAutoFix(composerDataHandle(), !0),
                          updateCurrentComposer({ turnOffAutoFixing: !0 }),
                          qr()
                      },
                    },
                    {
                      id: "composer-message-codeblock-always-fix-manually",
                      title: "Always fix manually",
                      showType: composerMode()?.autoFix ? void 0 : "check",
                      onClick: () => {
                        globalContext.composerModesService.setComposerAutoFix(composerDataHandle(), !1),
                          updateCurrentComposer({ turnOffAutoFixing: !0 }),
                          qr()
                      },
                    },
                  ],
                  type: "items",
                },
              ]
            },
          }),
      }),
      D(ae, {
        get when() {
          return ti()
        },
        children: (xi) =>
          D(WE, {
            width: "auto",
            get position() {
              return xi()
            },
            close: Ct,
            get reactiveCloser() {
              return globalContext.reactiveStorageService.nonPersistentStorage
                .forceComposerDropdownRerender
            },
            anchor: "top-right",
            style: {
              "background-color": "var(--vscode-editor-background)",
              border: "1px solid var(--vscode-commandCenter-inactiveBorder)",
              "border-radius": "2px",
              overflow: "hidden",
              "z-index": 1e3,
              "max-width": "240px",
              "font-size": "11px",
              padding: "0px",
            },
            get children() {
              return D(Nl, {
                style: { "max-height": "120px" },
                contentStyle: { display: "flex", "flex-direction": "column" },
                innerContainerStyle: { "min-height": "unset" },
                scrollingDirection: "vertical",
                nonReactiveElementOptions: { alwaysConsumeMouseWheel: !0 },
                get children() {
                  var Bi = $B()
                  return (
                    Bi.style.setProperty("display", "flex"),
                    Bi.style.setProperty("flex-direction", "column"),
                    Bi.style.setProperty("gap", "2px"),
                    Bi.style.setProperty("padding", "2px"),
                    Bi.style.setProperty("box-sizing", "border-box"),
                    F(
                      Bi,
                      D(Pn, {
                        get each() {
                          return us()
                        },
                        children: (ls) => {
                          const Kn = Q(() => {
                              const Sa = ls.applyToCurrentFile ? Rt() : ls.uri
                              return Sa
                                ? globalContext.workspaceContextService.asRelativePath(Sa)
                                : "Current file"
                            }),
                            Ho = ls.symbol ? ` (${ls.symbol.name})` : ""
                          return D(fPs, {
                            style: {
                              "text-overflow": "ellipsis",
                              "white-space": "nowrap",
                              overflow: "hidden",
                              padding: "2px 0px",
                              "padding-left": "1px",
                              "padding-right": "3px",
                              "border-radius": "2px",
                              cursor: "pointer",
                              display: "flex",
                              "align-items": "center",
                              gap: "4px",
                            },
                            onClick: () => {
                              Zi(ls), Ct()
                            },
                            onMouseEnter: (Sa) => Ne(Sa, Kn() + Ho, 1),
                            onMouseLeave: ze,
                            get children() {
                              return [
                                D(ae, {
                                  get when() {
                                    return Rh()
                                  },
                                  get children() {
                                    var Sa = xJ()
                                    return (
                                      Sa.style.setProperty(
                                        "margin-right",
                                        "-4px",
                                      ),
                                      Sa.style.setProperty("scale", "0.8"),
                                      Sa.style.setProperty("height", "14px"),
                                      Sa.style.setProperty("display", "flex"),
                                      Sa.style.setProperty(
                                        "align-items",
                                        "center",
                                      ),
                                      F(
                                        Sa,
                                        D(ae, {
                                          get when() {
                                            return ls.symbol
                                          },
                                          get fallback() {
                                            return D(Qu, {
                                              get fileName() {
                                                return Kn()
                                              },
                                              get workspaceContextService() {
                                                return globalContext.workspaceContextService
                                              },
                                              get modelService() {
                                                return globalContext.modelService
                                              },
                                              get languageService() {
                                                return globalContext.languageService
                                              },
                                            })
                                          },
                                          get children() {
                                            var Df = $B()
                                            return (
                                              Df.style.setProperty(
                                                "font-size",
                                                "14px",
                                              ),
                                              Df.style.setProperty(
                                                "margin-left",
                                                "2px",
                                              ),
                                              Df.style.setProperty(
                                                "margin-right",
                                                "4px",
                                              ),
                                              Pe(() =>
                                                tt(
                                                  Df,
                                                  `codicon codicon-symbol-${PBr(ls.symbol?.kind)}`,
                                                ),
                                              ),
                                              Df
                                            )
                                          },
                                        }),
                                      ),
                                      Sa
                                    )
                                  },
                                }),
                                (() => {
                                  var Sa = DBr(),
                                    Df = Sa.firstChild
                                  return (
                                    Sa.style.setProperty(
                                      "text-overflow",
                                      "ellipsis",
                                    ),
                                    Sa.style.setProperty("overflow", "hidden"),
                                    Sa.style.setProperty("white-space", "nowrap"),
                                    Sa.style.setProperty("direction", "rtl"),
                                    Sa.style.setProperty("line-height", "120%"),
                                    Df.style.setProperty("direction", "ltr"),
                                    Df.style.setProperty("unicode-bidi", "embed"),
                                    F(Df, () => Kn() + Ho),
                                    Sa
                                  )
                                })(),
                              ]
                            },
                          })
                        },
                      }),
                    ),
                    Bi
                  )
                },
              })
            },
          }),
      }),
    ]
  }

  return {
    LBr,
  }
}
