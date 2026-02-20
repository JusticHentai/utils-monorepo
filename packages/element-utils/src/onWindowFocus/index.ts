import createEventListener from '../createEventListener'

/**
 * 监听窗口 focus 事件
 * @param callback 回调函数
 * @returns 清理函数
 */
const onWindowFocus = (callback: (e: FocusEvent) => void): (() => void) => {
  return createEventListener(window, 'focus', callback as (e: Event) => void)
}

export default onWindowFocus
