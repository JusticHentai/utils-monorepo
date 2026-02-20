/**
 * 检查 value 是否是整数
 * @param value - 要检查的值
 * @returns 如果是整数，返回 true
 * @example
 * isInteger(3)
 * // => true
 *
 * isInteger('3')
 * // => false
 */
const isInteger = (value: unknown): value is number => {
  return typeof value === 'number' && Number.isInteger(value)
}

export default isInteger
