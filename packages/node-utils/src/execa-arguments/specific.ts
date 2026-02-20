import { debuglog } from 'node:util'
import isPlainObj from 'is-plain-obj'
import { STANDARD_STREAMS_ALIASES } from '@/execa-utils/standardStream'
import type { CommonOptions, FdGenericOption, VerboseLevel } from '@/execa-types'
import { FD_SPECIFIC_OPTIONS, DEFAULT_OPTIONS } from '@/execa-types'

/**
 * 某些选项可以为 stdout/stderr/fd3 设置不同的值
 * 此函数将这些选项规范化为值数组
 * 例如，{ verbose: { stdout: 'none', stderr: 'full' } } 变为 { verbose: ['none', 'none', 'full'] }
 * @param options - 选项对象
 */
export const normalizeFdSpecificOptions = <T extends CommonOptions>(options: T): T => {
  const optionsCopy = { ...options }

  for (const optionName of FD_SPECIFIC_OPTIONS) {
    (optionsCopy as Record<string, unknown>)[optionName] = normalizeFdSpecificOption(
      options,
      optionName
    )
  }

  return optionsCopy
}

/**
 * 规范化单个 fd 特定选项
 * @param options - 选项对象
 * @param optionName - 选项名称
 */
export const normalizeFdSpecificOption = <T>(
  options: CommonOptions,
  optionName: (typeof FD_SPECIFIC_OPTIONS)[number]
): T[] => {
  const optionBaseArray = Array.from({ length: getStdioLength(options) + 1 })
  const optionArray = normalizeFdSpecificValue(
    options[optionName] as FdGenericOption<T>,
    optionBaseArray,
    optionName
  )
  return addDefaultValue(optionArray, optionName) as T[]
}

/**
 * 获取 stdio 长度
 */
const getStdioLength = (options: CommonOptions): number => {
  const { stdio } = options
  if (Array.isArray(stdio)) {
    return Math.max(stdio.length, STANDARD_STREAMS_ALIASES.length)
  }
  return STANDARD_STREAMS_ALIASES.length
}

/**
 * 规范化 fd 特定值
 */
const normalizeFdSpecificValue = <T>(
  optionValue: FdGenericOption<T> | undefined,
  optionArray: unknown[],
  optionName: string
): (T | undefined)[] => {
  if (isPlainObj(optionValue)) {
    return normalizeOptionObject(optionValue as Record<string, T>, optionArray, optionName)
  }
  return optionArray.fill(optionValue) as (T | undefined)[]
}

/**
 * 规范化选项对象
 */
const normalizeOptionObject = <T>(
  optionValue: Record<string, T>,
  optionArray: unknown[],
  optionName: string
): (T | undefined)[] => {
  for (const fdName of Object.keys(optionValue).sort(compareFdName)) {
    for (const fdNumber of parseFdName(fdName, optionName, optionArray)) {
      optionArray[fdNumber] = optionValue[fdName]
    }
  }

  return optionArray as (T | undefined)[]
}

/**
 * 确保设置 stdout/stderr、fd1/fd2 和 all 时的优先级顺序
 */
const compareFdName = (fdNameA: string, fdNameB: string): number => {
  return getFdNameOrder(fdNameA) < getFdNameOrder(fdNameB) ? 1 : -1
}

const getFdNameOrder = (fdName: string): number => {
  if (fdName === 'stdout' || fdName === 'stderr') {
    return 0
  }
  return fdName === 'all' ? 2 : 1
}

/**
 * 解析 fd 名称
 */
const parseFdName = (
  fdName: string,
  optionName: string,
  optionArray: unknown[]
): number[] => {
  if (fdName === 'ipc') {
    return [optionArray.length - 1]
  }

  const fdNumber = parseFd(fdName)
  if (fdNumber === undefined || fdNumber === 0) {
    throw new TypeError(
      `"${optionName}.${fdName}" is invalid.\n` +
        `It must be "${optionName}.stdout", "${optionName}.stderr", "${optionName}.all", "${optionName}.ipc", or "${optionName}.fd3", "${optionName}.fd4" (and so on).`
    )
  }

  if (typeof fdNumber === 'number' && fdNumber >= optionArray.length) {
    throw new TypeError(
      `"${optionName}.${fdName}" is invalid: that file descriptor does not exist.\n` +
        `Please set the "stdio" option to ensure that file descriptor exists.`
    )
  }

  return fdNumber === 'all' ? [1, 2] : [fdNumber]
}

/**
 * 解析 fd 名称为数字
 * 使用与 from/to 选项相同的语法
 */
export const parseFd = (fdName: string): number | 'all' | undefined => {
  if (fdName === 'all') {
    return fdName
  }

  if (STANDARD_STREAMS_ALIASES.includes(fdName as (typeof STANDARD_STREAMS_ALIASES)[number])) {
    return STANDARD_STREAMS_ALIASES.indexOf(fdName as (typeof STANDARD_STREAMS_ALIASES)[number])
  }

  const regexpResult = FD_REGEXP.exec(fdName)
  if (regexpResult !== null) {
    return Number(regexpResult[1])
  }

  return undefined
}

const FD_REGEXP = /^fd(\d+)$/

/**
 * 添加默认值
 */
const addDefaultValue = <T>(
  optionArray: (T | undefined)[],
  optionName: (typeof FD_SPECIFIC_OPTIONS)[number]
): T[] =>
  optionArray.map((optionValue) =>
    optionValue === undefined
      ? (DEFAULT_OPTIONS[optionName] as T)
      : optionValue
  ) as T[]

/**
 * verbose 选项的默认值
 */
export const verboseDefault: VerboseLevel = debuglog('execa').enabled ? 'full' : 'none'

/**
 * 获取 fd 特定值
 * @param optionArray - 选项数组
 * @param fdNumber - 文件描述符编号
 */
export const getFdSpecificValue = <T>(optionArray: T[], fdNumber: number | 'ipc'): T =>
  fdNumber === 'ipc' ? optionArray.at(-1)! : optionArray[fdNumber]
