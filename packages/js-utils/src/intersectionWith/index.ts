/**
 * 根据比较函数进行交集运算
 * @param comparator - 比较函数
 * @param arrays - 要检查的数组列表
 * @returns 返回交集数组
 * @example
 * intersectionWith(
 *   (a, b) => a.x === b.x && a.y === b.y,
 *   [{ x: 1, y: 2 }, { x: 2, y: 1 }],
 *   [{ x: 1, y: 1 }, { x: 1, y: 2 }]
 * )
 * // => [{ x: 1, y: 2 }]
 */
const intersectionWith = <T>(
  comparator: (a: T, b: T) => boolean,
  ...arrays: T[][]
): T[] => {
  if (arrays.length === 0) return []
  if (arrays.length === 1) return [...arrays[0]]

  const [first, ...rest] = arrays
  if (!first || first.length === 0) return []

  return first.filter((item) =>
    rest.every((arr) => arr.some((value) => comparator(item, value)))
  )
}

export default intersectionWith
