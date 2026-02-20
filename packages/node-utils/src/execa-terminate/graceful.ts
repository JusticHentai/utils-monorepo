import type { CommonOptions } from '@/execa-types'

/**
 * 验证 gracefulCancel 选项
 * @param options - 选项对象
 */
export const validateGracefulCancel = (options: CommonOptions): void => {
  const { gracefulCancel, cancelSignal, ipc } = options

  if (!gracefulCancel) {
    return
  }

  if (cancelSignal === undefined) {
    throw new TypeError(
      'The "gracefulCancel" option requires the "cancelSignal" option to be set.'
    )
  }

  if (!ipc) {
    throw new TypeError(
      'The "gracefulCancel" option requires the "ipc" option to be `true`.'
    )
  }
}
