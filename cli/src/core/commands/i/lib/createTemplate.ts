import copy from '@/utils/fs/copy'

/**
 * 将模板拉到缓存文件夹中 并 cd 进入
 */
const createTemplate = async (name: string) => {
  const targetDir = `packages/${name}`
  const sourceDir = 'packages/utils-template'
  await copy(sourceDir, targetDir)
}

export default createTemplate
