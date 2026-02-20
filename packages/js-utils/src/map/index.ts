/**
 * 创建一个数组，其值为集合中每个元素经迭代器处理后的结果
 * @param collection - 要迭代的集合
 * @param iteratee - 每次迭代调用的函数
 * @returns 返回映射后的新数组
 * @example
 * const square = n => n * n
 * map([4, 8], square)
 * // => [16, 64]
 *
 * map({ a: 4, b: 8 }, square)
 * // => [16, 64]
 */
const map = <T, R>(
  collection: T[] | Record<string, T>,
  iteratee: (
    value: T,
    key: number | string,
    collection: T[] | Record<string, T>
  ) => R
): R[] => {
  if (!collection) {
    return []
  }

  if (Array.isArray(collection)) {
    const result: R[] = []
    for (let i = 0; i < collection.length; i++) {
      result.push(iteratee(collection[i], i, collection))
    }

    return result
  }

  const result: R[] = []
  for (const key of Object.keys(collection)) {
    result.push(iteratee(collection[key], key, collection))
  }

  return result
}

export default map
