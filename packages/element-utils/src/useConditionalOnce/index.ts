import { useCallback, useEffect, useRef, useState } from 'react'
import type { ExecuteFn, UseConditionalOnceReturn } from './interface'

/**
 * 当条件为 true 时只执行一次的 Hook
 *
 * @param condition - 条件，为 true 时执行
 * @param execute - 要执行的函数，支持返回清理函数
 * @returns 返回执行状态和重置函数
 */
const useConditionalOnce = (
  condition: boolean,
  execute: ExecuteFn
): UseConditionalOnceReturn => {
  // 是否已执行
  const [executed, setExecuted] = useState(false)

  // 存储清理函数
  const cleanupRef = useRef<(() => void) | void>(undefined)

  // 重置函数
  const reset = useCallback(() => {
    // 执行清理函数
    if (cleanupRef.current) {
      cleanupRef.current()
      cleanupRef.current = undefined
    }
    setExecuted(false)
  }, [])

  useEffect(() => {
    // 已执行过或条件不满足，直接返回
    if (executed || !condition) return

    // 标记已执行
    // eslint-disable-next-line react-hooks/set-state-in-effect -- 这里需要同步更新状态给外部使用
    setExecuted(true)

    // 执行函数并保存清理函数
    cleanupRef.current = execute()

    // 返回清理函数
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current()
        cleanupRef.current = undefined
      }
    }
  }, [condition, execute])

  return {
    executed,
    reset,
  }
}

export default useConditionalOnce
