import stripFinalNewlineModule from 'strip-final-newline'
import type { CommonOptions } from '@/execa-types'

/**
 * 去除最终换行符
 * @param value - 输出值
 * @param options - 选项
 * @param fdNumber - 文件描述符编号
 */
export const stripNewline = (
  value: string | Uint8Array | string[] | undefined,
  options: CommonOptions,
  fdNumber: number | 'all'
): string | Uint8Array | string[] | undefined => {
  if (value === undefined) {
    return value
  }

  const stripFinalNewline = options.stripFinalNewline as boolean[] | boolean
  const shouldStrip = Array.isArray(stripFinalNewline)
    ? stripFinalNewline[typeof fdNumber === 'number' ? fdNumber : 1] ?? true
    : stripFinalNewline ?? true

  if (!shouldStrip) {
    return value
  }

  if (Array.isArray(value)) {
    return value.map((item) => stripFinalNewlineModule(item))
  }

  if (typeof value === 'string') {
    return stripFinalNewlineModule(value)
  }

  // Uint8Array
  return stripFinalNewlineUint8Array(value)
}

/**
 * 去除 Uint8Array 的最终换行符
 */
const stripFinalNewlineUint8Array = (value: Uint8Array): Uint8Array => {
  const { length } = value

  if (length === 0) {
    return value
  }

  const lastByte = value[length - 1]

  // \n
  if (lastByte === 0x0a) {
    const secondLastByte = value[length - 2]
    // \r\n
    if (secondLastByte === 0x0d) {
      return value.subarray(0, -2)
    }
    return value.subarray(0, -1)
  }

  // \r
  if (lastByte === 0x0d) {
    return value.subarray(0, -1)
  }

  return value
}
