/**
 * Deferred Promise 类型
 */
export interface DeferredPromise<T = void> extends Promise<T> {
  resolve: (value: T | PromiseLike<T>) => void
  reject: (reason?: unknown) => void
}

/**
 * 创建一个 Deferred Promise
 * 可以在外部控制 Promise 的解决或拒绝
 * @returns Deferred Promise
 */
export const createDeferred = <T = void>(): DeferredPromise<T> => {
  const methods: Partial<Pick<DeferredPromise<T>, 'resolve' | 'reject'>> = {}

  const promise = new Promise<T>((resolve, reject) => {
    Object.assign(methods, { resolve, reject })
  }) as DeferredPromise<T>

  return Object.assign(promise, methods as Pick<DeferredPromise<T>, 'resolve' | 'reject'>)
}

export default createDeferred
