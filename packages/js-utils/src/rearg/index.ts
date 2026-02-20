/**
 * 创建一个函数，按照指定的索引顺序重新排列参数
 * @param func - 要重新排列参数的函数
 * @param indexes - 新的参数索引顺序
 * @returns 返回新的函数
 * @example
 * const rearged = rearg((a, b, c) => [a, b, c], [2, 0, 1])
 * rearged('b', 'c', 'a')
 * // => ['a', 'b', 'c']
 */
const rearg = <T extends (...args: unknown[]) => unknown>(
  func: T,
  indexes: number[]
): ((...args: unknown[]) => ReturnType<T>) => {
  return (...args: unknown[]): ReturnType<T> => {
    const reorderedArgs = indexes.map((index) => args[index])
    return func(...reorderedArgs) as ReturnType<T>
  }
}

export default rearg
