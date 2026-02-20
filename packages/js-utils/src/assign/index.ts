/**
 * 分配来源对象的可枚举属性到目标对象
 * @param object - 目标对象
 * @param sources - 来源对象
 * @returns 返回目标对象
 * @example
 * assign({ a: 0 }, { a: 1 }, { b: 2 })
 * // => { a: 1, b: 2 }
 */
const assign = <T extends Record<string, unknown>>(
  object: T,
  ...sources: Record<string, unknown>[]
): T => {
  for (const source of sources) {
    if (source != null) {
      for (const key of Object.keys(source)) {
        ;(object as Record<string, unknown>)[key] = source[key]
      }
    }
  }
  return object
}

export default assign
