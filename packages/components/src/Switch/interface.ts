import { CSSProperties, ReactNode } from 'react'

export interface SwitchProps {
  style?: CSSProperties
  className?: string
  /** 是否选中 */
  checked?: boolean
  /** 默认是否选中 */
  defaultChecked?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否加载中 */
  loading?: boolean
  /** 大小 */
  size?: 'small' | 'default'
  /** 类型 */
  type?: 'circle' | 'round' | 'line'
  /** 选中时内容 */
  checkedText?: ReactNode
  /** 未选中时内容 */
  uncheckedText?: ReactNode
  /** 选中时图标 */
  checkedIcon?: ReactNode
  /** 未选中时图标 */
  uncheckedIcon?: ReactNode
  /** 变化回调 */
  onChange?: (checked: boolean, e: React.MouseEvent) => void
}
