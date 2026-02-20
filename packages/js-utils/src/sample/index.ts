/**
 * 从集合中随机获取一个元素
 * @param collection - 要采样的集合
 * @returns 返回随机元素
 * @example
 * sample([1, 2, 3, 4])
 * // => 2 (随机结果)
 */
const sample = <T>(collection: T[]): T | undefined => {
  if (!collection?.length) {
    return undefined
  }

  const index = Math.floor(Math.random() * collection.length)
  return collection[index]
}

export default sample
