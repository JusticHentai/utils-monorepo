import { action } from 'storybook/actions'
import getMetricRating from '../../../packages/element-utils/src/getMetricRating'
import { MetricName, MetricRating } from '../../../packages/element-utils/src/getMetricRating/interface'

const lcpDemo = () => {
  // LCP 阈值: good <= 2500ms, poor > 4000ms

  const goodLCP = getMetricRating(MetricName.LCP, 1500) // 1.5秒，良好
  const needsImprovementLCP = getMetricRating(MetricName.LCP, 3000) // 3秒，需要改进
  const poorLCP = getMetricRating(MetricName.LCP, 5000) // 5秒，较差

  action('LCP 1500ms 评级')(goodLCP) // MetricRating.Good
  action('LCP 3000ms 评级')(needsImprovementLCP) // MetricRating.NeedsImprovement
  action('LCP 5000ms 评级')(poorLCP) // MetricRating.Poor

  // 枚举值比较
  action('是否为 Good 评级')(goodLCP === MetricRating.Good)
}

export default lcpDemo
