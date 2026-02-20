/**
 * 从对象中排除指定的 key
 */
export default function omit<
  T extends Record<string, unknown>,
  K extends keyof T,
>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj }
  keys.forEach((key) => {
    delete result[key]
  })
  return result
}
