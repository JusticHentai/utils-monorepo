import Loading from '@/logger/loading'
import logger from '@/logger/logger'
import fs from 'fs-extra'

/**
 * 将 data 覆盖 dirname 文件的内容
 */
const write = (dirname: string, data: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const loading = new Loading()
    loading.start(`开始写入文件：${dirname}`)

    try {
      fs.writeFile(dirname, data, 'utf-8')
      loading.succeed(`写入目录成功：${dirname}`)
      resolve(true)
    } catch (err) {
      loading.fail(`写入目录失败：${dirname}`)
      logger.error(err)
      resolve(false)
    }
  })
}

export default write
