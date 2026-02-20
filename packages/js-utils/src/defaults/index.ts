/**
 * 分配来源对象的属性到目标对象，但不覆盖目标对象已有的属性
 * @param object - 目标对象
 * @param sources - 来源对象
 * @returns 返回修改后的 object
 * @example
 * defaults({ a: 1 }, { b: 2 }, { a: 3 })
 * // => { a: 1, b: 2 }
 */
const defaults = <T extends Record<string, unknown>>(
  object: T,
  ...sources: Record<string, unknown>[]
): T => {
  for (const source of sources) {
    if (source == null) continue

    for (const key of Object.keys(source)) {
      if ((object as Record<string, unknown>)[key] === undefined) {
        ;(object as Record<string, unknown>)[key] = source[key]
      }
    }
  }

  return object
}

export default defaults
