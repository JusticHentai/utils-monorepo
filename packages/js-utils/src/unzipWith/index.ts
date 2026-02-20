import unzip from '../unzip'

/**
 * 类似于 unzip，但可以指定如何重新组合元素
 * @param array - 要处理的分组元素数组
 * @param iteratee - 迭代器函数
 * @returns 返回重新分组的数组
 * @example
 * const zipped = [[1, 10, 100], [2, 20, 200]]
 * unzipWith(zipped, (...values) => values.reduce((a, b) => a + b, 0))
 * // => [111, 222]
 */
const unzipWith = <T, R>(
  array: T[][],
  iteratee: (...values: T[]) => R
): R[] => {
  if (!array?.length) {
    return []
  }

  const unzipped = unzip(array)
  return unzipped.map((group) => iteratee(...group))
}

export default unzipWith
