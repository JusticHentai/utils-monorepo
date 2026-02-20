import type { VerboseOption, VerboseInfo, VerboseLevel } from '@/execa-types'

/** 有效的 verbose 值 */
export const VERBOSE_VALUES: VerboseLevel[] = ['none', 'short', 'full']

/**
 * 检查是否为 verbose 函数
 * @param value - 要检查的值
 */
export const isVerboseFunction = (value: unknown): value is (line: string, obj: object) => void =>
  typeof value === 'function'

/**
 * 检查是否启用了 verbose
 * @param verboseInfo - verbose 信息
 */
export const isVerbose = (verboseInfo: VerboseInfo): boolean => {
  const { verbose } = verboseInfo
  return verbose.some((fdVerbose) => fdVerbose !== 'none')
}

/**
 * 获取指定 fd 的 verbose 值
 * @param verbose - verbose 数组
 * @param fdNumber - 文件描述符编号
 */
export const getVerboseValue = (
  verbose: VerboseOption[],
  fdNumber: number
): VerboseOption => verbose[fdNumber] ?? verbose[1] ?? 'none'

/**
 * 检查指定 fd 是否启用了 verbose
 * @param verbose - verbose 数组
 * @param fdNumber - 文件描述符编号
 */
export const isFdVerbose = (verbose: VerboseOption[], fdNumber: number): boolean => {
  const fdVerbose = getVerboseValue(verbose, fdNumber)
  return fdVerbose !== 'none'
}
