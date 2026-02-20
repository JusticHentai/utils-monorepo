/** useHover 配置选项 */
export interface UseHoverOptions {
  /** 鼠标进入时的回调 */
  onEnter?: () => void
  /** 鼠标离开时的回调 */
  onLeave?: () => void
  /** 鼠标悬停状态改变时的回调 */
  onChange?: (isHovering: boolean) => void
}
