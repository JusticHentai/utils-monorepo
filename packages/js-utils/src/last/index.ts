/**
 * 获取数组的最后一个元素
 * @param array - 要查询的数组
 * @returns 返回数组的最后一个元素
 * @example
 * last([1, 2, 3])
 * // => 3
 *
 * last([])
 * // => undefined
 */
const last = <T>(array: T[]): T | undefined => {
  if (!array?.length) {
    return undefined
  }

  return array[array.length - 1]
}

export default last
