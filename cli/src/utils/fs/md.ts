import { error } from '@/utils/style/chalk'
import Loading from '@/utils/style/loading'
import fs from 'fs-extra'

/**
 * 创建对应目录 有就不管
 */
export default function md(dirname: string): Promise<boolean> {
  return new Promise((resolve) => {
    const loading = new Loading()
    loading.start(`开始创建目录：${dirname}`)

    fs.ensureDir(dirname, (err) => {
      if (err) {
        loading.fail(`创建目录失败：${dirname}`)
        error(err)

        resolve(false)
        return
      }

      loading.succeed(`创建目录成功：${dirname}`)
      console.log('')

      resolve(true)
    })
  })
}
