/**
 * 将 value 转换为数组
 * @param value - 要转换的值
 * @returns 返回转换后的数组
 * @example
 * toArray({ a: 1, b: 2 })
 * // => [1, 2]
 *
 * toArray('abc')
 * // => ['a', 'b', 'c']
 */
const toArray = <T>(value: unknown): T[] => {
  if (value == null) {
    return []
  }

  if (typeof value === 'string') {
    return value.split('') as T[]
  }

  if (Array.isArray(value)) {
    return [...value]
  }

  if (typeof value === 'object') {
    return Object.values(value) as T[]
  }

  return []
}

export default toArray
