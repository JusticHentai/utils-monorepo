/**
 * 返回对象自有的函数属性名数组
 * @param object - 要检查的对象
 * @returns 返回函数属性名数组
 * @example
 * function Foo() {
 *   this.a = () => 'a'
 *   this.b = () => 'b'
 * }
 * functions(new Foo())
 * // => ['a', 'b']
 */
const functions = (object: Record<string, unknown>): string[] => {
  if (object == null) return []

  return Object.keys(object).filter((key) => typeof object[key] === 'function')
}

export default functions
