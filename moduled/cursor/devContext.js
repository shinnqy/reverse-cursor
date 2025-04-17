// @ts-check

// 254597
export function createDevContext(params) {
  const { ce, U, vm, extUri, li, hb, Zb, J, L1, p7i, ms, ResourceMap, bs, le, dt, nr, oi, De, _l, Tt, NG, i7, KWe, X, jo, I, hl, Cu, Y, Vu, qn, wv, xe, tt, ie, $, xBi, Nz, $r, u_, M, y4t, e0, Ze, G, un, Nae, cc, KLn, $tr, te, CEt, wEt, gG } = params;

  var Aa
  ;(function (i) {
    ;(i[(i.File = 0)] = "File"),
      (i[(i.Folder = 1)] = "Folder"),
      (i[(i.Symbol = 2)] = "Symbol"),
      (i[(i.Git = 3)] = "Git"),
      (i[(i.Notepad = 4)] = "Notepad"),
      (i[(i.Semantic = 5)] = "Semantic")
  })(Aa || (Aa = {}))
  var Gtr = [
      "node_modules",
      "__tests__",
      ".git",
      "dist",
      "out",
      "bin",
      "site-packages",
      "__pycache__",
    ],
    Jtr = new Set([ce.notepad, ce.aiChat, ce.cursorDev]),
    Ktr = new RegExp("(^|\\/)" + Gtr.join("|") + "(\\/|$)"),
    Ytr = /\.(png|jpg|jpeg|gif|tiff)$/i,
    fXe = 15,
    Xtr = 9e3,
    Qtr = 100,
    Ztr = 50,
    pF
  ;(function (i) {
    ;(i[(i.None = 0)] = "None"),
      (i[(i.NoncontiguousSubstring = 1)] = "NoncontiguousSubstring"),
      (i[(i.Substring = 2)] = "Substring"),
      (i[(i.StartsWith = 3)] = "StartsWith"),
      (i[(i.Exact = 4)] = "Exact")
  })(pF || (pF = {}))
  function eir(i, e) {
    const t = e.toLowerCase(),
      s = i.toLowerCase()
    let n = 0
    for (let r = 0; r < s.length; r++)
      if ((s[r] === t[n] && n++, n === t.length)) return true
    return false
  }
  function WXi(i, e, t = true) {
    e = e.toLowerCase()
    const n = i
      .toLowerCase()
      .split(" ")
      .map((r) =>
        r === e
          ? pF.Exact
          : e.startsWith(r)
            ? pF.StartsWith
            : e.includes(r)
              ? pF.Substring
              : eir(e, r)
                ? pF.NoncontiguousSubstring
                : pF.None,
      )
    return t
      ? n.some((r) => r === pF.None)
        ? pF.None
        : Math.max(...n)
      : n.reduce((r, o) => r + o, 0) / n.length
  }
  async function tir(i, e) {
    return (
      await Promise.all(
        i.map(async (s) => {
          try {
            return (await e.fileService.exists(s.uri)) ? s : null
          } catch (n) {
            return console.error(`Error checking file existence: ${n}`), null
          }
        }),
      )
    ).filter((s) => s !== null)
  }
  function iir(i, e) {
    let t = []
    for (let s of e) {
      const n = i.workspaceContextService.asRelativePath(s)
      if (!n) continue
      let r = n.split("/")
      for (let o = 1; o < r.length; o++) {
        const a = r.slice(0, o).join("/")
        a !== "/" && a !== "" && t.push(U.parse(a))
      }
    }
    return (
      (t = [...new Set(t.map((s) => s.toString()))].map((s) => U.parse(s))), t
    )
  }
  function w4t(i) {
    const e = i
    return !!e.picks && e.additionalPicks instanceof Promise
  }
  function C4t(i) {
    const e = i
    return Array.isArray(e.items)
  }
  function gXe(i) {
    return (C4t(i) ? i.items : i)
      .map((t) => (t.type === undefined ? t.resource : undefined))
      .filter((t) => t !== undefined)
  }
  async function sir(i, e, t, s) {
    const n = vm(i)
    let r = []
    const o = []
    if (!(s?.autoPopulate ?? true) && !i) return []
    const l = (d) => o.some((g) => extUri.isEqual(d, g))
    ;(s?.includeOpenEditors ?? false) &&
      e.editorService
        .getEditors(0)
        .map((g) => ({ uri: g.editor.resource, type: "open" }))
        .filter((g) => {
          if (!g.uri) return false
          if (!i) return true
          const p = li(g.uri),
            m = e.workspaceContextService.asRelativePath(g.uri),
            { score: b } = hb(
              { label: p, description: m },
              n,
              true,
              Zb,
              e.anythingQuickAccessProvider.scorerCache,
            )
          return b > 0
        })
        .forEach((g) => {
          r.push(g), o.push(g.uri)
        })
    const h = e.anythingQuickAccessProvider.doGetPicksPublic(
      i,
      {
        enableEditorSymbolSearch: false,
        excludeNotepads: true,
        excludeSemanticSearch: true,
        excludeCursorIgnore: true,
      },
      new J(),
      t.token,
    )
    if (w4t(h)) {
      const [d, g] = await Promise.all([
        Promise.resolve(h.picks),
        h.additionalPicks,
      ])
      gXe(d).forEach((p) => {
        l(p) || (r.push({ uri: p, type: "fast" }), o.push(p))
      }),
        gXe(g).forEach((p) => {
          l(p) || (r.push({ uri: p, type: "slow" }), o.push(p))
        })
    } else if (h instanceof Promise) {
      const d = await h
      gXe(d).forEach((g) => {
        l(g) || (r.push({ uri: g, type: "slow" }), o.push(g))
      })
    } else
      gXe(h).forEach((d) => {
        l(d) || (r.push({ uri: d, type: "slow" }), o.push(d))
      })
    return (
      (r = r.filter((d) => !Jtr.has(d.uri.scheme))),
      (
        await tir(
          r.map((d) => {
            const p = e.customEditorLabelService.getName(d.uri) ?? li(d.uri),
              m = e.workspaceContextService.asRelativePath(d.uri),
              {
                labelMatch: b,
                descriptionMatch: y,
                score: w,
              } = hb(
                { label: p, description: m },
                n,
                true,
                Zb,
                e.anythingQuickAccessProvider.scorerCache,
              )
            let C = w
            return (
              d.type === "slow" ? (C /= Xtr) : d.type === "open" && (C *= Qtr),
              i && U.parse(i).toString() === d.uri.toString() && (C *= Ztr),
              {
                name: p,
                type: Aa.File,
                score: C,
                uri: d.uri,
                secondaryText: m,
                labelMatches: b,
                descriptionMatches: y,
              }
            )
          }),
          e,
        )
      ).sort((d, g) => g.score - d.score)
    )
  }
  async function nir(i, e, t) {
    let s = L1(i),
      n = p7i(s)
    ms && (n = n.replaceAll("/", "\\"))
    let o = (
      await e.anythingQuickAccessProvider.getFilePicks(vm(n), new ResourceMap(), t.token)
    ).map((g) => g.resource ?? U.parse(""))
    const l = e.editorService
      .getEditors(0)
      .map((g) => g.editor.resource)
      .filter((g) => g !== undefined)
    o = o.concat(l)
    let c = []
    try {
      const g = await e.commandService.executeCommand("git.api.getRepositories"),
        p = o.map((m) => m.toString())
      c = (
        await Promise.all(
          g.map(async (m) => {
            const b = p.filter((y) => y.startsWith(m))
            return m && b.length > 0
              ? await e.commandService.executeCommand("git.api.checkIgnore", m, b)
              : []
          }),
        )
      ).flat()
    } catch (g) {
      console.error("ERROR during git call to ignored files"), console.error(g)
    }
    let h = iir(e, o)
    h = h.filter((g) => {
      let p = e.workspaceContextService.asRelativePath(g).toLowerCase(),
        m = [[0], [0]]
      for (let b = 0; b < p.length; b++)
        m[0].push(m[0][b]),
          m[1].push(Math.max(m[1][b], Math.min(n.length, m[0][b] + 1))),
          m[0][b] < n.length &&
            p[b] === n[m[0][b]] &&
            (m[0][b + 1] = m[0][b] + 1),
          m[1][b] < n.length && p[b] === n[m[1][b]] && (m[1][b + 1] = m[1][b] + 1)
      return m[1][p.length] >= n.length
    })
    const u = h.map((g) => {
      let p = 9
      const m = e.workspaceContextService.asRelativePath(g).toLowerCase(),
        b = li(g).toLowerCase().replaceAll("\\", "/"),
        y = n.toLowerCase(),
        w = false
      if (m.endsWith(y) || (m + "/").endsWith(y)) p = 16
      else if (b.startsWith(y)) p = 15
      else if (b.includes(y) && w) p = 14
      else if (b.includes(y)) p = 13
      else {
        const C = WXi(y, b)
        if (C > 0 && w) p = 12 + C / 4
        else if (C > 0) p = 11 + C / 4
        else {
          const S = WXi(y, m)
          S > 0 && w ? (p = 10 + S / 4) : S > 0 ? (p = 9 + S / 4) : (p = 8)
        }
      }
      return (
        Ktr.test(g.path) && (p = 7),
        Ytr.test(g.path) && (p = 6),
        c.includes(g.path) && (p = 5),
        { folder: g, score: p }
      )
    })
    u.sort((g, p) => p.score - g.score)
    const d = vm(n)
    return u.map((g) => {
      const p = li(g.folder).replaceAll("\\", "/"),
        m = e.workspaceContextService
          .asRelativePath(g.folder)
          .replaceAll("\\", "/"),
        { labelMatch: b, descriptionMatch: y } = hb(
          { label: p, description: m },
          d,
          true,
          Zb,
          e.anythingQuickAccessProvider.scorerCache,
        )
      return {
        name: p,
        type: Aa.Folder,
        score: g.score,
        uri: g.folder,
        secondaryText: m,
        labelMatches: b,
        descriptionMatches: y,
      }
    })
  }
  async function rir(i, e, t) {
    let s = [],
      n = []
    try {
      s = (await e.gitContextService.searchAllCommits(i)) ?? []
    } catch (l) {
      console.error("Error searching commits:", l)
    }
    try {
      n = (await e.gitContextService.searchAllPrs(i)) ?? []
    } catch (l) {
      console.error("Error searching PRs:", l)
    }
    const r = vm(i),
      o = s.map((l) => {
        const { labelMatch: c, descriptionMatch: h } = hb(
          { label: l.message, description: l.sha },
          r,
          true,
          Zb,
          e.anythingQuickAccessProvider.scorerCache,
        )
        return {
          name: l.message,
          type: Aa.Git,
          score: 7,
          isPullRequest: false,
          secondaryText: l.sha,
          labelMatches: c,
          descriptionMatches: h,
        }
      }),
      a = n.map((l) => {
        const {
          labelMatch: c,
          descriptionMatch: h,
          score: u,
        } = hb(
          { label: l.title, description: `#${l.number}` },
          r,
          true,
          Zb,
          e.anythingQuickAccessProvider.scorerCache,
        )
        return {
          name: l.title,
          type: Aa.Git,
          score: u,
          secondaryText: `#${l.number}`,
          isPullRequest: true,
          labelMatches: c,
          descriptionMatches: h,
        }
      })
    return [...o, ...a]
  }
  async function oir(i, e) {
    const t = vm(i)
    return Object.values(e.notepadDataService.notepadsData.notepads)
      .map((n) => {
        const {
          labelMatch: r,
          descriptionMatch: o,
          score: a,
        } = hb(
          { label: n.name, description: "" },
          t,
          true,
          Zb,
          e.anythingQuickAccessProvider.scorerCache,
        )
        return {
          name: n.name,
          type: Aa.Notepad,
          score: a === 0 ? -1 : a,
          secondaryText: undefined,
          labelMatches: r,
          descriptionMatches: o,
          notepadId: n.id,
        }
      })
      .filter((n) => n.labelMatches?.length || !i)
      .sort((n, r) => r.score - n.score)
  }
  async function air(i, e, t) {
    const s = vm(i)
    return (
      await e.symbolsQuickAccessProvider.getSymbolPicks(
        i,
        { skipLocal: false, skipSorting: false },
        t.token,
      )
    ).map((r) => {
      const o = r.symbol.name,
        a = e.workspaceContextService.asRelativePath(r.symbol.location.uri),
        {
          labelMatch: l,
          descriptionMatch: c,
          score: h,
        } = hb(
          { label: o, description: a },
          s,
          true,
          Zb,
          e.anythingQuickAccessProvider.scorerCache,
        )
      return {
        name: o,
        type: Aa.Symbol,
        score: h,
        uri: r.symbol.location.uri,
        range: r.symbol.location.range,
        secondaryText: a,
        labelMatches: l,
        descriptionMatches: c,
      }
    })
  }
  async function lir(i, e, t, s) {
    if (i === "") return []
    let n
    try {
      n = await e.repositoryService.parallelSearch(
        i,
        s?.topK ?? 30,
        s?.finalK ?? 15,
        { fast: true, raceNRequests: s?.raceNRequests ?? 6, abortSignal: t },
      )
    } catch {
      return []
    }
    if (s?.fileBased ?? true) {
      const o = new Map()
      n.forEach((l) => {
        const c = l.codeBlock
        if (!c) return
        const h = { ...c, score: l.score },
          u = bs(h.relativeWorkspacePath),
          d = h.relativeWorkspacePath
        if (!o.has(d))
          o.set(d, {
            type: Aa.Semantic,
            name: u,
            score: l.score * fXe,
            secondaryText: d,
            fileBased: true,
            codeBlocks: [h],
            uri: e.workspaceContextService.resolveRelativePath(d),
          })
        else {
          const g = o.get(d)
          g.codeBlocks.push(h), (g.score = Math.max(g.score, l.score * fXe))
        }
      })
      let a = Array.from(o.values())
      return a.sort((l, c) => c.score - l.score), a
    }
    return n.map((o) => {
      const a = o.codeBlock
      if (!a)
        throw new Error("Expected code block in non-file-based semantic search")
      const l = { ...a, score: o.score * fXe },
        c = bs(l.relativeWorkspacePath)
      return {
        type: Aa.Semantic,
        name: c,
        score: o.score * fXe,
        secondaryText: l.relativeWorkspacePath,
        fileBased: false,
        codeBlock: l,
        uri: e.workspaceContextService.resolveRelativePath(
          l.relativeWorkspacePath,
        ),
      }
    })
  }
  function Rue(i, e, t, s) {
    const [n, r] = le([]),
      [o, a] = le(null),
      [l, c] = le(null),
      [h, u] = le(false),
      d = dt()
    nr(() => {
      d.anythingQuickAccessProvider.initializeCaches(),
        d.selectedContextService.addOnCursorIgnoreLoadedCallback(() => {
          console.log("Cursor ignore loaded, searching again"), p()
        })
    })
    const g = (b, y, w, C, S) => {
        const x = {
          [Aa.File]: () => sir(b, d, w, S.file),
          [Aa.Folder]: () => nir(b, d, w),
          [Aa.Symbol]: () => air(b, d, w),
          [Aa.Git]: () => rir(b, d, w),
          [Aa.Notepad]: () => oir(b, d),
          [Aa.Semantic]: () => lir(b, d, C, S.semantic),
        }
        return y.length === 0
          ? Object.values(x).map((k) => k())
          : y.map((k) => x[k]())
      },
      p = async () => {
        if (s?.()) {
          r([]), u(false)
          return
        }
        const b = i(),
          y = e ? e() : [],
          w = t ? t() : {}
        o()?.cancel(), o()?.dispose(), l()?.abort()
        const C = new oi(),
          S = new AbortController()
        a(C), c(S), u(true)
        try {
          const x = g(b, y, C, S.signal, w)
          let k = []
          const E = [...x]
          for (; E.length > 0; ) {
            const D = await Promise.race(
              E.map((P, L) =>
                P.then((A) => ({ result: A, index: L, error: null })).catch(
                  (A) => ({ result: [], index: L, error: A }),
                ),
              ),
            )
            if ((E.splice(D.index, 1), D.error))
              console.error("Search failed:", D.error)
            else {
              const P = D.result.filter(
                (L) =>
                  L.uri === undefined ||
                  !d.selectedContextService.shouldIgnoreUri(L.uri),
              )
              ;(k = [...k, ...P].sort((L, A) => A.score - L.score)), r(k)
            }
          }
        } catch (x) {
          x.name === "AbortError"
            ? console.log("Search aborted")
            : console.error("Error during search:", x)
        } finally {
          u(false)
        }
      }
    let m
    return (
      De(
        _l(
          [i, () => e?.() ?? [], () => t?.() ?? {}, () => s?.() ?? false],
          async () => {
            if (s?.()) {
              r([]), u(false)
              return
            }
            clearTimeout(m),
              (m = setTimeout(async () => {
                await p()
              }, 30))
          },
        ),
      ),
      nr(() => {
        s?.() || p()
      }),
      { options: n, isLoading: h }
    )
  }
  function cir(i) {
    const e = i.textContent
    return e !== null ? { node: Jk(e, undefined) } : null
  }
  function hir(i) {
    if (i === Tt.link) return { cursor: "pointer" }
  }
  var uir = "background-color: rgba(24, 119, 232, 0.2)",
    dir = "background-color: rgba(255, 223, 0, 0.2)",
    Aue = class s_s extends NG {
      static getType() {
        return "mention"
      }
      static clone(e) {
        return new s_s(
          e.__mention,
          e.__contextIntent,
          e.__text,
          e.__key,
          e.typeaheadType,
          e.metadata,
        )
      }
      static importJSON(e) {
        const t = Jk(
          e.mentionName,
          e.contextIntent ? i7.fromJsonString(e.contextIntent) : undefined,
          undefined,
          undefined,
          undefined,
          e.storedKey,
        )
        return (
          t.setTextContent(e.text),
          t.setFormat(e.format),
          t.setDetail(e.detail),
          t.setMode(e.mode),
          t.setStyle(e.style),
          (t.metadata = e.metadata),
          e.typeaheadType && (t.typeaheadType = e.typeaheadType),
          t
        )
      }
      constructor(e, t, s, n, r, o, a) {
        const l = r && KWe.includes(r)
        super(s ?? (l ? "/" : "@") + e, n),
          (this.storedKey = a ?? this.__key),
          (this.__mention = e),
          (this.__contextIntent = t),
          (this.metadata = o),
          (this.typeaheadType = r)
      }
      exportJSON() {
        return {
          ...super.exportJSON(),
          mentionName: this.__mention,
          contextIntent: this.__contextIntent?.toJsonString(),
          type: "mention",
          typeaheadType: this.typeaheadType,
          storedKey: this.storedKey,
          version: 1,
          metadata: this.metadata,
        }
      }
      setContextIntent(e) {
        const t = this.getWritable()
        t.__contextIntent = e
      }
      getContextIntent() {
        return this.getLatest().__contextIntent
      }
      createDOM(e) {
        const t = this.typeaheadType && KWe.includes(this.typeaheadType),
          s = super.createDOM(e)
        if (
          ((s.style.cssText = t ? dir : uir),
          (s.className = "mention"),
          s.setAttribute("contenteditable", "false"),
          this.typeaheadType)
        ) {
          const n = hir(this.typeaheadType)
          if (n) for (const [r, o] of Object.entries(n)) s.style[r] = o
          s.setAttribute("data-mention-name", this.__mention),
            s.setAttribute("data-mention-key", this.__key),
            s.setAttribute("data-typeahead-type", this.typeaheadType)
        }
        return s
      }
      exportDOM() {
        const e = document.createElement("span")
        return (
          e.setAttribute("data-lexical-mention", "true"),
          (e.textContent = this.__text),
          { element: e }
        )
      }
      isSegmented() {
        return false
      }
      static importDOM() {
        return {
          span: (e) =>
            e.hasAttribute("data-lexical-mention")
              ? { conversion: cir, priority: 1 }
              : null,
        }
      }
      isTextEntity() {
        return true
      }
      isToken() {
        return true
      }
    }
  function Jk(i, e, t, s, n, r, o) {
    const a = new Aue(
      i,
      e,
      undefined,
      t,
      s,
      { selection: n || undefined, selectedOption: o || undefined },
      r,
    )
    return a.setMode("segmented").toggleDirectionless(), a
  }
  function fir(i) {
    return i instanceof Aue
  }
  var gir = X("<span>")
  function pir(i, e) {
    return new jo(
      i.name,
      I(hl, {
        get fileName() {
          return i.name
        },
        get workspaceContextService() {
          return e.workspaceContextService
        },
        get modelService() {
          return e.modelService
        },
        get languageService() {
          return e.languageService
        },
      }),
      Tt.auto_context,
      i.score,
      { uri: i.uri },
      undefined,
      i.secondaryText,
    )
  }
  function qXi(i, e) {
    const t = dt(),
      [s] = Cu(),
      [n, r] = le(0)
    s.registerUpdateListener(() => {
      r((m) => m + 1)
    })
    const o = Y(() => {
        try {
          n()
          const m = s.getEditorState()
          if (!m) return ""
          const b = m.read(() => {
            try {
              let y = ""
              const w = Vu()
              if (!w) return ""
              const C = (S) => {
                S &&
                  (fir(S) ||
                    (qn(S)
                      ? (y += S.getTextContent())
                      : "getChildren" in S && S.getChildren().forEach(C)))
              }
              return "getChildren" in w && w.getChildren().forEach(C), y
            } catch (y) {
              return console.error("Error traversing editor state:", y), ""
            }
          })
          return b === "$" || b === "@" ? "" : b
        } catch (m) {
          return console.error("Error in plainText memo:", m), ""
        }
      }),
      a = Y(() => ({
        semantic: { fileBased: true, topK: 50, finalK: 25 },
        file: { autoPopulate: o() === "" },
      })),
      l = Y(() => {
        const m = i() || ""
        return m.startsWith("$") ? m.slice(1) : m
      }),
      { options: c, isLoading: h } = Rue(
        l,
        () => [Aa.Semantic],
        a,
        () => e?.disabled?.() ?? false,
      ),
      { options: u, isLoading: d } = Rue(
        () => o(),
        () => [Aa.Semantic],
        a,
        () => e?.disabled?.() ?? false,
      ),
      g = Y(() => h() || d())
    return {
      options: Y(() => {
        const m = new Set(),
          b = [...c(), ...u()]
            .filter((w) => {
              if (!w.uri) return false
              const C = w.uri.toString()
              return !(
                m.has(C) ||
                (m.add(C), e?.excludeFiles?.()?.some((S) => S.toString() === C))
              )
            })
            .sort((w, C) => C.score - w.score),
          y = []
        return (
          y.push(
            ...b.map((w) => pir(w, t)).slice(0, e?.resultsLimit?.() ?? 1 / 0),
          ),
          e?.showLoading && g()
            ? y.push(
                new jo(
                  "Loading",
                  I(wv, {}),
                  Tt.staticheading,
                  0,
                  undefined,
                  undefined,
                  undefined,
                ),
              )
            : b.length > (e?.resultsLimit?.() ?? 1 / 0) &&
              e?.showLoadMore &&
              y.push(
                new jo(
                  `${b.length - (e?.resultsLimit?.() ?? 1 / 0)} more results`,
                  (() => {
                    var w = gir()
                    return xe(() => tt(w, ie.asClassName($.ellipsis))), w
                  })(),
                  Tt.heading,
                  0,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  { isLoadMore: true },
                ),
              ),
          y
        )
      }),
      isLoading: g,
    }
  }
  function mir() {
    const i = dt()
    return xBi()?.forcedMode === "chat"
      ? i.composerDataService.selectedChatId
      : i.composerDataService.selectedComposerId
  }
  var Ml = X("<i>"),
    bir = X("<span>Indexed "),
    jXi = X("<span>"),
    vir = [
      "node_modules",
      "__tests__",
      ".git",
      "dist",
      "out",
      "bin",
      "site-packages",
      "__pycache__",
    ],
    S4t = new RegExp("(^|\\/)" + vir.join("|") + "(\\/|$)"),
    x4t = /\.(png|jpg|jpeg|gif|tiff)$/i,
    HP
  ;(function (i) {
    ;(i[(i.None = 0)] = "None"),
      (i[(i.NoncontiguousSubstring = 1)] = "NoncontiguousSubstring"),
      (i[(i.Substring = 2)] = "Substring"),
      (i[(i.StartsWith = 3)] = "StartsWith"),
      (i[(i.Exact = 4)] = "Exact")
  })(HP || (HP = {}))
  function yir(i, e) {
    const t = e.toLowerCase(),
      s = i.toLowerCase()
    let n = 0
    for (let r = 0; r < s.length; r++)
      if ((s[r] === t[n] && n++, n === t.length)) return true
    return false
  }
  function Mue(i, e, t = true) {
    e = e.toLowerCase()
    const n = i
      .toLowerCase()
      .split(" ")
      .map((r) =>
        r === e
          ? HP.Exact
          : e.startsWith(r)
            ? HP.StartsWith
            : e.includes(r)
              ? HP.Substring
              : yir(e, r)
                ? HP.NoncontiguousSubstring
                : HP.None,
      )
    return t
      ? n.some((r) => r === HP.None)
        ? HP.None
        : Math.max(...n)
      : n.reduce((r, o) => r + o, 0) / n.length
  }
  function zXi(i, e, t) {
    const s = [e, ...t].map((n) => Mue(i, n, false))
    return Math.max(...s)
  }
  function GXi(i) {
    const e = i
    return !!e.picks && e.additionalPicks instanceof Promise
  }
  function PY(i) {
    const e = i
    return Array.isArray(e.items)
  }
  function JXi({
    queryString: i,
    justClickedIntoMenu: e,
    mode: t,
    props: s,
    vsContext: n,
  }) {
    const [r, o] = le(Nz.nextId()),
      [a, l] = le([]),
      [c, h] = le(null)
    return (
      nr(() => {
        n.anythingQuickAccessProvider.initializeCaches()
      }),
      De(
        _l([e, i], async () => {
          const u = t()
          if (u !== Tt.none && u !== Tt.file) return
          const d = i(),
            g = e()
          if (d === null && !g) {
            l([])
            return
          }
          const p = new oi()
          c() && (c()?.cancel(), c()?.dispose()), h(p)
          let m = []
          const b = n.anythingQuickAccessProvider.doGetPicksPublic(
            d ?? "",
            {
              enableEditorSymbolSearch: false,
              excludeNotepads: true,
              excludeSemanticSearch: true,
              excludeCursorIgnore: true,
            },
            new J(),
            p.token,
          )
          if (GXi(b)) {
            let w = false,
              C = false
            await Promise.all([
              (async () => {
                if (
                  !(
                    typeof b.mergeDelay == "number" &&
                    (await $r(b.mergeDelay), p.token.isCancellationRequested)
                  ) &&
                  !C
                ) {
                  let S
                  PY(b.picks) ? (S = b.picks.items) : (S = b.picks),
                    (m = S.map((x) => {
                      if (x.type !== "separator") return x.resource
                    }).filter((x) => x !== undefined)),
                    (w = true)
                }
              })(),
              (async () => {
                try {
                  const S = await b.additionalPicks
                  if (p.token.isCancellationRequested) return
                  let x
                  PY(b.picks) ? (x = b.picks.items) : (x = b.picks)
                  let k
                  PY(S) ? (k = S.items) : (k = S),
                    (k.length > 0 || !w) &&
                      (m = [...x, ...k]
                        .map((E) => {
                          if (E.type !== "separator") return E.resource
                        })
                        .filter((E) => E !== undefined))
                } finally {
                  C = true
                }
              })(),
            ])
          } else if (b instanceof Promise) {
            const w = await b
            if (c()?.token.isCancellationRequested === true) return
            let C
            PY(w) ? (C = w.items) : (C = w),
              (m = C.map((S) => {
                if (S.type !== "separator") return S.resource
              }).filter((S) => S !== undefined))
          } else {
            let w
            PY(b) ? (w = b.items) : (w = b),
              (m = w
                .map((C) => {
                  if (C.type !== "separator") return C.resource
                })
                .filter((C) => C !== undefined))
          }
          m = m.filter(
            (w) => w.scheme === ce.file || w.scheme === ce.vscodeRemote,
          )
          const y = m.map((w, C) => {
            const S = s.isLongContextMode
              ? new Promise((E, D) => {
                  n.fileService.stat(w).then((P) => {
                    E(P.size)
                  })
                })
              : undefined
            let x = 9 + (m.length - C) / m.length
            const k = i()
            if (k) {
              const E = li(w).toLowerCase(),
                D = s.recentFiles.has(w.fsPath)
              ;(E.startsWith(k) || `/${E}`.startsWith(k)) && D
                ? (x += 3)
                : E.includes(k) && D
                  ? (x += 2)
                  : (E.startsWith(k) || `/${E}`.startsWith(k)) && (x += 1)
            }
            return new jo(
              li(w),
              () =>
                I(hl, {
                  height: 14,
                  get fileName() {
                    return w.fsPath
                  },
                  get workspaceContextService() {
                    return n.workspaceContextService
                  },
                  get modelService() {
                    return n.modelService
                  },
                  get languageService() {
                    return n.languageService
                  },
                }),
              Tt.file,
              x,
              { uri: w },
              undefined,
              n.workspaceContextService.asRelativePath(w),
              undefined,
              undefined,
              S,
            )
          })
          l(y.slice(0, u_))
        }),
      ),
      { fileOptions: a, setFileOptions: l }
    )
  }
  function wir(i, e) {
    let t = []
    for (let s of e) {
      const n = i.workspaceContextService.asRelativePath(s)
      if (!n) continue
      let r = n.split("/")
      for (let o = 1; o < r.length; o++) {
        const a = r.slice(0, o).join("/")
        a !== "/" && a !== "" && t.push(U.parse(a))
      }
    }
    return (
      (t = [...new Set(t.map((s) => s.toString()))].map((s) => U.parse(s))), t
    )
  }
  function Cir({
    queryString: i,
    justClickedIntoMenu: e,
    mode: t,
    props: s,
    vsContext: n,
  }) {
    const [r, o] = le([]),
      [a, l] = le(null)
    return (
      De(
        _l([e, i], async () => {
          const c = t()
          if (c !== Tt.none && c !== Tt.folder) return
          const h = i(),
            u = e()
          if (h === null && !u) {
            o([])
            return
          }
          const d = new oi()
          a() && (a()?.cancel(), a()?.dispose()), l(d)
          let p = L1(h ?? ""),
            m = p7i(p)
          ms && (m = m.replaceAll("/", "\\"))
          let b = []
          if (
            ((b = (
              await n.anythingQuickAccessProvider.getFilePicks(
                vm(m),
                new ResourceMap(),
                d.token,
              )
            ).map((F) => F.resource ?? U.parse(""))),
            d.token.isCancellationRequested)
          )
            return
          const S = n.editorService.editors
            .map((F) => F.resource)
            .filter((F) => F !== undefined)
          b = b.concat(S)
          const x = new Map(b.map((F) => [F.toString(), F.path]))
          let k = []
          try {
            const F = await n.commandService.executeCommand(
                "git.api.getRepositories",
              ),
              H = b.map((B) => B.toString())
            k = (
              await Promise.all(
                F.map(async (B) => {
                  const z = H.filter((K) => K.startsWith(B)).map(
                    (K) => x.get(K) ?? K,
                  )
                  return B && z.length > 0
                    ? await n.commandService.executeCommand(
                        "git.api.checkIgnore",
                        B,
                        z,
                      )
                    : []
                }),
              )
            ).flat()
          } catch (F) {
            console.error("ERROR during git call to ignored files"),
              console.error(F)
          }
          let E = wir(n, b)
          E = E.filter((F) => {
            let H = n.workspaceContextService.asRelativePath(F).toLowerCase(),
              B = [[0], [0]]
            for (let z = 0; z < H.length; z++)
              B[0].push(B[0][z]),
                B[1].push(Math.max(B[1][z], Math.min(m.length, B[0][z] + 1))),
                B[0][z] < m.length &&
                  H[z] === m[B[0][z]] &&
                  (B[0][z + 1] = B[0][z] + 1),
                B[1][z] < m.length &&
                  H[z] === m[B[1][z]] &&
                  (B[1][z + 1] = B[1][z] + 1)
            return B[1][H.length] >= m.length
          })
          const D = E.map((F) => {
            {
              let H = m.toLowerCase(),
                B = 9
              const z = n.workspaceContextService.asRelativePath(F).toLowerCase(),
                K = li(F).toLowerCase().replaceAll("\\", "/"),
                Q = s.recentFiles.has(F.fsPath)
              if (F)
                if (s.isLongContextMode) {
                  if (z.endsWith(H) || (z + "/").endsWith(H)) B = 16
                  else if (K.startsWith(H)) B = 15
                  else if (K.includes(H) && Q) B = 14
                  else if (K.includes(H)) B = 13
                  else {
                    const se = Mue(H, K)
                    if (se > 0 && Q) B = 12 + se / 4
                    else if (se > 0) B = 11 + se / 4
                    else {
                      const he = Mue(H, z)
                      he > 0 && Q
                        ? (B = 10 + he / 4)
                        : he > 0
                          ? (B = 9 + he / 4)
                          : (B = 8)
                    }
                  }
                  S4t.test(F.path) && (B = 7),
                    x4t.test(F.path) && (B = 6),
                    k.includes(F.path) && (B = 5)
                } else {
                  const se = F.path.replaceAll("\\", "/"),
                    he = li(F).toLowerCase().replaceAll("\\", "/"),
                    ae = s.recentFiles.has(F.fsPath)
                  if (F) {
                    if (he.startsWith(H) && ae) B = 12
                    else if (he.includes(H) && ae) B = 11
                    else if (he.startsWith(H)) B = 10
                    else if (he.includes(H)) B = 9
                    else {
                      const de = Mue(H, he)
                      if (de > 0 && ae) B = 8 + de / 4
                      else if (de > 0) B = 7 + de / 4
                      else {
                        const Ee = Mue(H, z)
                        Ee > 0 && ae
                          ? (B = 6 + Ee / 4)
                          : Ee > 0
                            ? (B = 5 + Ee / 4)
                            : (B = 4)
                      }
                    }
                    S4t.test(se) && (B = 3),
                      x4t.test(se) && (B = 1),
                      k.includes(se) && (B = 1)
                  }
                }
              return { folder: F, score: B }
            }
          })
          D.sort((F, H) => H.score - F.score)
          const P = D.map(async (F) => {
              const { folder: H, score: B } = F
              let z = n.workspaceContextService
                .asRelativePath(H)
                .replaceAll("\\", "/")
              const K = s.isLongContextMode
                  ? n.sourceFilesService.getFolderSize(H.path).catch(() => {})
                  : undefined,
                Q = li(H).replaceAll("\\", "/")
              return new jo(
                Q,
                () =>
                  (() => {
                    var se = Ml()
                    return xe(() => tt(se, ie.asClassName($.folder))), se
                  })(),
                Tt.folder,
                B,
                { uri: H },
                undefined,
                z,
                undefined,
                undefined,
                K,
              )
            }),
            L = await Promise.all(P),
            A = []
          for (const F of L) F != null && A.push(F)
          o(A.slice(0, u_))
        }),
      ),
      { folderOptions: r, setFolderOptions: o }
    )
  }
  function Sir({
    queryString: i,
    justClickedIntoMenu: e,
    mode: t,
    vsContext: s,
  }) {
    const [n, r] = le([]),
      [o, a] = le(null)
    return (
      De(
        _l([i, e], async () => {
          const l = i()
          r(
            l
              ? [
                  new jo(
                    l,
                    () =>
                      (() => {
                        var c = Ml()
                        return xe(() => tt(c, ie.asClassName($.search))), c
                      })(),
                    Tt.text_search,
                    5,
                  ),
                ]
              : [],
          )
        }),
      ),
      { textSearchOptions: n, setTextSearchOptions: r }
    )
  }
  function xir({ queryString: i, mode: e, vsContext: t, props: s }) {
    const [n, r] = le([]),
      [o, a] = le([]),
      [l, c] = le([]),
      [h, u] = le(null)
    return (
      De(
        _l([i, l], () => {
          const d = e()
          if (d !== Tt.none && d !== Tt.doc) return
          const g = i(),
            p = g === null || g.trim() === "" ? "" : g,
            m = new oi()
          h() && (h()?.cancel(), h()?.dispose()), u(m)
          const b = Y(() =>
              l()
                .filter((C) => C.name.toLowerCase().includes(p.toLowerCase()))
                .filter(
                  (C) => !s.selectedDocs.some((S) => S.docId === C.identifier),
                )
                .map((C) => {
                  let S = 10
                  const x = C.lastUploadedAt ?? C.createdAt
                  return new jo(
                    C.name,
                    () =>
                      (() => {
                        var k = Ml()
                        return xe(() => tt(k, ie.asClassName($.book))), k
                      })(),
                    Tt.doc,
                    S,
                    undefined,
                    { docId: C.identifier, name: C.name, url: C.url },
                    x
                      ? (() => {
                          var k = bir(),
                            E = k.firstChild
                          return (
                            k.style.setProperty("direction", "ltr"),
                            k.style.setProperty("display", "inline-flex"),
                            M(k, () => y4t(x), null),
                            k
                          )
                        })()
                      : undefined,
                    () => {
                      t.commandService.executeCommand(
                        e0,
                        "features",
                        "cursor-settings-docs",
                      )
                    },
                  )
                }),
            ),
            y = Y(() => {
              const C = o().filter(
                  (k) =>
                    k.metadata?.docName !== undefined &&
                    k.metadata?.docName.toLowerCase().includes(p.toLowerCase()),
                ),
                S = [],
                x = new Set()
              for (const k of l()) x.add(k.identifier)
              for (const k of C)
                !x.has(k.docIdentifier ?? "") &&
                  !s.selectedDocs.some((E) => E.docId === k.docIdentifier) &&
                  (S.push(k), x.add(k.docIdentifier ?? ""))
              return S.map((k) => {
                let E = 10
                return new jo(
                  k.metadata?.docName ?? "",
                  () =>
                    (() => {
                      var D = Ml()
                      return xe(() => tt(D, ie.asClassName($.book))), D
                    })(),
                  Tt.doc,
                  E,
                  undefined,
                  {
                    docId: k.docIdentifier,
                    name: k.metadata?.docName ?? "Not Found",
                    url: k.metadata?.prefixUrl,
                  },
                  k.metadata?.public ? "Official" : "",
                )
              })
            }),
            w = Y(() => [...b(), ...y()].slice(0, u_))
          r([
            ...w(),
            new jo(
              "Add new doc",
              () =>
                (() => {
                  var C = Ml()
                  return xe(() => tt(C, ie.asClassName($.add))), C
                })(),
              Tt.doc,
              -1,
              undefined,
              { docId: "new", name: "Add new doc" },
            ),
          ])
        }),
      ),
      De(async () => {
        const d = await t.aiService.availableDocs({
            additionalDocIdentifiers:
              t.reactiveStorageService.applicationUserPersistentStorage.personalDocs.map(
                (p) => p.identifier,
              ),
          }),
          g = new Set()
        c(
          t.reactiveStorageService.applicationUserPersistentStorage.personalDocs.filter(
            (p) =>
              g.has(p.name)
                ? false
                : (g.add(p.name),
                  d.some((m) => m.docIdentifier === p.identifier)),
          ),
        ),
          a(d)
      }),
      { setDocsOptions: r, docsOptions: n }
    )
  }
  function kir({
    queryString: i,
    justClickedIntoMenu: e,
    mode: t,
    vsContext: s,
  }) {
    const [n, r] = le([]),
      [o, a] = le(null)
    return (
      De(
        _l([i, e], async () => {
          const l = t()
          if (l !== Tt.none && l !== Tt.code) return
          const c = i(),
            h = e()
          if (c === null && !h) {
            r([])
            return
          }
          if (
            (h ||
              (await new Promise((k) => {
                setTimeout(() => {
                  k(null)
                }, 200)
              })),
            i() !== c)
          )
            return
          const d = new oi()
          o() !== null && (o()?.cancel(), o()?.dispose()), a(d)
          let g = []
          if (h) {
            const k = s.editorService.getEditors(0)
            if (k.length > 0)
              for (const E of k) {
                const D = E.editor.resource
                if (D === undefined) continue
                const P = s.modelService.getModel(D)
                if (P === null) continue
                const L = (
                  await s.outlineService.getOrCreate(P, Ze.None)
                ).getTopLevelSymbols()
                g.push(
                  ...L.map((A) => ({ name: A.name, uri: D, range: A.range })),
                )
              }
          }
          const p =
              (c === null || c.trim() === "") && l !== Tt.code
                ? []
                : await s.symbolsQuickAccessProvider.getSymbolPicks(
                    c === null || c.trim() === "" ? "a" : c,
                    { skipLocal: false, skipSorting: false, delay: 0 },
                    d.token,
                  ),
            m = []
          for (const k of p)
            k.symbol !== undefined &&
              m.push({
                name: k.symbol.name,
                uri: k.symbol.location.uri,
                range: k.symbol.location.range,
              })
          const b = new Map(m.map((k) => [k.uri.toString(), k.uri.path]))
          let y = []
          try {
            const k = await s.commandService.executeCommand(
              "git.api.getRepositories",
            )
            for (let D = 0; D < m.length; D++) {
              const P = m[D],
                L = P.uri,
                A = P.range,
                F = s.workspaceContextService.asRelativePath(L)
              if (F.endsWith(".py") || F.endsWith(".ipynb")) {
                const H = s.modelService.getModel(L)
                if (H === null) continue
                if (A.startLineNumber === A.endLineNumber) {
                  const B = H.getLineFirstNonWhitespaceColumn(A.startLineNumber)
                  let z = A.startLineNumber + 1
                  for (
                    ;
                    z <= H.getLineCount() &&
                    z < A.startLineNumber + 1e3 &&
                    !(
                      H.getLineContent(z).trim().length > 0 &&
                      H.getLineFirstNonWhitespaceColumn(z) <= B
                    );

                  )
                    z++
                  g.push({
                    ...P,
                    range: new G(
                      P.range.startLineNumber,
                      P.range.startColumn,
                      z - 1,
                      H.getLineLastNonWhitespaceColumn(z - 1),
                    ),
                  })
                  continue
                }
              }
              g.push(P)
            }
            const E = g.map((D) => D.uri.toString())
            y = (
              await Promise.all(
                k.map(async (D) => {
                  const P = E.filter((L) => L.startsWith(D)).map(
                    (L) => b.get(L) ?? L,
                  )
                  return D && P.length > 0
                    ? await s.commandService.executeCommand(
                        "git.api.checkIgnore",
                        D,
                        P,
                      )
                    : []
                }),
              )
            ).flat()
          } catch (k) {
            console.error("ERROR during git call to ignored files"),
              console.error(k)
          }
          const w = g.map((k) => {
            {
              let E = 9
              const D = k.uri.path
              return (
                S4t.test(k.uri.path) && (E = 1),
                y.includes(D) && (E = 1),
                { symbol: k, score: E }
              )
            }
          })
          w.sort((k, E) => E.score - k.score)
          const C = w.slice(0, u_ * 2).map(async (k) => {
              const { symbol: E, score: D } = k
              return new jo(
                E.name,
                () =>
                  (() => {
                    var P = Ml()
                    return xe(() => tt(P, ie.asClassName($.code))), P
                  })(),
                Tt.code,
                D,
                {
                  uri: E.uri,
                  initialRange: new G(
                    E.range.startLineNumber,
                    1,
                    E.range.endLineNumber + 1,
                    1,
                  ),
                },
                undefined,
                s.workspaceContextService.asRelativePath(un(E.uri)) +
                  ":" +
                  E.range.startLineNumber,
              )
            }),
            S = await Promise.all(C),
            x = []
          for (const k of S) k != null && x.push(k)
          r(x.filter((k) => k !== null).slice(0, u_))
        }),
      ),
      { symbolOptions: n, setSymbolOptions: r }
    )
  }
  function Eir({
    queryString: i,
    justClickedIntoMenu: e,
    mode: t,
    vsContext: s,
    props: n,
  }) {
    const [r, o] = le([])
    return (
      De(() => {
        const a = t(),
          l = n.commits
        if (!(a !== Tt.none && a !== Tt.git)) {
          if (
            !n.supportsGit ||
            $ue(
              n.diffToMainUuid,
              n.gitDiffUuid,
              n.pullRequests.length,
              l.length,
            ) >= Nae
          ) {
            o([])
            return
          }
          ;(async () => {
            const c = i(),
              h = e()
            if (c === null && !h) {
              o([])
              return
            }
            if (
              (h ||
                (await new Promise((p) => {
                  setTimeout(() => {
                    p(null)
                  }, 200)
                })),
              i() !== c || !s.gitContextService.hasGitContextProvider())
            )
              return
            const g = (
              await s.gitContextService.searchAllCommits(c ?? "")
            )?.filter((p) => !n.commits?.some((m) => m.sha === p.sha))
            o(
              (g ?? []).slice(0, u_).map(
                (p) =>
                  new jo(
                    p.message,
                    () =>
                      (() => {
                        var m = Ml()
                        return xe(() => tt(m, ie.asClassName($.gitCommit))), m
                      })(),
                    Tt.git_commit,
                    10,
                    undefined,
                    undefined,
                    p.sha,
                  ),
              ),
            )
          })()
        }
      }),
      { commitOptions: r }
    )
  }
  function Iir(i) {
    const [e, t] = le([])
    return (
      De(() => {
        const { queryString: s, vsContext: n } = i,
          r = s()?.toLowerCase() ?? "",
          a = Object.values(n.notepadDataService.notepadsData.notepads)
            .filter((l) => l.name.toLowerCase().includes(r))
            .map(
              (l) =>
                new jo(
                  l.name,
                  () =>
                    (() => {
                      var c = jXi()
                      return xe(() => tt(c, ie.asClassName($.book))), c
                    })(),
                  Tt.notepad,
                  10,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  { notepadId: l.id },
                ),
            )
        t(a)
      }),
      { notepadOptions: e }
    )
  }
  function Dir(i) {
    const { options: e, isLoading: t } = qXi(i.queryString, {
      excludeFiles: () => i.props.fileSelections.map((s) => U.revive(s.uri)),
      disabled: () => i.mode() !== Tt.auto_context,
    })
    return { autoContextOptions: e, autoContextLoading: t }
  }
  function Tir(i) {
    const [e, t] = le([])
    return (
      De(() => {
        const { queryString: s, vsContext: n } = i,
          r = s()?.toLowerCase() ?? "",
          o = xBi(),
          l = n.composerDataService.allComposersData.allComposers
            .filter((c) =>
              c.unifiedMode === "chat" ||
              !c.name ||
              (o?.forcedMode !== "chat" &&
                n.composerDataService.selectedComposerId === c.composerId)
                ? false
                : c.name.toLowerCase().includes(r),
            )
            .map((c) => {
              const h = c.name
              return new jo(
                h,
                () =>
                  (() => {
                    var u = jXi()
                    return xe(() => tt(u, ie.asClassName($.notebook))), u
                  })(),
                Tt.composer,
                10,
                undefined,
                undefined,
                undefined,
                undefined,
                { composerId: c.composerId },
              )
            })
        t(l)
      }),
      { composerOptions: e }
    )
  }
  function Pir(i) {
    const [e, t] = le([])
    return (
      De(() => {
        const { queryString: s, vsContext: n } = i,
          r = s()?.toLowerCase() ?? ""
        ;(async () => {
          const a = (await n.cursorRulesService.getRules({}))
            .filter((l) => l.filename.toLowerCase().includes(r))
            .map(
              (l) =>
                new jo(
                  l.filename,
                  () =>
                    (() => {
                      var c = Ml()
                      return xe(() => tt(c, ie.asClassName($.symbolRuler))), c
                    })(),
                  Tt.cursor_rules,
                  10,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  { cursorRuleFilename: l.filename },
                ),
            )
          t(a)
        })()
      }),
      { cursorRuleOptions: e }
    )
  }
  function Lir({
    mode: i,
    queryString: e,
    fileOptions: t,
    folderOptions: s,
    symbolOptions: n,
    docsOptions: r,
    textSearchOptions: o,
    commitOptions: a,
    contextSession: l,
    prOptions: c,
    diffOptions: h,
    showCommitOptions: u,
    notepadOptions: d,
    autoContextOptions: g,
    composerOptions: p,
    cursorRuleOptions: m,
    autoContextLoading: b,
    props: y,
  }) {
    const w = dt(),
      [C, S] = le([]),
      x = Y(() => y.supportsGit),
      k = Y(() => y.supportsGit),
      E = Y(() => y.supportsGit),
      D = Y(() => y.supportsNotepads),
      P = Y(() => y.supportsComposers),
      L = Y(() => y.supportsCursorRules),
      A = mir(),
      F = Y(() => {
        const B = w.composerService.shouldShowAcceptRejectAll(A)
        return y.supportsDiffReview && B
      }),
      H = Y(() => {
        const B = [
            new jo(
              cc[Tt.file],
              () =>
                (() => {
                  var K = Ml()
                  return xe(() => tt(K, ie.asClassName($.file))), K
                })(),
              Tt.heading,
              10,
            ),
            ...(y.supportsSymbols === undefined || y.supportsSymbols
              ? [
                  new jo(
                    cc[Tt.code],
                    () =>
                      (() => {
                        var K = Ml()
                        return xe(() => tt(K, ie.asClassName($.code))), K
                      })(),
                    Tt.heading,
                    9.9,
                  ),
                ]
              : []),
            ...(y.addRepoMap !== undefined
              ? [
                  new jo(
                    cc[Tt.repo_map],
                    () =>
                      (() => {
                        var K = Ml()
                        return xe(() => tt(K, ie.asClassName($.map))), K
                      })(),
                    Tt.repo_map,
                    9.8,
                  ),
                ]
              : []),
            ...(y.supportsDocs === undefined || y.supportsDocs
              ? [
                  new jo(
                    cc[Tt.doc],
                    () =>
                      (() => {
                        var K = Ml()
                        return xe(() => tt(K, ie.asClassName($.book))), K
                      })(),
                    Tt.heading,
                    9.8,
                  ),
                ]
              : []),
            ...(y.supportsFolderSelections
              ? [
                  new jo(
                    cc[Tt.folder],
                    () =>
                      (() => {
                        var K = Ml()
                        return xe(() => tt(K, ie.asClassName($.folder))), K
                      })(),
                    Tt.heading,
                    9.95,
                  ),
                ]
              : []),
            ...(y.supportsGit
              ? [
                  new jo(
                    cc[Tt.git],
                    () =>
                      (() => {
                        var K = Ml()
                        return xe(() => tt(K, ie.asClassName($.gitMerge))), K
                      })(),
                    Tt.heading,
                    9.5,
                  ),
                ]
              : []),
            ...(y.supportsNotepads
              ? [
                  new jo(
                    cc[Tt.notepad],
                    () =>
                      (() => {
                        var K = Ml()
                        return xe(() => tt(K, ie.asClassName($.book))), K
                      })(),
                    Tt.heading,
                    9.2,
                  ),
                ]
              : []),
            ...(y.supportsComposers
              ? [
                  new jo(
                    cc[Tt.composer],
                    () =>
                      (() => {
                        var K = Ml()
                        return xe(() => tt(K, ie.asClassName($.notebook))), K
                      })(),
                    Tt.heading,
                    9.19,
                  ),
                ]
              : []),
            ...(y.supportsCursorRules
              ? [
                  new jo(
                    cc[Tt.cursor_rules],
                    () =>
                      (() => {
                        var K = Ml()
                        return xe(() => tt(K, ie.asClassName($.symbolRuler))), K
                      })(),
                    Tt.heading,
                    9.18,
                  ),
                ]
              : []),
            ...(y.supportsAutoContext
              ? [
                  new jo(
                    cc[Tt.auto_context],
                    () =>
                      (() => {
                        var K = Ml()
                        return xe(() => tt(K, ie.asClassName($.lightbulb))), K
                      })(),
                    Tt.heading,
                    9.16,
                  ),
                ]
              : []),
            ...(y.supportsCodebase
              ? [
                  new jo(
                    cc[Tt.codebase],
                    () =>
                      (() => {
                        var K = Ml()
                        return xe(() => tt(K, ie.asClassName($.repo))), K
                      })(),
                    Tt.codebase,
                    9.15,
                  ),
                ]
              : []),
            ...(y.supportsLint
              ? [
                  new jo(
                    cc[Tt.lint],
                    () =>
                      (() => {
                        var K = Ml()
                        return xe(() => tt(K, ie.asClassName($.error))), K
                      })(),
                    Tt.lint,
                    9.1,
                  ),
                ]
              : []),
            ...(y.supportsWeb
              ? [
                  new jo(
                    cc[Tt.web],
                    () =>
                      (() => {
                        var K = Ml()
                        return xe(() => tt(K, ie.asClassName($.globe))), K
                      })(),
                    Tt.web,
                    9.05,
                  ),
                ]
              : []),
            ...(y.supportsRecentChanges
              ? [
                  new jo(
                    cc[Tt.recent_changes],
                    () =>
                      (() => {
                        var K = Ml()
                        return xe(() => tt(K, ie.asClassName($.graphScatter))), K
                      })(),
                    Tt.recent_changes,
                    9.05,
                  ),
                ]
              : []),
            ...(F()
              ? [
                  new jo(
                    cc[Tt.diff_review],
                    () =>
                      (() => {
                        var K = Ml()
                        return xe(() => tt(K, ie.asClassName($.openPreview))), K
                      })(),
                    Tt.diff_review,
                    9.1,
                  ),
                ]
              : []),
            ...(y.onResetContext !== undefined
              ? [
                  new jo(
                    cc[Tt.reset_context],
                    () =>
                      (() => {
                        var K = Ml()
                        return xe(() => tt(K, ie.asClassName($.refresh))), K
                      })(),
                    Tt.reset_context,
                    8.8,
                  ),
                ]
              : []),
            ...(y.onReferenceOpenEditors !== undefined
              ? [
                  new jo(
                    cc[Tt.reference_open_editors],
                    () =>
                      (() => {
                        var K = Ml()
                        return xe(() => tt(K, ie.asClassName($.files))), K
                      })(),
                    Tt.reference_open_editors,
                    8.7,
                  ),
                ]
              : []),
            ...(y.onReferenceActiveEditors !== undefined
              ? [
                  new jo(
                    cc[Tt.reference_active_editors],
                    () =>
                      (() => {
                        var K = Ml()
                        return xe(() => tt(K, ie.asClassName($.fileCode))), K
                      })(),
                    Tt.reference_active_editors,
                    8.6,
                  ),
                ]
              : []),
          ],
          z = l()
        if (z !== undefined)
          for (const K of KLn[z.case]) B.push($tr[K].typeaheadOption)
        return B
      })
    return (
      De(() => {
        const B = e(),
          z = i(),
          K = t(),
          Q = s(),
          se = n(),
          he = r(),
          ae = g(),
          de = x() ? a() : [],
          Ee = k() ? c() : [],
          ke = E() ? h() : [],
          Ae = D() ? d() : [],
          Pe = P() ? p() : [],
          ze = L() ? m() : [],
          at = b()
        let we = H()
        const vt =
          $ue(
            y.diffToMainUuid,
            y.gitDiffUuid,
            y.pullRequests.length,
            y.commits.length,
          ) < Nae && y.supportsGit
        if (
          ((we = we.filter((lt) => lt.name !== "Git" || vt)),
          (B === null || B === "") && z === Tt.none)
        )
          S(we)
        else if (
          (B?.startsWith("/") || B?.startsWith("\\")) &&
          y.supportsFolderSelections
        )
          S(Q)
        else if (z === Tt.none) {
          const lt = we.filter(
            (Xe) =>
              (Xe.name !== "Git" || vt) &&
              Xe.name.toLowerCase().startsWith((B ?? "").toLowerCase()),
          )
          if (lt.length > 0) S(lt)
          else {
            const Xe = (Ue) => {
                try {
                  return new URL(Ue).hostname.includes(".")
                } catch {
                  return false
                }
              },
              Oe = [
                ...(y.supportsFolderSelections ? Q.slice(0, 5) : []),
                ...K,
                ...se,
                ...he,
                ...ke,
                ...(u() ? [...de, ...Ee] : []),
                ...(y.supportsLink && B && Xe(B)
                  ? [
                      new jo(
                        "Add link",
                        () =>
                          (() => {
                            var Ue = Ml()
                            return xe(() => tt(Ue, ie.asClassName($.link))), Ue
                          })(),
                        Tt.link,
                        -0.8,
                      ),
                    ]
                  : []),
                ...(y.supportsAutoContext
                  ? ae.map((Ue) => (Ue.overrideScore(Ue.score), Ue))
                  : []),
                ...($ue(
                  y.diffToMainUuid,
                  y.gitDiffUuid,
                  y.pullRequests.length,
                  y.commits.length,
                ) >= Nae
                  ? []
                  : [
                      new jo(
                        u() ? "Hide Commits & PRs" : "Show Commits & PRs",
                        () =>
                          (() => {
                            var Ue = Ml()
                            return (
                              xe(() =>
                                tt(
                                  Ue,
                                  u()
                                    ? ie.asClassName($.eyeClosed)
                                    : ie.asClassName($.eye),
                                ),
                              ),
                              Ue
                            )
                          })(),
                        Tt.toggle_commit_options,
                        -0.9,
                      ),
                    ]),
                ...(D() ? [...Ae] : []),
                ...(P() ? [...Pe] : []),
                ...(L() ? [...ze] : []),
              ].sort((Ue, Ke) => {
                const mt = Ue.name
                    .toLowerCase()
                    .includes((B ?? "").toLowerCase()),
                  Mi = Ke.name.toLowerCase().includes((B ?? "").toLowerCase())
                return mt && Mi
                  ? Ue.name.localeCompare(Ke.name)
                  : mt
                    ? -1
                    : Mi
                      ? 1
                      : Ue.name.localeCompare(Ke.name)
              }),
              Fe = Oe.filter((Ue) => Ue.score >= 0),
              ut = Oe.filter((Ue) => Ue.score < 0)
            S([...Fe.slice(0, 20), ...ut])
          }
        } else
          z === Tt.auto_context
            ? S([
                new jo(cc[z], () => Ml(), Tt.staticheading, 10, undefined, undefined, [
                  "semantically related files",
                  I(te, {
                    when: at,
                    get children() {
                      return I(wv, { small: true })
                    },
                  }),
                ]),
                ...(b() ? [] : ae.length > 0 ? ae : K),
              ])
            : z === Tt.file
              ? S([new jo(cc[z], () => Ml(), Tt.staticheading, 10), ...K])
              : z === Tt.folder
                ? S([new jo(cc[z], () => Ml(), Tt.staticheading, 10), ...Q])
                : z === Tt.code
                  ? S([new jo(cc[z], () => Ml(), Tt.staticheading, 10), ...se])
                  : z === Tt.text_search
                    ? S([new jo(cc[z], () => Ml(), Tt.staticheading, 10)])
                    : z === Tt.doc
                      ? S([
                          new jo(cc[z], () => Ml(), Tt.staticheading, 10),
                          ...he,
                        ])
                      : z === Tt.git
                        ? S([
                            new jo(cc[z], () => Ml(), Tt.staticheading, 10),
                            ...ke,
                            ...de,
                            ...Ee,
                          ])
                        : z === Tt.notepad
                          ? S([
                              new jo(cc[z], () => Ml(), Tt.staticheading, 10),
                              ...Ae,
                            ])
                          : z === Tt.composer
                            ? S([
                                new jo(cc[z], () => Ml(), Tt.staticheading, 10),
                                ...Pe.slice(0, u_),
                              ])
                            : z === Tt.cursor_rules &&
                              S([
                                new jo(cc[z], () => Ml(), Tt.staticheading, 10),
                                ...ze,
                              ])
      }),
      { options: C, setOptions: S }
    )
  }
  function Nir({
    mode: i,
    queryString: e,
    justClickedIntoMenu: t,
    vsContext: s,
    props: n,
  }) {
    const [r, o] = le([])
    return (
      De(() => {
        if (i() === Tt.git) {
          if (
            !n.supportsGit ||
            $ue(
              n.diffToMainUuid,
              n.gitDiffUuid,
              n.pullRequests.length,
              n.commits.length,
            ) >= Nae
          ) {
            o([])
            return
          }
          ;(async () => {
            const l = e(),
              c = t()
            if (l === null && !c) {
              o([])
              return
            }
            if (
              (c ||
                (await new Promise((g) => {
                  setTimeout(() => {
                    g(null)
                  }, 200)
                })),
              e() !== l)
            )
              return
            const d = (await s.gitContextService.searchAllPrs(l ?? ""))?.filter(
              (g) => !n.pullRequests.some((p) => g.id == p.id),
            )
            o(
              (d ?? []).slice(0, u_).map(
                (g) =>
                  new jo(
                    g.title,
                    () =>
                      (() => {
                        var p = Ml()
                        return xe(() => tt(p, ie.asClassName($.gitMerge))), p
                      })(),
                    Tt.git_pr,
                    10,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    { pr: g },
                  ),
              ),
            )
          })()
        }
      }),
      { prOptions: r }
    )
  }
  function Rir({ mode: i, queryString: e, justClickedIntoMenu: t, props: s }) {
    const [n, r] = le([])
    return (
      De(() => {
        const o = i()
        if (!(o !== Tt.none && o !== Tt.git)) {
          if (
            !s.supportsGit ||
            $ue(
              s.diffToMainUuid,
              s.gitDiffUuid,
              s.pullRequests.length,
              s.commits.length,
            ) >= Nae
          ) {
            r([])
            return
          }
          ;(async () => {
            const a = e(),
              l = t()
            if (a === null && !l) {
              r([])
              return
            }
            if (
              (l ||
                (await new Promise((m) => {
                  setTimeout(() => {
                    m(null)
                  }, 200)
                })),
              e() !== a)
            )
              return
            const u = zXi(a ?? "", CEt, ["pr", "pull request", "branch"]),
              g = zXi(a ?? "", wEt, ["commit", "diff"])
            let p = []
            u !== HP.None &&
              !s.diffToMainUuid &&
              p.push(
                new jo(
                  CEt,
                  () =>
                    (() => {
                      var m = Ml()
                      return xe(() => tt(m, ie.asClassName($.diffModified))), m
                    })(),
                  Tt.git_diff,
                  9 + u,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  { diff: gG.TO_MAIN_FROM_BRANCH },
                ),
              ),
              g !== HP.None &&
                !s.gitDiffUuid &&
                p.push(
                  new jo(
                    wEt,
                    () =>
                      (() => {
                        var m = Ml()
                        return xe(() => tt(m, ie.asClassName($.diffModified))), m
                      })(),
                    Tt.git_diff,
                    9 + g,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    { diff: gG.TO_HEAD },
                  ),
                ),
              r(p)
          })()
        }
      }),
      { diffOptions: n }
    )
  }

  function $ue(i, e, t, s) {
    let n = 0
    return i && n++, e && n++, t + s + n
  }

  return {
    Aa,
    w4t,
    C4t,
    gXe,
    Rue,
    Aue,
    Jk,
    qXi,
    x4t,
    GXi,
    PY,
    JXi,
    Cir,
    Sir,
    xir,
    kir,
    Eir,
    Iir,
    Dir,
    Tir,
    Pir,
    Lir,
    Nir,
    Rir,
  }
}
