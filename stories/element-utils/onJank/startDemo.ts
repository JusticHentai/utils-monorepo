import { action } from 'storybook/actions'
import onJank from '../../../packages/element-utils/src/onJank'

export const createStartDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    // 如果已经在监听，先停止
    const prevStopFn = getStopFn()
    if (prevStopFn) {
      prevStopFn()
    }

    const statusEl = document.getElementById('status')

    // 开始监听卡顿
    const stopFn = onJank(
      (jank) => {
        action('检测到卡顿')({
          duration: `${jank.duration.toFixed(2)}ms`,
          timestamp: new Date(jank.timestamp).toISOString(),
        })

        // 更新状态显示
        if (statusEl) {
          statusEl.textContent = `检测到卡顿: ${jank.duration.toFixed(0)}ms`
          statusEl.style.background =
            'linear-gradient(135deg, #ff4d4f 0%, #ff7875 100%)'
          setTimeout(() => {
            statusEl.textContent = '监听中...'
            statusEl.style.background =
              'linear-gradient(135deg, #52c41a 0%, #73d13d 100%)'
          }, 1000)
        }
      },
      { threshold: 100 }
    )

    setStopFn(stopFn)

    // 更新状态显示
    if (statusEl) {
      statusEl.textContent = '监听中...'
      statusEl.style.background =
        'linear-gradient(135deg, #52c41a 0%, #73d13d 100%)'
    }

    action('开始监听')('阈值: 100ms')
  }
}
