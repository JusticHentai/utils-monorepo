import debounce from '../debounce'
import getElementSize from '../getElementSize'
import { createResizeObserver } from '../observer'
import type { OnWidthChangeCallback, OnWidthChangeOptions } from './interface'

/**
 * 监听元素宽度变化（带防抖）
 *
 * @param target - 要观察的目标元素
 * @param callback - 宽度变化时的回调
 * @param options - 配置选项
 * @returns 清理函数
 */
const onWidthChange = (
  target: Element | null,
  callback: OnWidthChangeCallback,
  options: OnWidthChangeOptions = {}
): (() => void) => {
  if (!target) return () => {}

  const { threshold = 0, delay = 0 } = options
  let prevWidth = getElementSize(target).width

  const handleChange = (width: number) => {
    const oldWidth = prevWidth
    prevWidth = width
    callback(width, oldWidth)
  }

  const debouncedChange =
    delay > 0 ? debounce({ cb: handleChange, duration: delay }) : handleChange

  const { stop } = createResizeObserver(target, ({ width }) => {
    if (Math.abs(width - prevWidth) <= threshold) return

    debouncedChange(width)
  })

  return stop
}

export default onWidthChange
