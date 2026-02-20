import { CSSProperties } from 'react'

export interface AffixProps {
  className?: string | string[]
  style?: CSSProperties
  /** 给 fixed 元素设置 className */
  affixClassName?: string | string[]
  /** 给 fixed 元素设置 style */
  affixStyle?: CSSProperties
  /** 距离窗口顶部达到指定偏移量后触发 */
  offsetTop?: number
  /** 距离窗口底部达到指定偏移量后触发 */
  offsetBottom?: number
  /** 滚动容器 */
  target?: () => HTMLElement | null | Window
  /** target 的外层滚动元素 */
  targetContainer?: () => HTMLElement | null | Window
  /** 固定状态发生改变时触发 */
  onChange?: (affixed: boolean) => void
  children?: React.ReactNode
}
