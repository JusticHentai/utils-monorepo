/**
 * 类似 curry，但从右向左接受参数
 * @param func - 要柯里化的函数
 * @param arity - 需要提供给 func 的参数数量，默认为 func.length
 * @returns 返回柯里化后的函数
 * @example
 * const abc = (a: number, b: number, c: number) => [a, b, c]
 *
 * const curried = curryRight(abc)
 * curried(3)(2)(1)
 * // => [1, 2, 3]
 */
const curryRight = (
  func: (...args: unknown[]) => unknown,
  arity?: number
): ((...args: unknown[]) => unknown) => {
  const arityNum = arity ?? func.length

  const curried = (...args: unknown[]): unknown => {
    if (args.length >= arityNum) {
      return func(...args.reverse())
    }
    return (...moreArgs: unknown[]) => curried(...args, ...moreArgs)
  }

  return curried
}

export default curryRight
