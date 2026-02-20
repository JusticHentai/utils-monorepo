import { useState } from 'react'

import isFunction from '@justichentai/js-utils/isFunction'
import useMemoizedFn from '../useMemoizedFn'
import type { SetState } from './interface'

export type { SetState } from './interface'

/**
 * 管理对象类型 state 的 Hook，与 class 组件的 this.setState 类似
 * @param initialState - 初始状态
 * @returns [当前状态, 合并更新函数]
 *
 * @example
 * ```tsx
 * const [state, setState] = useSetState({
 *   name: 'John',
 *   age: 20,
 * })
 *
 * // 只更新部分字段，其他字段保持不变
 * setState({ age: 21 })
 *
 * // 函数式更新
 * setState(prev => ({ age: prev.age + 1 }))
 * ```
 */
const useSetState = <S extends Record<string, any>>(
  initialState: S | (() => S)
): [S, SetState<S>] => {
  const [state, setState] = useState<S>(initialState)

  const setMergeState = useMemoizedFn((patch) => {
    setState((prevState) => {
      const newState = isFunction(patch) ? patch(prevState) : patch
      return newState ? { ...prevState, ...newState } : prevState
    })
  })

  return [state, setMergeState]
}

export default useSetState
