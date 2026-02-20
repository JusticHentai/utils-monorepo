/**
 * 用值填充数组中从开始索引到结束索引（但不包括结束索引）的全部元素
 * @param array - 要填充的数组
 * @param value - 填充的值
 * @param start - 起始索引，默认为 0
 * @param end - 结束索引，默认为 array.length
 * @returns 返回填充后的数组
 * @example
 * const array = [1, 2, 3]
 * fill(array, 'a')
 * // => ['a', 'a', 'a']
 *
 * fill([4, 6, 8, 10], '*', 1, 3)
 * // => [4, '*', '*', 10]
 */
const fill = <T, V>(
  array: T[],
  value: V,
  start: number = 0,
  end: number = array.length
): (T | V)[] => {
  if (!array?.length) {
    return []
  }

  const length = array.length
  let startIndex =
    start < 0 ? Math.max(length + start, 0) : Math.min(start, length)
  const endIndex = end < 0 ? Math.max(length + end, 0) : Math.min(end, length)

  const result: (T | V)[] = [...array]

  while (startIndex < endIndex) {
    result[startIndex] = value
    startIndex++
  }

  return result
}

export default fill
