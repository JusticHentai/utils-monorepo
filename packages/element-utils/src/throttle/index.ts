import { ThrottleOptions } from './interface'

/**
 * 节流
 * 如果 immediate 为 true，则立即执行 cb，然后开始计时，duration 后才能再次执行 cb
 * 如果 immediate 为 false，则不会立即执行 cb，直到 duration 后才能执行 cb
 */
const throttle = (options: ThrottleOptions) => {
  const { cb, duration, immediate } = options

  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...params: any[]) => {
    if (timeout) {
      return
    }

    if (immediate) {
      const callNow = !timeout

      timeout = setTimeout(() => {
        timeout = null
      }, duration)

      if (callNow) {
        cb(...params)
      }
    } else {
      timeout = setTimeout(() => {
        cb(...params)
        timeout = null
      }, duration)
    }
  }
}

export default throttle
