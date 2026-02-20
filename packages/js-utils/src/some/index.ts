/**
 * 检测集合中是否有任何元素满足谓词函数
 * @param collection - 要迭代的集合
 * @param predicate - 每次迭代调用的函数
 * @returns 如果有元素通过谓词检查，返回 true，否则返回 false
 * @example
 * some([null, 0, 'yes', false], Boolean)
 * // => true
 */
const some = <T>(
  collection: T[],
  predicate: (value: T, index: number, collection: T[]) => boolean
): boolean => {
  if (!collection?.length) {
    return false
  }

  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i], i, collection)) {
      return true
    }
  }

  return false
}

export default some
