/** debounce 配置选项 */
export interface DebounceOptions {
  /** 在延迟开始前调用，默认 false */
  leading?: boolean
  /** 在延迟结束后调用，默认 true */
  trailing?: boolean
  /** 最大等待时间 */
  maxWait?: number
}

/** 防抖函数接口 */
export interface DebouncedFunc<T extends (...args: unknown[]) => unknown> {
  /** 调用防抖函数 */
  (...args: Parameters<T>): ReturnType<T> | undefined
  /** 取消延迟的调用 */
  cancel: () => void
  /** 立即执行待处理的调用 */
  flush: () => ReturnType<T> | undefined
  /** 检查是否有待处理的调用 */
  pending: () => boolean
}
