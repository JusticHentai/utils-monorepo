/**
 * useDebounce Hook 配置项
 */
export interface UseDebounceOptions {
  /** 防抖延迟时间（毫秒） */
  delay: number
  /** 是否立即执行 */
  immediate?: boolean
  /** 最大等待时间（毫秒），超过此时间强制执行 */
  maxWait?: number
}

/**
 * useDebounce Hook 返回值
 */
export interface UseDebounceReturn<T extends (...args: any[]) => any> {
  /** 防抖后的函数 */
  run: (...args: Parameters<T>) => void
  /** 取消防抖 */
  cancel: () => void
  /** 立即执行 */
  flush: () => void
  /** 是否处于等待状态 */
  isPending: () => boolean
}
