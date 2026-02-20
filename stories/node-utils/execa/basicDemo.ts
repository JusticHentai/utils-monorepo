import { execa } from '../../../packages/node-utils/src/execa'

/**
 * execa 基本用法演示
 */
const basicDemo = async () => {
  // 基本用法 - 执行命令
  const result = await execa('echo', ['hello', 'world'])
  console.log('stdout:', result.stdout) // 'hello world'
  console.log('exitCode:', result.exitCode) // 0

  // 使用选项
  const resultWithOptions = await execa('ls', ['-la'], {
    cwd: '/tmp',
    env: { NODE_ENV: 'production' },
  })
  console.log('使用选项执行结果:', resultWithOptions.stdout)

  // 模板字符串语法
  const templateResult = await execa`echo hello template`
  console.log('模板字符串结果:', templateResult.stdout)

  return { result, resultWithOptions, templateResult }
}

export default basicDemo
