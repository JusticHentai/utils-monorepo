import path from 'node:path'
import process from 'node:process'
import crossSpawn from 'cross-spawn'
import { npmRunPathEnv } from 'npm-run-path'
import { normalizeCwd } from './cwd'
import { normalizeFileUrl } from './fileUrl'
import { normalizeFdSpecificOptions } from './specific'
import { normalizeForceKillAfterDelay } from '@/execa-terminate/kill'
import { normalizeKillSignal } from '@/execa-terminate/signal'
import { validateCancelSignal } from '@/execa-terminate/cancel'
import { validateGracefulCancel } from '@/execa-terminate/graceful'
import { validateTimeout } from '@/execa-terminate/timeout'
import { handleNodeOption } from '@/execa-methods/node'
import { validateIpcInputOption } from '@/execa-ipc/ipcInput'
import { validateEncoding, BINARY_ENCODINGS } from './encodingOption'
import type { CommonOptions } from '@/execa-types'

// cross-spawn 类型声明
const crossSpawnParse = (crossSpawn as unknown as {
  _parse: (
    file: string,
    args: string[],
    options: object
  ) => { command: string; args: string[]; options: object }
})._parse

/**
 * 规范化选项对象，有时也规范化文件路径和参数
 * 应用默认值，验证允许的选项，规范化它们
 * @param filePath - 文件路径
 * @param rawArguments - 参数数组
 * @param rawOptions - 原始选项
 */
export const normalizeOptions = (
  filePath: string,
  rawArguments: string[],
  rawOptions: CommonOptions
): {
  file: string
  commandArguments: string[]
  options: CommonOptions & { [key: string]: unknown }
} => {
  // 通过只复制自有属性到空原型对象来防止原型污染
  const sanitizedOptions: CommonOptions & { [key: string]: unknown } = {
    __proto__: null,
    ...rawOptions,
  }
  sanitizedOptions.cwd = normalizeCwd(sanitizedOptions.cwd as string | URL | undefined)

  const [processedFile, processedArguments, processedOptions] = handleNodeOption(
    filePath,
    rawArguments,
    sanitizedOptions
  )

  const parsed = crossSpawnParse(processedFile, processedArguments, processedOptions as object)
  const { command: file, args: commandArguments, options: initialOptions } = parsed

  const fdOptions = normalizeFdSpecificOptions(initialOptions as CommonOptions & { [key: string]: unknown })
  const options = addDefaultOptions(fdOptions)

  validateTimeout(options)
  validateEncoding(options)
  validateIpcInputOption(options)
  validateCancelSignal(options)
  validateGracefulCancel(options)

  options.shell = normalizeFileUrl(options.shell)
  options.env = getEnv(options)
  ;(options as { killSignal?: string }).killSignal = normalizeKillSignal(options.killSignal as string | number | undefined)
  options.forceKillAfterDelay = normalizeForceKillAfterDelay(options.forceKillAfterDelay as number | boolean | undefined)

  // 处理 lines 选项
  const lines = (options.lines ?? [false, false, false]) as boolean[]
  const encoding = options.encoding ?? 'utf8'
  const buffer = (options.buffer ?? [true, true, true]) as boolean[]
  ;(options as { lines?: boolean[] }).lines = lines.map(
    (lineValue, fdNumber) =>
      lineValue && !BINARY_ENCODINGS.has(encoding) && buffer[fdNumber]
  )

  // Windows cmd.exe 特殊处理
  if (process.platform === 'win32' && path.basename(file, '.exe') === 'cmd') {
    commandArguments.unshift('/q')
  }

  return { file, commandArguments, options }
}

/**
 * 添加默认选项值
 */
const addDefaultOptions = (
  options: CommonOptions & { [key: string]: unknown }
): CommonOptions & { [key: string]: unknown } => {
  const {
    extendEnv = true,
    preferLocal = false,
    cwd,
    localDir: localDirectory = cwd,
    encoding = 'utf8',
    reject = true,
    cleanup = true,
    all = false,
    windowsHide = true,
    killSignal = 'SIGTERM',
    forceKillAfterDelay = true,
    gracefulCancel = false,
    ipcInput,
    ipc = ipcInput !== undefined || gracefulCancel,
    serialization = 'advanced',
    ...rest
  } = options

  return {
    __proto__: null,
    ...rest,
    extendEnv,
    preferLocal,
    cwd,
    localDirectory,
    encoding,
    reject,
    cleanup,
    all,
    windowsHide,
    killSignal,
    forceKillAfterDelay,
    gracefulCancel,
    ipcInput,
    ipc,
    serialization,
  } as CommonOptions & { [key: string]: unknown }
}

/**
 * 获取环境变量
 */
const getEnv = (options: CommonOptions & { [key: string]: unknown }) => {
  const {
    env: envOption,
    extendEnv,
    preferLocal,
    node,
    localDirectory,
    nodePath,
  } = options as {
    env?: Record<string, string>
    extendEnv?: boolean
    preferLocal?: boolean
    node?: boolean
    localDirectory?: string
    nodePath?: string
  }

  const env = extendEnv ? { ...process.env, ...envOption } : envOption

  if (preferLocal || node) {
    return npmRunPathEnv({
      env: env as Record<string, string>,
      cwd: localDirectory,
      execPath: nodePath,
      preferLocal,
      addExecPath: node,
    })
  }

  return env
}
