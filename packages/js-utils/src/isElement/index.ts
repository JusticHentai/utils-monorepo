/**
 * 检查 value 是否是 DOM 元素
 * @param value - 要检查的值
 * @returns 如果是 DOM 元素，返回 true
 * @example
 * isElement(document.body)
 * // => true
 */
import isPlainObject from '../isPlainObject'

const isElement = (value: unknown): value is Element => {
  return (
    typeof value === 'object' &&
    value !== null &&
    (value as { nodeType?: number }).nodeType === 1 &&
    !isPlainObject(value)
  )
}

export default isElement
