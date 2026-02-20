/**
 * 检查 value 是否是 NaN
 *
 * 利用 NaN 是 JS 中唯一一个不等于自身的值这一特性：NaN !== NaN 为 true。
 * 先用 typeof === 'number' 确保是数字类型（排除 undefined、'hello' 等），
 * 再用 value !== value 判断是否为 NaN。
 *
 * 与全局 isNaN() 的区别：
 * - isNaN('hello') => true（会先隐式转换为数字，'hello' → NaN）
 * - isNaNValue('hello') => false（typeof 'hello' !== 'number'，直接排除）
 *
 * @param value - 要检查的值
 * @returns 如果是 NaN，返回 true
 * @example
 * isNaNValue(NaN)
 * // => true
 */
const isNaNValue = (value: unknown): boolean => {
  // NaN 是 JS 中唯一满足 value !== value 的值
  return typeof value === 'number' && value !== value
}

export default isNaNValue
