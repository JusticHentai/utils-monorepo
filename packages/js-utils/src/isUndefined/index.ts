/**
 * 检查 value 是否是 undefined
 * @param value - 要检查的值
 * @returns 如果是 undefined，返回 true
 * @example
 * isUndefined(void 0)
 * // => true
 */
const isUndefined = (value: unknown): value is undefined => {
  return value === undefined
}

export default isUndefined
