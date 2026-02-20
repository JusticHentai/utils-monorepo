/**
 * 检查 value 是否是类对象
 * @param value - 要检查的值
 * @returns 如果是类对象，返回 true
 * @example
 * isObjectLike({})
 * // => true
 *
 * isObjectLike(null)
 * // => false
 */
const isObjectLike = (value: unknown): value is object => {
  return typeof value === 'object' && value !== null
}

export default isObjectLike
