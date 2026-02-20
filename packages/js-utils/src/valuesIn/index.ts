/**
 * 返回对象所有可枚举属性的值数组（包括继承的属性）
 * @param object - 要查询的对象
 * @returns 返回值数组
 * @example
 * function Foo() { this.a = 1; this.b = 2 }
 * Foo.prototype.c = 3
 *
 * valuesIn(new Foo())
 * // => [1, 2, 3]
 */
const valuesIn = <T extends Record<string, unknown>>(object: T): unknown[] => {
  if (object == null) {
    return []
  }
  const result: unknown[] = []
  for (const key in object) {
    result.push(object[key])
  }
  return result
}

export default valuesIn
