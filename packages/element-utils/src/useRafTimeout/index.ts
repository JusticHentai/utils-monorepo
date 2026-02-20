import { useCallback, useEffect, useRef } from 'react'

import { isNumber } from '../isNumber'
import useLatest from '../useLatest'

/**
 * 管理 requestAnimationFrame 的 timeout Hook
 * 使用 requestAnimationFrame 实现的延时执行，更加流畅
 *
 * @param fn - 执行函数
 * @param delay - 延迟时间（毫秒），设置为 undefined 停止定时器
 *
 * @example
 * ```ts
 * const [state, setState] = useState(1);
 *
 * useRafTimeout(() => {
 *   setState(state + 1);
 * }, 3000);
 * ```
 */
const useRafTimeout = (fn: () => void, delay: number | undefined) => {
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

    const loop = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const elapsed = timestamp - startTimeRef.current

      if (elapsed >= delay) {
        fnRef.current?.()
        clear()
      } else {
        timerRef.current = requestAnimationFrame(loop)
      }
    }

    timerRef.current = requestAnimationFrame(loop)

    return clear
  }, [delay])

  return clear
}

export default useRafTimeout
