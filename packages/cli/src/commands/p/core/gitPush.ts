import { cd, gitUpdate } from '@justichentai/node-utils'

const gitPush = async () => {
  await cd('../..')
  const isSuccess = await gitUpdate()

  if (!isSuccess) {
    process.exit()
  }
}

export default gitPush
