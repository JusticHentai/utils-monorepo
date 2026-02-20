/**
 * 类似 forEach，但从右到左遍历集合
 * @param collection - 要遍历的集合
 * @param iteratee - 每次迭代调用的函数
 * @returns 返回集合
 * @example
 * forEachRight([1, 2], value => console.log(value))
 * // => 依次输出 2, 1
 */
const forEachRight = <T>(
  collection: T[],
  iteratee: (value: T, index: number, collection: T[]) => void | boolean
): T[] => {
  if (!collection?.length) return collection ?? []

  for (let i = collection.length - 1; i >= 0; i--) {
    if (iteratee(collection[i], i, collection) === false) {
      break
    }
  }

  return collection
}

export default forEachRight
