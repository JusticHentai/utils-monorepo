import { ClampOptions } from './interface'

/**
 * 将数值限制在最小值和最大值之间
 *
 * @param options - 配置选项
 * @param options.value - 要限制的数值
 * @param options.min - 最小值边界（可选）
 * @param options.max - 最大值边界（可选）
 * @returns 限制后的数值
 *
 * @example
 * ```ts
 * clamp({ value: 5, min: 0, max: 10 })  // 5
 * clamp({ value: -5, min: 0, max: 10 }) // 0
 * clamp({ value: 15, min: 0, max: 10 }) // 10
 * clamp({ value: 5, min: 0 })           // 5（只限制最小值）
 * clamp({ value: 15, max: 10 })         // 10（只限制最大值）
 * ```
 */
const clamp = ({ value, min, max }: ClampOptions): number => {
  let result = value

  if (min !== undefined && max !== undefined) {
    const lower = Math.min(min, max)
    const upper = Math.max(min, max)
    return Math.min(Math.max(value, lower), upper)
  }

  if (min !== undefined) {
    result = Math.max(min, result)
  }

  if (max !== undefined) {
    result = Math.min(max, result)
  }

  return result
}

export default clamp
