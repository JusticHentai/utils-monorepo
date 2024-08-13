import { error } from '@/utils/style/chalk'
import Loading from '@/utils/style/loading'

/**
 * 存储下旧路径
 */
export const oldDir = process.cwd()

/**
 * cd
 */
const cd = async (dirname: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const loading = new Loading()

    loading.start(`开始执行：cd ${dirname}`)

    const dir = dirname === '-' ? oldDir : dirname

    try {
      process.chdir(dir)
    } catch (err) {
      loading.fail(`执行失败：cd ${dirname}`)
      error('检查是否路径拼写错误')
      resolve(false)

      return
    }

    loading.succeed(`执行成功：cd ${dirname}`)
    console.log(`当前路径：${process.cwd()}`)
    console.log('')
    resolve(true)
  })
}

export default cd
