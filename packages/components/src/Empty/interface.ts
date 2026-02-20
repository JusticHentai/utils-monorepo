import { CSSProperties, ReactNode } from 'react'

export interface EmptyProps {
  style?: CSSProperties
  className?: string
  /** 描述文字 */
  description?: ReactNode
  /** 自定义图标 */
  icon?: ReactNode
  /** 自定义图片地址 */
  imgSrc?: string
  children?: ReactNode
}
