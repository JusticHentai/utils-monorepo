/**
 * 从集合中随机获取 n 个元素
 *
 * 基于 Fisher-Yates 洗牌算法（部分洗牌）：
 * 每次从未选中的区间 [i, length-1] 中随机选一个元素，交换到位置 i 后锁定，
 * 下一轮用 i+随机数 保证不会随机到前面已锁定的元素，只在后面未选中的部分随机。
 * 循环 n 次后，前 n 个位置就是随机选中的元素，最后用 slice(0, n) 裁剪返回。
 *
 * @param collection - 要采样的集合
 * @param n - 要采样的元素个数，默认为 1
 * @returns 返回随机元素数组
 * @example
 * sampleSize([1, 2, 3], 2)
 * // => [3, 1] (随机结果)
 */
const sampleSize = <T>(collection: T[], n: number = 1): T[] => {
  if (!collection?.length) {
    return []
  }

  const length = collection.length
  const size = Math.min(n < 0 ? 0 : n, length)
  const result = [...collection]

  for (let i = 0; i < size; i++) {
    const randomIndex = i + Math.floor(Math.random() * (length - i))
    const temp = result[i]
    result[i] = result[randomIndex]
    result[randomIndex] = temp
  }

  return result.slice(0, size)
}

export default sampleSize
