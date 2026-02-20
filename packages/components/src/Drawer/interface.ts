import { CSSProperties, ReactNode } from 'react'

export interface DrawerProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 标题 */
  title?: ReactNode
  /** 是否可见 */
  visible?: boolean
  /** 抽屉方向 */
  placement?: 'top' | 'right' | 'bottom' | 'left'
  /** 宽度(left/right 方向) */
  width?: number | string
  /** 高度(top/bottom 方向) */
  height?: number | string
  /** 是否有遮罩 */
  mask?: boolean
  /** 点击遮罩是否关闭 */
  maskClosable?: boolean
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 是否显示关闭按钮 */
  closable?: boolean
  /** 关闭图标 */
  closeIcon?: ReactNode
  /** 页脚 */
  footer?: ReactNode | null
  /** 头部 */
  headerStyle?: CSSProperties
  /** 内容样式 */
  bodyStyle?: CSSProperties
  /** 确认文字 */
  okText?: ReactNode
  /** 取消文字 */
  cancelText?: ReactNode
  /** z-index */
  zIndex?: number
  /** 挂载节点 */
  getPopupContainer?: () => HTMLElement
  /** 关闭后是否卸载 */
  unmountOnExit?: boolean
  /** ESC 关闭 */
  escToClose?: boolean
  /** 确认回调 */
  onOk?: (e: React.MouseEvent) => void
  /** 取消回调 */
  onCancel?: (e: React.MouseEvent) => void
  /** 打开后回调 */
  afterOpen?: () => void
  /** 关闭后回调 */
  afterClose?: () => void
}
