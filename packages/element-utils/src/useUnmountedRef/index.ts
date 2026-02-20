import { useEffect, useRef } from 'react'

/**
 * 返回一个 ref，其 current 值表示组件是否已卸载
 * @returns ref 对象，current 为 true 时表示组件已卸载
 *
 * @example
 * ```tsx
 * const unmountedRef = useUnmountedRef()
 *
 * const fetchData = async () => {
 *   const data = await api.getData()
 *   if (!unmountedRef.current) {
 *     setData(data)
 *   }
 * }
 * ```
 */
const useUnmountedRef = () => {
  const unmountedRef = useRef(false)

  useEffect(() => {
    unmountedRef.current = false
    return () => {
      unmountedRef.current = true
    }
  }, [])

  return unmountedRef
}

export default useUnmountedRef
