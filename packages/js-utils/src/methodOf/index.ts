import toPathArray from '../toPathArray'

/**
 * 创建一个函数，在给定对象上调用指定路径的方法
 * @param object - 要查询的对象
 * @param args - 调用方法时传入的参数
 * @returns 返回新的函数
 * @example
 * const object = { a: { b: (x: number) => x + 1 } }
 * const fn = methodOf(object, 5)
 * fn('a.b')
 * // => 6
 */
const methodOf = (
  object: Record<string, unknown>,
  ...args: unknown[]
): ((path: string | string[]) => unknown) => {
  return (path: string | string[]): unknown => {
    const pathArray = typeof path === 'string' ? toPathArray(path) : path

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

export default methodOf
