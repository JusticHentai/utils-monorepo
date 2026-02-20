/**
 * 类似于 min，但可以指定迭代器
 * @param array - 要迭代的数组
 * @param iteratee - 迭代器函数
 * @returns 返回最小值元素
 * @example
 * const objects = [{ n: 1 }, { n: 2 }]
 * minBy(objects, o => o.n)
 * // => { n: 1 }
 */
const minBy = <T>(
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
    if (current < computed) {
      result = array[i]
      computed = current
    }
  }

  return result
}

export default minBy
