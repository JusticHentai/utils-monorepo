import { gitUpdate } from '@justichentai/node-utils'

const u = async (message?: string) => {
  await gitUpdate(message || '普通更新')
}

export default u
