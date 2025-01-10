/**
 * 删除 对象中 指定的 key
 */
export default function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: Array<K | string>
): Omit<T, K> {
  const clone = {
    ...obj,
  }

  for (const key in keys) {
    if ((key as K) in clone) {
      delete clone[key as K]
    }
  }

  return clone
}
