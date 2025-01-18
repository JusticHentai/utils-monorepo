import Loading from '@/logger/loading'
import fs from 'fs-extra'
import path from 'path'

const getFileWithExt = async (dir: string, extName: string) => {
  const loading = new Loading()

  loading.start(`获取 ${dir} 文件夹下的 ${extName} 文件`)

  const res: Record<string, any> = {}

  const files = await fs.readdir(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stats = await fs.stat(filePath)
    const pathParse = path.parse(file)

    if (stats.isFile() && pathParse.ext === extName) {
      res[pathParse.name] = filePath
    }

    if (stats.isDirectory()) {
      const subDirFiles = await getFileWithExt(filePath, extName)
      res[pathParse.name] = subDirFiles
    }
  }

  loading.succeed(`成功获取 ${dir} 文件夹下的 ${extName} 文件`)

  return res
}

export default getFileWithExt
