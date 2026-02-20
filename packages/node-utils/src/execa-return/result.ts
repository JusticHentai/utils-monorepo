import { getSignalDescription } from '@/execa-terminate/signal'
import { getDurationMs } from './duration'
import { getFinalError, ExecaError, ExecaSyncError } from './finalError'
import { createMessages } from './message'
import type { CommonOptions, CommonResult, FileDescriptor } from '@/execa-types'

/**
 * 过滤掉 undefined 属性
 */
const omitUndefinedProperties = <T extends object>(result: T): T =>
  Object.fromEntries(
    Object.entries(result).filter(([, value]) => value !== undefined)
  ) as T

interface MakeSuccessResultOptions {
  command: string
  escapedCommand: string
  stdio: (string | Uint8Array | string[] | undefined)[]
  all?: string | Uint8Array | string[]
  ipcOutput: unknown[]
  options: CommonOptions & { cwd?: string }
  startTime: bigint
}

/**
 * 子进程成功时返回的对象
 */
export const makeSuccessResult = ({
  command,
  escapedCommand,
  stdio,
  all,
  ipcOutput,
  options: { cwd },
  startTime,
}: MakeSuccessResultOptions): CommonResult =>
  omitUndefinedProperties({
    command,
    escapedCommand,
    cwd: cwd ?? '',
    durationMs: getDurationMs(startTime),
    failed: false,
    timedOut: false,
    isCanceled: false,
    isGracefullyCanceled: false,
    isTerminated: false,
    isMaxBuffer: false,
    isForcefullyTerminated: false,
    exitCode: 0,
    stdout: stdio[1],
    stderr: stdio[2],
    all,
    stdio,
    ipcOutput,
    pipedFrom: [],
  })

interface MakeEarlyErrorOptions {
  error: Error
  command: string
  escapedCommand: string
  fileDescriptors: FileDescriptor[]
  options: CommonOptions
  startTime: bigint
  isSync: boolean
}

/**
 * 子进程在生成前失败时返回的对象
 */
export const makeEarlyError = ({
  error,
  command,
  escapedCommand,
  fileDescriptors,
  options,
  startTime,
  isSync,
}: MakeEarlyErrorOptions): ExecaError | ExecaSyncError =>
  makeError({
    error,
    command,
    escapedCommand,
    startTime,
    timedOut: false,
    isCanceled: false,
    isGracefullyCanceled: false,
    isMaxBuffer: false,
    isForcefullyTerminated: false,
    stdio: Array.from({ length: fileDescriptors.length }),
    ipcOutput: [],
    options,
    isSync,
  })

interface MakeErrorOptions {
  error: Error
  command: string
  escapedCommand: string
  startTime: bigint
  timedOut: boolean
  isCanceled: boolean
  isGracefullyCanceled: boolean
  isMaxBuffer: boolean
  isForcefullyTerminated: boolean
  exitCode?: number
  signal?: string
  stdio: (string | Uint8Array | string[] | undefined)[]
  all?: string | Uint8Array | string[]
  ipcOutput: unknown[]
  options: CommonOptions
  isSync: boolean
}

/**
 * 子进程失败时返回的对象
 */
export const makeError = ({
  error: originalError,
  command,
  escapedCommand,
  startTime,
  timedOut,
  isCanceled,
  isGracefullyCanceled,
  isMaxBuffer,
  isForcefullyTerminated,
  exitCode: rawExitCode,
  signal: rawSignal,
  stdio,
  all,
  ipcOutput,
  options,
  isSync,
}: MakeErrorOptions): ExecaError | ExecaSyncError => {
  const {
    timeoutDuration,
    timeout = timeoutDuration,
    forceKillAfterDelay,
    killSignal,
    cwd,
    maxBuffer,
  } = options as CommonOptions & {
    timeoutDuration?: number
    timeout?: number
    forceKillAfterDelay?: number | boolean
    cwd?: string
    maxBuffer?: number | number[]
  }

  const { exitCode, signal, signalDescription } = normalizeExitPayload(rawExitCode, rawSignal)

  const normalizedMaxBuffer = Array.isArray(maxBuffer)
    ? maxBuffer
    : [maxBuffer ?? 100_000_000]

  const normalizedForceKillAfterDelay =
    typeof forceKillAfterDelay === 'boolean'
      ? forceKillAfterDelay
        ? 5000
        : false
      : forceKillAfterDelay ?? 5000

  const normalizedKillSignal = typeof killSignal === 'string' 
    ? killSignal 
    : typeof killSignal === 'number' 
      ? String(killSignal)
      : 'SIGTERM'

  const { originalMessage, shortMessage, message } = createMessages({
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
    forceKillAfterDelay: normalizedForceKillAfterDelay,
    killSignal: normalizedKillSignal,
    maxBuffer: normalizedMaxBuffer,
    timeout,
    cwd: cwd ?? '',
  })

  const error = getFinalError(originalError, message, isSync)

  Object.assign(
    error,
    getErrorProperties({
      error,
      command,
      escapedCommand,
      startTime,
      timedOut,
      isCanceled,
      isGracefullyCanceled,
      isMaxBuffer,
      isForcefullyTerminated,
      exitCode,
      signal,
      signalDescription,
      stdio,
      all,
      ipcOutput,
      cwd: cwd ?? '',
      originalMessage,
      shortMessage,
    })
  )

  return error
}

interface GetErrorPropertiesOptions {
  error: ExecaError | ExecaSyncError
  command: string
  escapedCommand: string
  startTime: bigint
  timedOut: boolean
  isCanceled: boolean
  isGracefullyCanceled: boolean
  isMaxBuffer: boolean
  isForcefullyTerminated: boolean
  exitCode?: number
  signal?: string
  signalDescription?: string
  stdio: (string | Uint8Array | string[] | undefined)[]
  all?: string | Uint8Array | string[]
  ipcOutput: unknown[]
  cwd: string
  originalMessage?: string
  shortMessage: string
}

/**
 * 获取错误属性
 */
const getErrorProperties = ({
  error,
  command,
  escapedCommand,
  startTime,
  timedOut,
  isCanceled,
  isGracefullyCanceled,
  isMaxBuffer,
  isForcefullyTerminated,
  exitCode,
  signal,
  signalDescription,
  stdio,
  all,
  ipcOutput,
  cwd,
  originalMessage,
  shortMessage,
}: GetErrorPropertiesOptions) =>
  omitUndefinedProperties({
    shortMessage,
    originalMessage,
    command,
    escapedCommand,
    cwd,
    durationMs: getDurationMs(startTime),
    failed: true,
    timedOut,
    isCanceled,
    isGracefullyCanceled,
    isTerminated: signal !== undefined,
    isMaxBuffer,
    isForcefullyTerminated,
    exitCode,
    signal,
    signalDescription,
    code: (error.cause as { code?: string })?.code,
    stdout: stdio[1],
    stderr: stdio[2],
    all,
    stdio,
    ipcOutput,
    pipedFrom: [],
  })

/**
 * 规范化退出信息
 * subprocess.on('exit') 事件上的 signal 和 exitCode 可以是 null
 * 我们将它们规范化为 undefined
 */
const normalizeExitPayload = (
  rawExitCode?: number,
  rawSignal?: string
): {
  exitCode?: number
  signal?: string
  signalDescription?: string
} => {
  const exitCode = rawExitCode === null ? undefined : rawExitCode
  const signal = rawSignal === null ? undefined : rawSignal
  const signalDescription =
    signal === undefined ? undefined : getSignalDescription(signal)
  return { exitCode, signal, signalDescription }
}
