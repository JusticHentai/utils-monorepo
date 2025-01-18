import { read, write } from '@justichentai/node-utils'
import { BASE_PATH, INDEX_TS_PATH } from '../constants'

const setIndexTs = async (name: string) => {
  const path = `${BASE_PATH}/${name}/${INDEX_TS_PATH}`

  const info = await read(path)

  if (!info) {
    process.exit()
  }

  const reg = /test/gi
  const newInfo = info.replace(reg, name)

  const writeRes = await write(path, newInfo)

  if (!writeRes) {
    process.exit()
  }
}

export default setIndexTs
