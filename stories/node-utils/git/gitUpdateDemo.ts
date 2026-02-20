import gitUpdate from '../../../packages/node-utils/src/git/gitUpdate'

const gitUpdateDemo = async () => {
  // git add、commit、push 三连
  const result = await gitUpdate('feat: 新增功能')
  console.log('执行结果:', result)
  // 输出: [true, true, true] 表示三个命令都执行成功
}

export default gitUpdateDemo
