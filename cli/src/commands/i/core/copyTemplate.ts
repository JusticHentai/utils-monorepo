import { copy, rm } from '@justichentai/node-utils'
import { BASE_PATH, TEMPLATE_PATH } from '../constants'

const copyTemplate = async (name: string) => {
  const sourcePath = `${BASE_PATH}/${TEMPLATE_PATH}`
  const targetPath = `${BASE_PATH}/${name}`

  const isCopySuccess = await copy(sourcePath, targetPath)

  if (!isCopySuccess) {
    await rm(targetPath)
    process.exit()
  }
}

export default copyTemplate
