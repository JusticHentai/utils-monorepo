import type { VisibilityOptions } from './interface'
import { VisibilityState } from './interface'

/**
 * 监听 visibilitychange 事件
 * @param options 配置项
 * @param options.visible 页面可见时触发
 * @param options.hidden 页面不可见时触发
 * @param options.once 是否只执行一次，默认 false
 * @param options.safariCompat 是否兼容 Safari 的 pagehide 事件，默认 false
 * @returns 移除事件的函数
 */
const visibility = (options?: VisibilityOptions) => {
  const { visible, hidden, once = false, safariCompat = false } = options || {}
  let executed = false

  const fn = () => {
    if (once && executed) return

    if (document.visibilityState === VisibilityState.Visible) {
      visible?.()
    } else {
      executed = true
      hidden?.()
      if (once) {
        cleanup()
      }
    }
  }

  document.addEventListener('visibilitychange', fn)

  // Safari 兼容处理：Safari 不触发 visibilitychange，需要监听 pagehide
  const pagehideHandler = safariCompat
    ? () => {
        if (once && executed) return
        executed = true
        hidden?.()
      }
    : null

  if (pagehideHandler) {
    window.addEventListener(
      'pagehide',
      pagehideHandler,
      once ? { once: true, capture: true } : { capture: true }
    )
  }

  const cleanup = () => {
    document.removeEventListener('visibilitychange', fn)

    if (pagehideHandler) {
      window.removeEventListener('pagehide', pagehideHandler, { capture: true })
    }
  }

  return cleanup
}

export default visibility
