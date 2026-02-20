import { logger, read, write } from '@justichentai/node-utils'
import { AUTHOR, BASE_PATH, PACKAGES_PATH } from '../constants'

const setPackageJson = async (name: string) => {
  const path = `${BASE_PATH}/${name}/${PACKAGES_PATH}`

  const jsonStr = await read(path)

  if (!jsonStr) {
    process.exit()
  }

  let sourceInfo
  try {
    sourceInfo = JSON.parse(jsonStr)
  } catch (err) {
    logger.error('package.json 格式错误')
    logger.error(err)
    process.exit()
  }

  const newInfo = {
    name: `${AUTHOR}/${name}`,
    description: name,
  }

  const resInfo = {
    ...sourceInfo,
    ...newInfo,
  }

  const writeRes = await write(path, JSON.stringify(resInfo, null, 2))

  if (!writeRes) {
    process.exit()
  }
}

export default setPackageJson
