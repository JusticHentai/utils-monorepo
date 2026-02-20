/**
 * 创建一个对象，省略指定的属性
 * @param object - 源对象
 * @param keys - 要省略的属性键
 * @returns 返回新对象
 * @example
 * omit({ a: 1, b: '2', c: 3 }, ['a', 'c'])
 * // => { b: '2' }
 */
const omit = <T extends object, K extends keyof T>(
  object: T,
  keys: K[]
): Omit<T, K> => {
  if (object == null) return {} as Omit<T, K>

  const keysSet = new Set(keys as (keyof T)[])
  const result = {} as Omit<T, K>

  for (const key of Object.keys(object) as (keyof T)[]) {
    if (!keysSet.has(key)) {
      ;(result as T)[key] = object[key]
    }
  }

  return result
}

export default omit
