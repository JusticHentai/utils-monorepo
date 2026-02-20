/**
 * 计算数组中的最小值
 * @param array - 要迭代的数组
 * @returns 返回最小值，数组为空时返回 undefined
 * @example
 * min([4, 2, 8, 6])
 * // => 2
 */
const min = <T>(array: T[]): T | undefined => {
  if (!array?.length) {
    return undefined
  }

  let result = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] < result) {
      result = array[i]
    }
  }

  return result
}

export default min
