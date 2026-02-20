import { ReactNode } from 'react'
import { TooltipProps } from '../Tooltip/interface'

export interface PopconfirmProps extends Omit<
  TooltipProps,
  'content' | 'mini'
> {
  /** 标题 */
  title?: ReactNode
  /** 内容 */
  content?: ReactNode
  /** 确认按钮文字 */
  okText?: ReactNode
  /** 取消按钮文字 */
  cancelText?: ReactNode
  /** 确认按钮类型 */
  okType?: 'primary' | 'secondary' | 'dashed' | 'text' | 'outline' | 'default'
  /** 图标 */
  icon?: ReactNode
  /** 是否显示图标 */
  showIcon?: boolean
  /** 确认回调 */
  onOk?: () => void | Promise<void>
  /** 取消回调 */
  onCancel?: () => void
  /** 确认按钮loading */
  okLoading?: boolean
  /** 自定义按钮 */
  okButtonProps?: Record<string, unknown>
  /** 自定义按钮 */
  cancelButtonProps?: Record<string, unknown>
}
