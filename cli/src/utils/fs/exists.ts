import fs from 'fs-extra'
import { error } from '../style/chalk'
import Loading from '../style/loading'

/**
 * 检测目录是否存在
 * @param dirname 目录相对路径
 */
export default function exists(dirname: string): Promise<boolean> {
  return new Promise((resolve) => {
    const loading = new Loading()
    loading.start(`开始检测目录是否存在：${dirname}`)

    fs.pathExists(dirname, (err: Error, pathResultExists: boolean) => {
      if (err) {
        loading.fail(`检测目录是否存在失败：${dirname}`)
        error(err)
        process.exit(-1)
      }

      if (!pathResultExists) {
        loading.succeed(`目录不存在：${dirname}`)
        resolve(false)
        return
      }

      loading.succeed(`确认目录存在：${dirname}`)
      console.log()

      resolve(true)
    })
  })
}
