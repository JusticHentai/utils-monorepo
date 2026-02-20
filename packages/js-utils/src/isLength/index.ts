/**
 * 检查 value 是否是有效的类数组长度
 * @param value - 要检查的值
 * @returns 如果是有效长度，返回 true
 * @example
 * isLength(3)
 * // => true
 *
 * isLength(-1)
 * // => false
 */
const isLength = (value: unknown): value is number => {
  return (
    typeof value === 'number' &&
    value >= 0 &&
    value <= Number.MAX_SAFE_INTEGER &&
    value % 1 === 0
  )
}

export default isLength
