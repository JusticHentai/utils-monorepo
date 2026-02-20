import createEventListener from '../createEventListener'

/**
 * 监听窗口 unload 事件
 * @param callback 回调函数
 * @returns 清理函数
 */
const onUnload = (callback: (e: Event) => void): (() => void) => {
  return createEventListener(window, 'unload', callback)
}

export default onUnload
