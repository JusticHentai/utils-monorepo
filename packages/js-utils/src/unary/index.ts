import ary from '../ary'

/**
 * 创建一个最多接受一个参数的函数，忽略多余的参数
 * @param func - 要限制参数的函数
 * @returns 返回新的限制函数
 * @example
 * ['6', '8', '10'].map(unary(parseInt))
 * // => [6, 8, 10]
 */
const unary = <T extends (...args: unknown[]) => unknown>(func: T) => {
  return ary(func, 1)
}

export default unary
