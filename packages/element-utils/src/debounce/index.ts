import { DebounceOptions } from './interface'

/**
 * 防抖
 * 如果 immediate 为 true，则立即执行 cb，然后开始计时，duration 内执行会重新计时
 * 如果 immediate 为 false，则不会立即执行 cb，开始计时，duration 内执行会重新计时
 */
const debounce = (options: DebounceOptions) => {
  const { cb, duration, immediate } = options

  let timeout: ReturnType<typeof setTimeout> | null = null
  let canExecute = true
  let pendingParams: any[] | null = null

  return (...params: any[]) => {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }

    if (immediate) {
      if (canExecute) {
        cb(...params)
        canExecute = false
      }

      timeout = setTimeout(() => {
        timeout = null
        canExecute = true
      }, duration)
    } else {
      pendingParams = params
      timeout = setTimeout(() => {
        if (pendingParams) {
          cb(...pendingParams)
          pendingParams = null
        }
        timeout = null
      }, duration)
    }
  }
}

export default debounce
