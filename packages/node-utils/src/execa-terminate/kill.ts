import { setTimeout } from 'node:timers/promises'
import { isErrorInstance } from '@/execa-return/finalError'
import { normalizeSignalArgument } from './signal'
import type { DeferredPromise } from '@/execa-utils/deferred'
import type { CommonOptions } from '@/execa-types'

/** 默认强制终止超时时间 */
const DEFAULT_FORCE_KILL_TIMEOUT = 1000 * 5

/**
 * 规范化 forceKillAfterDelay 选项
 * @param forceKillAfterDelay - 强制终止延迟
 */
export const normalizeForceKillAfterDelay = (
  forceKillAfterDelay?: number | boolean
): number | false => {
  if (forceKillAfterDelay === false) {
    return forceKillAfterDelay
  }

  if (forceKillAfterDelay === true || forceKillAfterDelay === undefined) {
    return DEFAULT_FORCE_KILL_TIMEOUT
  }

  if (!Number.isFinite(forceKillAfterDelay) || forceKillAfterDelay < 0) {
    throw new TypeError(
      `Expected the \`forceKillAfterDelay\` option to be a non-negative integer, got \`${forceKillAfterDelay}\` (${typeof forceKillAfterDelay})`
    )
  }

  return forceKillAfterDelay
}

interface SubprocessKillContext {
  kill: (signal?: string) => boolean
  options: CommonOptions & {
    forceKillAfterDelay?: number | false
    killSignal?: string
  }
  onInternalError: DeferredPromise<void>
  context: { terminationReason?: string; isForcefullyTerminated?: boolean }
  controller: AbortController
}

/**
 * 猴子补丁 subprocess.kill() 以添加 forceKillAfterDelay 行为和 .kill(error)
 */
export const subprocessKill = (
  { kill, options: { forceKillAfterDelay, killSignal }, onInternalError, context, controller }: SubprocessKillContext,
  signalOrError?: string | number | Error,
  errorArgument?: Error
): boolean => {
  const { signal, error } = parseKillArguments(signalOrError, errorArgument, killSignal ?? 'SIGTERM')
  emitKillError(error, onInternalError)
  const killResult = kill(signal)
  setKillTimeout({
    kill,
    signal,
    forceKillAfterDelay: forceKillAfterDelay ?? DEFAULT_FORCE_KILL_TIMEOUT,
    killSignal: killSignal ?? 'SIGTERM',
    killResult,
    context,
    controller,
  })
  return killResult
}

/**
 * 解析 kill 参数
 */
const parseKillArguments = (
  signalOrError: string | number | Error | undefined,
  errorArgument: Error | undefined,
  killSignal: string
): { signal: string; error?: Error } => {
  const [signal = killSignal, error] = isErrorInstance(signalOrError)
    ? [undefined, signalOrError as Error]
    : [signalOrError as string | number | undefined, errorArgument]

  if (typeof signal !== 'string' && !Number.isInteger(signal)) {
    throw new TypeError(
      `The first argument must be an error instance or a signal name string/integer: ${String(signal)}`
    )
  }

  if (error !== undefined && !isErrorInstance(error)) {
    throw new TypeError(
      `The second argument is optional. If specified, it must be an error instance: ${error}`
    )
  }

  return { signal: normalizeSignalArgument(signal as string | number), error }
}

/**
 * 调用 subprocess.kill(error) 时立即失败
 * 不等待实际的信号终止
 */
const emitKillError = (error: Error | undefined, onInternalError: DeferredPromise<void>): void => {
  if (error !== undefined) {
    onInternalError.reject(error)
  }
}

interface SetKillTimeoutOptions {
  kill: (signal?: string) => boolean
  signal: string
  forceKillAfterDelay: number | false
  killSignal: string
  killResult: boolean
  context: { terminationReason?: string; isForcefullyTerminated?: boolean }
  controller: AbortController
}

/**
 * 设置终止超时
 */
const setKillTimeout = async ({
  kill,
  signal,
  forceKillAfterDelay,
  killSignal,
  killResult,
  context,
  controller,
}: SetKillTimeoutOptions): Promise<void> => {
  if (signal === killSignal && killResult) {
    await killOnTimeout({
      kill,
      forceKillAfterDelay,
      context,
      controllerSignal: controller.signal,
    })
  }
}

interface KillOnTimeoutOptions {
  kill: (signal?: string) => boolean
  forceKillAfterDelay: number | false
  context: { terminationReason?: string; isForcefullyTerminated?: boolean }
  controllerSignal: AbortSignal
}

/**
 * 超时后强制终止子进程
 */
export const killOnTimeout = async ({
  kill,
  forceKillAfterDelay,
  context,
  controllerSignal,
}: KillOnTimeoutOptions): Promise<void> => {
  if (forceKillAfterDelay === false) {
    return
  }

  try {
    await setTimeout(forceKillAfterDelay, undefined, { signal: controllerSignal })
    if (kill('SIGKILL')) {
      context.isForcefullyTerminated ??= true
    }
  } catch {
    // 忽略中止错误
  }
}
