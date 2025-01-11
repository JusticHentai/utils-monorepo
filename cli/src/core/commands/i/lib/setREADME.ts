import read from '@/utils/fs/read'
import write from '@/utils/fs/write'

/**
 * 设置 readme 基础信息
 */
const setREADME = async (name: string) => {
  const oldMd = await read('README.md')

  const md = oldMd.replace(/utils-template/gi, name)

  await write('README.md', md)
}

export default setREADME
