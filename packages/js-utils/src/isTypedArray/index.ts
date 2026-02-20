import getTag from '../getTag'

/**
 * 检查 value 是否是 TypedArray
 * @param value - 要检查的值
 * @returns 如果是 TypedArray，返回 true
 * @example
 * isTypedArray(new Uint8Array())
 * // => true
 *
 * isTypedArray([])
 * // => false
 */
const isTypedArray = (value: unknown): boolean => {
  const typedArrayTypes = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]',
    '[object BigInt64Array]',
    '[object BigUint64Array]',
  ]
  return typedArrayTypes.includes(getTag(value))
}

export default isTypedArray
