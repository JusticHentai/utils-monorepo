import { useCallback, useEffect, useRef } from 'react'

import { isNumber } from '../isNumber'
import useLatest from '../useLatest'

/**
 * 管理 setTimeout 的 Hook
 *
 * @param fn - 执行函数
 * @param delay - 延迟时间（毫秒），设置为 undefined 停止定时器
 *
 * @example
 * ```ts
 * const [state, setState] = useState(1);
 *
 * useTimeout(() => {
 *   setState(state + 1);
 * }, 3000);
 * ```
 */
const useTimeout = (fn: () => void, delay: number | undefined) => {
  const fnRef = useLatest(fn)

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!isNumber(delay) || delay < 0) {
      return
    }

    timerRef.current = setTimeout(() => {
      fnRef.current?.()
    }, delay)

    return clear
  }, [delay])

  return clear
}

export default useTimeout
