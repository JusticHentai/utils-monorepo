/**
 * 创建一个函数，绑定 this 到 thisArg，并预设部分参数
 * @param func - 要绑定的函数
 * @param thisArg - 绑定的 this 值
 * @param partials - 预设的参数
 * @returns 返回新的绑定函数
 * @example
 * function greet(greeting: string, punctuation: string) {
 *   return `${greeting} ${this.user}${punctuation}`
 * }
 *
 * const object = { user: 'fred' }
 * const bound = bind(greet, object, 'hi')
 * bound('!')
 * // => 'hi fred!'
 */
const bind = <T extends (...args: unknown[]) => unknown>(
  func: T,
  thisArg: unknown,
  ...partials: unknown[]
): ((...args: unknown[]) => ReturnType<T>) => {
  return (...args: unknown[]): ReturnType<T> => {
    return func.apply(thisArg, [...partials, ...args]) as ReturnType<T>
  }
}

export default bind
