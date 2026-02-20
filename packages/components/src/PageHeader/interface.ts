import { CSSProperties, ReactNode } from 'react'
import { BreadcrumbProps } from '../Breadcrumb'

export interface PageHeaderProps {
  className?: string | string[]
  style?: CSSProperties
  /** 主标题 */
  title?: ReactNode
  /** 次级标题 */
  subTitle?: ReactNode
  /** 面包屑 */
  breadcrumb?: BreadcrumbProps
  /** 返回图标 */
  backIcon?: ReactNode | boolean
  /** 展示额外内容 */
  extra?: ReactNode
  /** 底部内容 */
  footer?: ReactNode
  /** 点击返回图标的回调 */
  onBack?: (e: React.MouseEvent) => void
  children?: ReactNode
}
