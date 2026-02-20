import type { BasicTarget } from '../domTarget'

/** 滚动位置 */
export interface Position {
  left: number
  top: number
}

/** 目标元素类型 */
export type Target = BasicTarget<Element | Document>

/** 滚动监听控制器 */
export type ScrollListenController = (val: Position) => boolean
