/**
 * 根据比较函数去重
 * @param array - 需要去重的数组
 * @param comparator - 比较函数
 * @returns 返回去重后的新数组
 * @example
 * uniqWith([{ x: 1 }, { x: 2 }, { x: 1 }], (a, b) => a.x === b.x)
 * // => [{ x: 1 }, { x: 2 }]
 */
const uniqWith = <T>(array: T[], comparator: (a: T, b: T) => boolean): T[] => {
  if (!array || array.length === 0) return []

  const result: T[] = []

  for (const item of array) {
    const isDuplicate = result.some((existing) => comparator(item, existing))
    if (!isDuplicate) {
      result.push(item)
    }
  }

  return result
}

export default uniqWith
