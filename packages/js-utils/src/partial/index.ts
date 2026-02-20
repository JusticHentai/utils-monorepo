/**
 * 创建一个预设部分参数的函数
 * @param func - 要预设参数的函数
 * @param partials - 预设的参数
 * @returns 返回新的部分应用函数
 * @example
 * const greet = (greeting, name) => greeting + ' ' + name
 * const sayHelloTo = partial(greet, 'hello')
 * sayHelloTo('fred')
 * // => 'hello fred'
 */
const partial = <T extends (...args: unknown[]) => unknown>(
  func: T,
  ...partials: unknown[]
): ((...args: unknown[]) => ReturnType<T>) => {
  return (...args: unknown[]): ReturnType<T> => {
    return func(...partials, ...args) as ReturnType<T>
  }
}

export default partial
