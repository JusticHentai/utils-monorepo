import toPathArray from '../toPathArray'

/**
 * 创建一个函数，检查路径属性是否匹配给定的值
 * @param path - 要检查的属性路径
 * @param srcValue - 要匹配的值
 * @returns 返回新的函数
 * @example
 * const objects = [
 *   { a: 1, b: 2, c: 3 },
 *   { a: 4, b: 5, c: 6 }
 * ]
 *
 * objects.find(matchesProperty('a', 4))
 * // => { a: 4, b: 5, c: 6 }
 */
const matchesProperty = <T extends Record<string, unknown>>(
  path: string | string[],
  srcValue: unknown
): ((object: T) => boolean) => {
  const pathArray = typeof path === 'string' ? toPathArray(path) : path

  return (object: T): boolean => {
    let current: unknown = object
    for (const key of pathArray) {
      if (current == null) return false
      current = (current as Record<string, unknown>)[key]
    }

    return current === srcValue
  }
}

export default matchesProperty
