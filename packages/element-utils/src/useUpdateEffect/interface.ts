import { DependencyList, EffectCallback } from 'react'

/**
 * useUpdateEffect Hook 配置项
 */
export interface UseUpdateEffectOptions {
  /** 副作用函数 */
  effect: EffectCallback
  /** 依赖数组 */
  deps?: DependencyList
}
