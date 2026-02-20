import fs from 'node:fs'
import fsPromises from 'node:fs/promises'
import path from 'node:path'
import type { CopyOptions, MoveOptions, PathStats } from './index'

/**
 * 获取源路径和目标路径的文件状态（异步）
 * @param src - 源路径
 * @param dest - 目标路径
 * @param opts - 配置选项
 */
const getStats = async (
  src: string,
  dest: string,
  opts: CopyOptions | MoveOptions
): Promise<PathStats> => {
  const statFunc = opts.dereference
    ? (file: string) => fsPromises.stat(file, { bigint: true })
    : (file: string) => fsPromises.lstat(file, { bigint: true })

  const [srcStat, destStat] = await Promise.all([
    statFunc(src),
    statFunc(dest).catch((err: NodeJS.ErrnoException) => {
      if (err.code === 'ENOENT') return null
      throw err
    }),
  ])

  return { srcStat, destStat }
}

/**
 * 获取源路径和目标路径的文件状态（同步）
 * @param src - 源路径
 * @param dest - 目标路径
 * @param opts - 配置选项
 */
const getStatsSync = (
  src: string,
  dest: string,
  opts: CopyOptions | MoveOptions
): PathStats => {
  const statFunc = opts.dereference
    ? (file: string) => fs.statSync(file, { bigint: true })
    : (file: string) => fs.lstatSync(file, { bigint: true })

  const srcStat = statFunc(src)
  let destStat: fs.BigIntStats | null = null

  try {
    destStat = statFunc(dest)
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code !== 'ENOENT') throw err
  }

  return { srcStat, destStat }
}

/**
 * 检查两个文件状态是否指向同一个文件
 * @param srcStat - 源文件状态
 * @param destStat - 目标文件状态
 */
const areIdentical = (srcStat: fs.BigIntStats, destStat: fs.BigIntStats): boolean => {
  // stat.dev 在 node >= 22.x.x 的 windows 上可能为 0n
  return (
    destStat.ino !== undefined &&
    destStat.dev !== undefined &&
    destStat.ino === srcStat.ino &&
    destStat.dev === srcStat.dev
  )
}

/**
 * 检查源路径是否是目标路径的子目录
 * @param src - 源路径
 * @param dest - 目标路径
 */
const isSrcSubdir = (src: string, dest: string): boolean => {
  const srcArr = path.resolve(src).split(path.sep).filter(Boolean)
  const destArr = path.resolve(dest).split(path.sep).filter(Boolean)
  return srcArr.every((cur, i) => destArr[i] === cur)
}

/**
 * 生成错误信息
 * @param src - 源路径
 * @param dest - 目标路径
 * @param funcName - 操作名称
 */
const errMsg = (src: string, dest: string, funcName: string): string => {
  return `Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`
}

/**
 * 检查源路径和目标路径的合法性（异步）
 * @param src - 源路径
 * @param dest - 目标路径
 * @param funcName - 操作名称（'copy' 或 'move'）
 * @param opts - 配置选项
 */
const checkPaths = async (
  src: string,
  dest: string,
  funcName: string,
  opts: CopyOptions | MoveOptions
): Promise<PathStats> => {
  const { srcStat, destStat } = await getStats(src, dest, opts)

  if (destStat) {
    if (areIdentical(srcStat, destStat)) {
      const srcBaseName = path.basename(src)
      const destBaseName = path.basename(dest)
      if (
        funcName === 'move' &&
        srcBaseName !== destBaseName &&
        srcBaseName.toLowerCase() === destBaseName.toLowerCase()
      ) {
        return { srcStat, destStat, isChangingCase: true }
      }
      throw new Error('Source and destination must not be the same.')
    }
    if (srcStat.isDirectory() && !destStat.isDirectory()) {
      throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`)
    }
    if (!srcStat.isDirectory() && destStat.isDirectory()) {
      throw new Error(`Cannot overwrite directory '${dest}' with non-directory '${src}'.`)
    }
  }

  if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
    throw new Error(errMsg(src, dest, funcName))
  }

  return { srcStat, destStat }
}

/**
 * 检查源路径和目标路径的合法性（同步）
 * @param src - 源路径
 * @param dest - 目标路径
 * @param funcName - 操作名称（'copy' 或 'move'）
 * @param opts - 配置选项
 */
const checkPathsSync = (
  src: string,
  dest: string,
  funcName: string,
  opts: CopyOptions | MoveOptions
): PathStats => {
  const { srcStat, destStat } = getStatsSync(src, dest, opts)

  if (destStat) {
    if (areIdentical(srcStat, destStat)) {
      const srcBaseName = path.basename(src)
      const destBaseName = path.basename(dest)
      if (
        funcName === 'move' &&
        srcBaseName !== destBaseName &&
        srcBaseName.toLowerCase() === destBaseName.toLowerCase()
      ) {
        return { srcStat, destStat, isChangingCase: true }
      }
      throw new Error('Source and destination must not be the same.')
    }
    if (srcStat.isDirectory() && !destStat.isDirectory()) {
      throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`)
    }
    if (!srcStat.isDirectory() && destStat.isDirectory()) {
      throw new Error(`Cannot overwrite directory '${dest}' with non-directory '${src}'.`)
    }
  }

  if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
    throw new Error(errMsg(src, dest, funcName))
  }

  return { srcStat, destStat }
}

/**
 * 递归检查目标路径的父目录是否是源路径的子目录（异步）
 * @param src - 源路径
 * @param srcStat - 源文件状态
 * @param dest - 目标路径
 * @param funcName - 操作名称
 */
const checkParentPaths = async (
  src: string,
  srcStat: fs.BigIntStats,
  dest: string,
  funcName: string
): Promise<void> => {
  const srcParent = path.resolve(path.dirname(src))
  const destParent = path.resolve(path.dirname(dest))

  if (destParent === srcParent || destParent === path.parse(destParent).root) return

  let destStat: fs.BigIntStats
  try {
    destStat = await fsPromises.stat(destParent, { bigint: true })
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') return
    throw err
  }

  if (areIdentical(srcStat, destStat)) {
    throw new Error(errMsg(src, dest, funcName))
  }

  return checkParentPaths(src, srcStat, destParent, funcName)
}

/**
 * 递归检查目标路径的父目录是否是源路径的子目录（同步）
 * @param src - 源路径
 * @param srcStat - 源文件状态
 * @param dest - 目标路径
 * @param funcName - 操作名称
 */
const checkParentPathsSync = (
  src: string,
  srcStat: fs.BigIntStats,
  dest: string,
  funcName: string
): void => {
  const srcParent = path.resolve(path.dirname(src))
  const destParent = path.resolve(path.dirname(dest))

  if (destParent === srcParent || destParent === path.parse(destParent).root) return

  let destStat: fs.BigIntStats
  try {
    destStat = fs.statSync(destParent, { bigint: true })
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') return
    throw err
  }

  if (areIdentical(srcStat, destStat)) {
    throw new Error(errMsg(src, dest, funcName))
  }

  return checkParentPathsSync(src, srcStat, destParent, funcName)
}

export default {
  checkPaths,
  checkPathsSync,
  checkParentPaths,
  checkParentPathsSync,
  isSrcSubdir,
  areIdentical,
}
