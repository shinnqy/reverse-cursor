J(actorId, actorName) {
  const handler = {
    get: (target, methodName) => (
      typeof methodName == "string" &&
        !target[methodName] &&
        methodName.charCodeAt(0) === 36 &&
        (target[methodName] = (...o) => this.U(actorId, methodName, o)),
      methodName === rpcProxySymbol ? actorName : target[methodName]
    ),
  }
  return new Proxy(Object.create(null), handler)
}