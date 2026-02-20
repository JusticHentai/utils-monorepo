/**
 * 创建一个对象，由满足谓词函数的属性组成
 * @param object - 来源对象
 * @param predicate - 每次迭代调用的函数
 * @returns 返回新对象
 * @example
 * const object = { a: 1, b: '2', c: 3 }
 *
 * pickBy(object, value => typeof value === 'number')
 * // => { a: 1, c: 3 }
 */
const pickBy = <T extends Record<string, unknown>>(
  object: T,
  predicate: (value: unknown, key: string) => boolean
): Partial<T> => {
  const result: Record<string, unknown> = {}

  if (object == null) {
    return result as Partial<T>
  }

  for (const key of Object.keys(object)) {
    if (predicate(object[key], key)) {
      result[key] = object[key]
    }
  }

  return result as Partial<T>
}

export default pickBy
