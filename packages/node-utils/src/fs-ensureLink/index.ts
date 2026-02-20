import fs from 'node:fs'
import fsPromises from 'node:fs/promises'
import path from 'node:path'
import { mkdirs, mkdirsSync } from '@/fs-ensureDir'
import { pathExists } from '@/fs-pathExists'
import { stat } from '@/fs-utils'

/**
 * 确保硬链接存在（异步）
 *
 * 确保硬链接存在。如果链接所在的目录不存在，则创建它们。
 *
 * @param srcpath - 源文件路径
 * @param dstpath - 目标链接路径
 *
 * @example
 * ```ts
 * import ensureLink from '@justichentai/node-utils/fs-ensureLink'
 *
 * await ensureLink('/path/to/source', '/path/to/link')
 * ```
 */
const ensureLink = async (srcpath: string, dstpath: string): Promise<void> => {
  let dstStat: fs.BigIntStats | undefined
  try {
    dstStat = await fsPromises.lstat(dstpath, { bigint: true })
  } catch {
    // 目标不存在
  }

  let srcStat: fs.BigIntStats
  try {
    srcStat = await fsPromises.lstat(srcpath, { bigint: true })
  } catch (err) {
    const nodeErr = err as Error
    nodeErr.message = nodeErr.message.replace('lstat', 'ensureLink')
    throw err
  }

  if (dstStat && stat.areIdentical(srcStat, dstStat)) return

  const dir = path.dirname(dstpath)
  const dirExists = await pathExists(dir)

  if (!dirExists) {
    await mkdirs(dir)
  }

  await fsPromises.link(srcpath, dstpath)
}

/**
 * 确保硬链接存在（同步）
 *
 * @param srcpath - 源文件路径
 * @param dstpath - 目标链接路径
 *
 * @example
 * ```ts
 * import { ensureLinkSync } from '@justichentai/node-utils/fs-ensureLink'
 *
 * ensureLinkSync('/path/to/source', '/path/to/link')
 * ```
 */
const ensureLinkSync = (srcpath: string, dstpath: string): void => {
  let dstStat: fs.BigIntStats | undefined
  try {
    dstStat = fs.lstatSync(dstpath, { bigint: true })
  } catch {
    // 目标不存在
  }

  let srcStat: fs.BigIntStats
  try {
    srcStat = fs.lstatSync(srcpath, { bigint: true })
    if (dstStat && stat.areIdentical(srcStat, dstStat)) return
  } catch (err) {
    const nodeErr = err as Error
    nodeErr.message = nodeErr.message.replace('lstat', 'ensureLink')
    throw err
  }

  const dir = path.dirname(dstpath)
  const dirExists = fs.existsSync(dir)

  if (dirExists) {
    fs.linkSync(srcpath, dstpath)
    return
  }

  mkdirsSync(dir)
  fs.linkSync(srcpath, dstpath)
}

// 别名
const createLink = ensureLink
const createLinkSync = ensureLinkSync

export { ensureLink, ensureLinkSync, createLink, createLinkSync }
export default ensureLink
