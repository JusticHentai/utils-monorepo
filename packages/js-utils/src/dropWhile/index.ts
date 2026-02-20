/**
 * 创建一个切片数组，去除数组中从起点开始到谓词函数返回假值结束的元素
 * @param array - 要处理的数组
 * @param predicate - 每次迭代调用的函数
 * @returns 返回数组的剩余切片
 * @example
 * const users = [
 *   { user: 'barney', active: false },
 *   { user: 'fred', active: false },
 *   { user: 'pebbles', active: true }
 * ]
 *
 * dropWhile(users, o => !o.active)
 * // => [{ user: 'pebbles', active: true }]
 */
const dropWhile = <T>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => boolean
): T[] => {
  if (!array?.length) {
    return []
  }

  let index = 0
  while (index < array.length && predicate(array[index], index, array)) {
    index++
  }

  return array.slice(index)
}

export default dropWhile
