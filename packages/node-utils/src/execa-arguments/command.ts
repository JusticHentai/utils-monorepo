import { getStartTime } from '@/execa-return/duration'
import { joinCommand } from './escape'
import { normalizeFdSpecificOption } from './specific'
import { getVerboseInfo } from '@/execa-verbose/info'
import { logCommand } from '@/execa-verbose/start'
import type { CommonOptions, VerboseInfo, VerboseOption } from '@/execa-types'

/**
 * 处理命令信息
 * 计算 result.command、result.escapedCommand 和 verbose 相关信息
 * @param filePath - 文件路径
 * @param rawArguments - 参数数组
 * @param rawOptions - 选项
 */
export const handleCommand = (
  filePath: string,
  rawArguments: readonly string[],
  rawOptions: CommonOptions
): {
  command: string
  escapedCommand: string
  startTime: bigint
  verboseInfo: VerboseInfo
} => {
  const startTime = getStartTime()
  const { command, escapedCommand } = joinCommand(filePath, rawArguments)
  const verbose = normalizeFdSpecificOption<VerboseOption>(rawOptions, 'verbose')
  const verboseInfo = getVerboseInfo(verbose, escapedCommand, { ...rawOptions })
  logCommand(escapedCommand, verboseInfo)

  return {
    command,
    escapedCommand,
    startTime,
    verboseInfo,
  }
}
