/**
 * 计算数组中所有值的和
 * @param array - 要迭代的数组
 * @returns 返回总和
 * @example
 * sum([4, 2, 8, 6])
 * // => 20
 */
const sum = (array: number[]): number => {
  if (!array?.length) {
    return 0
  }

  let total = 0
  for (const value of array) {
    total += value
  }

  return total
}

export default sum
