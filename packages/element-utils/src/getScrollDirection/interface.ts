/** 滚动方向 */
export type ScrollDirection = 'up' | 'down' | 'left' | 'right' | 'none'

/** 滚动位置坐标 */
export interface ScrollPosition {
  /** 当前滚动位置 X */
  x: number
  /** 当前滚动位置 Y */
  y: number
}

/** 上一次滚动位置坐标 */
export interface PreviousPosition {
  /** 上一次滚动位置 X */
  lastX: number
  /** 上一次滚动位置 Y */
  lastY: number
}

/** getScrollDirection 配置选项 */
export interface GetScrollDirectionOptions extends ScrollPosition, PreviousPosition {}
