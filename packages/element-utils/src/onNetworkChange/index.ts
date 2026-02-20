import createEventListener from '../createEventListener'
import isBrowser from '../isBrowser'
import type { CleanupFn } from './interface'

/**
 * 监听网络状态变化
 *
 * @param callback - 网络状态变化回调，参数为是否在线
 * @returns 清理函数
 */
const onNetworkChange = (callback: (online: boolean) => void): CleanupFn => {
  if (!isBrowser()) return () => {}

  const cleanups = [
    createEventListener(window, 'online', () => callback(true)),
    createEventListener(window, 'offline', () => callback(false)),
  ]

  return () => cleanups.forEach((cleanup) => cleanup())
}

export default onNetworkChange
