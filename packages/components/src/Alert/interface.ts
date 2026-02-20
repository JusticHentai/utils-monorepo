import { CSSProperties, ReactNode } from 'react'

/** Alert 类型 */
export enum AlertType {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export interface AlertProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 类型 */
  type?: AlertType | `${AlertType}`
  /** 标题 */
  title?: ReactNode
  /** 内容 */
  content?: ReactNode
  /** 是否可关闭 */
  closable?: boolean
  /** 自定义关闭图标 */
  closeElement?: ReactNode
  /** 自定义图标 */
  icon?: ReactNode
  /** 是否显示图标 */
  showIcon?: boolean
  /** 是否作为顶部公告 */
  banner?: boolean
  /** 操作区域 */
  action?: ReactNode
  /** 关闭回调 */
  onClose?: (e: React.MouseEvent) => void
  /** 关闭动画结束回调 */
  afterClose?: () => void
}
