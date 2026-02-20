/**
 * 类似于 union，但可以指定比较器
 * @param arrays - 要合并的数组
 * @param comparator - 比较器函数
 * @returns 返回新的并集数组
 * @example
 * const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }]
 * const others = [{ x: 1, y: 1 }, { x: 1, y: 2 }]
 * unionWith([objects, others], (a, b) => a.x === b.x && a.y === b.y)
 * // => [{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 1 }]
 */
const unionWith = <T>(
  arrays: T[][],
  comparator: (arrVal: T, othVal: T) => boolean
): T[] => {
  const result: T[] = []

  for (const array of arrays) {
    if (!array?.length) continue
    for (const value of array) {
      const exists = result.some((item) => comparator(item, value))
      if (!exists) {
        result.push(value)
      }
    }
  }

  return result
}

export default unionWith
