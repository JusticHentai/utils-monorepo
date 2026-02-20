/**
 * 类似于 reduce，但迭代的是对象
 * @param object - 要迭代的对象
 * @param iteratee - 每次迭代调用的函数
 * @param accumulator - 初始值
 * @returns 返回累积值
 * @example
 * transform({ a: 1, b: 2, c: 1 }, (result, value, key) => {
 *   (result[value] || (result[value] = [])).push(key)
 * }, {})
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
const transform = <T extends Record<string, unknown> | unknown[], R>(
  object: T,
  iteratee: (
    accumulator: R,
    value: unknown,
    key: string | number,
    object: T
  ) => void | boolean,
  accumulator?: R
): R => {
  const isArray = Array.isArray(object)
  const result = accumulator ?? ((isArray ? [] : {}) as R)

  if (object == null) {
    return result
  }

  if (isArray) {
    for (let i = 0; i < object.length; i++) {
      if (iteratee(result, object[i], i, object) === false) {
        break
      }
    }
  } else {
    for (const key of Object.keys(object)) {
      if (
        iteratee(
          result,
          (object as Record<string, unknown>)[key],
          key,
          object
        ) === false
      ) {
        break
      }
    }
  }

  return result
}

export default transform
