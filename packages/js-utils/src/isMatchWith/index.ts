import isEqual from '../isEqual'

/**
 * 类似于 isMatch，但支持自定义比较器
 * @param object - 要检查的对象
 * @param source - 要匹配的属性值
 * @param customizer - 自定义比较函数
 * @returns 如果 object 匹配，返回 true
 * @example
 * isMatchWith({ a: 'hello' }, { a: 'HELLO' }, (objVal, srcVal) =>
 *   typeof objVal === 'string' ? objVal.toLowerCase() === srcVal.toLowerCase() : undefined
 * )
 * // => true
 */
const isMatchWith = (
  object: Record<string, unknown>,
  source: Record<string, unknown>,
  customizer: (
    objValue: unknown,
    srcValue: unknown,
    key: string,
    object: Record<string, unknown>,
    source: Record<string, unknown>
  ) => boolean | undefined
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

    const customResult = customizer(objValue, srcValue, key, object, source)
    if (customResult !== undefined) {
      if (!customResult) {
        return false
      }
      continue
    }

    if (srcValue !== undefined && objValue === undefined && !(key in object)) {
      return false
    }

    if (!isEqual(objValue, srcValue)) {
      return false
    }
  }

  return true
}

export default isMatchWith
