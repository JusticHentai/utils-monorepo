import process from 'node:process'
import figures from 'figures'
import { gray, bold, redBright } from 'yoctocolors'
import { isVerboseFunction, getVerboseValue } from './values'
import type { VerboseInfo, VerboseObject, CommonResult } from '@/execa-types'

/** 日志类型配置 */
const LOG_TYPES = {
  command: { icon: '$', color: bold },
  output: { icon: ' ', color: (text: string) => text },
  ipc: { icon: '*', color: (text: string) => text },
  error: { icon: figures.cross, color: redBright },
  duration: { icon: figures.tick, color: gray },
} as const

type LogType = keyof typeof LOG_TYPES

interface VerboseLogOptions {
  type: LogType
  verboseMessage: string
  verboseInfo: VerboseInfo
  result?: CommonResult
  fdNumber?: number
}

/**
 * 打印 verbose 日志
 */
export const verboseLog = ({
  type,
  verboseMessage,
  verboseInfo,
  result,
  fdNumber = 1,
}: VerboseLogOptions): void => {
  const { verbose, commandId } = verboseInfo

  const fdVerbose = getVerboseValue(verbose, fdNumber)

  // none 级别不打印
  if (fdVerbose === 'none') {
    return
  }

  // 自定义函数
  if (isVerboseFunction(fdVerbose)) {
    const verboseObject: VerboseObject = {
      type,
      message: verboseMessage,
      commandId: commandId ?? 0n,
      timestamp: new Date(),
      failed: result?.failed,
      durationMs: result?.durationMs,
      fdNumber,
    }

    const customResult = fdVerbose(verboseMessage, verboseObject)
    if (typeof customResult === 'string') {
      printToStderr(customResult)
    }
    return
  }

  // short 级别只打印 command 和 duration/error
  if (fdVerbose === 'short' && type !== 'command' && type !== 'duration' && type !== 'error') {
    return
  }

  const logConfig = LOG_TYPES[type]
  const timestamp = getTimestamp()
  const prefix = gray(`[${timestamp}]`)
  const commandIdStr = commandId !== undefined ? gray(`[${commandId}]`) : ''
  const icon = logConfig.color(logConfig.icon)
  const message = logConfig.color(verboseMessage)

  const line = `${prefix}${commandIdStr} ${icon} ${message}`
  printToStderr(line)
}

/**
 * 获取时间戳
 */
const getTimestamp = (): string => {
  const now = new Date()
  return now.toTimeString().split(' ')[0]
}

/**
 * 打印到 stderr
 */
const printToStderr = (message: string): void => {
  process.stderr.write(`${message}\n`)
}
