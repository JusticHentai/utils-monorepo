import { useCallback, useEffect, useRef } from 'react'

import { isNumber } from '../isNumber'
import useLatest from '../useLatest'

/**
 * 管理 setInterval 的 Hook
 *
 * @param fn - 执行函数
 * @param delay - 间隔时间（毫秒），设置为 undefined 停止定时器
 * @param options - 配置项
 */
const useInterval = (
  fn: () => void,
  delay: number | undefined,
  options: {
    /** 是否在首次渲染时立即执行 */
    immediate?: boolean
  } = {}
) => {
  const { immediate } = options

  const fnRef = useLatest(fn)

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!isNumber(delay) || delay < 0) {
      return
    }

    if (immediate) {
      fnRef.current?.()
    }

    timerRef.current = setInterval(() => {
      fnRef.current?.()
    }, delay)

    return clear
  }, [delay, immediate, clear, fnRef])

  return clear
}

export default useInterval
