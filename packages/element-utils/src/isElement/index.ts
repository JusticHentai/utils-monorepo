/**
 * 判断值是否为 DOM Element 实例
 * @param value - 待检测的值
 * @returns 是否为 Element 实例
 */
const isElement = (value: unknown): value is Element => {
  return value instanceof Element
}

export default isElement
