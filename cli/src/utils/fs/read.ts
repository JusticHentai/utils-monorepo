import fs from 'fs-extra'
import { error } from '../style/chalk'
import Loading from '../style/loading'

/**
 * 读取文件
 * @param dirname
 */
export default function read(dirname: string): Promise<string> {
  return new Promise((resolve) => {
    const loading = new Loading()
    loading.start(`开始读取文件：${dirname}`)

    fs.readFile(dirname, 'utf-8', (err: Error, res) => {
      if (err) {
        loading.fail(`读取文件失败：${dirname}`)
        error(err)
        process.exit(-1)
      }

      loading.succeed(`读取目录成功：${dirname}`)
      console.log('')
      resolve(res)
    })
  })
}
