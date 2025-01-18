import { read, write } from '@justichentai/node-utils'
import { AUTHOR, BASE_PATH, README_PATH } from '../constants'

const setReadMe = async (name: string) => {
  const path = `${BASE_PATH}/${name}/${README_PATH}`

  const info = await read(path)

  if (!info) {
    process.exit()
  }

  const reg = /utils-template/i
  const newInfo = info.replace(reg, `${AUTHOR}/${name}`)

  const writeRes = await write(path, newInfo)

  if (!writeRes) {
    process.exit()
  }
}

export default setReadMe
