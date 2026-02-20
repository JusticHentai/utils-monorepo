import { CSSProperties, ReactNode } from 'react'

export interface SliderProps {
  style?: CSSProperties
  className?: string
  /** 默认值 */
  defaultValue?: number | [number, number]
  /** 值 */
  value?: number | [number, number]
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 步长 */
  step?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 是否垂直 */
  vertical?: boolean
  /** 是否范围选择 */
  range?: boolean
  /** 是否反向 */
  reverse?: boolean
  /** 刻度标记 */
  marks?: Record<number, ReactNode>
  /** 是否只能选择刻度值 */
  onlyMarkValue?: boolean
  /** 是否显示 tooltip */
  tooltipVisible?: boolean
  /** tooltip 格式化 */
  formatTooltip?: (value: number) => string | ReactNode
  /** 变化回调 */
  onChange?: (value: number | [number, number]) => void
  /** 拖拽结束回调 */
  onAfterChange?: (value: number | [number, number]) => void
}
