import { CSSProperties, ReactNode } from 'react'

export interface IconProps {
  className?: string | string[]
  style?: CSSProperties
  /** 图标旋转角度 */
  spin?: boolean
  /** 旋转角度 */
  rotate?: number
  /** 图标颜色 */
  color?: string
  /** 图标大小 */
  fontSize?: string | number
  /** 点击事件 */
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void
  children?: ReactNode
}
