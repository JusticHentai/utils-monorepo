/**
 * 创建一个包含唯一元素的数组（对称差集）
 *
 * 对称差集：只在其中一个数组中出现、而不同时在多个数组中出现的元素集合。
 * 类似集合论中的 A △ B = (A - B) ∪ (B - A)
 * 例：A = [2, 1]，B = [2, 3]
 *   - 2 同时出现在 A 和 B 中 → 排除
 *   - 1 只在 A 中 → 保留
 *   - 3 只在 B 中 → 保留
 *   - 结果 = [1, 3]
 *
 * @param arrays - 要处理的数组
 * @returns 返回新的对称差集数组
 * @example
 * xor([2, 1], [2, 3])
 * // => [1, 3]
 */
const xor = <T>(...arrays: T[][]): T[] => {
  if (!arrays.length) {
    return []
  }

  // 统计每个值"出现在几个数组中"（不是出现几次）
  const countMap = new Map<T, number>()

  for (const array of arrays) {
    if (!array?.length) continue
    // seen 用于同一数组内去重，避免 [2, 2, 1] 把 2 计数两次
    const seen = new Set<T>()
    for (const value of array) {
      if (!seen.has(value)) {
        seen.add(value)
        // 值每在一个新数组中出现，计数 +1
        countMap.set(value, (countMap.get(value) || 0) + 1)
      }
    }
  }

  // count === 1 表示该值只在一个数组中出现过 → 属于对称差集
  const result: T[] = []
  for (const [value, count] of countMap) {
    if (count === 1) {
      result.push(value)
    }
  }

  return result
}

export default xor
