/**
 * 映射集合并将结果扁平化一层
 * @param collection - 要迭代的集合
 * @param iteratee - 每次迭代调用的函数
 * @returns 返回新的扁平化数组
 * @example
 * flatMap([1, 2], n => [n, n])
 * // => [1, 1, 2, 2]
 */
const flatMap = <T, R>(
  collection: T[],
  iteratee: (value: T, index: number, collection: T[]) => R | R[]
): R[] => {
  if (!collection?.length) return []

  const result: R[] = []
  for (let i = 0; i < collection.length; i++) {
    const mapped = iteratee(collection[i], i, collection)
    if (Array.isArray(mapped)) {
      result.push(...mapped)
    } else {
      result.push(mapped)
    }
  }
  return result
}

export default flatMap
