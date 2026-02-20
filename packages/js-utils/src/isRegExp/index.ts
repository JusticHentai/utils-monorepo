import getTag from '../getTag'

/**
 * 检查 value 是否是 RegExp 对象
 * @param value - 要检查的值
 * @returns 如果是 RegExp，返回 true
 * @example
 * isRegExp(/abc/)
 * // => true
 */
const isRegExp = (value: unknown): value is RegExp => {
  return getTag(value) === '[object RegExp]'
}

export default isRegExp
