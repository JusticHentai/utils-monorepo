import type { Dispatch, SetStateAction } from 'react'
import { useCallback, useState } from 'react'

import useUnmountedRef from '../useUnmountedRef'

function useSafeState<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>]
function useSafeState<S = undefined>(): [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>,
]

/**
 * 安全的 useState，组件卸载后不再更新 state，避免内存泄漏警告
 * @param initialState - 初始状态
 * @returns [当前状态, 安全的设置状态函数]
 *
 * @example
 * ```tsx
 * const [data, setData] = useSafeState<Data | null>(null)
 *
 * useEffect(() => {
 *   fetchData().then(setData) // 即使组件卸载也不会报错
 * }, [])
 * ```
 */
function useSafeState<S>(initialState?: S | (() => S)) {
  const unmountedRef = useUnmountedRef()
  const [state, setState] = useState(initialState)

  const setCurrentState = useCallback(
    (currentState: S) => {
      // 组件已卸载，停止更新
      if (unmountedRef.current) return
      setState(currentState)
    },
    [unmountedRef]
  )

  return [state, setCurrentState] as const
}

export default useSafeState
