import type { WriteJsonOptions } from '@/fs-utils'
import { outputFile, outputFileSync } from '@/fs-outputFile'
import { stringify } from '@/fs-writeJson'

/**
 * 输出 JSON 文件（异步）
 *
 * 与 writeJson 类似，但如果目录不存在则会创建它。
 *
 * @param file - JSON 文件路径
 * @param data - 要写入的数据
 * @param options - 写入选项
 *
 * @example
 * ```ts
 * import outputJson from '@justichentai/node-utils/fs-outputJson'
 *
 * await outputJson('/tmp/this/path/does/not/exist/file.json', { name: 'JP' })
 * ```
 */
const outputJson = async (
  file: string,
  data: unknown,
  options: WriteJsonOptions = {}
): Promise<void> => {
  const str = stringify(data, options)
  const { encoding = 'utf-8' } = options

  await outputFile(file, str, encoding)
}

/**
 * 输出 JSON 文件（同步）
 *
 * @param file - JSON 文件路径
 * @param data - 要写入的数据
 * @param options - 写入选项
 *
 * @example
 * ```ts
 * import { outputJsonSync } from '@justichentai/node-utils/fs-outputJson'
 *
 * outputJsonSync('/tmp/this/path/does/not/exist/file.json', { name: 'JP' })
 * ```
 */
const outputJsonSync = (
  file: string,
  data: unknown,
  options: WriteJsonOptions = {}
): void => {
  const str = stringify(data, options)
  const { encoding = 'utf-8' } = options

  outputFileSync(file, str, encoding)
}

// 别名
const outputJSON = outputJson
const outputJSONSync = outputJsonSync

export { outputJson, outputJsonSync, outputJSON, outputJSONSync }
export default outputJson
