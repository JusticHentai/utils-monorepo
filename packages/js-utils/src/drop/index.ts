/**
 * 创建一个切片数组，去除数组前面的 n 个元素
 * @param array - 要处理的数组
 * @param n - 要去除的元素个数，默认为 1
 * @returns 返回数组的剩余切片
 * @example
 * drop([1, 2, 3])
 * // => [2, 3]
 *
 * drop([1, 2, 3], 2)
 * // => [3]
 *
 * drop([1, 2, 3], 5)
 * // => []
 */
const drop = <T>(array: T[], n: number = 1): T[] => {
  if (!array?.length) {
    return []
  }

  return array.slice(n < 0 ? 0 : n)
}

export default drop
