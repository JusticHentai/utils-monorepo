import isArray from '../isArray'
import isObject from '../isObject'

import type { DeepMerge } from './interface'

/**
 * 深度合并两个对象或数组
 * 将 source 的属性递归合并到 target 中，会修改原 target 对象
 * @param target 目标对象，合并结果会写入此对象
 * @param source 源对象，提供要合并的属性
 * @returns 合并后的对象（即修改后的 target）
 *
 * 合并规则：
 * 1. 两者都是对象：递归合并每个属性
 * 2. 两者都是数组：按索引递归合并每个元素
 * 3. 类型不同或 source 有值：优先使用 source
 * 4. source 为空（null/undefined/空字符串等）：保留 target
 */
const deepMerge = <T extends object, S extends object>(
  target: T,
  source: S
): DeepMerge<T, S> => {
  /** 两者都是对象，递归合并每个属性 */
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      const targetValue = (target as Record<string, unknown>)[key]
      const sourceValue = (source as Record<string, unknown>)[key]

      const mergedValue = deepMerge(
        targetValue as object,
        sourceValue as object
      )
      Object.assign(target, {
        [key]: mergedValue,
      })
    }

    return target as DeepMerge<T, S>
  }

  /** 两者都是数组，按索引递归合并每个元素 */
  if (isArray(target) && isArray(source)) {
    for (const index in source) {
      const targetValue = target[index]
      const sourceValue = source[index]

      const mergedValue = deepMerge(
        targetValue as object,
        sourceValue as object
      )
      ;(target as unknown[])[Number(index)] = mergedValue
    }

    return target as DeepMerge<T, S>
  }

  /** 属性优先级：source > target, source 为空（null/undefined/空字符串等）：保留 target */
  return (source ? source : target) as DeepMerge<T, S>
}

export default deepMerge
