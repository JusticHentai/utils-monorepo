import toPathArray from '../toPathArray'

/**
 * 类似于 update，但可以自定义路径上创建的值
 * @param object - 要修改的对象
 * @param path - 要更新的属性路径
 * @param updater - 更新函数
 * @param customizer - 自定义创建路径的函数
 * @returns 返回修改后的对象
 * @example
 * const object = {}
 * updateWith(object, '[0][1]', () => 'a', Object)
 * // => { '0': { '1': 'a' } }
 */
const updateWith = <T extends Record<string, unknown>>(
  object: T,
  path: string | string[],
  updater: (value: unknown) => unknown,
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

    // 当前 key 在对象中不存在或值为 null/undefined 时，需要自动创建中间节点
    if (!(key in current) || current[key] == null) {
      if (customizer) {
        // 有自定义函数时，优先让 customizer 决定创建什么类型的容器
        // customizer 接收三个参数：当前值、当前 key、当前所在对象
        const customValue = customizer(current[key], key, current)
        if (customValue !== undefined) {
          // customizer 返回了有效值，直接使用（如 Object() 会返回 {}）
          current[key] = customValue
        } else {
          // customizer 返回 undefined 表示不干预，回退到默认逻辑：
          // 根据下一层 key 是否为纯数字来决定创建数组还是对象
          const isNextIndex = /^\d+$/.test(nextKey)
          current[key] = isNextIndex ? [] : {}
        }
      } else {
        // 没有 customizer 时的默认行为：
        // nextKey 是纯数字（如 '0'、'1'）→ 创建数组，否则创建普通对象
        const isNextIndex = /^\d+$/.test(nextKey)
        current[key] = isNextIndex ? [] : {}
      }
    }

    current = current[key] as Record<string, unknown>
  }

  const lastKey = pathArray[pathArray.length - 1]
  current[lastKey] = updater(current[lastKey])

  return object
}

export default updateWith
