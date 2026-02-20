/**
 * 检查值是否为空
 * 对于数组和字符串，检查长度是否为 0
 * 对于对象，检查是否没有可枚举属性
 * 对于 Map 和 Set，检查 size 是否为 0
 * @param value - 要检查的值
 * @returns 如果值为空返回 true
 * @example
 * isEmpty(null)      // => true
 * isEmpty(undefined) // => true
 * isEmpty('')        // => true
 * isEmpty([])        // => true
 * isEmpty({})        // => true
 * isEmpty(new Map()) // => true
 * isEmpty(new Set()) // => true
 * isEmpty([1, 2, 3]) // => false
 * isEmpty('abc')     // => false
 * isEmpty({ a: 1 })  // => false
 */
const isEmpty = (value: unknown): boolean => {
  // null 或 undefined
  if (value == null) return true

  // 数组或字符串
  if (Array.isArray(value) || typeof value === 'string') {
    return value.length === 0
  }

  // Map 或 Set
  if (value instanceof Map || value instanceof Set) {
    return value.size === 0
  }

  // 对象
  if (typeof value === 'object') {
    return Object.keys(value).length === 0
  }

  // 其他类型（数字、布尔值等）视为非空
  return false
}

export default isEmpty
