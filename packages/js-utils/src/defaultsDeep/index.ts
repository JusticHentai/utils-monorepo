import isPlainObject from '../isPlainObject'

/**
 * 类似 defaults，但会递归合并对象属性
 * @param object - 目标对象
 * @param sources - 来源对象
 * @returns 返回修改后的 object
 * @example
 * defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } })
 * // => { a: { b: 2, c: 3 } }
 */
const defaultsDeep = <T extends Record<string, unknown>>(
  object: T,
  ...sources: Record<string, unknown>[]
): T => {
  for (const source of sources) {
    if (source == null) continue

    for (const key of Object.keys(source)) {
      const objVal = (object as Record<string, unknown>)[key]
      const srcVal = source[key]

      if (isPlainObject(objVal) && isPlainObject(srcVal)) {
        defaultsDeep(objVal as T, srcVal)
      } else if (objVal === undefined) {
        ;(object as Record<string, unknown>)[key] = srcVal
      }
    }
  }

  return object
}

export default defaultsDeep
