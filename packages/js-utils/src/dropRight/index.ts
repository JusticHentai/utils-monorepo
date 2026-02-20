/**
 * 创建一个切片数组，去除数组末尾的 n 个元素
 * @param array - 要处理的数组
 * @param n - 要去除的元素个数，默认为 1
 * @returns 返回数组的剩余切片
 * @example
 * dropRight([1, 2, 3])
 * // => [1, 2]
 *
 * dropRight([1, 2, 3], 2)
 * // => [1]
 */
const dropRight = <T>(array: T[], n: number = 1): T[] => {
  if (!array?.length) {
    return []
  }

  const length = array.length
  return array.slice(0, n < length ? length - n : 0)
}

export default dropRight
