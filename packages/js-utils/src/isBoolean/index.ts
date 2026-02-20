import getTag from '../getTag'

/**
 * 检查 value 是否是布尔值
 * @param value - 要检查的值
 * @returns 如果是布尔值，返回 true
 * @example
 * isBoolean(false)
 * // => true
 */
const isBoolean = (value: unknown): value is boolean => {
  return (
    value === true || value === false || getTag(value) === '[object Boolean]'
  )
}

export default isBoolean
