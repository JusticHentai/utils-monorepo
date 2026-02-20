import { inspect } from 'node:util'
import stripFinalNewline from 'strip-final-newline'
import { isUint8Array, uint8ArrayToString } from '@/execa-utils/uintArray'
import { fixCwdError } from '@/execa-arguments/cwd'
import { escapeLines } from '@/execa-arguments/escape'
import { getMaxBufferMessage } from '@/execa-io/maxBuffer'
import { getSignalDescription } from '@/execa-terminate/signal'
import { DiscardedError, isExecaError, ExecaError } from './finalError'

interface CreateMessagesOptions {
  stdio: (string | Uint8Array | string[] | undefined)[]
  all?: string | Uint8Array | string[]
  ipcOutput: unknown[]
  originalError: unknown
  signal?: string
  signalDescription?: string
  exitCode?: number
  escapedCommand: string
  timedOut: boolean
  isCanceled: boolean
  isGracefullyCanceled: boolean
  isMaxBuffer: boolean
  isForcefullyTerminated: boolean
  forceKillAfterDelay: number | false
  killSignal: string
  maxBuffer: number[]
  timeout?: number
  cwd: string
}

/**
 * 计算 error.message、error.shortMessage 和 error.originalMessage
 */
export const createMessages = ({
  stdio,
  all,
  ipcOutput,
  originalError,
  signal,
  signalDescription,
  exitCode,
  escapedCommand,
  timedOut,
  isCanceled,
  isGracefullyCanceled,
  isMaxBuffer,
  isForcefullyTerminated,
  forceKillAfterDelay,
  killSignal,
  maxBuffer,
  timeout,
  cwd,
}: CreateMessagesOptions): {
  originalMessage: string | undefined
  shortMessage: string
  message: string
} => {
  const errorCode = (originalError as { code?: string })?.code
  const prefix = getErrorPrefix({
    originalError,
    timedOut,
    timeout,
    isMaxBuffer,
    maxBuffer,
    errorCode,
    signal,
    signalDescription,
    exitCode,
    isCanceled,
    isGracefullyCanceled,
    isForcefullyTerminated,
    forceKillAfterDelay,
    killSignal,
  })

  const originalMessage = getOriginalMessage(originalError, cwd)
  const suffix = originalMessage === undefined ? '' : `\n${originalMessage}`
  const shortMessage = `${prefix}: ${escapedCommand}${suffix}`

  const messageStdio = all === undefined ? [stdio[2], stdio[1]] : [all]
  const message = [
    shortMessage,
    ...messageStdio,
    ...stdio.slice(3),
    ipcOutput.map((ipcMessage) => serializeIpcMessage(ipcMessage)).join('\n'),
  ]
    .map((messagePart) =>
      escapeLines(stripFinalNewline(serializeMessagePart(messagePart)))
    )
    .filter(Boolean)
    .join('\n\n')

  return { originalMessage, shortMessage, message }
}

interface GetErrorPrefixOptions {
  originalError: unknown
  timedOut: boolean
  timeout?: number
  isMaxBuffer: boolean
  maxBuffer: number[]
  errorCode?: string
  signal?: string
  signalDescription?: string
  exitCode?: number
  isCanceled: boolean
  isGracefullyCanceled: boolean
  isForcefullyTerminated: boolean
  forceKillAfterDelay: number | false
  killSignal: string
}

/**
 * 获取错误前缀
 */
const getErrorPrefix = ({
  originalError,
  timedOut,
  timeout,
  isMaxBuffer,
  maxBuffer,
  errorCode,
  signal,
  signalDescription,
  exitCode,
  isCanceled,
  isGracefullyCanceled,
  isForcefullyTerminated,
  forceKillAfterDelay,
  killSignal,
}: GetErrorPrefixOptions): string => {
  const forcefulSuffix = getForcefulSuffix(isForcefullyTerminated, forceKillAfterDelay)

  if (timedOut) {
    return `Command timed out after ${timeout} milliseconds${forcefulSuffix}`
  }

  if (isGracefullyCanceled) {
    if (signal === undefined) {
      return `Command was gracefully canceled with exit code ${exitCode}`
    }

    return isForcefullyTerminated
      ? `Command was gracefully canceled${forcefulSuffix}`
      : `Command was gracefully canceled with ${signal} (${signalDescription})`
  }

  if (isCanceled) {
    return `Command was canceled${forcefulSuffix}`
  }

  if (isMaxBuffer) {
    return `${getMaxBufferMessage(originalError as Error, maxBuffer)}${forcefulSuffix}`
  }

  if (errorCode !== undefined) {
    return `Command failed with ${errorCode}${forcefulSuffix}`
  }

  if (isForcefullyTerminated) {
    return `Command was killed with ${killSignal} (${getSignalDescription(killSignal)})${forcefulSuffix}`
  }

  if (signal !== undefined) {
    return `Command was killed with ${signal} (${signalDescription})`
  }

  if (exitCode !== undefined) {
    return `Command failed with exit code ${exitCode}`
  }

  return 'Command failed'
}

/**
 * 获取强制终止后缀
 */
const getForcefulSuffix = (
  isForcefullyTerminated: boolean,
  forceKillAfterDelay: number | false
): string =>
  isForcefullyTerminated
    ? ` and was forcefully terminated after ${forceKillAfterDelay} milliseconds`
    : ''

/**
 * 获取原始错误消息
 */
const getOriginalMessage = (originalError: unknown, cwd: string): string | undefined => {
  if (originalError instanceof DiscardedError) {
    return undefined
  }

  const originalMessage = isExecaError(originalError)
    ? (originalError as ExecaError).originalMessage
    : String((originalError as Error)?.message ?? originalError)

  const escapedOriginalMessage = escapeLines(fixCwdError(originalMessage ?? '', cwd))
  return escapedOriginalMessage === '' ? undefined : escapedOriginalMessage
}

/**
 * 序列化 IPC 消息
 */
const serializeIpcMessage = (ipcMessage: unknown): string =>
  typeof ipcMessage === 'string' ? ipcMessage : inspect(ipcMessage)

/**
 * 序列化消息部分
 */
const serializeMessagePart = (
  messagePart: string | Uint8Array | string[] | undefined
): string => {
  if (Array.isArray(messagePart)) {
    return messagePart
      .map((messageItem) => stripFinalNewline(serializeMessageItem(messageItem)))
      .filter(Boolean)
      .join('\n')
  }
  return serializeMessageItem(messagePart)
}

/**
 * 序列化消息项
 */
const serializeMessageItem = (messageItem: string | Uint8Array | undefined): string => {
  if (typeof messageItem === 'string') {
    return messageItem
  }

  if (isUint8Array(messageItem)) {
    return uint8ArrayToString(messageItem)
  }

  return ''
}
