import fsPromises from 'node:fs/promises'
import fs from 'node:fs'
import type { WriteJsonOptions } from '@/fs-utils'

/**
 * 将数据序列化为 JSON 字符串
 */
const stringify = (data: unknown, options: WriteJsonOptions = {}): string => {
  const { spaces, EOL = '\n', replacer } = options

  const str = JSON.stringify(
    data,
    replacer as (key: string, value: unknown) => unknown,
    spaces
  )

  return str.replace(/\n/g, EOL) + EOL
}

/**
 * 写入 JSON 文件（异步）
 *
 * 将对象写入 JSON 文件。
 *
 * @param file - JSON 文件路径
 * @param data - 要写入的数据
 * @param options - 写入选项
 *
 * @example
 * ```ts
 * import writeJson from '@justichentai/node-utils/fs-writeJson'
 *
 * await writeJson('./package.json', { name: 'fs-extra' })
 *
 * // 带格式化
 * await writeJson('./package.json', { name: 'fs-extra' }, { spaces: 2 })
 * ```
 */
const writeJson = async (
  file: string,
  data: unknown,
  options: WriteJsonOptions = {}
): Promise<void> => {
  const { encoding = 'utf-8', mode, flag } = options
  const str = stringify(data, options)

  await fsPromises.writeFile(file, str, { encoding, mode, flag })
}

/**
 * 写入 JSON 文件（同步）
 *
 * @param file - JSON 文件路径
 * @param data - 要写入的数据
 * @param options - 写入选项
 *
 * @example
 * ```ts
 * import { writeJsonSync } from '@justichentai/node-utils/fs-writeJson'
 *
 * writeJsonSync('./package.json', { name: 'fs-extra' })
 * ```
 */
const writeJsonSync = (
  file: string,
  data: unknown,
  options: WriteJsonOptions = {}
): void => {
  const { encoding = 'utf-8', mode, flag } = options
  const str = stringify(data, options)

  fs.writeFileSync(file, str, { encoding, mode, flag })
}

// 别名
const writeJSON = writeJson
const writeJSONSync = writeJsonSync

export { writeJson, writeJsonSync, writeJSON, writeJSONSync, stringify }
export default writeJson
