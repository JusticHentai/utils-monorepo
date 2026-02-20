/**
 * 计算数组中的最大值
 * @param array - 要迭代的数组
 * @returns 返回最大值
 * @example
 * max([4, 2, 8, 6])
 * // => 8
 */
const max = <T>(array: T[]): T | undefined => {
  if (!array?.length) {
    return undefined
  }

  let result = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > result) {
      result = array[i]
    }
  }

  return result
}

export default max
