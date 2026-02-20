import fsPromises from 'node:fs/promises'
import path from 'node:path'
import type { MoveOptions } from '@/fs-utils'
import { stat } from '@/fs-utils'
import { copy } from '@/fs-copy'
import { remove } from '@/fs-remove'
import { mkdirp } from '@/fs-ensureDir'
import { pathExists } from '@/fs-pathExists'

/**
 * 跨设备移动
 */
const moveAcrossDevice = async (
  src: string,
  dest: string,
  overwrite: boolean
): Promise<void> => {
  const opts = {
    overwrite,
    errorOnExist: true,
    preserveTimestamps: true,
  }

  await copy(src, dest, opts)
  await remove(src)
}

/**
 * 执行重命名
 */
const doRename = async (
  src: string,
  dest: string,
  overwrite: boolean,
  isChangingCase: boolean
): Promise<void> => {
  if (!isChangingCase) {
    if (overwrite) {
      await remove(dest)
    } else if (await pathExists(dest)) {
      throw new Error('dest already exists.')
    }
  }

  try {
    await fsPromises.rename(src, dest)
  } catch (err) {
    const nodeErr = err as NodeJS.ErrnoException
    if (nodeErr.code !== 'EXDEV') {
      throw err
    }
    await moveAcrossDevice(src, dest, overwrite)
  }
}

/**
 * 移动文件或目录（异步）
 *
 * 移动文件或目录，即使跨设备也可以。
 *
 * @param src - 源路径
 * @param dest - 目标路径。当 src 是文件时，dest 必须是文件；当 src 是目录时，dest 必须是目录
 * @param options - 配置选项
 *
 * @example
 * ```ts
 * import move from '@justichentai/node-utils/fs-move'
 *
 * await move('/tmp/file.txt', '/tmp/newdir/file.txt')
 *
 * // 使用 overwrite 选项
 * await move('/tmp/somedir', '/tmp/may/exist/somedir', { overwrite: true })
 * ```
 */
const move = async (
  src: string,
  dest: string,
  opts: MoveOptions = {}
): Promise<void> => {
  const overwrite = opts.overwrite || opts.clobber || false

  const { srcStat, isChangingCase = false } = await stat.checkPaths(
    src,
    dest,
    'move',
    opts
  )

  await stat.checkParentPaths(src, srcStat, dest, 'move')

  // 如果 dest 的父目录不是根目录，确保它存在
  const destParent = path.dirname(dest)
  const parsedParentPath = path.parse(destParent)
  if (parsedParentPath.root !== destParent) {
    await mkdirp(destParent)
  }

  await doRename(src, dest, overwrite, isChangingCase)
}

export default move
