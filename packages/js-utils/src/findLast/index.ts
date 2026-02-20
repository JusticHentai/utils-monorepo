/**
 * 类似 find，但从右到左遍历集合
 * @param collection - 要搜索的集合
 * @param predicate - 每次迭代调用的函数
 * @param fromIndex - 搜索的起始索引，默认为 collection.length - 1
 * @returns 返回匹配的元素，否则返回 undefined
 * @example
 * findLast([1, 2, 3, 4], n => n % 2 === 1)
 * // => 3
 */
const findLast = <T>(
  collection: T[],
  predicate: (value: T, index: number, collection: T[]) => boolean,
  fromIndex?: number
): T | undefined => {
  if (!collection?.length) return undefined

  const start =
    fromIndex !== undefined
      ? Math.min(fromIndex, collection.length - 1)
      : collection.length - 1

  for (let i = start; i >= 0; i--) {
    if (predicate(collection[i], i, collection)) {
      return collection[i]
    }
  }

  return undefined
}

export default findLast
