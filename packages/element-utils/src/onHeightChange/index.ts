import debounce from '../debounce'
import getElementSize from '../getElementSize'
import { createResizeObserver } from '../observer'
import type { OnHeightChangeCallback, OnHeightChangeOptions } from './interface'

/**
 * 监听元素高度变化（带防抖）
 *
 * @param target - 要观察的目标元素
 * @param callback - 高度变化时的回调
 * @param options - 配置选项
 * @returns 清理函数
 */
const onHeightChange = (
  target: Element | null,
  callback: OnHeightChangeCallback,
  options: OnHeightChangeOptions = {}
): (() => void) => {
  if (!target) return () => {}

  const { threshold = 0, delay = 0 } = options
  let prevHeight = getElementSize(target).height

  const handleChange = (height: number) => {
    const oldHeight = prevHeight
    prevHeight = height
    callback(height, oldHeight)
  }

  const debouncedChange =
    delay > 0 ? debounce({ cb: handleChange, duration: delay }) : handleChange

  const { stop } = createResizeObserver(target, ({ height }) => {
    if (Math.abs(height - prevHeight) <= threshold) return

    debouncedChange(height)
  })

  return stop
}

export default onHeightChange
