import Loading from '@/logger/loading'
import logger from '@/logger/logger'
import fs from 'fs-extra'

/**
 * 复制 sourcePath 到 targetPath
 */
const copy = async (
  sourcePath: string,
  targetPath: string
): Promise<boolean> => {
  const loading = new Loading()

  loading.start(`复制 ${sourcePath} 到 ${targetPath}`)

  try {
    await fs.copy(sourcePath, targetPath, {
      filter: (path) => {
        let isIgnore = false

        for (const ignoreFile of ['node_modules', 'dist']) {
          if (!path.includes(ignoreFile)) {
            continue
          }

          isIgnore = true
          break
        }

        return !isIgnore
      },
    })

    loading.succeed(`成功复制 ${sourcePath} 到 ${targetPath}`)

    return true
  } catch (err) {
    loading.fail(`失败复制 ${sourcePath} 到 ${targetPath}`)
    logger.error(err)

    return false
  }
}

export default copy
