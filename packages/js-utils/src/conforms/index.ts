import conformsTo from '../conformsTo'

/**
 * 创建一个函数，检查给定的对象是否符合约束条件
 * @param source - 约束条件对象（每个属性为谓词函数）
 * @returns 返回新的谓词函数
 * @example
 * const objects = [
 *   { a: 2, b: 1 },
 *   { a: 1, b: 2 }
 * ]
 *
 * objects.filter(conforms({ b: (n) => n > 1 }))
 * // => [{ a: 1, b: 2 }]
 */
const conforms = <T extends Record<string, unknown>>(
  source: Record<string, (value: unknown) => boolean>
): ((object: T) => boolean) => {
  return (object: T): boolean => {
    return conformsTo(object, source)
  }
}

export default conforms
