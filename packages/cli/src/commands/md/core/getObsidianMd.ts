import { isEmptyObject, walk } from '@justichentai/js-utils'
import { getFileWithExt, logger, read } from '@justichentai/node-utils'
import { MD_EXT } from '../constants'

const getObsidianMd = async (rootPath: string) => {
  const fileMap = await getFileWithExt(rootPath, MD_EXT)

  if (isEmptyObject(fileMap)) {
    logger.error('获取 obsidian 文件失败')
    process.exit()
  }

  await walk(fileMap, async ({ value }) => {
    const mdStr = await read(value)

    return mdStr
  })

  logger.info('获取 obsidian 文件成功')

  return fileMap
}

export default getObsidianMd
