import createEventListener from '../createEventListener'
import isBrowser from '../isBrowser'
import type { BFCacheRestoreCallback, CleanupFn } from './interface'

/**
 * 监听 BFCache 恢复事件
 *
 * 当用户通过浏览器的前进/后退按钮返回页面时，如果页面被缓存在 BFCache 中，
 * 会触发 pageshow 事件且 event.persisted 为 true。
 *
 * @param callback - BFCache 恢复回调函数
 * @returns 清理函数
 */
const onBFCacheRestore = (callback: BFCacheRestoreCallback): CleanupFn => {
  if (!isBrowser()) return () => {}

  const handler = (event: PageTransitionEvent) => {
    if (!event.persisted) return

    callback(event)
  }

  return createEventListener(
    window,
    'pageshow',
    handler as (event: WindowEventMap['pageshow']) => void
  )
}

export default onBFCacheRestore
