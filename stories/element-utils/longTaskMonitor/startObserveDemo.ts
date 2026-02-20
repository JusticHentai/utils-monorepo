import { action } from 'storybook/actions'
import LongTaskObserver from '../../../packages/element-utils/src/LongTaskMonitor'

export const createStartObserveDemo = (
  getObserver: () => LongTaskObserver | null,
  setObserver: (obs: LongTaskObserver) => void
) => {
  return () => {
    // 如果已有观察器，先停止
    const prevObserver = getObserver()
    if (prevObserver) {
      prevObserver.stop()
    }

    // 创建新的观察器实例
    const observer = new LongTaskObserver()

    // 开始监听长任务
    observer.observe(
      (task) => {
        action('检测到长任务')({
          name: task.name,
          duration: `${task.duration.toFixed(2)}ms`,
          startTime: `${task.startTime.toFixed(2)}ms`,
          attribution: task.attribution,
        })
      },
      {
        threshold: 50, // 默认阈值 50ms
        reportExisting: true,
      }
    )

    setObserver(observer)
    action('开始监听')('长任务监听已启动，阈值: 50ms')
  }
}
