import type { ScrollTarget } from '../getScrollPosition/interface'

/**
 * 判断目标是否为可滚动元素（Window 或 Element）
 *
 * @param target - 事件目标
 * @returns 是否为可滚动目标（Window 或 Element）
 */
const isScrollTarget = (target: EventTarget): target is ScrollTarget =>
  target === window || target instanceof Element

export default isScrollTarget
