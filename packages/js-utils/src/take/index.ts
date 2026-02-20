/**
 * 创建一个切片数组，包含数组前面的 n 个元素
 * @param array - 要处理的数组
 * @param n - 要提取的元素个数，默认为 1
 * @returns 返回数组的切片
 * @example
 * take([1, 2, 3])
 * // => [1]
 *
 * take([1, 2, 3], 2)
 * // => [1, 2]
 */
const take = <T>(array: T[], n: number = 1): T[] => {
  if (!array?.length) {
    return []
  }

  return array.slice(0, n < 0 ? 0 : n)
}

export default take
