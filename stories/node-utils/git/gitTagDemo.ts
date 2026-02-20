import gitTag from '../../../packages/node-utils/src/git/gitTag'

const gitTagDemo = async () => {
  // 创建并推送 git tag
  const result = await gitTag('v1.0.0')
  console.log('是否有失败:', result)
}

export default gitTagDemo
