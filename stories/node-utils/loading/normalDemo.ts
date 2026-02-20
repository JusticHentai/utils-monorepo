import Loading from '../../../packages/node-utils/src/logger/loading'

const normalDemo = async () => {
  const loading = new Loading()

  // 开始 loading
  loading.start('正在处理...')

  // 模拟异步操作
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // 成功状态
  loading.succeed('处理成功')

  // 或者失败状态
  // loading.fail('处理失败')

  // 或者直接停止
  // loading.stop()
}

export default normalDemo
