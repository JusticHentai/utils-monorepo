import { CSSProperties, ReactNode } from 'react'

export interface SpinProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 是否为加载状态 */
  loading?: boolean
  /** 大小 */
  size?: number
  /** 自定义图标 */
  icon?: ReactNode
  /** 自定义元素 */
  element?: ReactNode
  /** 提示文字 */
  tip?: ReactNode
  /** 延迟显示(ms) */
  delay?: number
  /** 是否作为容器使用 */
  block?: boolean
  /** 自定义 dot 样式 */
  dot?: boolean
}
