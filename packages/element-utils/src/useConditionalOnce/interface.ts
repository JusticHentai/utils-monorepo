/**
 * 执行函数类型
 * @returns 可返回清理函数
 */
export type ExecuteFn = () => void | (() => void)

/**
 * useConditionalOnce 的返回值
 */
export interface UseConditionalOnceReturn {
  /**
   * 是否已经执行过
   */
  executed: boolean
  /**
   * 手动重置状态，允许再次执行
   */
  reset: () => void
}
