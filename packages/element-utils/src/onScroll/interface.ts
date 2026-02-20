/** 清理函数 */
export type CleanupFn = () => void

/** 滚动方向（从 getScrollDirection 重导出） */
export type { ScrollDirection } from '../getScrollDirection/interface'

/** 滚动位置回调参数 */
export interface ScrollParams {
  /** 滚动位置 X */
  x: number
  /** 滚动位置 Y */
  y: number
  /** 滚动方向 */
  direction: import('../getScrollDirection/interface').ScrollDirection
}

/** onScroll 配置选项 */
export interface OnScrollOptions {
  /** 节流时间（毫秒），默认 0 不节流 */
  throttle?: number
  /** 是否立即执行一次回调，默认 false */
  immediate?: boolean
}
