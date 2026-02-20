/**
 * 创建一个返回常量值的函数
 * @param value - 要返回的值
 * @returns 返回新的函数
 * @example
 * const objects = [{ a: 1 }, { a: 2 }].map(constant({ a: 0 }))
 * // => [{ a: 0 }, { a: 0 }]
 *
 * objects[0] === objects[1]
 * // => true
 */
const constant = <T>(value: T): (() => T) => {
  return (): T => value
}

export default constant
