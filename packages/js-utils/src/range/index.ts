/**
 * 创建一个包含从 start 到 end（不包含）的数字数组
 * @param start - 范围的起始值
 * @param end - 范围的结束值（不包含）
 * @param step - 步长
 * @returns 返回数字数组
 * @example
 * range(4) // => [0, 1, 2, 3]
 * range(1, 5) // => [1, 2, 3, 4]
 * range(0, 20, 5) // => [0, 5, 10, 15]
 */
const range = (start: number, end?: number, step?: number): number[] => {
  if (end === undefined) {
    end = start
    start = 0
  }

  if (step === undefined) {
    step = start < end ? 1 : -1
  }

  const length =
    step === 0
      ? Math.ceil((end - start) / (end > start ? 1 : -1))
      : Math.max(Math.ceil((end - start) / step), 0)

  if (step === 0) {
    return Array.from({ length }, () => start)
  }

  const result: number[] = []
  let current = start

  for (let i = 0; i < length; i++) {
    result.push(current)
    current += step
  }

  return result
}

export default range
