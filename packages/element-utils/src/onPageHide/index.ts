import createEventListener from '../createEventListener'

/**
 * 监听 pagehide 事件
 * @param callback 回调函数
 * @returns 清理函数
 */
const onPageHide = (
  callback: (e: PageTransitionEvent) => void
): (() => void) => {
  return createEventListener(window, 'pagehide', callback as (e: Event) => void)
}

export default onPageHide
