/**
 * 提取 obj 内的 key 组成一个新的 obj
 */
const pick = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: Array<K>
): Pick<T, K> => {
  const clone = {} as Pick<T, K>

  for (const key of keys) {
    if ((key as any) in obj) {
      clone[key] = obj[key]
    }
  }

  return clone
}

export default pick
