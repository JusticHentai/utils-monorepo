import type { NestedObject, PropertyPath } from '../get/interface'
import toPathArray from '../toPathArray'

/**
 * 根据路径设置对象的属性值，如果路径中的部分不存在，会自动创建
 * @param object - 要修改的对象
 * @param path - 属性路径，支持 'a.b.c' 或 ['a', 'b', 'c'] 格式
 * @param value - 要设置的值
 * @returns 返回修改后的对象
 * @example
 * const object = { a: [{ b: { c: 3 } }] }
 *
 * set(object, 'a[0].b.c', 4)
 * // => { a: [{ b: { c: 4 } }] }
 *
 * set(object, ['x', '0', 'y', 'z'], 5)
 * // => { a: [{ b: { c: 4 } }], x: [{ y: { z: 5 } }] }
 */
const set = <T extends NestedObject>(
  object: T,
  path: PropertyPath,
  value: unknown
): T => {
  if (object == null || typeof object !== 'object') return object

  const pathArray = Array.isArray(path) ? path : toPathArray(String(path))

  let current: NestedObject = object
  const lastIndex = pathArray.length - 1

  for (let i = 0; i < lastIndex; i++) {
    const key = pathArray[i] as string | number
    const nextKey = pathArray[i + 1]

    // 判断下一个键是否为数字索引
    const isNextIndex =
      typeof nextKey === 'number' || /^\d+$/.test(String(nextKey))

    if (current[key] == null || typeof current[key] !== 'object') {
      // 如果下一个键是数字索引，创建数组，否则创建对象
      current[key] = isNextIndex ? [] : {}
    }

    current = current[key] as NestedObject
  }

  const lastKey = pathArray[lastIndex] as string | number
  current[lastKey] = value

  return object
}

export default set
