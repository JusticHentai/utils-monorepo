import process from 'node:process'
import type { CommonOptions } from '@/execa-types'

/**
 * 处理 node 选项
 * 当 node 为 true 时，使用当前 Node.js 进程执行脚本
 * @param filePath - 文件路径
 * @param rawArguments - 参数数组
 * @param rawOptions - 选项
 */
export const handleNodeOption = (
  filePath: string,
  rawArguments: string[],
  rawOptions: CommonOptions & { [key: string]: unknown }
): [string, string[], CommonOptions & { [key: string]: unknown }] => {
  if (!rawOptions.node) {
    return [filePath, rawArguments, rawOptions]
  }

  const {
    nodePath = process.execPath,
    nodeOptions = process.execArgv.filter((arg) => !arg.startsWith('--inspect')),
  } = rawOptions

  const nodePathString = typeof nodePath === 'string'
    ? nodePath
    : nodePath instanceof URL
      ? nodePath.href
      : String(nodePath)

  return [
    nodePathString,
    [...(nodeOptions as string[]), filePath, ...rawArguments],
    {
      ...rawOptions,
      // 当使用 node 选项时，自动启用 ipc
      ipc: rawOptions.ipc !== false,
    },
  ]
}

/**
 * execaNode 的映射函数
 */
export const mapNode = ({
  file,
  commandArguments,
  options,
}: {
  file: string
  commandArguments: string[]
  options: CommonOptions
}): {
  file?: string
  commandArguments?: string[]
  options: CommonOptions
} => ({
  options: {
    ...options,
    node: true,
  },
})
