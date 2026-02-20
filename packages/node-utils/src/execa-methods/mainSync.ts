import { spawnSync, type SpawnSyncOptions } from 'node:child_process'
import { handleCommand } from '@/execa-arguments/command'
import { normalizeOptions } from '@/execa-arguments/options'
import { concatenateShell } from '@/execa-arguments/shell'
import { makeError, makeEarlyError, makeSuccessResult } from '@/execa-return/result'
import { handleResult } from '@/execa-return/reject'
import { stripNewline } from '@/execa-io/stripNewline'
import { getMaxBufferSync } from '@/execa-io/maxBuffer'
import type {
  CommonOptions,
  SyncOptions,
  SyncResult,
  VerboseInfo,
  FileDescriptor,
} from '@/execa-types'

/**
 * 所有同步方法的主要共享逻辑：execaSync()、$.sync()
 * @param rawFile - 原始文件路径
 * @param rawArguments - 原始参数
 * @param rawOptions - 原始选项
 */
export const execaCoreSync = (
  rawFile: string,
  rawArguments: string[],
  rawOptions: SyncOptions
): SyncResult => {
  const {
    file,
    commandArguments,
    command,
    escapedCommand,
    startTime,
    verboseInfo,
    options,
    fileDescriptors,
  } = handleSyncArguments(rawFile, rawArguments, rawOptions)

  const result = spawnSubprocessSync({
    file,
    commandArguments,
    options,
    command,
    escapedCommand,
    verboseInfo,
    fileDescriptors,
    startTime,
  })

  return handleResult(result, verboseInfo, options)
}

/**
 * 处理同步参数
 * 计算传递给 child_process.spawnSync() 的参数
 */
const handleSyncArguments = (
  rawFile: string,
  rawArguments: string[],
  rawOptions: SyncOptions
) => {
  const { command, escapedCommand, startTime, verboseInfo } = handleCommand(
    rawFile,
    rawArguments,
    rawOptions as CommonOptions
  )

  const syncOptions = normalizeSyncOptions(rawOptions)
  const { file, commandArguments, options } = normalizeOptions(
    rawFile,
    rawArguments,
    syncOptions as CommonOptions
  )

  validateSyncOptions(options)

  const fileDescriptors = handleStdioSync(options)

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
 * 同步方法特有的选项规范化逻辑
 */
const normalizeSyncOptions = (options: SyncOptions): SyncOptions => {
  if ((options as CommonOptions).node && !(options as CommonOptions).ipc) {
    return { ...options, ipc: false } as SyncOptions
  }
  return options
}

/**
 * 同步方法特有的选项验证逻辑
 */
const validateSyncOptions = (options: CommonOptions & { [key: string]: unknown }): void => {
  const { ipc, ipcInput, detached, cancelSignal } = options

  if (ipcInput) {
    throwInvalidSyncOption('ipcInput')
  }

  if (ipc) {
    throwInvalidSyncOption('ipc: true')
  }

  if (detached) {
    throwInvalidSyncOption('detached: true')
  }

  if (cancelSignal) {
    throwInvalidSyncOption('cancelSignal')
  }
}

/**
 * 抛出无效同步选项错误
 */
const throwInvalidSyncOption = (value: string): never => {
  throw new TypeError(`The "${value}" option cannot be used with synchronous methods.`)
}

/**
 * 处理同步 stdio
 */
const handleStdioSync = (options: CommonOptions): FileDescriptor[] => {
  // 简化的 stdio 处理
  return [
    { direction: 'input', value: options.stdin },
    { direction: 'output', value: options.stdout },
    { direction: 'output', value: options.stderr },
  ]
}

interface SpawnSubprocessSyncOptions {
  file: string
  commandArguments: string[]
  options: CommonOptions & { [key: string]: unknown }
  command: string
  escapedCommand: string
  verboseInfo: VerboseInfo
  fileDescriptors: FileDescriptor[]
  startTime: bigint
}

/**
 * 生成同步子进程
 */
const spawnSubprocessSync = ({
  file,
  commandArguments,
  options,
  command,
  escapedCommand,
  verboseInfo,
  fileDescriptors,
  startTime,
}: SpawnSubprocessSyncOptions): SyncResult => {
  const syncResult = runSubprocessSync({
    file,
    commandArguments,
    options,
    command,
    escapedCommand,
    fileDescriptors,
    startTime,
  })

  if ('failed' in syncResult && syncResult.failed) {
    return syncResult as unknown as SyncResult
  }

  const result = syncResult as ReturnType<typeof spawnSync>
  const { status: exitCode, signal, error: resultError } = result

  const isMaxBuffer = false // 简化处理
  const timedOut = false // 简化处理

  const output = [
    undefined,
    result.stdout,
    result.stderr,
  ] as (string | Uint8Array | undefined)[]

  const encoding = options.encoding ?? 'utf8'

  const stdio = output.map((stdioOutput, fdNumber) =>
    convertOutput(
      stripNewline(
        stdioOutput !== null ? stdioOutput : undefined,
        options,
        fdNumber
      ),
      encoding
    )
  )

  const all = options.all ? convertOutput(getAllSync(output, options), encoding) : undefined

  return getSyncResult({
    error: resultError,
    exitCode: exitCode ?? undefined,
    signal: signal ?? undefined,
    timedOut,
    isMaxBuffer,
    stdio,
    all,
    options,
    command,
    escapedCommand,
    startTime,
  })
}

/**
 * 运行同步子进程
 */
const runSubprocessSync = ({
  file,
  commandArguments,
  options,
  command,
  escapedCommand,
  fileDescriptors,
  startTime,
}: Omit<SpawnSubprocessSyncOptions, 'verboseInfo'>) => {
  try {
    const normalizedOptions = normalizeSpawnSyncOptions(options)
    const [spawnFile, spawnArgs, spawnOptions] = concatenateShell(file, commandArguments, normalizedOptions)
    return spawnSync(spawnFile, spawnArgs, spawnOptions as SpawnSyncOptions)
  } catch (error) {
    return makeEarlyError({
      error: error as Error,
      command,
      escapedCommand,
      fileDescriptors,
      options,
      startTime,
      isSync: true,
    })
  }
}

/**
 * 规范化 spawnSync 选项
 * encoding 选项由 Execa 处理，而不是 child_process.spawnSync()
 */
const normalizeSpawnSyncOptions = (
  options: CommonOptions & { [key: string]: unknown }
): CommonOptions => {
  const { encoding, maxBuffer, ...rest } = options
  return {
    ...rest,
    encoding: 'buffer',
    maxBuffer: getMaxBufferSync(maxBuffer as number | number[] | undefined),
  } as CommonOptions
}

/**
 * 获取 all 输出（同步）
 */
const getAllSync = (
  output: (string | Uint8Array | undefined)[],
  options: CommonOptions
): string | Uint8Array | undefined => {
  if (!options.all) {
    return undefined
  }

  const stdout = output[1]
  const stderr = output[2]

  if (stdout === undefined && stderr === undefined) {
    return undefined
  }

  if (stdout === undefined) {
    return stderr
  }

  if (stderr === undefined) {
    return stdout
  }

  // 简单合并
  if (typeof stdout === 'string' && typeof stderr === 'string') {
    return `${stdout}${stderr}`
  }

  return stdout
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

interface GetSyncResultOptions {
  error?: Error
  exitCode?: number
  signal?: string
  timedOut: boolean
  isMaxBuffer: boolean
  stdio: (string | Uint8Array | string[] | undefined)[]
  all?: string | Uint8Array | string[]
  options: CommonOptions
  command: string
  escapedCommand: string
  startTime: bigint
}

/**
 * 获取同步结果
 */
const getSyncResult = ({
  error,
  exitCode,
  signal,
  timedOut,
  isMaxBuffer,
  stdio,
  all,
  options,
  command,
  escapedCommand,
  startTime,
}: GetSyncResultOptions): SyncResult => {
  if (error === undefined && exitCode === 0) {
    return makeSuccessResult({
      command,
      escapedCommand,
      stdio,
      all,
      ipcOutput: [],
      options: options as CommonOptions & { cwd?: string },
      startTime,
    }) as SyncResult
  }

  return makeError({
    error: error ?? new Error(`Command failed with exit code ${exitCode}`),
    command,
    escapedCommand,
    startTime,
    timedOut,
    isCanceled: false,
    isGracefullyCanceled: false,
    isMaxBuffer,
    isForcefullyTerminated: false,
    exitCode,
    signal,
    stdio,
    all,
    ipcOutput: [],
    options,
    isSync: true,
  }) as unknown as SyncResult
}
