/**
 * Execa - 进程执行工具
 *
 * 一个强大的子进程执行库，提供以下功能：
 * - 模板字符串语法支持
 * - Promise 和同步 API
 * - 丰富的配置选项
 * - 详细的错误信息
 * - verbose 日志输出
 *
 * @example
 * ```typescript
 * import { execa, $ } from '@justichentai/node-utils/execa'
 *
 * // 基本用法
 * const result = await execa('echo', ['hello'])
 * console.log(result.stdout) // 'hello'
 *
 * // 模板字符串语法
 * const { stdout } = await $`echo hello`
 *
 * // 同步执行
 * const syncResult = $.sync`echo hello`
 * ```
 */

// 从新模块导入
import {
  mapCommandAsync,
  mapCommandSync,
  parseCommandString,
} from '@/execa-methods/command'
import { createExeca } from '@/execa-methods/create'
import { mapNode } from '@/execa-methods/node'
import {
  deepScriptOptions,
  mapScriptAsync,
  setScriptSync,
} from '@/execa-methods/script'
import type {
  ExecaMethod,
  ExecaNodeMethod,
  ExecaScriptMethod,
  ExecaSyncMethod,
} from '@/execa-types'

// 导出类型
export type {
  CommonOptions,
  CommonResult,
  EncodingOption,
  ExecaMethod,
  ExecaNodeMethod,
  ExecaScriptMethod,
  ExecaSyncMethod,
  Message,
  Options,
  Result,
  ResultPromise,
  StdinOption,
  StdioOption,
  StdoutStderrOption,
  SyncOptions,
  SyncResult,
  TemplateExpression,
  VerboseLevel,
  VerboseObject,
  VerboseOption,
} from '@/execa-types'

// 导出错误类
export { ExecaError, ExecaSyncError } from '@/execa-return'

// 导出工具函数
export { parseCommandString }

/**
 * 执行命令
 *
 * @example
 * ```typescript
 * // 基本用法
 * const result = await execa('ls', ['-la'])
 *
 * // 使用选项
 * const result = await execa('node', ['script.js'], { cwd: '/path/to/dir' })
 *
 * // 模板字符串语法
 * const result = await execa`echo hello`
 *
 * // 绑定选项
 * const myExeca = execa({ verbose: 'full' })
 * const result = await myExeca('echo', ['hello'])
 * ```
 */
export const execa = createExeca(() => ({})) as unknown as ExecaMethod

/**
 * 同步执行命令
 *
 * @example
 * ```typescript
 * const result = execaSync('echo', ['hello'])
 * console.log(result.stdout) // 'hello'
 * ```
 */
export const execaSync = createExeca(() => ({
  isSync: true,
})) as unknown as ExecaSyncMethod

/**
 * 执行命令字符串（自动解析参数）
 *
 * @example
 * ```typescript
 * const result = await execaCommand('echo hello world')
 * // 等同于 execa('echo', ['hello', 'world'])
 * ```
 */
export const execaCommand = createExeca(
  mapCommandAsync
) as unknown as ExecaMethod

/**
 * 同步执行命令字符串
 *
 * @example
 * ```typescript
 * const result = execaCommandSync('echo hello')
 * ```
 */
export const execaCommandSync = createExeca(
  mapCommandSync
) as unknown as ExecaSyncMethod

/**
 * 执行 Node.js 脚本
 *
 * @example
 * ```typescript
 * const result = await execaNode('script.js', ['arg1', 'arg2'])
 * ```
 */
export const execaNode = createExeca(mapNode) as unknown as ExecaNodeMethod

/**
 * 脚本执行器（$ 语法）
 *
 * 默认继承 stdin，优先使用本地安装的二进制文件
 *
 * @example
 * ```typescript
 * // 模板字符串语法
 * const { stdout } = await $`echo hello`
 *
 * // 管道
 * const { stdout } = await $`cat file.txt | grep pattern`
 *
 * // 同步执行
 * const { stdout } = $.sync`echo hello`
 *
 * // 绑定选项
 * const $verbose = $({ verbose: 'full' })
 * await $verbose`npm install`
 * ```
 */
export const $ = createExeca(
  mapScriptAsync,
  {},
  deepScriptOptions,
  setScriptSync
) as unknown as ExecaScriptMethod

// 默认导出
export default execa
