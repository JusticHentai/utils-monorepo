import commandExists from '../../../packages/node-utils/src/command-exists'

const normalDemo = async () => {
  // 检测 git 命令是否存在
  const gitExists = await commandExists('git')
  console.log('git 命令是否存在:', gitExists)

  // 检测 node 命令是否存在
  const nodeExists = await commandExists('node')
  console.log('node 命令是否存在:', nodeExists)

  return { gitExists, nodeExists }
}

export default normalDemo
