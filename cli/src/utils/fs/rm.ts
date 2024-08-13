import fs from 'fs-extra'
import { error } from '../style/chalk'
import Loading from '../style/loading'

/**
 * 删除对应目录
 */
export default function rm(dirname: string): Promise<boolean> {
  return new Promise((resolve) => {
    const loading = new Loading()
    loading.start(`开始删除目录：${dirname}`)

    fs.remove(dirname, (err) => {
      if (err) {
        loading.fail(`删除目录失败：${dirname}`)
        error(err)
        resolve(false)
        return
      }

      loading.succeed(`删除目录成功：${dirname}`)
      console.log('')
      resolve(true)
    })
  })
}
