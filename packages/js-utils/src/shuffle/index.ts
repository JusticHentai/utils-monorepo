/**
 * 创建一个打乱顺序的数组
 * @param collection - 要打乱的集合
 * @returns 返回打乱后的新数组
 * @example
 * shuffle([1, 2, 3, 4])
 * // => [4, 1, 3, 2] (随机结果)
 */
const shuffle = <T>(collection: T[]): T[] => {
  if (!collection?.length) {
    return []
  }

  // Fisher-Yates 洗牌算法
  const result = [...collection]
  const length = result.length

  for (let i = length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    // 交换
    const temp = result[i]
    result[i] = result[randomIndex]
    result[randomIndex] = temp
  }

  return result
}

export default shuffle
