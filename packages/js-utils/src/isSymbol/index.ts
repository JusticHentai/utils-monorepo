import getTag from '../getTag'

/**
 * 检查 value 是否是 Symbol
 * @param value - 要检查的值
 * @returns 如果是 Symbol，返回 true
 * @example
 * isSymbol(Symbol.iterator)
 * // => true
 */
const isSymbol = (value: unknown): value is symbol => {
  return typeof value === 'symbol' || getTag(value) === '[object Symbol]'
}

export default isSymbol
