import toPathArray from '../toPathArray'
import type { NestedObject, PropertyPath } from './interface'

/**
 * 根据路径获取对象的属性值
 * @param object - 要查询的对象
 * @param path - 属性路径，支持 'a.b.c' 或 ['a', 'b', 'c'] 格式
 * @param defaultValue - 如果解析值为 undefined，返回的默认值
 * @returns 解析到的值或默认值
 * @example
 * const object = { a: [{ b: { c: 3 } }] }
 *
 * get(object, 'a[0].b.c')
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c'])
 * // => 3
 *
 * get(object, 'a.b.c', 'default')
 * // => 'default'
 */
const get = <T = unknown>(
  object: NestedObject | null | undefined,
  path: PropertyPath,
  defaultValue?: T
): T => {
  if (object == null) return defaultValue as T

  const pathArray = Array.isArray(path) ? path : toPathArray(String(path))
  let result: unknown = object

  for (const key of pathArray) {
    if (result == null) return defaultValue as T

    result = (result as NestedObject)[key as string | number | symbol]
  }

  return (result === undefined ? defaultValue : result) as T
}

export default get
