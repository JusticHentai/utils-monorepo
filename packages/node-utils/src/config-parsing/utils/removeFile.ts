import fs from 'fs-extra'

/**
 * 删除对应目录
 * @param dirname 相对路径
 */
export default function rm(dirname: string): Promise<void> {
  return new Promise((resolve) => {
    fs.remove(dirname, (err: Error) => {
      if (err) {
        console.error('删除目录失败')
      }

      resolve()
    })
  })
}
