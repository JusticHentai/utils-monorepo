import shell from '@/shell'
import { VERSION } from './constants'

const version = async (version: string | VERSION) => {
  return await shell(`pnpm version ${version}`)
}

export default version
