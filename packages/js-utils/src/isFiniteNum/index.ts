/**
 * 检查 value 是否是有限数值
 * @param value - 要检查的值
 * @returns 如果是有限数值，返回 true
 * @example
 * isFiniteNum(3)
 * // => true
 *
 * isFiniteNum(Infinity)
 * // => false
 */
const isFiniteNum = (value: unknown): value is number => {
  return typeof value === 'number' && Number.isFinite(value)
}

export default isFiniteNum
