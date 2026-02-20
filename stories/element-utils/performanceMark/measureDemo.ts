import { action } from 'storybook/actions'
import performanceMark from '../../../packages/element-utils/src/performanceMark'

const measureDemo = () => {
  const perf = performanceMark()

  // 打开始标记
  perf.mark('fetch-start')

  // 模拟异步操作
  setTimeout(() => {
    perf.mark('fetch-end')

    // 测量两个标记之间的耗时
    const result = perf.measure('fetch-duration', 'fetch-start', 'fetch-end')

    if (result) {
      action('测量耗时成功')({
        名称: result.name,
        耗时: `${result.duration.toFixed(2)}ms`,
        开始时间: `${result.startTime.toFixed(2)}ms`,
        结束时间: `${result.endTime.toFixed(2)}ms`,
      })
    }

    // 获取所有测量记录
    const measures = perf.getMeasures()
    action('所有测量记录')(
      measures.map((m) => ({
        name: m.name,
        duration: `${m.duration.toFixed(2)}ms`,
      }))
    )
  }, 100)

  action('开始异步操作')('等待 100ms...')
}

export default measureDemo
