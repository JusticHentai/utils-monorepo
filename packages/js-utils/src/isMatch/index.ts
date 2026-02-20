import isEqual from '../isEqual'

/**
 * 执行部分深度比较，确定 object 是否包含等价的属性值
 * @param object - 要检查的对象
 * @param source - 要匹配的属性值
 * @returns 如果 object 匹配，返回 true
 * @example
 * isMatch({ a: 1, b: 2 }, { b: 2 })
 * // => true
 */
const isMatch = (
  object: Record<string, unknown>,
  source: Record<string, unknown>
): boolean => {
  if (object === source) {
    return true
  }

  if (object == null || source == null) {
    return false
  }

  for (const key of Object.keys(source)) {
    const objValue = object[key]
    const srcValue = source[key]

    if (srcValue !== undefined && objValue === undefined && !(key in object)) {
      return false
    }

    if (!isEqual(objValue, srcValue)) {
      return false
    }
  }

  return true
}

export default isMatch
