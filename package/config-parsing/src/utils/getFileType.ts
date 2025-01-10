/**
 * 获取文件类型
 * @param filePath 文件路径
 */
export default function getFileType(filePath: string): 'ts' | 'js' | 'json' {
  const fileType = filePath.match(/(?<=[.])(ts|js|json)(?=$)/g)

  if (!fileType) {
    console.error('config-parsing: 文件类型应为 ts | js | json')
  }

  return fileType as any
}
