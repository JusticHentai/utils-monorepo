import createEventListener from '../createEventListener'

/**
 * 监听页面 resume 事件（Page Lifecycle API）
 * @param callback 回调函数
 * @returns 清理函数
 */
const onPageResume = (callback: (e: Event) => void): (() => void) => {
  return createEventListener(document, 'resume', callback)
}

export default onPageResume
