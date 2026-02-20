/**
 * 检查 number 是否在指定范围内
 * @param number - 要检查的数值
 * @param start - 范围起点，默认为 0
 * @param end - 范围终点
 * @returns 如果 number 在范围内，返回 true
 * @example
 * inRange(3, 2, 4)
 * // => true
 *
 * inRange(4, 8)
 * // => true
 *
 * inRange(4, 2)
 * // => false
 *
 * inRange(2, 2)
 * // => false
 *
 * inRange(1.2, 2)
 * // => true
 *
 * inRange(-3, -2, -6)
 * // => true
 */
const inRange = (number: number, start: number = 0, end?: number): boolean => {
  // 如果只传了两个参数，start 是 end，start 默认为 0
  if (end === undefined) {
    end = start
    start = 0
  }

  // 确保 start <= end
  if (start > end) {
    const temp = start
    start = end
    end = temp
  }

  return number >= start && number < end
}

export default inRange
