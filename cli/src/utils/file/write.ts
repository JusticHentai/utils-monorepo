import fs from 'fs-extra'
import { error } from '../style/chalk'
import Loading from '../style/loading'

/**
 * 写入文件 默认覆盖
 * @param dirname
 * @param data
 */
export default function write(dirname: string, data: any): Promise<void> {
  return new Promise((resolve) => {
    const loading = new Loading()
    loading.start(`开始写入文件：${dirname}`)

    fs.writeFile(
      dirname,
      data,
      { encoding: 'utf8', flag: 'w' },
      (err: Error) => {
        if (!err) {
          return
        }

        loading.fail(`写入文件失败：${dirname}`)
        error(err)
        process.exit(-1)
      }
    )

    loading.succeed(`写入文件成功：${dirname}`)
    console.log('')
    resolve()
  })
}
