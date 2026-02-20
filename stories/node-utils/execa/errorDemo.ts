import { execa, ExecaError } from '../../../packages/node-utils/src/execa'

/**
 * 错误处理演示
 *
 * execa 提供详细的错误信息
 */
const errorDemo = async () => {
  try {
    // 执行不存在的命令
    await execa('nonexistent-command', [])
  } catch (error) {
    if (error instanceof ExecaError) {
      console.log('错误消息:', error.message)
      console.log('简短消息:', error.shortMessage)
      console.log('命令:', error.command)
      console.log('退出码:', error.exitCode)
      console.log('是否失败:', error.failed) // true
    }
  }

  try {
    // 执行返回非零退出码的命令
    await execa('node', ['-e', 'process.exit(1)'])
  } catch (error: any) {
    console.log('退出码错误:', error.exitCode) // 1
    console.log('是否失败:', error.failed) // true
  }

  try {
    // 超时错误
    await execa('sleep', ['10'], { timeout: 100 })
  } catch (error: any) {
    console.log('超时错误:', error.timedOut) // true
    console.log('是否被终止:', error.isTerminated) // true
  }

  // 使用 reject: false 避免抛出错误
  const result = await execa('node', ['-e', 'process.exit(1)'], {
    reject: false,
  })
  console.log('不抛出错误时的结果:')
  console.log('- failed:', result.failed) // true
  console.log('- exitCode:', result.exitCode) // 1

  return { message: '错误处理演示完成' }
}

export default errorDemo
