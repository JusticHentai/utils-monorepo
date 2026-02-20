/**
 * 创建一个对象，值是经过迭代器处理的值
 * @param object - 要迭代的对象
 * @param iteratee - 迭代器函数
 * @returns 返回新对象
 * @example
 * const users = {
 *   fred: { user: 'fred', age: 40 },
 *   pebbles: { user: 'pebbles', age: 1 }
 * }
 *
 * mapValues(users, o => o.age)
 * // => { fred: 40, pebbles: 1 }
 */
const mapValues = <T extends Record<string, unknown>, R>(
  object: T,
  iteratee: (value: unknown, key: string, object: T) => R
): Record<string, R> => {
  const result: Record<string, R> = {}

  if (object == null) {
    return result
  }

  for (const key of Object.keys(object)) {
    result[key] = iteratee(object[key], key, object)
  }

  return result
}

export default mapValues
