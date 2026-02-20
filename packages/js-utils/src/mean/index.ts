/**
 * 计算数组的平均值
 * @param array - 要迭代的数组
 * @returns 返回平均值
 * @example
 * mean([4, 2, 8, 6])
 * // => 5
 */
const mean = (array: number[]): number => {
  if (!array?.length) {
    return NaN
  }

  let total = 0
  for (const value of array) {
    total += value
  }

  return total / array.length
}

export default mean
