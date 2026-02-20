/**
 * 将键值对数组转换为对象
 * @param pairs - 键值对数组
 * @returns 返回新对象
 * @example
 * fromPairs([['a', 1], ['b', 2]])
 * // => { a: 1, b: 2 }
 */
const fromPairs = <K extends PropertyKey, V>(pairs: [K, V][]): Record<K, V> => {
  const result = {} as Record<K, V>

  if (!pairs?.length) {
    return result
  }

  for (const [key, value] of pairs) {
    result[key] = value
  }

  return result
}

export default fromPairs
