import toPathArray from '../toPathArray'

/**
 * 类似于 set，但可以自定义路径上创建的值
 * @param object - 要修改的对象
 * @param path - 要设置的属性路径
 * @param value - 要设置的值
 * @param customizer - 自定义创建路径的函数
 * @returns 返回修改后的对象
 * @example
 * const object = {}
 *
 * setWith(object, '[0][1]', 'a', Object)
 * // => { '0': { '1': 'a' } }
 */
const setWith = <T extends Record<string, unknown>>(
  object: T,
  path: string | string[],
  value: unknown,
  customizer?: (nsValue: unknown, key: string, nsObject: unknown) => unknown
): T => {
  if (object == null) {
    return object
  }

  const pathArray = typeof path === 'string' ? toPathArray(path) : path

  let current: Record<string, unknown> = object

  for (let i = 0; i < pathArray.length - 1; i++) {
    const key = pathArray[i]
    const nextKey = pathArray[i + 1]

    if (!(key in current) || current[key] == null) {
      if (customizer) {
        const customValue = customizer(current[key], key, current)
        if (customValue !== undefined) {
          current[key] = customValue
        } else {
          // 判断下一个 key 是否是数字索引
          const isNextIndex = /^\d+$/.test(nextKey)
          current[key] = isNextIndex ? [] : {}
        }
      } else {
        // 判断下一个 key 是否是数字索引
        const isNextIndex = /^\d+$/.test(nextKey)
        current[key] = isNextIndex ? [] : {}
      }
    }

    current = current[key] as Record<string, unknown>
  }

  current[pathArray[pathArray.length - 1]] = value
  return object
}

export default setWith
