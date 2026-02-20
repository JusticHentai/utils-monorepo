/**
 * 获取除第一个元素外的所有元素
 * @param array - 要查询的数组
 * @returns 返回截取后的数组
 * @example
 * tail([1, 2, 3])
 * // => [2, 3]
 */
const tail = <T>(array: T[]): T[] => {
  if (!array?.length) {
    return []
  }

  return array.slice(1)
}

export default tail
