import { CSSProperties, ReactNode } from 'react'

export interface ModalProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 标题 */
  title?: ReactNode
  /** 是否可见 */
  visible?: boolean
  /** 确定按钮文字 */
  okText?: ReactNode
  /** 取消按钮文字 */
  cancelText?: ReactNode
  /** 确定按钮类型 */
  okButtonProps?: Record<string, unknown>
  /** 取消按钮类型 */
  cancelButtonProps?: Record<string, unknown>
  /** 宽度 */
  width?: number | string
  /** 是否有遮罩 */
  mask?: boolean
  /** 点击遮罩是否关闭 */
  maskClosable?: boolean
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 是否显示关闭按钮 */
  closable?: boolean
  /** 自定义关闭图标 */
  closeIcon?: ReactNode
  /** 确认 loading */
  confirmLoading?: boolean
  /** 页脚 */
  footer?: ReactNode | null
  /** 是否垂直居中 */
  alignCenter?: boolean
  /** 挂载节点 */
  getPopupContainer?: () => HTMLElement
  /** 关闭后是否卸载 */
  unmountOnExit?: boolean
  /** 是否简洁模式（无页脚） */
  simple?: boolean
  /** 确认回调 */
  onOk?: (e: React.MouseEvent) => void | Promise<void>
  /** 取消回调 */
  onCancel?: (e: React.MouseEvent) => void
  /** 打开后回调 */
  afterOpen?: () => void
  /** 关闭后回调 */
  afterClose?: () => void
  /** z-index */
  zIndex?: number
  /** 是否自动聚焦 */
  autoFocus?: boolean
  /** 是否 ESC 关闭 */
  escToClose?: boolean
}
