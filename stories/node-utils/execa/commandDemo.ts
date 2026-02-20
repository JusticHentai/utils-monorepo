import { execaCommand, parseCommandString } from '../../../packages/node-utils/src/execa'

/**
 * 命令字符串执行演示
 *
 * execaCommand 可以直接执行命令字符串，自动解析为命令和参数
 * parseCommandString 可以手动解析命令字符串
 */
const commandDemo = async () => {
  // execaCommand - 自动解析命令字符串
  const result = await execaCommand('echo hello world')
  console.log('execaCommand 结果:', result.stdout) // 'hello world'
  // 等同于 execa('echo', ['hello', 'world'])

  // 带引号的参数
  const quotedResult = await execaCommand('echo "hello world"')
  console.log('带引号的参数:', quotedResult.stdout)

  // parseCommandString - 手动解析命令字符串
  const parsed = parseCommandString('git commit -m "initial commit"')
  console.log('解析结果:', parsed)
  // { file: 'git', commandArguments: ['commit', '-m', 'initial commit'] }

  // 带选项的命令执行
  const optionsResult = await execaCommand('ls -la', {
    cwd: '/tmp',
  })
  console.log('带选项的命令执行:', optionsResult.stdout)

  return { result, quotedResult, parsed, optionsResult }
}

export default commandDemo
