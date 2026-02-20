/** 批次配置选项 */
export interface BatchOptions {
  /** 批次大小阈值 */
  batchSize: number
  /** 批次延迟时间（毫秒） */
  batchDelay: number
}

/** 批次操作接口 */
export interface BatchActions<T> {
  /** 手动刷新当前批次 */
  flush: () => void
  /** 添加数据到批次 */
  add: (items: T[]) => void
}
