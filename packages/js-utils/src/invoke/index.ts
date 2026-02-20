import toPathArray from '../toPathArray'

/**
 * 调用对象指定路径上的方法
 * @param object - 要查询的对象
 * @param path - 方法路径
 * @param args - 传递给方法的参数
 * @returns 返回调用结果
 * @example
 * const object = { a: [{ b: { c: [1, 2, 3, 4] } }] }
 *
 * invoke(object, 'a[0].b.c.slice', 1, 3)
 * // => [2, 3]
 */
const invoke = <T extends Record<string, unknown>>(
  object: T,
  path: string | string[],
  ...args: unknown[]
): unknown => {
  if (object == null) {
    return undefined
  }

  const pathArray = typeof path === 'string' ? toPathArray(path) : path

  // 获取父对象和方法名
  let parent: unknown = object
  for (let i = 0; i < pathArray.length - 1; i++) {
    if (parent == null) return undefined
    parent = (parent as Record<string, unknown>)[pathArray[i]]
  }

  if (parent == null) return undefined

  const methodName = pathArray[pathArray.length - 1]
  const method = (parent as Record<string, unknown>)[methodName]

  if (typeof method === 'function') {
    return method.apply(parent, args)
  }

  return undefined
}

export default invoke
