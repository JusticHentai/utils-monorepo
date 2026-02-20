/**
 * 返回对象自有可枚举属性的值数组
 * @param object - 要查询的对象
 * @returns 返回值数组
 * @example
 * values({ a: 1, b: 2 })
 * // => [1, 2]
 */
const values = <T extends Record<string, unknown>>(object: T): unknown[] => {
  if (object == null) {
    return []
  }
  return Object.values(object)
}

export default values
