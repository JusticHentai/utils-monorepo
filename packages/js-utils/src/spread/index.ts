/**
 * 创建一个函数，将数组参数展开传递给原函数
 * @param func - 要展开参数的函数
 * @param start - 展开开始的位置
 * @returns 返回新的函数
 * @example
 * const say = spread((who, what) => who + ' says ' + what)
 * say(['fred', 'hello'])
 * // => 'fred says hello'
 */
const spread = <T extends (...args: unknown[]) => unknown>(
  func: T,
  start: number = 0
): ((args: unknown[]) => ReturnType<T>) => {
  return (args: unknown[]): ReturnType<T> => {
    return func(...args.slice(start)) as ReturnType<T>
  }
}

export default spread
