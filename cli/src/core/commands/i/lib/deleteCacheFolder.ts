import cd from '@/utils/fs/cd'
import rm from '@/utils/fs/rm'

/**
 * 删除缓存文件并 cd 回原先位置
 */
const deleteCacheFolder = async () => {
  await cd('../..')

  const cacheDirname = './utils-cache'

  await rm(cacheDirname)
}

export default deleteCacheFolder
