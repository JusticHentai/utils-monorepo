import md from '../../../packages/node-utils/src/fs/md'

const mdDemo = async () => {
  // 创建目录（如果已存在则不操作）
  const result = await md('/path/to/new/directory')
  console.log('创建目录结果:', result)
}

export default mdDemo
