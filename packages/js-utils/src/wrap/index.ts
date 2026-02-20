/**
 * 创建一个包装函数，将第一个参数作为包装函数的参数
 * @param value - 要包装的值
 * @param wrapper - 包装函数
 * @returns 返回新的函数
 * @example
 * const p = wrap('_', s => '<p>' + s + '</p>')
 * p()
 * // => '<p>_</p>'
 */
const wrap = <T, R>(
  value: T,
  wrapper: (value: T, ...args: unknown[]) => R
): ((...args: unknown[]) => R) => {
  return (...args: unknown[]): R => {
    return wrapper(value, ...args)
  }
}

export default wrap
