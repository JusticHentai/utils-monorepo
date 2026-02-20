/**
 * 类似于 pullAll，但可以指定迭代器
 * @param array - 要修改的数组
 * @param values - 要移除的值数组
 * @param iteratee - 迭代器函数
 * @returns 返回修改后的数组
 * @example
 * const array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }]
 * pullAllBy(array, [{ x: 1 }, { x: 3 }], o => o.x)
 * // => [{ x: 2 }]
 */
const pullAllBy = <T, K>(
  array: T[],
  values: T[],
  iteratee: (value: T) => K
): T[] => {
  if (!array?.length || !values?.length) {
    return array || []
  }

  const valuesSet = new Set(values.map(iteratee))
  let writeIndex = 0

  for (let readIndex = 0; readIndex < array.length; readIndex++) {
    if (!valuesSet.has(iteratee(array[readIndex]))) {
      array[writeIndex] = array[readIndex]
      writeIndex++
    }
  }

  array.length = writeIndex
  return array
}

export default pullAllBy
