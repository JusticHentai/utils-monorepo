import getTag from '../getTag'

/**
 * 检查 value 是否是 WeakSet 对象
 * @param value - 要检查的值
 * @returns 如果是 WeakSet，返回 true
 * @example
 * isWeakSet(new WeakSet())
 * // => true
 *
 * isWeakSet(new Set())
 * // => false
 */
const isWeakSet = (value: unknown): value is WeakSet<object> => {
  return getTag(value) === '[object WeakSet]'
}

export default isWeakSet
