import { useState } from 'react'

import useMemoizedFn from '../useMemoizedFn'

/**
 * 管理 Set 类型状态的 Hook
 * @param initialValue - 初始值
 * @returns [Set 实例, 操作方法]
 *
 * @example
 * ```tsx
 * const [set, { add, remove, reset }] = useSet(['a', 'b'])
 *
 * add('c')
 * remove('a')
 * reset()
 * ```
 */
const useSet = <K>(initialValue?: Iterable<K>) => {
  const getInitValue = () => new Set(initialValue)
  const [set, setSet] = useState<Set<K>>(getInitValue)

  const updateSet = (updater: (set: Set<K>) => Set<K>) => {
    setSet((prevSet) => updater(new Set(prevSet)))
  }

  const add = (key: K) => {
    if (set.has(key)) return
    updateSet((newSet) => {
      newSet.add(key)
      return newSet
    })
  }

  const remove = (key: K) => {
    if (!set.has(key)) return
    updateSet((newSet) => {
      newSet.delete(key)
      return newSet
    })
  }

  const reset = () => setSet(getInitValue())

  return [
    set,
    {
      add: useMemoizedFn(add),
      remove: useMemoizedFn(remove),
      reset: useMemoizedFn(reset),
    },
  ] as const
}

export default useSet
