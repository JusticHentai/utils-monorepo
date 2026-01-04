import { useCallback, useEffect, useRef } from 'react'

import { UseDebounceOptions, UseDebounceReturn } from './interface'

/**
 * 防抖 Hook
 * 支持回调函数更新机制，确保始终调用最新的回调
 */
const useDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  options: UseDebounceOptions
): UseDebounceReturn<T> => {
  const { delay, immediate = false, maxWait } = options

  if (delay < 0) {
    throw new Error('delay must be a non-negative number')
  }

  if (maxWait !== undefined && maxWait < delay) {
    throw new Error('maxWait must be greater than or equal to delay')
  }

  // 使用 ref 存储最新的回调函数，解决闭包问题
  const callbackRef = useRef<T>(callback)
  callbackRef.current = callback

  // 定时器引用
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  // 最大等待定时器引用
  const maxWaitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  // 最后一次调用的参数
  const lastArgsRef = useRef<Parameters<T> | null>(null)
  // 是否已经立即执行过
  const hasCalledRef = useRef<boolean>(false)
  // 首次调用时间
  const firstCallTimeRef = useRef<number | null>(null)

  /**
   * 清除所有定时器
   */
  const clearTimers = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    if (maxWaitTimerRef.current) {
      clearTimeout(maxWaitTimerRef.current)
      maxWaitTimerRef.current = null
    }
  }, [])

  /**
   * 执行回调
   */
  const invokeCallback = useCallback(() => {
    if (lastArgsRef.current !== null) {
      callbackRef.current(...lastArgsRef.current)
      lastArgsRef.current = null
    }
    hasCalledRef.current = false
    firstCallTimeRef.current = null
    clearTimers()
  }, [clearTimers])

  /**
   * 取消防抖
   */
  const cancel = useCallback(() => {
    clearTimers()
    lastArgsRef.current = null
    hasCalledRef.current = false
    firstCallTimeRef.current = null
  }, [clearTimers])

  /**
   * 立即执行
   */
  const flush = useCallback(() => {
    if (lastArgsRef.current !== null) {
      invokeCallback()
    }
  }, [invokeCallback])

  /**
   * 是否处于等待状态
   */
  const isPending = useCallback(() => {
    return timerRef.current !== null
  }, [])

  /**
   * 防抖后的函数
   */
  const run = useCallback(
    (...args: Parameters<T>) => {
      lastArgsRef.current = args

      // 清除之前的延迟定时器
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }

      // 立即执行模式
      if (immediate && !hasCalledRef.current) {
        hasCalledRef.current = true
        callbackRef.current(...args)
        lastArgsRef.current = null

        // 设置定时器，在 delay 后重置 hasCalledRef
        timerRef.current = setTimeout(() => {
          hasCalledRef.current = false
          timerRef.current = null
        }, delay)

        return
      }

      // 设置最大等待时间定时器
      if (maxWait !== undefined && firstCallTimeRef.current === null) {
        firstCallTimeRef.current = Date.now()
        maxWaitTimerRef.current = setTimeout(() => {
          invokeCallback()
        }, maxWait)
      }

      // 设置延迟定时器
      timerRef.current = setTimeout(() => {
        invokeCallback()
      }, delay)
    },
    [delay, immediate, maxWait, invokeCallback]
  )

  // 组件卸载时清除定时器
  useEffect(() => {
    return () => {
      clearTimers()
    }
  }, [clearTimers])

  return {
    run,
    cancel,
    flush,
    isPending,
  }
}

export default useDebounce
