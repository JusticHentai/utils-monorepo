/**
 * 将 value 转换为有限数值
 * @param value - 要转换的值
 * @returns 返回转换后的数值
 * @example
 * toFinite(3.2) // => 3.2
 * toFinite(Infinity) // => 1.7976931348623157e+308
 */
const toFinite = (value: unknown): number => {
  if (value == null) {
    return 0
  }

  if (typeof value === 'number') {
    if (value !== value) return 0
    if (value === Infinity) return Number.MAX_VALUE
    if (value === -Infinity) return -Number.MAX_VALUE
    return value
  }

  const result = Number(value)
  if (result !== result) return 0
  if (result === Infinity) return Number.MAX_VALUE
  if (result === -Infinity) return -Number.MAX_VALUE

  return result
}

export default toFinite
