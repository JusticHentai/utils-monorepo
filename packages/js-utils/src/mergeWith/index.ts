import isPlainObject from '../isPlainObject'

/**
 * 类似于 merge，但可以自定义合并逻辑
 * @param object - 目标对象
 * @param source - 来源对象
 * @param customizer - 自定义合并函数
 * @returns 返回目标对象
 * @example
 * mergeWith({ a: [1] }, { a: [2] }, (objValue, srcValue) => {
 *   if (Array.isArray(objValue)) return objValue.concat(srcValue)
 * })
 * // => { a: [1, 2] }
 */
const mergeWith = <T extends Record<string, unknown>>(
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
  if (source == null) {
    return object
  }

  for (const key of Object.keys(source)) {
    const objValue = (object as Record<string, unknown>)[key]
    const srcValue = source[key]

    const customResult = customizer(objValue, srcValue, key, object, source)
    if (customResult !== undefined) {
      ;(object as Record<string, unknown>)[key] = customResult
    } else {
      if (isPlainObject(srcValue) && isPlainObject(objValue)) {
        mergeWith(
          objValue as Record<string, unknown>,
          srcValue as Record<string, unknown>,
          customizer as (
            objValue: unknown,
            srcValue: unknown,
            key: string,
            object: Record<string, unknown>,
            source: Record<string, unknown>
          ) => unknown
        )
      } else if (Array.isArray(srcValue) && Array.isArray(objValue)) {
        for (let i = 0; i < srcValue.length; i++) {
          if (isPlainObject(srcValue[i]) && isPlainObject(objValue[i])) {
            mergeWith(
              objValue[i] as Record<string, unknown>,
              srcValue[i] as Record<string, unknown>,
              customizer as (
                objValue: unknown,
                srcValue: unknown,
                key: string,
                object: Record<string, unknown>,
                source: Record<string, unknown>
              ) => unknown
            )
          } else if (srcValue[i] !== undefined) {
            objValue[i] = srcValue[i]
          }
        }
      } else {
        ;(object as Record<string, unknown>)[key] = srcValue
      }
    }
  }

  return object
}

export default mergeWith
