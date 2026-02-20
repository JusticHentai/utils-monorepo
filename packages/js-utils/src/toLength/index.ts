import toInteger from '../toInteger'

/**
 * 将 value 转换为适合用作类数组长度的整数
 * @param value - 要转换的值
 * @returns 返回转换后的整数
 * @example
 * toLength(3.2) // => 3
 * toLength(-1) // => 0
 */
const toLength = (value: unknown): number => {
  const MAX_ARRAY_LENGTH = 4294967295

  const result = toInteger(value)
  if (result < 0) return 0
  if (result > MAX_ARRAY_LENGTH) return MAX_ARRAY_LENGTH
  return result
}

export default toLength
