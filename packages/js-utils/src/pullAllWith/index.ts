/**
 * 类似于 pullAll，但可以指定比较器
 * @param array - 要修改的数组
 * @param values - 要移除的值数组
 * @param comparator - 比较器函数
 * @returns 返回修改后的数组
 * @example
 * const array = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6 }]
 * pullAllWith(array, [{ x: 3, y: 4 }], (a, b) => a.x === b.x && a.y === b.y)
 * // => [{ x: 1, y: 2 }, { x: 5, y: 6 }]
 */
const pullAllWith = <T>(
  array: T[],
  values: T[],
  comparator: (arrVal: T, othVal: T) => boolean
): T[] => {
  if (!array?.length || !values?.length) {
    return array || []
  }

  let writeIndex = 0

  for (let readIndex = 0; readIndex < array.length; readIndex++) {
    const shouldRemove = values.some((value) =>
      comparator(array[readIndex], value)
    )
    if (!shouldRemove) {
      array[writeIndex] = array[readIndex]
      writeIndex++
    }
  }

  array.length = writeIndex
  return array
}

export default pullAllWith
