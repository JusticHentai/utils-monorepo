import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react'

export interface InputNumberProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'onChange' | 'className' | 'value' | 'defaultValue' | 'prefix' | 'suffix'
> {
  style?: CSSProperties
  className?: string
  /** 默认值 */
  defaultValue?: number
  /** 值 */
  value?: number
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 步长 */
  step?: number
  /** 精度 */
  precision?: number
  /** 大小 */
  size?: 'mini' | 'small' | 'default' | 'large'
  /** 是否禁用 */
  disabled?: boolean
  /** 是否隐藏控制按钮 */
  hideControl?: boolean
  /** 模式 */
  mode?: 'embed' | 'button'
  /** 前缀 */
  prefix?: ReactNode
  /** 后缀 */
  suffix?: ReactNode
  /** 格式化 */
  formatter?: (value: number | string) => string
  /** 从格式化值中解析 */
  parser?: (value: string) => number | string
  /** 变化回调 */
  onChange?: (value: number | undefined) => void
  /** 错误状态 */
  error?: boolean
  /** 状态 */
  status?: 'error' | 'warning'
  /** 是否严格模式 */
  strictMode?: boolean
}
