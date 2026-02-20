import type { SignalConstants } from 'node:os'
import type { Readable, Writable } from 'node:stream'
import type { ChildProcess } from 'node:child_process'

/**
 * 编码选项类型
 */
export type EncodingOption =
  | 'utf8'
  | 'utf16le'
  | 'buffer'
  | 'hex'
  | 'base64'
  | 'base64url'
  | 'latin1'
  | 'ascii'

/**
 * 二进制编码类型集合
 */
export const BINARY_ENCODINGS = new Set(['buffer', 'hex', 'base64', 'base64url', 'latin1', 'ascii'])

/**
 * Verbose 日志级别
 */
export type VerboseLevel = 'none' | 'short' | 'full'

/**
 * Verbose 函数类型
 */
export type VerboseFunction = (
  verboseLine: string,
  verboseObject: VerboseObject
) => void | string

/**
 * Verbose 配置选项
 */
export type VerboseOption = VerboseLevel | VerboseFunction

/**
 * Verbose 对象
 */
export interface VerboseObject {
  /** 日志类型 */
  type: 'command' | 'output' | 'ipc' | 'error' | 'duration'
  /** 日志消息 */
  message: string
  /** 命令ID */
  commandId: bigint
  /** 时间戳 */
  timestamp: Date
  /** 是否失败 */
  failed?: boolean
  /** 持续时间（毫秒） */
  durationMs?: number
  /** 文件描述符编号 */
  fdNumber?: number
}

/**
 * 标准输入选项
 */
export type StdinOption =
  | 'pipe'
  | 'overlapped'
  | 'ignore'
  | 'inherit'
  | number
  | Readable
  | { file: string }
  | URL
  | Iterable<string | Uint8Array>
  | AsyncIterable<string | Uint8Array>
  | Uint8Array

/**
 * 标准输出/错误选项
 */
export type StdoutStderrOption =
  | 'pipe'
  | 'overlapped'
  | 'ignore'
  | 'inherit'
  | number
  | Writable
  | { file: string }
  | URL

/**
 * stdio 配置
 */
export type StdioOption =
  | 'pipe'
  | 'overlapped'
  | 'ignore'
  | 'inherit'
  | readonly (StdinOption | StdoutStderrOption | undefined)[]

/**
 * IPC 消息类型
 */
export type Message = unknown

/**
 * fd 特定选项类型
 */
export interface FdSpecificOption<T> {
  stdout?: T
  stderr?: T
  all?: T
  ipc?: T
  [key: `fd${number}`]: T | undefined
}

/**
 * fd 通用选项
 */
export type FdGenericOption<T> = T | FdSpecificOption<T>

/**
 * Execa 通用选项
 */
export interface CommonOptions {
  /**
   * 优先使用本地安装的二进制文件
   * @default $ 命令默认为 true，其他为 false
   */
  preferLocal?: boolean

  /**
   * 本地二进制文件查找路径
   * @default cwd 选项值
   */
  localDir?: string | URL

  /**
   * 是否使用 Node.js 运行
   * @default execaNode() 为 true，其他为 false
   */
  node?: boolean

  /**
   * Node.js CLI 参数
   * @default process.execArgv
   */
  nodeOptions?: readonly string[]

  /**
   * Node.js 可执行文件路径
   * @default process.execPath
   */
  nodePath?: string | URL

  /**
   * 是否在 shell 中运行
   * @default false
   */
  shell?: boolean | string | URL

  /**
   * 工作目录
   * @default process.cwd()
   */
  cwd?: string | URL

  /**
   * 环境变量
   * @default process.env
   */
  env?: Readonly<Partial<Record<string, string>>>

  /**
   * 是否扩展当前进程的环境变量
   * @default true
   */
  extendEnv?: boolean

  /**
   * 子进程的 stdin 输入
   */
  input?: string | Uint8Array | Readable

  /**
   * 使用文件作为子进程的 stdin 输入
   */
  inputFile?: string | URL

  /**
   * stdin 配置
   * @default $ 命令为 'inherit'，其他为 'pipe'
   */
  stdin?: StdinOption

  /**
   * stdout 配置
   * @default 'pipe'
   */
  stdout?: StdoutStderrOption

  /**
   * stderr 配置
   * @default 'pipe'
   */
  stderr?: StdoutStderrOption

  /**
   * stdio 配置
   * @default 'pipe'
   */
  stdio?: StdioOption

  /**
   * 是否合并 stdout 和 stderr 到 all
   * @default false
   */
  all?: boolean

  /**
   * 输出编码
   * @default 'utf8'
   */
  encoding?: EncodingOption

  /**
   * 是否按行分割输出
   * @default false
   */
  lines?: FdGenericOption<boolean>

  /**
   * 是否去除输出末尾的换行符
   * @default true
   */
  stripFinalNewline?: FdGenericOption<boolean>

  /**
   * 最大缓冲区大小
   * @default 100_000_000
   */
  maxBuffer?: FdGenericOption<number>

  /**
   * 是否缓冲输出
   * @default true
   */
  buffer?: FdGenericOption<boolean>

  /**
   * 是否启用 IPC
   * @default 根据 node、ipcInput 或 gracefulCancel 选项自动设置
   */
  ipc?: boolean

  /**
   * IPC 序列化方式
   * @default 'advanced'
   */
  serialization?: 'json' | 'advanced'

  /**
   * IPC 初始消息
   */
  ipcInput?: Message

  /**
   * 日志级别
   * @default 'none'
   */
  verbose?: VerboseOption | FdGenericOption<VerboseOption>

  /**
   * 失败时是否 reject
   * @default true
   */
  reject?: boolean

  /**
   * 超时时间（毫秒）
   * @default 0
   */
  timeout?: number

  /**
   * 取消信号
   */
  cancelSignal?: AbortSignal

  /**
   * 优雅取消
   * @default false
   */
  gracefulCancel?: boolean

  /**
   * 强制终止延迟（毫秒）
   * @default 5000
   */
  forceKillAfterDelay?: number | boolean

  /**
   * 默认终止信号
   * @default 'SIGTERM'
   */
  killSignal?: keyof SignalConstants | number

  /**
   * 是否分离子进程
   * @default false
   */
  detached?: boolean

  /**
   * 当前进程退出时是否终止子进程
   * @default true
   */
  cleanup?: boolean

  /**
   * 用户 ID
   */
  uid?: number

  /**
   * 组 ID
   */
  gid?: number

  /**
   * argv[0] 值
   */
  argv0?: string

  /**
   * Windows 下是否隐藏控制台窗口
   * @default true
   */
  windowsHide?: boolean

  /**
   * Windows 下是否使用原始参数
   * @default shell 为 true 时为 true，否则为 false
   */
  windowsVerbatimArguments?: boolean
}

/**
 * 异步选项
 */
export type Options = CommonOptions

/**
 * 同步选项
 */
export type SyncOptions = Omit<
  CommonOptions,
  'ipc' | 'serialization' | 'ipcInput' | 'cancelSignal' | 'gracefulCancel' | 'forceKillAfterDelay' | 'detached' | 'cleanup'
>

/**
 * 子进程结果基类
 */
export interface CommonResult {
  /** 执行的命令 */
  command: string

  /** 转义后的命令 */
  escapedCommand: string

  /** 工作目录 */
  cwd: string

  /** 执行时间（毫秒） */
  durationMs: number

  /** 是否失败 */
  failed: boolean

  /** 是否超时 */
  timedOut: boolean

  /** 是否被取消 */
  isCanceled: boolean

  /** 是否被优雅取消 */
  isGracefullyCanceled: boolean

  /** 是否被信号终止 */
  isTerminated: boolean

  /** 是否超出缓冲区 */
  isMaxBuffer: boolean

  /** 是否被强制终止 */
  isForcefullyTerminated: boolean

  /** 退出码 */
  exitCode?: number

  /** 终止信号 */
  signal?: keyof SignalConstants

  /** 信号描述 */
  signalDescription?: string

  /** stdout 输出 */
  stdout: string | Uint8Array | string[] | undefined

  /** stderr 输出 */
  stderr: string | Uint8Array | string[] | undefined

  /** stdout + stderr 合并输出 */
  all?: string | Uint8Array | string[]

  /** 所有 stdio 输出 */
  stdio: (string | Uint8Array | string[] | undefined)[]

  /** IPC 输出 */
  ipcOutput: Message[]

  /** 管道来源 */
  pipedFrom: Result[]
}

/**
 * 异步执行结果
 */
export interface Result extends CommonResult {}

/**
 * 同步执行结果
 */
export interface SyncResult extends Omit<CommonResult, 'pipedFrom'> {
  pipedFrom: []
}

/**
 * 错误结果属性
 */
export interface ErrorProperties {
  /** 错误消息 */
  message: string

  /** 简短错误消息 */
  shortMessage: string

  /** 原始错误消息 */
  originalMessage?: string

  /** 底层错误 */
  cause?: unknown

  /** Node.js 错误码 */
  code?: string
}

/**
 * 子进程对象类型
 */
export interface Subprocess extends ChildProcess {
  /** stdout + stderr 合并流 */
  all?: Readable

  /** 管道到另一个子进程 */
  pipe: (destination: Subprocess | string, options?: Options) => Subprocess

  /** 终止子进程 */
  kill: (signal?: string | number | Error, error?: Error) => boolean

  /** 发送 IPC 消息 */
  sendMessage?: (message: Message) => Promise<void>

  /** 获取一条 IPC 消息 */
  getOneMessage?: () => Promise<Message>

  /** 获取所有 IPC 消息的异步迭代器 */
  getEachMessage?: () => AsyncIterable<Message>
}

/**
 * 结果 Promise 类型
 */
export type ResultPromise = Promise<Result> & Subprocess

/**
 * 模板表达式类型
 */
export type TemplateExpression = string | number | Result | ResultPromise

/**
 * Execa 方法类型
 */
export interface ExecaMethod {
  (file: string, args?: readonly string[], options?: Options): ResultPromise
  (file: string, options?: Options): ResultPromise
  (options: Options): ExecaMethod
  (templates: TemplateStringsArray, ...expressions: TemplateExpression[]): ResultPromise
}

/**
 * Execa 同步方法类型
 */
export interface ExecaSyncMethod {
  (file: string, args?: readonly string[], options?: SyncOptions): SyncResult
  (file: string, options?: SyncOptions): SyncResult
  (options: SyncOptions): ExecaSyncMethod
}

/**
 * Execa 脚本方法类型（$）
 */
export interface ExecaScriptMethod extends ExecaMethod {
  sync: ExecaSyncMethod
  s: ExecaSyncMethod
}

/**
 * execaNode 方法类型
 */
export interface ExecaNodeMethod {
  (scriptPath: string, args?: readonly string[], options?: Options): ResultPromise
  (scriptPath: string, options?: Options): ResultPromise
  (options: Options): ExecaNodeMethod
}

/**
 * Verbose 信息
 */
export interface VerboseInfo {
  verbose: VerboseOption[]
  escapedCommand: string
  commandId: bigint | undefined
  rawOptions: CommonOptions
}

/**
 * 文件描述符类型
 */
export interface FileDescriptor {
  direction: 'input' | 'output' | 'both'
  value: unknown
}

/**
 * 标准流别名
 */
export const STANDARD_STREAMS_ALIASES = ['stdin', 'stdout', 'stderr'] as const

/**
 * fd 特定选项列表
 */
export const FD_SPECIFIC_OPTIONS = [
  'lines',
  'buffer',
  'maxBuffer',
  'verbose',
  'stripFinalNewline',
] as const

/**
 * 默认选项值
 */
export const DEFAULT_OPTIONS = {
  lines: false,
  buffer: true,
  maxBuffer: 1000 * 1000 * 100,
  verbose: 'none' as VerboseLevel,
  stripFinalNewline: true,
} as const

/**
 * 参数映射函数类型
 */
export type MapArgumentsFn = (args: {
  file: string
  commandArguments: string[]
  options: CommonOptions
}) => {
  file?: string
  commandArguments?: string[]
  options?: CommonOptions
  isSync?: boolean
}

/**
 * 绑定的 Execa 函数类型
 */
export type BoundExecaFn = {
  (...args: unknown[]): ResultPromise | SyncResult | BoundExecaFn
  sync?: BoundExecaFn
  s?: BoundExecaFn
}

/**
 * 创建嵌套方法的函数类型
 */
export type CreateNestedFn = (
  mapArguments: MapArgumentsFn,
  boundOptions: CommonOptions,
  setBoundExeca?: SetBoundExecaFn
) => BoundExecaFn

/**
 * 设置绑定方法的函数类型
 */
export type SetBoundExecaFn = (
  boundExeca: BoundExecaFn,
  createNested: CreateNestedFn,
  boundOptions: CommonOptions
) => void
