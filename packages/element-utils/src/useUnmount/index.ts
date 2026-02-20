import { useEffect } from 'react'

import useLatest from '../useLatest'

/**
 * 在组件卸载时执行回调函数
 * @param fn - 卸载时执行的回调函数
 *
 * @example
 * ```tsx
 * useUnmount(() => {
 *   console.log('组件已卸载')
 *   cleanup()
 * })
 * ```
 */
const useUnmount = (fn: () => void) => {
  const fnRef = useLatest(fn)

  useEffect(
    () => () => {
      fnRef.current()
    },
    []
  )
}

export default useUnmount
