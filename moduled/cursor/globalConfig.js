// @ts-check

export function createGlobalConfig(params) {
  const {Re, rt, F$, x$, Yf, fG, eb, $Ve, zB} = params;

  var JTn = {
    position: { x: 0, y: 0 },
    horizontalBarSize: 0,
    tabHeight: 0,
    selectedView: "suggested",
    devToolsPosition: { x: 0, y: 0 },
    memories: [],
    isComposerBarChatCollapsed: !1,
    composerBarPosition: null,
  },
  DOi = {
    isEnabled: !1,
    explicitEnableOrDisable: void 0,
    preferredModelName: "o1-preview",
    lastBackgroundBugbotAt: void 0,
  },
  KTn = {
    isComposerEnabled2: !0,
    alwaysKeepComposerInBound: !0,
    location2: "pane",
    nonBarLocation: "pane",
    chatLocation: "pane",
    hasMigratedChatLocation: !1,
    isBackgroundComposerEnabled: !1,
    defaultCapabilities: [],
    barAnchor: "center",
    autoApplyFilesOutsideContext: !0,
    shouldAutoContinueToolCall: !1,
    useYoloMode: !1,
    yoloPrompt: "",
    yoloCommandAllowlist: [],
    yoloCommandDenylist: [],
    preferDiffInChat: !0,
    mainComposerMode: "edit",
    useAutoContext: !1,
    useContextBank: !1,
    defaultUseToolsInEdit: !1,
    enableDataHandleDebugging: !1,
    unification2: !0,
    unification6: "disabled",
    shouldReviewChanges: "enabled",
    wasBarPreviouslyOpen: !1,
    doNotShowYoloModeWarningAgain: !1,
    selectedFakeStreamerId: null,
    yoloDeleteFileDisabled: !1,
    isPlannerToolEnabled: !1,
    isWebViewerToolEnabled: !1,
    webViewerAllowNonLocalhost: !1,
  },
  YTn = { isNotepadEnabled: !0 },
  CWe = [],
  bkt = [],
  gae
  ;(function (i) {
    ;(i.NO_ERROR = "NO_ERROR"),
      (i.NO_REPO = "NO_REPO"),
      (i.EXTENSION_ERROR = "EXTENSION_ERROR")
  })(gae || (gae = {}))
  var XTn = { cppModels: ["main", "turbo"], defaultCppModel: "main" },
    ei = Re("reactiveStorageService")
  function pp(i) {
    const e = JSON.parse(JSON.stringify(i))
    return (e.uri = i.uri), e
  }
  function pae(i) {
    if (!i) return
    const e = JSON.parse(JSON.stringify(i))
    e.uri = i.uri
    const t = [...i.data.selections]
    return (
      (e.data = { ...i.data, selections: t }),
      (e.abortController = i.abortController),
      e
    )
  }
  var W$ = "claude-3.5-sonnet",
    vkt = "https://cursor.com",
    ykt = "https://api2.cursor.sh",
    MG = "https://api3.cursor.sh",
    wkt = "https://api4.cursor.sh",
    SWe = "https://api4.cursor.sh",
    TOi = "https://api3.cursor.sh",
    Ckt = "https://api3.cursor.sh",
    QTn = "https://repo42.cursor.sh",
    Skt = "KbZUR41cY7W6zRSdpSUJ7I7mLYBKOCmB",
    xkt = "prod.authentication.cursor.sh",
    POi = ["chat", "submit", "context"]
  function LOi(i, e) {
    const t = i.applicationUserPersistentStorage.haveNotSeen
    return t === void 0 ? !1 : POi.find((n) => t[n] === !0) !== e
  }
  function ZTn(i) {
    for (const e of POi)
      i.setApplicationUserPersistentStorage("haveNotSeen", {
        ...i.applicationUserPersistentStorage.haveNotSeen,
        [e]: !0,
      })
  }
  function NOi(i, e) {
    i.setApplicationUserPersistentStorage("haveNotSeen", {
      ...i.applicationUserPersistentStorage.haveNotSeen,
      [e]: !1,
    })
  }
  var ROi = rt(),
    ePn = {
      composerState: { ...KTn },
      mcpServers: [],
      notepadState: { ...YTn },
      bugbotState: { ...DOi },
      aiFeaturesCopyPasteState: { mentions: [] },
      shouldShowViewZoneWhenPreviewBoxIsClipped4: !1,
      syncDevModeColorTheme: !0,
      cppModelsState: XTn,
      isLinterEnabled: !1,
      aiSettings: {
        openAIModel: "claude-3.5-sonnet",
        regularChatModel: "claude-3.5-sonnet",
        cmdKModel: "claude-3.5-sonnet",
        terminalCmdKModel: "claude-3.5-sonnet",
        composerModel: "claude-3.5-sonnet",
        privateFTOpenAIModel: null,
        longContextOpenAIModel: "claude-3-5-sonnet-200k",
      },
      authenticationSettings: { githubLoggedIn: !1 },
      cursorCreds: {
        websiteUrl: vkt,
        backendUrl: ykt,
        authClientId: Skt,
        authDomain: xkt,
        repoBackendUrl: ykt,
        telemBackendUrl: MG,
        cmdkBackendUrl: TOi,
        hfUrl: Ckt,
        geoCppBackendUrl: wkt,
        cppConfigBackendUrl: SWe,
        credentialsDisplayName: "Prod",
      },
      docState: { visibleDocs: [], usableDocs: [], previosulyUsedDocs: [] },
      lastUpdateHiddenTimeInUnixSeconds: 0,
      lintRules: "",
      bubbleTimesLeft: 0,
      showAgentActionDebugger: !1,
      cmdLineHookState: { ignored: !1, timesShown: 0 },
      agentDebuggerState: { priomptLiveMode: !1, isRecordingTasks: !0 },
      showLinterDebugger: !1,
      linterDebuggerState: {
        specificRules: !0,
        compileErrors: !1,
        changeBehavior: !0,
        matchCode: !1,
        relevance: !0,
        userAwareness: !0,
      },
      cacheChatPrompts: !0,
      cmdkDiffHistoryEnabled: !1,
      shouldOnlyImportOnAccept: !0,
      cppAutoImportDecorationStyle: "squiggle",
      lintSettings: {
        forceEnableDiscriminators: [],
        forceDisableDiscriminators: [],
        forceEnableGenerators: [],
        forceDisableGenerators: [],
        watcherThreshold: 0.2,
        watcherDebounceTimeSeconds: 30,
        runOnSaveInstead: !0,
        silenceIfOverlappingWithRegularLinter: !0,
      },
      lastUpgradeToProNotificationTime: 0,
      hallucinatedFunctionsPersistentState: {},
      haveNotSeen: {},
      newUserData: {
        toolUsageCount: {
          plainChat: "legacy",
          contextChat: "legacy",
          intentChat: "legacy",
        },
      },
      azureState: { useAzure: !1 },
      interpreterModeSettings: { interpreterModeByDefault: !1 },
      cppFireOnEveryCursorChange: !1,
      personalDocs: [],
      chunkedStreamingEnabledV2: !0,
      cppCachedTypeaheadEnabled: !0,
      cppInCmdF: !0,
      cppManualTriggerWithOpToken: !1,
      cppTriggerInComments: !0,
      cppShowWhitespaceOnlyChanges: !1,
      fastCppEnabled: !1,
      cppEnabled: !0,
      cppConfig: void 0,
      indexRepository: !0,
      haveNotImportedFromVSC: !1,
      shouldAutoParseCmdKLinks: !1,
      SPECIAL_KEY_lastUpdatedTimeInUnixSeconds: 0,
      aiHyperModeUXType: "auto-accept",
      aiPreviewsEnabled: !0,
      aiPreviewSettings: {
        enabledFeatures: { summary: !0, relatedFiles: !0, relatedCommits: !0 },
        summary: { isExpanded: !0 },
        relatedFiles: { isExpanded: !0 },
        relatedCommits: { isExpanded: !1 },
      },
      chatFadeInAnimationEnabled: !1,
      isFileSyncClientEnabled: !0,
      membershipType: void 0,
      isAiReviewInputExpanded: !0,
      useFastApplyModel: !1,
      fastApplyModelType: F$.DEFAULT,
      explicitlyEnableSemanticSearch: !1,
      aiCursorHelpEnabled: !0,
      showAllCmdKContexts: !1,
      aiDocAgentEnabled: !1,
      markdownTestString: "",
      cppInPeek: !0,
      fastSemanticSearchEnabled: !1,
      preferredEmbeddingModel: x$.UNSPECIFIED,
      cursorPredictionUIExperiments: [],
      oneTimeSettings: {
        shouldDisableGithubCopilot: !0,
        shouldMigrateFromGpt4ToGpt4o: !0,
        shouldMigrateFromGpt4oToClaudeSonnet: !0,
        didMigrateFromGpt4oToClaudeSonnet: !1,
        didMigrateBackFromClaudeSonnetToGpt4o: !1,
      },
      aiReviewPersistentStorage: { customInstructions: "" },
      indexingState: { lastAskedToIndexTime: 0 },
      turboModeOptions: { timesShownUpgradeMessage: 0 },
      internalAnalyticsDebugMode: !1,
      fullContextOptions: { compress: !0, hasDismissed: !1 },
    },
    AOi = [
      (i, e) =>
        e.isBashMode2 === !0
          ? (delete e.isBashMode2,
            {
              ...e,
              isInterpreterMode: !0,
              interpreterModeSettings: { interpreterModeByDefault: !0 },
            })
          : e,
      (i, e) =>
        e.cursorCreds?.cppBackendUrl === void 0
          ? { ...e, cursorCreds: { ...(e.cursorCreds ?? {}), cppBackendUrl: MG } }
          : e,
      (i, e) => (e.cppEnabled === void 0 && (e.cppEnabled = !0), e),
    ],
    MOi = {
      tasksData: {
        tasksDataSchemaVersion: 1,
        tasks: [{ type: "draft", taskId: ROi, instruction: "" }],
        displayedTaskId: ROi,
        showTabs: !1,
        activeServerTaskUuids: [],
      },
      onboardingMetadata: { shouldAskToIndex: !0, shouldHideWarning: !1 },
      hallucinatedFunctionsWorkspaceState: {},
      persistentChatMetadata: [],
      aiPanePosition: Yf.SIDEBAR,
      shouldRerankByDefault: !1,
      indexingData: { preferredEmbeddingModel: x$.UNSPECIFIED },
      composerState: JTn,
    },
    $Oi = [
      (i, e) =>
        !e.tasksData || !e.tasksData.tasksDataSchemaVersion
          ? { ...e, tasksData: MOi.tasksData }
          : e,
      (i, e) => {
        if (
          e.tasksData &&
          e.tasksData.tasks &&
          Array.isArray(e.tasksData.tasks)
        ) {
          const t = e.tasksData.tasks.map((s) =>
            typeof s == "object" && s && "type" in s && s.type === "started"
              ? { ...s, SPECIAL_KEY_doNotPersist: !1 }
              : s,
          )
          return { ...e, tasksData: { ...e.tasksData, tasks: t } }
        }
        return e
      },
      (i, e) =>
        !e.onboardingMetadata || !e.onboardingMetadata.shouldAskToIndex
          ? { ...e, onboardingMetadata: { shouldAskToIndex: !0 } }
          : e,
      (i, e) => (
        fG({
          origObject: e,
          pathToKey: [
            "persistentChatMetadata",
            eb.array,
            "injectedContext",
            "usedCodebase",
            "fileResults",
            eb.array,
            "file",
          ],
          keyToRemove: "contents",
        }),
        fG({
          origObject: e,
          pathToKey: [
            "persistentChatMetadata",
            eb.array,
            "injectedContext",
            "usedCodebase",
            "codeResults",
            eb.array,
            "codeBlock",
          ],
          keyToRemove: "fileContents",
        }),
        $Ve({
          origObject: e,
          pathToKey: [
            "persistentChatMetadata",
            eb.array,
            "injectedContext",
            "usedCurrentFile",
          ],
          keyToKeep: "relativeFilePath",
        }),
        fG({
          origObject: e,
          pathToKey: [
            "persistentChatMetadata",
            eb.array,
            "predictedContext",
            "usedCodebase",
            "fileResults",
            eb.array,
            "file",
          ],
          keyToRemove: "contents",
        }),
        fG({
          origObject: e,
          pathToKey: [
            "persistentChatMetadata",
            eb.array,
            "predictedContext",
            "usedCodebase",
            "codeResults",
            eb.array,
            "codeBlock",
          ],
          keyToRemove: "fileContents",
        }),
        $Ve({
          origObject: e,
          pathToKey: [
            "persistentChatMetadata",
            eb.array,
            "predictedContext",
            "usedCurrentFile",
          ],
          keyToKeep: "relativeFilePath",
        }),
        e
      ),
    ],
    tPn = {
      composerState: { infoBoxMessage: void 0 },
      notepadState: { notepadEditorFocusSignal: void 0 },
      aiReaderState: {},
      webCmdKState: { promptBar: void 0 },
      reviewState: {
        generatingState: "norequest",
        gitProviderState: "initializing",
        customInstructions: "",
        entryPoint: null,
        chunks: {},
        buttonState: { state: "working" },
      },
      inprogressAIGenerations: [],
      aiProjectSteps: [],
      runningGeneration: !1,
      showingErrorMetadata: { case: null, error: void 0 },
      hallucinatedFunctionsNonPersistentState: {
        locationChooserState: void 0,
        showingHfUuid: void 0,
      },
      showingUpdate: !1,
      inlineDiffs: [],
      simpleDiffs: [],
      repositoryMetadata: { startedPolling: !1 },
      cppPopupState: { cardState: void 0 },
      selectedTab: null,
      promptBars: [],
      maxTokensHit: !1,
      continueBubbles: [],
      lintState: {
        bugs: [],
        dismissedBugs: [],
        lastLintGenerationUuid: null,
        lastLintResult: zB.NONE,
        lastLintTimestamp: null,
        hoveringOverBugUuid: null,
      },
      cppState: {
        suggestion: void 0,
        additionalSuggestions: [],
        inProgressSuggestions: [],
        candidateSuggestions: {},
        shouldNotTrigger: !1,
        shouldNotTriggerFromInlineDiffReject: !1,
        peekViewSuggestion: void 0,
      },
      holdCppState: { isHoldingDownCmdK: !1 },
      showingDocsModal: !1,
      newDoc: void 0,
      shouldShowInsertChatWidget: !1,
      lastCopy: void 0,
      refactorDiffIDs: [],
      aiInterfaceState: { showingNewModal: !1, activeAgents: [] },
      nonPersistentTasksData: { backgroundTasks: [] },
      nonPersistentChatMetadata: [],
      feedbackState: { screenshots: [], description: void 0, type: void 0 },
      showUsageBasedPricingModal: void 0,
      showTurboModeModal: void 0,
      repoProgressBars: [],
      repositoryIndexingError: void 0,
      repositoryIndexingStatus: { case: "loading" },
      repositoryLastSyncedTime: void 0,
      cmdkBackgroundContextSelections: [],
      repositoryIndexingJobs: {},
      mainLocalRepositoryProgress: void 0,
      aiHyperModeData: {
        debug: !1,
        hyperRegionsMap: {},
        currentHyperRegion: void 0,
      },
      cursorMotionState: { bars: [] },
      contextGraphState: { relatedFiles: null },
      chatState: { isFocused: !1, recentlyViewedFiles: [] },
      semSearchState: { selectedFile: void 0, codeSelection: void 0 },
    };

  return {
    DOi,
    CWe,
    bkt,
    ei,
    pp,
    pae,
    W$,
    vkt,
    ykt,
    MG,
    wkt,
    SWe,
    TOi,
    Ckt,
    QTn,
    Skt,
    xkt,
    LOi,
    ZTn,
    NOi,
    ePn,
    AOi,
    MOi,
    $Oi,
    tPn,
    gae,
  }
}
