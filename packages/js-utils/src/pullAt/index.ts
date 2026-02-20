/**
 * 移除数组中指定索引的元素，并返回被移除的元素
 * @param array - 要修改的数组
 * @param indexes - 要移除的索引
 * @returns 返回被移除的元素数组
 * @example
 * const array = ['a', 'b', 'c', 'd']
 * const pulled = pullAt(array, [1, 3])
 * // array => ['a', 'c']
 * // pulled => ['b', 'd']
 */
const pullAt = <T>(array: T[], indexes: number[]): T[] => {
  if (!array?.length || !indexes?.length) {
    return []
  }

  const result: T[] = []
  const indexSet = new Set(indexes.filter((i) => i >= 0 && i < array.length))

  for (const index of indexes) {
    if (index >= 0 && index < array.length) {
      result.push(array[index])
    }
  }

  let writeIndex = 0
  for (let readIndex = 0; readIndex < array.length; readIndex++) {
    if (!indexSet.has(readIndex)) {
      array[writeIndex] = array[readIndex]
      writeIndex++
    }
  }

  array.length = writeIndex
  return result
}

export default pullAt
