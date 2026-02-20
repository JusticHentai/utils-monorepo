import { useEffect, useState } from 'react'

import useThrottle from '../useThrottle'
import type { UseThrottleOptions } from '../useThrottle/interface'

/**
 * 用来处理值节流的 Hook
 * @param value - 需要节流的值
 * @param options - 节流配置选项
 * @returns 节流后的值
 *
 * @example
 * ```tsx
 * const [position, setPosition] = useState({ x: 0, y: 0 })
 * const throttledPosition = useThrottleValue(position, { delay: 100 })
 *
 * // throttledPosition 最多每 100ms 更新一次
 * useEffect(() => {
 *   updateMap(throttledPosition)
 * }, [throttledPosition])
 * ```
 */
const useThrottleValue = <T>(value: T, options: UseThrottleOptions) => {
  const [throttled, setThrottled] = useState(value)

  const { run } = useThrottle(() => {
    setThrottled(value)
  }, options)

  useEffect(() => {
    run()
  }, [value])

  return throttled
}

export default useThrottleValue
