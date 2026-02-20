import { execaSync, execaCommandSync } from '../../../packages/node-utils/src/execa'

/**
 * 同步执行演示
 *
 * execaSync 和 execaCommandSync 用于同步执行命令
 * 适用于不需要异步处理的简单场景
 */
const syncDemo = () => {
  // execaSync - 基本同步执行
  const result = execaSync('echo', ['hello', 'sync'])
  console.log('execaSync 结果:', result.stdout) // 'hello sync'
  console.log('退出码:', result.exitCode) // 0

  // execaCommandSync - 命令字符串同步执行
  const commandResult = execaCommandSync('echo hello command sync')
  console.log('execaCommandSync 结果:', commandResult.stdout)

  // 带选项的同步执行
  const optionsResult = execaSync('pwd', [], {
    cwd: '/tmp',
  })
  console.log('带选项的同步执行结果:', optionsResult.stdout)

  return { result, commandResult, optionsResult }
}

export default syncDemo
