/**
 * 创建一个切片数组，去除数组中从末尾开始到谓词函数返回假值结束的元素
 * @param array - 要处理的数组
 * @param predicate - 每次迭代调用的函数
 * @returns 返回数组的剩余切片
 * @example
 * const users = [
 *   { user: 'barney', active: true },
 *   { user: 'fred', active: false },
 *   { user: 'pebbles', active: false }
 * ]
 *
 * dropRightWhile(users, o => !o.active)
 * // => [{ user: 'barney', active: true }]
 */
const dropRightWhile = <T>(
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

  return array.slice(0, index + 1)
}

export default dropRightWhile
