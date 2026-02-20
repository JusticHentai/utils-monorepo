import { createIntersectionObserver } from '../observer'
import type { OnLeaveViewportOptions } from './interface'

/**
 * 监听元素离开视口（一次性）
 *
 * @param target - 要观察的目标元素
 * @param callback - 元素离开视口时的回调
 * @param options - 观察器配置选项
 * @returns 清理函数
 */
const onLeaveViewport = (
  target: Element | null,
  callback: () => void,
  options?: OnLeaveViewportOptions
): (() => void) => {
  if (!target) return () => {}

  let hasBeenVisible = false

  const { stop } = createIntersectionObserver(
    target,
    ({ isIntersecting }) => {
      if (isIntersecting) {
        hasBeenVisible = true
        return
      }

      if (!hasBeenVisible) return

      callback()
      stop()
    },
    { ...options, immediate: true }
  )

  return stop
}

export default onLeaveViewport
