/**
 * 返回接收到的第一个参数
 *
 * 函数式编程中的基础工具，主要用作默认回调/占位函数：
 * - 作为默认 iteratee，表示"不做任何转换"
 * - 配合 filter 过滤假值：[0, 1, false, 2].filter(identity) => [1, 2]
 * - 在 flow/pipe 组合中作为无操作的占位环节
 *
 * @param value - 任意值
 * @returns 返回 value
 * @example
 * const object = { a: 1 }
 *
 * identity(object) === object
 * // => true
 */
const identity = <T>(value: T): T => {
  return value
}

export default identity
