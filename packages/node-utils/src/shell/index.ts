import { isArray } from '@justichentai/js-utils'
import shellExec, { Result } from './shell'

const shell = async (command: string | string[]) => {
  if (!isArray(command)) {
    return await shellExec(command)
  }

  const res: Result[] = []

  for (const item of command) {
    const currentRes = await shellExec(item)
    res.push(currentRes)
  }

  return res
}

export default shell
