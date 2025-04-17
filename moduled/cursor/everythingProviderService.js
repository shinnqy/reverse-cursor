// @ts-check

export function createEverythingProviderService(params) {
  const { Re, V, Ve} = params;

  var everythingProviderService = Re("everythingProviderService"),
    _8n = class extends V {
      constructor() {
        super()
      }
      registerEverythingProvider(i) {
        this.provider = i
      }
      unregisterEverythingProvider() {
        this.provider = undefined
      }
      registerEverythingProviderAllLocal(i) {
        this.onlyLocalProvider = i
      }
      unregisterEverythingProviderAllLocal() {
        this.onlyLocalProvider = undefined
      }
      async waitForEverythingProvider(i) {
        return this.provider
          ? this.provider
          : new Promise((e, t) => {
              const s = Date.now(),
                n = () => {
                  if (this.provider) {
                    e(this.provider)
                    return
                  }
                  if (Date.now() - s >= i) {
                    t(new Error("Timeout waiting for EverythingProvider"))
                    return
                  }
                  setTimeout(n, 100)
                }
              n()
            })
      }
    }
  Ve(everythingProviderService, _8n, 1);

  return {
    everythingProviderService,
  }
}
