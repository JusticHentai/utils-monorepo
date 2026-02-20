import type { Dispatch, SetStateAction } from 'react'
import { useRef, useState } from 'react'

import isFunction from '@justichentai/js-utils/isFunction'
import useCreation from '../useCreation'
import useMemoizedFn from '../useMemoizedFn'
import type { ResetState } from './interface'

/**
 * 提供重置 state 方法的 Hook
 * @param initialState - 初始状态
 * @returns [当前状态, 设置状态函数, 重置状态函数]
 */
const useResetState = <S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>, ResetState] => {
  const initialStateRef = useRef(initialState)
  const initialStateMemo = useCreation(
    () =>
      isFunction(initialStateRef.current)
        ? initialStateRef.current()
        : initialStateRef.current,
    []
  )

  const [state, setState] = useState(initialStateMemo)

  const resetState = useMemoizedFn(() => {
    setState(initialStateMemo)
  })

  return [state, setState, resetState]
}

export default useResetState
