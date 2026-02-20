import { CSSProperties, ReactNode } from 'react'

export interface ProgressProps {
  style?: CSSProperties
  className?: string
  /** 类型 */
  type?: 'line' | 'circle'
  /** 进度百分比 */
  percent?: number
  /** 状态 */
  status?: 'success' | 'error' | 'warning' | 'normal'
  /** 大小 */
  size?: 'small' | 'default' | 'mini' | 'large'
  /** 是否显示文本 */
  showText?: boolean
  /** 格式化文本 */
  formatText?: (percent: number) => ReactNode
  /** 颜色 */
  color?: string | Record<string, string>
  /** 轨道颜色 */
  trailColor?: string
  /** 线宽 */
  strokeWidth?: number
  /** 圆形进度条宽度 */
  width?: number
  /** 动画 */
  animation?: boolean
  /** 步骤数 */
  steps?: number
  /** 缓冲进度 */
  buffer?: boolean
  /** 缓冲颜色 */
  bufferColor?: string
}
