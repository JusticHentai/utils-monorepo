import fs from 'node:fs'
import path from 'node:path'
import type { CopyOptions } from '@/fs-utils'
import { stat, utimesMillisSync } from '@/fs-utils'
import { mkdirsSync } from '@/fs-ensureDir'

/**
 * 检查文件是否不可写
 */
const fileIsNotWritable = (srcMode: number): boolean => {
  return (srcMode & 0o200) === 0
}

/**
 * 设置目标文件权限
 */
const setDestMode = (dest: string, srcMode: number): void => {
  fs.chmodSync(dest, srcMode)
}

/**
 * 使文件可写
 */
const makeFileWritable = (dest: string, srcMode: number): void => {
  setDestMode(dest, srcMode | 0o200)
}

/**
 * 设置目标文件时间戳
 */
const setDestTimestamps = (src: string, dest: string): void => {
  const updatedSrcStat = fs.statSync(src)
  utimesMillisSync(dest, updatedSrcStat.atime, updatedSrcStat.mtime)
}

/**
 * 处理时间戳
 */
const handleTimestamps = (srcMode: number, src: string, dest: string): void => {
  if (fileIsNotWritable(srcMode)) {
    makeFileWritable(dest, srcMode)
  }
  setDestTimestamps(src, dest)
}

/**
 * 复制文件
 */
const copyFile = (
  srcStat: fs.Stats,
  src: string,
  dest: string,
  opts: CopyOptions
): void => {
  fs.copyFileSync(src, dest)
  if (opts.preserveTimestamps) {
    handleTimestamps(srcStat.mode, src, dest)
  }
  setDestMode(dest, srcStat.mode)
}

/**
 * 可能复制文件
 */
const mayCopyFile = (
  srcStat: fs.Stats,
  src: string,
  dest: string,
  opts: CopyOptions
): void => {
  if (opts.overwrite) {
    fs.unlinkSync(dest)
    copyFile(srcStat, src, dest, opts)
  } else if (opts.errorOnExist) {
    throw new Error(`'${dest}' already exists`)
  }
}

/**
 * 处理文件复制
 */
const onFile = (
  srcStat: fs.Stats,
  destStat: fs.BigIntStats | null,
  src: string,
  dest: string,
  opts: CopyOptions
): void => {
  if (!destStat) {
    copyFile(srcStat, src, dest, opts)
    return
  }
  mayCopyFile(srcStat, src, dest, opts)
}

/**
 * 复制目录内容
 */
const copyDir = (src: string, dest: string, opts: CopyOptions): void => {
  const dir = fs.opendirSync(src)

  try {
    let dirent: fs.Dirent | null
    while ((dirent = dir.readSync()) !== null) {
      copyDirItem(dirent.name, src, dest, opts)
    }
  } finally {
    dir.closeSync()
  }
}

/**
 * 复制目录项
 */
const copyDirItem = (
  item: string,
  src: string,
  dest: string,
  opts: CopyOptions
): void => {
  const srcItem = path.join(src, item)
  const destItem = path.join(dest, item)

  if (opts.filter && !opts.filter(srcItem, destItem)) return

  const { destStat } = stat.checkPathsSync(srcItem, destItem, 'copy', opts)
  getStats(destStat, srcItem, destItem, opts)
}

/**
 * 创建目录并复制
 */
const mkDirAndCopy = (
  srcMode: number,
  src: string,
  dest: string,
  opts: CopyOptions
): void => {
  fs.mkdirSync(dest)
  copyDir(src, dest, opts)
  setDestMode(dest, srcMode)
}

/**
 * 处理目录复制
 */
const onDir = (
  srcStat: fs.Stats,
  destStat: fs.BigIntStats | null,
  src: string,
  dest: string,
  opts: CopyOptions
): void => {
  if (!destStat) {
    mkDirAndCopy(srcStat.mode, src, dest, opts)
    return
  }
  copyDir(src, dest, opts)
}

/**
 * 复制符号链接
 */
const copyLink = (resolvedSrc: string, dest: string): void => {
  fs.unlinkSync(dest)
  fs.symlinkSync(resolvedSrc, dest)
}

/**
 * 处理符号链接复制
 */
const onLink = (
  destStat: fs.BigIntStats | null,
  src: string,
  dest: string,
  opts: CopyOptions
): void => {
  let resolvedSrc = fs.readlinkSync(src)

  if (opts.dereference) {
    resolvedSrc = path.resolve(process.cwd(), resolvedSrc)
  }

  if (!destStat) {
    fs.symlinkSync(resolvedSrc, dest)
    return
  }

  let resolvedDest: string
  try {
    resolvedDest = fs.readlinkSync(dest)
  } catch (err) {
    const nodeErr = err as NodeJS.ErrnoException
    if (nodeErr.code === 'EINVAL' || nodeErr.code === 'UNKNOWN') {
      fs.symlinkSync(resolvedSrc, dest)
      return
    }
    throw err
  }

  if (opts.dereference) {
    resolvedDest = path.resolve(process.cwd(), resolvedDest)
  }

  if (resolvedSrc !== resolvedDest) {
    if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
      throw new Error(
        `Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`
      )
    }

    if (stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
      throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`)
    }
  }

  copyLink(resolvedSrc, dest)
}

/**
 * 获取文件状态并执行复制
 */
const getStats = (
  destStat: fs.BigIntStats | null,
  src: string,
  dest: string,
  opts: CopyOptions
): void => {
  const statSync = opts.dereference ? fs.statSync : fs.lstatSync
  const srcStat = statSync(src)

  if (srcStat.isDirectory()) {
    onDir(srcStat, destStat, src, dest, opts)
    return
  }

  if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) {
    onFile(srcStat, destStat, src, dest, opts)
    return
  }

  if (srcStat.isSymbolicLink()) {
    onLink(destStat, src, dest, opts)
    return
  }

  if (srcStat.isSocket()) {
    throw new Error(`Cannot copy a socket file: ${src}`)
  }

  if (srcStat.isFIFO()) {
    throw new Error(`Cannot copy a FIFO pipe: ${src}`)
  }

  throw new Error(`Unknown file: ${src}`)
}

/**
 * 同步复制文件或目录
 *
 * 复制文件或目录，包括子目录和文件。
 *
 * @param src - 源路径。如果是目录，则复制目录内的所有内容
 * @param dest - 目标路径。如果源是文件，则目标不能是目录
 * @param options - 配置选项
 *
 * @example
 * ```ts
 * import { copySync } from '@justichentai/node-utils/fs-copy'
 *
 * // 复制文件
 * copySync('/tmp/myfile', '/tmp/mynewfile')
 *
 * // 复制目录
 * copySync('/tmp/mydir', '/tmp/mynewdir')
 * ```
 */
const copySync = (src: string, dest: string, opts: CopyOptions = {}): void => {
  // 处理兼容性选项
  const overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber !== false
  const normalizedOpts: CopyOptions = {
    ...opts,
    overwrite,
  }

  // 在 32 位 node 上使用 preserveTimestamps 时发出警告
  if (normalizedOpts.preserveTimestamps && process.arch === 'ia32') {
    process.emitWarning(
      'Using the preserveTimestamps option in 32-bit node is not recommended;\n\n' +
        '\tsee https://github.com/jprichardson/node-fs-extra/issues/269',
      'Warning',
      'fs-extra-WARN0002'
    )
  }

  const { srcStat, destStat } = stat.checkPathsSync(src, dest, 'copy', normalizedOpts)
  stat.checkParentPathsSync(src, srcStat, dest, 'copy')

  if (normalizedOpts.filter && !normalizedOpts.filter(src, dest)) return

  const destParent = path.dirname(dest)
  if (!fs.existsSync(destParent)) {
    mkdirsSync(destParent)
  }

  getStats(destStat, src, dest, normalizedOpts)
}

export default copySync
