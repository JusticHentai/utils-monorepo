import { useMemo } from 'react'

import useToggle from '../useToggle'
import type { BooleanActions } from './interface'

export type { BooleanActions } from './interface'

/**
 * 管理 boolean 状态的 Hook
 * @param defaultValue - 默认值，默认为 false
 * @returns [当前值, 操作方法]
 */
const useBoolean = (defaultValue = false): [boolean, BooleanActions] => {
  const [state, { toggle, set }] = useToggle(!!defaultValue)

  const actions: BooleanActions = useMemo(() => {
    const setTrue = () => set(true)
    const setFalse = () => set(false)
    return {
      toggle,
      set: (v) => set(!!v),
      setTrue,
      setFalse,
    }
  }, [set, toggle])

  return [state, actions]
}

export default useBoolean
