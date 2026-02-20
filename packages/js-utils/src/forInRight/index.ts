/**
 * 类似 forIn，但从后向前遍历对象属性
 * @param object - 要遍历的对象
 * @param iteratee - 每次迭代调用的函数
 * @returns 返回对象
 */
const forInRight = <T extends Record<string, unknown>>(
  object: T,
  iteratee: (value: unknown, key: string, object: T) => void | boolean
): T => {
  if (object == null) return object

  const keys: string[] = []
  for (const key in object) {
    keys.push(key)
  }

  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i]
    if (iteratee(object[key], key, object) === false) {
      break
    }
  }

  return object
}

export default forInRight
