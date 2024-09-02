import fs from 'fs-extra'
import Loading from '../style/loading'

/**
 * 写入文件
 */
const write = (dirname: string, data: string): Promise<void> => {
  return new Promise((resolve) => {
    const loading = new Loading()
    loading.start(`开始写入文件：${dirname}`)

    fs.writeFile(dirname, data, 'utf-8')

    loading.succeed(`写入目录成功：${dirname}`)
    console.log('')
    resolve()
  })
}

export default write
