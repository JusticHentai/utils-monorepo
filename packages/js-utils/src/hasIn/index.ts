import toPathArray from '../toPathArray'

/**
 * 检查对象属性路径是否存在（含继承属性）
 * @param object - 要检查的对象
 * @param path - 要检查的路径
 * @returns 如果路径存在，返回 true
 * @example
 * const object = Object.create({ a: 1 })
 * hasIn(object, 'a')
 * // => true
 */
const hasIn = (object: unknown, path: string | string[]): boolean => {
  if (object == null) return false

  const pathArray = Array.isArray(path) ? path : toPathArray(path)
  let current: unknown = object

  for (let i = 0; i < pathArray.length; i++) {
    if (current == null) {
      return false
    }

    const key = pathArray[i]

    if (!(key in (current as object))) {
      return false
    }

    current = (current as Record<string, unknown>)[key]
  }

  return true
}

export default hasIn
