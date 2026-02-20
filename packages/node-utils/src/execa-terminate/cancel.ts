import type { CommonOptions } from '@/execa-types'

/**
 * 验证 cancelSignal 选项
 * @param options - 选项对象
 */
export const validateCancelSignal = (options: CommonOptions): void => {
  const { cancelSignal } = options

  if (cancelSignal !== undefined && !(cancelSignal instanceof AbortSignal)) {
    throw new TypeError(
      `The "cancelSignal" option must be an AbortSignal: ${cancelSignal}`
    )
  }
}
