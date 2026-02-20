/**
 * 根据精度四舍五入数值
 * @param number - 要舍入的数值
 * @param precision - 精度，默认为 0
 * @returns 返回舍入后的数值
 * @example
 * round(4.006) // => 4
 * round(4.006, 2) // => 4.01
 */
const round = (number: number, precision: number = 0): number => {
  const factor = Math.pow(10, precision)
  return Math.round(number * factor) / factor
}

export default round
