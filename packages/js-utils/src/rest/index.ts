/**
 * 创建一个函数，将剩余参数收集到一个数组中
 * @param func - 要应用 rest 参数的函数
 * @param start - rest 参数的开始位置
 * @returns 返回新的函数
 * @example
 * // 默认 start：从最后一个形参位置开始收集
 * const say = rest((what: unknown, names: unknown) => what + ' ' + (names as string[]).join(', '))
 * say('hello', 'fred', 'barney', 'pebbles')
 * // => 'hello fred, barney, pebbles'
 *
 * // 自定义 start=0：所有参数都收集为数组
 * const collect = rest((args: unknown) => args, 0)
 * collect('a', 'b', 'c')
 * // => ['a', 'b', 'c']
 *
 * // 自定义 start=2：前两个参数正常传递，后续收集
 * const log = rest((level: unknown, tag: unknown, msgs: unknown) => `[${level}][${tag}] ${(msgs as string[]).join(' ')}`, 2)
 * log('info', 'app', 'started', 'successfully')
 * // => '[info][app] started successfully'
 */
const rest = <T extends (...args: unknown[]) => unknown>(
  func: T,
  start: number = func.length - 1
): ((...args: unknown[]) => ReturnType<T>) => {
  const startIndex = Math.max(start, 0)

  return (...args: unknown[]): ReturnType<T> => {
    const normalArgs = args.slice(0, startIndex)
    const restArgs = args.slice(startIndex)
    return func(...normalArgs, restArgs) as ReturnType<T>
  }
}

export default rest
