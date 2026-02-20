/**
 * 根据断言函数省略属性
 * @param object - 源对象
 * @param predicate - 断言函数
 * @returns 返回新对象
 * @example
 * omitBy({ a: 1, b: '2', c: 3 }, (value) => typeof value === 'number')
 * // => { b: '2' }
 */
const omitBy = <T extends object>(
  object: T,
  predicate: (value: T[keyof T], key: keyof T) => boolean
): Partial<T> => {
  if (object == null) return {}

  const result = {} as Partial<T>

  for (const key of Object.keys(object) as (keyof T)[]) {
    if (!predicate(object[key], key)) {
      result[key] = object[key]
    }
  }

  return result
}

export default omitBy
