import backup from '@/utils/backup'
import cd from '@/utils/fs/cd'
import rm from '@/utils/fs/rm'
import shell from '@/utils/shell'

/**
 * 将模板拉到缓存文件夹中 并 cd 进入
 */
const createTemplate = async (name: string) => {
  await shell('gh repo clone JusticHentai/utils-template')

  const cdRes = await cd('utils-template')

  if (!cdRes) {
    backup.exe()
  }

  backup.push(async () => {
    await cd('..')
  })

  const res = await rm('.git')

  if (!res) {
    backup.exe()
  }
}

export default createTemplate
