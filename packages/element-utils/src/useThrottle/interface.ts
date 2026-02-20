/**
 * useThrottle Hook 配置项
 */
export interface UseThrottleOptions {
  /** 节流延迟时间（毫秒） */
  delay: number
  /** 是否在开始时立即执行，默认 true */
  leading?: boolean
  /** 是否在结束时执行，默认 true */
  trailing?: boolean
}

/**
 * useThrottle Hook 返回值
 */
export interface UseThrottleReturn<T extends (...args: any[]) => any> {
  /** 节流后的函数 */
  run: (...args: Parameters<T>) => void
  /** 取消节流 */
  cancel: () => void
  /** 立即执行 */
  flush: () => void
  /** 是否处于节流中 */
  isPending: () => boolean
}
