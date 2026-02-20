import toPathArray from '../toPathArray'

/**
 * 调用集合中每个元素的方法，返回调用结果的数组
 * @param collection - 要迭代的集合
 * @param path - 要调用的方法路径
 * @param args - 调用方法时传入的参数
 * @returns 返回调用结果的数组
 * @example
 * invokeMap([[5, 1, 7], [3, 2, 1]], 'sort')
 * // => [[1, 5, 7], [1, 2, 3]]
 *
 * invokeMap([123, 456], String.prototype.split, '')
 * // => [['1', '2', '3'], ['4', '5', '6']]
 */
const invokeMap = <T, R>(
  collection: T[],
  path: string | ((...args: unknown[]) => R),
  ...args: unknown[]
): R[] => {
  if (!collection?.length) {
    return []
  }

  const result: R[] = []

  for (const item of collection) {
    let method: ((...args: unknown[]) => R) | undefined

    if (typeof path === 'function') {
      method = path.bind(item) as (...args: unknown[]) => R
    } else {
      const pathParts = toPathArray(path)
      let current: unknown = item

      for (const part of pathParts) {
        if (current == null) break
        current = (current as Record<string, unknown>)[part]
      }

      if (typeof current === 'function') {
        method = (current as (...args: unknown[]) => R).bind(item)
      }
    }

    if (method) {
      result.push(method(...args))
    }
  }

  return result
}

export default invokeMap
