import { createIntersectionObserver } from '../observer'
import type { OnEnterViewportOptions } from './interface'

/**
 * 监听元素进入视口（一次性）
 *
 * @param target - 要观察的目标元素
 * @param callback - 元素进入视口时的回调
 * @param options - 观察器配置选项
 * @returns 清理函数
 */
const onEnterViewport = (
  target: Element | null,
  callback: () => void,
  options?: OnEnterViewportOptions
): (() => void) => {
  if (!target) return () => {}

  const { stop } = createIntersectionObserver(
    target,
    ({ isIntersecting }) => {
      if (!isIntersecting) return

      callback()
      stop()
    },
    { ...options, immediate: true }
  )

  return stop
}

export default onEnterViewport
