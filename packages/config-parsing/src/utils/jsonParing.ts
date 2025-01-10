import { readFile } from './readFile'

/**
 * 解析 json 文件
 * @param filePath 文件相对运行目录的路径
 */
export default async function jsonParing(filePath: string) {
  return await readFile(filePath)
}
