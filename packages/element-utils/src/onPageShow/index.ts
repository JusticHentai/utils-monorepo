import createEventListener from '../createEventListener'

/**
 * 监听 pageshow 事件
 * @param callback 回调函数
 * @returns 清理函数
 */
const onPageShow = (
  callback: (e: PageTransitionEvent) => void
): (() => void) => {
  return createEventListener(window, 'pageshow', callback as (e: Event) => void)
}

export default onPageShow
