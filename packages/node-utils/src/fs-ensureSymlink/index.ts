import fs from 'node:fs'
import fsPromises from 'node:fs/promises'
import path from 'node:path'
import type { SymlinkType, SymlinkPaths } from '@/fs-utils'
import { stat } from '@/fs-utils'
import { mkdirs, mkdirsSync } from '@/fs-ensureDir'
import { pathExists, pathExistsSync } from '@/fs-pathExists'

/**
 * 获取符号链接类型（异步）
 */
const symlinkType = async (
  srcpath: string,
  type?: SymlinkType
): Promise<SymlinkType> => {
  if (type) return type

  let stats: fs.Stats | undefined
  try {
    stats = await fsPromises.lstat(srcpath)
  } catch {
    return 'file'
  }

  return stats && stats.isDirectory() ? 'dir' : 'file'
}

/**
 * 获取符号链接类型（同步）
 */
const symlinkTypeSync = (srcpath: string, type?: SymlinkType): SymlinkType => {
  if (type) return type

  let stats: fs.Stats | undefined
  try {
    stats = fs.lstatSync(srcpath)
  } catch {
    return 'file'
  }

  return stats && stats.isDirectory() ? 'dir' : 'file'
}

/**
 * 解析符号链接路径（异步）
 */
const symlinkPaths = async (
  srcpath: string,
  dstpath: string
): Promise<SymlinkPaths> => {
  if (path.isAbsolute(srcpath)) {
    try {
      await fsPromises.lstat(srcpath)
    } catch (err) {
      const nodeErr = err as Error
      nodeErr.message = nodeErr.message.replace('lstat', 'ensureSymlink')
      throw err
    }

    return {
      toCwd: srcpath,
      toDst: srcpath,
    }
  }

  const dstdir = path.dirname(dstpath)
  const relativeToDst = path.join(dstdir, srcpath)

  const exists = await pathExists(relativeToDst)
  if (exists) {
    return {
      toCwd: relativeToDst,
      toDst: srcpath,
    }
  }

  try {
    await fsPromises.lstat(srcpath)
  } catch (err) {
    const nodeErr = err as Error
    nodeErr.message = nodeErr.message.replace('lstat', 'ensureSymlink')
    throw err
  }

  return {
    toCwd: srcpath,
    toDst: path.relative(dstdir, srcpath),
  }
}

/**
 * 解析符号链接路径（同步）
 */
const symlinkPathsSync = (srcpath: string, dstpath: string): SymlinkPaths => {
  if (path.isAbsolute(srcpath)) {
    const exists = fs.existsSync(srcpath)
    if (!exists) throw new Error('absolute srcpath does not exist')
    return {
      toCwd: srcpath,
      toDst: srcpath,
    }
  }

  const dstdir = path.dirname(dstpath)
  const relativeToDst = path.join(dstdir, srcpath)
  const exists = fs.existsSync(relativeToDst)

  if (exists) {
    return {
      toCwd: relativeToDst,
      toDst: srcpath,
    }
  }

  const srcExists = fs.existsSync(srcpath)
  if (!srcExists) throw new Error('relative srcpath does not exist')

  return {
    toCwd: srcpath,
    toDst: path.relative(dstdir, srcpath),
  }
}

/**
 * 确保符号链接存在（异步）
 *
 * 确保符号链接存在。如果链接所在的目录不存在，则创建它们。
 *
 * @param srcpath - 源文件路径
 * @param dstpath - 目标链接路径
 * @param type - 符号链接类型：'file' | 'dir' | 'junction'
 *
 * @example
 * ```ts
 * import ensureSymlink from '@justichentai/node-utils/fs-ensureSymlink'
 *
 * await ensureSymlink('/path/to/source', '/path/to/link')
 *
 * // 指定类型
 * await ensureSymlink('/path/to/source', '/path/to/link', 'dir')
 * ```
 */
const ensureSymlink = async (
  srcpath: string,
  dstpath: string,
  type?: SymlinkType
): Promise<void> => {
  let stats: fs.Stats | undefined
  try {
    stats = await fsPromises.lstat(dstpath)
  } catch {
    // 目标不存在
  }

  if (stats && stats.isSymbolicLink()) {
    const [srcStat, dstStat] = await Promise.all([
      fsPromises.stat(srcpath),
      fsPromises.stat(dstpath),
    ])

    if (stat.areIdentical(srcStat as unknown as fs.BigIntStats, dstStat as unknown as fs.BigIntStats)) return
  }

  const relative = await symlinkPaths(srcpath, dstpath)
  srcpath = relative.toDst
  const toType = await symlinkType(relative.toCwd, type)
  const dir = path.dirname(dstpath)

  if (!(await pathExists(dir))) {
    await mkdirs(dir)
  }

  await fsPromises.symlink(srcpath, dstpath, toType)
}

/**
 * 确保符号链接存在（同步）
 *
 * @param srcpath - 源文件路径
 * @param dstpath - 目标链接路径
 * @param type - 符号链接类型：'file' | 'dir' | 'junction'
 *
 * @example
 * ```ts
 * import { ensureSymlinkSync } from '@justichentai/node-utils/fs-ensureSymlink'
 *
 * ensureSymlinkSync('/path/to/source', '/path/to/link')
 * ```
 */
const ensureSymlinkSync = (
  srcpath: string,
  dstpath: string,
  type?: SymlinkType
): void => {
  let stats: fs.Stats | undefined
  try {
    stats = fs.lstatSync(dstpath)
  } catch {
    // 目标不存在
  }

  if (stats && stats.isSymbolicLink()) {
    const srcStat = fs.statSync(srcpath)
    const dstStat = fs.statSync(dstpath)
    if (stat.areIdentical(srcStat as unknown as fs.BigIntStats, dstStat as unknown as fs.BigIntStats)) return
  }

  const relative = symlinkPathsSync(srcpath, dstpath)
  srcpath = relative.toDst
  type = symlinkTypeSync(relative.toCwd, type)
  const dir = path.dirname(dstpath)
  const exists = pathExistsSync(dir)

  if (exists) {
    fs.symlinkSync(srcpath, dstpath, type)
    return
  }

  mkdirsSync(dir)
  fs.symlinkSync(srcpath, dstpath, type)
}

// 别名
const createSymlink = ensureSymlink
const createSymlinkSync = ensureSymlinkSync

export { ensureSymlink, ensureSymlinkSync, createSymlink, createSymlinkSync }
export default ensureSymlink
