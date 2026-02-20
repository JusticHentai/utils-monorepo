import fs from 'node:fs'
import fsPromises from 'node:fs/promises'
import path from 'node:path'
import { mkdirs, mkdirsSync } from '@/fs-ensureDir'

/**
 * 确保文件存在（异步）
 *
 * 确保文件存在。如果文件所在的目录不存在，则创建它们。
 * 如果文件已存在，则不会修改它。
 *
 * @param file - 文件路径
 *
 * @example
 * ```ts
 * import ensureFile from '@justichentai/node-utils/fs-ensureFile'
 *
 * await ensureFile('/tmp/this/path/does/not/exist/file.txt')
 * ```
 */
const ensureFile = async (file: string): Promise<void> => {
  let stats: fs.Stats | undefined
  try {
    stats = await fsPromises.stat(file)
  } catch {
    // 文件不存在
  }

  if (stats && stats.isFile()) return

  const dir = path.dirname(file)

  let dirStats: fs.Stats | null = null
  try {
    dirStats = await fsPromises.stat(dir)
  } catch (err) {
    const nodeErr = err as NodeJS.ErrnoException
    // 如果目录不存在，创建它
    if (nodeErr.code === 'ENOENT') {
      await mkdirs(dir)
      await fsPromises.writeFile(file, '')
      return
    }
    throw err
  }

  if (dirStats.isDirectory()) {
    await fsPromises.writeFile(file, '')
  } else {
    // 父级不是目录，这只是为了触发内部 ENOTDIR 错误
    await fsPromises.readdir(dir)
  }
}

/**
 * 确保文件存在（同步）
 *
 * @param file - 文件路径
 *
 * @example
 * ```ts
 * import { ensureFileSync } from '@justichentai/node-utils/fs-ensureFile'
 *
 * ensureFileSync('/tmp/this/path/does/not/exist/file.txt')
 * ```
 */
const ensureFileSync = (file: string): void => {
  let stats: fs.Stats | undefined
  try {
    stats = fs.statSync(file)
  } catch {
    // 文件不存在
  }

  if (stats && stats.isFile()) return

  const dir = path.dirname(file)
  try {
    if (!fs.statSync(dir).isDirectory()) {
      // 父级不是目录，这只是为了触发内部 ENOTDIR 错误
      fs.readdirSync(dir)
    }
  } catch (err) {
    const nodeErr = err as NodeJS.ErrnoException
    // 如果目录不存在，创建它
    if (nodeErr.code === 'ENOENT') {
      mkdirsSync(dir)
    } else {
      throw err
    }
  }

  fs.writeFileSync(file, '')
}

// 别名
const createFile = ensureFile
const createFileSync = ensureFileSync

export { ensureFile, ensureFileSync, createFile, createFileSync }
export default ensureFile
