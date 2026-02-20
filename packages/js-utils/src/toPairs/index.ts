/**
 * 创建一个由对象的键值对组成的数组
 * @param object - 要转换的对象
 * @returns 返回键值对数组
 * @example
 * toPairs({ a: 1, b: 2 })
 * // => [['a', 1], ['b', 2]]
 */
const toPairs = <T extends Record<string, unknown>>(
  object: T
): [string, unknown][] => {
  if (object == null) {
    return []
  }

  return Object.keys(object).map((key) => [key, object[key]])
}

export default toPairs
