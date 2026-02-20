import { action } from 'storybook/actions'
import getNavigationMetrics from '../../../packages/element-utils/src/getNavigationMetrics'

const basicDemo = () => {
  const metrics = getNavigationMetrics()

  if (!metrics) {
    action('getNavigationMetrics')('Navigation Timing 数据不可用')
    return
  }

  action('导航性能指标')({
    '页面完全加载': `${Math.round(metrics.pageLoad)}ms`,
    'DOM Ready': `${Math.round(metrics.domReady)}ms`,
    'TTFB': `${Math.round(metrics.ttfb)}ms`,
    'DNS 查询': `${Math.round(metrics.dns)}ms`,
    'TCP 连接': `${Math.round(metrics.tcp)}ms`,
    'TLS 握手': `${Math.round(metrics.tls)}ms`,
    '内容传输': `${Math.round(metrics.trans)}ms`,
    'DOM 解析': `${Math.round(metrics.domParse)}ms`,
    '重定向': `${Math.round(metrics.redirect)}ms`,
  })
}

export default basicDemo
