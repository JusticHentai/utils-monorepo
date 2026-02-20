/**
 * 创建一个切片数组，包含数组末尾的 n 个元素
 * @param array - 要处理的数组
 * @param n - 要提取的元素个数，默认为 1
 * @returns 返回数组的切片
 * @example
 * takeRight([1, 2, 3])
 * // => [3]
 *
 * takeRight([1, 2, 3], 2)
 * // => [2, 3]
 */
const takeRight = <T>(array: T[], n: number = 1): T[] => {
  if (!array?.length) {
    return []
  }

  const length = array.length
  return array.slice(n >= length ? 0 : length - n)
}

export default takeRight
