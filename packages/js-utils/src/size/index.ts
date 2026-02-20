/**
 * 返回集合的长度
 * @param collection - 要检查的集合
 * @returns 返回集合的长度
 * @example
 * size([1, 2, 3])
 * // => 3
 *
 * size({ a: 1, b: 2 })
 * // => 2
 *
 * size('pebbles')
 * // => 7
 */
const size = (
  collection: unknown[] | Record<string, unknown> | string | null | undefined
): number => {
  if (collection == null) {
    return 0
  }

  if (typeof collection === 'string' || Array.isArray(collection)) {
    return collection.length
  }

  if (typeof collection === 'object') {
    return Object.keys(collection).length
  }

  return 0
}

export default size
