import type { CommonOptions } from '@/execa-types'

/**
 * 验证 timeout 选项
 * @param options - 选项对象
 */
export const validateTimeout = (options: CommonOptions): void => {
  const { timeout } = options

  if (timeout === undefined || timeout === 0) {
    return
  }

  if (!Number.isFinite(timeout) || timeout < 0) {
    throw new TypeError(
      `Expected the \`timeout\` option to be a non-negative integer, got \`${timeout}\` (${typeof timeout})`
    )
  }
}
