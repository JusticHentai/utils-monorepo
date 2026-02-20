import toPathArray from '../toPathArray'

/**
 * 创建一个函数，返回给定对象指定路径的值
 *
 * 与 propertyOf 的区别：property 先固定路径，返回的函数接收不同对象，适合对多个对象提取同一属性；
 * propertyOf 先固定对象，返回的函数接收不同路径，适合对同一对象提取多个属性。
 *
 * @param path - 要获取的属性路径
 * @returns 返回新的函数
 * @example
 * // property：固定路径，遍历多个对象
 * const objects = [{ a: { b: 2 } }, { a: { b: 1 } }]
 * objects.map(property('a.b'))
 * // => [2, 1]
 */
const property = (path: string | string[]): ((object: unknown) => unknown) => {
  const pathArray = toPathArray(path)

  return (object: unknown): unknown => {
    let result: unknown = object

    for (const key of pathArray) {
      if (result == null) return undefined
      result = (result as Record<string, unknown>)[key]
    }

    return result
  }
}

export default property
