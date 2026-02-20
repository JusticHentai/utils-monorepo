import { setMaxListeners } from 'node:events'
import { spawn, ChildProcess, type SpawnOptions } from 'node:child_process'
import { handleCommand } from '@/execa-arguments/command'
import { normalizeOptions } from '@/execa-arguments/options'
import { concatenateShell } from '@/execa-arguments/shell'
import { makeError, makeSuccessResult, makeEarlyError } from '@/execa-return/result'
import { handleResult } from '@/execa-return/reject'
import { stripNewline } from '@/execa-io/stripNewline'
import { subprocessKill } from '@/execa-terminate/kill'
import { cleanupOnExit } from '@/execa-terminate/cleanup'
import { createDeferred, type DeferredPromise } from '@/execa-utils/deferred'
import type {
  CommonOptions,
  Options,
  Result,
  ResultPromise,
  VerboseInfo,
  FileDescriptor,
} from '@/execa-types'

type CreateNestedFn = (
  mapArguments: MapArgumentsFn,
  boundOptions: CommonOptions,
  setBoundExeca?: SetBoundExecaFn
) => ExecaFn

type MapArgumentsFn = (args: {
  file: string
  commandArguments: string[]
  options: CommonOptions
}) => {
  file?: string
  commandArguments?: string[]
  options?: CommonOptions
  isSync?: boolean
}

type SetBoundExecaFn = (
  boundExeca: ExecaFn,
  createNested: CreateNestedFn,
  boundOptions: CommonOptions
) => void

type ExecaFn = ((...args: unknown[]) => unknown) & {
  sync?: unknown
  s?: unknown
}

/**
 * 所有异步方法的主要共享逻辑：execa()、$、execaNode()
 * @param rawFile - 原始文件路径
 * @param rawArguments - 原始参数
 * @param rawOptions - 原始选项
 * @param createNested - 创建嵌套方法的函数
 */
export const execaCoreAsync = (
  rawFile: string,
  rawArguments: string[],
  rawOptions: Options,
  createNested: CreateNestedFn
): ResultPromise => {
  const {
    file,
    commandArguments,
    command,
    escapedCommand,
    startTime,
    verboseInfo,
    options,
    fileDescriptors,
  } = handleAsyncArguments(rawFile, rawArguments, rawOptions)

  const { subprocess, promise } = spawnSubprocessAsync({
    file,
    commandArguments,
    options,
    startTime,
    verboseInfo,
    command,
    escapedCommand,
    fileDescriptors,
    createNested,
  })

  // 合并 Promise 和 subprocess
  return mergePromise(subprocess, promise)
}

/**
 * 处理异步参数
 * 计算传递给 child_process.spawn() 的参数
 */
const handleAsyncArguments = (
  rawFile: string,
  rawArguments: string[],
  rawOptions: Options
) => {
  const { command, escapedCommand, startTime, verboseInfo } = handleCommand(
    rawFile,
    rawArguments,
    rawOptions
  )

  const { file, commandArguments, options: normalizedOptions } = normalizeOptions(
    rawFile,
    rawArguments,
    rawOptions
  )

  const options = handleAsyncOptions(normalizedOptions)
  const fileDescriptors = handleStdioAsync(options)

  return {
    file,
    commandArguments,
    command,
    escapedCommand,
    startTime,
    verboseInfo,
    options,
    fileDescriptors,
  }
}

/**
 * 异步方法特有的选项规范化逻辑
 * 防止直接将 timeout 选项传递给 child_process.spawn()
 */
const handleAsyncOptions = (
  options: CommonOptions & { timeout?: number; signal?: unknown; [key: string]: unknown }
): CommonOptions & { timeoutDuration?: number; [key: string]: unknown } => {
  const { timeout, signal, ...rest } = options

  if (signal !== undefined) {
    throw new TypeError('The "signal" option has been renamed to "cancelSignal" instead.')
  }

  return { ...rest, timeoutDuration: timeout }
}

/**
 * 处理异步 stdio
 */
const handleStdioAsync = (options: CommonOptions): FileDescriptor[] => {
  // 简化的 stdio 处理
  return [
    { direction: 'input', value: options.stdin },
    { direction: 'output', value: options.stdout },
    { direction: 'output', value: options.stderr },
  ]
}

interface SpawnSubprocessAsyncOptions {
  file: string
  commandArguments: string[]
  options: CommonOptions & { [key: string]: unknown }
  startTime: bigint
  verboseInfo: VerboseInfo
  command: string
  escapedCommand: string
  fileDescriptors: FileDescriptor[]
  createNested: CreateNestedFn
}

/**
 * 生成异步子进程
 */
const spawnSubprocessAsync = ({
  file,
  commandArguments,
  options,
  startTime,
  verboseInfo,
  command,
  escapedCommand,
  fileDescriptors,
  createNested,
}: SpawnSubprocessAsyncOptions): {
  subprocess: ChildProcess
  promise: Promise<Result>
} => {
  let subprocess: ChildProcess

  try {
    const [spawnFile, spawnArgs, spawnOptions] = concatenateShell(
      file,
      commandArguments,
      options
    )
    subprocess = spawn(spawnFile, spawnArgs, spawnOptions as SpawnOptions)
  } catch (error) {
    return handleEarlyError({
      error: error as Error,
      command,
      escapedCommand,
      fileDescriptors,
      options,
      startTime,
      verboseInfo,
    })
  }

  const controller = new AbortController()
  setMaxListeners(Number.POSITIVE_INFINITY, controller.signal)

  cleanupOnExit(subprocess, options, controller)

  const context: { terminationReason?: string; isForcefullyTerminated?: boolean } = {}
  const onInternalError = createDeferred<void>()

  // 替换 kill 方法
  const originalKill = subprocess.kill.bind(subprocess)
  subprocess.kill = ((signalOrError?: string | number | Error, errorArgument?: Error) =>
    subprocessKill(
      {
        kill: originalKill as (signal?: string) => boolean,
        options: options as CommonOptions & { forceKillAfterDelay?: number | false; killSignal?: string },
        onInternalError,
        context,
        controller,
      },
      signalOrError,
      errorArgument
    )) as ChildProcess['kill']

  const promise = handlePromise({
    subprocess,
    options,
    startTime,
    verboseInfo,
    command,
    escapedCommand,
    context,
    onInternalError,
    controller,
  })

  return { subprocess, promise }
}

interface HandlePromiseOptions {
  subprocess: ChildProcess
  options: CommonOptions & { [key: string]: unknown }
  startTime: bigint
  verboseInfo: VerboseInfo
  command: string
  escapedCommand: string
  context: { terminationReason?: string; isForcefullyTerminated?: boolean }
  onInternalError: DeferredPromise<void>
  controller: AbortController
}

/**
 * 处理 Promise
 * 异步逻辑，与之前可同步运行的逻辑相反
 */
const handlePromise = async ({
  subprocess,
  options,
  startTime,
  verboseInfo,
  command,
  escapedCommand,
  context,
  onInternalError,
  controller,
}: HandlePromiseOptions): Promise<Result> => {
  try {
    const { exitCode, signal, stdout, stderr, error } = await waitForSubprocess(
      subprocess,
      onInternalError
    )

    controller.abort()
    onInternalError.resolve()

    const encoding = options.encoding ?? 'utf8'

    const stdio = [
      undefined,
      convertOutput(stripNewline(stdout ?? undefined, options, 1), encoding),
      convertOutput(stripNewline(stderr ?? undefined, options, 2), encoding),
    ]

    const all = options.all
      ? convertOutput(stripNewline(combineOutput(stdout, stderr), options, 'all'), encoding)
      : undefined

    const result = getAsyncResult({
      error,
      exitCode,
      signal,
      stdio,
      all,
      context,
      options,
      command,
      escapedCommand,
      startTime,
    })

    return handleResult(result, verboseInfo, options)
  } catch (error) {
    controller.abort()
    onInternalError.resolve()
    throw error
  }
}

/**
 * 等待子进程完成
 */
const waitForSubprocess = (
  subprocess: ChildProcess,
  onInternalError: DeferredPromise<void>
): Promise<{
  exitCode: number | null
  signal: NodeJS.Signals | null
  stdout: string | Buffer | null
  stderr: string | Buffer | null
  error?: Error
}> => {
  return new Promise((resolve, reject) => {
    let stdout: Buffer[] = []
    let stderr: Buffer[] = []

    subprocess.stdout?.on('data', (data: Buffer) => {
      stdout.push(data)
    })

    subprocess.stderr?.on('data', (data: Buffer) => {
      stderr.push(data)
    })

    subprocess.on('error', (error) => {
      resolve({
        exitCode: null,
        signal: null,
        stdout: Buffer.concat(stdout),
        stderr: Buffer.concat(stderr),
        error,
      })
    })

    subprocess.on('close', (exitCode, signal) => {
      resolve({
        exitCode,
        signal,
        stdout: Buffer.concat(stdout),
        stderr: Buffer.concat(stderr),
      })
    })

    // 监听内部错误
    onInternalError.catch((error) => {
      subprocess.kill()
      reject(error)
    })
  })
}

/**
 * 合并输出
 */
const combineOutput = (
  stdout: string | Buffer | null,
  stderr: string | Buffer | null
): string | Uint8Array | undefined => {
  if (stdout === null && stderr === null) {
    return undefined
  }

  const stdoutStr = stdout?.toString() ?? ''
  const stderrStr = stderr?.toString() ?? ''

  return `${stdoutStr}${stderrStr}`
}

/**
 * 根据编码选项转换输出
 */
const convertOutput = (
  value: string | Uint8Array | string[] | undefined,
  encoding: string
): string | Uint8Array | string[] | undefined => {
  if (value === undefined) {
    return value
  }

  // 如果已经是字符串或字符串数组，直接返回
  if (typeof value === 'string' || Array.isArray(value)) {
    return value
  }

  // 如果 encoding 是 buffer，保持 Uint8Array
  if (encoding === 'buffer') {
    return value
  }

  // 否则根据编码转换为字符串
  const bufferEncoding = encoding === 'utf8' ? 'utf-8' : encoding
  return Buffer.from(value).toString(bufferEncoding as BufferEncoding)
}

interface GetAsyncResultOptions {
  error?: Error
  exitCode: number | null
  signal: NodeJS.Signals | null
  stdio: (string | Uint8Array | string[] | undefined)[]
  all?: string | Uint8Array | string[]
  context: { terminationReason?: string; isForcefullyTerminated?: boolean }
  options: CommonOptions
  command: string
  escapedCommand: string
  startTime: bigint
}

/**
 * 获取异步结果
 */
const getAsyncResult = ({
  error,
  exitCode,
  signal,
  stdio,
  all,
  context,
  options,
  command,
  escapedCommand,
  startTime,
}: GetAsyncResultOptions): Result => {
  const hasError = error !== undefined || exitCode !== 0 || signal !== null

  if (!hasError) {
    return makeSuccessResult({
      command,
      escapedCommand,
      stdio,
      all,
      ipcOutput: [],
      options: options as CommonOptions & { cwd?: string },
      startTime,
    }) as Result
  }

  return makeError({
    error: error ?? new Error(`Command failed with ${signal ?? `exit code ${exitCode}`}`),
    command,
    escapedCommand,
    timedOut: context.terminationReason === 'timeout',
    isCanceled:
      context.terminationReason === 'cancel' ||
      context.terminationReason === 'gracefulCancel',
    isGracefullyCanceled: context.terminationReason === 'gracefulCancel',
    isMaxBuffer: false,
    isForcefullyTerminated: context.isForcefullyTerminated ?? false,
    exitCode: exitCode ?? undefined,
    signal: signal ?? undefined,
    stdio,
    all,
    ipcOutput: [],
    options,
    startTime,
    isSync: false,
  }) as unknown as Result
}

/**
 * 处理早期错误
 * 子进程生成失败时的处理
 */
const handleEarlyError = ({
  error,
  command,
  escapedCommand,
  fileDescriptors,
  options,
  startTime,
  verboseInfo,
}: {
  error: Error
  command: string
  escapedCommand: string
  fileDescriptors: FileDescriptor[]
  options: CommonOptions
  startTime: bigint
  verboseInfo: VerboseInfo
}): {
  subprocess: ChildProcess
  promise: Promise<Result>
} => {
  const subprocess = new ChildProcess()

  const earlyError = makeEarlyError({
    error,
    command,
    escapedCommand,
    fileDescriptors,
    options,
    startTime,
    isSync: false,
  })

  const promise = handleResult(earlyError as unknown as Result, verboseInfo, options)

  return { subprocess, promise: Promise.resolve(promise) }
}

/**
 * 合并 Promise 和 subprocess
 */
const mergePromise = (subprocess: ChildProcess, promise: Promise<Result>): ResultPromise => {
  const mergedPromise = promise as ResultPromise

  // 复制 subprocess 的属性到 promise
  Object.assign(mergedPromise, {
    pid: subprocess.pid,
    stdin: subprocess.stdin,
    stdout: subprocess.stdout,
    stderr: subprocess.stderr,
    stdio: subprocess.stdio,
    kill: subprocess.kill.bind(subprocess),
    on: subprocess.on.bind(subprocess),
    once: subprocess.once.bind(subprocess),
    emit: subprocess.emit.bind(subprocess),
    removeListener: subprocess.removeListener.bind(subprocess),
    removeAllListeners: subprocess.removeAllListeners.bind(subprocess),
  })

  return mergedPromise
}
