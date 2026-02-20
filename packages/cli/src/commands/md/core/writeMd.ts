import { walk } from '@justichentai/js-utils'
import { exists, logger, write } from '@justichentai/node-utils'
import path from 'path'
import { README_PATH, ROOT } from '../constants'

const writeMd = async (obj: Record<string, any>) => {
  await walk(obj, async ({ key, value, parent }) => {
    const prefix = parent.length ? `${parent.join(path.sep)}${path.sep}` : ''
    const filePath = `${prefix}${key}${path.sep}${README_PATH}`
    const isExists = await exists(filePath)

    if (isExists) {
      await write(filePath, value)
      return
    }

    if (key !== ROOT) {
      return
    }

    const isRootExist = await exists(README_PATH)

    if (!isRootExist) {
      return
    }

    await write(README_PATH, value)
  })

  logger.info('md 同步成功')
}

export default writeMd
