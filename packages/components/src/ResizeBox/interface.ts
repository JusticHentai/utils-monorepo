import { CSSProperties, ReactNode } from 'react'

export type Direction = 'left' | 'right' | 'top' | 'bottom'
export type SplitDirection =
  | 'horizontal'
  | 'vertical'
  | 'horizontal-reverse'
  | 'vertical-reverse'

export interface CollapsedConfig {
  /** 折叠按钮图标 */
  icon?: ReactNode
  /** 折叠按钮点击时回调 */
  onClick?: (
    e: React.MouseEvent,
    collapsed: boolean,
    activeDirection: 'prev' | 'next'
  ) => void
}

export interface ResizeBoxProps {
  className?: string | string[]
  style?: CSSProperties
  /** 宽度 */
  width?: number | string
  /** 高度 */
  height?: number | string
  /** 可以进行伸缩的边 */
  directions?: Direction[]
  /** 自定义伸缩杆的图标 */
  resizeIcons?: Record<Direction, ReactNode>
  /** 自定义伸缩杆 */
  resizeTriggers?: Record<Direction, ReactNode>
  /** 子元素 */
  children?: ReactNode
  /** 拖拽开始的回调 */
  onMovingStart?: (e: React.MouseEvent) => void
  /** 拖拽中的回调 */
  onMoving?: (e: MouseEvent, size: { width: number; height: number }) => void
  /** 拖拽结束的回调 */
  onMovingEnd?: (e: MouseEvent) => void
}

export interface SplitProps {
  className?: string | string[]
  style?: CSSProperties
  /** 方向 */
  direction?: SplitDirection
  /** 分割的大小 */
  size?: number | string
  /** 最小阈值 */
  min?: number | string
  /** 最大阈值 */
  max?: number | string
  /** 第一个面板 */
  panes: [ReactNode, ReactNode]
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义伸缩杆 */
  trigger?:
    | ReactNode
    | ((prev: ReactNode, resize: ReactNode, next: ReactNode) => ReactNode)
  /** 面板大小改变时回调 */
  onMoving?: (e: MouseEvent, size: number | string) => void
  /** 拖拽开始回调 */
  onMovingStart?: (e: React.MouseEvent) => void
  /** 拖拽结束回调 */
  onMovingEnd?: (e: MouseEvent) => void
  /** 面板大小变化回调 */
  onPaneResize?: (paneContainerSizes: number[]) => void
}

export interface SplitGroupPane {
  /** 面板内容 */
  content: ReactNode
  /** 大小 */
  size?: number | string
  /** 最小阈值 */
  min?: number | string
  /** 最大阈值 */
  max?: number | string
  /** 是否禁用拖拽 */
  disabled?: boolean
  /** 是否可折叠 */
  collapsible?:
    | boolean
    | {
        prev?: boolean | CollapsedConfig
        next?: boolean | CollapsedConfig
      }
  /** 是否可拖拽 */
  resizable?: boolean
  /** 自定义伸缩杆 */
  trigger?:
    | ReactNode
    | ((prev: ReactNode, resize: ReactNode, next: ReactNode) => ReactNode)
}

export interface SplitGroupProps {
  className?: string | string[]
  style?: CSSProperties
  /** 方向 */
  direction?: 'horizontal' | 'vertical'
  /** 面板配置 */
  panes: SplitGroupPane[]
  /** 拖拽中回调 */
  onMoving?: (e: MouseEvent, sizes: string[]) => void
  /** 拖拽开始回调 */
  onMovingStart?: (e: React.MouseEvent) => void
  /** 拖拽结束回调 */
  onMovingEnd?: (e: MouseEvent) => void
}
