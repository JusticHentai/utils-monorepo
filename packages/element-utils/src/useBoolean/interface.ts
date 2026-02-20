/** useBoolean 操作方法 */
export interface BooleanActions {
  /** 设置为 true */
  setTrue: () => void
  /** 设置为 false */
  setFalse: () => void
  /** 设置指定值 */
  set: (value: boolean) => void
  /** 切换 */
  toggle: () => void
}
