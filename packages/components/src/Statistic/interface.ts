import { CSSProperties, ReactNode } from 'react'

export interface StatisticProps {
  style?: CSSProperties
  className?: string | string[]
  /** 数值的样式 */
  styleValue?: CSSProperties
  /** 小数部分样式 */
  styleDecimal?: CSSProperties
  /** 标题 */
  title?: string | ReactNode
  /** 数值 */
  value?: string | number | Date
  /** 数字精度 */
  precision?: number
  /** 显示千位分割符 */
  groupSeparator?: boolean
  /** 前缀 */
  prefix?: string | ReactNode
  /** 后缀 */
  suffix?: string | ReactNode
  /** 额外内容 */
  extra?: ReactNode
  /** 数字动态变大 */
  countUp?: boolean
  /** 从什么数字开始动态变大 */
  countFrom?: number
  /** 动态变大的过渡时间 (ms) */
  countDuration?: number
  /** 自定义 render 函数 */
  renderFormat?: (
    value: StatisticProps['value'],
    formattedValue: string
  ) => ReactNode
  /** 数字是否加载中 */
  loading?: boolean
}

export interface CountdownProps {
  style?: CSSProperties
  className?: string | string[]
  /** 数值的样式 */
  styleValue?: CSSProperties
  /** 标题 */
  title?: string | ReactNode
  /** 倒计时的时间 */
  value?: number | string | Date
  /** 时间格式 */
  format?: string
  /** 自定义 render 函数 */
  renderFormat?: (valueDiff: number, formattedDiff: string) => ReactNode
  /** 倒计时完成后触发的回调 */
  onFinish?: () => void
  /** 是否开始倒计时 */
  start?: boolean
  /** 当前时间（用于修正初始化时间显示） */
  now?: number | string | Date
}
