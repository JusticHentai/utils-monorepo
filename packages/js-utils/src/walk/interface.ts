export interface WalkOptions {
  /** 要遍历的对象 */
  obj: Record<string, any>
  /** 回调函数，处理每个值 */
  cb: (options: {
    /** 当前键名 */
    key: string
    /** 当前值 */
    value: any
    /** 当前遍历到的位置的对象索引 */
    index: Record<string, any>
    /** 父级路径数组 */
    parent: string[]
  }) => any
  /** 父级路径数组 */
  parent?: string[]
}
