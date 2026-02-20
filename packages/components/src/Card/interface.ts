import { CSSProperties, ReactNode } from 'react'

export interface CardProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 标题 */
  title?: ReactNode
  /** 额外操作区域 */
  extra?: ReactNode
  /** 卡片封面 */
  cover?: ReactNode
  /** 是否有边框 */
  bordered?: boolean
  /** 是否可悬浮 */
  hoverable?: boolean
  /** 加载中状态 */
  loading?: boolean
  /** 大小 */
  size?: 'default' | 'small'
  /** 标题区域自定义 */
  headerStyle?: CSSProperties
  /** 内容区域自定义 */
  bodyStyle?: CSSProperties
  /** 操作组 */
  actions?: ReactNode[]
}

export interface CardMetaProps {
  style?: CSSProperties
  className?: string
  /** 头像 */
  avatar?: ReactNode
  /** 标题 */
  title?: ReactNode
  /** 描述 */
  description?: ReactNode
}

export interface CardGridProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 是否可悬浮 */
  hoverable?: boolean
}
