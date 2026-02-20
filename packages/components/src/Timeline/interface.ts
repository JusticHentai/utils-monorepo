import { CSSProperties, ReactNode } from 'react'

export interface TimelineProps {
  style?: CSSProperties
  className?: string | string[]
  /** 是否倒序 */
  reverse?: boolean
  /** 时间轴方向 */
  direction?: 'horizontal' | 'vertical'
  /** 时间轴展示类型 */
  mode?: 'left' | 'right' | 'top' | 'bottom' | 'alternate'
  /** 是否展示幽灵节点 */
  pending?: boolean | ReactNode
  /** 自定义幽灵节点 */
  pendingDot?: ReactNode
  /** 标签文本位置 */
  labelPosition?: 'relative' | 'same'
  children?: ReactNode
}

export interface TimelineItemProps {
  style?: CSSProperties
  className?: string | string[]
  /** 节点颜色 */
  dotColor?: string
  /** 节点类型 */
  dotType?: 'hollow' | 'solid'
  /** 自定义节点 */
  dot?: string | ReactNode
  /** 时间轴线类型 */
  lineType?: 'solid' | 'dashed' | 'dotted'
  /** 时间轴线颜色 */
  lineColor?: string
  /** 标签文本 */
  label?: string | ReactNode
  /** 标签文本位置 */
  labelPosition?: 'relative' | 'same'
  /** 是否自动适配自定义节点尺寸 */
  autoFixDotSize?: boolean
  position?: 'left' | 'right'
  direction?: 'horizontal' | 'vertical'
  children?: ReactNode
}
