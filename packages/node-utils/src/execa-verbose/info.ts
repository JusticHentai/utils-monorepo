import { isVerbose, VERBOSE_VALUES, isVerboseFunction } from './values'
import type { VerboseOption, VerboseInfo, CommonOptions } from '@/execa-types'

/**
 * 获取 verbose 信息
 * 在生成前计算，用于 verbose 选项
 * @param verbose - verbose 配置数组
 * @param escapedCommand - 转义后的命令
 * @param rawOptions - 原始选项
 */
export const getVerboseInfo = (
  verbose: VerboseOption[],
  escapedCommand: string,
  rawOptions: CommonOptions
): VerboseInfo => {
  validateVerbose(verbose)
  const commandId = getCommandId(verbose)
  return {
    verbose,
    escapedCommand,
    commandId,
    rawOptions,
  }
}

/**
 * 获取命令 ID
 */
const getCommandId = (verbose: VerboseOption[]): bigint | undefined =>
  isVerbose({ verbose, escapedCommand: '', commandId: undefined, rawOptions: {} })
    ? COMMAND_ID++
    : undefined

/**
 * 命令 ID 计数器
 * 在 pid 前添加对于多个命令同时打印输出时很有用
 * 但是不能使用真实的 PID，因为在 child_process.spawnSync() 中不可用
 * 而且如果想在 child_process.spawn() 运行之前打印它也不能使用真实的 PID
 */
let COMMAND_ID = 0n

/**
 * 验证 verbose 选项
 */
const validateVerbose = (verbose: VerboseOption[]): void => {
  for (const fdVerbose of verbose) {
    if (fdVerbose === (false as unknown)) {
      throw new TypeError('The "verbose: false" option was renamed to "verbose: \'none\'".')
    }

    if (fdVerbose === (true as unknown)) {
      throw new TypeError('The "verbose: true" option was renamed to "verbose: \'short\'".')
    }

    if (!VERBOSE_VALUES.includes(fdVerbose as (typeof VERBOSE_VALUES)[number]) && !isVerboseFunction(fdVerbose)) {
      const allowedValues = VERBOSE_VALUES.map((allowedValue) => `'${allowedValue}'`).join(', ')
      throw new TypeError(
        `The "verbose" option must not be ${fdVerbose}. Allowed values are: ${allowedValues} or a function.`
      )
    }
  }
}
