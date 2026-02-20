/**
 * 类似于 xor，但可以指定比较器
 * @param arrays - 要处理的数组
 * @param comparator - 比较器函数
 * @returns 返回新的对称差集数组
 * @example
 * const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }]
 * const others = [{ x: 1, y: 1 }, { x: 1, y: 2 }]
 * xorWith([objects, others], (a, b) => a.x === b.x && a.y === b.y)
 * // => [{ x: 2, y: 1 }, { x: 1, y: 1 }]
 */
const xorWith = <T>(
  arrays: T[][],
  comparator: (arrVal: T, othVal: T) => boolean
): T[] => {
  if (!arrays.length) {
    return []
  }

  interface CountedValue {
    value: T
    count: number
  }

  const items: CountedValue[] = []

  for (const array of arrays) {
    if (!array?.length) continue
    for (const value of array) {
      const existing = items.find((item) => comparator(item.value, value))
      if (existing) {
        existing.count++
      } else {
        items.push({ value, count: 1 })
      }
    }
  }

  return items.filter((item) => item.count === 1).map((item) => item.value)
}

export default xorWith
