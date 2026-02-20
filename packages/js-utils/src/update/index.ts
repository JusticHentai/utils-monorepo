import toPathArray from '../toPathArray'

/**
 * 使用更新函数更新对象指定路径的值
 * @param object - 要修改的对象
 * @param path - 要更新的属性路径
 * @param updater - 更新函数
 * @returns 返回修改后的对象
 * @example
 * update({ a: [{ b: { c: 3 } }] }, 'a[0].b.c', n => n * n)
 * // => { a: [{ b: { c: 9 } }] }
 */
const update = <T extends Record<string, unknown>>(
  object: T,
  path: string | string[],
  updater: (value: unknown) => unknown
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
      const isNextIndex = /^\d+$/.test(nextKey)
      current[key] = isNextIndex ? [] : {}
    }

    current = current[key] as Record<string, unknown>
  }

  const lastKey = pathArray[pathArray.length - 1]
  current[lastKey] = updater(current[lastKey])

  return object
}

export default update
