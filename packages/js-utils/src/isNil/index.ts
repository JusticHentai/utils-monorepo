/**
 * 检查值是否为 null 或 undefined
 *
 * 利用 JS 宽松相等（==）的特殊规则：null 和 undefined 互相相等，且不等于任何其他值。
 * 所以 value == null 恰好能同时命中 null 和 undefined，是判断"空值"的经典写法。
 *
 * == 与 === 的区别：
 * - null === undefined  → false（严格相等，类型不同）
 * - null == undefined   → true（宽松相等，JS 规范特殊规定）
 * - null == 0           → false（null 不会隐式转换为数字）
 * - null == ''          → false
 * - null == false       → false
 *
 * @param value - 要检查的值
 * @returns 如果值为 null 或 undefined 返回 true
 * @example
 * isNil(null)      // => true
 * isNil(undefined) // => true
 * isNil(void 0)    // => true
 * isNil(NaN)       // => false
 * isNil(0)         // => false
 * isNil('')        // => false
 */
const isNil = (value: unknown): value is null | undefined => {
  return value == null
}

export default isNil
