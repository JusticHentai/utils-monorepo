import jsonfile from 'jsonfile'
import path from 'path'
import { error } from '../style/chalk'
import Loading from '../style/loading'
import ErrnoException = NodeJS.ErrnoException

/**
 * 读取json文件的内容
 * @param filePath  文件相对路径
 */
export default async function jsonRead(filePath: string): Promise<any> {
  const res = await new Promise((resolve) => {
    const fileFullPath = path.resolve(filePath)

    const loading = new Loading()
    loading.start(`正在读取文件内容：${fileFullPath}`)

    jsonfile.readFile(fileFullPath, (err: ErrnoException | null, obj) => {
      if (err) {
        loading.fail(`读取文件内容失败：${fileFullPath}`)
        error(err)
        process.exit(-1)
      }

      loading.succeed(`读取文件内容成功：${fileFullPath}`)
      resolve(obj)
    })
  })

  console.log()
  return res
}
