import fs from 'node:fs'
import fsPromises from 'node:fs/promises'

/**
 * 删除文件或目录（异步）
 *
 * 删除文件或目录，包括子目录和文件。如果路径不存在则静默忽略。
 *
 * @param filePath - 要删除的路径
 *
 * @example
 * ```ts
 * import remove from '@justichentai/node-utils/fs-remove'
 *
 * // 删除文件
 * await remove('/tmp/myfile')
 *
 * // 删除目录
 * await remove('/tmp/mydir')
 * ```
 */
const remove = async (filePath: string): Promise<void> => {
  await fsPromises.rm(filePath, { recursive: true, force: true })
}

/**
 * 删除文件或目录（同步）
 *
 * @param filePath - 要删除的路径
 *
 * @example
 * ```ts
 * import { removeSync } from '@justichentai/node-utils/fs-remove'
 *
 * removeSync('/tmp/myfile')
 * ```
 */
const removeSync = (filePath: string): void => {
  fs.rmSync(filePath, { recursive: true, force: true })
}

export { remove, removeSync }
export default remove
