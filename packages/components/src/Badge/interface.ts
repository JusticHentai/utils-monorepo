import { CSSProperties, ReactNode } from 'react'

export interface BadgeProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 徽标数值 */
  count?: number | ReactNode
  /** 是否是小红点 */
  dot?: boolean
  /** 封顶数值 */
  maxCount?: number
  /** 显示的文本 */
  text?: string
  /** 状态 */
  status?: 'default' | 'processing' | 'success' | 'warning' | 'error'
  /** 颜色 */
  color?: string
  /** 不展示 0 */
  dotStyle?: CSSProperties
  /** 偏移量 [x, y] */
  offset?: [number, number]
}
