/**
 * 根据精度向下舍入数值
 * @param number - 要舍入的数值
 * @param precision - 精度，默认为 0
 * @returns 返回舍入后的数值
 * @example
 * floor(4.006)
 * // => 4
 *
 * floor(0.046, 2)
 * // => 0.04
 */
const floor = (number: number, precision: number = 0): number => {
  // 缩放因子：precision = 2 时 factor = 10^2 = 100
  const factor = Math.pow(10, precision)
  return Math.floor(number * factor) / factor
}

export default floor
