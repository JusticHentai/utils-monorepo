import toPathArray from '../toPathArray'

/**
 * 移除对象指定路径的属性
 * @param object - 要修改的对象
 * @param path - 要移除的属性路径
 * @returns 如果成功移除属性，返回 true
 * @example
 * const object = { a: [{ b: { c: 7 } }] }
 *
 * unset(object, 'a[0].b.c')
 * // => true
 *
 * console.log(object)
 * // => { a: [{ b: {} }] }
 */
const unset = (
  object: Record<string, unknown>,
  path: string | string[]
): boolean => {
  if (object == null) {
    return true
  }

  const pathArray = typeof path === 'string' ? toPathArray(path) : path

  if (pathArray.length === 0) {
    return false
  }

  let current: unknown = object
  for (let i = 0; i < pathArray.length - 1; i++) {
    if (current == null || typeof current !== 'object') {
      return false
    }
    current = (current as Record<string, unknown>)[pathArray[i]]
  }

  if (current == null || typeof current !== 'object') {
    return false
  }

  const lastKey = pathArray[pathArray.length - 1]
  if (Array.isArray(current)) {
    const index = parseInt(lastKey, 10)
    if (!isNaN(index)) {
      current.splice(index, 1)
      return true
    }
  }

  delete (current as Record<string, unknown>)[lastKey]
  return true
}

export default unset
