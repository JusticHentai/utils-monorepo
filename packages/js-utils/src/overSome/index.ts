/**
 * 创建一个函数，检查是否有任意断言函数对给定参数返回 true
 * @param predicates - 要检查的断言函数数组
 * @returns 返回新的函数
 * @example
 * const isNumberOrString = overSome([
 *   (v: unknown) => typeof v === 'number',
 *   (v: unknown) => typeof v === 'string'
 * ])
 * isNumberOrString('hello')
 * // => true
 */
const overSome = <T extends ((...args: unknown[]) => boolean)[]>(
  predicates: T
): ((...args: unknown[]) => boolean) => {
  return (...args: unknown[]): boolean => {
    return predicates.some((predicate) => predicate(...args))
  }
}

export default overSome
