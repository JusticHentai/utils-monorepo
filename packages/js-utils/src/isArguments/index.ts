import getTag from '../getTag'

/**
 * 检查 value 是否是类 arguments 对象
 * @param value - 要检查的值
 * @returns 如果是 arguments 对象，返回 true
 * @example
 * isArguments(function() { return arguments }())
 * // => true
 */
const isArguments = (value: unknown): value is IArguments => {
  return getTag(value) === '[object Arguments]'
}

export default isArguments
