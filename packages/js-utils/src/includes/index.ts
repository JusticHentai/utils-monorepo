/**
 * 检查集合中是否包含指定的值
 * @param collection - 要搜索的集合
 * @param value - 要搜索的值
 * @param fromIndex - 开始搜索的索引，默认为 0
 * @returns 如果找到值，返回 true，否则返回 false
 * @example
 * includes([1, 2, 3], 1)
 * // => true
 *
 * includes([1, 2, 3], 1, 2)
 * // => false
 *
 * includes('abcd', 'bc')
 * // => true
 */
const includes = <T>(
  collection: T[] | string,
  value: T | string,
  fromIndex: number = 0
): boolean => {
  if (!collection?.length) {
    return false
  }

  if (typeof collection === 'string') {
    return collection.includes(value as string, fromIndex)
  }

  const length = collection.length
  let index = fromIndex < 0 ? Math.max(length + fromIndex, 0) : fromIndex

  while (index < length) {
    if (collection[index] === value) {
      return true
    }
    index++
  }

  return false
}

export default includes
