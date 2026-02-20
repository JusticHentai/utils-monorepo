/** useToggle 操作方法 */
export interface ToggleActions<T> {
  /** 切换为左值 */
  setLeft: () => void
  /** 切换为右值 */
  setRight: () => void
  /** 设置值 */
  set: (value: T) => void
  /** 切换 */
  toggle: () => void
}
