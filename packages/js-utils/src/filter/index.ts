/**
 * 遍历集合中的元素，返回所有满足谓词函数的元素组成的数组
 * @param collection - 要迭代的集合
 * @param predicate - 每次迭代调用的函数
 * @returns 返回过滤后的新数组
 * @example
 * filter([1, 2, 3, 4], n => n % 2 === 0)
 * // => [2, 4]
 */
const filter = <T>(
  collection: T[],
  predicate: (value: T, index: number, collection: T[]) => boolean
): T[] => {
  if (!collection?.length) {
    return []
  }

  const result: T[] = []

  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i], i, collection)) {
      result.push(collection[i])
    }
  }

  return result
}

export default filter
