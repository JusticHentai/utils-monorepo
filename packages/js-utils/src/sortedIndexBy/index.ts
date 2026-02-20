/**
 * 类似于 sortedIndex，但可以指定迭代器
 * @param array - 已排序的数组
 * @param value - 要评估的值
 * @param iteratee - 迭代器函数
 * @returns 返回 value 应该插入的索引
 * @example
 * const objects = [{ x: 4 }, { x: 5 }]
 * sortedIndexBy(objects, { x: 4 }, o => o.x)
 * // => 0
 */
const sortedIndexBy = <T, K>(
  array: T[],
  value: T,
  iteratee: (value: T) => K
): number => {
  if (!array?.length) {
    return 0
  }

  const computedValue = iteratee(value)
  let low = 0
  let high = array.length

  while (low < high) {
    const mid = Math.floor((low + high) / 2)
    if (iteratee(array[mid]) < computedValue) {
      low = mid + 1
    } else {
      high = mid
    }
  }

  return low
}

export default sortedIndexBy
