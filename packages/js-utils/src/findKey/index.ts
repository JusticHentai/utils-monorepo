/**
 * 返回第一个满足谓词函数的属性键名
 * @param object - 要搜索的对象
 * @param predicate - 每次迭代调用的函数
 * @returns 返回匹配的键名，否则返回 undefined
 * @example
 * findKey({ a: 1, b: 2, c: 3 }, n => n === 2)
 * // => 'b'
 */
const findKey = <T extends Record<string, unknown>>(
  object: T,
  predicate: (value: T[keyof T], key: string, object: T) => boolean
): string | undefined => {
  if (object == null) return undefined

  for (const key of Object.keys(object)) {
    if (predicate(object[key] as T[keyof T], key, object)) {
      return key
    }
  }

  return undefined
}

export default findKey
