/**
 * 类似于 invert，但可以指定迭代器，且结果值是数组
 * @param object - 要转换的对象
 * @param iteratee - 迭代器函数
 * @returns 返回新对象
 * @example
 * const object = { a: 1, b: 2, c: 1 }
 *
 * invertBy(object)
 * // => { '1': ['a', 'c'], '2': ['b'] }
 *
 * invertBy(object, value => 'group' + value)
 * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
 */
const invertBy = <T extends Record<string, unknown>>(
  object: T,
  iteratee: (value: unknown) => string = String
): Record<string, string[]> => {
  const result: Record<string, string[]> = {}

  if (object == null) {
    return result
  }

  for (const key of Object.keys(object)) {
    const groupKey = iteratee(object[key])
    if (!(groupKey in result)) {
      result[groupKey] = []
    }
    result[groupKey].push(key)
  }

  return result
}

export default invertBy
