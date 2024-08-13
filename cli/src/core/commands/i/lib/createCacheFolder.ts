import backup from '@/utils/backup'
import cd from '@/utils/fs/cd'
import md from '@/utils/fs/md'
import rm from '@/utils/fs/rm'

/**
 * 创建缓存文件夹并 cd 进入
 */
const createCacheFolder = async () => {
  const cacheDirname = './utils-cache'

  const res = await md(cacheDirname)

  if (!res) {
    backup.exe()
  }

  backup.push(async () => {
    await rm(cacheDirname)
  })

  const cdRes = await cd(cacheDirname)

  if (!cdRes) {
    backup.exe()
  }

  backup.push(async () => {
    await cd('..')
  })
}

export default createCacheFolder
