import { action } from 'storybook/actions'
import shouldSample from '../../../packages/element-utils/src/shouldSample'

const shouldSampleDemo = () => {
  // 采样率 1：全量采集
  const results100 = Array.from({ length: 10 }, () => shouldSample(1))
  action('采样率 1（全量）')(results100.every(Boolean) ? '全部命中' : results100)

  // 采样率 0：不采集
  const results0 = Array.from({ length: 10 }, () => shouldSample(0))
  action('采样率 0（不采集）')(results0.every((r) => !r) ? '全部未命中' : results0)

  // 采样率 0.5：约 50% 命中
  const total = 100
  const hits = Array.from({ length: total }, () => shouldSample(0.5)).filter(Boolean).length
  action('采样率 0.5（50%）')({
    total,
    hits,
    hitRate: `${hits}%`,
    description: '基于 Math.random() < sampleRate 判断',
  })

  // 默认值：不传参等于全量采集
  action('默认值（不传参）')(shouldSample() ? '命中（默认 sampleRate=1）' : '未命中')
}

export default shouldSampleDemo
