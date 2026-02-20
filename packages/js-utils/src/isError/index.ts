import getTag from '../getTag'

/**
 * 检查 value 是否是 Error 对象
 * @param value - 要检查的值
 * @returns 如果是 Error 对象，返回 true
 */
const isError = (value: unknown): value is Error => {
  const tag = getTag(value)

  return (
    tag === '[object Error]' ||
    tag === '[object DOMException]' ||
    value instanceof Error
  )
}

export default isError
