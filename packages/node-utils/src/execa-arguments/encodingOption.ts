import type { EncodingOption } from '@/execa-types'
import { BINARY_ENCODINGS } from '@/execa-types'

/** 有效的编码列表 */
const VALID_ENCODINGS = new Set([
  'utf8',
  'utf16le',
  'buffer',
  'hex',
  'base64',
  'base64url',
  'latin1',
  'ascii',
])

/**
 * 验证 encoding 选项
 * @param options - 选项对象
 */
export const validateEncoding = (options: { encoding?: EncodingOption }): void => {
  const { encoding = 'utf8' } = options

  if (!VALID_ENCODINGS.has(encoding)) {
    throw new TypeError(
      `Invalid "encoding" option: ${encoding}. Must be one of: ${[...VALID_ENCODINGS].join(', ')}.`
    )
  }
}

/**
 * 检查编码是否为二进制编码
 * @param encoding - 编码
 */
export const isBinaryEncoding = (encoding: EncodingOption): boolean =>
  BINARY_ENCODINGS.has(encoding)

export { BINARY_ENCODINGS }
