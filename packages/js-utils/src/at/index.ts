import toPathArray from '../toPathArray'

/**
 * 创建一个数组，其值为对象指定路径的值
 * @param object - 要查询的对象
 * @param paths - 要获取的属性路径
 * @returns 返回选取的值数组
 * @example
 * const object = { a: [{ b: { c: 3 } }, 4] }
 *
 * at(object, ['a[0].b.c', 'a[1]'])
 * // => [3, 4]
 */
const at = <T extends Record<string, unknown>>(
  object: T,
  paths: string[]
): unknown[] => {
  if (object == null) {
    return []
  }

  const getByPath = (obj: unknown, pathArray: string[]): unknown => {
    let current = obj
    for (const key of pathArray) {
      if (current == null) return undefined
      current = (current as Record<string, unknown>)[key]
    }
    return current
  }

  return paths.map((path) => {
    const pathArray = toPathArray(path)
    return getByPath(object, pathArray)
  })
}

export default at
