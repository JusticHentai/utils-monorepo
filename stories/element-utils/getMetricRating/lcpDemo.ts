import { action } from 'storybook/actions'
import getMetricRating from '../../../packages/element-utils/src/getMetricRating'
import { METRIC_NAME, METRIC_RATING } from '../../../packages/element-utils/src/getMetricRating/interface'

const lcpDemo = () => {
  // LCP 阈值: good <= 2500ms, poor > 4000ms

  const goodLCP = getMetricRating(METRIC_NAME.LCP, 1500) // 1.5秒，良好
  const needsImprovementLCP = getMetricRating(METRIC_NAME.LCP, 3000) // 3秒，需要改进
  const poorLCP = getMetricRating(METRIC_NAME.LCP, 5000) // 5秒，较差

  action('LCP 1500ms 评级')(goodLCP) // METRIC_RATING.GOOD
  action('LCP 3000ms 评级')(needsImprovementLCP) // METRIC_RATING.NEEDS_IMPROVEMENT
  action('LCP 5000ms 评级')(poorLCP) // METRIC_RATING.POOR

  // 枚举值比较
  action('是否为 Good 评级')(goodLCP === METRIC_RATING.GOOD)
}

export default lcpDemo
