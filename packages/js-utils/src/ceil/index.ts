/**
 * 根据精度向上舍入数值
 * @param number - 要舍入的数值
 * @param precision - 精度，默认为 0
 * @returns 返回舍入后的数值
 * @example
 * ceil(4.006)
 * // => 5
 *
 * ceil(6.004, 2)
 * // => 6.01
 */
const ceil = (number: number, precision: number = 0): number => {
  const factor = Math.pow(10, precision)
  return Math.ceil(number * factor) / factor
}

export default ceil
