import createEventListener from '../createEventListener'

/**
 * 监听页面 freeze 事件（Page Lifecycle API）
 * @param callback 回调函数
 * @returns 清理函数
 */
const onPageFreeze = (callback: (e: Event) => void): (() => void) => {
  return createEventListener(document, 'freeze', callback)
}

export default onPageFreeze
