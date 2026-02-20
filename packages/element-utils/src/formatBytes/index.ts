import {
  ByteUnit,
  FormatBytesOptions,
  FormatBytesResult,
  LOG_1024,
  UNIT_BYTES,
  UNITS,
} from './interface'

/**
 * 格式化字节数为可读字符串
 *
 * 使用对数计算 O(1) 直接定位合适单位，避免循环遍历
 *
 * @param bytes - 字节数
 * @param options - 配置选项
 * @returns 格式化结果，包含数值、单位和格式化字符串
 */
const formatBytes = (
  bytes: number,
  options: FormatBytesOptions = {}
): FormatBytesResult => {
  const { decimals = 2, unit } = options

  // 处理 0 和负数
  if (bytes <= 0) {
    const targetUnit = unit ?? ByteUnit.B
    return {
      value: 0,
      unit: targetUnit,
      formatted: `0 ${targetUnit}`,
    }
  }

  // 如果指定了单位，使用指定单位
  if (unit) {
    const value = bytes / UNIT_BYTES[unit]
    const roundedValue = Number(value.toFixed(decimals))
    return {
      value: roundedValue,
      unit,
      formatted: `${roundedValue} ${unit}`,
    }
  }

  // 使用对数计算直接定位单位索引 O(1)
  // unitIndex = floor(log(bytes) / log(1024))
  const unitIndex = Math.min(
    Math.floor(Math.log(bytes) / LOG_1024),
    UNITS.length - 1
  )

  const targetUnit = UNITS[unitIndex]
  const value = bytes / UNIT_BYTES[targetUnit]
  const roundedValue = Number(value.toFixed(decimals))

  return {
    value: roundedValue,
    unit: targetUnit,
    formatted: `${roundedValue} ${targetUnit}`,
  }
}

export default formatBytes
