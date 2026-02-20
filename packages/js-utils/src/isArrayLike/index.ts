/**
 * 检查 value 是否是类数组
 * @param value - 要检查的值
 * @returns 如果是类数组，返回 true
 * @example
 * isArrayLike([1, 2, 3])
 * // => true
 *
 * isArrayLike('abc')
 * // => true
 *
 * isArrayLike(() => {})
 * // => false
 */
const isArrayLike = (value: unknown): value is ArrayLike<unknown> => {
  if (value == null || typeof value === 'function') {
    return false
  }

  const length = (value as { length?: number }).length

  return (
    typeof length === 'number' &&
    length >= 0 &&
    length <= Number.MAX_SAFE_INTEGER
  )
}

export default isArrayLike
