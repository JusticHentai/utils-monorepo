import copy from '../../../packages/node-utils/src/fs/copy'

const copyDemo = async () => {
  // 复制文件或目录（自动过滤 node_modules 和 dist）
  const result = await copy('/path/to/source', '/path/to/target')
  console.log('复制结果:', result)
}

export default copyDemo
