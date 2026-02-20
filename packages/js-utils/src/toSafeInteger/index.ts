import toInteger from '../toInteger'

/**
 * 将 value 转换为安全整数
 * @param value - 要转换的值
 * @returns 返回转换后的安全整数
 * @example
 * toSafeInteger(3.2) // => 3
 * toSafeInteger(Number.MAX_SAFE_INTEGER + 1) // => 9007199254740991
 */
const toSafeInteger = (value: unknown): number => {
  const result = toInteger(value)
  if (result < Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER
  if (result > Number.MAX_SAFE_INTEGER) return Number.MAX_SAFE_INTEGER
  return result
}

export default toSafeInteger
