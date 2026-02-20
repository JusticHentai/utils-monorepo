import fs from 'node:fs'
import fsPromises from 'node:fs/promises'
import type { EnsureDirOptions } from '@/fs-utils'
import { checkPath } from '@/fs-utils'

/**
 * 获取目录权限模式
 */
const getMode = (options?: number | EnsureDirOptions): number => {
  const defaults = { mode: 0o777 }
  if (typeof options === 'number') return options
  return { ...defaults, ...options }.mode
}

/**
 * 确保目录存在（异步）
 *
 * 如果目录结构不存在，则创建它。
 *
 * @param dir - 目录路径
 * @param options - 配置选项，可以是权限模式数字或配置对象
 *
 * @example
 * ```ts
 * import ensureDir from '@justichentai/node-utils/fs-ensureDir'
 *
 * await ensureDir('/tmp/this/path/does/not/exist')
 *
 * // 指定权限模式
 * await ensureDir('/tmp/mydir', 0o2775)
 * ```
 */
const ensureDir = async (
  dir: string,
  options?: number | EnsureDirOptions
): Promise<string | undefined> => {
  checkPath(dir)

  return fsPromises.mkdir(dir, {
    mode: getMode(options),
    recursive: true,
  })
}

/**
 * 确保目录存在（同步）
 *
 * @param dir - 目录路径
 * @param options - 配置选项，可以是权限模式数字或配置对象
 *
 * @example
 * ```ts
 * import { ensureDirSync } from '@justichentai/node-utils/fs-ensureDir'
 *
 * ensureDirSync('/tmp/this/path/does/not/exist')
 * ```
 */
const ensureDirSync = (
  dir: string,
  options?: number | EnsureDirOptions
): string | undefined => {
  checkPath(dir)

  return fs.mkdirSync(dir, {
    mode: getMode(options),
    recursive: true,
  })
}

// 别名
const mkdirs = ensureDir
const mkdirsSync = ensureDirSync
const mkdirp = ensureDir
const mkdirpSync = ensureDirSync

export {
  ensureDir,
  ensureDirSync,
  mkdirs,
  mkdirsSync,
  mkdirp,
  mkdirpSync,
}
export default ensureDir
