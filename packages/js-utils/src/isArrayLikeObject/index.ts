import isArrayLike from '../isArrayLike'

/**
 * 检查 value 是否是类数组对象
 * @param value - 要检查的值
 * @returns 如果是类数组对象，返回 true
 * @example
 * isArrayLikeObject([1, 2, 3])
 * // => true
 *
 * isArrayLikeObject('abc')
 * // => false
 */
const isArrayLikeObject = (
  value: unknown
): value is ArrayLike<unknown> & object => {
  return typeof value === 'object' && value !== null && isArrayLike(value)
}

export default isArrayLikeObject
