/**
 * 类似于 partial，但从右侧预设参数
 * @param func - 要预设参数的函数
 * @param partials - 预设的参数
 * @returns 返回新的部分应用函数
 * @example
 * const greet = (greeting, name) => greeting + ' ' + name
 * const greetFred = partialRight(greet, 'fred')
 * greetFred('hi')
 * // => 'hi fred'
 */
const partialRight = <T extends (...args: unknown[]) => unknown>(
  func: T,
  ...partials: unknown[]
): ((...args: unknown[]) => ReturnType<T>) => {
  return (...args: unknown[]): ReturnType<T> => {
    return func(...args, ...partials) as ReturnType<T>
  }
}

export default partialRight
