import exists from '../../../packages/node-utils/src/fs/exists'

const existsDemo = async () => {
  // 检测目录是否存在
  const isExists = await exists('/path/to/directory')
  console.log('目录是否存在:', isExists)
}

export default existsDemo
