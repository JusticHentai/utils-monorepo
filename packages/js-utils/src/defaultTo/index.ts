/**
 * 检查 value 是否为 null 或 undefined，如果是则返回默认值
 * @param value - 要检查的值
 * @param defaultValue - 默认值
 * @returns 返回解析后的值
 * @example
 * defaultTo(1, 10)
 * // => 1
 *
 * defaultTo(undefined, 10)
 * // => 10
 *
 * defaultTo(null, 10)
 * // => 10
 *
 * defaultTo(NaN, 10)
 * // => 10
 */
const defaultTo = <T>(value: T | null | undefined, defaultValue: T): T => {
  if (value == null || value !== value) {
    return defaultValue
  }
  return value
}

export default defaultTo
