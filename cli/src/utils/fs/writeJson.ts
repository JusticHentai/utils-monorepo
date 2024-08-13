import jsonfile, { JFWriteOptions } from 'jsonfile'
import path from 'path'
import { error } from '../style/chalk'
import Loading from '../style/loading'

/**
 * 将json内容写入文件
 * @param filePath 文件相对路径
 * @param content  内容
 * @param options  选项
 */
export default function jsonWrite(
  filePath: string,
  content: any,
  options?: JFWriteOptions
): Promise<void> {
  return new Promise((resolve) => {
    const fileFullPath = path.resolve(filePath)

    const loading = new Loading()
    loading.start(`正在将内容写入文件：${fileFullPath}`)

    jsonfile.writeFile(
      fileFullPath,
      content,
      options || { spaces: 2 },
      (err) => {
        if (err) {
          loading.fail(`内容写入文件失败：${fileFullPath}`)
          console.log(content)
          error(err)
          process.exit(-1)
        }

        loading.succeed(`内容写入文件成功：${fileFullPath}`)
        console.log()
        resolve()
      }
    )
  })
}
