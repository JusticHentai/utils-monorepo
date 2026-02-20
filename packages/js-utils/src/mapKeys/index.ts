/**
 * 创建一个对象，键是经过迭代器处理的键名
 * @param object - 要迭代的对象
 * @param iteratee - 迭代器函数
 * @returns 返回新对象
 * @example
 * mapKeys({ a: 1, b: 2 }, (value, key) => key + value)
 * // => { 'a1': 1, 'b2': 2 }
 */
const mapKeys = <T extends Record<string, unknown>>(
  object: T,
  iteratee: (value: unknown, key: string, object: T) => string
): Record<string, unknown> => {
  const result: Record<string, unknown> = {}

  if (object == null) {
    return result
  }

  for (const key of Object.keys(object)) {
    const newKey = iteratee(object[key], key, object)
    result[newKey] = object[key]
  }

  return result
}

export default mapKeys
