/**
 * 类似于 assignIn，但可以自定义分配逻辑
 * @param object - 目标对象
 * @param source - 来源对象
 * @param customizer - 自定义分配函数
 * @returns 返回目标对象
 * @example
 * assignInWith({ a: 1 }, { b: 2 }, (objVal, srcVal) => objVal ?? srcVal)
 * // => { a: 1, b: 2 }
 */
const assignInWith = <T extends Record<string, unknown>>(
  object: T,
  source: Record<string, unknown>,
  customizer: (
    objValue: unknown,
    srcValue: unknown,
    key: string,
    object: T,
    source: Record<string, unknown>
  ) => unknown
): T => {
  if (source != null) {
    for (const key in source) {
      const result = customizer(
        (object as Record<string, unknown>)[key],
        source[key],
        key,
        object,
        source
      )
      if (result !== undefined) {
        ;(object as Record<string, unknown>)[key] = result
      } else {
        ;(object as Record<string, unknown>)[key] = source[key]
      }
    }
  }
  return object
}

export default assignInWith
