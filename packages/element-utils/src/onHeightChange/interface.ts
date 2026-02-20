/**
 * onHeightChange 配置选项
 */
export interface OnHeightChangeOptions {
  /** 变化阈值，低于此值不触发（默认 0） */
  threshold?: number
  /** 防抖延迟时间（毫秒，默认 0） */
  delay?: number
}

/**
 * onHeightChange 回调函数类型
 */
export type OnHeightChangeCallback = (height: number, prevHeight: number) => void
