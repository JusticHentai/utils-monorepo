/**
 * 创建一个新数组，将原数组与其他数组或值连接
 * @param array - 原数组
 * @param values - 要连接的值
 * @returns 返回连接后的新数组
 * @example
 * const array = [1]
 * concat(array, 2, [3], [[4]])
 * // => [1, 2, 3, [4]]
 */
const concat = <T>(array: T[], ...values: (T | T[])[]): T[] => {
  const result: T[] = [...array]

  for (const value of values) {
    if (Array.isArray(value)) {
      result.push(...value)
    } else {
      result.push(value)
    }
  }

  return result
}

export default concat
