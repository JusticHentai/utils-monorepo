import { fileURLToPath } from 'node:url'

/**
 * 安全地将文件 URL 或路径规范化为字符串
 * @param file - 文件路径或 URL
 * @param name - 参数名称（用于错误消息）
 */
export const safeNormalizeFileUrl = (file: string | URL, name: string): string => {
  const fileString = normalizeFileUrl(normalizeDenoExecPath(file))

  if (typeof fileString !== 'string') {
    throw new TypeError(`${name} must be a string or a file URL: ${fileString}.`)
  }

  return fileString
}

/**
 * 在 Deno 中 node:process 的 execPath 是一个特殊对象，不仅仅是字符串
 * 此函数处理这种情况
 */
const normalizeDenoExecPath = (file: string | URL | { toString(): string }): string | URL => {
  if (isDenoExecPath(file)) {
    return file.toString()
  }
  return file as string | URL
}

/**
 * 检查是否为 Deno 的 execPath
 */
export const isDenoExecPath = (file: unknown): file is { toString(): string } =>
  typeof file !== 'string' &&
  file !== null &&
  file !== undefined &&
  Object.getPrototypeOf(file) === String.prototype

/**
 * 将文件 URL 规范化为路径字符串
 * 也允许其他值通过（如 boolean 用于 shell 选项）
 * @param file - 文件 URL 或其他值
 */
export const normalizeFileUrl = <T>(file: T | URL): T | string => {
  if (file instanceof URL) {
    return fileURLToPath(file)
  }
  return file
}
