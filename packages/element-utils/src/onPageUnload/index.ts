import createEventListener from '../createEventListener'
import isBrowser from '../isBrowser'
import type { CleanupFn } from './interface'

/**
 * 监听页面卸载
 *
 * @param callback - 卸载回调函数
 * @param useSafeMethod - 是否使用安全方法（pagehide 代替 beforeunload），默认 true
 * @returns 清理函数
 */
const onPageUnload = (
  callback: () => void,
  useSafeMethod = true
): CleanupFn => {
  if (!isBrowser()) return () => {}

  if (useSafeMethod) {
    // pagehide 在移动端更可靠
    return createEventListener(window, 'pagehide', callback)
  }

  return createEventListener(window, 'beforeunload', callback)
}

export default onPageUnload
