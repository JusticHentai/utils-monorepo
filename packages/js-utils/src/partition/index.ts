/**
 * 根据断言函数将集合分成两组
 * 第一组包含断言返回 true 的元素，第二组包含返回 false 的元素
 * @param collection - 要分组的集合
 * @param predicate - 断言函数
 * @returns 返回分组后的数组 [truthy, falsy]
 * @example
 * const users = [
 *   { name: 'barney', age: 36, active: false },
 *   { name: 'fred', age: 40, active: true },
 *   { name: 'pebbles', age: 1, active: false }
 * ]
 *
 * partition(users, (user) => user.active)
 * // => [
 * //   [{ name: 'fred', age: 40, active: true }],
 * //   [{ name: 'barney', age: 36, active: false }, { name: 'pebbles', age: 1, active: false }]
 * // ]
 *
 * partition([1, 2, 3, 4], (n) => n % 2 === 0)
 * // => [[2, 4], [1, 3]]
 */
const partition = <T>(
  collection: T[],
  predicate: (value: T, index: number, array: T[]) => boolean
): [T[], T[]] => {
  if (!collection || collection.length === 0) return [[], []]

  const truthy: T[] = []
  const falsy: T[] = []

  for (let i = 0; i < collection.length; i++) {
    const item = collection[i]
    if (predicate(item, i, collection)) {
      truthy.push(item)
    } else {
      falsy.push(item)
    }
  }

  return [truthy, falsy]
}

export default partition
