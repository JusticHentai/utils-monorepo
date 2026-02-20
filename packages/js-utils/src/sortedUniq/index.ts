/**
 * 对已排序的数组去重
 * @param array - 已排序的数组
 * @returns 返回去重后的数组
 * @example
 * sortedUniq([1, 1, 2])
 * // => [1, 2]
 */
const sortedUniq = <T>(array: T[]): T[] => {
  if (!array?.length) {
    return []
  }

  const result: T[] = [array[0]]

  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      result.push(array[i])
    }
  }

  return result
}

export default sortedUniq
