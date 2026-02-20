import isPlainObj from 'is-plain-obj'
import { FD_SPECIFIC_OPTIONS } from '@/execa-types'
import type { CommonOptions } from '@/execa-types'

/**
 * 深度合并特定选项如 env，浅合并其他选项
 * 使用展开运算符（只复制自有属性）安全地从 boundOptions 读取，避免原型污染
 * @param boundOptions - 绑定的选项
 * @param options - 新选项
 */
export const mergeOptions = <T extends CommonOptions>(
  boundOptions: T,
  options: Partial<T>
): T => {
  const safeBoundOptions = { __proto__: null, ...boundOptions } as unknown as Record<string, unknown>
  const mergedOptions = Object.fromEntries(
    Object.entries(options).map(([optionName, optionValue]) => [
      optionName,
      mergeOption(optionName, safeBoundOptions[optionName], optionValue),
    ])
  ) as Partial<T>

  return { ...(safeBoundOptions as unknown as T), ...mergedOptions }
}

/**
 * 合并单个选项
 */
const mergeOption = (
  optionName: string,
  boundOptionValue: unknown,
  optionValue: unknown
): unknown => {
  if (
    DEEP_OPTIONS.has(optionName) &&
    isPlainObj(boundOptionValue) &&
    isPlainObj(optionValue)
  ) {
    return { ...(boundOptionValue as object), ...(optionValue as object) }
  }

  return optionValue
}

/** 需要深度合并的选项 */
const DEEP_OPTIONS = new Set(['env', ...FD_SPECIFIC_OPTIONS])
