/**
 * 检查 value 是否是原生函数（由 JS 引擎用 C/C++ 实现，而非用户用 JS 编写的函数）
 *
 * 原生函数（Native Function）是 JS 引擎内置的函数，例如：
 * - Array.prototype.push、Object.keys、JSON.stringify
 * - Promise、Map、Set 等构造函数
 * - console.log、setTimeout 等宿主环境 API
 *
 * 判断依据：调用 Function.prototype.toString.call(value) 获取函数源码字符串，
 * 原生函数的源码固定为 'function xxx() { [native code] }'，
 * 而用户编写的函数会返回实际的 JS 源码。
 * 通过正则 /\[native code\]/ 匹配来区分。
 *
 * @param value - 要检查的值
 * @returns 如果是原生函数，返回 true
 * @example
 * isNative(Array.prototype.push)
 * // => true
 *
 * isNative(() => {})
 * // => false
 */
const isNative = (value: unknown): boolean => {
  if (value == null || typeof value !== 'function') {
    return false
  }

  const reIsNative = /\[native code\]/
  return reIsNative.test(Function.prototype.toString.call(value))
}

export default isNative
