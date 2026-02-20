/**
 * 检查 value 是否是安全整数
 * @param value - 要检查的值
 * @returns 如果是安全整数，返回 true
 * @example
 * isSafeInteger(3)
 * // => true
 *
 * isSafeInteger(Number.MAX_SAFE_INTEGER + 1)
 * // => false
 */
const isSafeInteger = (value: unknown): value is number => {
  return typeof value === 'number' && Number.isSafeInteger(value)
}

export default isSafeInteger
