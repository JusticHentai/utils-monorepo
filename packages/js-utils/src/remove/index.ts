/**
 * 移除数组中所有满足谓词函数的元素，并返回被移除的元素
 * @param array - 要修改的数组
 * @param predicate - 每次迭代调用的函数
 * @returns 返回被移除的元素数组
 * @example
 * const array = [1, 2, 3, 4]
 * const evens = remove(array, n => n % 2 === 0)
 * // array => [1, 3]
 * // evens => [2, 4]
 */
const remove = <T>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => boolean
): T[] => {
  if (!array?.length) {
    return []
  }

  const result: T[] = []
  let writeIndex = 0

  for (let readIndex = 0; readIndex < array.length; readIndex++) {
    if (predicate(array[readIndex], readIndex, array)) {
      result.push(array[readIndex])
    } else {
      array[writeIndex] = array[readIndex]
      writeIndex++
    }
  }

  array.length = writeIndex
  return result
}

export default remove
