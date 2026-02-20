import range from '../range'

/**
 * 类似于 range，但是按降序填充数组
 * @param start - 范围的起始值
 * @param end - 范围的结束值（不包含）
 * @param step - 步长
 * @returns 返回数字数组
 * @example
 * rangeRight(4)
 * // => [3, 2, 1, 0]
 *
 * rangeRight(1, 5)
 * // => [4, 3, 2, 1]
 */
const rangeRight = (start: number, end?: number, step?: number): number[] => {
  return range(start, end, step).reverse()
}

export default rangeRight
