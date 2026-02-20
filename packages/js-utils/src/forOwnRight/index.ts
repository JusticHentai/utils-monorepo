/**
 * 类似 forOwn，但从后向前遍历自有属性
 * @param object - 要遍历的对象
 * @param iteratee - 每次迭代调用的函数
 * @returns 返回对象
 */
const forOwnRight = <T extends Record<string, unknown>>(
  object: T,
  iteratee: (value: unknown, key: string, object: T) => void | boolean
): T => {
  if (object == null) return object

  const keys = Object.keys(object)
  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i]
    if (iteratee(object[key], key, object) === false) {
      break
    }
  }

  return object
}

export default forOwnRight
