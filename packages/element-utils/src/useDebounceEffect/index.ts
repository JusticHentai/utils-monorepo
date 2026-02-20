import {
  useEffect,
  useState,
  type DependencyList,
  type EffectCallback,
} from 'react'

import useDebounce from '../useDebounce'
import type { UseDebounceOptions } from '../useDebounce/interface'
import useUpdateEffect from '../useUpdateEffect'

/**
 * 为 useEffect 增加防抖能力
 *
 * @param effect - 执行函数
 * @param deps - 依赖数组
 * @param options - 防抖配置
 * ```
 */
const useDebounceEffect = (
  effect: EffectCallback,
  deps?: DependencyList,
  options?: UseDebounceOptions
) => {
  const [flag, setFlag] = useState({})

  const { run } = useDebounce(() => setFlag({}), options ?? { delay: 1000 })

  useEffect(() => {
    return run()
  }, deps)

  useUpdateEffect(effect, [flag])
}

export default useDebounceEffect
export type { UseDebounceOptions }
