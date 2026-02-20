/**
 * 创建一个函数，从左到右依次调用函数数组中的函数
 * @param funcs - 要组合的函数
 * @returns 返回组合后的新函数
 * @example
 * const add = (a: number, b: number) => a + b
 * const square = (n: number) => n * n
 *
 * const addSquare = flow(add, square)
 * addSquare(1, 2)
 * // => 9
 */
const flow = (
  ...funcs: ((...args: unknown[]) => unknown)[]
): ((...args: unknown[]) => unknown) => {
  return (...args: unknown[]): unknown => {
    let result: unknown = funcs[0](...args)

    for (let i = 1; i < funcs.length; i++) {
      result = funcs[i](result)
    }

    return result
  }
}

export default flow
