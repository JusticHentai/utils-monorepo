import { action } from 'storybook/actions'
import getPaintMetrics from '../../../packages/element-utils/src/getPaintMetrics'

const paintMetricsDemo = () => {
  const metrics = getPaintMetrics()

  if (!metrics) {
    action('绘制指标')('当前环境不支持 Paint Timing API 或数据尚未就绪')
    return
  }

  action('FP (First Paint)')({
    value: `${Math.round(metrics.FP)}ms`,
    rating: metrics.FPRating,
    description: '浏览器首次在屏幕上渲染像素的时间',
  })

  action('FCP (First Contentful Paint)')({
    value: `${Math.round(metrics.FCP)}ms`,
    rating: metrics.FCPRating,
    description: '首次渲染文本、图片、SVG 等内容的时间',
  })

  action('绘制指标说明')('FP 和 FCP 基于 Paint Timing API，从 navigation fetchStart 开始计算')
}

export default paintMetricsDemo
