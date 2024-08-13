import fs from 'fs-extra'
import path from 'path'

const getLib = async (dirname: string) => {
  const items = await fs.readdir(dirname)

  const res = await Promise.all(
    items.map(async (item) => {
      const itemPath = path.join(dirname, item)
      const state = await fs.stat(itemPath)

      return state.isDirectory() ? item : false
    })
  )

  return res.filter(Boolean)
}

export default getLib
