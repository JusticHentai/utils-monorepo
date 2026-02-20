/**
 * 类似 findKey，但从后向前遍历对象属性
 * @param object - 要搜索的对象
 * @param predicate - 每次迭代调用的函数
 * @returns 返回匹配的键名，否则返回 undefined
 * @example
 * findLastKey({ a: 1, b: 2, c: 3 }, n => n < 3)
 * // => 'b'
 */
const findLastKey = <T extends Record<string, unknown>>(
  object: T,
  predicate: (value: T[keyof T], key: string, object: T) => boolean
): string | undefined => {
  if (object == null) return undefined

  const keys = Object.keys(object)
  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i]
    if (predicate(object[key] as T[keyof T], key, object)) {
      return key
    }
  }

  return undefined
}

export default findLastKey
