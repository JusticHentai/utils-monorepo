import shell from '../../../packages/node-utils/src/shell'

const normalDemo = async () => {
  // 执行单个命令
  const singleResult = await shell('echo hello')
  console.log('单个命令执行结果:', singleResult)

  // 执行多个命令
  const multiResult = await shell(['echo hello', 'echo world'])
  console.log('多个命令执行结果:', multiResult)

  return { singleResult, multiResult }
}

export default normalDemo
