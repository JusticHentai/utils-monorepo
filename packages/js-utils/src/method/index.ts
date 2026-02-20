import toPathArray from '../toPathArray'

/**
 * 创建一个函数，调用给定对象上指定路径的方法
 * @param path - 要调用的方法路径
 * @param args - 调用方法时传入的参数
 * @returns 返回新的函数
 * @example
 * const objects = [{ a: { b: () => 2 } }, { a: { b: () => 1 } }]
 * objects.map(method('a.b'))
 * // => [2, 1]
 */
const method = (
  path: string | string[],
  ...args: unknown[]
): ((object: Record<string, unknown>) => unknown) => {
  const pathArray = typeof path === 'string' ? toPathArray(path) : path

  return (object: Record<string, unknown>): unknown => {
    let parent: unknown = object
    for (let i = 0; i < pathArray.length - 1; i++) {
      if (parent == null) return undefined
      parent = (parent as Record<string, unknown>)[pathArray[i]]
    }

    if (parent == null) return undefined

    const methodName = pathArray[pathArray.length - 1]
    const func = (parent as Record<string, unknown>)[methodName]

    if (typeof func === 'function') {
      return func.apply(parent, args)
    }

    return undefined
  }
}

export default method
