import type { BasicTarget, TargetType } from '../domTarget'

/** useEventListener 配置选项 */
export interface UseEventListenerOptions {
  /** 目标元素 */
  target?: BasicTarget<TargetType>
  /** 是否在捕获阶段触发 */
  capture?: boolean
  /** 是否只触发一次 */
  once?: boolean
  /** 是否为被动监听器 */
  passive?: boolean
}
