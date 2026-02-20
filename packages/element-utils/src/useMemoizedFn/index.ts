import { useMemo, useRef } from 'react'

import type { noop, PickFunction } from './interface'

/**
 * 持久化函数引用，返回的函数地址永远不变
 * @param fn - 需要持久化的函数
 * @returns 持久化后的函数
 */
const useMemoizedFn = <T extends noop>(fn: T) => {
  const fnRef = useRef<T>(fn)

  // 使用 useMemo 而不是直接赋值，解决并发模式下的问题
  fnRef.current = useMemo<T>(() => fn, [fn])

  const memoizedFn = useRef<PickFunction<T>>(undefined)

  if (!memoizedFn.current) {
    memoizedFn.current = function (this, ...args) {
      return fnRef.current.apply(this, args)
    }
  }

  return memoizedFn.current
}

export default useMemoizedFn
