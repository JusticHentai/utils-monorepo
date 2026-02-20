/**
 * 深度比较两个值是否相等，支持自定义比较器
 * @param value - 要比较的值
 * @param other - 另一个要比较的值
 * @param customizer - 自定义比较函数
 * @returns 如果两个值相等，返回 true
 * @example
 * function customizer(objValue, othValue) {
 *   if (Array.isArray(objValue) && Array.isArray(othValue)) {
 *     return objValue.length === othValue.length
 *   }
 * }
 *
 * isEqualWith([1, 2, 3], [1, 2], customizer)
 * // => false
 *
 * isEqualWith([1, 2], [1, 2, 3], customizer)
 * // => false
 */
const isEqualWith = (
  value: unknown,
  other: unknown,
  customizer: (
    objValue: unknown,
    othValue: unknown,
    key?: string | number,
    object?: unknown,
    other?: unknown
  ) => boolean | undefined
): boolean => {
  const customResult = customizer(value, other)
  if (customResult !== undefined) {
    return customResult
  }

  // 基本类型比较
  if (value === other) {
    return true
  }

  // 处理 NaN
  if (value !== value && other !== other) {
    return true
  }

  // 如果其中一个是 null/undefined，另一个不是
  if (value == null || other == null) {
    return value === other
  }

  // 类型检查
  const typeA = typeof value
  const typeB = typeof other

  if (typeA !== typeB) {
    return false
  }

  // 非对象类型已经在上面处理过了
  if (typeA !== 'object') {
    return false
  }

  // 数组比较
  if (Array.isArray(value) && Array.isArray(other)) {
    if (value.length !== other.length) {
      return false
    }
    for (let i = 0; i < value.length; i++) {
      if (!isEqualWith(value[i], other[i], customizer)) {
        return false
      }
    }
    return true
  }

  // 对象比较
  const keysA = Object.keys(value as object)
  const keysB = Object.keys(other as object)

  if (keysA.length !== keysB.length) {
    return false
  }

  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(other, key)) {
      return false
    }
    if (
      !isEqualWith(
        (value as Record<string, unknown>)[key],
        (other as Record<string, unknown>)[key],
        customizer
      )
    ) {
      return false
    }
  }

  return true
}

export default isEqualWith
