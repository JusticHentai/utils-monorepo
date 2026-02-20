/**
 * 获取数组中指定索引的元素。如果 n 为负数，则返回从末尾开始的第 n 个元素
 * @param array - 要查询的数组
 * @param n - 元素索引，默认为 0
 * @returns 返回数组中指定索引的元素
 * @example
 * const array = ['a', 'b', 'c', 'd']
 *
 * nth(array, 1)
 * // => 'b'
 *
 * nth(array, -2)
 * // => 'c'
 */
const nth = <T>(array: T[], n: number = 0): T | undefined => {
  if (!array?.length) {
    return undefined
  }

  const index = n < 0 ? array.length + n : n
  return array[index]
}

export default nth
