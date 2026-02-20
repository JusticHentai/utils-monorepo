import type { CommonOptions } from '@/execa-types'

/**
 * 验证 ipcInput 选项
 * @param options - 选项对象
 */
export const validateIpcInputOption = (options: CommonOptions): void => {
  const { ipcInput, ipc, serialization } = options

  if (ipcInput === undefined) {
    return
  }

  if (!ipc) {
    throw new TypeError(
      'The "ipcInput" option requires the "ipc" option to be `true`.'
    )
  }

  // 验证 JSON 序列化
  if (serialization === 'json') {
    try {
      JSON.stringify(ipcInput)
    } catch (error) {
      throw new TypeError(
        `The "ipcInput" option is not serializable with JSON: ${(error as Error).message}`
      )
    }
  }
}
