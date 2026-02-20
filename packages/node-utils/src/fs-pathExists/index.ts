import fs from 'node:fs'
import fsPromises from 'node:fs/promises'

/**
 * 检查路径是否存在（异步）
 *
 * 使用 fs.access 检查文件或目录是否存在。
 *
 * @param filePath - 要检查的路径
 * @returns 路径是否存在
 *
 * @example
 * ```ts
 * import pathExists from '@justichentai/node-utils/fs-pathExists'
 *
 * const exists = await pathExists('/tmp/myfile')
 * console.log(exists) // true 或 false
 * ```
 */
const pathExists = async (filePath: string): Promise<boolean> => {
  try {
    await fsPromises.access(filePath)
    return true
  } catch {
    return false
  }
}

/**
 * 检查路径是否存在（同步）
 *
 * @param filePath - 要检查的路径
 * @returns 路径是否存在
 *
 * @example
 * ```ts
 * import { pathExistsSync } from '@justichentai/node-utils/fs-pathExists'
 *
 * const exists = pathExistsSync('/tmp/myfile')
 * console.log(exists) // true 或 false
 * ```
 */
const pathExistsSync = (filePath: string): boolean => {
  return fs.existsSync(filePath)
}

export { pathExists, pathExistsSync }
export default pathExists
