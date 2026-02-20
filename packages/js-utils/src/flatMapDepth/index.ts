import flattenDepth from '../flattenDepth'

/**
 * 映射集合并将结果扁平化指定深度
 * @param collection - 要迭代的集合
 * @param iteratee - 每次迭代调用的函数
 * @param depth - 扁平化深度，默认为 1
 * @returns 返回新的扁平化数组
 * @example
 * flatMapDepth([1, 2], n => [[[n, n]]], 2)
 * // => [[1, 1], [2, 2]]
 */
const flatMapDepth = <T, R>(
  collection: T[],
  iteratee: (value: T, index: number, collection: T[]) => R | R[],
  depth: number = 1
): R[] => {
  if (!collection?.length) return []

  const result: unknown[] = []
  for (let i = 0; i < collection.length; i++) {
    result.push(iteratee(collection[i], i, collection))
  }

  return flattenDepth(result, depth) as R[]
}

export default flatMapDepth
