/**
 * 检查对象是否符合约束条件
 * @param object - 要检查的对象
 * @param source - 约束条件对象（每个属性为谓词函数）
 * @returns 如果对象符合约束，返回 true
 * @example
 * const object = { a: 1, b: 2 }
 *
 * conformsTo(object, {
 *   b: (n) => n > 1
 * })
 * // => true
 *
 * conformsTo(object, {
 *   b: (n) => n > 2
 * })
 * // => false
 */
const conformsTo = <T extends Record<string, unknown>>(
  object: T,
  source: Record<string, (value: unknown) => boolean>
): boolean => {
  if (object == null) return false

  for (const key of Object.keys(source)) {
    const predicate = source[key]
    const value = (object as Record<string, unknown>)[key]

    if (value === undefined && !(key in object)) {
      return false
    }

    if (!predicate(value)) {
      return false
    }
  }

  return true
}

export default conformsTo
