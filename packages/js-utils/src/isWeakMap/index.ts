import getTag from '../getTag'

/**
 * 检查 value 是否是 WeakMap 对象
 * @param value - 要检查的值
 * @returns 如果是 WeakMap，返回 true
 * @example
 * isWeakMap(new WeakMap())
 * // => true
 *
 * isWeakMap(new Map())
 * // => false
 */
const isWeakMap = (value: unknown): value is WeakMap<object, unknown> => {
  return getTag(value) === '[object WeakMap]'
}

export default isWeakMap
