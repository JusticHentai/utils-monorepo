import fs from 'node:fs'
import fsPromises from 'node:fs/promises'

/**
 * 设置文件的访问时间和修改时间（毫秒精度，异步）
 * @param filePath - 文件路径
 * @param atime - 访问时间
 * @param mtime - 修改时间
 */
const utimesMillis = async (
  filePath: string,
  atime: Date | number,
  mtime: Date | number
): Promise<void> => {
  const fd = await fsPromises.open(filePath, 'r+')

  let closeErr: Error | null = null

  try {
    await fd.utimes(atime, mtime)
  } finally {
    try {
      await fd.close()
    } catch (e) {
      closeErr = e as Error
    }
  }

  if (closeErr) {
    throw closeErr
  }
}

/**
 * 设置文件的访问时间和修改时间（毫秒精度，同步）
 * @param filePath - 文件路径
 * @param atime - 访问时间
 * @param mtime - 修改时间
 */
const utimesMillisSync = (
  filePath: string,
  atime: Date | number,
  mtime: Date | number
): void => {
  const fd = fs.openSync(filePath, 'r+')
  fs.futimesSync(fd, atime, mtime)
  fs.closeSync(fd)
}

export { utimesMillis, utimesMillisSync }
