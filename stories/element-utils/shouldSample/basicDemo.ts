import { action } from 'storybook/actions'
import shouldSample from '../../../packages/element-utils/src/shouldSample'

const basicDemo = () => {
  // 全量采集
  action('采样率 1.0')(shouldSample(1))

  // 不采集
  action('采样率 0')(shouldSample(0))

  // 50% 采样 - 执行 10 次看命中率
  let hits = 0
  for (let i = 0; i < 10; i++) {
    if (shouldSample(0.5)) hits++
  }
  action('采样率 0.5（10 次测试）')(`命中 ${hits} 次`)
}

export default basicDemo
