import toPathArray from '../toPathArray'

/**
 * 检查对象自有属性路径是否存在
 * @param object - 要检查的对象
 * @param path - 要检查的路径
 * @returns 如果路径存在，返回 true
 * @example
 * has({ a: { b: 2 } }, 'a.b')
 * // => true
 *
 * has({ a: { b: 2 } }, 'a.c')
 * // => false
 */
const has = (object: unknown, path: string | string[]): boolean => {
  if (object == null) return false

  const pathArray = Array.isArray(path) ? path : toPathArray(path)
  let current: unknown = object

  for (let i = 0; i < pathArray.length; i++) {
    if (current == null || typeof current !== 'object') {
      return false
    }

    const key = pathArray[i]

    if (!Object.prototype.hasOwnProperty.call(current, key)) {
      return false
    }

    current = (current as Record<string, unknown>)[key]
  }

  return true
}

export default has
