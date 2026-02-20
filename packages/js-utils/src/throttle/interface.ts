/** throttle 配置选项 */
export interface ThrottleOptions {
  /** 在节流开始前调用，默认 true */
  leading?: boolean
  /** 在节流结束后调用，默认 true */
  trailing?: boolean
}

/** 节流函数接口 */
export interface ThrottledFunc<T extends (...args: unknown[]) => unknown> {
  /** 调用节流函数 */
  (...args: Parameters<T>): ReturnType<T> | undefined
  /** 取消延迟的调用 */
  cancel: () => void
  /** 立即执行待处理的调用 */
  flush: () => ReturnType<T> | undefined
  /** 检查是否有待处理的调用 */
  pending: () => boolean
}
