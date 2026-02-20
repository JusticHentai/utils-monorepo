import { ReactNode } from 'react'
import { TooltipProps } from '../Tooltip/interface'

export interface PopoverProps extends Omit<TooltipProps, 'content' | 'mini'> {
  /** 标题 */
  title?: ReactNode
  /** 内容 */
  content?: ReactNode
}
