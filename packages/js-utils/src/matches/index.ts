import isMatch from '../isMatch'

/**
 * 创建一个函数，用于检查对象是否匹配给定的源对象
 * @param source - 要匹配的属性值
 * @returns 返回新的谓词函数
 * @example
 * const objects = [
 *   { a: 1, b: 2, c: 3 },
 *   { a: 4, b: 5, c: 6 }
 * ]
 * objects.filter(matches({ a: 4, c: 6 }))
 * // => [{ a: 4, b: 5, c: 6 }]
 */
const matches = (
  source: Record<string, unknown>
): ((object: Record<string, unknown>) => boolean) => {
  return (object: Record<string, unknown>): boolean => isMatch(object, source)
}

export default matches
