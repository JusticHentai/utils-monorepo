import { CSSProperties, ReactNode } from 'react'

export interface SkeletonProps {
  style?: CSSProperties
  className?: string
  /** 是否显示动画效果 */
  animation?: boolean
  /** 是否显示加载组件 */
  loading?: boolean
  /** 图片骨架属性 */
  image?: SkeletonImageProps | boolean
  /** 文本骨架属性 */
  text?: SkeletonTextProps | boolean
  children?: ReactNode
}

export interface SkeletonImageProps {
  style?: CSSProperties
  className?: string
  /** 图片形状 */
  shape?: 'circle' | 'square'
  /** 大小 */
  size?: 'small' | 'default' | 'large'
  /** 自定义位置 */
  position?: 'left' | 'right'
}

export interface SkeletonTextProps {
  style?: CSSProperties
  className?: string
  /** 行数 */
  rows?: number
  /** 宽度(可以是每行的宽度数组) */
  width?: number | string | (number | string)[]
}
