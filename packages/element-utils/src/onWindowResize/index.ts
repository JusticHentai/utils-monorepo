import createEventListener from '../createEventListener'
import getWindowSize from '../getWindowSize'
import isBrowser from '../isBrowser'
import throttle from '../throttle'
import type { CleanupFn, OnWindowResizeOptions, WindowResizeParams } from './interface'

/**
 * 监听窗口尺寸变化
 *
 * @param callback - 尺寸变化回调
 * @param options - 配置选项
 * @returns 清理函数
 */
const onWindowResize = (
  callback: (params: WindowResizeParams) => void,
  options?: OnWindowResizeOptions
): CleanupFn => {
  if (!isBrowser()) return () => {}

  const { immediate = false, throttle: throttleMs = 0 } = options || {}

  const handler =
    throttleMs > 0
      ? throttle({
          cb: () => callback(getWindowSize()),
          duration: throttleMs,
          immediate: true,
        })
      : () => callback(getWindowSize())

  if (immediate) {
    callback(getWindowSize())
  }

  return createEventListener(window, 'resize', handler, {
    passive: true,
  })
}

export default onWindowResize
