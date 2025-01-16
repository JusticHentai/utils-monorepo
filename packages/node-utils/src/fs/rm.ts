import Loading from '@/logger/loading'
import logger from '@/logger/logger'
import fs from 'fs-extra'

/**
 * 删除 dirname 目录
 */
const rm = (dirname: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const loading = new Loading()
    loading.start(`开始删除目录：${dirname}`)

    fs.remove(dirname, (err) => {
      if (err) {
        loading.fail(`删除目录失败：${dirname}`)
        logger.error(err)
        resolve(false)
      } else {
        loading.succeed(`删除目录成功：${dirname}`)
        resolve(true)
      }
    })
  })
}

export default rm
