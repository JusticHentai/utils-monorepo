import { CSSProperties, ReactNode } from 'react'

export interface NotificationProps {
  style?: CSSProperties
  className?: string
  /** 标题 */
  title?: ReactNode
  /** 内容 */
  content?: ReactNode
  /** 类型 */
  type?: 'info' | 'success' | 'warning' | 'error'
  /** 持续时间(ms) */
  duration?: number
  /** 是否可关闭 */
  closable?: boolean
  /** 自定义图标 */
  icon?: ReactNode
  /** 唯一 id */
  id?: string
  /** 位置 */
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
  /** 操作按钮 */
  btn?: ReactNode
  /** 关闭回调 */
  onClose?: () => void
  /** 是否显示图标 */
  showIcon?: boolean
}
