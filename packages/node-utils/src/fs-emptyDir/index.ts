import fsPromises from 'node:fs/promises'
import fs from 'node:fs'
import path from 'node:path'
import { mkdirs, mkdirsSync } from '@/fs-ensureDir'
import { remove, removeSync } from '@/fs-remove'

/**
 * 清空目录（异步）
 *
 * 确保目录为空。如果目录不为空，则删除其内容。如果目录不存在，则创建它。
 * 目录本身不会被删除。
 *
 * @param dir - 目录路径
 *
 * @example
 * ```ts
 * import emptyDir from '@justichentai/node-utils/fs-emptyDir'
 *
 * await emptyDir('/tmp/some/dir')
 * ```
 */
const emptyDir = async (dir: string): Promise<void> => {
  let items: string[]
  try {
    items = await fsPromises.readdir(dir)
  } catch {
    await mkdirs(dir)
    return
  }

  await Promise.all(items.map((item) => remove(path.join(dir, item))))
}

/**
 * 清空目录（同步）
 *
 * @param dir - 目录路径
 *
 * @example
 * ```ts
 * import { emptyDirSync } from '@justichentai/node-utils/fs-emptyDir'
 *
 * emptyDirSync('/tmp/some/dir')
 * ```
 */
const emptyDirSync = (dir: string): void => {
  let items: string[]
  try {
    items = fs.readdirSync(dir)
  } catch {
    mkdirsSync(dir)
    return
  }

  items.forEach((item) => {
    removeSync(path.join(dir, item))
  })
}

// 别名
const emptydir = emptyDir
const emptydirSync = emptyDirSync

export { emptyDir, emptyDirSync, emptydir, emptydirSync }
export default emptyDir
