/**
 * 遍历对象的自有可枚举属性
 * @param object - 要遍历的对象
 * @param iteratee - 每次迭代调用的函数
 * @returns 返回对象
 * @example
 * forOwn({ a: 1, b: 2 }, (value, key) => console.log(key))
 * // => 输出 'a', 'b'
 */
const forOwn = <T extends Record<string, unknown>>(
  object: T,
  iteratee: (value: unknown, key: string, object: T) => void | boolean
): T => {
  if (object == null) return object

  for (const key of Object.keys(object)) {
    if (iteratee(object[key], key, object) === false) {
      break
    }
  }

  return object
}

export default forOwn
