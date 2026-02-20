import { action } from 'storybook/actions'
import getPaintMetrics from '../../../packages/element-utils/src/getPaintMetrics'

const basicDemo = () => {
  const metrics = getPaintMetrics()

  if (!metrics) {
    action('getPaintMetrics')('Paint Timing 数据不可用')
    return
  }

  action('绘制性能指标')({
    'FP (First Paint)': `${Math.round(metrics.FP)}ms`,
    'FP 评级': metrics.FPRating,
    'FCP (First Contentful Paint)': `${Math.round(metrics.FCP)}ms`,
    'FCP 评级': metrics.FCPRating,
  })
}

export default basicDemo
