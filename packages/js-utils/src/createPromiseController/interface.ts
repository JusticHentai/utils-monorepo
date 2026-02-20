/**
 * Promise 控制器接口
 * 用于手动控制 Promise 的完成状态
 */
export interface PromiseController<T = void> {
  /** 完成通知函数，调用后会解决 Promise */
  resolve: (value: T | PromiseLike<T>) => void
  /** 拒绝通知函数，调用后会拒绝 Promise */
  reject: (reason?: any) => void
  /** 受控的 Promise，可以通过 resolve/reject 手动控制其状态 */
  promise: Promise<T>
}
