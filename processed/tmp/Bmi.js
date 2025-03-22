// @ts-check

class Bmi extends Disposable {
  static {
      staticProperty = localSymbol; // ldo可能是局部符号
  }
  static {
      this.staticTimeout = 3 * 1e3; // 静态超时时间
  }

  constructor(channel, logger = null, uriTransformer = null) {
      super();
      this[staticProperty] = true;
      this._eventEmitter = this._register(new EventEmitter()); // R → EventEmitter
      this.onDidChangeResponsiveState = this._eventEmitter.event;
      this._channel = channel;
      this._logger = logger;
      this._uriTransformer = uriTransformer;
      this._transformURIs = getUriTransformer(this._uriTransformer); // odo → getUriTransformer
      this._disposed = false;
      this._actors = []; // m → 存储已注册的Actor实例
      this._proxies = []; // q → 存储代理对象

      for (let i = 0, count = ActorRegistry.count; i < count; i++) {
          this._actors[i] = null;
          this._proxies[i] = null;
      }

      this._currentRequestId = 0; // s → 请求ID计数器
      this._cancellationHandlers = Object.create(null); // t → 取消回调映射
      this._pendingRequests = {}; // u → 等待中的请求
      this._responsiveState = 0; // w → 响应状态
      this._pendingRequestCount = 0; // y → 进行中的请求数
      this._nextStateUpdateTime = 0; // z → 下次状态更新时间戳
      this._stateUpdateScheduler = this._register(new DebounceScheduler(() => this._checkStateUpdate(), 1e3)); // Ps → DebounceScheduler
      this._register(this._channel.onMessage((data) => this._handleMessage(data)));
  }

  dispose() {
      this._disposed = true;
      Object.keys(this._pendingRequests).forEach((requestId) => {
          const pendingRequest = this._pendingRequests[requestId];
          delete this._pendingRequests[requestId];
          pendingRequest.rejectErr(createCancellationError()); // NE → createCancellationError
      });
      super.dispose();
  }

  drain() {
      return typeof this._channel.drain === "function"
          ? this._channel.drain()
          : Promise.resolve();
  }

  _incrementPendingRequest(requestId) {
      if (this._pendingRequestCount === 0) {
          this._nextStateUpdateTime = Date.now() + Bmi.staticTimeout;
      }
      this._pendingRequestCount++;
      if (!this._stateUpdateScheduler.isScheduled()) {
          this._stateUpdateScheduler.schedule();
      }
  }

  _decrementPendingRequest(requestId) {
      this._nextStateUpdateTime = Date.now() + Bmi.staticTimeout;
      this._pendingRequestCount--;
      if (this._pendingRequestCount === 0) {
          this._stateUpdateScheduler.cancel();
      }
      this._updateResponsiveState(0);
  }

  _checkStateUpdate() {
      if (this._pendingRequestCount !== 0) {
          Date.now() > this._nextStateUpdateTime
              ? this._updateResponsiveState(1) // 进入非响应状态
              : this._stateUpdateScheduler.schedule();
      }
  }

  _updateResponsiveState(newState) {
      if (this._responsiveState !== newState) {
          this._responsiveState = newState;
          this._eventEmitter.fire(this._responsiveState);
      }
  }

  get responsiveState() {
      return this._responsiveState;
  }

  transformIncomingURIs(uris) {
      return this._uriTransformer
          ? mapURIs(uris, this._uriTransformer) // mge → mapURIs
          : uris;
  }

  getProxy(actorDescriptor) {
      const { nid: actorId, sid: actorName } = actorDescriptor;
      return this._proxies[actorId] || (this._proxies[actorId] = this._createProxy(actorId, actorName)), this._proxies[actorId];
  }

  _createProxy(actorId, actorName) {
      const handler = {
          get: (target, methodName) => {
              if (typeof methodName === "string" &&
                  !target[methodName] &&
                  methodName.charCodeAt(0) === 36 // '$'字符
              ) {
                  target[methodName] = (...args) => this._sendRequest(actorId, methodName, args);
              }
              return methodName === ActorSymbol ? actorName : target[methodName]; // cdo → ActorSymbol
          },
      };
      return new Proxy(Object.create(null), handler);
  }

  registerActor(actorId, instance) {
      return (this._actors[actorId] = instance), instance;
  }

  assertRegistered(actors) {
      for (let i = 0, len = actors.length; i < len; i++) {
          const actor = actors[i];
          if (!this._actors[actor.nid]) {
              throw new Error(`Missing proxy instance ${actor.sid}`);
          }
      }
  }

  _handleMessage(data) {
      if (this._disposed) return;

      const byteLength = data.byteLength;
      const buffer = DataReader.read(data, 0); // Xg → DataReader
      const messageType = buffer.readUInt8();
      const requestId = buffer.readUInt32();

      switch (messageType) {
          // 处理各类消息类型...
          case 1: /* 处理请求 */ break;
          case 5: /* 确认 */ break;
          case 9: /* 成功响应 */ break;
          // 其他case处理...
      }
  }

  _sendRequest(actorId, methodName, args) {
      if (this._disposed) return new CancelledPromise(); // ndo → CancelledPromise

      let cancellationToken = null;
      if (args.length > 0 && CancellationToken.is(args[args.length - 1])) {
          cancellationToken = args.pop();
      }
      if (cancellationToken?.isCancellationRequested) {
          return Promise.reject(createCancellationError());
      }

      const serializedArgs = ArgumentSerializer.serialize(args, this._transformURIs); // VD → ArgumentSerializer
      const requestId = ++this._currentRequestId;
      const requestKey = String(requestId);
      const promise = new ControlledPromise(); // oMs → ControlledPromise
      const disposables = new DisposableCollection(); // J → DisposableCollection

      if (cancellationToken) {
          disposables.add(
              cancellationToken.onCancellationRequested(() => {
                  const cancelData = ArgumentSerializer.serializeCancel(requestId);
                  this._logger?.logOutgoing(cancelData.byteLength, requestId, 0, "cancel");
                  this._channel.send(cancelData);
              })
          );
      }

      this._pendingRequests[requestKey] = new PendingRequest(promise, disposables); // udo → PendingRequest
      this._incrementPendingRequest(requestId);

      const requestData = ArgumentSerializer.serializeRequest(
          requestId,
          actorId,
          methodName,
          serializedArgs,
          !!cancellationToken
      );

      this._logger?.logOutgoing(
          requestData.byteLength,
          requestId,
          0,
          `request: ${getActorName(actorId)}.${methodName}(`,
          args
      );

      this._channel.send(requestData);
      return promise;
  }
}