import { AnchorHTMLAttributes, CSSProperties, ReactNode } from 'react'

export interface LinkProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'className'
> {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 链接地址 */
  href?: string
  /** 链接状态 */
  status?: 'error' | 'success' | 'warning' | 'default'
  /** 是否禁用 */
  disabled?: boolean
  /** 是否悬浮状态有底色 */
  hoverable?: boolean
  /** 左侧图标 */
  icon?: ReactNode
}
