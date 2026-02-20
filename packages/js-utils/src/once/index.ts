/**
 * 创建一个只能调用一次的函数
 * 重复调用会返回第一次调用的结果
 * @param func - 要限制的函数
 * @returns 返回新函数
 * @example
 * const initialize = once(() => {
 *   console.log('初始化')
 *   return { initialized: true }
 * })
 *
 * initialize() // 打印 '初始化'，返回 { initialized: true }
 * initialize() // 不打印，直接返回 { initialized: true }
 */
const once = <T extends (...args: unknown[]) => unknown>(
  func: T
): ((...args: Parameters<T>) => ReturnType<T>) => {
  let called = false
  let result: ReturnType<T>

  return function (this: unknown, ...args: Parameters<T>): ReturnType<T> {
    if (!called) {
      called = true
      result = func.apply(this, args) as ReturnType<T>
    }
    return result
  }
}

export default once
