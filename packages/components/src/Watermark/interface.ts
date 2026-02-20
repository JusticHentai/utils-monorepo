import { CSSProperties, ReactNode } from 'react'

export interface WatermarkProps {
  style?: CSSProperties
  className?: string
  /** zIndex */
  zIndex?: string | number
  /** 单个水印的宽度 */
  width?: number | string
  /** 单个水印的高度 */
  height?: number | string
  /** 单个水印旋转角度 */
  rotate?: number
  /** 水印图片源 */
  image?: string
  /** 水印的文字内容 */
  content?: string | string[]
  /** 水印文字样式 */
  fontStyle?: {
    color?: string
    fontFamily?: string
    fontSize?: number | string
    fontWeight?: number | string
  }
  /** 水印间的间距 */
  gap?: [number, number]
  /** 水印相对于容器的偏移量 */
  offset?: [number, number]
  /** 添加水印的容器 */
  getContainer?: () => HTMLElement
  children?: ReactNode
}
