import type { Dispatch, SetStateAction } from 'react'
import { useCallback, useRef, useState } from 'react'

import useUnmount from '../useUnmount'

function useRafState<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>]
function useRafState<S = undefined>(): [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>,
]

/**
 * 在 requestAnimationFrame 中更新 state，适合高频更新场景
 * @param initialState - 初始状态
 * @returns [当前状态, 设置状态函数]
 */
function useRafState<S>(initialState?: S | (() => S)) {
  const ref = useRef(0)
  const [state, setState] = useState(initialState)

  const setRafState = useCallback((value: S | ((prevState: S) => S)) => {
    cancelAnimationFrame(ref.current)

    ref.current = requestAnimationFrame(() => {
      setState(value as any)
    })
  }, [])

  useUnmount(() => {
    cancelAnimationFrame(ref.current)
  })

  return [state, setRafState] as const
}

export default useRafState
