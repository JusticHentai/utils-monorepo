/**
 * 如果 value 不是数组，则将其转换为数组
 * @param value - 要转换的值
 * @returns 返回转换后的数组
 * @example
 * castArray(1)
 * // => [1]
 *
 * castArray({ a: 1 })
 * // => [{ a: 1 }]
 *
 * castArray('abc')
 * // => ['abc']
 *
 * castArray(null)
 * // => [null]
 *
 * castArray(undefined)
 * // => [undefined]
 *
 * castArray([1, 2, 3])
 * // => [1, 2, 3]
 */
const castArray = <T>(value: T | T[]): T[] => {
  if (Array.isArray(value)) {
    return value
  }

  return [value] as T[]
}

export default castArray
