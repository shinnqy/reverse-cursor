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
    isComposerBarChatCollapsed: false,
    composerBarPosition: null,
  },
  DOi = {
    isEnabled: false,
    explicitEnableOrDisable: undefined,
    preferredModelName: "o1-preview",
    lastBackgroundBugbotAt: undefined,
  },
  KTn = {
    isComposerEnabled2: true,
    alwaysKeepComposerInBound: true,
    location2: "pane",
    nonBarLocation: "pane",
    chatLocation: "pane",
    hasMigratedChatLocation: false,
    isBackgroundComposerEnabled: false,
    defaultCapabilities: [],
    barAnchor: "center",
    autoApplyFilesOutsideContext: true,
    shouldAutoContinueToolCall: false,
    useYoloMode: false,
    yoloPrompt: "",
    yoloCommandAllowlist: [],
    yoloCommandDenylist: [],
    preferDiffInChat: true,
    mainComposerMode: "edit",
    useAutoContext: false,
    useContextBank: false,
    defaultUseToolsInEdit: false,
    enableDataHandleDebugging: false,
    unification2: true,
    unification6: "disabled",
    shouldReviewChanges: "enabled",
    wasBarPreviouslyOpen: false,
    doNotShowYoloModeWarningAgain: false,
    selectedFakeStreamerId: null,
    yoloDeleteFileDisabled: false,
    isPlannerToolEnabled: false,
    isWebViewerToolEnabled: false,
    webViewerAllowNonLocalhost: false,
  },
  YTn = { isNotepadEnabled: true },
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
    return t === undefined ? false : POi.find((n) => t[n] === true) !== e
  }
  function ZTn(i) {
    for (const e of POi)
      i.setApplicationUserPersistentStorage("haveNotSeen", {
        ...i.applicationUserPersistentStorage.haveNotSeen,
        [e]: true,
      })
  }
  function NOi(i, e) {
    i.setApplicationUserPersistentStorage("haveNotSeen", {
      ...i.applicationUserPersistentStorage.haveNotSeen,
      [e]: false,
    })
  }
  var ROi = rt(),
    applicationUserPersistentStorageState = {
      composerState: { ...KTn },
      mcpServers: [],
      notepadState: { ...YTn },
      bugbotState: { ...DOi },
      aiFeaturesCopyPasteState: { mentions: [] },
      shouldShowViewZoneWhenPreviewBoxIsClipped4: false,
      syncDevModeColorTheme: true,
      cppModelsState: XTn,
      isLinterEnabled: false,
      aiSettings: {
        openAIModel: "claude-3.5-sonnet",
        regularChatModel: "claude-3.5-sonnet",
        cmdKModel: "claude-3.5-sonnet",
        terminalCmdKModel: "claude-3.5-sonnet",
        composerModel: "claude-3.5-sonnet",
        privateFTOpenAIModel: null,
        longContextOpenAIModel: "claude-3-5-sonnet-200k",
      },
      authenticationSettings: { githubLoggedIn: false },
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
      showAgentActionDebugger: false,
      cmdLineHookState: { ignored: false, timesShown: 0 },
      agentDebuggerState: { priomptLiveMode: false, isRecordingTasks: true },
      showLinterDebugger: false,
      linterDebuggerState: {
        specificRules: true,
        compileErrors: false,
        changeBehavior: true,
        matchCode: false,
        relevance: true,
        userAwareness: true,
      },
      cacheChatPrompts: true,
      cmdkDiffHistoryEnabled: false,
      shouldOnlyImportOnAccept: true,
      cppAutoImportDecorationStyle: "squiggle",
      lintSettings: {
        forceEnableDiscriminators: [],
        forceDisableDiscriminators: [],
        forceEnableGenerators: [],
        forceDisableGenerators: [],
        watcherThreshold: 0.2,
        watcherDebounceTimeSeconds: 30,
        runOnSaveInstead: true,
        silenceIfOverlappingWithRegularLinter: true,
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
      azureState: { useAzure: false },
      interpreterModeSettings: { interpreterModeByDefault: false },
      cppFireOnEveryCursorChange: false,
      personalDocs: [],
      chunkedStreamingEnabledV2: true,
      cppCachedTypeaheadEnabled: true,
      cppInCmdF: true,
      cppManualTriggerWithOpToken: false,
      cppTriggerInComments: true,
      cppShowWhitespaceOnlyChanges: false,
      fastCppEnabled: false,
      cppEnabled: true,
      cppConfig: undefined,
      indexRepository: true,
      haveNotImportedFromVSC: false,
      shouldAutoParseCmdKLinks: false,
      SPECIAL_KEY_lastUpdatedTimeInUnixSeconds: 0,
      aiHyperModeUXType: "auto-accept",
      aiPreviewsEnabled: true,
      aiPreviewSettings: {
        enabledFeatures: { summary: true, relatedFiles: true, relatedCommits: true },
        summary: { isExpanded: true },
        relatedFiles: { isExpanded: true },
        relatedCommits: { isExpanded: false },
      },
      chatFadeInAnimationEnabled: false,
      isFileSyncClientEnabled: true,
      membershipType: undefined,
      isAiReviewInputExpanded: true,
      useFastApplyModel: false,
      fastApplyModelType: F$.DEFAULT,
      explicitlyEnableSemanticSearch: false,
      aiCursorHelpEnabled: true,
      showAllCmdKContexts: false,
      aiDocAgentEnabled: false,
      markdownTestString: "",
      cppInPeek: true,
      fastSemanticSearchEnabled: false,
      preferredEmbeddingModel: x$.UNSPECIFIED,
      cursorPredictionUIExperiments: [],
      oneTimeSettings: {
        shouldDisableGithubCopilot: true,
        shouldMigrateFromGpt4ToGpt4o: true,
        shouldMigrateFromGpt4oToClaudeSonnet: true,
        didMigrateFromGpt4oToClaudeSonnet: false,
        didMigrateBackFromClaudeSonnetToGpt4o: false,
      },
      aiReviewPersistentStorage: { customInstructions: "" },
      indexingState: { lastAskedToIndexTime: 0 },
      turboModeOptions: { timesShownUpgradeMessage: 0 },
      internalAnalyticsDebugMode: false,
      fullContextOptions: { compress: true, hasDismissed: false },
    },
    AOi = [
      (i, e) =>
        e.isBashMode2 === true
          ? (delete e.isBashMode2,
            {
              ...e,
              isInterpreterMode: true,
              interpreterModeSettings: { interpreterModeByDefault: true },
            })
          : e,
      (i, e) =>
        e.cursorCreds?.cppBackendUrl === undefined
          ? { ...e, cursorCreds: { ...(e.cursorCreds ?? {}), cppBackendUrl: MG } }
          : e,
      (i, e) => (e.cppEnabled === undefined && (e.cppEnabled = true), e),
    ],
    MOi = {
      tasksData: {
        tasksDataSchemaVersion: 1,
        tasks: [{ type: "draft", taskId: ROi, instruction: "" }],
        displayedTaskId: ROi,
        showTabs: false,
        activeServerTaskUuids: [],
      },
      onboardingMetadata: { shouldAskToIndex: true, shouldHideWarning: false },
      hallucinatedFunctionsWorkspaceState: {},
      persistentChatMetadata: [],
      aiPanePosition: Yf.SIDEBAR,
      shouldRerankByDefault: false,
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
              ? { ...s, SPECIAL_KEY_doNotPersist: false }
              : s,
          )
          return { ...e, tasksData: { ...e.tasksData, tasks: t } }
        }
        return e
      },
      (i, e) =>
        !e.onboardingMetadata || !e.onboardingMetadata.shouldAskToIndex
          ? { ...e, onboardingMetadata: { shouldAskToIndex: true } }
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
    nonPersistentStorageState = {
      composerState: { infoBoxMessage: undefined },
      notepadState: { notepadEditorFocusSignal: undefined },
      aiReaderState: {},
      webCmdKState: { promptBar: undefined },
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
      runningGeneration: false,
      showingErrorMetadata: { case: null, error: undefined },
      hallucinatedFunctionsNonPersistentState: {
        locationChooserState: undefined,
        showingHfUuid: undefined,
      },
      showingUpdate: false,
      inlineDiffs: [],
      simpleDiffs: [],
      repositoryMetadata: { startedPolling: false },
      cppPopupState: { cardState: undefined },
      selectedTab: null,
      promptBars: [],
      maxTokensHit: false,
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
        suggestion: undefined,
        additionalSuggestions: [],
        inProgressSuggestions: [],
        candidateSuggestions: {},
        shouldNotTrigger: false,
        shouldNotTriggerFromInlineDiffReject: false,
        peekViewSuggestion: undefined,
      },
      holdCppState: { isHoldingDownCmdK: false },
      showingDocsModal: false,
      newDoc: undefined,
      shouldShowInsertChatWidget: false,
      lastCopy: undefined,
      refactorDiffIDs: [],
      aiInterfaceState: { showingNewModal: false, activeAgents: [] },
      nonPersistentTasksData: { backgroundTasks: [] },
      nonPersistentChatMetadata: [],
      feedbackState: { screenshots: [], description: undefined, type: undefined },
      showUsageBasedPricingModal: undefined,
      showTurboModeModal: undefined,
      repoProgressBars: [],
      repositoryIndexingError: undefined,
      repositoryIndexingStatus: { case: "loading" },
      repositoryLastSyncedTime: undefined,
      cmdkBackgroundContextSelections: [],
      repositoryIndexingJobs: {},
      mainLocalRepositoryProgress: undefined,
      aiHyperModeData: {
        debug: false,
        hyperRegionsMap: {},
        currentHyperRegion: undefined,
      },
      cursorMotionState: { bars: [] },
      contextGraphState: { relatedFiles: null },
      chatState: { isFocused: false, recentlyViewedFiles: [] },
      semSearchState: { selectedFile: undefined, codeSelection: undefined },
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
    applicationUserPersistentStorageState,
    AOi,
    MOi,
    $Oi,
    nonPersistentStorageState,
    gae,
  }
}
