import createEventListener from '../createEventListener'

import { DOM_CONTENT_LOADED_EVENT, READY_STATE_LOADING } from './interface'

/**
 * 在 DOMContentLoaded 时执行回调
 * 如果 DOM 尚在加载，则监听 DOMContentLoaded 事件；否则立即执行回调
 * @param callback 回调函数
 * @returns 清理函数（移除事件监听）
 */
const onDOMContentLoaded = (callback: (e: Event) => void): (() => void) => {
  if (document.readyState === READY_STATE_LOADING) {
    return createEventListener(document, DOM_CONTENT_LOADED_EVENT, callback)
  }

  callback(new Event(DOM_CONTENT_LOADED_EVENT))
  return () => {}
}

export default onDOMContentLoaded
