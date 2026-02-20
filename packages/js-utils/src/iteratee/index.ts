import matches from '../matches'
import matchesProperty from '../matchesProperty'
import property from '../property'

/**
 * 创建一个函数，返回给定参数的迭代器
 * 如果值为函数，直接返回；如果为字符串，视为属性路径；
 * 如果为数组，视为 matchesProperty；如果为对象，视为 matches
 * @param value - 要转换的值
 * @returns 返回迭代器函数
 * @example
 * const users = [
 *   { user: 'barney', age: 36, active: true },
 *   { user: 'fred', age: 40, active: false }
 * ]
 *
 * // 函数直接返回
 * iteratee(function(o) { return o.age })
 *
 * // 字符串 => property 路径
 * users.map(iteratee('user'))
 * // => ['barney', 'fred']
 *
 * // 对象 => matches
 * users.filter(iteratee({ user: 'barney', active: true }))
 * // => [{ user: 'barney', age: 36, active: true }]
 *
 * // 数组 => matchesProperty
 * users.filter(iteratee(['user', 'fred']))
 * // => [{ user: 'fred', age: 40, active: false }]
 */
const iteratee = (value?: unknown): ((...args: unknown[]) => unknown) => {
  if (value == null) {
    return (v: unknown) => v
  }

  if (typeof value === 'function') {
    return value as (...args: unknown[]) => unknown
  }

  if (typeof value === 'string') {
    return property(value)
  }

  if (Array.isArray(value)) {
    return matchesProperty(value[0] as string, value[1]) as (
      ...args: unknown[]
    ) => unknown
  }

  if (typeof value === 'object') {
    return matches(value as Record<string, unknown>) as (
      ...args: unknown[]
    ) => unknown
  }

  return (v: unknown) => v
}

export default iteratee
