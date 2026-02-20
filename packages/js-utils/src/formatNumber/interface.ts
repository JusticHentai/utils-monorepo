/** 数量级后缀类型 */
export type NumberSuffix = 'K' | 'M' | 'B' | 'T'

/** 数量级配置 */
export interface NumberMagnitude {
  /** 阈值 */
  threshold: number
  /** 后缀 */
  suffix: NumberSuffix
  /** 除数 */
  divisor: number
}

/** 默认数量级配置 */
export const DEFAULT_MAGNITUDES: NumberMagnitude[] = [
  { threshold: 1e12, suffix: 'T', divisor: 1e12 },
  { threshold: 1e9, suffix: 'B', divisor: 1e9 },
  { threshold: 1e6, suffix: 'M', divisor: 1e6 },
  { threshold: 1e3, suffix: 'K', divisor: 1e3 },
]

/** formatNumber 配置选项 */
export interface FormatNumberOptions {
  /** 要格式化的数字 */
  value: number
  /**
   * 小数位数，默认值：1
   * - 设置为 0 表示不保留小数
   * - 设置为 1 表示保留 1 位小数
   */
  decimals?: number
  /**
   * 是否去除尾随零，默认值：true
   * - true: 1.0K -> 1K
   * - false: 1.0K -> 1.0K
   */
  trimZeros?: boolean
  /**
   * 自定义数量级配置
   * - 默认使用 K/M/B/T 标准配置
   */
  magnitudes?: NumberMagnitude[]
}
