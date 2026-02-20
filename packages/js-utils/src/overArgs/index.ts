/**
 * 创建一个函数，使用转换函数处理参数后再调用原函数
 * @param func - 要包装的函数
 * @param transforms - 转换函数数组，每个函数对应转换一个参数
 * @returns 返回新的函数
 * @example
 * const doubled = n => n * 2
 * const square = n => n * n
 *
 * const func = overArgs((x, y) => [x, y], [square, doubled])
 * func(9, 3)
 * // => [81, 6]
 */
const overArgs = <T extends (...args: unknown[]) => unknown>(
  func: T,
  transforms: ((...args: unknown[]) => unknown)[]
): ((...args: unknown[]) => ReturnType<T>) => {
  return (...args: unknown[]): ReturnType<T> => {
    const transformedArgs = args.map((arg, index) => {
      const transform = transforms[index]
      return transform ? transform(arg) : arg
    })

    return func(...transformedArgs) as ReturnType<T>
  }
}

export default overArgs
