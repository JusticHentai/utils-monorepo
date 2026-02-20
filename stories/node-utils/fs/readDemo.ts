import read from '../../../packages/node-utils/src/fs/read'

const readDemo = async () => {
  // 读取文件内容
  const content = await read('/path/to/file.txt')
  console.log('文件内容:', content)
}

export default readDemo
