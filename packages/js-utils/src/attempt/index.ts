/**
 * 尝试调用函数，返回结果或错误对象
 * @param func - 要尝试调用的函数
 * @param args - 调用函数的参数
 * @returns 返回函数结果或 Error 对象
 * @example
 * const elements = attempt(selector => document.querySelectorAll(selector), '>_>')
 *
 * if (elements instanceof Error) {
 *   elements = []
 * }
 */
const attempt = <T>(
  func: (...args: unknown[]) => T,
  ...args: unknown[]
): T | Error => {
  try {
    return func(...args)
  } catch (error) {
    return error instanceof Error ? error : new Error(String(error))
  }
}

export default attempt
