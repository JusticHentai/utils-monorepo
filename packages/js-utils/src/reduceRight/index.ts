/**
 * 从右到左遍历集合中的元素，每次迭代返回累积值
 * @param collection - 要迭代的集合
 * @param iteratee - 每次迭代调用的函数
 * @param accumulator - 初始值
 * @returns 返回累积值
 * @example
 * reduceRight([[0, 1], [2, 3], [4, 5]], (flattened, other) => flattened.concat(other), [])
 * // => [4, 5, 2, 3, 0, 1]
 */
const reduceRight = <T, R>(
  collection: T[] | Record<string, T>,
  iteratee: (accumulator: R, value: T, key: number | string, collection: T[] | Record<string, T>) => R,
  accumulator: R,
): R => {
  if (!collection) {
    return accumulator
  }

  let result = accumulator

  if (Array.isArray(collection)) {
    for (let i = collection.length - 1; i >= 0; i--) {
      result = iteratee(result, collection[i], i, collection)
    }
  } else {
    const keys = Object.keys(collection)
    for (let i = keys.length - 1; i >= 0; i--) {
      const key = keys[i]
      result = iteratee(result, collection[key], key, collection)
    }
  }

  return result
}

export default reduceRight
