import { SortOrder } from './interface'

/**
 * 根据一个或多个属性对集合进行排序
 *
 * 依次按 iteratees 中的条件排序：先按第一个条件排，若相等则继续按下一个条件排，以此类推。
 * 一旦某个条件能分出先后，就直接返回结果，不再检查后续条件。
 *
 * @param collection - 要排序的集合
 * @param iteratees - 排序依据（按优先级从高到低排列）
 * @param orders - 排序方向数组，与 iteratees 按索引对应，缺省默认升序
 * @returns 返回排序后的新数组
 * @example
 * orderBy(objects, ["a","b"], ["desc"])
 */
const orderBy = <T>(
  collection: T[],
  iteratees: (keyof T | ((value: T) => unknown))[],
  orders?: SortOrder[]
): T[] => {
  if (!collection || collection.length === 0) return []
  if (!iteratees || iteratees.length === 0) return [...collection]

  const result = [...collection]

  result.sort((a, b) => {
    for (let i = 0; i < iteratees.length; i++) {
      const iteratee = iteratees[i]
      const order = orders?.[i] ?? SortOrder.ASC

      const getValue =
        typeof iteratee === 'function'
          ? iteratee
          : (item: T) => item[iteratee as keyof T]

      const valueA = getValue(a)
      const valueB = getValue(b)

      let comparison = 0

      if (valueA == null && valueB == null) {
        comparison = 0
      } else if (valueA == null) {
        comparison = 1
      } else if (valueB == null) {
        comparison = -1
      } else if (valueA < valueB) {
        comparison = -1
      } else if (valueA > valueB) {
        comparison = 1
      }

      if (comparison !== 0) {
        return order === SortOrder.DESC ? -comparison : comparison
      }
    }

    return 0
  })

  return result
}

export default orderBy
