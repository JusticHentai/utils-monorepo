/**
 * 返回对象所有函数属性名数组（含继承属性）
 * @param object - 要检查的对象
 * @returns 返回函数属性名数组
 * @example
 * function Foo() {
 *   this.a = () => 'a'
 * }
 * Foo.prototype.b = () => 'b'
 * functionsIn(new Foo())
 * // => ['a', 'b']
 */
const functionsIn = (object: Record<string, unknown>): string[] => {
  if (object == null) return []

  const result: string[] = []
  for (const key in object) {
    if (typeof object[key] === 'function') {
      result.push(key)
    }
  }
  return result
}

export default functionsIn
