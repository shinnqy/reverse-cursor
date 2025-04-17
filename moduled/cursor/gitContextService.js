// @ts-check

export function createGitContextService(params) {
  const { Re, V, R, XN, U, __decorate, __param, it, fr, Ve } = params;

  var YC = Re("gitContextService"),
    YTt = class extends V {
      constructor(e, t) {
        super(),
          (this.b = e),
          (this.f = t),
          (this.a = undefined),
          (this._onDidRunGitStatus = this.D(new R())),
          (this.onDidRunGitStatus = this._onDidRunGitStatus.event)
      }
      async cleanupOldWorktrees() {
        this.a && (await this.a.cleanupOldWorktrees())
      }
      async waitForGitContextProvider() {
        for (; !this.a; ) await new Promise((e) => setTimeout(e, 500))
      }
      getGitFileBlameWithAbsolutePath(e, t) {
        throw new Error("Method not implemented.")
      }
      hasGitContextProvider() {
        return this.a !== undefined
      }
      registerGitContextProvider(e) {
        this.a = e
      }
      unregisterGitContextProvider() {
        this.a = undefined
      }
      async searchAllCommits(e) {
        if (!this.a) throw new Error("No commit search provider registered")
        return this.a.getCommits(e)
      }
      async getFullCommit(e) {
        if (!this.a) throw new Error("No full commit provider registered")
        return this.a.getFullCommit(e)
      }
      async getFullCommitProto(e) {
        const t = await this.getFullCommit(e)
        if (t)
          return new XN({
            sha: t.sha,
            message: t.message,
            description: t.description,
            diff: t.diff.map((s) => ({
              from: s.from,
              to: s.to,
              chunks: s.chunks.map((n) => ({
                content: n.content,
                lines: n.changes.map((r) => r.content),
              })),
            })),
            author: t.author,
            date: t.date,
          })
      }
      async searchAllPrs(e) {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.getPullRequests(e)
      }
      async getFullPr(e) {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a?.getFullPullRequest(e)
      }
      async getBranchDiff(e) {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.getBranchDiff({ ...e, cwd: e?.cwd?.fsPath })
      }
      async getGitRoot(e) {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.getGitRoot(e)
      }
      async getDiffRaw() {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.getDiffRaw()
      }
      async getLastCommit() {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.getLastCommit()
      }
      async getLastCommits(e, t = 0) {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.getLastCommits(e, t)
      }
      async getGitDiff() {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.getCurrentDiff()
      }
      async getGitLineBlameWithRelativePath(e, t, s) {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.getGitLineBlame(e, t, s)
      }
      async getGitLineBlameWithAbsolutePath(e, t, s) {
        if (!this.a) throw new Error("No full commit provider registered")
        const n = this.b.asRelativePath(U.file(e))
        return this.getGitLineBlameWithRelativePath(n, t, s)
      }
      async getGitFileBlameWithRelativePath(e, t) {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.getGitFileBlame(e, t)
      }
      async getGitUpstreamURL() {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.getGitUpstreamURL()
      }
      async getFileContentAtRef(e, t, s) {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.getFileContentAtRef(e, t, s)
      }
      async getCommitRawByCommitHash(e, t) {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.getCommitRawByCommitHash(e, t)
      }
      async createWorktree(e) {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.createWorktree(e)
      }
      async syncWorktreeToBranch(e, t) {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.syncWorktreeToBranch(e, t)
      }
      async syncBranchToWorktree(e, t) {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.syncBranchToWorktree(e, t)
      }
      async removeWorktree(e) {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.removeWorktree(e)
      }
      async listAllWorktrees() {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.listAllWorktrees()
      }
      async getFilenamesInCommit(e) {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.getFilenamesInCommit(e)
      }
      async getCurrentBranch() {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.getCurrentBranch()
      }
      async getDefaultBranch() {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.getDefaultBranch()
      }
      async getGitUser() {
        if (!this.a) throw new Error("No full commit provider registered")
        return await this.a.getGitUser()
      }
    }
  ;(YTt = __decorate([__param(0, it), __param(1, fr)], YTt)), Ve(YC, YTt, 1);

  return {
    YC,
  };
}
