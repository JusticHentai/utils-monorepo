import { action } from 'storybook/actions'
import { FpsMonitor } from '../../../packages/element-utils/src/FpsMonitor'

const fpsDemo = () => {
  const monitor = new FpsMonitor()

  const stop = monitor.observe((fps) => {
    const rating = fps >= 55 ? 'good' : fps >= 30 ? 'needs-improvement' : 'poor'
    action(`FPS - ${rating}`)({
      fps,
      description:
        fps >= 55
          ? '流畅'
          : fps >= 30
            ? '轻微卡顿'
            : '严重卡顿',
    })
  })

  action('FPS 监控')('已启动，每秒上报一次帧率')

  // 5秒后停止
  setTimeout(() => {
    stop()
    action('FPS 监控')('已停止')
  }, 5000)
}

export default fpsDemo
