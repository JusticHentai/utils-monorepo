import getTag from '../getTag'

/**
 * 检查 value 是否是 Set 对象
 * @param value - 要检查的值
 * @returns 如果是 Set，返回 true
 * @example
 * isSet(new Set())
 * // => true
 */
const isSet = (value: unknown): value is Set<unknown> => {
  return getTag(value) === '[object Set]'
}

export default isSet
