import flattenDeep from '../flattenDeep'

/**
 * 映射集合并将结果完全递归扁平化
 * @param collection - 要迭代的集合
 * @param iteratee - 每次迭代调用的函数
 * @returns 返回新的扁平化数组
 * @example
 * // flatMap 只扁平一层: [[[2]], [[4]]] => [[2], [4]]
 * // flatMapDeep 完全递归扁平化: [[[2]], [[4]]] => [2, 4]
 * flatMapDeep([1, 2], n => [[[n * 2]]])
 * // => [2, 4]
 */
const flatMapDeep = <T, R>(
  collection: T[],
  iteratee: (value: T, index: number, collection: T[]) => R | R[]
): R[] => {
  if (!collection?.length) return []

  const result: unknown[] = []
  for (let i = 0; i < collection.length; i++) {
    result.push(iteratee(collection[i], i, collection))
  }

  return flattenDeep(result) as R[]
}

export default flatMapDeep
