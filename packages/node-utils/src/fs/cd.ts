import logger from '@/logger/logger'

const originPath = process.cwd()

const cd = async (dirname: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const dir = dirname === '-' ? originPath : dirname

    try {
      process.chdir(dir)

      logger.info(`执行: cd ${dirname} | 当前路径：${process.cwd()}`)

      resolve(true)
    } catch (err) {
      logger.error(`执行: cd ${dirname} 失败`)
      logger.error(err)

      resolve(false)
    }
  })
}

export default cd
