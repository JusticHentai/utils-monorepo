import getTag from '../getTag'

/**
 * 检查 value 是否是 Date 对象
 * @param value - 要检查的值
 * @returns 如果是 Date 对象，返回 true
 * @example
 * isDate(new Date())
 * // => true
 */
const isDate = (value: unknown): value is Date => {
  return getTag(value) === '[object Date]'
}

export default isDate
