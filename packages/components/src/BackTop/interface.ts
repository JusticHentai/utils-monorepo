import { CSSProperties } from 'react'

export interface BackTopProps {
  style?: CSSProperties
  className?: string | string[]
  /** 当滚动到这个高度时，显示返回顶部按钮 */
  visibleHeight?: number
  /** 监听滚动事件的元素 */
  target?: () => HTMLElement | Window
  /** 点击返回顶部时的回调 */
  onClick?: () => void
  /** 滚动到顶部的缓动方式 */
  easing?: string
  /** 滚动到顶部的时间 (ms) */
  duration?: number
  children?: React.ReactNode
}
