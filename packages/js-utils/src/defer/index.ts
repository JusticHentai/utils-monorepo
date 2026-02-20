/**
 * 推迟调用 func，直到当前堆栈清理完毕
 * @param func - 要延迟的函数
 * @param args - 调用时传递的参数
 * @returns 返回计时器 id
 * @example
 * defer((text) => console.log(text), 'deferred')
 * // => 输出 'deferred'（在当前调用栈清理后）
 */
const defer = (
  func: (...args: unknown[]) => unknown,
  ...args: unknown[]
): ReturnType<typeof setTimeout> => {
  return setTimeout(() => func(...args), 1)
}

export default defer
