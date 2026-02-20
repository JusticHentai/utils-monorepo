import { useCallback, useEffect, useRef } from 'react'

import { isNumber } from '../isNumber'
import useLatest from '../useLatest'

/**
 * 管理 requestAnimationFrame 的 interval Hook
 * 使用 requestAnimationFrame 实现的定时器，更加流畅
 *
 * @param fn - 执行函数
 * @param delay - 间隔时间（毫秒），设置为 undefined 停止定时器
 * @param options - 配置项
 */
const useRafInterval = (
  fn: () => void,
  delay: number | undefined,
  options: {
    /** 是否在首次渲染时立即执行 */
    immediate?: boolean
  } = {}
) => {
  const { immediate } = options

  const fnRef = useLatest(fn)

  const timerRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  const clear = useCallback(() => {
    if (timerRef.current) {
      cancelAnimationFrame(timerRef.current)
      timerRef.current = null
      startTimeRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!isNumber(delay) || delay < 0) {
      return
    }

    if (immediate) {
      fnRef.current?.()
    }

    const loop = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const elapsed = timestamp - startTimeRef.current

      if (elapsed >= delay) {
        fnRef.current?.()
        startTimeRef.current = timestamp
      }

      timerRef.current = requestAnimationFrame(loop)
    }

    timerRef.current = requestAnimationFrame(loop)

    return clear
  }, [delay, immediate, clear, fnRef])

  return clear
}

export default useRafInterval
