import type { BasicTarget } from '../domTarget'

export type { KeyFilter, KeyPredicate, KeyType } from '../onKeyPress/interface'

/** 键盘事件类型 */
export type KeyEvent = 'keydown' | 'keyup'

/** 目标元素类型 */
export type Target = BasicTarget<HTMLElement | Document | Window>

/** useKeyPress 配置选项 */
export interface UseKeyPressOptions {
  /** 触发事件 */
  events?: KeyEvent[]
  /** 目标元素 */
  target?: Target
  /** 精确匹配 */
  exactMatch?: boolean
  /** 使用捕获阶段 */
  useCapture?: boolean
}
