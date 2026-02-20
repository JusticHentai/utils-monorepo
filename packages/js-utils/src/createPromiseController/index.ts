import { PromiseController } from './interface'

/**
 * 创建 Promise 控制器
 *
 * 提供手动控制 Promise 状态的能力，将 Promise 的 resolve 和 reject 函数暴露出来，
 * 允许在 Promise 创建后的任意时刻手动决定其完成或失败状态。
 *
 * 常用场景：
 * - 资源加载控制：等待外部资源加载完成
 * - 异步事件协调：等待特定事件触发
 * - 流程控制：手动控制异步流程的执行时机
 * - 状态同步：在复杂异步场景中同步不同组件的状态
 *
 * @template T Promise 解决值的类型，默认为 void
 * @returns Promise 控制器对象，包含 resolve、reject 函数和受控的 Promise
 */
const createPromiseController = <T = void>(): PromiseController<T> => {
  let resolveFunction: (value: T | PromiseLike<T>) => void
  let rejectFunction: (reason?: any) => void

  const promise = new Promise<T>((resolve, reject) => {
    resolveFunction = resolve
    rejectFunction = reject
  })

  return {
    resolve: resolveFunction!,
    reject: rejectFunction!,
    promise,
  }
}

export default createPromiseController
