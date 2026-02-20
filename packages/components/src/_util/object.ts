/**
 * 深度获取对象属性值，支持路径字符串或数组
 * 替代 lodash/get
 */
export function get(
  obj: unknown,
  path: string | (string | number)[],
  defaultValue?: unknown
): unknown {
  if (obj == null) return defaultValue
  const keys = Array.isArray(path)
    ? path
    : path.replace(/\[(\d+)\]/g, '.$1').split('.')
  let result: unknown = obj
  for (const key of keys) {
    if (result == null) return defaultValue
    result = (result as Record<string | number, unknown>)[key]
  }
  return result === undefined ? defaultValue : result
}

/**
 * 深度设置对象属性值
 * 替代 lodash/set
 */
export function set(
  obj: Record<string, unknown>,
  path: string | (string | number)[],
  value: unknown
): Record<string, unknown> {
  if (obj == null) return obj
  const keys = Array.isArray(path)
    ? path
    : path.replace(/\[(\d+)\]/g, '.$1').split('.')
  let current: Record<string | number, unknown> = obj
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    const nextKey = keys[i + 1]
    if (current[key] == null) {
      current[key] =
        typeof nextKey === 'number' || /^\d+$/.test(String(nextKey)) ? [] : {}
    }
    current = current[key] as Record<string | number, unknown>
  }
  current[keys[keys.length - 1]] = value
  return obj
}

/**
 * 深度检查对象是否存在某个路径
 * 替代 lodash/has
 */
export function has(obj: unknown, path: string | (string | number)[]): boolean {
  if (obj == null) return false
  const keys = Array.isArray(path)
    ? path
    : path.replace(/\[(\d+)\]/g, '.$1').split('.')
  let current: unknown = obj
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return false
    if (!(key in (current as Record<string | number, unknown>))) return false
    current = (current as Record<string | number, unknown>)[key]
  }
  return true
}

/**
 * 深度合并对象
 * 替代 lodash/merge
 */
export function deepMerge<T extends Record<string, unknown>>(
  ...sources: Partial<T>[]
): T {
  const result: Record<string, unknown> = {}
  for (const source of sources) {
    if (source == null) continue
    for (const key of Object.keys(source)) {
      const val = source[key]
      const existing = result[key]
      if (
        val != null &&
        typeof val === 'object' &&
        !Array.isArray(val) &&
        existing != null &&
        typeof existing === 'object' &&
        !Array.isArray(existing)
      ) {
        result[key] = deepMerge(
          existing as Record<string, unknown>,
          val as Record<string, unknown>
        )
      } else {
        result[key] = val
      }
    }
  }
  return result as T
}

/**
 * 深度比较两个值
 * 替代 lodash/isEqualWith（简化版）
 */
export function isEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true
  if (a == null || b == null) return a === b
  if (typeof a !== typeof b) return false
  if (typeof a !== 'object') return a === b
  if (Array.isArray(a) !== Array.isArray(b)) return false
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false
    return a.every((item, i) => isEqual(item, b[i]))
  }
  const keysA = Object.keys(a as Record<string, unknown>)
  const keysB = Object.keys(b as Record<string, unknown>)
  if (keysA.length !== keysB.length) return false
  return keysA.every((key) =>
    isEqual(
      (a as Record<string, unknown>)[key],
      (b as Record<string, unknown>)[key]
    )
  )
}
