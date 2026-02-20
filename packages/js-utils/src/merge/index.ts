import isPlainObject from '../isPlainObject'

/**
 * 递归合并来源对象的属性到目标对象
 * @param object - 目标对象
 * @param sources - 来源对象
 * @returns 返回目标对象
 * @example
 * merge({ a: [{ b: 2 }, { d: 4 }] }, { a: [{ c: 3 }, { e: 5 }] })
 * // => { a: [{ b: 2, c: 3 }, { d: 4, e: 5 }] }
 */
const merge = <T extends Record<string, unknown>>(
  object: T,
  ...sources: Record<string, unknown>[]
): T => {
  for (const source of sources) {
    if (source == null) continue
    mergeDeep(object as Record<string, unknown>, source)
  }
  return object
}

const mergeDeep = (
  target: Record<string, unknown>,
  source: Record<string, unknown>
): void => {
  for (const key of Object.keys(source)) {
    const srcValue = source[key]
    const targetValue = target[key]

    if (isPlainObject(srcValue) && isPlainObject(targetValue)) {
      mergeDeep(
        targetValue as Record<string, unknown>,
        srcValue as Record<string, unknown>
      )
    } else if (Array.isArray(srcValue) && Array.isArray(targetValue)) {
      for (let i = 0; i < srcValue.length; i++) {
        if (isPlainObject(srcValue[i]) && isPlainObject(targetValue[i])) {
          mergeDeep(
            targetValue[i] as Record<string, unknown>,
            srcValue[i] as Record<string, unknown>
          )
        } else if (srcValue[i] !== undefined) {
          targetValue[i] = srcValue[i]
        }
      }
    } else {
      target[key] = srcValue
    }
  }
}

export default merge
