/**
 * 创建一个对象，key 是经过 iteratee 处理的集合元素的结果，value 是该结果出现的次数
 * @param collection - 要迭代的集合
 * @param iteratee - 迭代器函数
 * @returns 返回组成的聚合对象
 * @example
 * countBy([6.1, 4.2, 6.3], Math.floor)
 * // => { '4': 1, '6': 2 }
 *
 * countBy(['one', 'two', 'three'], s => s.length)
 * // => { '3': 2, '5': 1 }
 */
const countBy = <T, K extends PropertyKey>(
  collection: T[],
  iteratee: (value: T) => K
): Record<K, number> => {
  const result = {} as Record<K, number>

  if (!collection?.length) {
    return result
  }

  for (const item of collection) {
    const key = iteratee(item)
    result[key] = (result[key] || 0) + 1
  }

  return result
}

export default countBy
