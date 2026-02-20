import { $ } from '../../../packages/node-utils/src/execa'

/**
 * $ 脚本语法演示
 *
 * $ 是一个便捷的脚本执行器，默认:
 * - 继承 stdin
 * - 优先使用本地安装的二进制文件
 */
const dollarDemo = async () => {
  // 模板字符串语法
  const { stdout } = await $`echo hello from dollar syntax`
  console.log('$ 语法结果:', stdout)

  // 同步执行
  const syncResult = $.sync`echo sync hello`
  console.log('同步执行结果:', syncResult.stdout)

  // 绑定选项
  const $verbose = $({ verbose: 'full' })
  const verboseResult = await $verbose`echo verbose mode`
  console.log('verbose 模式结果:', verboseResult.stdout)

  // 变量插值
  const name = 'world'
  const interpolated = await $`echo hello ${name}`
  console.log('变量插值结果:', interpolated.stdout)

  return { stdout, syncResult, verboseResult, interpolated }
}

export default dollarDemo
