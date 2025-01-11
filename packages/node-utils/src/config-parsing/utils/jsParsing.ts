import path from 'path'
import dynamicImport from './dynamicImport'

/**
 * 解析 js 文件
 * @param filePath 文件相对运行目录的路径
 */
export default async function jsParing(filePath: string) {
  const prefix = process.platform === 'win32' ? 'file:///' : ''

  const res = await dynamicImport(`${prefix}${path.resolve(filePath)}`)

  return res.default
}
