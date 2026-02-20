/**
 * 创建一个对象，根据迭代器返回值作为键，对应元素作为值
 * 如果多个元素产生相同的键，后面的元素会覆盖前面的
 * @param collection - 要处理的集合
 * @param iteratee - 迭代器函数，或属性名
 * @returns 返回键值对象
 * @example
 * const users = [
 *   { id: 'a1', name: 'Alice' },
 *   { id: 'b2', name: 'Bob' }
 * ]
 *
 * keyBy(users, 'id')
 * // => { 'a1': { id: 'a1', name: 'Alice' }, 'b2': { id: 'b2', name: 'Bob' } }
 *
 * keyBy(users, (user) => user.id)
 * // => { 'a1': { id: 'a1', name: 'Alice' }, 'b2': { id: 'b2', name: 'Bob' } }
 */
const keyBy = <T>(
  collection: T[],
  iteratee: ((value: T) => unknown) | keyof T
): Record<string, T> => {
  if (!collection || collection.length === 0) return {}

  const result: Record<string, T> = {}
  const getKey =
    typeof iteratee === 'function'
      ? iteratee
      : (item: T) => item[iteratee as keyof T]

  for (const item of collection) {
    const key = String(getKey(item))
    result[key] = item
  }

  return result
}

export default keyBy
