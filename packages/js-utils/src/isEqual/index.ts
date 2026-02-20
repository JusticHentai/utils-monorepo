import getTag from '../getTag'

/**
 * 执行两个值的深度比较，判断它们是否相等
 * @param value - 要比较的第一个值
 * @param other - 要比较的第二个值
 * @returns 如果两个值相等返回 true
 * @example
 * isEqual({ a: 1 }, { a: 1 })           // => true
 * isEqual([1, 2, 3], [1, 2, 3])         // => true
 * isEqual(new Date(0), new Date(0))     // => true
 * isEqual({ a: 1 }, { a: 2 })           // => false
 * isEqual(NaN, NaN)                     // => true
 */
const isEqual = (value: unknown, other: unknown): boolean => {
  // 完全相等（包括引用相等）
  if (value === other) return true

  // 处理 NaN（NaN !== NaN，但我们认为它们相等）
  if (Number.isNaN(value) && Number.isNaN(other)) return true

  // 如果类型不同，则不相等
  if (typeof value !== typeof other) return false

  // null 和 undefined 已经被 === 处理
  if (value == null || other == null) return value === other

  // 获取类型标签
  const valueTag = getTag(value)
  const otherTag = getTag(other)

  if (valueTag !== otherTag) return false

  // 处理不同类型
  if (valueTag === '[object Date]') {
    return (value as Date).getTime() === (other as Date).getTime()
  } else if (valueTag === '[object RegExp]') {
    return String(value) === String(other)
  } else if (valueTag === '[object Error]') {
    return (
      (value as Error).name === (other as Error).name &&
      (value as Error).message === (other as Error).message
    )
  } else if (valueTag === '[object Map]') {
    return isMapEqual(
      value as Map<unknown, unknown>,
      other as Map<unknown, unknown>
    )
  } else if (valueTag === '[object Set]') {
    return isSetEqual(value as Set<unknown>, other as Set<unknown>)
  } else if (valueTag === '[object Array]') {
    return isArrayEqual(value as unknown[], other as unknown[])
  } else if (valueTag === '[object Object]') {
    return isObjectEqual(
      value as Record<string, unknown>,
      other as Record<string, unknown>
    )
  }

  return value === other
}

/**
 * 比较两个数组是否相等
 */
const isArrayEqual = (arr1: unknown[], arr2: unknown[]): boolean => {
  if (arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    if (!isEqual(arr1[i], arr2[i])) return false
  }

  return true
}

/**
 * 比较两个对象是否相等
 */
const isObjectEqual = (
  obj1: Record<string, unknown>,
  obj2: Record<string, unknown>
): boolean => {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) return false

  for (const key of keys1) {
    if (!Object.prototype.hasOwnProperty.call(obj2, key)) return false
    if (!isEqual(obj1[key], obj2[key])) return false
  }

  return true
}

/**
 * 比较两个 Map 是否相等
 */
const isMapEqual = (
  map1: Map<unknown, unknown>,
  map2: Map<unknown, unknown>
): boolean => {
  if (map1.size !== map2.size) return false

  for (const [key, value] of map1) {
    if (!map2.has(key) || !isEqual(value, map2.get(key))) return false
  }

  return true
}

/**
 * 比较两个 Set 是否相等
 */
const isSetEqual = (set1: Set<unknown>, set2: Set<unknown>): boolean => {
  if (set1.size !== set2.size) return false

  for (const value of set1) {
    // 对于 Set，需要检查是否存在相等的值
    let found = false
    for (const otherValue of set2) {
      if (isEqual(value, otherValue)) {
        found = true
        break
      }
    }
    if (!found) return false
  }

  return true
}

export default isEqual
