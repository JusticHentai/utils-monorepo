import { execaNode } from '../../../packages/node-utils/src/execa'

/**
 * execaNode 演示
 *
 * execaNode 专门用于执行 Node.js 脚本
 * 自动设置 node: true 选项
 */
const nodeDemo = async () => {
  // 执行 Node.js 脚本
  const result = await execaNode('--version')
  console.log('Node.js 版本:', result.stdout)

  // 执行脚本文件（示例）
  // const scriptResult = await execaNode('script.js', ['arg1', 'arg2'])

  // 带选项执行
  const optionsResult = await execaNode('--eval', ['console.log("hello from eval")'], {
    verbose: 'short',
  })
  console.log('eval 执行结果:', optionsResult.stdout)

  // 使用 nodeOptions 传递 Node.js CLI 参数
  const nodeOptionsResult = await execaNode('--version', [], {
    nodeOptions: ['--no-warnings'],
  })
  console.log('带 nodeOptions 的结果:', nodeOptionsResult.stdout)

  return { result, optionsResult, nodeOptionsResult }
}

export default nodeDemo
