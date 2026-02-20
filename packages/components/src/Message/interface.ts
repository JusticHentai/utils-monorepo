import { CSSProperties, ReactNode } from 'react'

export interface MessageProps {
  style?: CSSProperties
  className?: string
  /** 内容 */
  content?: ReactNode
  /** 类型 */
  type?: 'info' | 'success' | 'warning' | 'error' | 'loading' | 'normal'
  /** 持续时间(ms) */
  duration?: number
  /** 是否可关闭 */
  closable?: boolean
  /** 自定义图标 */
  icon?: ReactNode
  /** 唯一 id */
  id?: string
  /** 位置 */
  position?: 'top' | 'bottom'
  /** 关闭回调 */
  onClose?: () => void
  /** 是否显示图标 */
  showIcon?: boolean
}

export type MessageHookReturnType = {
  info: (config: MessageProps | string) => void
  success: (config: MessageProps | string) => void
  warning: (config: MessageProps | string) => void
  error: (config: MessageProps | string) => void
  loading: (config: MessageProps | string) => void
  normal: (config: MessageProps | string) => void
  clear: () => void
}
