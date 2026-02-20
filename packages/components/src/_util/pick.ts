/**
 * 从对象中选取指定的 key
 */
export default function pick<
  T extends Record<string, unknown>,
  K extends keyof T,
>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key]
    }
  })
  return result
}

/**
 * 选取 data-* 和 aria-* 属性
 */
export function pickDataAttributes(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: Record<string, any>
): Record<string, unknown> {
  const result: Record<string, unknown> = {}
  for (const key in obj) {
    if (key.startsWith('data-') || key.startsWith('aria-')) {
      result[key] = obj[key]
    }
  }
  return result
}
