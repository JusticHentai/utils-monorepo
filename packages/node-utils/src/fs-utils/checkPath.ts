import path from 'node:path'

/**
 * 检查路径是否包含 Windows 非法字符
 * @param pth - 要检查的路径
 */
const checkPath = (pth: string): void => {
  if (process.platform === 'win32') {
    const pathHasInvalidWinCharacters = /[<>:"|?*]/.test(
      pth.replace(path.parse(pth).root, '')
    )

    if (pathHasInvalidWinCharacters) {
      const error = new Error(`Path contains invalid characters: ${pth}`) as NodeJS.ErrnoException
      error.code = 'EINVAL'
      throw error
    }
  }
}

export { checkPath }
