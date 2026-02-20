/**
 * 从数组开头提取元素，直到谓词函数返回假值
 * @param array - 要处理的数组
 * @param predicate - 每次迭代调用的函数
 * @returns 返回数组的切片
 * @example
 * const users = [
 *   { user: 'barney', active: false },
 *   { user: 'fred', active: false },
 *   { user: 'pebbles', active: true }
 * ]
 * takeWhile(users, o => !o.active)
 * // => [{ user: 'barney', active: false }, { user: 'fred', active: false }]
 */
const takeWhile = <T>(
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

  return array.slice(0, index)
}

export default takeWhile
