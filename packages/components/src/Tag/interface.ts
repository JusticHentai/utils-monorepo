import { CSSProperties, ReactNode } from 'react'

export interface TagProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 颜色 */
  color?: string
  /** 大小 */
  size?: 'small' | 'default' | 'medium' | 'large'
  /** 是否可关闭 */
  closable?: boolean
  /** 是否可选中 */
  checkable?: boolean
  /** 是否选中(受控) */
  checked?: boolean
  /** 默认是否选中 */
  defaultChecked?: boolean
  /** 是否显示边框 */
  bordered?: boolean
  /** 是否可见(受控) */
  visible?: boolean
  /** 关闭图标 */
  closeIcon?: ReactNode
  /** 左侧图标 */
  icon?: ReactNode
  /** 关闭回调 */
  onClose?: (e: React.MouseEvent) => void
  /** 选中变化回调 */
  onCheck?: (checked: boolean) => void
  /** 点击回调 */
  onClick?: (e: React.MouseEvent) => void
}
