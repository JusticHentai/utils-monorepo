import isPlainObj from 'is-plain-obj'
import { safeNormalizeFileUrl } from './fileUrl'

/**
 * 规范化命令参数
 * 命令的 arguments 和 options 都是可选的
 * 同时对它们和命令文件进行基本验证
 * @param rawFile - 原始文件路径
 * @param rawArguments - 原始参数
 * @param rawOptions - 原始选项
 */
export const normalizeParameters = <T extends object>(
  rawFile: string | URL,
  rawArguments: readonly string[] | T = [],
  rawOptions: T = {} as T
): [string, string[], T] => {
  const filePath = safeNormalizeFileUrl(rawFile, 'First argument')

  const [commandArguments, options] = isPlainObj(rawArguments)
    ? [[], rawArguments as T]
    : [rawArguments as readonly string[], rawOptions]

  if (!Array.isArray(commandArguments)) {
    throw new TypeError(
      `Second argument must be either an array of arguments or an options object: ${commandArguments}`
    )
  }

  if (
    commandArguments.some(
      (commandArgument) => typeof commandArgument === 'object' && commandArgument !== null
    )
  ) {
    throw new TypeError(`Second argument must be an array of strings: ${commandArguments}`)
  }

  const normalizedArguments = commandArguments.map(String)
  const nullByteArgument = normalizedArguments.find((normalizedArgument) =>
    normalizedArgument.includes('\0')
  )

  if (nullByteArgument !== undefined) {
    throw new TypeError(`Arguments cannot contain null bytes ("\\0"): ${nullByteArgument}`)
  }

  if (!isPlainObj(options)) {
    throw new TypeError(`Last argument must be an options object: ${options}`)
  }

  // 使用空原型防止原型污染
  return [filePath, normalizedArguments, { __proto__: null, ...options } as T]
}
