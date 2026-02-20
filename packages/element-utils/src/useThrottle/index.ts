import { useCallback, useEffect, useRef } from 'react'

import { UseThrottleOptions, UseThrottleReturn } from './interface'

/**
 * 节流 Hook
 * 在指定时间内只执行一次，支持首次立即执行和结束时执行
 */
const useThrottle = <T extends (...args: any[]) => any>(
  callback: T,
  options: UseThrottleOptions
): UseThrottleReturn<T> => {
  const { delay, leading = true, trailing = true } = options

  // 参数有效性标记
  const isValidParams = delay >= 0

  // 使用 ref 存储最新的回调函数，解决闭包问题
  const callbackRef = useRef<T>(callback)
  useEffect(() => {
    callbackRef.current = callback
  })

  // 定时器引用
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  // 最后一次调用的参数
  const lastArgsRef = useRef<Parameters<T> | null>(null)
  // 上次执行时间
  const lastExecTimeRef = useRef<number>(0)
  // 是否已经执行过 leading
  const hasLeadingRef = useRef<boolean>(false)

  /**
   * 清除定时器
   */
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  /**
   * 执行回调
   */
  const invokeCallback = useCallback((args: Parameters<T>) => {
    callbackRef.current(...args)
    lastExecTimeRef.current = Date.now()
    lastArgsRef.current = null
  }, [])

  /**
   * 取消节流
   */
  const cancel = useCallback(() => {
    clearTimer()
    lastArgsRef.current = null
    hasLeadingRef.current = false
    lastExecTimeRef.current = 0
  }, [clearTimer])

  /**
   * 立即执行
   */
  const flush = useCallback(() => {
    if (lastArgsRef.current !== null) {
      clearTimer()
      invokeCallback(lastArgsRef.current)
      hasLeadingRef.current = false
    }
  }, [clearTimer, invokeCallback])

  /**
   * 是否处于节流中
   */
  const isPending = useCallback(() => {
    return timerRef.current !== null
  }, [])

  /**
   * 节流后的函数
   */
  const run = useCallback(
    (...args: Parameters<T>) => {
      // 参数无效时不执行
      if (!isValidParams) {
        return
      }

      const now = Date.now()
      const elapsed = now - lastExecTimeRef.current
      const remaining = delay - elapsed

      lastArgsRef.current = args

      // 清除之前的定时器
      clearTimer()

      // 首次调用或已过节流时间
      if (remaining <= 0 || remaining > delay) {
        if (leading || hasLeadingRef.current) {
          invokeCallback(args)
          hasLeadingRef.current = true
        } else {
          // 不立即执行，但标记已过首次
          hasLeadingRef.current = true
          lastExecTimeRef.current = now
        }

        // 设置 trailing 定时器
        if (trailing) {
          timerRef.current = setTimeout(() => {
            if (lastArgsRef.current !== null && trailing) {
              invokeCallback(lastArgsRef.current)
            }
            hasLeadingRef.current = false
            timerRef.current = null
          }, delay)
        }
      } else {
        // 在节流期间，设置 trailing 定时器
        if (trailing) {
          timerRef.current = setTimeout(() => {
            if (lastArgsRef.current !== null) {
              invokeCallback(lastArgsRef.current)
            }
            hasLeadingRef.current = false
            timerRef.current = null
          }, remaining)
        }
      }
    },
    [delay, leading, trailing, isValidParams, clearTimer, invokeCallback]
  )

  // 组件卸载时清除定时器
  useEffect(() => {
    return () => {
      clearTimer()
    }
  }, [clearTimer])

  return {
    run,
    cancel,
    flush,
    isPending,
  }
}

export default useThrottle
