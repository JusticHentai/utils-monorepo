import orderBy from '../orderBy'

/**
 * 根据单个属性对集合进行排序
 * @param collection - 要排序的集合
 * @param iteratees - 排序依据
 * @returns 返回排序后的新数组
 * @example
 * sortBy([{ name: 'b' }, { name: 'a' }], 'name')
 * // => [{ name: 'a' }, { name: 'b' }]
 */
const sortBy = <T>(
  collection: T[],
  iteratees:
    | keyof T
    | ((value: T) => unknown)
    | (keyof T | ((value: T) => unknown))[]
): T[] => {
  const iterateeArray = Array.isArray(iteratees) ? iteratees : [iteratees]
  return orderBy(collection, iterateeArray)
}

export default sortBy
