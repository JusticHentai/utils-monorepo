/**
 * 返回对象所有可枚举属性的键名数组（包括继承的属性）
 * @param object - 要查询的对象
 * @returns 返回键名数组
 * @example
 * function Foo() { this.a = 1; this.b = 2 }
 * Foo.prototype.c = 3
 *
 * keysIn(new Foo())
 * // => ['a', 'b', 'c']
 */
const keysIn = <T extends Record<string, unknown>>(object: T): string[] => {
  if (object == null) {
    return []
  }
  const result: string[] = []
  for (const key in object) {
    result.push(key)
  }

  return result
}

export default keysIn
