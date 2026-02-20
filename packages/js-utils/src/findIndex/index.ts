/**
 * 返回第一个满足谓词函数的元素的索引
 * @param array - 要搜索的数组
 * @param predicate - 每次迭代调用的函数
 * @param fromIndex - 搜索的起始索引，默认为 0
 * @returns 返回匹配元素的索引，否则返回 -1
 * @example
 * findIndex([1, 2, 3], n => n === 2)
 * // => 1
 */
const findIndex = <T>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => boolean,
  fromIndex: number = 0
): number => {
  if (!array?.length) return -1

  const start = Math.max(0, fromIndex)

  for (let i = start; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return i
    }
  }

  return -1
}

export default findIndex
