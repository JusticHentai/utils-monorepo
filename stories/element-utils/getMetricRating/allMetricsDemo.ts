import { action } from 'storybook/actions'
import getMetricRating from '../../../packages/element-utils/src/getMetricRating'
import {
  METRIC_NAME,
  WEB_VITALS_THRESHOLDS,
} from '../../../packages/element-utils/src/getMetricRating/interface'

const allMetricsDemo = () => {
  // 测试所有指标的评级
  const metrics = [
    { name: METRIC_NAME.LCP, value: 2000 },
    { name: METRIC_NAME.FID, value: 80 },
    { name: METRIC_NAME.CLS, value: 0.08 },
    { name: METRIC_NAME.FCP, value: 1500 },
    { name: METRIC_NAME.TTFB, value: 600 },
    { name: METRIC_NAME.INP, value: 150 },
    { name: METRIC_NAME.FP, value: 800 },
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
