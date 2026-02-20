import { action } from 'storybook/actions'
import JankMonitor from '../../../packages/element-utils/src/JankMonitor'

const jankDemo = () => {
  const monitor = new JankMonitor({ threshold: 100 })

  const stop = monitor.observe((jankInfo) => {
    action('卡顿检测')({
      duration: `${Math.round(jankInfo.duration)}ms`,
      timestamp: new Date(jankInfo.timestamp).toLocaleTimeString(),
      description: `帧间隔超过 100ms，发生卡顿`,
    })
  })

  action('卡顿监控')('已启动（阈值 100ms），尝试执行重计算触发卡顿')

  // 模拟卡顿：阻塞主线程
  setTimeout(() => {
    action('模拟卡顿')('开始执行 200ms 的同步计算...')
    const start = performance.now()
    while (performance.now() - start < 200) {
      // 阻塞主线程
    }
    action('模拟卡顿')('计算完成')
  }, 1000)

  // 5秒后停止
  setTimeout(() => {
    stop()
    action('卡顿监控')('已停止')
  }, 5000)
}

export default jankDemo
