/**
 * 使用 SameValueZero 比较两个值是否相等
 * @param value - 要比较的值
 * @param other - 另一个要比较的值
 * @returns 如果两个值相等，返回 true
 * @example
 * eq(NaN, NaN) // => true
 * eq('a', 'a') // => true
 */
const eq = (value: unknown, other: unknown): boolean => {
  // NaN 是 JS 中唯一不等于自身的值（NaN !== NaN 为 true）
  // 当两者都是 NaN 时，视为相等（SameValueZero 语义）
  if (value !== value && other !== other) {
    return true
  }

  return value === other
}

export default eq
