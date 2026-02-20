/**
 * 遍历对象的所有可枚举属性（含继承属性）
 * @param object - 要遍历的对象
 * @param iteratee - 每次迭代调用的函数
 * @returns 返回对象
 * @example
 * function Foo() { this.a = 1; this.b = 2 }
 * Foo.prototype.c = 3
 * forIn(new Foo(), (value, key) => console.log(key))
 * // => 输出 'a', 'b', 'c'
 */
const forIn = <T extends Record<string, unknown>>(
  object: T,
  iteratee: (value: unknown, key: string, object: T) => void | boolean
): T => {
  if (object == null) return object

  for (const key in object) {
    if (iteratee(object[key], key, object) === false) {
      break
    }
  }

  return object
}

export default forIn
