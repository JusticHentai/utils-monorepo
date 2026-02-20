/**
 * 遍历集合，返回第一个满足谓词函数的元素
 * @param collection - 要搜索的集合
 * @param predicate - 每次迭代调用的函数
 * @param fromIndex - 搜索的起始索引，默认为 0
 * @returns 返回匹配的元素，否则返回 undefined
 * @example
 * find([1, 2, 3, 4], n => n % 2 === 0)
 * // => 2
 */
const find = <T>(
  collection: T[],
  predicate: (value: T, index: number, collection: T[]) => boolean,
  fromIndex: number = 0
): T | undefined => {
  if (!collection?.length) return undefined

  const start = Math.max(0, fromIndex)

  for (let i = start; i < collection.length; i++) {
    if (predicate(collection[i], i, collection)) {
      return collection[i]
    }
  }

  return undefined
}

export default find
