// @ts-check

export class _A {
  U(requestType, methodName, args) {
    if (this.j) return new ndo()
    let cancellationToken = null
    if (
      (args.length > 0 &&
        Ze.isCancellationToken(args[args.length - 1]) &&
        (cancellationToken = args.pop()),
      cancellationToken && cancellationToken.isCancellationRequested)
    )
      return Promise.reject(NE())
    const serializedArgs = VD.serializeRequestArguments(args, this.h),
      requestId = ++this.s,
      requestIdStr = String(requestId),
      responsePromise = new oMs(),
      disposables = new J()
    cancellationToken &&
      disposables.add(
        cancellationToken.onCancellationRequested(() => {
          const u = VD.serializeCancel(requestId)
          this.f?.logOutgoing(u.byteLength, requestId, 0, "cancel"), this.c.send(u)
        }),
      ),
      (this.u[requestIdStr] = new udo(responsePromise, disposables)),
      this.F(requestId)
    const serializedRequest = VD.serializeRequest(requestId, requestType, methodName, serializedArgs, !!cancellationToken)
    return (
      this.f?.logOutgoing(serializedRequest.byteLength, requestId, 0, `request: ${SQe(requestType)}.${methodName}(`, args),
      this.c.send(serializedRequest),
      responsePromise
    )
  }
}