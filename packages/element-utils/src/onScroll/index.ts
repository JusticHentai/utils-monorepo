import createEventListener from '../createEventListener'
import getScrollDirection from '../getScrollDirection'
import getScrollPosition from '../getScrollPosition'
import isBrowser from '../isBrowser'
import isScrollTarget from '../isScrollTarget'
import supportPassiveEvents from '../supportPassiveEvents'
import throttle from '../throttle'
import type { CleanupFn, OnScrollOptions, ScrollParams } from './interface'

/**
 * 监听滚动事件
 *
 * @param target - 滚动目标，默认为 window
 * @param callback - 滚动回调
 * @param options - 配置选项
 * @returns 清理函数
 */
const onScroll = (
  target: EventTarget | null = typeof window !== 'undefined' ? window : null,
  callback: (params: ScrollParams) => void,
  options?: OnScrollOptions
): CleanupFn => {
  if (!isBrowser() || !target || !isScrollTarget(target)) return () => {}

  const { throttle: throttleMs = 0, immediate = false } = options || {}

  let lastX = 0
  let lastY = 0

  const executeCallback = () => {
    const pos = getScrollPosition(target)
    const direction = getScrollDirection({ x: pos.x, y: pos.y, lastX, lastY })
    callback({ ...pos, direction })
    lastX = pos.x
    lastY = pos.y
  }

  const handler =
    throttleMs > 0
      ? throttle({
          cb: executeCallback,
          duration: throttleMs,
          immediate: true,
        })
      : executeCallback

  // 初始化位置
  const initPos = getScrollPosition(target)
  lastX = initPos.x
  lastY = initPos.y

  if (immediate) {
    callback({ ...initPos, direction: 'none' })
  }

  const passive = supportPassiveEvents()
  return createEventListener(target, 'scroll', handler, {
    passive,
    capture: false,
  })
}

export default onScroll
