/**
 * 类似于 zip，但可以指定如何组合分组的值
 * @param arrays - 要处理的数组
 * @param iteratee - 迭代器函数
 * @returns 返回分组元素的数组
 * @example
 * zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c)
 * // => [111, 222]
 */
const zipWith = <T, R>(arrays: T[][], iteratee: (...values: T[]) => R): R[] => {
  if (!arrays.length) {
    return []
  }

  const length = Math.max(...arrays.map((arr) => arr?.length || 0))
  const result: R[] = []

  for (let i = 0; i < length; i++) {
    const values: T[] = []
    for (const array of arrays) {
      values.push(array?.[i] as T)
    }
    result.push(iteratee(...values))
  }

  return result
}

export default zipWith
