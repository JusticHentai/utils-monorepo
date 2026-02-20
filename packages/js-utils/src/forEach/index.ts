/**
 * 遍历数组中的每个元素，调用迭代函数
 * @param collection - 要遍历的集合
 * @param iteratee - 每次迭代调用的函数
 * @returns 返回集合
 * @example
 * forEach([1, 2], value => console.log(value))
 * // => 依次输出 1, 2
 */
const forEach = <T>(
  collection: T[],
  iteratee: (value: T, index: number, collection: T[]) => void | boolean
): T[] => {
  if (!collection?.length) return collection ?? []

  for (let i = 0; i < collection.length; i++) {
    if (iteratee(collection[i], i, collection) === false) {
      break
    }
  }

  return collection
}

export default forEach
