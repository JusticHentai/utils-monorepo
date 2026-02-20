/**
 * 类似于 assign，但包括继承的属性
 * @param object - 目标对象
 * @param sources - 来源对象
 * @returns 返回目标对象
 * @example
 * function Foo() { this.a = 1 }
 * Foo.prototype.b = 2
 * assignIn({ c: 3 }, new Foo())
 * // => { c: 3, a: 1, b: 2 }
 */
const assignIn = <T extends Record<string, unknown>>(
  object: T,
  ...sources: Record<string, unknown>[]
): T => {
  for (const source of sources) {
    if (source != null) {
      for (const key in source) {
        ;(object as Record<string, unknown>)[key] = source[key]
      }
    }
  }
  return object
}

export default assignIn
