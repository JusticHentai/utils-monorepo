import type { DebouncedFunc, DebounceOptions } from './interface'

/**
 * 创建一个防抖函数，延迟调用 func 直到最后一次调用后等待 wait 毫秒
 * @param func - 要防抖的函数
 * @param wait - 延迟的毫秒数，默认 0
 * @param options - 配置选项
 * @returns 返回防抖函数
 * @example
 * // 避免窗口调整大小时频繁计算
 * window.addEventListener('resize', debounce(calculateLayout, 150))
 *
 * // 在点击时立即调用，但 5 秒内不会再次调用
 * const clickHandler = debounce(sendMail, 300, { leading: true, trailing: false })
 */
const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait = 0,
  options: DebounceOptions = {}
): DebouncedFunc<T> => {
  const { leading = false, trailing = true, maxWait } = options

  let timerId: ReturnType<typeof setTimeout> | undefined
  let lastArgs: Parameters<T> | undefined
  let result: ReturnType<T> | undefined
  let lastCallTime: number | undefined
  let lastInvokeTime = 0

  const maxing = maxWait !== undefined
  const maxWaitMs = maxWait ?? 0

  const invokeFunc = (time: number): ReturnType<T> | undefined => {
    const args = lastArgs

    lastArgs = undefined
    lastInvokeTime = time
    result = func(...args!) as ReturnType<T>
    return result
  }

  const shouldInvoke = (time: number): boolean => {
    const timeSinceLastCall =
      lastCallTime === undefined ? 0 : time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime

    // 首次调用、超过等待时间、系统时间倒退、或达到最大等待时间
    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      (maxing && timeSinceLastInvoke >= maxWaitMs)
    )
  }

  const remainingWait = (time: number): number => {
    const timeSinceLastCall =
      lastCallTime === undefined ? 0 : time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime
    const timeWaiting = wait - timeSinceLastCall

    return maxing
      ? Math.min(timeWaiting, maxWaitMs - timeSinceLastInvoke)
      : timeWaiting
  }

  const timerExpired = (): void => {
    const time = Date.now()
    if (shouldInvoke(time)) {
      trailingEdge(time)
      return
    }
    // 重新计算剩余时间
    timerId = setTimeout(timerExpired, remainingWait(time))
  }

  const leadingEdge = (time: number): ReturnType<T> | undefined => {
    lastInvokeTime = time
    // 启动定时器
    timerId = setTimeout(timerExpired, wait)
    // 如果 leading 为 true，立即执行
    return leading ? invokeFunc(time) : result
  }

  const trailingEdge = (time: number): ReturnType<T> | undefined => {
    timerId = undefined

    // 只有在有 lastArgs 时才调用（确保是经过调用的）
    if (trailing && lastArgs) {
      return invokeFunc(time)
    }
    lastArgs = undefined
    return result
  }

  const cancel = (): void => {
    if (timerId !== undefined) {
      clearTimeout(timerId)
    }
    lastInvokeTime = 0
    lastArgs = undefined
    lastCallTime = undefined
    timerId = undefined
  }

  const flush = (): ReturnType<T> | undefined => {
    if (timerId === undefined) return result

    return trailingEdge(Date.now())
  }

  const pending = (): boolean => {
    return timerId !== undefined
  }

  const debounced = ((...args: Parameters<T>): ReturnType<T> | undefined => {
    const time = Date.now()
    const isInvoking = shouldInvoke(time)

    lastArgs = args
    lastCallTime = time

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime)
      }

      if (maxing) {
        // 处理 maxWait 情况
        timerId = setTimeout(timerExpired, wait)
        return invokeFunc(lastCallTime)
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait)
    }

    return result
  }) as DebouncedFunc<T>

  debounced.cancel = cancel
  debounced.flush = flush
  debounced.pending = pending

  return debounced
}

export default debounce
