import { version } from '@justichentai/node-utils'
import { VERSION } from '../constants'

const upVersion = async (versionInput?: string) => {
  const isSuccess = await version(versionInput || VERSION.PATCH)

  if (!isSuccess) {
    process.exit(0)
  }
}

export default upVersion
