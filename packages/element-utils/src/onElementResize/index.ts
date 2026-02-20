import debounce from '../debounce'
import { createResizeObserver } from '../observer'
import type { ResizeCallback } from './interface'

/**
 * 监听元素尺寸变化（带防抖）
 *
 * @param target - 要观察的目标元素
 * @param callback - 尺寸变化时的回调
 * @param delay - 防抖延迟时间（毫秒）
 * @returns 清理函数
 */
const onElementResize = (
  target: Element | null,
  callback: ResizeCallback,
  delay = 0
): (() => void) => {
  if (!target) return () => {}

  const debouncedCallback: ResizeCallback =
    delay > 0 ? debounce({ cb: callback, duration: delay }) : callback

  const { stop } = createResizeObserver(target, debouncedCallback)

  return stop
}

export default onElementResize
