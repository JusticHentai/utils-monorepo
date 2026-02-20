/** useCounter 配置选项 */
export interface UseCounterOptions {
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
}

/** useCounter 操作方法 */
export interface CounterActions {
  /** 增加 */
  inc: (delta?: number) => void
  /** 减少 */
  dec: (delta?: number) => void
  /** 设置值 */
  set: (value: number | ((c: number) => number)) => void
  /** 重置为初始值 */
  reset: () => void
}

/** 值参数类型 */
export type ValueParam = number | ((c: number) => number)
