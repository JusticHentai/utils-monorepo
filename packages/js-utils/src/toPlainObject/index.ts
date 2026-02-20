/**
 * 将 value 转换为普通对象
 * @param value - 要转换的值
 * @returns 返回转换后的普通对象
 * @example
 * function Foo() { this.b = 2 }
 * Foo.prototype.c = 3
 * toPlainObject(new Foo())
 * // => { b: 2, c: 3 }
 */
const toPlainObject = (value: unknown): Record<string, unknown> => {
  const result: Record<string, unknown> = {}

  if (value == null) {
    return result
  }

  for (const key in value as object) {
    result[key] = (value as Record<string, unknown>)[key]
  }

  return result
}

export default toPlainObject
