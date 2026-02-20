import { CSSProperties, ReactNode } from 'react'

export interface AvatarProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 形状 */
  shape?: 'circle' | 'square'
  /** 大小 */
  size?: number
  /** 是否自动根据文字调整大小 */
  autoFixFontSize?: boolean
  /** 触发类型 */
  triggerIcon?: ReactNode
  /** 触发类型 */
  triggerType?: 'mask' | 'button'
  /** 点击触发回调 */
  onClick?: (e: React.MouseEvent) => void
}

export interface AvatarGroupProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 大小 */
  size?: number
  /** 形状 */
  shape?: 'circle' | 'square'
  /** 是否自动根据文字调整大小 */
  autoFixFontSize?: boolean
  /** 最多显示数量 */
  maxCount?: number
  /** 多余头像样式 */
  maxStyle?: CSSProperties
  /** z-index 递增 */
  zIndexAscend?: boolean
}
