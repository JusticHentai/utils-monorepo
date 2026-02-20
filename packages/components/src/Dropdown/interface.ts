import { CSSProperties, ReactElement, ReactNode } from 'react'
import { TriggerPosition } from '../Trigger'

export interface DropdownProps {
  style?: CSSProperties
  className?: string
  children?: ReactElement
  /** 下拉菜单内容 */
  droplist?: ReactNode
  /** 弹出位置 */
  position?: TriggerPosition
  /** 触发方式 */
  trigger?: 'hover' | 'click'
  /** 是否禁用 */
  disabled?: boolean
  /** 受控可见状态 */
  popupVisible?: boolean
  /** 默认可见状态 */
  defaultPopupVisible?: boolean
  /** 可见状态变化回调 */
  onVisibleChange?: (visible: boolean) => void
  /** 挂载节点 */
  getPopupContainer?: () => HTMLElement
  /** 关闭后是否卸载 */
  unmountOnExit?: boolean
}

export interface DropdownButtonProps extends DropdownProps {
  /** 大小 */
  size?: 'mini' | 'small' | 'default' | 'large'
  /** 按钮类型 */
  type?: 'primary' | 'secondary' | 'dashed' | 'text' | 'outline' | 'default'
  /** 左侧按钮点击回调 */
  onClick?: (e: React.MouseEvent) => void
  /** 右侧按钮图标 */
  icon?: ReactNode
  /** 按钮内容 */
  buttonProps?: Record<string, unknown>
}
