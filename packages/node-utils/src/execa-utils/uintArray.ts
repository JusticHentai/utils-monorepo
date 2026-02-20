import { StringDecoder } from 'node:string_decoder'

const { toString: objectToString } = Object.prototype

/**
 * 检查值是否为 ArrayBuffer
 * @param value - 要检查的值
 */
export const isArrayBuffer = (value: unknown): value is ArrayBuffer =>
  objectToString.call(value) === '[object ArrayBuffer]'

/**
 * 检查值是否为 Uint8Array（包括 Buffer）
 * @param value - 要检查的值
 */
export const isUint8Array = (value: unknown): value is Uint8Array =>
  objectToString.call(value) === '[object Uint8Array]'

/**
 * 将 Buffer 转换为 Uint8Array
 * @param buffer - Buffer 对象
 */
export const bufferToUint8Array = (buffer: Buffer): Uint8Array =>
  new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength)

const textEncoder = new TextEncoder()

/**
 * 将字符串转换为 Uint8Array
 * @param string - 要转换的字符串
 */
export const stringToUint8Array = (string: string): Uint8Array => textEncoder.encode(string)

const textDecoder = new TextDecoder()

/**
 * 将 Uint8Array 转换为字符串
 * @param uint8Array - Uint8Array
 */
export const uint8ArrayToString = (uint8Array: Uint8Array): string => textDecoder.decode(uint8Array)

/**
 * 将多个 Uint8Array 或字符串连接为字符串
 * @param uint8ArraysOrStrings - Uint8Array 或字符串数组
 * @param encoding - 编码
 */
export const joinToString = (
  uint8ArraysOrStrings: (Uint8Array | string)[],
  encoding: BufferEncoding
): string => {
  const strings = uint8ArraysToStrings(uint8ArraysOrStrings, encoding)
  return strings.join('')
}

const uint8ArraysToStrings = (
  uint8ArraysOrStrings: (Uint8Array | string)[],
  encoding: BufferEncoding
): string[] => {
  if (
    encoding === 'utf8' &&
    uint8ArraysOrStrings.every((item) => typeof item === 'string')
  ) {
    return uint8ArraysOrStrings as string[]
  }

  const decoder = new StringDecoder(encoding)
  const strings = uint8ArraysOrStrings
    .map((item) =>
      typeof item === 'string' ? stringToUint8Array(item) : item
    )
    .map((uint8Array) => decoder.write(Buffer.from(uint8Array)))

  const finalString = decoder.end()
  return finalString === '' ? strings : [...strings, finalString]
}

/**
 * 将多个 Uint8Array 或字符串连接为 Uint8Array
 * @param uint8ArraysOrStrings - Uint8Array 或字符串数组
 */
export const joinToUint8Array = (uint8ArraysOrStrings: (Uint8Array | string)[]): Uint8Array => {
  if (uint8ArraysOrStrings.length === 1 && isUint8Array(uint8ArraysOrStrings[0])) {
    return uint8ArraysOrStrings[0]
  }

  return concatUint8Arrays(stringsToUint8Arrays(uint8ArraysOrStrings))
}

const stringsToUint8Arrays = (uint8ArraysOrStrings: (Uint8Array | string)[]): Uint8Array[] =>
  uint8ArraysOrStrings.map((item) =>
    typeof item === 'string' ? stringToUint8Array(item) : item
  )

/**
 * 连接多个 Uint8Array
 * @param uint8Arrays - Uint8Array 数组
 */
export const concatUint8Arrays = (uint8Arrays: Uint8Array[]): Uint8Array => {
  const result = new Uint8Array(getJoinLength(uint8Arrays))

  let index = 0
  for (const uint8Array of uint8Arrays) {
    result.set(uint8Array, index)
    index += uint8Array.length
  }

  return result
}

const getJoinLength = (uint8Arrays: Uint8Array[]): number => {
  let joinLength = 0
  for (const uint8Array of uint8Arrays) {
    joinLength += uint8Array.length
  }
  return joinLength
}
