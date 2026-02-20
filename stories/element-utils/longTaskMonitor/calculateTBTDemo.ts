import { action } from 'storybook/actions'
import type LongTaskObserver from '../../../packages/element-utils/src/LongTaskMonitor'

/**
 * 计算总阻塞时间 (TBT) 演示
 * TBT 是所有长任务超过 50ms 的部分总和
 */
export const createCalculateTBTDemo = (
  getObserver: () => LongTaskObserver | null
) => {
  return () => {
    const observer = getObserver()

    if (!observer) {
      action('TBT 计算')({
        message: '请先点击"开始监听长任务"按钮',
      })
      return
    }

    // 计算从页面加载到当前时间的 TBT
    const tbt = observer.calculateTBT()

    action('TBT 计算结果')({
      tbt: `${tbt.toFixed(2)}ms`,
      description: 'TBT (Total Blocking Time) 是所有长任务超过 50ms 的部分总和',
      formula: 'TBT = Σ(长任务持续时间 - 50ms)',
      goodThreshold: '< 200ms 为良好',
      needsImprovement: '200-600ms 需要改进',
      poor: '> 600ms 为较差',
    })
  }
}
