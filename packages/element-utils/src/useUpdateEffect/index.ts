import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

/**
 * useUpdateEffect Hook
 * 首次渲染时不执行，仅在依赖更新时执行的 useEffect
 */
const useUpdateEffect = (
  effect: EffectCallback,
  deps?: DependencyList
): void => {
  if (typeof effect !== 'function') {
    throw new Error('effect must be a function')
  }

  // 标记是否是首次渲染
  const isFirstRenderRef = useRef<boolean>(true)

  useEffect(() => {
    // 首次渲染时，设置标记为 false，不执行 effect
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false
      return
    }

    // 非首次渲染时，执行 effect
    return effect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export default useUpdateEffect
