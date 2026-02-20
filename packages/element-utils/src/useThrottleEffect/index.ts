import {
  useEffect,
  useState,
  type DependencyList,
  type EffectCallback,
} from 'react'

import useThrottle from '../useThrottle'
import type { UseThrottleOptions } from '../useThrottle/interface'
import useUpdateEffect from '../useUpdateEffect'

/**
 * 为 useEffect 增加节流能力
 *
 * @param effect - 执行函数
 * @param deps - 依赖数组
 * @param options - 节流配置
 *
 * @example
 * ```ts
 * useThrottleEffect(
 *   () => {
 *     console.log(value);
 *   },
 *   [value],
 *   { delay: 500 }
 * );
 * ```
 */
const useThrottleEffect = (
  effect: EffectCallback,
  deps?: DependencyList,
  options?: UseThrottleOptions
) => {
  const [flag, setFlag] = useState({})

  const { run } = useThrottle(
    () => {
      setFlag({})
    },
    options ?? { delay: 1000 }
  )

  useEffect(() => {
    return run()
  }, deps)

  useUpdateEffect(effect, [flag])
}

export default useThrottleEffect
export type { UseThrottleOptions }
