import { execa } from '../../../packages/node-utils/src/execa'

/**
 * 选项配置演示
 *
 * execa 支持丰富的配置选项
 */
const optionsDemo = async () => {
  // 工作目录
  const cwdResult = await execa('pwd', [], {
    cwd: '/tmp',
  })
  console.log('工作目录:', cwdResult.stdout)

  // 环境变量
  const envResult = await execa('node', ['-e', 'console.log(process.env.MY_VAR)'], {
    env: { MY_VAR: 'hello' },
  })
  console.log('环境变量:', envResult.stdout)

  // verbose 日志
  const verboseResult = await execa('echo', ['verbose test'], {
    verbose: 'full', // 'none' | 'short' | 'full'
  })
  console.log('verbose 结果:', verboseResult.stdout)

  // 超时设置
  try {
    await execa('sleep', ['10'], {
      timeout: 1000, // 1秒超时
    })
  } catch (error: any) {
    console.log('超时错误:', error.timedOut) // true
  }

  // 编码设置
  const encodingResult = await execa('echo', ['hello'], {
    encoding: 'utf8', // 默认
    // encoding: 'buffer' // 返回 Buffer
  })
  console.log('编码结果:', encodingResult.stdout)

  // 去除末尾换行符
  const stripResult = await execa('echo', ['hello'], {
    stripFinalNewline: true, // 默认为 true
  })
  console.log('去除换行符结果:', stripResult.stdout)

  // reject 设置
  const noRejectResult = await execa('false', [], {
    reject: false, // 不抛出错误
  })
  console.log('不抛出错误:', noRejectResult.failed) // true

  return { cwdResult, envResult, verboseResult, encodingResult, stripResult, noRejectResult }
}

export default optionsDemo
