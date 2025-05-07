// @ts-check

module.exports = {
  createModelLockManagerModule,
}

function createModelLockManagerModule(module, exports, require) {
  Object.defineProperty(exports, "__esModule", { value: !0 }),
    (exports.ModelLockManager = exports.Lock = void 0)
  const r = require(7527)
  class s {
    constructor() {
      ;(this.isLocked = !1), (this.queue = [])
    }
    async acquire() {
      return new Promise((e) => {
        this.isLocked
          ? this.queue.push(() => {
              ;(this.isLocked = !0), e(this.release.bind(this))
            })
          : ((this.isLocked = !0), e(this.release.bind(this)))
      })
    }
    release() {
      this.isLocked = !1
      const e = this.queue.shift()
      e && e()
    }
  }
  ;(exports.Lock = s),
    (exports.ModelLockManager = class {
      constructor(e = 100) {
        this.locks = new r.LRUCache(e)
      }
      async acquireLock(e) {
        let t = this.locks.get(e)
        return t || ((t = new s()), this.locks.set(e, t)), t.acquire()
      }
    })
}
