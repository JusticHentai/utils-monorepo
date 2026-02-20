import getTag from '../getTag'

/**
 * 检查 value 是否是 Map 对象
 * @param value - 要检查的值
 * @returns 如果是 Map，返回 true
 * @example
 * isMap(new Map())
 * // => true
 */
const isMap = (value: unknown): value is Map<unknown, unknown> => {
  return getTag(value) === '[object Map]'
}

export default isMap
