import { statSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { safeNormalizeFileUrl } from './fileUrl'

/**
 * 规范化 cwd 选项
 * @param cwd - 工作目录
 */
export const normalizeCwd = (cwd?: string | URL): string => {
  const cwdValue = cwd ?? getDefaultCwd()
  const cwdString = safeNormalizeFileUrl(cwdValue, 'The "cwd" option')
  return path.resolve(cwdString)
}

/**
 * 获取默认工作目录
 */
const getDefaultCwd = (): string => {
  try {
    return process.cwd()
  } catch (error) {
    const err = error as Error
    err.message = `The current directory does not exist.\n${err.message}`
    throw error
  }
}

/**
 * 当 cwd 选项值无效时，提供更好的错误消息
 * @param originalMessage - 原始错误消息
 * @param cwd - 工作目录
 */
export const fixCwdError = (originalMessage: string, cwd: string): string => {
  if (cwd === getDefaultCwd()) {
    return originalMessage
  }

  let cwdStat
  try {
    cwdStat = statSync(cwd)
  } catch (error) {
    const err = error as Error
    return `The "cwd" option is invalid: ${cwd}.\n${err.message}\n${originalMessage}`
  }

  if (!cwdStat.isDirectory()) {
    return `The "cwd" option is not a directory: ${cwd}.\n${originalMessage}`
  }

  return originalMessage
}
