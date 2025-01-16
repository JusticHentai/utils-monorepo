import Loading from '@/logger/loading'
import logger from '@/logger/logger'
import fs from 'fs-extra'

/**
 * 检测 dirname 是否存在
 */
const exists = (dirname: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const loading = new Loading()
    loading.start(`开始检测目录是否存在：${dirname}`)

    fs.pathExists(dirname, (err, pathResultExists) => {
      if (err) {
        loading.fail(`检测目录是否存在失败：${dirname}`)
        logger.error(err)
        resolve(false)
        return
      }

      if (!pathResultExists) {
        loading.succeed(`目录不存在：${dirname}`)
        resolve(false)
        return
      }

      loading.succeed(`确认目录存在：${dirname}`)
      resolve(true)
    })
  })
}

export default exists
