import fs from 'fs-extra'
import { error } from '../style/chalk'
import Loading from '../style/loading'

/**
 * 创建对应目录 有就不管
 */
export default function md(dirname: string): Promise<void> {
  return new Promise((resolve) => {
    const loading = new Loading()
    loading.start(`开始创建目录：${dirname}`)

    fs.ensureDir(dirname, (err: Error) => {
      if (err) {
        loading.fail(`创建目录失败：${dirname}`)
        error(err)
        process.exit(-1)
      }

      loading.succeed(`创建目录成功：${dirname}`)
      console.log('')
      resolve()
    })
  })
}
