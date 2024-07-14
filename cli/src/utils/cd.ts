import { error } from './style/chalk'
import Loading from './style/loading'

/**
 * 存储下旧路径
 */
export const oldDir = process.cwd()

/**
 * cd
 * cd - 时回复路径
 * @param dirname
 */
export default function cd(dirname: string) {
  const loading = new Loading()

  loading.start(`开始执行：cd ${dirname}`)

  const dir = dirname === '-' ? oldDir : dirname

  try {
    process.chdir(dir)
  } catch (err) {
    loading.fail(`执行失败：cd ${dirname}`)
    error('检查是否路径拼写错误')
    process.exit(-1)
  }

  loading.succeed(`执行成功：cd ${dirname}`)
  console.log(`当前路径：${process.cwd()}`)
  console.log('')
}
