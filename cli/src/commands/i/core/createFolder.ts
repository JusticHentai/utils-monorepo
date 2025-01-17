import { md, rm } from '@justichentai/node-utils'
import { BASE_PATH } from '../constants'

const createFolder = async (name: string) => {
  const path = `${BASE_PATH}/${name}`

  // 创建文件夹
  const isMdSuccess = await md(path)

  if (!isMdSuccess) {
    await rm(path)
    process.exit()
  }
}

export default createFolder
