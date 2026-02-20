import createEventListener from '../createEventListener'

/**
 * 监听窗口 blur 事件
 * @param callback 回调函数
 * @returns 清理函数
 */
const onWindowBlur = (callback: (e: FocusEvent) => void): (() => void) => {
  return createEventListener(window, 'blur', callback as (e: Event) => void)
}

export default onWindowBlur
