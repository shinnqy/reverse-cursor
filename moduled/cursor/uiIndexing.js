// @ts-check

export function createUIIndexing(params) {
  const { X, dt, le, De, Gt, Vle, M, I, te, Rs, xe, nf, tt, ie, $, Wo, Is, Zn, Gk } = params;

  var Ftr = X("<span>"),
  Otr = X("<span>Indexing <i>"),
  Btr = X("<span>Indexed <i>"),
  _tr = X("<span>Indexing failed"),
  Utr = X("<div class=docs-button title=Save><span>"),
  Htr = X("<div><div></div><div>"),
  Vtr = X(
    '<div><div><div></div><span></span></div><div><div><span></span></div><div title="See pages"><div></div></div><div class=docs-button title=Delete><span>',
  ),
  Wtr = X("<input type=text>"),
  qtr = X("<div class=docs-button title=Edit><span>"),
  jtr = X("<a>")
  function y4t(i) {
    return new Date(i).toLocaleString(undefined, {
      month: "numeric",
      day: "numeric",
      year: "2-digit",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }
  function ztr(i) {
    const e = dt(),
      [t, s] = le(""),
      [n, r] = le(null),
      [o, a] = le(false),
      l = (m) => `${m.identifier}${m.name}`
    De(() => {
      const m = (b) => {
        b.target.closest(".see-pages-button") || r(null)
      }
      e.window.addEventListener("click", m),
        Gt(() => {
          e.window.removeEventListener("click", m)
        })
    })
    const c = (m) => {
        a(true), s(m.name)
        let b = 0
        const y = () => {
          p ? p.focus() : b < 3 && (b++, setTimeout(y, 50))
        }
        y()
      },
      h = (m) => {
        t() &&
          e.reactiveStorageService.setApplicationUserPersistentStorage(
            "personalDocs",
            (b) => b.map((y) => (l(y) === l(m) ? { ...y, name: t() } : y)),
          ),
          a(false),
          s("")
      },
      u = Vle(async (m, b) => {
        e.aiDocsService.rescrapeDocs(m, b)
      }, 1e3),
      [d, g] = le(false)
    let p
    return (() => {
      var m = Vtr(),
        b = m.firstChild,
        y = b.firstChild,
        w = y.nextSibling,
        C = b.nextSibling,
        S = C.firstChild,
        x = S.firstChild,
        k = S.nextSibling,
        E = k.firstChild,
        D = k.nextSibling,
        P = D.firstChild
      return (
        m.addEventListener("mouseleave", () => g(false)),
        m.addEventListener("mouseenter", () => g(true)),
        m.style.setProperty("display", "flex"),
        m.style.setProperty("gap", "8px"),
        m.style.setProperty("justify-content", "space-between"),
        m.style.setProperty("align-items", "center"),
        m.style.setProperty("color", "var(--vscode-input-placeholderForeground)"),
        m.style.setProperty("font-size", "12px"),
        m.style.setProperty("padding", "2px 6px"),
        m.style.setProperty("margin-left", "-6px"),
        m.style.setProperty("border-radius", "4px"),
        m.style.setProperty("height", "20px"),
        b.style.setProperty("overflow", "hidden"),
        b.style.setProperty("text-overflow", "ellipsis"),
        b.style.setProperty("white-space", "nowrap"),
        b.style.setProperty("min-width", "150px"),
        b.style.setProperty("display", "flex"),
        b.style.setProperty("align-items", "center"),
        y.style.setProperty("width", "4px"),
        y.style.setProperty("height", "4px"),
        y.style.setProperty("border-radius", "50%"),
        y.style.setProperty("margin-right", "4px"),
        w.style.setProperty("overflow", "hidden"),
        w.style.setProperty("text-overflow", "ellipsis"),
        w.style.setProperty("white-space", "nowrap"),
        M(
          w,
          I(te, {
            get when() {
              return !o()
            },
            get fallback() {
              return (() => {
                var L = Wtr()
                L.addEventListener("blur", () => {
                  h(i.doc)
                }),
                  L.addEventListener("keydown", (F) => {
                    F.key === "Enter" && h(i.doc)
                  }),
                  L.addEventListener("input", (F) => s(F.target.value))
                var A = p
                return (
                  typeof A == "function" ? Rs(A, L) : (p = L),
                  L.style.setProperty("color", "var(--vscode-editor-foreground)"),
                  L.style.setProperty(
                    "background-color",
                    "var(--vscode-input-background)",
                  ),
                  L.style.setProperty("border", "none"),
                  L.style.setProperty("outline", "none"),
                  L.style.setProperty("border-radius", "2px"),
                  L.style.setProperty("padding", "2px 2px"),
                  L.style.setProperty("width", "100%"),
                  L.style.setProperty("font-size", "12px"),
                  L.style.setProperty("box-sizing", "border-box"),
                  xe(() => (L.value = t())),
                  L
                )
              })()
            },
            get children() {
              return [
                (() => {
                  var L = Ftr()
                  return (
                    L.addEventListener("dblclick", () => c(i.doc)),
                    L.style.setProperty(
                      "color",
                      "var(--vscode-editor-foreground)",
                    ),
                    L.style.setProperty("padding", "2px 2px"),
                    M(L, () => i.doc.name),
                    L
                  )
                })(),
                I(te, {
                  get when() {
                    return (
                      i.doc.indexingStatus === "indexing" &&
                      i.doc.indexingPageName
                    )
                  },
                  get children() {
                    var L = Otr(),
                      A = L.firstChild,
                      F = A.nextSibling
                    return (
                      L.style.setProperty(
                        "color",
                        "var(--vscode-input-placeholderForeground)",
                      ),
                      L.style.setProperty("font-size", "10px"),
                      L.style.setProperty("margin-left", "4px"),
                      L.style.setProperty("overflow", "hidden"),
                      L.style.setProperty("text-overflow", "ellipsis"),
                      L.style.setProperty("white-space", "nowrap"),
                      L.style.setProperty("flex-shrink", "1"),
                      M(F, () => i.doc.indexingPageName),
                      M(L, I(nf, {}), null),
                      L
                    )
                  },
                }),
                I(te, {
                  get when() {
                    return (
                      i.doc.indexingStatus === "success" &&
                      (i.doc.lastUploadedAt || i.doc.createdAt)
                    )
                  },
                  get children() {
                    var L = Btr(),
                      A = L.firstChild,
                      F = A.nextSibling
                    return (
                      L.style.setProperty(
                        "color",
                        "var(--vscode-input-placeholderForeground)",
                      ),
                      L.style.setProperty("font-size", "10px"),
                      L.style.setProperty("margin-left", "6px"),
                      M(F, () =>
                        y4t(i.doc.lastUploadedAt || i.doc.createdAt || ""),
                      ),
                      L
                    )
                  },
                }),
                I(te, {
                  get when() {
                    return i.doc.indexingStatus === "failure"
                  },
                  get children() {
                    var L = _tr()
                    return (
                      L.style.setProperty(
                        "color",
                        "var(--vscode-input-placeholderForeground)",
                      ),
                      L.style.setProperty("font-size", "10px"),
                      L.style.setProperty("margin-left", "6px"),
                      L
                    )
                  },
                }),
              ]
            },
          }),
        ),
        C.style.setProperty("display", "flex"),
        C.style.setProperty("gap", "6px"),
        C.style.setProperty("align-items", "center"),
        M(
          C,
          I(te, {
            get when() {
              return o()
            },
            get fallback() {
              return (() => {
                var L = qtr(),
                  A = L.firstChild
                return (
                  L.addEventListener("click", () => c(i.doc)),
                  L.style.setProperty("cursor", "pointer"),
                  L.style.setProperty("display", "flex"),
                  L.style.setProperty("justify-content", "center"),
                  L.style.setProperty("align-items", "center"),
                  xe(() => tt(A, ie.asClassName($.pencil))),
                  L
                )
              })()
            },
            get children() {
              var L = Utr(),
                A = L.firstChild
              return (
                L.addEventListener("click", () => h(i.doc)),
                L.style.setProperty("cursor", "pointer"),
                L.style.setProperty("display", "flex"),
                L.style.setProperty("justify-content", "center"),
                L.style.setProperty("align-items", "center"),
                xe(() => tt(A, ie.asClassName($.check))),
                L
              )
            },
          }),
          S,
        ),
        S.addEventListener("click", (L) => {
          u(i.doc.identifier, L.shiftKey)
        }),
        S.style.setProperty("display", "flex"),
        S.style.setProperty("justify-content", "center"),
        S.style.setProperty("align-items", "center"),
        S.style.setProperty("cursor", "pointer"),
        k.style.setProperty("position", "relative"),
        k.style.setProperty("display", "flex"),
        k.style.setProperty("justify-content", "center"),
        k.style.setProperty("align-items", "center"),
        E.addEventListener("click", () => r(l(i.doc))),
        E.style.setProperty("cursor", "pointer"),
        M(
          k,
          I(te, {
            get when() {
              return n() === l(i.doc)
            },
            get children() {
              return I(Wo, {
                scrollingDirection: "vertical",
                nonReactiveElementOptions: { alwaysConsumeMouseWheel: true },
                style: {
                  position: "absolute",
                  "background-color": "var(--vscode-editor-background)",
                  width: "300px",
                  border: "1px solid var(--vscode-commandCenter-inactiveBorder)",
                  "text-align": "left",
                  "z-index": 1,
                  top: "18px",
                  "border-radius": "4px",
                  right: "-2px",
                  height: "150px",
                },
                get children() {
                  var L = Htr(),
                    A = L.firstChild,
                    F = A.nextSibling
                  return (
                    L.style.setProperty("padding", "6px"),
                    L.style.setProperty("display", "flex"),
                    L.style.setProperty("flex-direction", "column"),
                    L.style.setProperty("gap", "2px"),
                    A.style.setProperty("font-size", "12px"),
                    A.style.setProperty(
                      "color",
                      "var(--vscode-editor-foreground)",
                    ),
                    M(A, () =>
                      i.doc.pages
                        ? `Indexed ${i.doc.pages?.length} pages`
                        : "Indexing...",
                    ),
                    F.style.setProperty("display", "flex"),
                    F.style.setProperty("flex-direction", "column"),
                    F.style.setProperty("gap", "2px"),
                    M(
                      F,
                      I(Is, {
                        get each() {
                          return i.doc.pages
                        },
                        children: (H) =>
                          (() => {
                            var B = jtr()
                            return (
                              B.addEventListener("click", () => {
                                e.openerService.open(H.url)
                              }),
                              B.style.setProperty(
                                "color",
                                "var(--vscode-textLink-foreground)",
                              ),
                              B.style.setProperty("overflow", "hidden"),
                              B.style.setProperty("text-overflow", "ellipsis"),
                              B.style.setProperty("white-space", "nowrap"),
                              B.style.setProperty("display", "block"),
                              B.style.setProperty("width", "100%"),
                              M(B, () => H.title),
                              xe(
                                (z) => {
                                  var K = H.url,
                                    Q = H.url
                                  return (
                                    K !== z.e && Zn(B, "href", (z.e = K)),
                                    Q !== z.t && Zn(B, "title", (z.t = Q)),
                                    z
                                  )
                                },
                                { e: undefined, t: undefined },
                              ),
                              B
                            )
                          })(),
                      }),
                    ),
                    L
                  )
                },
              })
            },
          }),
          null,
        ),
        D.addEventListener("click", () => {
          const L = i.doc.identifier,
            A = i.doc.name
          e.reactiveStorageService.setApplicationUserPersistentStorage(
            "personalDocs",
            (F) => F.filter((H) => H.identifier !== L && H.name !== A),
          )
        }),
        D.style.setProperty("display", "flex"),
        D.style.setProperty("justify-content", "center"),
        D.style.setProperty("align-items", "center"),
        D.style.setProperty("cursor", "pointer"),
        xe(
          (L) => {
            var A =
                "settings-menu-docs-item" +
                (Gk(e.themeService) ? " dark" : " light"),
              F =
                i.doc.indexingStatus === "success"
                  ? "var(--vscode-testing-iconPassed)"
                  : i.doc.indexingStatus === "indexing"
                    ? "var(--vscode-testing-iconQueued)"
                    : "var(--vscode-testing-iconFailed)",
              H = i.doc.indexingStatus === "indexing" ? "pulse" : "",
              B = i.doc.url,
              z =
                "docs-button" +
                (i.doc.indexingStatus === "indexing" ? " disabled" : ""),
              K =
                i.doc.indexingStatus === "indexing"
                  ? "Indexing..."
                  : "Reindex (shift click to force reupload)",
              Q = ie.asClassName($.refresh),
              se =
                "see-pages-button docs-button" +
                (n() === l(i.doc) ? " active" : ""),
              he = ie.asClassName($.book),
              ae = ie.asClassName($.trashcan)
            return (
              A !== L.e && tt(m, (L.e = A)),
              F !== L.t &&
                ((L.t = F) != null
                  ? y.style.setProperty("background-color", F)
                  : y.style.removeProperty("background-color")),
              H !== L.a && tt(y, (L.a = H)),
              B !== L.o && Zn(w, "title", (L.o = B)),
              z !== L.i && tt(S, (L.i = z)),
              K !== L.n && Zn(S, "title", (L.n = K)),
              Q !== L.s && tt(x, (L.s = Q)),
              se !== L.h && tt(k, (L.h = se)),
              he !== L.r && tt(E, (L.r = he)),
              ae !== L.d && tt(P, (L.d = ae)),
              L
            )
          },
          {
            e: undefined,
            t: undefined,
            a: undefined,
            o: undefined,
            i: undefined,
            n: undefined,
            s: undefined,
            h: undefined,
            r: undefined,
            d: undefined,
          },
        ),
        m
      )
    })()
  }

  return {
    y4t,
    ztr
  }
}

