// @ts-check

// 162550
export function createAISettingsService(params) {
  const { du, Er, o1, Re, V, R, _n, W$, r9i, o9i, __decorate, __param, et, ei, $h, _c, Z, Ve, j, ee, qne, jne, sG, Tg, Kh, u0t, Ht, Zi, st, tTt, iTt, Mje, ms, ce, Qy, Gq, U, zq, Cn, Jwt, Ny, fo, wt, b3, ble, Hl, Pn, G, oi, Lg, Md, Xt, qi, it, ve, JOn } = params;

  var Gje = class extends du {
    constructor(i, e, t) {
      super(
        `You have exceeded your usage limit for the ${i} model. Please upgrade your account.`,
      ),
        (this.model = i),
        (this.error = e),
        (this.rerun = t)
    }
    toMessage() {
      switch (this.error) {
        case Er.FREE_USER_RATE_LIMIT_EXCEEDED:
          return `It seems like you're making an too many requests too quickly. Please try again in a minute. If you think this is a mistake, please contact ${o1}`
        case Er.PRO_USER_RATE_LIMIT_EXCEEDED:
          return `It seems like you're making an unusual number of AI requests. Please try again later. If you think this is a mistake, please contact ${o1}`
        case Er.FREE_USER_USAGE_LIMIT:
          return `Our servers are currently overloaded for non-pro users, and you've used your free quota. Please try again in a few minutes. If you think this is a mistake, please contact ${o1}`
        case Er.PRO_USER_USAGE_LIMIT:
          return `We're currently recieving a large number of slow requests and could not queue yours. Please try again. If you see this message often, please contact ${o1}`
        case Er.BAD_API_KEY:
          return "The provided API key is invalid. Please provide a valid API key."
        case Er.BAD_MODEL_NAME:
          return `The model ${this.model} does not work with your current plan or api key`
        case Er.INVALID_AUTH_ID:
        case Er.NOT_LOGGED_IN:
        case Er.AGENT_REQUIRES_LOGIN:
        case Er.USER_NOT_FOUND:
          return "You are not logged in. Please log in to continue."
        case Er.NOT_HIGH_ENOUGH_PERMISSIONS:
          return "Without the pro plan, you do not have access to this feature/model."
        case Er.UNSPECIFIED:
        default:
          return "An unspecified error occurred. Please try again"
      }
    }
  },
  x9i = [
    { name: "gpt-4o", defaultOn: !0 },
    { name: "gpt-4", defaultOn: !1 },
    { name: "claude-3-opus", defaultOn: !1 },
    { name: "claude-3.5-sonnet", defaultOn: !0 },
    { name: "cursor-small", defaultOn: !1 },
    { name: "claude-3-5-sonnet-200k", defaultOn: !0, isLongContextOnly: !0 },
    { name: "claude-3-haiku-200k", defaultOn: !0, isLongContextOnly: !0 },
    { name: "gemini-1.5-flash-500k", defaultOn: !0, isLongContextOnly: !0 },
    { name: "gpt-4o-128k", defaultOn: !0, isLongContextOnly: !0 },
  ],
  k9i = [
    "gpt-3.5-turbo",
    "gpt-4-32k",
    "gpt-4-1106-preview",
    "gpt-4-0125-preview",
    "gpt-3.5-turbo-1106",
    "gpt-4",
    "gpt-4o",
    "claude-3.5-sonnet",
  ],
  eg = Re("AISettingsService"),
  X_n = {
    "regular-chat": "regularChatModel",
    "cmd-k": "cmdKModel",
    "terminal-cmd-k": "terminalCmdKModel",
    composer: "composerModel",
  },
  Q_n = (i, e) =>
    i === void 0 ? "openAIModel" : e ? "longContextOpenAIModel" : X_n[i],
  zle = (i, e, t, s) => {
    const n = Q_n(s, t),
      r = i.applicationUserPersistentStorage.aiSettings.regularChatModel,
      o = i.applicationUserPersistentStorage.aiSettings.composerModel
    let a = i.applicationUserPersistentStorage.aiSettings[n]
    if (a === null) return "cursor-small"
    if (!e.includes(a)) {
      if (e.length === 0) return a
      ;(a = e[0]), i.setApplicationUserPersistentStorage("aiSettings", n, a)
    }
    return a
  },
  ITt = class extends V {
    constructor(e, t, s) {
      super(),
        (this.c = e),
        (this.f = t),
        (this.g = s),
        (this.a = "aisettings.service"),
        (this.b = new R()),
        (this.saveData = () => {}),
        (this.loadData = () => {
          if (
            this.f.applicationUserPersistentStorage
              .havePerformedSettingsServiceMigration !== !0
          ) {
            this.f.setApplicationUserPersistentStorage(
              "havePerformedSettingsServiceMigration",
              !0,
            )
            const r = this.c.get(this.a, -1)
            if (r) {
              const o = JSON.parse(r)
              o.useOpenAIKey !== void 0 &&
                this.f.setApplicationUserPersistentStorage(
                  "useOpenAIKey",
                  o.useOpenAIKey,
                ),
                o.availableModels !== void 0 &&
                  this.f.setApplicationUserPersistentStorage(
                    "availableAPIKeyModels",
                    o.availableModels,
                  ),
                o.noStorageMode !== void 0 &&
                  this.f.setApplicationUserPersistentStorage(
                    "noStorageMode",
                    o.noStorageMode ||
                      (this.g.membershipType() === _n.ENTERPRISE &&
                        this.g.shouldHaveGhostModeFromEnterprise()),
                  ),
                o.watcherEnabled !== void 0 &&
                  this.f.setApplicationUserPersistentStorage(
                    "watcherEnabled",
                    o.watcherEnabled,
                  )
            }
          }
        }),
        (this.getUseOpenAIKey = () =>
          this.f.applicationUserPersistentStorage.useOpenAIKey ?? !1),
        (this.getModel = () =>
          this.f.applicationUserPersistentStorage.aiSettings.openAIModel ?? W$),
        (this.getLongContextModel = () =>
          this.f.applicationUserPersistentStorage.aiSettings
            .longContextOpenAIModel ?? W$),
        (this.getRegularChatModel = () =>
          this.f.applicationUserPersistentStorage.aiSettings.regularChatModel ??
          W$),
        (this.getCmdKModel = () =>
          this.f.applicationUserPersistentStorage.aiSettings.cmdKModel ?? W$),
        (this.getComposerModel = () =>
          this.f.applicationUserPersistentStorage.aiSettings.composerModel ??
          W$),
        (this.getTerminalCmdKModel = () =>
          this.f.applicationUserPersistentStorage.aiSettings
            .terminalCmdKModel ?? W$),
        (this.getAvailableAPIKeyModels = () =>
          this.f.applicationUserPersistentStorage.availableAPIKeyModels ?? []),
        (this.enableModel = (r) => {
          this.f.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(
            r,
          ) &&
            this.f.setApplicationUserPersistentStorage(
              "aiSettings",
              "modelOverrideDisabled",
              this.f.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled.filter(
                (o) => o !== r,
              ),
            ),
            this.f.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.includes(
              r,
            ) ||
              this.f.setApplicationUserPersistentStorage(
                "aiSettings",
                "modelOverrideEnabled",
                [
                  ...(this.f.applicationUserPersistentStorage.aiSettings
                    .modelOverrideEnabled ?? []),
                  r,
                ],
              ),
            this._didChangeAvailableModels()
        }),
        (this.isDefaultModel = (r) => {
          let o = []
          return (
            this.getUseOpenAIKey()
              ? (o = this.getAvailableAPIKeyModels())
              : (o = this.getAvailableDefaultModels()
                  .filter((a) => !a.isLongContextOnly)
                  .map((a) => a.name)),
            o.includes(r)
          )
        }),
        (this.removeModel = (r) => {
          this.f.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.includes(
            r,
          ) &&
            this.f.setApplicationUserPersistentStorage(
              "aiSettings",
              "modelOverrideEnabled",
              this.f.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled.filter(
                (o) => o !== r,
              ),
            ),
            this.f.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(
              r,
            ) &&
              this.f.setApplicationUserPersistentStorage(
                "aiSettings",
                "modelOverrideDisabled",
                this.f.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled.filter(
                  (o) => o !== r,
                ),
              ),
            this._didChangeAvailableModels()
        }),
        (this.disableModel = (r) => {
          this.f.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.includes(
            r,
          ) &&
            this.f.setApplicationUserPersistentStorage(
              "aiSettings",
              "modelOverrideEnabled",
              this.f.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled.filter(
                (o) => o !== r,
              ),
            ),
            this.f.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(
              r,
            ) ||
              this.f.setApplicationUserPersistentStorage(
                "aiSettings",
                "modelOverrideDisabled",
                [
                  ...(this.f.applicationUserPersistentStorage.aiSettings
                    .modelOverrideDisabled ?? []),
                  r,
                ],
              ),
            this._didChangeAvailableModels()
        }),
        (this.getAllPotentialModelsReactive = () => {
          let r = []
          this.getUseOpenAIKey()
            ? (r = [...k9i])
            : (r = [
                ...this.getAvailableDefaultModels()
                  .filter(
                    (l) =>
                      !l.isLongContextOnly &&
                      !this.getHardcodedLongContextOnlyModelNames().includes(
                        l.name,
                      ),
                  )
                  .map((l) => l.name),
              ])
          const o =
            this.f.applicationUserPersistentStorage.aiSettings
              .modelOverrideEnabled
          if (o !== void 0) for (const l of o) r.push(l)
          const a =
            this.f.applicationUserPersistentStorage.aiSettings
              .modelOverrideDisabled
          if (a !== void 0) for (const l of a) r.push(l)
          return (r = [...new Set(r)]), r.sort(), r
        }),
        (this.setChatDesiredTokenLimit = (r) => {}),
        (this.getChatDesiredTokenLimit = () => {}),
        (this.setPrivateModel = (r) => (
          this.f.setApplicationUserPersistentStorage("aiSettings", {
            ...this.f.applicationUserPersistentStorage.aiSettings,
            privateFTOpenAIModel: r,
          }),
          !0
        )),
        (this.setWatcherEnabled = (r) => {
          this.f.setApplicationUserPersistentStorage("watcherEnabled", r)
          for (let o of this.watcherEnabledListeners) o(r)
          this.f.applicationUserPersistentStorage.watcherEnabled ||
            this.f.setApplicationUserPersistentStorage("hasSilencedLinter", !0)
        }),
        (this.watcherEnabledListeners = []),
        (this.onWatcherEnabledChanged = (r) => (
          this.watcherEnabledListeners.push(r),
          {
            dispose: () => {
              this.watcherEnabledListeners =
                this.watcherEnabledListeners.filter((o) => o !== r)
            },
          }
        )),
        (this.useOpenAIKeyListeners = []),
        (this.openAIModelListeners = []),
        (this.longContextOpenAIModelListeners = []),
        (this.availableModelsListeners = []),
        (this.popupListeners = []),
        (this.closePopupListeners = []),
        (this.addOpenAIKeyListener = (r) => {
          this.useOpenAIKeyListeners.push(r)
        }),
        (this.removeOpenAIKeyListener = (r) => {
          this.useOpenAIKeyListeners = this.useOpenAIKeyListeners.filter(
            (o) => o !== r,
          )
        }),
        (this.addOpenAIModelListener = (r) => {
          this.openAIModelListeners.push(r)
        }),
        (this.removeOpenAIModelListener = (r) => {
          this.openAIModelListeners = this.openAIModelListeners.filter(
            (o) => o !== r,
          )
        }),
        (this.addAvailableModelsListener = (r) => {
          this.availableModelsListeners.push(r)
        }),
        (this.removeAvailableModelsListener = (r) => {
          this.availableModelsListeners = this.availableModelsListeners.filter(
            (o) => o !== r,
          )
        }),
        (this.addLongContextOpenAIModelListener = (r) => {
          this.longContextOpenAIModelListeners.push(r)
        }),
        (this.removeLongContextOpenAIModelListener = (r) => {
          this.longContextOpenAIModelListeners =
            this.longContextOpenAIModelListeners.filter((o) => o !== r)
        }),
        (this.onDidChangeUseOpenAIKey = this.b.event),
        (this.addPopupListener = (r) => {
          this.popupListeners.push(r)
        }),
        (this.addClosePopupListener = (r) => {
          this.closePopupListeners.push(r)
        }),
        this.loadData(),
        this.c.onWillSaveState(() => this.saveData()),
        this.D(this.f.createScoped(this)).onChangeEffect({
          deps: [
            () => {
              const r =
                  this.f.applicationUserPersistentStorage.isLongContextMode ||
                  this.f.applicationUserPersistentStorage.isDebuggerMode,
                o = this.getAvailableModelsReactive({
                  isLongContextOrDebuggerMode: r,
                  isChat: !0,
                }),
                a = this.getAvailableModelsReactive({
                  isLongContextOrDebuggerMode: r,
                  isChat: !1,
                })
              return {
                availableModelsChat: o,
                availableModelsNonChat: a,
                isLongContextOrDebuggerMode: r,
              }
            },
          ],
          onChange: ({
            deps: [{ availableModelsChat: r, availableModelsNonChat: o }],
          }) => {
            zle(this.f, r, !1, "regular-chat"),
              zle(this.f, o, !1, "cmd-k"),
              zle(this.f, o, !1, "terminal-cmd-k"),
              zle(this.f, o, !1)
          },
          runNowToo: !0,
        })
    }
    getUseApiKeyForModel(e) {
      return r9i(e) && this.f.applicationUserPersistentStorage.useClaudeKey
        ? this.f.applicationUserPersistentStorage.useClaudeKey
        : o9i(e) && this.f.applicationUserPersistentStorage.useGoogleKey
          ? !0
          : this.getUseOpenAIKey()
    }
    getAvailableDefaultModels() {
      const e =
        this.f.applicationUserPersistentStorage.availableDefaultModels2 ?? []
      return e.length === 0 ? [...x9i] : e
    }
    getHardcodedLongContextOnlyModelNames() {
      return x9i.filter((e) => e.isLongContextOnly).map((e) => e.name)
    }
    getAvailableModelsReactive(e) {
      let t = []
      this.getUseOpenAIKey()
        ? (t = [...this.getAvailableAPIKeyModels()])
        : (t = [
            ...this.getAvailableDefaultModels()
              .filter((r) => {
                if (!r.defaultOn) return !1
                const o = e?.isLongContextOrDebuggerMode ?? !1
                if (r.isLongContextOnly && !o) return !1
                const a = e?.isChat ?? !1
                return !(r.isChatOnly && !a)
              })
              .map((r) => r.name),
          ])
      const s =
        this.f.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled
      if (s !== void 0) for (const r of s) t.includes(r) || t.push(r)
      const n =
        this.f.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled
      return (
        n !== void 0 && (t = t.filter((r) => !n.includes(r))),
        e?.isLongContextOrDebuggerMode
          ? (t = t.filter((r) => this.h(r)))
          : (t = t.filter(
              (r) => !this.getHardcodedLongContextOnlyModelNames().includes(r),
            )),
        t
      )
    }
    h(e) {
      return (
        [
          ...this.getAvailableDefaultModels()
            .filter((s) => s.isLongContextOnly)
            .map((s) => s.name),
        ].includes(e) ||
        e.startsWith("gemini-1.5") ||
        e.match(/-\d+k$/) ||
        e.match(/-\d+m$/)
      )
    }
    getPrivateModel() {
      return this.f.applicationUserPersistentStorage.aiSettings
        .privateFTOpenAIModel
    }
    getPrivateModels() {
      return [
        {
          type: "edit",
          modelName: "ft:gpt-4-0613-alpha:anysphere:clean-v1-small:87hixoOS",
          displayName: "edits-ft-s1",
          promptType: "edits-v1",
        },
        {
          type: "edit",
          modelName: "ft:gpt-4-0613-alpha:anysphere:clean-v1-small:87rqZ4uE",
          displayName: "edits-ft-s2",
          promptType: "edits-v1",
        },
        {
          type: "edit",
          modelName: "ft:gpt-4-0613-alpha:anysphere:v2-batch6-lr1:87en0lwl",
          displayName: "edits-ft-b1",
          promptType: "edits-v1",
        },
        {
          type: "edit",
          modelName: "ft:gpt-4-0613-alpha:anysphere::87Zucd13",
          displayName: "edits-ft-b2",
          promptType: "edits-v1",
        },
        {
          type: "edit",
          modelName: "ft:gpt-4-0613-alpha:anysphere::86cjNLZc",
          displayName: "edits-ft-b3",
          promptType: "edits-v1",
        },
      ]
    }
    _setUseOpenAIKey(e) {
      this.f.setApplicationUserPersistentStorage("useOpenAIKey", e)
      for (let t of this.useOpenAIKeyListeners) t(e)
      this.b.fire(e)
    }
    _setOpenAIModel(e) {
      for (let t of this.openAIModelListeners) t(e)
      this.f.setApplicationUserPersistentStorage("aiSettings", "openAIModel", e)
    }
    _setLongContextOpenAIModel(e, t) {
      for (let s of this.longContextOpenAIModelListeners) s(e)
      this.f.setApplicationUserPersistentStorage(
        "aiSettings",
        "longContextOpenAIModel",
        e,
      )
    }
    _setAvailableModels(e) {
      this.f.setApplicationUserPersistentStorage("availableAPIKeyModels", e),
        this._didChangeAvailableModels()
    }
    handleAvailableModelsChange() {
      this._didChangeAvailableModels()
    }
    _didChangeAvailableModels() {
      const e = this.getAvailableModelsReactive()
      for (let t of this.availableModelsListeners) t(e)
      if (e.includes(this.getModel()) === !1)
        if (e.includes(W$)) this._setOpenAIModel(W$)
        else {
          if (e.length === 0) return
          this._setOpenAIModel(e[e.length - 1])
        }
    }
  }
ITt = __decorate([__param(0, et), __param(1, ei), __param(2, $h)], ITt)
var DTt = class extends ITt {
  constructor(e, t, s, n, r) {
    super(n, r, s),
      (this.j = e),
      (this.n = t),
      (this.openPopup = (o, a) => {
        for (let l of this.popupListeners) l(this.j, this.n, o, a)
      }),
      (this.closePopup = () => {
        for (let o of this.closePopupListeners) o()
      }),
      this.g.addLoginChangedListener((o) => {
        this.g.membershipType() === _n.PRO && this.setUseOpenAIKey(!1)
      }),
      this.g.addSubscriptionChangedListener((o) => {
        o !== _n.FREE && this.setUseOpenAIKey(!1)
      })
  }
  setModel(e) {
    return (
      this._setOpenAIModel(e),
      this.setRegularChatModel(e),
      this.setCmdKModel(e),
      this.setTerminalCmdKModel(e),
      this.setLongContextModel(e),
      !0
    )
  }
  setRegularChatModel(e) {
    return (
      this.f.setApplicationUserPersistentStorage(
        "aiSettings",
        "regularChatModel",
        e,
      ),
      !0
    )
  }
  setCmdKModel(e) {
    return (
      this.f.setApplicationUserPersistentStorage("aiSettings", "cmdKModel", e),
      !0
    )
  }
  setTerminalCmdKModel(e) {
    return (
      this.f.setApplicationUserPersistentStorage(
        "aiSettings",
        "terminalCmdKModel",
        e,
      ),
      !0
    )
  }
  setComposerModel(e) {
    return (
      this.f.setApplicationUserPersistentStorage(
        "aiSettings",
        "composerModel",
        e,
      ),
      !0
    )
  }
  setLongContextModel(e) {
    const t = this.getLongContextModel()
    return this._setLongContextOpenAIModel(e), !0
  }
  async getApiKey() {
    return await this.g.openAIKey()
  }
  async refreshAPIKeyModels() {
    try {
      if (!this.getUseOpenAIKey()) return
      const e = await this.g.openAIKey()
      if (!e) return
      const { models: t } = await this.q(e)
      this._setAvailableModels(t)
    } catch (e) {
      console.error("Error refreshing API key models:", e)
    }
  }
  async setUseOpenAIKey(e) {
    if (e === !1)
      return this._setUseOpenAIKey(!1), this._didChangeAvailableModels(), !1
    {
      this._setUseOpenAIKey(!0)
      const t = await this.g.openAIKey()
      if (t) {
        const { models: s } = await this.q(t)
        return this._setAvailableModels(s), !0
      } else
        return this._setUseOpenAIKey(!1), this._didChangeAvailableModels(), !1
    }
  }
  async setOpenAIKey(e) {
    const t = await this.r(e)
    if (t !== !0) return t
    const { models: s } = await this.q(e)
    return (
      this._setAvailableModels(s),
      this._setUseOpenAIKey(!0),
      s.length !== 0 && this._setOpenAIModel(s[s.length - 1]),
      this.g.storeOpenAIKey(e),
      !0
    )
  }
  async q(e) {
    const t =
      this.f.applicationUserPersistentStorage.openAIBaseUrl ??
      "https://api.openai.com/v1"
    return await fetch(`${t}/models`, {
      headers: { Authorization: `Bearer ${e}` },
    }).then(async (s) => {
      if (s.status === 401) return { models: [] }
      try {
        return {
          models: (await s.json()).data
            .filter((r) => k9i.includes(r.id))
            .map((r) => r.id),
        }
      } catch {
        return { models: [] }
      }
    })
  }
  getModelForChallenge() {
    const e = this.getAvailableModelsReactive(),
      t = ["gpt-4o-mini", "4o", "gpt", "o1", "o3"]
    for (const s of t) {
      const n = e.find((r) => r.includes(s))
      if (n) return n
    }
    return e.at(0) ?? "please-enable-some-models"
  }
  async r(e) {
    const t =
      this.f.applicationUserPersistentStorage.openAIBaseUrl ??
      "https://api.openai.com/v1"
    try {
      const s = await fetch(`${t}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${e}`,
        },
        body: JSON.stringify({
          model: this.getModelForChallenge(),
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: "Test prompt using gpt-3.5-turbo" },
          ],
          temperature: 1,
          max_tokens: 10,
          stream: !1,
        }),
      })
      if (s.status === 200) return !0
      {
        const n = await Promise.race([
          s.text(),
          new Promise((r, o) =>
            setTimeout(() => r("Request timed out after 10 seconds"), 1e4),
          ),
        ])
        return { code: s.status, error: n }
      }
    } catch (s) {
      return { code: 0, error: s.toString() }
    }
  }
}
;(DTt = __decorate(
  [
    __param(0, _c),
    __param(1, Z),
    __param(2, $h),
    __param(3, et),
    __param(4, ei),
  ],
  DTt,
)),
  Ve(eg, DTt, 1),
  j(
    class extends ee {
      constructor() {
        super({
          id: qne,
          title: { value: "Toggle AI model", original: "Toggle AI model" },
        })
      }
      async run(
        i,
        {
          isLongContextOrDebuggerMode: e,
          specificModelField: t,
          isChat: s,
          direction: n,
        },
      ) {
        const r = i.get(eg),
          o = n ?? "forward",
          a = e
            ? r.getLongContextModel()
            : t === "regular-chat"
              ? r.getRegularChatModel()
              : t === "cmd-k"
                ? r.getCmdKModel()
                : t === "terminal-cmd-k"
                  ? r.getTerminalCmdKModel()
                  : t === "composer"
                    ? r.getComposerModel()
                    : r.getModel(),
          l = r.getAvailableModelsReactive({
            isLongContextOrDebuggerMode: e,
            isChat: s,
          }),
          c =
            o === "forward"
              ? (l.indexOf(a) + 1) % l.length
              : (l.indexOf(a) - 1 + l.length) % l.length,
          h = l[c]
        e
          ? r.setLongContextModel(h)
          : t === "regular-chat"
            ? r.setRegularChatModel(h)
            : t === "cmd-k"
              ? r.setCmdKModel(h)
              : t === "terminal-cmd-k"
                ? r.setTerminalCmdKModel(h)
                : t === "composer"
                  ? r.setComposerModel(h)
                  : r.setModel(h)
      }
    },
  )
var Z_n = "switchToPrivateFTModels"
j(
  class extends ee {
    constructor() {
      super({
        id: Z_n,
        title: {
          value: "Toggle Private FT models",
          original: "Toggle Private FT models",
        },
      })
    }
    async run(i) {
      const e = i.get(eg),
        t = e.getPrivateModel(),
        s = e.getPrivateModels()
      if (t === null) {
        e.setPrivateModel(s[0])
        return
      }
      const r = (s.map((a) => a.modelName).indexOf(t.modelName) + 1) % s.length,
        o = s[r]
      e.setPrivateModel(o)
    }
  },
),
  j(
    class extends ee {
      constructor() {
        super({
          id: jne,
          title: { value: "Switch to model", original: "Switch to model" },
          f1: !1,
        })
      }
      async run(i, e, t, s) {
        const n = i.get(eg)
        t
          ? n.setLongContextModel(e)
          : s === "regular-chat"
            ? n.setRegularChatModel(e)
            : s === "cmd-k"
              ? n.setCmdKModel(e)
              : s === "terminal-cmd-k"
                ? n.setTerminalCmdKModel(e)
                : s === "composer"
                  ? n.setComposerModel(e)
                  : n.setModel(e)
      }
    },
  ),
  j(
    class extends ee {
      constructor() {
        super({
          id: jne + ".gpt4",
          title: { value: "Switch to gpt-4", original: "Switch to gpt-4" },
          f1: !0,
        })
      }
      async run(i) {
        i.get(eg).setModel("gpt-4")
      }
    },
  ),
  j(
    class extends ee {
      constructor() {
        super({
          id: jne + ".gpt3",
          title: {
            value: "Switch to cursor-small",
            original: "Switch to cursor-small",
          },
          f1: !1,
        })
      }
      async run(i) {
        i.get(eg).setModel("cursor-small")
      }
    },
  )
var NI = Re("aiErrorService")
function dP(i) {
  ;((s) => {
    s.details = s.details.map((n) => {
      const r = "value" in n && n.value instanceof Uint8Array
      if ("value" in n && r === !1) {
        const o = Object.values(n.value)
        n.value = Uint8Array.from(o)
      }
      return n
    })
  })(i)
  const t = i.findDetails(sG)
  if (t) return t.at(0)
}
var TTt = class {
  constructor(e, t, s, n, r, o, a, l) {
    ;(this.c = e),
      (this.d = t),
      (this.f = s),
      (this.g = n),
      (this.i = r),
      (this.j = o),
      (this.k = a),
      (this.l = l),
      (this.a = []),
      (this.m = [])
  }
  addErrorPopupHandler(e) {
    this.m.push(e)
  }
  removeErrorPopupHandler(e) {
    this.m = this.m.filter((t) => t !== e)
  }
  tryRerun(e) {
    const t = this.okToRerun()
    this.a.push(Date.now()), (e !== !0 || t) && this.b !== void 0 && this.b()
  }
  okToRerun() {
    const s = Date.now(),
      n = this.a.slice(-2),
      r = n.length < 2 || !n.every((o) => s - o < 5e3)
    return (this.a = this.a.slice(-2)), r
  }
  shouldShowImmediateErrorMessage(e) {
    if (!(e instanceof du) || e.code === Tg.Canceled) return !1
    const t = dP(e)
    if (!t) return !0
    const s = t.error
    return !(
      s === Er.NOT_LOGGED_IN ||
      s === Er.AGENT_REQUIRES_LOGIN ||
      s === Er.PRO_USER_USAGE_LIMIT ||
      s === Er.FREE_USER_USAGE_LIMIT ||
      s === Er.FREE_USER_RATE_LIMIT_EXCEEDED ||
      s === Er.PRO_USER_RATE_LIMIT_EXCEEDED ||
      s === Er.BAD_API_KEY ||
      s === Er.BAD_MODEL_NAME ||
      s === Er.AUTH_TOKEN_EXPIRED ||
      s === Er.MAX_TOKENS ||
      t.details?.shouldShowImmediateError === !1
    )
  }
  n(e, t, s, n, r, o, a) {
    if (t?.details?.shouldShowImmediateError === !1) return
    if (!t?.isExpected) {
      const h = n.rawMessage ?? "unknown error",
        u = {
          bugId: r,
          bug: `automatic-from-connection-error.

request ID:${r}

error:${JSON.stringify(t?.error)}

error:${JSON.stringify(n)}`,
          priority: Kh.MEDIUM,
          protoURL: s,
          contactEmail: "automatic-from-connection-error",
          connectionErrorRaw: h,
          failingRequestID: r,
          connectErrorCode: n.code,
          errorDetailCode: e,
          errorDetailTitle: t?.details?.title,
          errorDetailDetail: t?.details?.detail,
        }
      this.l.executeCommand(u0t, u)
    }
    let l
    switch (e) {
      case Er.OPENAI_RATE_LIMIT_EXCEEDED:
        l = "openai_rate_limit"
        break
      case Er.OPENAI_ACCOUNT_LIMIT_EXCEEDED:
        l = "cursor_rate_limit"
        break
      case Er.SLASH_EDIT_FILE_TOO_LONG:
        l = "fast_apply_large_file"
        break
      case Er.FILE_UNSUPPORTED:
        l = "fast_apply_file_unsupported"
        break
      case Er.CLAUDE_IMAGE_TOO_LARGE:
        l = "claude_image_too_large"
        break
      case Er.API_KEY_RATE_LIMIT:
        l = "api_key_rate_limit"
        break
      case Er.OPENAI:
        l = "openai"
        break
      case Er.GPT_4_VISION_PREVIEW_RATE_LIMIT:
        l = "gpt_4_vision_rate_limit"
        break
      default:
        l = "internet"
    }
    let c =
      l === "internet"
        ? { case: l, generationUUID: r, errorCode: void 0, source: o, error: t }
        : { case: l, source: o, error: t }
    this.j.setNonPersistentStorage("showingErrorMetadata", c)
  }
  handleError(e, t, s, n, r, o) {
    const a = dP(e)
    console.log("error", e), console.log("errordetail", a)
    const l = a?.error,
      c = a
    if (
      ((this.b = o),
      this.j.setNonPersistentStorage("showingErrorHasRerun", o !== void 0),
      this.shouldShowImmediateErrorMessage(e))
    ) {
      this.n(l, c, n, e, s, r, o)
      return
    }
    if (
      l === Er.NOT_LOGGED_IN ||
      l === Er.AGENT_REQUIRES_LOGIN ||
      l === Er.PRO_USER_USAGE_LIMIT ||
      l === Er.FREE_USER_USAGE_LIMIT ||
      l === Er.FREE_USER_RATE_LIMIT_EXCEEDED ||
      l === Er.PRO_USER_RATE_LIMIT_EXCEEDED ||
      l === Er.BAD_API_KEY ||
      l === Er.BAD_MODEL_NAME
    ) {
      const h = t?.modelName ?? "cursor-small"
      this.m.forEach((u) =>
        u(
          new Gje(h, l, () => {
            if (o) {
              const d = this.okToRerun()
              this.a.push(Date.now()), d && o()
            }
          }),
          this.c,
          this.d,
        ),
      )
    } else
      l === Er.AUTH_TOKEN_EXPIRED
        ? this.k.refreshAuthentication().then(async () => {
            const h = await this.k.getAccessToken()
            if (o && h && !this.k.isTokenExpired(h)) {
              const u = this.okToRerun()
              this.a.push(Date.now()), u && o()
            } else
              this.j.setNonPersistentStorage("showingErrorMetadata", {
                case: "internet",
                generationUUID: s,
                source: r,
                error: a,
              })
          })
        : l === Er.MAX_TOKENS
          ? this.j.setNonPersistentStorage("maxTokensHit", !0)
          : this.n(l, c, n, e, s, "other", o)
  }
}
;(TTt = __decorate(
  [
    __param(0, _c),
    __param(1, Z),
    __param(2, Ht),
    __param(3, eg),
    __param(4, Zi),
    __param(5, ei),
    __param(6, $h),
    __param(7, st),
  ],
  TTt,
)),
  Ve(NI, TTt, 1)
var rU = Re("reducerService"),
  PTt = class {
    constructor(e) {
      this.c = e
      const t = e.createScoped(this)
    }
    dontShowIndexHint() {
      this.c.setWorkspaceUserPersistentStorage(
        "onboardingMetadata",
        "shouldAskToIndex",
        !1,
      )
    }
    addPersistentChatMetadataIfNotExists(e, t) {
      this.c.workspaceUserPersistentStorage.persistentChatMetadata.find(
        (n) => n.bubbleId === e && n.tabId === t,
      ) === void 0 &&
        this.c.setWorkspaceUserPersistentStorage(
          "persistentChatMetadata",
          (n) => [
            ...n,
            { bubbleId: e, tabId: t, metadataCreationTime: Date.now() },
          ],
        )
    }
    pruneOldFieldsFromChatMetadata() {
      this.c.setWorkspaceUserPersistentStorage(
        "persistentChatMetadata",
        (e) => {
          const t = e.sort((n, r) => {
              const o = n.metadataCreationTime || 0,
                a = r.metadataCreationTime || 0
              return o - a
            }),
            s = Math.max(t.length - 50, 0)
          return t.map((n, r) =>
            r > s
              ? n
              : {
                  ...n,
                  intermediateChunks: [],
                  intermediateSectionType: void 0,
                },
          )
        },
      )
    }
    addChatMetadata(e, t) {
      const s =
        this.c.workspaceUserPersistentStorage.persistentChatMetadata.find(
          (r) => r.bubbleId === e && r.tabId === t,
        ) ?? {}
      this.c.setWorkspaceUserPersistentStorage("persistentChatMetadata", (r) =>
        r.filter((o) => o.bubbleId !== e || o.tabId !== t),
      ),
        this.c.setWorkspaceUserPersistentStorage(
          "persistentChatMetadata",
          (r) => [
            ...r,
            {
              bubbleId: e,
              tabId: t,
              ...s,
              intermediateChunks: [],
              intermediateSectionType: void 0,
              docsCitations: [],
              predictedContext: void 0,
            },
          ],
        )
      const n = this.c.nonPersistentStorage.nonPersistentChatMetadata.find(
        (r) => r.bubbleId === e && r.tabId === t,
      )
      this.c.setNonPersistentStorage("nonPersistentChatMetadata", (r) =>
        r.filter((o) => o.bubbleId !== e || o.tabId !== t),
      ),
        this.c.setNonPersistentStorage("nonPersistentChatMetadata", (r) => [
          ...r,
          {
            bubbleId: e,
            tabId: t,
            ...n,
            intermediateChunks: [],
            intermediateSectionType: void 0,
            steps: [],
          },
        ]),
        this.pruneOldFieldsFromChatMetadata()
    }
    addStepToNonPersistentChatMetadata(e, t, s) {
      console.log("new step!", s),
        this.c.setNonPersistentStorage(
          "nonPersistentChatMetadata",
          (n) => n.bubbleId === e && n.tabId === t,
          "steps",
          (n) => [
            ...n,
            (() => {
              switch (s.type) {
                case "gathering":
                  return { type: s.type, data: s.step, files: [] }
                case "reranking":
                  return { type: s.type, data: s.step, files: [] }
                case "reasoning":
                  return { type: s.type, data: s.step, substeps: [] }
              }
            })(),
          ],
        )
    }
    addFileToStepInNonPersistentChatMetadata(e, t, s) {
      this.c.setNonPersistentStorage(
        "nonPersistentChatMetadata",
        (n) => n.bubbleId === e && n.tabId === t,
        "steps",
        (n) => n.type === s.type && n.data.index === s.file.stepIndex,
        "files",
        (n) => [...n, s.file],
      )
    }
    addSubstepToStepInNonPersistentChatMetadata(e, t, s) {
      this.c.setNonPersistentStorage(
        "nonPersistentChatMetadata",
        (n) => n.bubbleId === e && n.tabId === t,
        "steps",
        (n) => n.type === s.type && n.data.index === s.substep.stepIndex,
        "substeps",
        (n) => [...n, s.substep],
      )
    }
    updateGlobalContext(e, t) {
      this.addPersistentChatMetadataIfNotExists(e.bubbleId, e.tabId),
        this.c.setWorkspaceUserPersistentStorage(
          "persistentChatMetadata",
          ({ bubbleId: s, tabId: n }) => s === e.bubbleId && n === e.tabId,
          (s) => {
            const n = s.predictedContext ?? { usedDocs: [] }
            return {
              ...s,
              predictedContext: {
                ...n,
                usedCodebase: {
                  ...n.usedCodebase,
                  fileResults: t?.map((r) =>
                    r.file !== void 0
                      ? {
                          file: {
                            relativeWorkspacePath:
                              r.file?.relativeWorkspacePath,
                          },
                          score: r.score,
                        }
                      : { score: r.score },
                  ),
                },
              },
            }
          },
        )
    }
    useCodebaseContext(e, t) {
      this.addPersistentChatMetadataIfNotExists(e, t),
        this.updateGlobalContext({ bubbleId: e, tabId: t }),
        this.setIntentDetermined(e, t)
    }
    setIntentDetermined(e, t) {
      this.c.setNonPersistentStorage(
        "inprogressAIGenerations",
        (s) =>
          s.metadata?.type === "chat" &&
          s.metadata.bubbleId === e &&
          s.metadata.tabId === t,
        "metadata",
        (s) => (s?.type !== "chat" ? s : { ...s, intentDetermined: !0 }),
      )
    }
  }
;(PTt = __decorate([__param(0, ei)], PTt)), Ve(rU, PTt, 1)
var Ll = Re("historyService"),
  E9i
;(function (i) {
  ;(i[(i.NONE = 0)] = "NONE"),
    (i[(i.EDITS = 1)] = "EDITS"),
    (i[(i.NAVIGATION = 2)] = "NAVIGATION")
})(E9i || (E9i = {}))
var I9i
;(function (i) {
  ;(i[(i.DEFAULT = 0)] = "DEFAULT"),
    (i[(i.EDITOR_GROUP = 1)] = "EDITOR_GROUP"),
    (i[(i.EDITOR = 2)] = "EDITOR")
})(I9i || (I9i = {}))
function e5n(i, e, t) {
  return D1(i, e, void 0, t)
}
function D1(i, e, t, s, n) {
  const r = e.slice(),
    a = tTt(i, [])
  let l, c
  for (
    ;
    r.length > 0 &&
    ((c = r.pop()), (l = iTt(a, r)), l === void 0 && t !== void 0);

  )
    typeof c == "string" ? (t = { [c]: t }) : (t = [t])
  if (l)
    if (
      l.type === "object" &&
      typeof c == "string" &&
      Array.isArray(l.children)
    ) {
      const h = iTt(l, [c])
      if (h !== void 0)
        if (t === void 0) {
          if (!h.parent) throw new Error("Malformed AST")
          const u = l.children.indexOf(h.parent)
          let d,
            g = h.parent.offset + h.parent.length
          if (u > 0) {
            const p = l.children[u - 1]
            d = p.offset + p.length
          } else
            (d = l.offset + 1),
              l.children.length > 1 && (g = l.children[1].offset)
          return oU(i, { offset: d, length: g - d, content: "" }, s)
        } else
          return oU(
            i,
            { offset: h.offset, length: h.length, content: JSON.stringify(t) },
            s,
          )
      else {
        if (t === void 0) return []
        const u = `${JSON.stringify(c)}: ${JSON.stringify(t)}`,
          d = n
            ? n(l.children.map((p) => p.children[0].value))
            : l.children.length
        let g
        if (d > 0) {
          const p = l.children[d - 1]
          g = { offset: p.offset + p.length, length: 0, content: "," + u }
        } else
          l.children.length === 0
            ? (g = { offset: l.offset + 1, length: 0, content: u })
            : (g = { offset: l.offset + 1, length: 0, content: u + "," })
        return oU(i, g, s)
      }
    } else if (
      l.type === "array" &&
      typeof c == "number" &&
      Array.isArray(l.children)
    )
      if (t !== void 0) {
        const h = `${JSON.stringify(t)}`
        let u
        if (l.children.length === 0 || c === 0)
          u = {
            offset: l.offset + 1,
            length: 0,
            content: l.children.length === 0 ? h : h + ",",
          }
        else {
          const d = c === -1 || c > l.children.length ? l.children.length : c,
            g = l.children[d - 1]
          u = { offset: g.offset + g.length, length: 0, content: "," + h }
        }
        return oU(i, u, s)
      } else {
        const h = c,
          u = l.children[h]
        let d
        if (l.children.length === 1)
          d = { offset: l.offset + 1, length: l.length - 2, content: "" }
        else if (l.children.length - 1 === h) {
          const g = l.children[h - 1],
            p = g.offset + g.length,
            m = l.offset + l.length
          d = { offset: p, length: m - 2 - p, content: "" }
        } else
          d = {
            offset: u.offset,
            length: l.children[h + 1].offset - u.offset,
            content: "",
          }
        return oU(i, d, s)
      }
    else
      throw new Error(
        `Can not add ${typeof c != "number" ? "index" : "property"} to parent of type ${l.type}`,
      )
  else
    return t === void 0
      ? []
      : oU(
          i,
          {
            offset: a ? a.offset : 0,
            length: a ? a.length : 0,
            content: JSON.stringify(t),
          },
          s,
        )
}
function oU(i, e, t) {
  let s = LTt(i, e),
    n = e.offset,
    r = e.offset + e.content.length
  if (e.length === 0 || e.content.length === 0) {
    for (; n > 0 && !Mje(s, n - 1); ) n--
    for (; r < s.length && !Mje(s, r); ) r++
  }
  const o = JOn(s, { offset: n, length: r - n }, t)
  for (let l = o.length - 1; l >= 0; l--) {
    const c = o[l]
    ;(s = LTt(s, c)),
      (n = Math.min(n, c.offset)),
      (r = Math.max(r, c.offset + c.length)),
      (r += c.content.length - c.length)
  }
  const a = i.length - (s.length - r) - n
  return [{ offset: n, length: a, content: s.substring(n, r) }]
}
function LTt(i, e) {
  return i.substring(0, e.offset) + e.content + i.substring(e.offset + e.length)
}
function NTt(i, e) {
  const t = e.slice(0).sort((n, r) => {
    const o = n.offset - r.offset
    return o === 0 ? n.length - r.length : o
  })
  let s = i.length
  for (let n = t.length - 1; n >= 0; n--) {
    const r = t[n]
    if (r.offset + r.length <= s) i = LTt(i, r)
    else throw new Error("Overlapping edit")
    s = r.offset
  }
  return i
}
var lb = Re("workspacesService")
function RTt(i) {
  return i.hasOwnProperty("workspace")
}
function Gle(i) {
  return i.hasOwnProperty("folderUri")
}
function D9i(i) {
  return Jje(i) || T9i(i)
}
function Jje(i) {
  const e = i
  return typeof e?.path == "string" && (!e.name || typeof e.name == "string")
}
function T9i(i) {
  const e = i
  return typeof e?.uri == "string" && (!e.name || typeof e.name == "string")
}
function ATt(i, e, t, s, n) {
  if (i.scheme !== s.scheme) return { name: t, uri: i.toString(!0) }
  let r = e ? void 0 : n.relativePath(s, i)
  if (r !== void 0) r.length === 0 ? (r = ".") : ms && (r = P9i(r))
  else if (i.scheme === ce.file) (r = i.fsPath), ms && (r = P9i(r))
  else if (n.isEqualAuthority(i.authority, s.authority)) r = i.path
  else return { name: t, uri: i.toString(!0) }
  return { name: t, path: r }
}
function P9i(i) {
  return (i = Qy(i)), Gq(i) || (i = zq(i)), i
}
function MTt(i, e, t) {
  const s = [],
    n = new Set(),
    r = t.dirname(e)
  for (const o of i) {
    let a
    if (Jje(o)) o.path && (a = t.resolvePath(r, o.path))
    else if (T9i(o))
      try {
        ;(a = U.parse(o.uri)),
          a.path[0] !== Cn.sep && (a = a.with({ path: Cn.sep + a.path }))
      } catch (l) {
        console.warn(l)
      }
    if (a) {
      const l = t.getComparisonKey(a)
      if (!n.has(l)) {
        n.add(l)
        const c = o.name || t.basenameOrAuthority(a)
        s.push(new Jwt({ uri: a, name: c, index: s.length }, o))
      }
    }
  }
  return s
}
function L9i(i, e, t, s, n) {
  const r = t5n(e, i),
    o = n.dirname(e),
    a = n.dirname(s),
    l = []
  for (const d of r.folders) {
    const g = Jje(d) ? n.resolvePath(o, d.path) : U.parse(d.uri)
    let p
    t ? (p = !1) : (p = !Jje(d) || Ny(d.path)), l.push(ATt(g, p, d.name, a, n))
  }
  const c = {
      insertSpaces: !1,
      tabSize: 4,
      eol:
        fo || wt
          ? `
`
          : `\r
`,
    },
    h = D1(i, ["folders"], l, c)
  let u = NTt(i, h)
  return (
    b3(r.remoteAuthority, ble(s)) &&
      (u = NTt(u, e5n(u, ["remoteAuthority"], c))),
    u
  )
}
function t5n(i, e) {
  const t = Hl(e)
  if (t && Array.isArray(t.folders)) t.folders = t.folders.filter((s) => D9i(s))
  else throw new Error(`${i} looks like an invalid workspace file.`)
  return t
}
function i5n(i) {
  return (
    i.workspace &&
    typeof i.workspace == "object" &&
    typeof i.workspace.id == "string" &&
    typeof i.workspace.configPath == "string"
  )
}
function s5n(i) {
  return typeof i.folderUri == "string"
}
function n5n(i) {
  return typeof i.fileUri == "string"
}
function r5n(i, e) {
  const t = { workspaces: [], files: [] }
  if (i) {
    const s = function (r, o) {
        for (let a = 0; a < r.length; a++)
          try {
            o(r[a], a)
          } catch (l) {
            e.warn(
              `Error restoring recent entry ${JSON.stringify(r[a])}: ${l.toString()}. Skip entry.`,
            )
          }
      },
      n = i
    Array.isArray(n.entries) &&
      s(n.entries, (r) => {
        const o = r.label,
          a = r.remoteAuthority
        i5n(r)
          ? t.workspaces.push({
              label: o,
              remoteAuthority: a,
              workspace: {
                id: r.workspace.id,
                configPath: U.parse(r.workspace.configPath),
              },
            })
          : s5n(r)
            ? t.workspaces.push({
                label: o,
                remoteAuthority: a,
                folderUri: U.parse(r.folderUri),
              })
            : n5n(r) &&
              t.files.push({
                label: o,
                remoteAuthority: a,
                fileUri: U.parse(r.fileUri),
              })
      })
  }
  return t
}
var T1 = Re("fastContextService"),
  o5n = 1e4,
  $Tt = class extends V {
    constructor(e, t, s, n, r, o, a, l) {
      super(),
        (this.c = e),
        (this.f = t),
        (this.g = s),
        (this.h = n),
        (this.j = r),
        (this.m = o),
        (this.q = a),
        (this.r = l),
        (this.embeddingsCache = {}),
        (this.embeddingsTimer = {}),
        (this.lastLookedUpEmbeddings = []),
        (this.lastSeenCmdKQueryHistoryInAllContextSessions = []),
        (this.timeOfLastTerminalCommand = 0),
        (this.timeOfLastUserChatMessage = 0)
    }
    async computeEmbeddingsChunks(e, t, s) {}
    clearEmbeddingsCache() {
      this.lastLookedUpEmbeddings = this.lastLookedUpEmbeddings.slice(-20)
      const e = new Set(this.lastLookedUpEmbeddings)
      for (const t in this.embeddingsCache)
        e.has(t) || delete this.embeddingsCache[t]
    }
    async getEmbeddingsFromCache(e) {
      return []
    }
    async getEmbeddingChunks(e, t, s) {
      return (await this.m.parallelSearch(e, 5, void 0, { globFilter: s })).map(
        (r) => ({
          relativeWorkspacePath: r.codeBlock?.relativeWorkspacePath ?? "",
          contents: r.codeBlock?.contents ?? "",
        }),
      )
    }
    s() {
      const e = this.h.activeEditorPane?.getControl()
      if (!Pn(e)) return
      const t = e.getModel()
      if (t === null) return
      const s = e.getPosition(),
        n = e.getSelection()
      return { model: t, position: s, selection: n }
    }
    async getAllOpenTabs({ fileSizeLimit: e }) {
      const t = []
      for (const s of this.h.editors)
        try {
          const n = s.resource
          if (n) {
            let r
            try {
              r = await this.q.createModelReference(n)
              const o = r.object.textEditorModel.getValue()
              o.length <= e && t.push({ uri: n, contents: o })
            } finally {
              r?.dispose()
            }
          }
        } catch (n) {
          console.error(n)
        }
      return t
    }
    async getVisibleTabs() {
      const e = []
      for (const t of this.h.visibleEditorPanes) {
        const r = t
            .getControl()
            .getVisibleRanges()
            .map((c) => ({
              startLineNumber: c.startLineNumber,
              endLineNumber: c.endLineNumber,
            })),
          a = t.input.resource
        let l
        try {
          l = await this.q.createModelReference(a)
          const c = l.object.textEditorModel.getValue()
          let h = [],
            u = 1
          for (const { startLineNumber: d, endLineNumber: g } of r) {
            u < d && (u = d)
            const p = c
              .split(
                `
`,
              )
              .slice(d - 1, g)
            h = h.concat(p.map((m) => ({ line: m, lineNumber: u++ })))
          }
          h
            .join(
              `
`,
            )
            .trim().length > 0 &&
            e.push({
              relativeWorkspacePath: this.g.asRelativePath(a),
              totalNumberOfLinesInFile: c.split(`
`).length,
              lines: h,
            })
        } finally {
          l?.dispose()
        }
      }
      return e
    }
    async getRecentChunks(e = 50) {
      const t = this.c.getRecentLocations(e),
        s = this.t(t, 50),
        n = this.g.getWorkspace()
      let r
      n.folders.length > 0 && (r = n.folders[0].uri)
      const o = this.u(s),
        a = await this.w(o, r)
      return (
        a.sort((l, c) => c.score - l.score), a.map(({ score: l, ...c }) => c)
      )
    }
    t(e, t = 7) {
      return e.map((s) =>
        s.location.startLineNumber === s.location.endLineNumber
          ? {
              ...s,
              location: new G(
                Math.max(s.location.startLineNumber - t, 1),
                1,
                s.location.endLineNumber + t,
                1,
              ),
            }
          : s,
      )
    }
    u(e) {
      const t = new Map()
      for (const [s, n] of e.entries()) {
        const r = n.uri
        t.has(r) || t.set(r, []),
          t.get(r)?.push({ ...n, score: e.length - s, numMerges: 1 })
      }
      return t
    }
    async w(e, t) {
      const s = []
      for (const [n, r] of e.entries()) {
        const o = this.y(r)
        let a
        try {
          ;(a = await this.q.createModelReference(n)),
            await Promise.race([
              a.object.resolve(),
              new Promise((l) => setTimeout(l, 3e3)),
            ])
          for (const l of o) {
            if (
              a.object.textEditorModel.getValueLengthInRange(l.location) > o5n
            )
              continue
            const h = a.object.textEditorModel.getValueInRange(l.location)
            let u = n.fsPath
            t && (u = this.g.asRelativePath(n)),
              s.push({
                relativeWorkspacePath: u,
                contents: h,
                score: l.score,
                range: l.location,
              })
          }
        } finally {
          a?.dispose()
        }
      }
      return s
    }
    y(e) {
      const t = []
      let [s, ...n] = e
      for (const r of n)
        G.areIntersecting(s.location, r.location)
          ? ((s.location = G.plusRange(s.location, r.location)),
            (s.score = (s.score * s.numMerges + r.score) / (s.numMerges + 1)),
            (s.numMerges += 1))
          : (t.push(s), (s = r))
      return t.push(s), t
    }
    async getImports() {
      const e = this.s()
      if (e === void 0) return []
      const { model: t } = e,
        s = new oi(),
        o = (await this.j.getOrCreate(t, s.token)).getTopLevelSymbols()
      return []
    }
    async getApproximateRangeOfImports(e, t) {
      let s
      try {
        s = await this.q.createModelReference(e)
        const n = s.object.textEditorModel,
          a = (await this.j.getOrCreate(n, t))
            .getTopLevelSymbols()
            .reduce(
              (l, c) => Math.min(l, c.range.startLineNumber),
              Number.MAX_VALUE,
            )
        return new G(1, 1, a, 1e3)
      } finally {
        s?.dispose()
      }
    }
    async getTypes() {
      return []
    }
    async getNonEmbeddingChunks(e, t) {
      try {
        const s = await this.getRecentChunks()
        return t !== void 0 ? s.slice(0, t) : s.slice(0, 5)
      } catch (s) {
        return console.error(s), []
      }
    }
    async getFilteredRecentChunks(e) {
      const t = this.c.getRecentLocations(50),
        s = this.t(t),
        n = this.z(),
        r = s.filter((d) => d.uri.toString() !== n?.toString()),
        o = this.g.getWorkspace()
      let a
      o.folders.length > 0 && (a = o.folders[0].uri)
      const l = this.u(r),
        c = await this.w(l, a)
      return (
        c.sort((d, g) => g.score - d.score),
        c.map(({ score: d, ...g }) => g).slice(0, e)
      )
    }
    z() {
      return this.h.activeEditor?.resource
    }
    addCmdKToQueryHistory(e, t) {
      this.lastSeenCmdKQueryHistoryInAllContextSessions.push({
        query: { query: e },
        relativeWorkspacePath: t,
        timestampDouble: Date.now(),
        cmdkWasAccepted: void 0,
      })
    }
    getCmdKQueryHistoryInAllContextSessions() {
      return this.lastSeenCmdKQueryHistoryInAllContextSessions
    }
    markNowAsLastChatMessage() {
      this.timeOfLastUserChatMessage = Date.now()
    }
    markNowAsLastTerminalCommand() {
      this.timeOfLastTerminalCommand = Date.now()
    }
    getTimeOfLastChatMessage() {
      return this.timeOfLastUserChatMessage
    }
    getTimeOfLastTerminalCommand() {
      return this.timeOfLastTerminalCommand
    }
  }
;($Tt = __decorate(
  [
    __param(0, Ll),
    __param(1, lb),
    __param(2, it),
    __param(3, ve),
    __param(4, Lg),
    __param(5, Md),
    __param(6, Xt),
    __param(7, qi),
  ],
  $Tt,
)),
  Ve(T1, $Tt, 1)
var A_ = Re("aiUtilsService"),
  FTt = class extends V {
    constructor(e) {
      super(), (this.a = e)
    }
    getWorkspaceRootPath() {
      const e = this.a.getWorkspace().folders
      return e.length > 0 ? e[0].uri.path : void 0
    }
  }
;(FTt = __decorate([__param(0, it)], FTt)), Ve(A_, FTt, 1);

  return {
    T1,
    A_,
    eg,
    NI,
    rU,
    lb,
    Ll,
    Gle,
    RTt,
    L9i,
    Gje,
    zle,
    dP,
    D1,
    oU,
    NTt,
    D9i,
    ATt,
    MTt,
    r5n,
  };
}
