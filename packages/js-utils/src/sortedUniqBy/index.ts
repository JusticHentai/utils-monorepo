/**
 * 类似于 sortedUniq，但可以指定迭代器
 * @param array - 已排序的数组
 * @param iteratee - 迭代器函数
 * @returns 返回去重后的数组
 * @example
 * sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)
 * // => [1.1, 2.3]
 */
const sortedUniqBy = <T, K>(array: T[], iteratee: (value: T) => K): T[] => {
  if (!array?.length) {
    return []
  }

  const result: T[] = [array[0]]
  let lastComputed = iteratee(array[0])

  for (let i = 1; i < array.length; i++) {
    const computed = iteratee(array[i])
    if (computed !== lastComputed) {
      result.push(array[i])
      lastComputed = computed
    }
  }

  return result
}

export default sortedUniqBy
