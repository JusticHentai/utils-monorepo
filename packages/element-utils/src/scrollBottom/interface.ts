/** 滚动到底部回调函数 */
export type ScrollBottomCallback = (...params: any[]) => any

/** scrollBottom 配置选项 */
export interface ScrollBottomOptions {
  /** 滚动到底部的阈值（像素），默认0表示严格底部 */
  threshold?: number
  /** 节流时间（毫秒），默认0不节流 */
  throttle?: number
}

/** 清理函数 */
export type ScrollBottomCleanup = () => void
