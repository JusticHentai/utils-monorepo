import type { BasicTarget, TargetType, TargetValue } from './interface'

export type { BasicTarget, TargetType, TargetValue } from './interface'

/**
 * 获取目标 DOM 元素
 *
 * 支持多种形式的目标输入：
 * - 函数：调用并返回结果
 * - Ref 对象：返回 current 属性
 * - 直接值：直接返回
 *
 * @param target - 目标元素，支持函数、Ref 对象或直接值
 * @param defaultElement - 当 target 为空时返回的默认元素
 * @returns 解析后的目标元素
 */
const getTargetElement = <T extends TargetType>(
  target: BasicTarget<T>,
  defaultElement?: T
): TargetValue<T> => {
  if (!target) {
    return defaultElement
  }

  let targetElement: TargetValue<T>

  if (typeof target === 'function') {
    targetElement = target()
  } else if ('current' in target) {
    targetElement = target.current
  } else {
    targetElement = target
  }

  return targetElement
}

export { getTargetElement }
export default getTargetElement
