/**
 * 遍历集合中的元素，每次迭代返回累积值
 * @param collection - 要迭代的集合
 * @param iteratee - 每次迭代调用的函数
 * @param accumulator - 初始值
 * @returns 返回累积值
 * @example
 * reduce([1, 2], (sum, n) => sum + n, 0)
 * // => 3
 */
const reduce = <T, R>(
  collection: T[] | Record<string, T>,
  iteratee: (
    accumulator: R,
    value: T,
    key: number | string,
    collection: T[] | Record<string, T>
  ) => R,
  accumulator: R
): R => {
  if (!collection) {
    return accumulator
  }

  let result = accumulator

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result = iteratee(result, collection[i], i, collection)
    }
  } else {
    for (const key of Object.keys(collection)) {
      result = iteratee(result, collection[key], key, collection)
    }
  }

  return result
}

export default reduce
