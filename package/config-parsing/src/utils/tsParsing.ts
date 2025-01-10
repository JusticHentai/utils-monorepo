import path from 'path'
import dynamicImport from './dynamicImport'
import rm from './removeFile'
import shell from './shell'

/**
 * 解析 ts 文件
 * @param filePath 文件相对运行目录的路径
 */
export default async function tsParing(filePath: string) {
  const command = [`tsc ${filePath} --target esnext`]

  await shell(command)

  const newFilePath = filePath.replace(/(?<=[.])ts$/g, 'js')

  const prefix = process.platform === 'win32' ? 'file:///' : ''

  const res = await dynamicImport(`${prefix}${path.resolve(newFilePath)}`)

  await rm(newFilePath)

  return res.default
}
