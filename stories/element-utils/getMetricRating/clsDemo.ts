import { action } from 'storybook/actions'
import getMetricRating from '../../../packages/element-utils/src/getMetricRating'
import { MetricName, MetricRating } from '../../../packages/element-utils/src/getMetricRating/interface'

const clsDemo = () => {
  // CLS 阈值: good <= 0.1, poor > 0.25

  const goodCLS = getMetricRating(MetricName.CLS, 0.05) // 良好
  const needsImprovementCLS = getMetricRating(MetricName.CLS, 0.15) // 需要改进
  const poorCLS = getMetricRating(MetricName.CLS, 0.5) // 较差

  action('CLS 0.05 评级')(goodCLS) // MetricRating.Good
  action('CLS 0.15 评级')(needsImprovementCLS) // MetricRating.NeedsImprovement
  action('CLS 0.5 评级')(poorCLS) // MetricRating.Poor

  // 枚举值比较
  action('是否为 Poor 评级')(poorCLS === MetricRating.Poor)
}

export default clsDemo
