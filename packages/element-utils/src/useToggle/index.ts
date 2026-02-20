import { useMemo, useState } from 'react'

import type { ToggleActions } from './interface'

export type { ToggleActions } from './interface'

function useToggle<T = boolean>(): [boolean, ToggleActions<T>]
function useToggle<T>(defaultValue: T): [T, ToggleActions<T>]
function useToggle<T, U>(
  defaultValue: T,
  reverseValue: U
): [T | U, ToggleActions<T | U>]

/**
 * 用于在两个状态值间切换的 Hook
 * @param defaultValue - 默认值（左值）
 * @param reverseValue - 反转值（右值），默认为 !defaultValue
 * @returns [当前值, 操作方法]
 *
 * @example
 * ```tsx
 * // 基础用法 - boolean 切换
 * const [state, { toggle, setTrue, setFalse }] = useToggle()
 *
 * // 两个值之间切换
 * const [state, { toggle }] = useToggle('Hello', 'World')
 * ```
 */
function useToggle<D, R>(
  defaultValue: D = false as unknown as D,
  reverseValue?: R
) {
  const [state, setState] = useState<D | R>(defaultValue)

  const reverseValueOrigin = (
    reverseValue === undefined ? !defaultValue : reverseValue
  ) as D | R

  const toggle = useMemo(
    () => () =>
      setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue)),
    [defaultValue, reverseValueOrigin]
  )

  const set = useMemo(() => (value: D | R) => setState(value), [])

  const setLeft = useMemo(() => () => setState(defaultValue), [defaultValue])

  const setRight = useMemo(
    () => () => setState(reverseValueOrigin),
    [reverseValueOrigin]
  )

  const actions = useMemo(
    () => ({
      toggle,
      set,
      setLeft,
      setRight,
    }),
    [toggle, set, setLeft, setRight]
  )

  return [state, actions]
}

export default useToggle
