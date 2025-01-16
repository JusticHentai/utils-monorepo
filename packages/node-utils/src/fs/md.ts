import Loading from '@/logger/loading'
import logger from '@/logger/logger'
import fs from 'fs-extra'

/**
 * 创建 dirname 文件 有就不管
 */
const md = (dirname: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const loading = new Loading()
    loading.start(`开始创建目录：${dirname}`)

    fs.ensureDir(dirname, (err) => {
      if (err) {
        loading.fail(`创建目录失败：${dirname}`)
        logger.error(err)
        resolve(false)
      } else {
        loading.succeed(`创建目录成功：${dirname}`)
        resolve(true)
      }
    })
  })
}

export default md
