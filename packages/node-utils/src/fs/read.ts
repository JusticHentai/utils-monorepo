import Loading from '@/logger/loading'
import logger from '@/logger/logger'
import fs from 'fs-extra'

/**
 * 读取 dirname 文件
 */
const read = (dirname: string): Promise<string> => {
  return new Promise((resolve) => {
    const loading = new Loading()
    loading.start(`开始读取文件：${dirname}`)

    fs.readFile(dirname, 'utf-8', (err, res) => {
      if (err) {
        loading.fail(`读取文件失败：${dirname}`)
        logger.error(err)
        resolve('')
      } else {
        loading.succeed(`读取目录成功：${dirname}`)
        resolve(res)
      }
    })
  })
}

export default read
