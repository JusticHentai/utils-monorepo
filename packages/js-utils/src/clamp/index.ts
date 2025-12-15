/**
 * 将数值限制在最小值和最大值之间
 * @param value - 要限制的数值
 * @param min - 最小值边界
 * @param max - 最大值边界
 * @returns 限制在[min,max]区间后的数值
 */
const clamp = (value: number, min: number, max: number) => {
  const lower = Math.min(min, max)
  const upper = Math.max(min, max)

  return Math.min(Math.max(value, lower), upper)
}

export default clamp
