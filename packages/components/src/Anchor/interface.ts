import { CSSProperties, ReactNode } from 'react'

export interface AnchorProps {
  className?: string | string[]
  style?: CSSProperties
  /** 是否平滑滚动 */
  animation?: boolean
  /** 方向 */
  direction?: 'vertical' | 'horizontal'
  /** 滚动容器 */
  scrollContainer?: string | HTMLElement | Window
  /** 滚动边界值 */
  boundary?: number | 'end' | 'start' | 'center' | 'nearest'
  /** 是否改变 hash */
  hash?: boolean
  /** 是否固定 */
  affix?: boolean
  /** Affix 组件的样式 */
  affixStyle?: CSSProperties
  /** 距离窗口顶部触发偏移量 */
  offsetTop?: number
  /** 距离窗口底部触发偏移量 */
  offsetBottom?: number
  /** 锚点改变时触发 */
  onChange?: (newLink: string, oldLink: string) => void
  /** 点击锚点时触发 */
  onSelect?: (newLink: string, oldLink: string) => void
  /** 是否没有左侧轴线 */
  lineless?: boolean
  /** 容器中基准线的位置偏移量 */
  targetOffset?: number
}

export interface AnchorLinkProps {
  className?: string | string[]
  style?: CSSProperties
  /** 锚点链接 */
  href?: string
  /** 文本内容 */
  title?: string | ReactNode
}
