/**
 * 移除数组中所有等于给定值的元素（直接修改原数组）
 * @param array - 要修改的数组
 * @param values - 要移除的值
 * @returns 返回修改后的数组
 * @example
 * const array = ['a', 'b', 'c', 'a', 'b', 'c']
 * pull(array, 'a', 'c')
 * // => ['b', 'b']
 */
const pull = <T>(array: T[], ...values: T[]): T[] => {
  if (!array?.length || !values.length) {
    return array || []
  }

  const valuesSet = new Set(values)
  let writeIndex = 0

  for (let readIndex = 0; readIndex < array.length; readIndex++) {
    if (!valuesSet.has(array[readIndex])) {
      array[writeIndex] = array[readIndex]
      writeIndex++
    }
  }

  array.length = writeIndex
  return array
}

export default pull
