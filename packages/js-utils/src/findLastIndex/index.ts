/**
 * 类似 findIndex，但从右到左遍历数组
 * @param array - 要搜索的数组
 * @param predicate - 每次迭代调用的函数
 * @param fromIndex - 搜索的起始索引，默认为 array.length - 1
 * @returns 返回匹配元素的索引，否则返回 -1
 * @example
 * findLastIndex([1, 2, 3, 4], n => n % 2 === 1)
 * // => 2
 */
const findLastIndex = <T>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => boolean,
  fromIndex?: number
): number => {
  if (!array?.length) return -1

  const start =
    fromIndex !== undefined
      ? Math.min(fromIndex, array.length - 1)
      : array.length - 1

  for (let i = start; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      return i
    }
  }

  return -1
}

export default findLastIndex
