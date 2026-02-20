import { action } from 'storybook/actions'
import performanceMark from '../../../packages/element-utils/src/performanceMark'

const basicDemo = () => {
  const perf = performanceMark()

  // 打标记点
  perf.mark('demo-start')

  // 模拟一些操作
  let sum = 0
  for (let i = 0; i < 100000; i++) {
    sum += i
  }

  perf.mark('demo-end')

  // 获取标记
  const marks = perf.getMarks()

  action('打标记点成功')({
    marks: marks.map((m) => ({
      name: m.name,
      startTime: `${m.startTime.toFixed(2)}ms`,
    })),
    计算结果: sum,
  })
}

export default basicDemo
