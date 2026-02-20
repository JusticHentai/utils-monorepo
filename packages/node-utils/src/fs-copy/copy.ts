import fs from 'node:fs'
import fsPromises from 'node:fs/promises'
import path from 'node:path'
import type { CopyOptions } from '@/fs-utils'
import { stat, utimesMillis, asyncIteratorConcurrentProcess } from '@/fs-utils'
import { mkdirs } from '@/fs-ensureDir'
import { pathExists } from '@/fs-pathExists'

/**
 * 运行过滤函数
 */
const runFilter = async (
  src: string,
  dest: string,
  opts: CopyOptions
): Promise<boolean> => {
  if (!opts.filter) return true
  return opts.filter(src, dest)
}

/**
 * 检查文件是否不可写
 */
const fileIsNotWritable = (srcMode: number): boolean => {
  return (srcMode & 0o200) === 0
}

/**
 * 使文件可写
 */
const makeFileWritable = (dest: string, srcMode: number): Promise<void> => {
  return fsPromises.chmod(dest, srcMode | 0o200)
}

/**
 * 复制文件
 */
const copyFile = async (
  srcStat: fs.Stats,
  src: string,
  dest: string,
  opts: CopyOptions
): Promise<void> => {
  await fsPromises.copyFile(src, dest)

  if (opts.preserveTimestamps) {
    // 确保文件可写，否则 utimes 调用会以 EPERM 失败
    if (fileIsNotWritable(srcStat.mode)) {
      await makeFileWritable(dest, srcStat.mode)
    }

    // 重新读取源文件状态获取准确的时间戳
    const updatedSrcStat = await fsPromises.stat(src)
    await utimesMillis(dest, updatedSrcStat.atime, updatedSrcStat.mtime)
  }

  await fsPromises.chmod(dest, srcStat.mode)
}

/**
 * 处理文件复制
 */
const onFile = async (
  srcStat: fs.Stats,
  destStat: fs.BigIntStats | null,
  src: string,
  dest: string,
  opts: CopyOptions
): Promise<void> => {
  if (!destStat) {
    return copyFile(srcStat, src, dest, opts)
  }

  if (opts.overwrite) {
    await fsPromises.unlink(dest)
    return copyFile(srcStat, src, dest, opts)
  }

  if (opts.errorOnExist) {
    throw new Error(`'${dest}' already exists`)
  }
}

/**
 * 处理目录复制
 */
const onDir = async (
  srcStat: fs.Stats,
  destStat: fs.BigIntStats | null,
  src: string,
  dest: string,
  opts: CopyOptions
): Promise<void> => {
  // 目标目录可能不存在，需要创建
  if (!destStat) {
    await fsPromises.mkdir(dest)
  }

  // 遍历当前目录中的文件并复制
  await asyncIteratorConcurrentProcess(await fsPromises.opendir(src), async (item) => {
    const srcItem = path.join(src, item.name)
    const destItem = path.join(dest, item.name)

    const include = await runFilter(srcItem, destItem, opts)
    // 仅在匹配过滤函数时复制
    if (include) {
      const { destStat } = await stat.checkPaths(srcItem, destItem, 'copy', opts)
      await getStatsAndPerformCopy(destStat, srcItem, destItem, opts)
    }
  })

  if (!destStat) {
    await fsPromises.chmod(dest, srcStat.mode)
  }
}

/**
 * 处理符号链接复制
 */
const onLink = async (
  destStat: fs.BigIntStats | null,
  src: string,
  dest: string,
  opts: CopyOptions
): Promise<void> => {
  let resolvedSrc = await fsPromises.readlink(src)

  if (opts.dereference) {
    resolvedSrc = path.resolve(process.cwd(), resolvedSrc)
  }

  if (!destStat) {
    return fsPromises.symlink(resolvedSrc, dest)
  }

  let resolvedDest: string | null = null
  try {
    resolvedDest = await fsPromises.readlink(dest)
  } catch (e) {
    const err = e as NodeJS.ErrnoException
    // 目标存在且是普通文件或目录
    if (err.code === 'EINVAL' || err.code === 'UNKNOWN') {
      return fsPromises.symlink(resolvedSrc, dest)
    }
    throw e
  }

  if (opts.dereference) {
    resolvedDest = path.resolve(process.cwd(), resolvedDest)
  }

  // 如果两个符号链接指向同一目标，它们仍然是不同的符号链接
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

  // 复制链接
  await fsPromises.unlink(dest)
  return fsPromises.symlink(resolvedSrc, dest)
}

/**
 * 获取文件状态并执行复制
 */
const getStatsAndPerformCopy = async (
  destStat: fs.BigIntStats | null,
  src: string,
  dest: string,
  opts: CopyOptions
): Promise<void> => {
  const statFn = opts.dereference ? fsPromises.stat : fsPromises.lstat
  const srcStat = await statFn(src)

  if (srcStat.isDirectory()) {
    return onDir(srcStat, destStat, src, dest, opts)
  }

  if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) {
    return onFile(srcStat, destStat, src, dest, opts)
  }

  if (srcStat.isSymbolicLink()) {
    return onLink(destStat, src, dest, opts)
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
 * 复制文件或目录（异步）
 *
 * 复制文件或目录，包括子目录和文件。
 *
 * @param src - 源路径。如果是目录，则复制目录内的所有内容
 * @param dest - 目标路径。如果源是文件，则目标不能是目录
 * @param options - 配置选项
 *
 * @example
 * ```ts
 * import copy from '@justichentai/node-utils/fs-copy'
 *
 * // 复制文件
 * await copy('/tmp/myfile', '/tmp/mynewfile')
 *
 * // 复制目录
 * await copy('/tmp/mydir', '/tmp/mynewdir')
 *
 * // 使用过滤函数
 * await copy('/tmp/mydir', '/tmp/mynewdir', {
 *   filter: (src, dest) => !src.includes('node_modules')
 * })
 * ```
 */
const copy = async (
  src: string,
  dest: string,
  opts: CopyOptions = {}
): Promise<void> => {
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
      'fs-extra-WARN0001'
    )
  }

  const { srcStat, destStat } = await stat.checkPaths(src, dest, 'copy', normalizedOpts)
  await stat.checkParentPaths(src, srcStat, dest, 'copy')

  const include = await runFilter(src, dest, normalizedOpts)
  if (!include) return

  // 检查目标父目录是否存在，不存在则创建
  const destParent = path.dirname(dest)
  const dirExists = await pathExists(destParent)
  if (!dirExists) {
    await mkdirs(destParent)
  }

  await getStatsAndPerformCopy(destStat, src, dest, normalizedOpts)
}

export default copy
