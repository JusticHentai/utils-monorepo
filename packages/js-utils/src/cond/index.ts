/**
 * 创建一个函数，遍历条件对，返回第一个为真的条件对应的结果
 * @param pairs - 条件-结果对数组
 * @returns 返回新的函数
 * @example
 * const func = cond([
 *   [x => x === 0, () => 'zero'],
 *   [x => x < 0, () => 'negative'],
 *   [() => true, () => 'positive']
 * ])
 *
 * func(-1) // => 'negative'
 * func(0)  // => 'zero'
 * func(1)  // => 'positive'
 */
const cond = <T, R>(
  pairs: [(value: T) => boolean, (value: T) => R][]
): ((value: T) => R | undefined) => {
  return (value: T): R | undefined => {
    for (const [predicate, result] of pairs) {
      if (predicate(value)) {
        return result(value)
      }
    }
    return undefined
  }
}

export default cond
