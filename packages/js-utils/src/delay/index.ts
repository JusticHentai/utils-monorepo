/**
 * 延迟 wait 毫秒后调用 func
 * @param func - 要延迟的函数
 * @param wait - 延迟的毫秒数
 * @param args - 调用时传递的参数
 * @returns 返回计时器 id
 * @example
 * delay((text) => console.log(text), 1000, 'later')
 * // => 1 秒后输出 'later'
 */
const delay = (
  func: (...args: unknown[]) => unknown,
  wait: number,
  ...args: unknown[]
): ReturnType<typeof setTimeout> => {
  return setTimeout(() => func(...args), wait)
}

export default delay
