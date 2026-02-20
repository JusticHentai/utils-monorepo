/**
 * 返回对象自有可枚举属性的键名数组
 * @param object - 要查询的对象
 * @returns 返回键名数组
 * @example
 * keys({ a: 1, b: 2 })
 * // => ['a', 'b']
 */
const keys = <T extends Record<string, unknown>>(object: T): string[] => {
  if (object == null) {
    return []
  }
  return Object.keys(object)
}

export default keys
