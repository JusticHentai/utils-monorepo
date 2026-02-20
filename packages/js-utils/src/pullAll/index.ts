import pull from '../pull'

/**
 * 类似于 pull，但接受一个值数组
 * @param array - 要修改的数组
 * @param values - 要移除的值数组
 * @returns 返回修改后的数组
 * @example
 * const array = ['a', 'b', 'c', 'a', 'b', 'c']
 * pullAll(array, ['a', 'c'])
 * // => ['b', 'b']
 */
const pullAll = <T>(array: T[], values: T[]): T[] => {
  return pull(array, ...values)
}

export default pullAll
