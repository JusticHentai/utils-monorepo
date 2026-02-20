/**
 * 创建一个对象，根据迭代器返回值对集合中的元素进行分组
 * @param collection - 要分组的集合
 * @param iteratee - 迭代器函数，或属性名
 * @returns 返回分组后的对象
 * @example
 * groupBy([6.1, 4.2, 6.3], Math.floor)
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * groupBy(['one', 'two', 'three'], 'length')
 * // => { '3': ['one', 'two'], '5': ['three'] }
 *
 * groupBy(
 *   [{ name: 'a', age: 20 }, { name: 'b', age: 20 }, { name: 'c', age: 30 }],
 *   'age'
 * )
 * // => { '20': [{ name: 'a', age: 20 }, { name: 'b', age: 20 }], '30': [{ name: 'c', age: 30 }] }
 */
const groupBy = <T>(
  collection: T[],
  iteratee: ((value: T) => unknown) | keyof T
): Record<string, T[]> => {
  if (!collection || collection.length === 0) return {}

  const result: Record<string, T[]> = {}
  const getKey =
    typeof iteratee === 'function'
      ? iteratee
      : (item: T) => item[iteratee as keyof T]

  for (const item of collection) {
    const key = String(getKey(item))

    if (!result[key]) {
      result[key] = []
    }

    result[key].push(item)
  }

  return result
}

export default groupBy
