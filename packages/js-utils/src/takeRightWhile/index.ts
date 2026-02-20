/**
 * 从数组末尾提取元素，直到谓词函数返回假值
 * @param array - 要处理的数组
 * @param predicate - 每次迭代调用的函数
 * @returns 返回数组的切片
 * @example
 * const users = [
 *   { user: 'barney', active: true },
 *   { user: 'fred', active: false },
 *   { user: 'pebbles', active: false }
 * ]
 * takeRightWhile(users, o => !o.active)
 * // => [{ user: 'fred', active: false }, { user: 'pebbles', active: false }]
 */
const takeRightWhile = <T>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => boolean
): T[] => {
  if (!array?.length) {
    return []
  }

  let index = array.length - 1
  while (index >= 0 && predicate(array[index], index, array)) {
    index--
  }

  return array.slice(index + 1)
}

export default takeRightWhile
