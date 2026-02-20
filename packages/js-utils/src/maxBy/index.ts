/**
 * 类似于 max，但可以指定迭代器
 * @param array - 要迭代的数组
 * @param iteratee - 迭代器函数
 * @returns 返回最大值元素
 * @example
 * const objects = [{ n: 1 }, { n: 2 }]
 * maxBy(objects, o => o.n)
 * // => { n: 2 }
 */
const maxBy = <T>(
  array: T[],
  iteratee: (value: T) => number
): T | undefined => {
  if (!array?.length) {
    return undefined
  }

  let result = array[0]
  let computed = iteratee(result)

  for (let i = 1; i < array.length; i++) {
    const current = iteratee(array[i])
    if (current > computed) {
      result = array[i]
      computed = current
    }
  }

  return result
}

export default maxBy
