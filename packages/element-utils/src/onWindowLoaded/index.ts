import sleep from '@justichentai/js-utils/sleep'

import createEventListener from '../createEventListener'

import { LOAD_EVENT, READY_STATE_COMPLETE } from './interface'

/**
 * 在窗口加载完成时执行回调
 * 如果页面尚未加载完成，则监听 load 事件；否则立即执行回调
 *
 * 回调会延迟一个微任务执行（await sleep(0)），确保浏览器在 load 事件触发后
 * 完成所有同步的性能条目（如 PerformanceNavigationTiming）写入，
 * 避免回调中读取到不完整的性能数据。
 *
 * @param callback 回调函数
 * @returns 清理函数（移除事件监听）
 */
const onWindowLoaded = (callback: (e: Event) => void): (() => void) => {
  const wrappedCallback = async (e: Event) => {
    // 延迟一个宏任务，等待浏览器完成性能条目写入后再执行回调
    await sleep(0)
    callback(e)
  }

  if (document.readyState !== READY_STATE_COMPLETE) {
    return createEventListener(window, LOAD_EVENT, wrappedCallback)
  }

  wrappedCallback(new Event(LOAD_EVENT))
  return () => {}
}

export default onWindowLoaded
