import { Options } from './interface'

/**
 * 防抖
 * 如果 immediate 为 true，则立即执行 cb，然后开始计时，duration 内执行会重新计时
 * 如果 immediate 为 false，则不会立即执行 cb，开始计时，duration 内执行会重新计时
 */
const debounce = (options: Options) => {
  const { cb, duration, immediate } = options

  let timeout: number | null = null

  return (...params: any[]) => {
    if (timeout) clearTimeout(timeout)

    if (immediate) {
      const callNow = !timeout

      timeout = setTimeout(() => {
        timeout = null
      }, duration)

      callNow && cb(...params)
    } else {
      timeout = setTimeout(() => {
        cb(...params)
        timeout = null
      }, duration)
    }
  }
}

export default debounce
