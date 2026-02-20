import type { Dispatch, SetStateAction } from 'react'
import { useCallback, useState } from 'react'

import useLatest from '../useLatest'

type GetStateAction<S> = () => S

function useGetState<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>, GetStateAction<S>]
function useGetState<S = undefined>(): [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>,
  GetStateAction<S | undefined>,
]

/**
 * 给 useState 增加了一个获取当前值的方法
 * @param initialState - 初始状态
 * @returns [当前状态, 设置状态函数, 获取当前状态函数]

 */
function useGetState<S>(initialState?: S) {
  const [state, setState] = useState(initialState)
  const stateRef = useLatest(state)

  const getState = useCallback(() => stateRef.current, [stateRef])

  return [state, setState, getState]
}

export default useGetState
