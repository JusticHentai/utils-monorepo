import { CSSProperties, ReactNode } from 'react'

export interface RateProps {
  style?: CSSProperties
  className?: string
  /** 默认值 */
  defaultValue?: number
  /** 值 */
  value?: number
  /** 总数 */
  count?: number
  /** 是否允许半星 */
  allowHalf?: boolean
  /** 是否允许清除 */
  allowClear?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readonly?: boolean
  /** 自定义字符 */
  character?: ReactNode | ((index: number) => ReactNode)
  /** 颜色分级 */
  grading?: boolean
  /** 每项的提示信息 */
  tooltips?: string[]
  /** 变化回调 */
  onChange?: (value: number) => void
  /** hover 变化回调 */
  onHoverChange?: (value: number) => void
}
