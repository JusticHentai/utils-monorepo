import { DEFAULT_MAGNITUDES, FormatNumberOptions } from './interface'

/**
 * 将大数字格式化为带后缀的简短形式（如 1.2K、3.5M、2B）
 *
 * 规则：
 * - 0-999：原样显示
 * - 1,000-999,999：使用 K 后缀
 * - 1,000,000-999,999,999：使用 M 后缀
 * - 1,000,000,000-999,999,999,999：使用 B 后缀
 * - >= 1,000,000,000,000：使用 T 后缀
 *
 * @param options - 格式化选项
 * @returns 格式化后的字符串
 */
const formatNumber = ({
  value,
  decimals = 1,
  trimZeros = true,
  magnitudes = DEFAULT_MAGNITUDES,
}: FormatNumberOptions): string => {
  // 处理非数字情况
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    return '0'
  }

  // 处理负数
  const isNegative = value < 0
  const absValue = Math.abs(value)

  // 小于 1000 直接返回
  if (absValue < 1000) {
    let formatted = absValue.toFixed(decimals)
    if (trimZeros) {
      formatted = parseFloat(formatted).toString()
    }
    return isNegative ? `-${formatted}` : formatted
  }

  // 查找合适的数量级
  for (const { threshold, suffix, divisor } of magnitudes) {
    if (absValue >= threshold) {
      const scaled = absValue / divisor

      // 处理进位：如 999.95K 四舍五入后变成 1000K，应进位为 1M
      const rounded = Number(scaled.toFixed(decimals))
      if (rounded >= 1000) {
        // 递归处理进位情况
        return formatNumber({
          value: isNegative ? -rounded * divisor : rounded * divisor,
          decimals,
          trimZeros,
          magnitudes,
        })
      }

      // 格式化数字
      let formatted = scaled.toFixed(decimals)

      // 去除尾随零
      if (trimZeros) {
        formatted = parseFloat(formatted).toString()
      }

      return `${isNegative ? '-' : ''}${formatted}${suffix}`
    }
  }

  // 理论上不会执行到这里，因为 DEFAULT_MAGNITUDES 的最小阈值是 1000
  // 而 absValue < 1000 的情况已在前面处理
  return String(value)
}

export default formatNumber
