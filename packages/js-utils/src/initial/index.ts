/**
 * 获取数组中除最后一个元素外的所有元素
 * @param array - 要查询的数组
 * @returns 返回截取后的数组
 * @example
 * initial([1, 2, 3])
 * // => [1, 2]
 */
const initial = <T>(array: T[]): T[] => {
  if (!array?.length) {
    return []
  }

  return array.slice(0, -1)
}

export default initial
