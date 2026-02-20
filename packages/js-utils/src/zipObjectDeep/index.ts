import toPathArray from '../toPathArray'

/**
 * 类似于 zipObject，但支持属性路径
 * @param paths - 属性路径数组
 * @param values - 对应的值数组
 * @returns 返回新对象
 * @example
 * zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])
 * // => { a: { b: [{ c: 1 }, { d: 2 }] } }
 */
const zipObjectDeep = <V>(
  paths: string[],
  values: V[]
): Record<string, unknown> => {
  const result: Record<string, unknown> = {}

  if (!paths?.length) {
    return result
  }

  const setPath = (
    obj: Record<string, unknown>,
    path: string[],
    value: V
  ): void => {
    let current: Record<string, unknown> = obj
    for (let i = 0; i < path.length - 1; i++) {
      const key = path[i]
      const nextKey = path[i + 1]
      const isNextIndex = /^\d+$/.test(nextKey)
      if (!(key in current)) {
        current[key] = isNextIndex ? [] : {}
      }
      current = current[key] as Record<string, unknown>
    }
    current[path[path.length - 1]] = value
  }

  for (let i = 0; i < paths.length; i++) {
    const pathArray = toPathArray(paths[i])
    setPath(result, pathArray, values?.[i] as V)
  }

  return result
}

export default zipObjectDeep
