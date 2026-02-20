import { CSSProperties, ReactNode } from 'react'

export type SpaceSize = 'mini' | 'small' | 'medium' | 'large' | number

export interface SpaceProps {
  children?: ReactNode
  style?: CSSProperties
  className?: string
  /** 对齐方式 */
  align?: 'start' | 'end' | 'center' | 'baseline'
  /** 方向 */
  direction?: 'vertical' | 'horizontal'
  /** 尺寸 */
  size?: SpaceSize | SpaceSize[]
  /** 是否自动换行 */
  wrap?: boolean
  /** 分隔符 */
  split?: ReactNode
}
