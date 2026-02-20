import fsPromises from 'node:fs/promises'
import fs from 'node:fs'
import path from 'node:path'
import type { OutputFileOptions } from '@/fs-utils'
import { mkdirs, mkdirsSync } from '@/fs-ensureDir'
import { pathExists } from '@/fs-pathExists'

/**
 * 输出文件（异步）
 *
 * 与 writeFile 类似（会覆盖），但如果父目录不存在则会创建它。
 *
 * @param file - 文件路径
 * @param data - 要写入的数据
 * @param options - 写入选项
 *
 * @example
 * ```ts
 * import outputFile from '@justichentai/node-utils/fs-outputFile'
 *
 * await outputFile('/tmp/this/path/does/not/exist/file.txt', 'hello!')
 * ```
 */
const outputFile = async (
  file: string,
  data: string | Buffer | Uint8Array,
  options: OutputFileOptions = 'utf-8'
): Promise<void> => {
  const dir = path.dirname(file)

  if (!(await pathExists(dir))) {
    await mkdirs(dir)
  }

  await fsPromises.writeFile(file, data, options)
}

/**
 * 输出文件（同步）
 *
 * @param file - 文件路径
 * @param data - 要写入的数据
 * @param options - 写入选项
 *
 * @example
 * ```ts
 * import { outputFileSync } from '@justichentai/node-utils/fs-outputFile'
 *
 * outputFileSync('/tmp/this/path/does/not/exist/file.txt', 'hello!')
 * ```
 */
const outputFileSync = (
  file: string,
  data: string | Buffer | Uint8Array,
  options?: OutputFileOptions
): void => {
  const dir = path.dirname(file)

  if (!fs.existsSync(dir)) {
    mkdirsSync(dir)
  }

  fs.writeFileSync(file, data, options)
}

export { outputFile, outputFileSync }
export default outputFile
