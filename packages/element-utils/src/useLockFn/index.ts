import { useCallback, useRef } from 'react'

/**
 * 用于给一个异步函数增加竞态锁，防止并发执行
 *
 * @param fn - 异步函数
 */
const useLockFn = <P extends any[] = any[], V = any>(
  fn: (...args: P) => Promise<V>
) => {
  const lockRef = useRef(false)

  return useCallback(
    async (...args: P) => {
      if (lockRef.current) return

      lockRef.current = true

      try {
        const ret = await fn(...args)
        return ret
      } finally {
        lockRef.current = false
      }
    },
    [fn]
  )
}

export default useLockFn
