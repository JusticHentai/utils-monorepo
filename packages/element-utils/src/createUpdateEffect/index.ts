import type { useEffect, useLayoutEffect } from 'react'
import { useRef } from 'react'

type EffectHookType = typeof useEffect | typeof useLayoutEffect

/**
 * 创建一个更新时执行的 effect hook 工厂函数
 * 与 useEffect/useLayoutEffect 不同，首次渲染时不会执行
 * @param hook - useEffect 或 useLayoutEffect
 * @returns 自定义的 effect hook
 *
 * @example
 * ```tsx
 * const useUpdateEffect = createUpdateEffect(useEffect)
 * const useUpdateLayoutEffect = createUpdateEffect(useLayoutEffect)
 * ```
 */
export const createUpdateEffect: (hook: EffectHookType) => EffectHookType =
  (hook) => (effect, deps) => {
    const isMounted = useRef(false)

    // 用于 react-refresh
    hook(() => {
      return () => {
        isMounted.current = false
      }
    }, [])

    hook(() => {
      if (!isMounted.current) {
        isMounted.current = true
      } else {
        return effect()
      }
    }, deps)
  }

export default createUpdateEffect
