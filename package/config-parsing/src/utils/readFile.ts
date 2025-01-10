import fs from 'fs-extra'

/**
 * 读取文件
 * @param dirname
 */
export function readFile(dirname: string): Promise<any> {
  return new Promise((resolve) => {
    fs.readFile(dirname, 'utf-8', (err: Error, res) => {
      if (err) {
        console.error(err)
      }

      resolve(res)
    })
  })
}
