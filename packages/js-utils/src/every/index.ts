/**
 * 检测集合中的所有元素是否都满足谓词函数
 * @param collection - 要迭代的集合
 * @param predicate - 每次迭代调用的函数
 * @returns 如果所有元素都通过谓词检查，返回 true，否则返回 false
 * @example
 * every([true, 1, null, 'yes'], Boolean)
 * // => false
 */
const every = <T>(
  collection: T[],
  predicate: (value: T, index: number, collection: T[]) => boolean
): boolean => {
  if (!collection?.length) {
    return true
  }

  for (let i = 0; i < collection.length; i++) {
    if (!predicate(collection[i], i, collection)) {
      return false
    }
  }

  return true
}

export default every
