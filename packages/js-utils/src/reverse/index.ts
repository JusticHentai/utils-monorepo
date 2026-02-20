/**
 * 反转数组（直接修改原数组）
 * @param array - 要反转的数组
 * @returns 返回反转后的数组
 * @example
 * const array = [1, 2, 3]
 * reverse(array)
 * // => [3, 2, 1]
 * // array => [3, 2, 1]
 */
const reverse = <T>(array: T[]): T[] => {
  if (!array?.length) {
    return array || []
  }

  return array.reverse()
}

export default reverse
