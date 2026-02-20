/**
 * Execa 错误符号，用于跨 realm 识别
 */
const execaErrorSymbol = Symbol('isExecaError')

/**
 * 获取最终错误实例
 * 当子进程失败时，返回此错误实例
 * 如果抛出了另一个错误实例，它会被保留为 error.cause
 * @param originalError - 原始错误
 * @param message - 错误消息
 * @param isSync - 是否为同步方法
 */
export const getFinalError = (
  originalError: unknown,
  message: string,
  isSync: boolean
): ExecaError | ExecaSyncError => {
  const ErrorClass = isSync ? ExecaSyncError : ExecaError
  const options =
    originalError instanceof DiscardedError ? {} : { cause: originalError }
  return new ErrorClass(message, options)
}

/**
 * 表示错误仅用于中断控制流，但不在返回值中使用
 */
export class DiscardedError extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'DiscardedError'
  }
}

/**
 * 正确设置 error.name 的方式：它应该是可继承的且不可枚举的
 */
const setErrorName = (
  ErrorClass: typeof ExecaError | typeof ExecaSyncError,
  value: string
): void => {
  Object.defineProperty(ErrorClass.prototype, 'name', {
    value,
    writable: true,
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(ErrorClass.prototype, execaErrorSymbol, {
    value: true,
    writable: false,
    enumerable: false,
    configurable: false,
  })
}

/**
 * 检查值是否为错误实例
 */
export const isErrorInstance = (value: unknown): value is Error =>
  Object.prototype.toString.call(value) === '[object Error]'

/**
 * 检查错误是否为 Execa 错误
 * 与 instanceof 不同，这在跨 realm 时也能工作
 * @param error - 要检查的错误
 */
export const isExecaError = (error: unknown): error is ExecaError | ExecaSyncError =>
  isErrorInstance(error) && execaErrorSymbol in error

/**
 * 异步方法的错误类
 */
export class ExecaError extends Error {
  /** 简短错误消息 */
  shortMessage?: string
  /** 原始错误消息 */
  originalMessage?: string
  /** 执行的命令 */
  command?: string
  /** 转义后的命令 */
  escapedCommand?: string
  /** 工作目录 */
  cwd?: string
  /** 执行时间（毫秒） */
  durationMs?: number
  /** 是否失败 */
  failed?: boolean
  /** 是否超时 */
  timedOut?: boolean
  /** 是否被取消 */
  isCanceled?: boolean
  /** 是否被优雅取消 */
  isGracefullyCanceled?: boolean
  /** 是否被信号终止 */
  isTerminated?: boolean
  /** 是否超出缓冲区 */
  isMaxBuffer?: boolean
  /** 是否被强制终止 */
  isForcefullyTerminated?: boolean
  /** 退出码 */
  exitCode?: number
  /** 终止信号 */
  signal?: string
  /** 信号描述 */
  signalDescription?: string
  /** 错误码 */
  code?: string
  /** stdout 输出 */
  stdout?: string | Uint8Array | string[]
  /** stderr 输出 */
  stderr?: string | Uint8Array | string[]
  /** stdout + stderr 合并输出 */
  all?: string | Uint8Array | string[]
  /** 所有 stdio 输出 */
  stdio?: (string | Uint8Array | string[] | undefined)[]
  /** IPC 输出 */
  ipcOutput?: unknown[]
  /** 管道来源 */
  pipedFrom?: unknown[]

  constructor(message?: string, options?: ErrorOptions) {
    super(message, options)
  }
}

setErrorName(ExecaError, ExecaError.name)

/**
 * 同步方法的错误类
 */
export class ExecaSyncError extends Error {
  /** 简短错误消息 */
  shortMessage?: string
  /** 原始错误消息 */
  originalMessage?: string
  /** 执行的命令 */
  command?: string
  /** 转义后的命令 */
  escapedCommand?: string
  /** 工作目录 */
  cwd?: string
  /** 执行时间（毫秒） */
  durationMs?: number
  /** 是否失败 */
  failed?: boolean
  /** 是否超时 */
  timedOut?: boolean
  /** 是否被取消 */
  isCanceled?: boolean
  /** 是否被优雅取消 */
  isGracefullyCanceled?: boolean
  /** 是否被信号终止 */
  isTerminated?: boolean
  /** 是否超出缓冲区 */
  isMaxBuffer?: boolean
  /** 是否被强制终止 */
  isForcefullyTerminated?: boolean
  /** 退出码 */
  exitCode?: number
  /** 终止信号 */
  signal?: string
  /** 信号描述 */
  signalDescription?: string
  /** 错误码 */
  code?: string
  /** stdout 输出 */
  stdout?: string | Uint8Array | string[]
  /** stderr 输出 */
  stderr?: string | Uint8Array | string[]
  /** stdout + stderr 合并输出 */
  all?: string | Uint8Array | string[]
  /** 所有 stdio 输出 */
  stdio?: (string | Uint8Array | string[] | undefined)[]
  /** IPC 输出 */
  ipcOutput?: unknown[]
  /** 管道来源 */
  pipedFrom?: never[]

  constructor(message?: string, options?: ErrorOptions) {
    super(message, options)
  }
}

setErrorName(ExecaSyncError, ExecaSyncError.name)
