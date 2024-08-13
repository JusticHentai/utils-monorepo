import readJson from '@/utils/fs/readJson'
import writeJson from '@/utils/fs/writeJson'

/**
 * 设置 package.json 的一些基础信息
 */
const setPackageJson = async (name: string) => {
  const oldInfo = await readJson('./package.json')

  const setInfo = {
    name: `@justichentai/${name}`,
  }

  const newInfo = { ...oldInfo, ...setInfo }

  await writeJson('./package.json', newInfo)
}

export default setPackageJson
