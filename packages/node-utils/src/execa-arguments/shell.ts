import type { CommonOptions } from '@/execa-types'

/**
 * 当 shell 选项被设置时，Node.js 会将命令参数连接为单个字符串
 * 为了避免 Node 24+ 的弃用警告，我们在调用 node:child_process 之前执行相同的操作
 * @param file - 命令文件
 * @param commandArguments - 命令参数
 * @param options - 选项
 */
export const concatenateShell = (
  file: string,
  commandArguments: string[],
  options: CommonOptions
): [string, string[], CommonOptions] => {
  if (options.shell && commandArguments.length > 0) {
    return [[file, ...commandArguments].join(' '), [], options]
  }
  return [file, commandArguments, options]
}
