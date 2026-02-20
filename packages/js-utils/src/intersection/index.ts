/**
 * 创建一个数组，包含所有给定数组中共有的值
 * @param arrays - 要检查的数组列表
 * @returns 返回交集数组
 * @example
 * intersection([2, 1], [2, 3])
 * // => [2]
 */
const intersection = <T>(...arrays: T[][]): T[] => {
  if (arrays.length === 0) return []
  if (arrays.length === 1) return [...arrays[0]]

  const [first, ...rest] = arrays
  if (!first || first.length === 0) return []

  const sets = rest.map((arr) => new Set(arr))
  return first.filter((item) => sets.every((set) => set.has(item)))
}

export default intersection
