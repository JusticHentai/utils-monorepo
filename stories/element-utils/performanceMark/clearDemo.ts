import { action } from 'storybook/actions'
import performanceMark from '../../../packages/element-utils/src/performanceMark'

const clearDemo = () => {
  const perf = performanceMark()

  // 创建一些标记和测量
  perf.mark('test-mark-1')
  perf.mark('test-mark-2')
  perf.measure('test-measure', 'test-mark-1', 'test-mark-2')

  action('创建标记和测量')({
    标记数量: perf.getMarks().length,
    测量数量: perf.getMeasures().length,
  })

  // 清除指定标记
  perf.clearMarks('test-mark-1')
  action('清除 test-mark-1 后')({
    剩余标记: perf.getMarks().map((m) => m.name),
  })

  // 清除所有标记
  perf.clearMarks()
  action('清除所有标记后')({
    剩余标记数量: perf.getMarks().length,
  })

  // 清除所有测量
  perf.clearMeasures()
  action('清除所有测量后')({
    剩余测量数量: perf.getMeasures().length,
  })
}

export default clearDemo
