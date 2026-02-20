import fsPromises from 'node:fs/promises'
import fs from 'node:fs'
import type { ReadJsonOptions } from '@/fs-utils'

/**
 * 读取 JSON 文件（异步）
 *
 * 读取 JSON 文件并解析为对象。
 *
 * @param file - JSON 文件路径
 * @param options - 读取选项
 * @returns 解析后的 JSON 对象
 *
 * @example
 * ```ts
 * import readJson from '@justichentai/node-utils/fs-readJson'
 *
 * const data = await readJson('./package.json')
 * console.log(data.version)
 * ```
 */
const readJson = async <T = unknown>(
  file: string,
  options: ReadJsonOptions = {}
): Promise<T | null> => {
  const { encoding = 'utf-8', throws = true, reviver } = options

  try {
    const content = await fsPromises.readFile(file, { encoding })
    return JSON.parse(content, reviver) as T
  } catch (err) {
    if (!throws && err instanceof SyntaxError) {
      return null
    }
    throw err
  }
}

/**
 * 读取 JSON 文件（同步）
 *
 * @param file - JSON 文件路径
 * @param options - 读取选项
 * @returns 解析后的 JSON 对象
 *
 * @example
 * ```ts
 * import { readJsonSync } from '@justichentai/node-utils/fs-readJson'
 *
 * const data = readJsonSync('./package.json')
 * console.log(data.version)
 * ```
 */
const readJsonSync = <T = unknown>(
  file: string,
  options: ReadJsonOptions = {}
): T | null => {
  const { encoding = 'utf-8', throws = true, reviver } = options

  try {
    const content = fs.readFileSync(file, { encoding })
    return JSON.parse(content, reviver) as T
  } catch (err) {
    if (!throws && err instanceof SyntaxError) {
      return null
    }
    throw err
  }
}

// 别名
const readJSON = readJson
const readJSONSync = readJsonSync

export { readJson, readJsonSync, readJSON, readJSONSync }
export default readJson
