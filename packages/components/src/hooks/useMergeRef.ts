import { ForwardedRef, useMemo, useRef } from 'react'

/**
 * 合并转发ref与内部ref的自定义hook
 * @template T - 引用的元素类型
 * @param {ForwardedRef<T>} ref - 外部传入的转发引用
 * @returns {React.MutableRefObject<T>} 返回可变的ref对象
 *
 * @description
 * 1. 当存在外部传入的ref时直接使用外部ref
 * 2. 当没有外部ref时创建内部ref作为fallback
 * 3. 使用useMemo优化引用稳定性，仅在ref变化时重新计算
 */
const useMergeRef = <T>(ref: ForwardedRef<T>) => {
  // 创建内部ref作为默认引用
  const internalRef = useRef<T>(null)

  // 合并外部ref和内部ref，优先使用外部ref
  return useMemo(() => (ref ? ref : internalRef), [ref])
}

export default useMergeRef
