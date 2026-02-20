/**
 * 创建一个函数，从右到左依次调用函数数组中的函数（类似函数组合 compose）
 * @param funcs - 要组合的函数
 * @returns 返回组合后的新函数
 * @example
 * const add = (a: number, b: number) => a + b
 * const square = (n: number) => n * n
 *
 * const squareAdd = flowRight(square, add)
 * squareAdd(1, 2)
 * // => 9
 */
const flowRight = (
  ...funcs: ((...args: unknown[]) => unknown)[]
): ((...args: unknown[]) => unknown) => {
  const reversed = funcs.reverse()

  return (...args: unknown[]): unknown => {
    let result: unknown = reversed[0](...args)

    for (let i = 1; i < reversed.length; i++) {
      result = reversed[i](result)
    }

    return result
  }
}

export default flowRight
