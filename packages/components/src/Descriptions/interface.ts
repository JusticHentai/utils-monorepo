import { CSSProperties, ReactNode } from 'react'

export interface DescriptionsProps {
  style?: CSSProperties
  className?: string
  /** 标题 */
  title?: ReactNode
  /** 列数 */
  column?: number
  /** 数据项 */
  data?: DescriptionsItemProps[]
  /** 排列方式 */
  layout?: 'horizontal' | 'vertical' | 'inline-horizontal' | 'inline-vertical'
  /** 大小 */
  size?: 'mini' | 'small' | 'default' | 'medium' | 'large'
  /** 是否有边框 */
  bordered?: boolean
  /** 是否有冒号 */
  colon?: ReactNode
  /** label 样式 */
  labelStyle?: CSSProperties
  /** value 样式 */
  valueStyle?: CSSProperties
  children?: ReactNode
}

export interface DescriptionsItemProps {
  style?: CSSProperties
  className?: string
  label?: ReactNode
  value?: ReactNode
  children?: ReactNode
  /** 列跨度 */
  span?: number
}
