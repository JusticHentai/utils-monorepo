/**
 * 创建一个函数，在 object[key] 上调用方法，可以预设参数
 * @param object - 绑定的对象
 * @param key - 方法的键名
 * @param partials - 预设的参数
 * @returns 返回新的绑定函数
 * @example
 * const object = {
 *   user: 'fred',
 *   greet(greeting: string, punctuation: string) {
 *     return `${greeting} ${this.user}${punctuation}`
 *   }
 * }
 *
 * const bound = bindKey(object, 'greet', 'hi')
 * bound('!')
 * // => 'hi fred!'
 */
const bindKey = <T extends Record<string, unknown>>(
  object: T,
  key: string,
  ...partials: unknown[]
): ((...args: unknown[]) => unknown) => {
  return (...args: unknown[]): unknown => {
    const fn = object[key]
    if (typeof fn !== 'function') {
      throw new TypeError(`${key} is not a function`)
    }
    return (fn as (...a: unknown[]) => unknown).apply(object, [
      ...partials,
      ...args,
    ])
  }
}

export default bindKey
