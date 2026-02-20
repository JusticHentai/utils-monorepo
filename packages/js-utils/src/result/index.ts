import toPathArray from '../toPathArray'

/**
 * 解析对象指定路径的值，如果值是函数则调用它
 * @param object - 要查询的对象
 * @param path - 要解析的属性路径
 * @param defaultValue - 默认值
 * @returns 返回解析后的值
 * @example
 * const object = { a: [{ b: { c1: 3, c2: () => 4 } }] }
 *
 * result(object, 'a[0].b.c1')
 * // => 3
 *
 * result(object, 'a[0].b.c2')
 * // => 4
 *
 * result(object, 'a[0].b.c3', 'default')
 * // => 'default'
 */
const result = <T>(
  object: Record<string, unknown>,
  path: string | string[],
  defaultValue?: T
): unknown => {
  if (object == null) {
    return defaultValue
  }

  const pathArray = typeof path === 'string' ? toPathArray(path) : path

  let current: unknown = object
  for (const key of pathArray) {
    if (current == null) {
      return defaultValue
    }
    current = (current as Record<string, unknown>)[key]
  }

  if (current === undefined) {
    return defaultValue
  }

  return typeof current === 'function' ? current.call(object) : current
}

export default result
