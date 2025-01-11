import md from '@/utils/fs/md'

/**
 * 创建缓存文件夹并 cd 进入
 */
const createNewFolder = async (name: string) => {
  const cacheDirname = `packages/${name}`

  await md(cacheDirname)
}

export default createNewFolder
