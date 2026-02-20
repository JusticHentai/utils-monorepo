import fs from 'node:fs'
import path from 'node:path'
import type { MoveOptions } from '@/fs-utils'
import { stat } from '@/fs-utils'
import { copySync } from '@/fs-copy'
import { removeSync } from '@/fs-remove'
import { mkdirpSync } from '@/fs-ensureDir'

/**
 * 检查父目录是否是根目录
 */
const isParentRoot = (dest: string): boolean => {
  const parent = path.dirname(dest)
  const parsedPath = path.parse(parent)
  return parsedPath.root === parent
}

/**
 * 跨设备移动
 */
const moveAcrossDevice = (
  src: string,
  dest: string,
  overwrite: boolean
): void => {
  const opts = {
    overwrite,
    errorOnExist: true,
    preserveTimestamps: true,
  }
  copySync(src, dest, opts)
  removeSync(src)
}

/**
 * 执行重命名
 */
const rename = (src: string, dest: string, overwrite: boolean): void => {
  try {
    fs.renameSync(src, dest)
  } catch (err) {
    const nodeErr = err as NodeJS.ErrnoException
    if (nodeErr.code !== 'EXDEV') throw err
    moveAcrossDevice(src, dest, overwrite)
  }
}

/**
 * 执行重命名操作
 */
const doRename = (
  src: string,
  dest: string,
  overwrite: boolean,
  isChangingCase: boolean
): void => {
  if (isChangingCase) {
    rename(src, dest, overwrite)
    return
  }

  if (overwrite) {
    removeSync(dest)
    rename(src, dest, overwrite)
    return
  }

  if (fs.existsSync(dest)) {
    throw new Error('dest already exists.')
  }

  rename(src, dest, overwrite)
}

/**
 * 同步移动文件或目录
 *
 * 移动文件或目录，即使跨设备也可以。
 *
 * @param src - 源路径
 * @param dest - 目标路径
 * @param options - 配置选项
 *
 * @example
 * ```ts
 * import { moveSync } from '@justichentai/node-utils/fs-move'
 *
 * moveSync('/tmp/file.txt', '/tmp/newdir/file.txt')
 * ```
 */
const moveSync = (src: string, dest: string, opts: MoveOptions = {}): void => {
  const overwrite = opts.overwrite || opts.clobber || false

  const { srcStat, isChangingCase = false } = stat.checkPathsSync(
    src,
    dest,
    'move',
    opts
  )
  stat.checkParentPathsSync(src, srcStat, dest, 'move')

  if (!isParentRoot(dest)) {
    mkdirpSync(path.dirname(dest))
  }

  doRename(src, dest, overwrite, isChangingCase)
}

export default moveSync
