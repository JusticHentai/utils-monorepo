/**
 * 检查 value 是否是 null
 * @param value - 要检查的值
 * @returns 如果是 null，返回 true
 * @example
 * isNull(null)
 * // => true
 *
 * isNull(void 0)
 * // => false
 */
const isNull = (value: unknown): value is null => {
  return value === null
}

export default isNull
