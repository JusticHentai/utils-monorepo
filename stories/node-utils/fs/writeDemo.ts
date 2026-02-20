import write from '../../../packages/node-utils/src/fs/write'

const writeDemo = async () => {
  // 写入文件内容（覆盖原有内容）
  const result = await write('/path/to/file.txt', 'Hello World')
  console.log('写入结果:', result)
}

export default writeDemo
