import createEventListener from '../createEventListener'

/**
 * 监听 popstate 事件（浏览器前进/后退）
 * @param callback 回调函数
 * @returns 清理函数
 */
const onPopState = (callback: (e: PopStateEvent) => void): (() => void) => {
  return createEventListener(window, 'popstate', callback as (e: Event) => void)
}

export default onPopState
