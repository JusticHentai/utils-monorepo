import createEventListener from '../createEventListener'

/**
 * 监听 hashchange 事件（URL hash 变化）
 * @param callback 回调函数
 * @returns 清理函数
 */
const onHashChange = (callback: (e: HashChangeEvent) => void): (() => void) => {
  return createEventListener(
    window,
    'hashchange',
    callback as (e: Event) => void
  )
}

export default onHashChange
