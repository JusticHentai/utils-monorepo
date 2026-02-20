/**
 * 类似于 toPairs，但包括继承的属性
 * @param object - 要转换的对象
 * @returns 返回键值对数组
 * @example
 * function Foo() { this.a = 1; this.b = 2 }
 * Foo.prototype.c = 3
 *
 * toPairsIn(new Foo())
 * // => [['a', 1], ['b', 2], ['c', 3]]
 */
const toPairsIn = <T extends Record<string, unknown>>(
  object: T
): [string, unknown][] => {
  if (object == null) {
    return []
  }

  const result: [string, unknown][] = []
  for (const key in object) {
    result.push([key, object[key]])
  }
  return result
}

export default toPairsIn
