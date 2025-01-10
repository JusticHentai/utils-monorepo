import { Pick } from '@justichentai/types-utils'

/**
 * 提取 obj 内的 key 组成一个新的 obj
 */
export default function pick<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: Array<K | string>
): Pick<T, K> {
  const clone = {} as Pick<T, K>

  for (const key of keys) {
    if ((key as any) in obj) {
      // @ts-ignore any
      clone[key] = obj[key]
    }
  }

  return clone
}
