/**
 * 根据迭代器返回值进行交集运算
 * @param iteratee - 迭代器函数
 * @param arrays - 要检查的数组列表
 * @returns 返回交集数组
 * @example
 * intersectionBy(Math.floor, [2.1, 1.2], [2.3, 3.4])
 * // => [2.1]
 */
const intersectionBy = <T>(
  iteratee: (value: T) => unknown,
  ...arrays: T[][]
): T[] => {
  if (arrays.length === 0) return []
  if (arrays.length === 1) return [...arrays[0]]

  const [first, ...rest] = arrays
  if (!first || first.length === 0) return []

  const sets = rest.map((arr) => new Set(arr.map(iteratee)))
  return first.filter((item) => sets.every((set) => set.has(iteratee(item))))
}

export default intersectionBy
