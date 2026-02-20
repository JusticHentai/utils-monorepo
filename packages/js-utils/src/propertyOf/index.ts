import toPathArray from '../toPathArray'

/**
 * 与 property 相反，创建一个函数，返回给定路径在指定对象上的值
 *
 * 与 property 的区别：propertyOf 先固定对象，返回的函数接收不同路径，适合对同一对象提取多个属性；
 * property 先固定路径，返回的函数接收不同对象，适合对多个对象提取同一属性。
 *
 * @param object - 要查询的对象
 * @returns 返回新的函数
 * @example
 * // propertyOf：固定对象，访问多个路径
 * const object = { a: { b: 2 }, c: 3 }
 * const fn = propertyOf(object)
 * fn('a.b') // => 2
 * fn('c')   // => 3
 */
const propertyOf = (
  object: unknown
): ((path: string | string[]) => unknown) => {
  return (path: string | string[]): unknown => {
    const pathArray = toPathArray(path)
    let result: unknown = object

    for (const key of pathArray) {
      if (result == null) return undefined
      result = (result as Record<string, unknown>)[key]
    }

    return result
  }
}

export default propertyOf
