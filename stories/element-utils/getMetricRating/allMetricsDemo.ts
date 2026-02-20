import { action } from 'storybook/actions'
import getMetricRating from '../../../packages/element-utils/src/getMetricRating'
import {
  MetricName,
  WEB_VITALS_THRESHOLDS,
} from '../../../packages/element-utils/src/getMetricRating/interface'

const allMetricsDemo = () => {
  // 测试所有指标的评级
  const metrics = [
    { name: MetricName.LCP, value: 2000 },
    { name: MetricName.FID, value: 80 },
    { name: MetricName.CLS, value: 0.08 },
    { name: MetricName.FCP, value: 1500 },
    { name: MetricName.TTFB, value: 600 },
    { name: MetricName.INP, value: 150 },
    { name: MetricName.FP, value: 800 },
  ]

  const results = metrics.map(({ name, value }) => ({
    name,
    value,
    rating: getMetricRating(name, value),
    thresholds: WEB_VITALS_THRESHOLDS[name],
  }))

  action('所有指标评级结果')(results)
}

export default allMetricsDemo
