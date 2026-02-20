/**
 * 创建一个对象，键是原对象的值，值是原对象的键
 * @param object - 要转换的对象
 * @returns 返回新对象
 * @example
 * invert({ a: 1, b: 2, c: 1 })
 * // => { '1': 'c', '2': 'b' }
 */
const invert = <T extends Record<string, unknown>>(
  object: T
): Record<string, string> => {
  const result: Record<string, string> = {}

  if (object == null) {
    return result
  }

  for (const key of Object.keys(object)) {
    const value = object[key]
    if (value != null) {
      result[String(value)] = key
    }
  }

  return result
}

export default invert
