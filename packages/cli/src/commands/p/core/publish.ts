import { cd, publish } from '@justichentai/node-utils'

const pnpmPublish = async () => {
  await cd('-')
  await publish()
}

export default pnpmPublish
