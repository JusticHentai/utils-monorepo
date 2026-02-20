import type { ThrottledFunc, ThrottleOptions } from './interface'

/**
 * 创建一个节流函数，在 wait 毫秒内最多执行 func 一次
 * @param func - 要节流的函数
 * @param wait - 节流的毫秒数，默认 0
 * @param options - 配置选项
 * @returns 返回节流函数
 * @example
 * // 避免滚动时频繁计算
 * window.addEventListener('scroll', throttle(updatePosition, 100))
 *
 * // 在点击时立即调用，并确保每秒最多调用一次
 * const clickHandler = throttle(submitForm, 1000)
 */
const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait = 0,
  options: ThrottleOptions = {}
): ThrottledFunc<T> => {
  const { leading = true, trailing = true } = options

  let timerId: ReturnType<typeof setTimeout> | undefined
  let lastArgs: Parameters<T> | undefined
  let result: ReturnType<T> | undefined
  let lastInvokeTime = 0

  const invokeFunc = (): ReturnType<T> | undefined => {
    const args = lastArgs

    lastArgs = undefined
    lastInvokeTime = Date.now()
    result = func(...args!) as ReturnType<T>
    return result
  }

  const remainingWait = (): number => {
    const elapsed = Date.now() - lastInvokeTime
    return Math.max(wait - elapsed, 0)
  }

  const timerExpired = (): void => {
    timerId = undefined

    // 只有在 trailing 为 true 且有待处理的调用时才执行
    if (trailing && lastArgs) {
      invokeFunc()
      // 设置下一个定时器以处理可能的后续调用
      if (lastArgs) {
        timerId = setTimeout(timerExpired, wait)
      }
    }
  }

  const shouldInvoke = (): boolean => {
    const elapsed = Date.now() - lastInvokeTime
    return elapsed >= wait
  }

  const cancel = (): void => {
    if (timerId !== undefined) {
      clearTimeout(timerId)
    }
    lastInvokeTime = 0
    lastArgs = undefined
    timerId = undefined
  }

  const flush = (): ReturnType<T> | undefined => {
    if (timerId !== undefined) {
      clearTimeout(timerId)
      timerId = undefined
    }
    if (lastArgs) {
      return invokeFunc()
    }
    return result
  }

  const pending = (): boolean => {
    return timerId !== undefined || lastArgs !== undefined
  }

  const throttled: ThrottledFunc<T> = Object.assign(
    (...args: Parameters<T>): ReturnType<T> | undefined => {
      lastArgs = args

      const isInvoking = shouldInvoke()

      if (isInvoking) {
        if (leading || lastInvokeTime !== 0) {
          // 清除之前的定时器
          if (timerId !== undefined) {
            clearTimeout(timerId)
            timerId = undefined
          }
          invokeFunc()
        } else {
          // 首次调用但 leading 为 false
          lastInvokeTime = Date.now()
        }
      }

      // 设置 trailing 定时器
      if (trailing && timerId === undefined) {
        timerId = setTimeout(timerExpired, remainingWait())
      }

      return result
    },
    { cancel, flush, pending }
  )

  return throttled
}

export default throttle
